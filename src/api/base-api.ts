import HTTP from "../classes/httpTransport";

export class BaseAPI {
  protected _instance: HTTP;

  constructor(path: string) {
    this._instance = new HTTP(path);
  }
}
