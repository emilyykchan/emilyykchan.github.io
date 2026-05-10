#!/usr/bin/env python3
# build_nt_properties_csv.py
# This code is used to build the csv `assets/data/national-trust-properties.csv`
# which lists all the unvisited NT properties. 

import csv
import json
import urllib.request
from pathlib import Path

OUTPUT_PATH = Path("assets/data/national-trust-properties.csv")

NT_API_URL = (
    "https://www.nationaltrust.org.uk/api/search/places"
    "?query=&lat=52&lon=0&milesRadius=1000&maxPlaceResults=1000"
)

FIELDNAMES = [
    "Title",
    "Latitude",
    "Longitude",
    "County",
    "Visited",
    "Date",
    "HeritageGroup",
    "Post",
    "Note",
]


def fetch_nt_places():
    request = urllib.request.Request(
        NT_API_URL,
        headers={
            "User-Agent": "Mozilla/5.0",
            "Accept": "application/json",
        },
    )

    with urllib.request.urlopen(request) as response:
        data = json.load(response)

    if "multiMatch" in data and "results" in data["multiMatch"]:
        raw_places = data["multiMatch"]["results"]
    elif "results" in data:
        raw_places = data["results"]
    else:
        raw_places = data

    rows = []

    for place in raw_places:
        location = place.get("location") or {}
        latitude = location.get("lat")
        longitude = location.get("lon")

        if latitude is None or longitude is None:
            continue

        rows.append(
            {
                "Title": place.get("title", "").strip(),
                "Latitude": f"{float(latitude):.6f}",
                "Longitude": f"{float(longitude):.6f}",
                "County": place.get("county", "").strip(),
                "Visited": "no",
                "Date": "",
                "HeritageGroup": "National Trust",
                "Post": "",
                "Note": place.get("websiteUrl", "").strip(),
            }
        )

    rows = sorted(rows, key=lambda row: (row["County"], row["Title"]))
    return rows


def write_csv(rows):
    OUTPUT_PATH.parent.mkdir(parents=True, exist_ok=True)

    with OUTPUT_PATH.open("w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=FIELDNAMES)
        writer.writeheader()
        writer.writerows(rows)


def main():
    rows = fetch_nt_places()
    write_csv(rows)

    print(f"Wrote {len(rows)} National Trust properties to {OUTPUT_PATH}")


if __name__ == "__main__":
    main()