import { requestBackend } from "../utils/requests";
import type { AxiosRequestConfig } from "axios";

export function findMe() {
  const config : AxiosRequestConfig = {
    url: "/users/me",
    withCredentials: true
  }

  return requestBackend(config);
}