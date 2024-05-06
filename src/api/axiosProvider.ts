// eslint-disable-next-line no-restricted-imports
import axios from 'axios';

/**
 * Here you can configure the axios instance the way you need it
 * https://axios-http.com/docs/instance
 */
const axiosInstance = axios.create();

/**
 * You can add interceptors if you have some common logic that needs to run on every request or response
 * https://axios-http.com/docs/interceptors
 */

export { axiosInstance as axios };
