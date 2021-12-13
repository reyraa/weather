type props = {
  baseUrl?: string,
  path: string,
  method?: 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE' | 'OPTIONS' | 'HEAD' | undefined,
};

/**
 * Makes HTTP api call
 *
 * @param {string} baseUrl - optional service base url
 * @param {string} path - api endpoint
 * @param {string} method - HTTP method
 * @param {string} params - HTTP call parameters
 * @returns {Promise} - if success it returns data,
 * if fails on server it throws an error,
 *
 */
const http = ({
  baseUrl = '', path, method = 'GET',
}: props) => fetch(`${baseUrl}${path}`, {
  method,
  headers: {
    Accept: 'application/json',
  },
});

export default http;
