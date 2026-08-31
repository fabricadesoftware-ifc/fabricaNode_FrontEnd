import axios from 'axios';

const baseURL = import.meta.env.VITE_API_BASE_URL;

export interface ITokenPair {
  access: string;
  refresh: string;
}

export interface IUsuario {
  id: number;
  email: string;
  name: string;
  is_staff: boolean;
  is_active: boolean;
  date_joined: string;
}

export default class AuthService {
  async login(email: string, password: string): Promise<ITokenPair> {
    const response = await axios.post(`${baseURL}token/`, { email, password });
    return response.data;
  }

  async refresh(refreshToken: string): Promise<{ access: string }> {
    const response = await axios.post(`${baseURL}token/refresh/`, { refresh: refreshToken });
    return response.data;
  }

  async getMe(): Promise<IUsuario> {
    const response = await axios.get(`${baseURL}usuarios/me/`);
    return response.data;
  }
}
