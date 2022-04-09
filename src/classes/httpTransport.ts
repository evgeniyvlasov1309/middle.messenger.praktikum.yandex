import env from "../constants/env";
import { getQueryString } from "../utils/utils";

enum METHODS {
  GET = "GET",
  PUT = "PUT",
  POST = "POST",
  DELETE = "DELETE",
}

interface Options {
  timeout?: number;
  method: METHODS;
  data?: any;
  query?: any;
  headers?: any;
}

type OptionsWithoutMethod = Omit<Options, "method">;
type GetRequestOptions = Omit<OptionsWithoutMethod, "data">;

export default class HTTPTransport {
  public path: string;

  public baseUrl: string;

  constructor(path = "", baseUrl: string = env.HOST_API) {
    this.path = path;
    this.baseUrl = baseUrl;
  }

  get<T>(url: string, options: GetRequestOptions = {}): Promise<T> {
    return this.request(
      url,
      { ...options, method: METHODS.GET },
      options.timeout
    );
  }

  post<T>(url: string, options: OptionsWithoutMethod = {}): Promise<T> {
    return this.request(
      url,
      { ...options, method: METHODS.POST },
      options.timeout
    );
  }

  put<T>(url: string, options: OptionsWithoutMethod = {}): Promise<T> {
    return this.request(
      url,
      { ...options, method: METHODS.PUT },
      options.timeout
    );
  }

  delete<T>(url: string, options: OptionsWithoutMethod = {}): Promise<T> {
    return this.request(
      url,
      { ...options, method: METHODS.DELETE },
      options.timeout
    );
  }

  request<T>(url: string, options: Options, timeout = 5000): Promise<T> {
    const {
      method,
      query,
      data,
      headers = {
        "content-type": "application/json;charset=UTF-8",
      },
    } = options;

    return new Promise((resolve, reject) => {
      const xhr = new window.XMLHttpRequest();

      url = `${this.baseUrl}${this.path}${url}?${getQueryString(query)}`;

      xhr.open(method, url);
      xhr.withCredentials = true;

      for (const key in headers) {
        xhr.setRequestHeader(key, headers[key]);
      }

      // eslint-disable-next-line func-names
      xhr.onload = function () {
        let response;

        try {
          response = JSON.parse(xhr.responseText);
        } catch (e) {
          response = xhr.responseText;
        }

        if (xhr.status !== 200) {
          reject(response.reason);
        } else {
          resolve(response);
        }
      };

      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.ontimeout = reject;

      if (!data) {
        xhr.send();
      } else {
        const payload =
          headers["content-type"] === "application/json;charset=UTF-8"
            ? JSON.stringify(data)
            : data;
        xhr.send(payload);
      }

      setTimeout(() => {
        reject();
      }, timeout);
    });
  }
}
