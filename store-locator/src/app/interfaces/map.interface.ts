export interface MapCoords {
  lat: number;
  lng: number;
}

export interface AppMapOptions {
  zoom?: number;
  mapID?: string;
}

export interface MapMarkerData {
  placeName: string;
  coords: MapCoords;
}
