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
    .aux-nav{
        width: 70%;
        display: flex;
        flex-direction:row;
        justify-content: flex-start;
        align-items: center;
        flex-shrink: 2;
        flex-grow: 2;
    }
    .nav-bar{
        width: 30%;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
        flex-shrink: 1;
        flex-grow: 1;
        box-sizing: border-box;
        padding-left: clamp(5px,10px,15px);
        padding-right: clamp(5px,10px,15px);
        gap:clamp(5px,10px,15px);
    }
    .nav-link{
        text-decoration: none;
        font-weight: bold;
        font-family: Arial, Helvetica, sans-serif;
        color:var(--text-primary);
        height: 4vh;
        border-radius: 3px;
        font-size: clamp(12px,14px,16px);
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: 12%;
        flex-shrink: 1;
        flex-grow: 1;
        
        &:hover{
            background-color: var(--accent-100);
            color:var(--text-primary)
        }
    }
</style>