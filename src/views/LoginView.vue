<script setup lang="ts">
import PublicNavBar from '@/components/UI/PublicNavBar.vue';
import LoginForm from '@/components/UI/LoginForm.vue';
</script>

<template>
  <PublicNavBar/>
  <main class="login">
    <section class="login-left">

    </section>
    <section class="login-right">
      <LoginForm/>
    </section>
  </main>
</template>
<style lang="css" scoped>
  main.login {
    width: 100%;
    display: flex;
    height: 95vh;
    flex-direction: row;

  }
  section.login-left {
      width: 80%;
      min-height: 100%;
      display: flex;
      flex-direction:row;
      justify-content: center;
      align-items: center;
    }
  section.login-right{
      width: 20%;
      height: 80%;
      display: flex;
      flex-direction:row;
      justify-content: center;
      align-items: start;
      padding-top:10vh
    }
  @media screen and (min-width:450px) and (max-width:800px){
    section.login-left{
      display: none;
      width: 0;
    }
    section.login-right{
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%;
      padding-top:0 ;
    }
  }  

  @media screen and (max-width:450px){
    section.login-left{
      display: none;
      width: 0;
    }
    section.login-right{
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%;
      padding-top:0 ;
    }
  }
</style>
