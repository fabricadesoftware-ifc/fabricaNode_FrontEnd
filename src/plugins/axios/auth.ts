import axios, { type AxiosInstance, type InternalAxiosRequestConfig } from "axios";

interface IRetryableConfig extends InternalAxiosRequestConfig {
    _retriedWithoutAuth?: boolean;
}

export function attachAuthInterceptor(instance: AxiosInstance) {
    instance.interceptors.request.use(
        (config: IRetryableConfig) => {
            const token = localStorage.getItem('access_token');
            if (token && !config._retriedWithoutAuth) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        },
        (error) => Promise.reject(error),
    );
}

// Um access_token expirado/inválido faz o JWTAuthentication do backend
// recusar a requisição com 401 mesmo em endpoints públicos (GET). Usado só
// no cliente de dados de domínio (publicações/autores/etc): refaz a chamada
// sem Authorization uma vez, caindo pra leitura anônima em vez de quebrar a
// tela. Não é usado no cliente de auth, que precisa do 401 "de verdade" pra
// disparar o próprio fluxo de refresh do authStore.
export function attachAnonymousFallback(instance: AxiosInstance) {
    instance.interceptors.response.use(
        (response) => response,
        (error) => {
            const config: IRetryableConfig | undefined = error.config;
            const hadToken = !!localStorage.getItem('access_token');

            if (error.response?.status === 401 && hadToken && config && !config._retriedWithoutAuth) {
                config._retriedWithoutAuth = true;
                if (typeof config.headers?.delete === 'function') {
                    config.headers.delete('Authorization');
                } else if (config.headers) {
                    delete config.headers.Authorization;
                }
                return instance.request(config);
            }

            return Promise.reject(error);
        },
    );
}

attachAuthInterceptor(axios);
