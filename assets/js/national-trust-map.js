document.addEventListener("DOMContentLoaded", () => {
  const mapElement = document.getElementById("nt-map");
  const summaryElement = document.getElementById("nt-map-summary");

  if (!mapElement) return;

  const visitedCsvPath = mapElement.dataset.visitedCsv;
  const ntCsvPath = mapElement.dataset.ntCsv;

  const map = L.map("nt-map", {
    scrollWheelZoom: false,
  }).setView([52.7, -1.5], 6);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  const markerLayer = L.layerGroup().addTo(map);

  let visitedPlaces = [];
  let ntProperties = [];
  let ntPropertiesLoaded = false;
  let ntPropertiesFailed = false;

  function detectDelimiter(headerLine) {
    const commaCount = (headerLine.match(/,/g) || []).length;
    const tabCount = (headerLine.match(/\t/g) || []).length;
    const semicolonCount = (headerLine.match(/;/g) || []).length;

    if (tabCount > commaCount && tabCount > semicolonCount) return "\t";
    if (semicolonCount > commaCount && semicolonCount > tabCount) return ";";
    return ",";
  }

  function parseCSV(text) {
    const firstLine = text.split(/\r?\n/)[0];
    const delimiter = detectDelimiter(firstLine);

    const rows = [];
    let row = [];
    let current = "";
    let insideQuotes = false;

    for (let i = 0; i < text.length; i += 1) {
      const char = text[i];
      const nextChar = text[i + 1];

      if (char === '"' && insideQuotes && nextChar === '"') {
        current += '"';
        i += 1;
      } else if (char === '"') {
        insideQuotes = !insideQuotes;
      } else if (char === delimiter && !insideQuotes) {
        row.push(current.trim());
        current = "";
      } else if ((char === "\n" || char === "\r") && !insideQuotes) {
        if (current || row.length > 0) {
          row.push(current.trim());
          rows.push(row);
          row = [];
          current = "";
        }

        if (char === "\r" && nextChar === "\n") i += 1;
      } else {
        current += char;
      }
    }

    if (current || row.length > 0) {
      row.push(current.trim());
      rows.push(row);
    }

    const headers = rows[0];

    return rows.slice(1).map((values) => {
      const item = {};

      headers.forEach((header, index) => {
        item[header] = values[index] || "";
      });

      return item;
    });
  }

  function normalise(text) {
    return (text || "")
      .toLowerCase()
      .replace(/&/g, "and")
      .replace(/[^a-z0-9]+/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  function isVisited(place) {
    return (place.Visited || "").toLowerCase() === "yes";
  }

  function getHeritageGroup(place) {
    return (place.HeritageGroup || "").toLowerCase();
  }

  function isNationalTrust(place) {
    return getHeritageGroup(place) === "national trust";
  }

  function isOtherVisitedHeritage(place) {
    return !isNationalTrust(place) && isVisited(place);
  }

  function getMarkerClass(place) {
    const group = getHeritageGroup(place);

    if (group === "national trust" && isVisited(place)) {
      return "national-trust-visited";
    }

    if (group === "national trust" && !isVisited(place)) {
      return "national-trust-unvisited";
    }

    if (group === "english heritage") {
      return "english-heritage";
    }

    if (group === "historic royal palaces") {
      return "historic-royal-palaces";
    }

    if (group === "independent") {
      return "independent";
    }

    return "other-heritage";
  }

  function createMarkerIcon(place) {
    const className = getMarkerClass(place);

    return L.divIcon({
      className: "",
      html: `<div class="nt-marker ${className}"></div>`,
      iconSize: [18, 18],
      iconAnchor: [9, 9],
      popupAnchor: [0, -8],
    });
  }

  function createPopup(place) {
    const title = `<div class="nt-popup-title">${place.Title}</div>`;

    const metaParts = [place.HeritageGroup, place.County, place.Date].filter(Boolean);

    const meta = metaParts.length > 0 ? `<div class="nt-popup-meta">${metaParts.join(" · ")}</div>` : "";

    const note = place.Note ? `<div class="nt-popup-note">${place.Note}</div>` : "";

    const post = place.Post ? `<a href="${place.Post}">Read blog post</a>` : "";

    return `${title}${meta}${note}${post}`;
  }

  function isSameOrVeryClosePlace(a, b) {
    const sameName = normalise(a.Title) === normalise(b.Title);

    const latA = Number(a.Latitude);
    const lonA = Number(a.Longitude);
    const latB = Number(b.Latitude);
    const lonB = Number(b.Longitude);

    const hasCoords = !Number.isNaN(latA) && !Number.isNaN(lonA) && !Number.isNaN(latB) && !Number.isNaN(lonB);

    const veryClose = hasCoords && Math.abs(latA - latB) < 0.015 && Math.abs(lonA - lonB) < 0.015;

    return sameName || veryClose;
  }

  function getVisitedNationalTrustPlaces() {
    return visitedPlaces.filter((place) => isNationalTrust(place) && isVisited(place));
  }

  function getVisitedOtherHeritagePlaces() {
    return visitedPlaces.filter(isOtherVisitedHeritage);
  }

  function getAllNationalTrustPropertiesForDisplay() {
    const visitedNT = getVisitedNationalTrustPlaces();

    const unvisitedNT = ntProperties.filter((ntProperty) => !visitedNT.some((visitedPlace) => isSameOrVeryClosePlace(ntProperty, visitedPlace)));

    return [...visitedNT, ...unvisitedNT];
  }

  function updateSummary(places, filter) {
    if (!summaryElement) return;

    const visitedNTCount = getVisitedNationalTrustPlaces().length;
    const visitedOtherHeritageCount = getVisitedOtherHeritagePlaces().length;

    if (filter === "all-nt") {
      if (ntPropertiesFailed) {
        summaryElement.textContent = `Showing ${visitedNTCount} visited National Trust properties. Could not load the full National Trust properties list.`;
      } else if (!ntPropertiesLoaded) {
        summaryElement.textContent = `Showing ${visitedNTCount} visited National Trust properties. Loading full National Trust properties list...`;
      } else {
        summaryElement.textContent = `Showing ${places.length} National Trust properties. Visited ${visitedNTCount}.`;
      }
    } else if (filter === "visited-nt") {
      summaryElement.textContent = `Showing ${visitedNTCount} visited National Trust properties.`;
    } else if (filter === "visited-heritage") {
      summaryElement.textContent = `Showing ${visitedOtherHeritageCount} visited non-National Trust heritage places.`;
    }
  }

  function renderMarkers(filter = "visited-nt") {
    markerLayer.clearLayers();

    let places = getVisitedNationalTrustPlaces();

    if (filter === "all-nt") {
      places = getAllNationalTrustPropertiesForDisplay();
    }

    if (filter === "visited-heritage") {
      places = getVisitedOtherHeritagePlaces();
    }

    const bounds = [];

    places.forEach((place) => {
      const latitude = Number(place.Latitude);
      const longitude = Number(place.Longitude);

      if (Number.isNaN(latitude) || Number.isNaN(longitude)) return;

      const marker = L.marker([latitude, longitude], {
        icon: createMarkerIcon(place),
      }).bindPopup(createPopup(place));

      marker.addTo(markerLayer);
      bounds.push([latitude, longitude]);
    });

    if (bounds.length > 0) {
      map.fitBounds(bounds, {
        padding: [35, 35],
        maxZoom: 8,
      });
    }

    updateSummary(places, filter);
  }

  function setActiveButton(activeId) {
    ["show-all-nt", "show-visited-nt", "show-visited-heritage"].forEach((id) => {
      const button = document.getElementById(id);

      if (button) {
        button.classList.toggle("active", id === activeId);
      }
    });
  }

  function getCurrentFilter() {
    if (document.getElementById("show-all-nt")?.classList.contains("active")) {
      return "all-nt";
    }

    if (document.getElementById("show-visited-heritage")?.classList.contains("active")) {
      return "visited-heritage";
    }

    return "visited-nt";
  }

  function loadVisitedPlacesCsv() {
    return fetch(visitedCsvPath)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Visited places CSV request failed: ${response.status}`);
        }

        return response.text();
      })
      .then((csvText) => {
        visitedPlaces = parseCSV(csvText).filter((place) => place.Title && place.Latitude && place.Longitude);
      });
  }

  function loadNationalTrustPropertiesCsv() {
    return fetch(ntCsvPath)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`National Trust properties CSV request failed: ${response.status}`);
        }

        return response.text();
      })
      .then((csvText) => {
        ntProperties = parseCSV(csvText).filter((place) => place.Title && place.Latitude && place.Longitude);

        ntPropertiesLoaded = true;
      })
      .catch((error) => {
        console.error("Could not load National Trust properties CSV:", error);
        ntPropertiesFailed = true;
      });
  }

  document.getElementById("show-all-nt")?.addEventListener("click", () => {
    setActiveButton("show-all-nt");
    renderMarkers("all-nt");

    if (!ntPropertiesLoaded && !ntPropertiesFailed) {
      loadNationalTrustPropertiesCsv().then(() => {
        if (getCurrentFilter() === "all-nt") {
          renderMarkers("all-nt");
        }
      });
    }
  });

  document.getElementById("show-visited-nt")?.addEventListener("click", () => {
    setActiveButton("show-visited-nt");
    renderMarkers("visited-nt");
  });

  document.getElementById("show-visited-heritage")?.addEventListener("click", () => {
    setActiveButton("show-visited-heritage");
    renderMarkers("visited-heritage");
  });

  loadVisitedPlacesCsv()
    .then(() => {
      renderMarkers("visited-nt");
    })
    .catch((error) => {
      console.error("Could not load visited places CSV:", error);

      if (summaryElement) {
        summaryElement.textContent = "Could not load the map data. Please check the visited CSV file path.";
      }
    });
});
