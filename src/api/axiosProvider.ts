// eslint-disable-next-line no-restricted-imports
import axios from 'axios';

import { APIError } from 'src/types/apiError';

/**
 * Here we create the axios instance that should be used whenever you need to do an API call.
 * Do not import axios from the original package in your code.
 */

/**
 * You can configure the axios defaults here
 * https://axios-http.com/docs/config_defaults
 *
 * The calls to the backend API are done via the frontend proxy.
 * We do this to avoid exposing our backend to the public and overcome CORS issues.
 * Check build/serverOptions.ts to see how the proxy is configured.
 * Calls go like this: http://localhost:5000/backend/account -> http://localhost:5001/account
 */
const axiosInstance = axios.create({
  baseURL: '/backend',
});

/**
 * You can add interceptors if you have some common logic that needs to run on every request or response.
 * https://axios-http.com/docs/interceptors
 *
 * The following interceptor convert AxiosError to APIError because we don't want to expose axios objects outside.
 */
axiosInstance.interceptors.response.use(null, (error) => {
  const finalError = axios.isAxiosError(error)
    ? new APIError({ status: error.response?.status, message: error.message })
    : error;
  return Promise.reject(finalError);
});

export { axiosInstance as axios };
