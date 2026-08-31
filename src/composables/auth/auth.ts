import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useAuthStore } from "@/stores";

export function useAuth() {
    const authStore = useAuthStore();
    const { isAuthenticated } = storeToRefs(authStore);

    onMounted(() => authStore.loadUser());

    return { loadUser: authStore.loadUser, isLogged: isAuthenticated };
}
