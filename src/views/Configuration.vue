<script setup lang="ts">
import ConfigurationOptions from '@/components/UI/ConfigurationOptions.vue';
import PrivateNavBar from '@/components/UI/PrivateNavBar.vue';

</script>
<template>
    <PrivateNavBar/>
    <section class="main-content">
        <aside>
            <ConfigurationOptions/>
        </aside>
        <main>

        </main>
    </section>
</template>
<style scope>
    .main-content{
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-start;
        height: 96vh;
    }

    @media screen and (min-width:480px) and (max-width:700px){
          .main-content{
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: flex-start;
            height: 96vh;
        }  
    }

    @media screen and(max-width:480px){
        .main-content{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            height: 96vh;
        }
    }
</style>