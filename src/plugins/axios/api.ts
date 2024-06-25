import axios from 'axios';
import type { AxiosResponse } from 'axios';
import type { IApi } from "@/interfaces";

export class Api implements IApi {
    client = axios.create({
        baseURL: "http://localhost:8000/api/",
        headers: {
            "Content-Type": "application/json",
        },
        timeout: 10000,
    });

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
