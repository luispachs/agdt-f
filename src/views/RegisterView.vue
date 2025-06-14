<script setup lang="ts">
import { ref} from 'vue';
import Tab from '@/components/UI/Tab.vue';
import RegisterForm from '@/components/UI/RegisterForm.vue'
import PublicNavBar from '@/components/UI/PublicNavBar.vue';
  let currentTab = ref(0);
  let tabs = ref<{tab1:boolean;tab2:boolean}>({
    tab1: true,
    tab2: false,
  });
 
  const changeTab = (ev,index)=>{
    currentTab.value = index;
    switch (index) {
        case 0:
            tabs.value = {
                tab1: true,
                tab2: false,
            };
            break;
        case 1: 
           tabs.value =  {
                tab1 :false,
                tab2 :true
            };
            break;
    
        default:
            tabs.value = {
                    tab1: true,
                    tab2: false,
                };
            break;
    }
  }
</script>
<template>
    <PublicNavBar/>
    <main>
        <section class="tabs">
            <Tab :handle="changeTab" label="Información de propietario" :isSelected="tabs.tab1" Tkey="0"/>     
            <Tab :handle="changeTab" label="Información de Negocio" :isSelected="tabs.tab2" Tkey="1"/>
        </section>
        <section class="tabs-content">
            <RegisterForm  :tabs="tabs" :tabHandle="changeTab"/>
        </section>
    </main>
</template>
<style scoped>
    main{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 99vh;
    }
    .tabs{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap:5px;
        padding: 2px;
    }
    .tabs-content{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: clamp(40vh,50vh,60vh);
    }
       
</style>