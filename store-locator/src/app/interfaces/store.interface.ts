export interface Store {
  ID?: number;
  address: string;
  bookable: boolean;
  countryIso: string;
  email: string;
  hasPickupInStore: boolean;
  hasTailorBooking: boolean;
  lat: number;
  lng: number;
}
