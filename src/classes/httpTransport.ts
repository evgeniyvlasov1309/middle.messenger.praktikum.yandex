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

class HTTPTransport {
  get(url: string, options: GetRequestOptions = {}): Promise<XMLHttpRequest> {
    return this.request(
      url,
      { ...options, method: METHODS.GET },
      options.timeout
    );
  }

  post(
    url: string,
    options: OptionsWithoutMethod = {}
  ): Promise<XMLHttpRequest> {
    return this.request(
      url,
      { ...options, method: METHODS.POST },
      options.timeout
    );
  }

  put(
    url: string,
    options: OptionsWithoutMethod = {}
  ): Promise<XMLHttpRequest> {
    return this.request(
      url,
      { ...options, method: METHODS.PUT },
      options.timeout
    );
  }

  delete(
    url: string,
    options: OptionsWithoutMethod = {}
  ): Promise<XMLHttpRequest> {
    return this.request(
      url,
      { ...options, method: METHODS.DELETE },
      options.timeout
    );
  }

  request(
    url: string,
    options: Options,
    timeout = 5000
  ): Promise<XMLHttpRequest> {
    const { method, query, data, headers } = options;

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      url = `${url}?${getQueryString(query)}`;

      for (const key in headers) {
        xhr.setRequestHeader(key, headers[key]);
      }

      xhr.open(method, url);

      xhr.onload = function () {
        resolve(xhr);
      };

      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.ontimeout = reject;

      if (!data) {
        xhr.send();
      } else {
        xhr.send(data);
      }

      setTimeout(() => {
        reject();
      }, timeout);
    });
  }
}

const http = new HTTPTransport();

export default http;
