import { APIError } from 'src/types/apiError';

/**
 * Here we create the httpClient that should be used whenever you need to do an API call.
 * This client is a wrapper over the native fetch API to improve developer experience.
 *
 * All requests to the backend are routed through a frontend proxy to:
 *   - Hide backend endpoints from the public
 *   - Avoid CORS issues during development
 * Proxy configuration can be found in build/serverOptions.ts.
 * Example flow:
 *   - Frontend request: http://localhost:5000/backend/account
 *   - Proxied to backend: http://localhost:5001/account
 */

type RequestOptions = Omit<RequestInit, 'method' | 'body'>;

type Response<T> = { data: T };

class HttpClient {
  #baseUrl = '/backend';
  #commonHeaders = {
    'Content-Type': 'application/json',
  };

  async get<T>(url: string, options?: RequestOptions): Promise<Response<T>> {
    return await this.#sendRequest(url, 'GET', undefined, options);
  }

  async post<T>(url: string, payload?: unknown, options?: RequestOptions): Promise<Response<T>> {
    return await this.#sendRequest(url, 'POST', payload, options);
  }

  async put<T>(url: string, payload?: unknown, options?: RequestOptions): Promise<Response<T>> {
    return await this.#sendRequest(url, 'PUT', payload, options);
  }

  async patch<T>(url: string, payload?: unknown, options?: RequestOptions): Promise<Response<T>> {
    return await this.#sendRequest(url, 'PATCH', payload, options);
  }

  async delete<T>(url: string, options?: RequestOptions): Promise<Response<T>> {
    return await this.#sendRequest(url, 'DELETE', undefined, options);
  }

  async #sendRequest<T>(
    url: string,
    method: string,
    payload?: unknown,
    options?: RequestOptions,
  ): Promise<Response<T>> {
    const fullUrl = this.#baseUrl + url;
    const headers = { ...this.#commonHeaders, ...options?.headers };
    const body = payload ? JSON.stringify(payload) : undefined;

    const response = await fetch(fullUrl, { ...options, method, headers, body });

    if (response.ok) {
      const text = await response.text();
      const data = text ? JSON.parse(text) : undefined;
      return { data };
    } else {
      throw new APIError({ status: response.status, message: response.statusText });
    }
  }
}

export const httpClient = new HttpClient();
