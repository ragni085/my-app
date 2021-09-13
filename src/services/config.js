import axios from 'axios';
import { toast } from "react-toastify";

const constants = {
  BASE_URL: {
    dev: process.env.REACT_APP_DEV_URL,
    prod: process.env.REACT_APP_PROD_URL
  },
};

export const getConstants = key =>
  typeof process.env.NODE_ENV !== 'undefined'
    ? constants[key.toLocaleUpperCase()].dev
    : constants[key].prod;

const instance = axios.create({
  baseURL: getConstants('BASE_URL'),
  headers: {
    Pragma: 'no-cache',
    "accept": "application/json",
    "Content-Type": "application/json",
  }
});

instance.interceptors.response.use(
  response => response,
  error => {
    const originalRequest = error.config;
    if (
      (error.response.status === 401)
      && !originalRequest._retry
    ) {
      // if the error is 401 and hasn't already been retried
      originalRequest._retry = false; // now it can be retried
        if(window.location.pathname!=="/"){
          window.location.pathname = "/"
        }
    } else if (error.response.status === 403) {
      toast.error("User does not have permissions.");
      return
    }
    else if ((error.response.status === 404) && !originalRequest._retry) {
      window.location.pathname = '/not-found';
    }
    // Do something with response error
    return Promise.reject(error);
  }
);

export default instance;
