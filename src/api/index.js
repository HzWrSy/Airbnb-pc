import Request from "../utils/request";
import { BASE_URL, TIMEOUT } from "./config";

const request = new Request({ baseURL: BASE_URL, timeout: TIMEOUT })

export default request

