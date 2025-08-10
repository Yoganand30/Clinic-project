import axios from "axios";

const base = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:4000";

const api = axios.create({
  baseURL: base,
});

// attach token automatically
api.interceptors.request.use((config) => {
  try {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers = config.headers || {};
      config.headers.Authorization = `Bearer ${token}`;
    }
  } catch (e) {}
  return config;
});

export default api;
