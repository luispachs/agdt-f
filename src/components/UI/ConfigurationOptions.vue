<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>
<template>
    <nav class="configuration-nav">
        <article class="configuration-nav-item">
            <RouterLink to="/configuration/users" class="configuration-nav-link">Usuarios</RouterLink>
        </article>
        <article class="configuration-nav-item">
            <RouterLink to="/configuration/stores" class="configuration-nav-link">Tiendas</RouterLink>
        </article>
        <article class="configuration-nav-item">
            <RouterLink to="/configuration/roles" class="configuration-nav-link">Roles</RouterLink>
        </article>
        <article class="configuration-nav-item">
            <RouterLink to="/configuration/products" class="configuration-nav-link">Productos</RouterLink>
        </article>
        <article class="configuration-nav-item">
            <RouterLink to="/configuration/modifications" class="configuration-nav-link">Modificaciones</RouterLink>
        </article>
    </nav>
</template>
<style scoped>
    .configuration-nav{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: start;
        padding: 5px 10px;
        gap: 2rem;
    }
    .configuration-nav-item{
            display: block;
            box-sizing: border-box;
            padding: 4px 8px;
            align-items: center;
            margin-left: auto;
            margin-right: auto;
        }

    .configuration-nav-link{
        text-decoration: none;
        color: var(--text-100);
        font-size: clamp(12px,14px,16px);
        font-weight: bold;
        font-family: sans-serif;
    }

    @media screen and (min-width:480px) and (max-width:700px) {
        .configuration-nav{
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 5px 10px;
        }
        .configuration-nav-item{
            display: block;
            justify-content: center;
            box-sizing: border-box;
            padding: 4px 8px;
            align-items: center;

        }

        .configuration-nav-link{
            text-decoration: none;
            color: var(--text-100);
            font-size: clamp(12px,14px,16px);
            font-weight: bold;
            font-family: sans-serif;
        }
    }

    @media screen and (max-width:480px) {
        .configuration-nav{
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            padding: 2.5px 5px;
            overflow-x: scroll;
            gap: 5px;
        }
        .configuration-nav-item{
            display: block;
            justify-content: center;
            box-sizing: border-box;
            padding: 4px;
            align-items: center;

        }

        .configuration-nav-link{
            text-decoration: none;
            color: var(--text-100);
            font-size: clamp(12px,14px,16px);
            font-weight: bold;
            font-family: sans-serif;
        }
    }

</style>