import axios from 'axios';
import type { AxiosResponse } from 'axios';
import type { IApi } from "@/interfaces";
import { attachAuthInterceptor, attachAnonymousFallback } from './auth';

export class Api implements IApi {
    client = axios.create({
        baseURL: import.meta.env.VITE_API_BASE_URL,
        headers: {
            "Content-Type": "application/json",
        },
        timeout: 10000,
    });

    constructor() {
        attachAuthInterceptor(this.client);
        attachAnonymousFallback(this.client);
    }

    async get<T = any>(url: string): Promise<AxiosResponse<T>> {
        return this.client.get(url);
    };

    async post<T = any>(url: string, data: any): Promise<AxiosResponse<T>> {
        return this.client.post(url, data);
    };

    async put<T = any>(url: string, data: any): Promise<AxiosResponse<T>> {
        return this.client.put(url, data);
    };

    async patch<T = any>(url: string, data: any): Promise<AxiosResponse<T>> {
        return this.client.patch(url, data);
    };

    async delete<T = any>(url: string): Promise<AxiosResponse<T>> {
        return this.client.delete(url);
    };
};
