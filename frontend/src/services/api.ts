import axios from "axios";
import { LoginCredentials, AuthResponse, UsersResponse } from "../types";

const API_BASE_URL = "http://localhost:8000/api";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Interceptor para agregar token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const authService = {
  login: async (credentials: LoginCredentials): Promise<AuthResponse> => {
    const response = await api.post("/login", credentials);
    return response.data;
  },

  logout: async (): Promise<void> => {
    await api.post("/logout");
  },

  me: async () => {
    const response = await api.get("/me");
    return response.data;
  },
};

export const userService = {
  getUsers: async (
    sortBy?: string,
    sortDirection?: string
  ): Promise<UsersResponse> => {
    const params = new URLSearchParams();
    if (sortBy) params.append("sort_by", sortBy);
    if (sortDirection) params.append("sort_direction", sortDirection);

    const response = await api.get(`/users?${params.toString()}`);
    return response.data;
  },
};

export default api;
