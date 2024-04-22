import axios from "axios";

const BASE_URL = "http://localhost:1000/api/";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZDg4OTllYWRmYjZkYjg4ZTA1MjIyMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcxMjM4MjUzNiwiZXhwIjoxNzEyNjQxNzM2fQ.BZk2SRyWAm3mGSkdnlEwgTVF-TjpachzaIZW3t1YtTk"


export const publicRequest = axios.create({
    baseURL:BASE_URL,
});

export const userRequest = axios.create({
    baseURL:BASE_URL,
    header: {token:`bearer ${token}`},
});
