<script setup lang="ts">
import PrivateNavBar from '@/components/UI/PrivateNavBar.vue';
import { RouterView } from 'vue-router';
import NewServicePanel from '@/components/UI/NewServicePanel.vue';
</script>
<template>
    <PrivateNavBar/>
    <main>
        <aside class="left-bar">
                <NewServicePanel/>
        </aside>
        <section class="content">
            <router-view>
            </router-view>
        </section>
    </main>
</template>
<style scoped>
main{
    display: flex;
    flex-direction: row;
    gap:30px;
    box-sizing: border-box;
    padding: 0 5px 0 5px;
    width: 100%;
    flex-wrap: nowrap;
    height: 95vh;
}

.left-bar{
    flex-basis: 20%;
    width: 20%;
    flex-grow: 1;
    flex-shrink: 1;
}
.content{
    flex-basis: 80%;
    width: 80%;
    flex-grow: 2;
    flex-shrink: 2;
}
@media screen and (min-width:450px) and (max-width:800px){
      main{
        display: flex;
        flex-direction: column;
        width: 100%;
        gap:5px;
        height: 95vh;
    }
    .left-bar{
        height: 25%;
        overflow-x: scroll;
        width: 100%;
        padding: 5px;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        flex-basis: 10%;
        flex-grow: 1;
        flex-shrink: 1;
    }
    .content{
        height: 75%;
        width: 100%;
        overflow-y: scroll;
        padding: 5px;
        display: flex;
        box-sizing: border-box;
        flex-direction: column;
        flex-basis: 90%;
        flex-grow: 2;
        flex-shrink: 2;
    }  
}

@media screen and (max-width:450px){
    main{
        display: flex;
        flex-direction: column;
        width: 100%;
        gap:5px;
        height: 95vh;
    }
    .left-bar{
        height: 25%;
        overflow-x: scroll;
        width: 100%;
        padding: 5px;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        flex-basis: 12%;
        flex-grow: 1;
        flex-shrink: 1;
    }
    .content{
        height: 75%;
        width: 100%;
        overflow-y: scroll;
        padding: 5px;
        display: flex;
        box-sizing: border-box;
        flex-direction: column;
        flex-basis: 88%;
        flex-grow: 2;
        flex-shrink: 2;
    }
}
</style>