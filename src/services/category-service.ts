import { requestBackend } from "../utils/requests";
import type { AxiosRequestConfig } from "axios";

export function findAllRequest() {
  const config : AxiosRequestConfig = {
    method: "GET",
    url: "/categories"
  }

  return requestBackend(config);
}