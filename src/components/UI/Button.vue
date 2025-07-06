<script setup lang="ts">
    let {buttonType,Icon,Disabled,variant,handle } = defineProps({
        buttonType:{
            type:String as () => 'button' | 'submit' | 'reset' | undefined, 
            default:'button'
        },
        Icon:{
            type:String,
            default:'button'
        },
        Disabled:{
            type:Boolean,
            default:false
        },
        variant:{
            type:String,
            default:'default'
        },
        handle:{
        type:Function,
        default(ev:Event){
            console.log('Button Clicked')
        }}
    })

</script>
<template>
    <button v-if="variant=='primary'" :disabled="Disabled" class="btn" v-on:click="handle($event)"><slot></slot></button>
    <button v-else class="btn default" :disabled="Disabled" v-on:click="handle($event)"><slot></slot></button>
</template>
<style lang="css" scoped>
    .btn{
        width: clamp(100px,300px,100%);
        height: clamp(50px,60px,80px);
    }
</style>