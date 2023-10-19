import { AppConfigSecret } from "./app.config.secret";

export class AppConfig {
  //this file is a copy of app.config.secret.ts without data, the confidencial datas is stored in app.config.secret.ts
  private static GMAP_APY_KEY: string  = AppConfigSecret.getGMapApiKey();
  private static GMAP_STYLE = [
    { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
    { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
    { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
    { featureType: "administrative.locality", elementType: "labels.text.fill", stylers: [{ color: "#d59563" }]},
    { featureType: "poi", elementType: "labels.text.fill", stylers: [{ color: "#d59563" }]},
    { featureType: "poi.park", elementType: "geometry", stylers: [{ color: "#263c3f" }]},
    { featureType: "poi.park", elementType: "labels.text.fill", stylers: [{ color: "#6b9a76" }]},
    { featureType: "road", elementType: "geometry", stylers: [{ color: "#38414e" }]},
    { featureType: "road", elementType: "geometry.stroke", stylers: [{ color: "#212a37" }]},
    { featureType: "road", elementType: "labels.text.fill", stylers: [{ color: "#9ca5b3" }]},
    { featureType: "road.highway", elementType: "geometry", stylers: [{ color: "#746855" }]},
    { featureType: "road.highway", elementType: "geometry.stroke", stylers: [{ color: "#1f2835" }]},
    { featureType: "road.highway", elementType: "labels.text.fill", stylers: [{ color: "#f3d19c" }]},
    { featureType: "transit", elementType: "geometry", stylers: [{ color: "#2f3948" }]},
    { featureType: "transit.station", elementType: "labels.text.fill", stylers: [{ color: "#d59563" }]},
    { featureType: "water", elementType: "geometry", stylers: [{ color: "#17263c" }]},
    { featureType: "water", elementType: "labels.text.fill", stylers: [{ color: "#515c6d" }]},
    { featureType: "water", elementType: "labels.text.stroke", stylers: [{ color: "#17263c" }]},
  ];
  private static BK_ENDPOINT: string = 'http://localhost/store-locator/wp-json/storelocator/v1';

  public static getGMapApiKey(): string {
    return this.GMAP_APY_KEY;
  }

  public static getGMapStyle(): Array<any> {
    return this.GMAP_STYLE;
  }

  public static getBkEndpoint(): string {
    return this.BK_ENDPOINT;
  }
}
