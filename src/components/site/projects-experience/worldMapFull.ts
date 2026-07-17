// Full-world map for the Regional Presence section on /projects.
// Uses Natural Earth country geometry projected once at module load.
// Independent from turnkey/worldMap.ts (which is a regional crop) so this
// change cannot affect the Turnkey page.

import { geoNaturalEarth1, geoPath } from "d3-geo";
import { feature } from "topojson-client";
import worldTopo from "world-atlas/countries-110m.json";

export const WORLD_MAP_W = 1000;
export const WORLD_MAP_H = 520;

// Fit the full sphere into the viewBox — the whole world is visible,
// with Africa and the Middle East falling naturally around the center.
export const projection = geoNaturalEarth1().fitSize(
  [WORLD_MAP_W, WORLD_MAP_H],
  { type: "Sphere" } as never,
);

const pathGen = geoPath(projection);

const rawCountries = (
  feature(
    worldTopo as never,
    (worldTopo as never as { objects: { countries: never } }).objects.countries,
  ) as unknown as GeoJSON.FeatureCollection<GeoJSON.Geometry, { name: string }>
).features;

export const WORLD_COUNTRY_PATHS: { name: string; d: string }[] = rawCountries
  .map((f) => ({ name: f.properties?.name ?? "", d: pathGen(f) ?? "" }))
  .filter((c) => c.d.length > 0);

// Sphere outline (soft ocean edge)
export const SPHERE_D: string = pathGen({ type: "Sphere" } as never) ?? "";

const LATLON: Record<string, [number, number]> = {
  Jordan: [36.5, 31.24],
  Syria: [38.5, 35.0],
  Iraq: [43.7, 33.2],
  Egypt: [30.0, 27.0],
  Libya: [17.5, 27.0],
  Yemen: [47.5, 15.5],
  Somaliland: [44.06, 9.56],
  Somalia: [45.34, 2.04],
  Uzbekistan: [64.6, 41.4],
  Bangladesh: [90.4, 23.7],
};

export const WORLD_HIGHLIGHT_NAMES = new Set([
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

export const WORLD_GEO: Record<string, { x: number; y: number }> =
  Object.fromEntries(
    Object.entries(LATLON).map(([k, [lon, lat]]) => {
      const p = projection([lon, lat])!;
      return [k, { x: p[0], y: p[1] }];
    }),
  );
