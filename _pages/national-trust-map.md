---
layout: page
title: Map
permalink: /national-trust-map/
nav: true
nav_order: 7
description: A growing map of National Trust and heritage places I have visited.
---

<link
  rel="stylesheet"
  href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
/>

<style>
  #nt-map {
    height: 620px;
    width: 100%;
    border-radius: 12px;
    margin-top: 1.5rem;
    margin-bottom: 1rem;
    z-index: 1;
  }

  .nt-map-intro {
    margin-bottom: 1rem;
  }

  .nt-map-controls {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }

  .nt-map-controls button {
    border: 1px solid var(--global-divider-color);
    background: var(--global-bg-color);
    color: var(--global-text-color);
    border-radius: 999px;
    padding: 0.35rem 0.8rem;
    font-size: 0.9rem;
    cursor: pointer;
  }

  .nt-map-controls button.active {
    background: var(--global-theme-color);
    color: white;
    border-color: var(--global-theme-color);
  }

  .nt-map-summary {
    font-size: 0.95rem;
    color: var(--global-text-color-light);
    margin-bottom: 0.5rem;
  }

  .nt-marker {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: 2px solid white;
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.35);
  }

  .nt-marker.national-trust-visited {
    background: #2e7d32;
  }

  .nt-marker.national-trust-unvisited {
    background: #bdbdbd;
  }

  .nt-marker.english-heritage {
    background: #c0392b;
  }

  .nt-marker.historic-royal-palaces {
    background: #8e44ad;
  }

  .nt-marker.independent {
    background: #6a5acd;
  }

  .nt-marker.other-heritage {
    background: #607d8b;
  }

  .nt-popup-title {
    font-weight: 600;
    margin-bottom: 0.2rem;
  }

  .nt-popup-meta {
    font-size: 0.85rem;
    color: #666;
    margin-bottom: 0.35rem;
  }

  .nt-popup-note {
    font-size: 0.9rem;
    margin-bottom: 0.35rem;
  }
</style>

<div class="nt-map-intro">
  A growing map of National Trust and heritage places I have visited across England.
</div>

<div class="nt-map-controls">
  <button id="show-visited-nt" class="active" type="button">
    Visited National Trust properties
  </button>
  <button id="show-all-nt" type="button">
    All National Trust properties
  </button>
  <button id="show-visited-heritage" type="button">
    Other heritage visited
  </button>
</div>

<div id="nt-map-summary" class="nt-map-summary"></div>

<div
  id="nt-map"
  data-visited-csv="{{ '/assets/data/national-trust-visited.csv' | relative_url }}"
  data-nt-csv="{{ '/assets/data/national-trust-properties.csv' | relative_url }}"
></div>

<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
<script src="{{ '/assets/js/national-trust-map.js' | relative_url }}"></script>
