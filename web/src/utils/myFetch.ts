const baseUrl = 'http://localhost:3000' + '/api/v1';

export type ApiResponse<T> = {
    data: T[],
    meta: {
        page: number,
        totalPages: number,
    }
}

export default async function myFetch(
    endpoint: string, options?: Parameters<typeof fetch>[1]
): Promise<ApiResponse<any>> {
    const response = await fetch(baseUrl + endpoint, options);
    return await response.json();
};
