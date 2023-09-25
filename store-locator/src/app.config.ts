export class AppConfig {
  private static GMAP_APY_KEY: string  = 'AIzaSyD-C4lolhAKwX2ncmDjW4O44zE6npETbS8';;

  public static getGMapApiKey(): string {
    return this.GMAP_APY_KEY;
  }
}
