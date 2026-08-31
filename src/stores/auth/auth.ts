import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

import AuthService from '@/services/auth/auth';

const authService = new AuthService();

export const useAuthStore = defineStore('auth', () => {
  const user = ref<Record<string, any>>({});
  const isAuthenticated = computed(() => !!user.value?.id);

  function unsetToken() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    user.value = {};
  }

  function setTokens(access: string, refresh: string) {
    localStorage.setItem('access_token', access);
    localStorage.setItem('refresh_token', refresh);
  }

  async function tryRefresh(): Promise<boolean> {
    const refreshToken = localStorage.getItem('refresh_token');
    if (!refreshToken) return false;

    try {
      const { access } = await authService.refresh(refreshToken);
      localStorage.setItem('access_token', access);
      return true;
    } catch {
      return false;
    }
  }

  async function loadUser() {
    if (!localStorage.getItem('access_token')) {
      unsetToken();
      return;
    }

    try {
      user.value = await authService.getMe();
    } catch {
      const refreshed = await tryRefresh();
      if (!refreshed) {
        unsetToken();
        return;
      }

      try {
        user.value = await authService.getMe();
      } catch {
        unsetToken();
      }
    }
  }

  async function login(email: string, password: string) {
    const { access, refresh } = await authService.login(email, password);
    setTokens(access, refresh);
    await loadUser();
  }

  return { user, isAuthenticated, login, loadUser, unsetToken };
});
