<template>
    <RouterLink class="router-link" to="/login">
        <button class="login-button">Cadastre-se</button>
    </RouterLink>
</template>

<style scoped>
.login-button {
    font-family: "Montserrat", sans-serif;
    background-color: rgba(240, 248, 255, 0);
    color: #267A7A;
    border: 1.6px solid #267A7A;
    border-radius: 111.11px;
    padding: 17px 30px;
    font-size: 16px;
    font-weight: bold;
    width: max-content;
}

.router-link {
    text-decoration: none;
}

.login-button:hover{
    background-color: #ebedf0;
    transition: 0.5s;
}
@media (max-width:1000px) {
    .login-button {
        padding: 7px;
        font-size: 16px;
    }
}
@media (max-width:820px) {
    .login-button {
        padding: 6px;
        font-size: 14px;
    }
}
</style>