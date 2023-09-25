export class AppConfig {
  //this file is a copy of app.config.secret.ts without data
  //to use it you have to searching for the import path "./app.config.secret" and replace it with "./app.config"
  private static GMAP_APY_KEY: string  = ''; //the old key was disabled and removed from Google's cloud console

  public static getGMapApiKey(): string {
    return this.GMAP_APY_KEY;
  }
}
