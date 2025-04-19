import axios from "axios";
import { ACCESS_TOKEN } from "./constants";
// const URL = window.location.origin || "http://127.0.0.1:4000/"
export const BASEURL = "https://mover.icu:3077"
// export const BASEURL = "http://localhost:3000"

export const api = axios.create({
    baseURL: BASEURL,
})

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem(ACCESS_TOKEN)
        console.log("token", token)
        if (token) {
            config.headers.Authorization = `Token ${token}`
        }
        return config
    },
    (error) => Promise.reject(error)
);

// export default api