<script lang="ts" setup>

import TextFields from "@/components/UI/TextFields.vue";
import Button from "@/components/UI/Button.vue";
import {FormParse} from "@/utils/FormParse.ts";
import {LoginFormValidator} from "@/utils/Validators/LoginFormValidator.ts";
import Alert from "@/components/UI/Alert.vue";
import {ref} from "vue";
import {POST} from "@/utils/HTTP"
import { useRouter } from "vue-router";


let router = useRouter();
let errors = ref<string[]>([]);
let hidden = ref(true);

function submitHandle(event:Event){
      let data = FormParse.parseToObject(event.target as HTMLFormElement);
      let validation = LoginFormValidator.safeParse(data);
      hidden.value = true;
      if(!validation.success){
           errors.value = validation.error.errors.map(elem=>elem.message);
           return;
      }
      POST('auth/login',data).then(
          async (resp)=>{
              let json = await resp.json();
              

              if(resp.status == 200){
                localStorage.setItem(import.meta.env.VITE_SESSION_TOKEN,json.token)
                await router.push(`/dashboard`);
                return;
              }else{}
              errors.value = [json.data];
              hidden.value = false;
          }
      ).catch(e=>{
        errors.value =[e.message]
        hidden.value = false;

      });
  }
</script>
<template>
  <form class="login-form" v-on:submit.prevent="submitHandle($event)">
    <Alert :messages="errors"  mode="error" :isHidden="hidden"/>
    <TextFields label="Email" placeholder="ejemplo@agendate.com" type="email" name="user-email"/>
    <TextFields label="Contraseña" placeholder="123456" type="password" name="user-password"/>
    <Button class="btn" :type="'submit'" :variant="'primary'" >Ingresar</Button>
  </form>
</template>
<style lang="css" scoped>
  .login-form{
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    gap:10px;
    position: relative;
  }
</style>