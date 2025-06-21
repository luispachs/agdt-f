<script setup lang="ts">
import Button from '@/components/UI/Button.vue';
    const props =defineProps(
        {
            tabHandle: {
                type: Function,
                default: () => {
                     console.log("default function");
                },
            },
            prev:{
                type:Number,
                default: null,
            },
            next: {
                type:Number,
                default: null,
            },
            isSubmit : {
                type:Boolean,
                default: false,
            }
        }
    );
</script>
<template>
    <section class="tabs-paginator">
        <Button v-if="props.prev!=null" type="button" @click="props.tabHandle($event,props.prev)" class="btn">Anterior</button>
        <Button v-if="props.next!=null" type="button" @click="props.tabHandle($event,props.next)" class="btn">Siguiente</Button>
        <Button v-if="props.isSubmit" type="submit" class="btn">Enviar</Button>
    </section>
</template>
<style lang="css" scoped>
    .tabs-paginator{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 5px;
    }
</style>