export interface MapCoords {
  lat: number;
  lng: number;
}

export interface AppMapOptions {
  zoom?: number;
  mapID?: string;
}

//new interface to pass also place name (utils for marker) - not used yet
export interface MapMarkerData {
  placeName: string;
  coords: MapCoords;
}
