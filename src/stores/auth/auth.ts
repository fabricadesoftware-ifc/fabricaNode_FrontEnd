import { ref } from 'vue';
import { defineStore } from 'pinia';

import { AuthService } from '@/services';
const authService = new AuthService();

export const useAuthStore = defineStore('auth', () => {
  const user = ref({});

  async function setToken() {
    user.value = await authService.postUserToken();
  };

  function unsetToken() {
    user.value = {};
  };

  return { user, setToken, unsetToken };
});