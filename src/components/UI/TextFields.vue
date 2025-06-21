<script setup lang="ts">
import { ref } from 'vue';
    let {label,type,placeholder,value,required,name} = defineProps(["label","type","placeholder","value","required","name"]); 
    let isFocused = ref(false)
    let isRequired = required
    if(isRequired==undefined){
        isRequired = false
    }

    function focusin (event: FocusEvent) {
        isFocused.value = true
    }
    function focusout (event: FocusEvent) {
        isFocused.value = false
    }

</script>
<template>
    <div class="text-field" :class="{focused:isFocused}">
        <label v-if="label!=null" class="text-field__label" :class="{focusedLabel:isFocused}" :for="name">{{ label  }}</label>
        <input :type="type" v-bind="value" class="text-field__input" :placeholder="placeholder" :class="{focused:isFocused}" @focusin="focusin"  @focusout="focusout" :required="isRequired" :name="name" :id="name"/>
    </div>
</template>
<style lang="css" scoped>

    .text-field {
        display: flex;
        flex-direction: column;
        padding: 5px 15px;
        width: clamp(300px,20vw,50vw);
        position: relative;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
    }


    .text-field__label  {
            width: 80%;
            padding-left: 5px;
            font-weight: 800;
            color: var(--text-primary);
            font-size: clamp(11px,14px,16px);
            text-transform: capitalize;
            text-align: center;
            transition: text-align 0.3s ease-in-out ,font-size 0.3s ease-in-out,color 0.3s ease-in-out;  
        }

    .focusedLabel {
                    color:var(--text-accent);
                    font-size: clamp(8px,10px,12px);
                    text-align: left;
                    transition: text-align 0.3s ease-in-out ,font-size 0.3s ease-in-out,color 0.3s ease-in-out;  
            }
    


    .text-field__input {
            width: 100%;
            padding:4px 2px;
            outline: none;
            border: none;
            font-weight: 600;
            border-bottom: clamp(1px,2px,4px) solid #000;
            text-align: center;
    }
    .text-field__input::placeholder{
        font-weight: 800;
        font-size: clamp(11px,14px,16px);
        color: #767990;
    }
</style>