<script setup lang="ts">
import { ref,useTemplateRef } from 'vue';
    let {messages,mode,isHidden,handle}= defineProps(
        {
            messages:{
                type: Array,
                default:()=> []
            },
            mode:{
                type:String,
                default:'info'
            },
            isHidden:{
                type:Boolean,
                default:true
            },
            handle: {
                type:Function,
                default: ()=>{console.log('default function');}
            }
        }
    );
    let hidden = ref(isHidden);
    let container = useTemplateRef('destroyAlertContainer');
    function destroyAlert(ev:Event){
        
        let target = ev.target as HTMLElement;
        container.value?.removeChild(target.parentElement as HTMLElement);
        if(container.value?.childElementCount == 0){
            handle();
        }
    }
</script>
<template>

    <section class="alert-container" :class="{'hidden':hidden}" ref="destroyAlertContainer">
        <article v-if="mode=='error'" v-for="(message,index) in messages" class="alert error"   :class="{'hidden':hidden}"  :key="index">
            <p>{{message}}  </p><span @click="destroyAlert($event)">x</span>
        </article>
        <article v-else-if="mode=='warning'" v-for="(message,index2) in messages" class="alert warning"   :class="{'hidden':hidden}" :key="index2">
            <p>{{message}}  </p>  <span @click="destroyAlert($event)">x</span>
        </article>
        <article v-else-if="mode=='success'" v-for="(message,index3) in messages" class="alert success"   :class="{'hidden':hidden}" :key="index3">
            <p>{{message}}   </p><span @click="destroyAlert($event)">x</span>
        </article>
        <article v-else v-for="(message,index4) in messages" class="alert"   :class="{'hidden':hidden}" :key="index4">
            <p>{{message}}  </p> <span @click="destroyAlert($event)">x</span>
        </article>  
    </section>            
        
</template>
<style lang="css" scoped>
    .hidden{
        display: none;
    }


    .alert-container{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction:column;
        flex-wrap: nowrap;
        gap:2px;
        width: 60%;
        height: fit-content;
        position: absolute;
        top:10px;
        left: 25%;
        z-index: 200;
    }
    .alert{
        display:flex;
        flex-direction: row;
        padding: 5px 2rem 5px 2rem;
        gap:4px;
        width: 90%;
        border-radius:5px ;
        font-weight: bold;
        justify-content: center;

        &> span {
            width: 20px;
            height:20px;
            font-size: 20px;
            font-weight: bold;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 2px;
            font-family: sans-serif;
            cursor: pointer;
        }
        &>p{
            display: flex;
            justify-content: start;
            align-items: center;
            width: 99%;
        }

    }
    .error {
        border:rgb(197, 74, 74) solid 1px;
        background-color: rgb(255, 202, 202);
        color:#000;

        &> span{
            border:rgb(197, 74, 74) solid 1px;
        }
    }
    .success {
        border:rgb(84, 197, 74) solid 1px;
        background-color: rgb(202, 255, 210);
        color:#000;
        &> span{
            border:rgb(84, 197, 74) solid 1px;
        }
    }
    .info {
        border:rgb(74, 185, 197) solid 1px;
        background-color: rgb(202, 244, 255);
        color:#000;
        &> span{
            border:rgb(74, 185, 197) solid 1px;
        }
    }
    .warning {
        border:rgb(197, 193, 74) solid 1px;
        background-color: rgb(254, 255, 202);
        color:#000;
        &> span{
            border:rgb(197, 193, 74) solid 1px;
        }
    }

</style>