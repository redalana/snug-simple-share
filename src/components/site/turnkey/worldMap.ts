// Real Natural Earth 110m country geometry, projected to a fixed viewBox
// covering the Middle East, Africa and Central Asia. Everything here runs
// once at module load — the projection, filtered features and path strings
// are computed a single time and reused by the map component.

import { geoMercator, geoPath } from "d3-geo";
import { feature } from "topojson-client";
import worldTopo from "world-atlas/countries-110m.json";

export const MAP_W = 1000;
export const MAP_H = 620;

// Region window (lon, lat). Covers North + East Africa, Middle East,
// Central Asia and reaches Bangladesh in the east.
const REGION: GeoJSON.Feature = {
  type: "Feature",
  properties: {},
  geometry: {
    type: "Polygon",
    coordinates: [
      [
        [8, -8],
        [95, -8],
        [95, 50],
        [8, 50],
        [8, -8],
      ],
    ],
  },
};

export const projection = geoMercator().fitExtent(
  [
    [0, 0],
    [MAP_W, MAP_H],
  ],
  REGION,
);

const pathGen = geoPath(projection);


// Extract country features from the topojson.
const rawCountries = (
  feature(worldTopo as never, (worldTopo as never as { objects: { countries: never } }).objects.countries) as unknown as GeoJSON.FeatureCollection<
    GeoJSON.Geometry,
    { name: string }
  >
).features;

// Render every country the projection can draw — the SVG viewBox naturally
// crops to the region window. Filtering by bounds is unreliable for large
// polygons (Russia, Antarctica) whose raw lon/lat bounds mislead.
export const COUNTRY_PATHS: { name: string; d: string }[] = rawCountries
  .map((f) => ({
    name: f.properties?.name ?? "",
    d: pathGen(f) ?? "",
  }))
  .filter((c) => c.d.length > 0);

// Real geographic locations for every pin. Somaliland is intentionally
// represented by its capital (Hargeisa) as a city-level marker inside
// Somalia's territory — Somaliland is not internationally recognized as
// an independent country.
const LATLON: Record<string, [number, number]> = {
  Jordan: [36.5, 31.24],
  Syria: [38.5, 35.0],
  Iraq: [43.7, 33.2],
  Egypt: [30.0, 27.0],
  Libya: [17.5, 27.0],
  Yemen: [47.5, 15.5],
  Somaliland: [44.06, 9.56], // Hargeisa
  Somalia: [45.34, 2.04], // Mogadishu
  Uzbekistan: [64.6, 41.4],
  Bangladesh: [90.4, 23.7],
};

export const HIGHLIGHT_NAMES = new Set([
  "Jordan",
  "Syria",
  "Iraq",
  "Egypt",
  "Libya",
  "Yemen",
  "Somalia", // Somaliland fills as part of Somalia
  "Uzbekistan",
  "Bangladesh",
]);

export const GEO: Record<string, { x: number; y: number }> = Object.fromEntries(
  Object.entries(LATLON).map(([k, [lon, lat]]) => {
    const p = projection([lon, lat])!;
    return [k, { x: p[0], y: p[1] }];
  }),
);
