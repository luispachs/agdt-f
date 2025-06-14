<script setup lang="ts">
    let {buttonType,Text,Icon,Disabled,variant,handle } = defineProps({
        buttonType:{
            type:String as () => 'button' | 'submit' | 'reset' | undefined, 
            default:'button'
        },
        Text:{
            type:String,
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

    console.log(buttonType,Text,Icon,Disabled,variant)
</script>
<template>
    <button v-if="variant=='primary'" :type="buttonType" :disabled="Disabled" class="btn" v-on:click="handle($event)">{{ Text }}</button>
    <button v-else class="btn default" :type="buttonType" :disabled="Disabled" v-on:click="handle($event)">{{ Text }}</button>
</template>
<style lang="css" scoped>
    .btn{
        width: clamp(100px,300px,100%);
        height: clamp(50px,60px,80px);
    }
</style>