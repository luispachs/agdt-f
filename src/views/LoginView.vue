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
    &> section.login-left {
      width: 80%;
      min-height: 95vh;
      display: flex;
      flex-direction:row;
      justify-content: center;
      align-items: center;
    }
    &> section.login-right{
      width: 20%;
      min-height: 95vh;
      display: flex;
      flex-direction:row;
      justify-content: center;
      align-items: start;
      padding-top:10vh
    }
  }


</style>
