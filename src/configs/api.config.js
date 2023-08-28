import axios from "axios";
import { toast } from "react-hot-toast";

const instance = axios.create({
  // baseURL: `${process.env.REACT_APP_BACKEND_URL}`,
  // baseURL: `http://192.168.1.119:5000/`,
  baseURL: `http://localhost:8000`,

  timeout: 50000,
});

export { instance };

const getHeader = (isAuthenticated, type = "application/json") => {
  const storedToken = localStorage.getItem("token");
  const headers = {};
  headers["Content-Type"] = type;

  if (isAuthenticated) {
    headers["Authorization"] = `Bearer ${storedToken}`;
  }

  return headers;
};

export const handleError = (err) => {
  if (err?.response) {
    if (
      err?.response?.data?.message &&
      typeof err?.response?.data?.message === "object"
    ) {
      return "Unable to complete your request!";
    } else if (err?.response?.data?.message) {
      return err?.response?.data?.message;
    } else {
      return `Error with status code : ${err?.response?.status}`;
    }
  } else if (err?.request) {
    if (err.request?.status < 100) {
      return "Network Error!";
    }
  }
};

export const api = {
  get: async (url, isAuthenticated) => {
    try {
      const headers = getHeader(isAuthenticated);

      const config = {
        headers: headers,
      };

      const response = await instance.get(url, config);
      return response.data;
    } catch (error) {
      const message = handleError(error);

      return { status: "failure", message: message };
    }
  },
  post: async (
    url,
    data,
    isAuthenticated = false,
    type = "application/json"
  ) => {
    try {
      const headers = getHeader(isAuthenticated, type);

      const config = {
        headers: headers,
      };
      const response = await instance.post(url, data, config);

      return { status: "success", data: response.data };
    } catch (error) {
      const message = handleError(error);

      return { status: "failure", message: message };
    }
  },
  patch: async (
    url,
    data,
    isAuthenticated = false,
    type = "application/json"
  ) => {
    try {
      const headers = getHeader(isAuthenticated, type);

      const config = {
        headers: headers,
      };
      const response = await instance.patch(url, data, config);

      return { status: "success", data: response.data };
    } catch (error) {
      const message = handleError(error);
      toast.error(message || "Unable to complete your request");
      return { status: "failure", message: message };
    }
  },
  delete: async (
    url,
    isAuthenticated = false,
    data = undefined,
    type = "application/json"
  ) => {
    try {
      const headers = getHeader(isAuthenticated, type);

      const config = {
        headers: headers,
      };

      if (data) {
        config.data = data;
      }

      const response = await instance.delete(url, config);

      return { status: "success", data: response.data };
    } catch (error) {
      const message = handleError(error);
      toast.error(message || "Unable to complete your request");

      return { status: "failure", message: message };
    }
  },
};
