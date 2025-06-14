<script setup lang="ts">
    import BussinessInfo from '@/components/UI/BusinessInfo.vue'
    import OwnerInfo from '@/components/UI/OwnerInfo.vue'
    import TabPaginator from '@/components/UI/TabPaginator.vue';
    import Alert from '@/components/UI/Alert.vue';
    import { useRouter } from 'vue-router';
    import {FormParse} from '../../utils/FormParse';
    import { RegisterFormValidator } from '@/utils/Validators/RegisterFormValidator';
    import {POST} from '@/utils/HTTP';
    import { ref } from 'vue';
import router from '@/router';
    const props= defineProps({
        tabs: {
            type: Object,
            default: () => ({
                tab1: true,
                tab2: false,
            }),
        },
        tabHandle: {
            type: Function,
            default: () => {
                console.log("default function");
            },
        },
    });

    const errors = ref<String[]>([]);
    const hidden = ref(false);

    function handleSubmit(evt:Event){
        let body = FormParse.parseToObject(evt.currentTarget as HTMLFormElement);
        let validation = RegisterFormValidator.safeParse(body);
        hidden.value = !hidden;
        if(!validation.success){
           errors.value = validation.error.errors.map((error)=>{
                return  `${error.path[0]}: ${error.message}`;
           })
        }

        POST('auth/register',body)
            .then(async (resp)=>{
                let d = await resp.json();
                if(resp.status ==200){
                    router.push('/')
                }else{
                    errors.value= [d.data]
                }
            }).catch(err=>{
                    errors.value=[err.message]
            })
    }

    function updateErrors (){
        
        errors.value = [];
        hidden.value = true;
    }

</script>
<template>
        <form class="tabs-container" @submit.prevent="handleSubmit($event)"  >
            <Alert :messages="errors" mode="error" :isHidden="hidden" :handle="updateErrors"/>   
            <article class="tab-panel"  :class="{hidden:!props.tabs.tab1}">
                <OwnerInfo/>
                <TabPaginator :tabHandle="props.tabHandle" :next="1"/>
            </article>
            <article class="tab-panel"  :class="{hidden:!props.tabs.tab2}">
                <BussinessInfo/>
                <TabPaginator :tabHandle="props.tabHandle" :prev="0" :isSubmit="true"/>
            </article>
        </form>
</template>
<style lang="css" scoped>
    .tabs-container{
        display: flex;
        flex-direction: column;
        justify-content:start;
        align-items: center;
        height: clamp(40vh,50vh,60vh);
    }
    .tab-panel{
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: center;
        width: 100%;
        gap: 10px;
        height: clamp(40vh,50vh,60vh);

    }
    .hidden{
        display: none;
    }
</style>