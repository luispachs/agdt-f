<script setup lang="ts">
import Button from '@/components/UI/NewServicePanel.vue';

function handleNewService(ev:Event){}
</script>
<template>
    <section class="new-service-panel">
        <article class="empty-section"></article>
        <article class="fullfill-section">
            <Button :variant="'primary'" :type="'button'" :handle="handleNewService" class="btn">Nuevo</Button>
        </article>
    </section>
    <section class="services">

    </section>
</template>
<style scope>
.new-service-panel{
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}
.empty-section{
    display: block;
    width: 80%;
    flex-shrink: 2;
    flex-grow: 2;
}
.fullfill-section{
    display: flex;
    width: 20%;
    justify-content: center;
    align-items: center;
    flex-shrink: 1;
    flex-grow: 1;   
}
.services {
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5px;
    box-sizing: border-box;
}



</style>