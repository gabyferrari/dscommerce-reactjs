import type { AxiosRequestConfig } from "axios";
import axios from "axios";
import { BASE_URL } from "./system";

export function requestBackend(config: AxiosRequestConfig) {
    return axios({...config, baseURL: BASE_URL});
}