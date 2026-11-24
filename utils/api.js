import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "");

export const api = baseURL ? axios.create({ baseURL, timeout: 8000 }) : null;
