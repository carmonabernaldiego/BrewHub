export interface User {
  id: number;
  name: string;
  email: string;
  created_at: string;
  updated_at: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface AuthResponse {
  user: User;
  token: string;
  message: string;
}

export interface UsersResponse {
  users: User[];
  total: number;
}

export interface AuthContextType {
  user: User | null;
  login: (
    credentials: LoginCredentials,
    options?: { remember?: boolean }
  ) => Promise<void>;
  logout: () => void;
  loading: boolean;
  isAuthenticated: boolean;
}
