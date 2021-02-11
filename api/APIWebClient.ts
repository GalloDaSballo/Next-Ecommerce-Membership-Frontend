import { API_URL } from "../utils/urls";
import APIClient from "./APIClient";

const APIWebClient = new APIClient({
    baseURL: API_URL,
    timeout: 60000,
});

export default APIWebClient;
