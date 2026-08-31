import type { AxiosInstance, AxiosResponse } from 'axios';

interface IPaginatedResponse<T> {
    count: number;
    next: string | null;
    previous: string | null;
    results: T[];
}

export async function fetchAllPages<T>(client: AxiosInstance, url: string): Promise<T[]> {
    const results: T[] = [];
    let nextUrl: string | null = url;

    while (nextUrl) {
        const response: AxiosResponse<IPaginatedResponse<T>> = await client.get(nextUrl);
        results.push(...response.data.results);
        nextUrl = response.data.next;
    }

    return results;
}
