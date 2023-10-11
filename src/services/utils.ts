import config from "../config";

export const fetchWithApiKey = (url: string, options: RequestInit= {}) => {
  const headers = {
    'Authorization': `Bearer ${config.API_KEY}`
  };

  options.headers = { ...headers, ...options.headers };

  return fetch(url, options);
}