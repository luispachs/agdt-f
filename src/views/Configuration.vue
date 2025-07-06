<script setup lang="ts">
import ConfigurationOptions from '@/components/UI/ConfigurationOptions.vue';
import PrivateNavBar from '@/components/UI/PrivateNavBar.vue';
import { RouterView } from 'vue-router';
</script>
<template>
    <PrivateNavBar/>
    <section class="main-content">
        <aside class="nav-content">
            <ConfigurationOptions/>
        </aside>
        <main  class="content">
            <RouterView></RouterView>
        </main>
    </section>
</template>
<style scoped>
    .main-content{
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-start;
        height: 95vh;
    }

    .nav-content{
        height: 95vh;
        width: 10%;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        background-color: var(--bg-300);
    }
    .content{
        height: 95vh;
        box-sizing: border-box;
        width: 80%;
    }

    @media screen and (min-width:480px) and (max-width:700px){
          .main-content{
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: flex-start;
            height: 95vh;
        }  
        .nav-content{
            height: 95vh;
            box-sizing: border-box;
            width: 10%;
            display: flex;
            flex-direction: column;
            background-color: var(--bg-300);
            justify-content: center;
            align-items: start;
            gap: 50px;
        }
        .content{
            height: 95vh;
            box-sizing: border-box;
            width: 80%;
        }
    }

    @media screen and (max-width:480px){             
        .main-content{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            height: 95vh;
            width: 100%;
        }   
        .nav-content{
            height: 4vh;
            width: 100%;
            display: flex;
            flex-direction: row;
            background-color: var(--bg-300);

        }
        .content{
            height: 91vh;
            width: 100%;
        }
    }
</style>