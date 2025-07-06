<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>
<template>
    <h1 class="title">Aqu&iacute; Puedes encontrar lo siguiente:</h1>
    <section class="panel-info">
        <h4><RouterLink to="/configuration/users" class="link">Administraci&oacute;n de Usuarios</RouterLink></h4>
        <h4><RouterLink to="/configuration/payments" class="link">Administraci&oacute;n de Pagos</RouterLink></h4>
        <h4><RouterLink to="/configuration/stores" class="link">Administraci&oacute;n de Tienda</RouterLink></h4>
        <h4><RouterLink to="/configuration/roles" class="link">Administraci&oacute;n de Roles</RouterLink></h4>
        <h4><RouterLink to="/configuration/products" class="link">Administraci&oacute;n de Productos</RouterLink></h4>
        <h4><RouterLink to="/configuration/modifications" class="link">Administraci&oacute;n de Modificaciones</RouterLink></h4>
        <h4><RouterLink to="/configuration/stats" class="link">Administraci&oacute;n de Estadisticas</RouterLink></h4>
    </section>
</template>
<style scoped>
    .title{
        font-family: sans-serif;
        font-weight: 800;
        font-size: clamp(12px,14px,16px);
        padding-left: 10px;
    }
    .panel-info{
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: center;
        padding: 20px;

        &>h4{
            font-family:sans-serif;
            display: flex;
            justify-content: start;
            align-items: center;
            font-weight: 800;
            font-size: clamp(14px,16px,18px);
            color: var(--text-primary);
            width: 100%;
            text-align: left;
            padding-left: 40px;
            box-sizing: border-box;
            height: 20px;
            margin-top: 10px;
            margin-bottom: 10px;
            &>.link{
                text-decoration: none;
                color: var(--text-primary);
                display: flex;
                height: inherit;
                width: inherit;
                &:visited{
                    color: var(--text-primary);
                }
                &:hover{
                    background: linear-gradient(90deg,var(--accent-100) ,white,transparent );
                    color:white;
                }
            }
        }
    }
</style>