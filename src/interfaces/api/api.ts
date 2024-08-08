import type { AxiosInstance, AxiosResponse } from 'axios';

export interface IApi {
  client: AxiosInstance;
  get<T = any>(url: string): Promise<AxiosResponse<T>>;
  post?<T = any>(url: string, data: any): Promise<AxiosResponse<T>>;
  patch?<T = any>(url: string, data: any): Promise<AxiosResponse<T>>;
  put?<T = any>(url: string, data: any): Promise<AxiosResponse<T>>;
};
