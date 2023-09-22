import { API_URL } from "@/constants";
import axios from "axios";

export const fetchClient = (() => {
  const instance = axios.create({
    baseURL: API_URL,
  });

  // authorization header example
  instance.interceptors.request.use(async (config) => {
    config.headers.Authorization = "Bearer ";
    return config;
  });

  instance.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      if ([401, 403].includes(error.response.status)) {
        // sign out user if any 401 error appears
      } else {
        return Promise.reject(error);
      }
    }
  );

  return instance;
})();
