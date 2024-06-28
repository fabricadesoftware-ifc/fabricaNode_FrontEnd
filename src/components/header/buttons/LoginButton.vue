<template>
    <RouterLink class="router-link" to="/login">
        <button class="login-button">ENTRAR</button>
    </RouterLink>
</template>

<style scoped>
.login-button {
    font-family: "Montserrat", sans-serif;
    color: white;
    background-color: #4A4BEB;
    border-radius: 15px;
    padding: 10px;
    font-size: 18px;
}

.router-link {
    text-decoration: none;
}

.login-button:hover{
    background-color: #267A7A;
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