<script setup lang="ts">
 import { RouterLink } from 'vue-router';
 import { useRoute } from 'vue-router';
 let route = useRoute();
 let token = route.params.token;
</script>
<template>
<nav class="private-navigation">
    <article class="aux-nav"></article>
    <article class="nav-bar">
        <RouterLink :to="`/dashboard`" :replace="true" class="nav-link">Inicio</RouterLink>
        <RouterLink to="" class="nav-link">Historico</RouterLink>
        <RouterLink to="/configuration" class="nav-link">Configuración</RouterLink>
    </article>
</nav>
</template>
<style scoped>
.private-navigation {
    display: flex;
    flex-direction: row;
    height: 5vh;
    width: 100%;
    background-color: var(--bg-100);
}


</style>