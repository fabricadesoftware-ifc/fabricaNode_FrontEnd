<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores';

const router = useRouter();
const authStore = useAuthStore();

const email = ref('');
const password = ref('');
const error = ref('');
const loading = ref(false);

async function onSubmit() {
  error.value = '';
  loading.value = true;
  try {
    await authStore.login(email.value, password.value);
    router.push({ name: 'home' });
  } catch {
    error.value = 'Email ou senha inválidos.';
  } finally {
    loading.value = false;
  }
}
</script>

<template>
  <div class="login-page">
    <div class="login-card">
      <img src="@/assets/images/logo.png" alt="Fábrica Node" class="login-logo" />

      <h1 class="login-title">Bem-vindo de volta</h1>
      <p class="login-subtitle">Entre com sua conta para continuar</p>

      <form class="login-form" @submit.prevent="onSubmit">
        <label class="login-label" for="email">Email</label>
        <input
          id="email"
          v-model="email"
          class="login-input"
          type="email"
          placeholder="seu@email.com"
          required
          autocomplete="email"
        />

        <label class="login-label" for="password">Senha</label>
        <input
          id="password"
          v-model="password"
          class="login-input"
          type="password"
          placeholder="••••••••"
          required
          autocomplete="current-password"
        />

        <p v-if="error" class="login-error">{{ error }}</p>

        <button class="login-button" type="submit" :disabled="loading">
          {{ loading ? 'Entrando...' : 'Entrar' }}
        </button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #f5f6f7;
  padding: 20px;
}

.login-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 400px;
  background: white;
  border-radius: 24px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
  padding: 48px 40px;
}

.login-logo {
  width: 140px;
  margin-bottom: 24px;
  user-select: none;
}

.login-title {
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  font-size: 28px;
  background-image: linear-gradient(#1e1e1e, #636363);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
}

.login-subtitle {
  font-family: 'Montserrat', sans-serif;
  font-size: 15px;
  font-weight: 450;
  color: #575757;
  margin: 8px 0 32px;
  text-align: center;
}

.login-form {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.login-label {
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  font-weight: bold;
  color: #1e1e1e;
  margin-bottom: 6px;
}

.login-input {
  font-family: 'Montserrat', sans-serif;
  font-size: 15px;
  padding: 12px 16px;
  margin-bottom: 20px;
  border: 1.6px solid #d9d9d9;
  border-radius: 12px;
  outline: none;
  transition: border-color 0.3s;
  user-select: text;
}

.login-input:focus {
  border-color: #267a7a;
}

.login-error {
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  color: #c0392b;
  margin: -8px 0 16px;
}

.login-button {
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  font-size: 16px;
  color: white;
  background-color: #267a7a;
  border-radius: 111.11px;
  padding: 14px 30px;
  margin-top: 8px;
  cursor: pointer;
  transition: 0.5s;
}

.login-button:hover:not(:disabled) {
  background-color: #225c5c;
}

.login-button:disabled {
  background-color: #a9c4c4;
  cursor: not-allowed;
}
</style>
