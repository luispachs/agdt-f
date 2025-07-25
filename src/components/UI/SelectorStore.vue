<script lang="ts" setup>
    import image from '@/assets/icons/plus.svg';
    import { GET } from '@/utils/HTTP';
    import { ref } from 'vue';

    let storeList = ref<Array<Object>>([]);

    let token = localStorage.getItem(import.meta.env.VITE_SESSION_TOKEN);
    let response = GET('stores',null,{'Authorization':`Bearer ${token}` })

    response.then(async (resp)=>{
        let json = await resp.json();
    });

</script>
<template>
    <section class="selector-store">
        <article>
            <select class="selector">
                
            </select>
        </article>
        <article>
            <img :src="image" class="selector-plus-icon"/>
        </article>
    </section>
</template>
<style scoped>
.selector-plus-icon{
    width: 20px;
    height: 20px;
    cursor:pointer;
}
.selector{
    width: 100%;
    appearance: none;
    outline: none;
    border: none;
    border-bottom: 1px solid var(--accent-100);
    background-color: #fff;
    text-align: center;
    color: var(--accent-100);
}
.selector-store{
    width: clamp(200px,250px,300px);
    display: flex;
    flex-direction: row;
    &>article:first-child{
        width: 70%;
        padding-left: 3px;
        padding-right: 3px;
    }
    &>article:last-child{
        width: 30%;
    }
}
</style>