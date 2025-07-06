<script setup lang="ts">
import { RouterLink } from 'vue-router'; 
import { useRouter } from 'vue-router';

let route = useRouter();



</script>
<template>
        <article class="configuration-nav-item">
            <RouterLink to="/configuration/users" class="configuration-nav-link">Usuarios</RouterLink>
        </article>
        <article class="configuration-nav-item">
            <RouterLink to="/configuration/payments" class="configuration-nav-link">Pagos</RouterLink>
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
        <article class="configuration-nav-item">
            <RouterLink to="/configuration/stats" class="configuration-nav-link">Estadisticas</RouterLink>
        </article>
</template>
<style scoped>
    .configuration-nav-item{
            display: flex;
            box-sizing: border-box;
            padding: 4px 8px;
            justify-content: center;
            align-items: center;
            border-radius: clamp(3px,4px,5px);
            width: 100%;
            height: 2rem;
            &:hover{
                background-color: var(--accent-200);
            }
        }

    .configuration-nav-link{
        text-decoration: none;
        color: var(--text-100);
        font-size: clamp(12px,14px,16px);
        font-weight: bold;
        font-family: sans-serif;
        text-align: center;
        display: block;
        height: 2rem;
        text-align: center;
        margin-top: auto;
        margin-bottom: auto;
    }

    @media screen and (min-width:480px) and (max-width:700px) {
        .configuration-nav-item{
            display: flex;
            justify-content: center;
            box-sizing: border-box;
            padding: 4px 8px;
            align-items: center;
            border-radius: clamp(3px,4px,5px);
            width: 100%;
            justify-content: center;
            align-items: center;
            height: 1.5rem;

            &:hover{
                background-color: var(--accent-200);
            }
        }

        .configuration-nav-link{
            text-decoration: none;
            color: var(--text-100);
            font-size: clamp(12px,14px,16px);
            font-weight: bold;
            font-family: sans-serif;
            text-align: center;
            display: block;
            text-align: center;
            height: 1.5rem;
            margin-top: auto;
            margin-bottom: auto;

        }
    }

    @media screen and (max-width:480px) {
        .configuration-nav-item{
            display: flex;
            justify-content: center;
            box-sizing: border-box;
            padding: 2px;
            justify-content: center;
            align-items: center;
            width: 100%;
            flex-grow: 1;
            flex-shrink: 1;
            height: 1rem;

            &:hover{
                background-color: var(--accent-200);
            }
        }

        .configuration-nav-link{
            text-decoration: none;
            color: var(--text-100);
            font-size: clamp(10px,12px,14px);
            font-weight: bold;
            font-family: sans-serif;
            display: block;
            text-align: center;
            height: 1rem;
            margin-top: auto;
            margin-bottom: auto;

        }
    }

</style>