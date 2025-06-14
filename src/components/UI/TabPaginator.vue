<script setup lang="ts">
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
        <button v-if="props.next!=null" type="button" @click="props.tabHandle($event,props.next)" class="btn">Siguiente</button>
        <button v-if="props.isSubmit" type="submit" class="btn">Enviar</button>
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

    .btn{
        width: clamp(100px,300px,100%);
        height: clamp(30px,40px,60px);
        border: none;
        border-radius: 3px;
        box-shadow: 1px 1px 2px #b8cdec;
        font-weight: 900;
        &[type="submit"]{
            background-color: rgb(168, 233, 168);
            box-shadow: 1px 1px 2px #88b087;
        }
    }

    .btn:hover{
        background-color: #77cafa;
        color: var(--text-primary);
        transition: background-color 0.3s ease-in-out , color 0.3s ease-in-out;
        cursor: pointer;
        font-weight: 900;
        &[type="submit"]{
            background-color: rgb(123, 243, 123);
            box-shadow: 1px 1px 2px #88b087;
        }
    }

</style>