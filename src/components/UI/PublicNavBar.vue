<script lang="ts" setup>
    import { RouterLink } from 'vue-router';
</script>
<template>
    <section class="public-nav-bar">
        <section class="aux-nav">

        </section>
        <section class="nav-bar">
            <RouterLink to="/" class="nav-link">Inicio</RouterLink>
            <RouterLink to="/login" class="nav-link">Ingresar</RouterLink>
            <RouterLink to="/register" class="nav-link">Registro</RouterLink>
        </section>
    </section>
</template>
<style scoped>
    .public-nav-bar{
        display:flex;
        flex-direction: row;
        align-items: center;
        flex-wrap: nowrap;
        width: 100%;
        height: 5vh;
        background-color: var(--bg-100);
    }

</style>