import { APIError } from 'src/types/apiError';

/**
 * Here we create the httpClient that should be used whenever you need to do an API call.
 * This client is a wrapper over the native fetch API to improve developer experience.
 *
 * All requests to the backend are routed through a frontend proxy to:
 *   - Hide backend endpoints from the public
 *   - Avoid CORS issues
 * Proxy configuration can be found in build/serverOptions.ts.
 * Example flow:
 *   - Frontend request: http://localhost:5000/backend/account
 *   - Proxied to backend: http://localhost:5001/account
 */

type RequestOptions = Omit<RequestInit, 'method' | 'body'>;

type Response<T> = { data: T };

function createHttpClient() {
  const baseUrl = '/backend';
  const commonHeaders = {
    'Content-Type': 'application/json',
  };

  async function get<T>(url: string, options?: RequestOptions): Promise<Response<T>> {
    return await sendRequest(url, 'GET', undefined, options);
  }

  async function post<T>(url: string, payload?: unknown, options?: RequestOptions): Promise<Response<T>> {
    return await sendRequest(url, 'POST', payload, options);
  }

  async function put<T>(url: string, payload?: unknown, options?: RequestOptions): Promise<Response<T>> {
    return await sendRequest(url, 'PUT', payload, options);
  }

  async function patch<T>(url: string, payload?: unknown, options?: RequestOptions): Promise<Response<T>> {
    return await sendRequest(url, 'PATCH', payload, options);
  }

  async function delete_<T>(url: string, options?: RequestOptions): Promise<Response<T>> {
    return await sendRequest(url, 'DELETE', undefined, options);
  }

  async function sendRequest<T>(
    url: string,
    method: string,
    payload?: unknown,
    options?: RequestOptions,
  ): Promise<Response<T>> {
    const fullUrl = baseUrl + url;
    const headers = { ...commonHeaders, ...options?.headers };
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

  return { get, post, put, patch, delete: delete_ };
}

export const httpClient = createHttpClient();
