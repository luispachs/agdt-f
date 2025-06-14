<script setup lang="ts">
    const props = defineProps(["label","handle","isSelected","Tkey"])
</script>
<template>
         <button @click="handle($event,Tkey)" class="tab"  :class="{tabSelected:isSelected}" disabled>{{ label }}</button>
</template>
<style lang="css" scoped>
    .tab {
        border: none;
        height: clamp(2rem,3rem,4rem);
        padding: 4px;
        border-radius: 3px;
        text-transform: uppercase;
    }
    .tabSelected{
        background-color: #b8cdec;
        color: var(--text-primary);
        font-weight: 600;

    }
</style>