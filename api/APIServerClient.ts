import { API_URL } from "../utils/networks";
import APIClient from "./APIClient";

const APIServerClient = new APIClient({
    baseURL: API_URL,
    timeout: 60000,
});

export default APIServerClient;
