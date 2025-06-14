<script setup lang="ts">
import { GET } from '@/utils/HTTP';
import TextFiels from './TextFields.vue'
import type { Plan } from '@/utils/types';
import { ref,useTemplateRef } from 'vue';
    let businessName = ref<string>("");
    let businessAddress = ref<string>("");
    let businessPhone = ref<string>("");
    let planes = ref<Plan[]>([]);
    let planesArea = useTemplateRef('planes-area');

    GET( 'plan').then(
        async (resp) => {
                let json = await resp.json();
                let result:Array<Plan> = json.data.map((plan:Array<any>) => {
                    return {
                        id: plan[0],
                        name: plan[1],
                        value: plan[2],
                        frequency: plan[3]
                    }
                })
                planes.value=result
                }
            
        )
    
    function selectPlan(planName: string) {
        // Aquí puedes manejar la lógica para seleccionar un plan
        let input = document.getElementById(planName) as HTMLInputElement;
        if(input!=null){
            input.checked = true;}
            if(planesArea.value?.children ==null)return;
            for(let plan =0;plan < planesArea.value?.children.length;plan++){
                let item: HTMLElement = planesArea.value?.children[plan] as HTMLElement;
                if(item != undefined){
                    console.log(item);
                    item.classList.remove('selected');
                }
            }
            input.parentElement?.classList.add('selected');
            
        }
    

</script>
<template>
    <section class="business-info">
        <TextFiels label="Nombre del Negocio" type="text" placeholder="Nombre del negocio" :value="businessName" :required="true" :name="'businessName'"/>

        <TextFiels :name="'businessAddress'" label="Dirección del Negocio" type="text" placeholder="Dirección del negocio" :value="businessAddress" :required="true"/>

        <TextFiels :name="'businessPhone'" label="Telefono del Negocio" type="phone" placeholder="Telefono del negocio" :required="true" :value="businessPhone"/>
        <section class="planes-area" ref="planes-area">
            <article  v-for="plan in planes" :key="plan.id" class="plan-card">
                <input type="radio" :value="plan.id" :id="plan.name" name="plan" class="input-plan"/>
                <section class="plan-header">
                    <h3>{{ plan.name }}</h3>
                </section>
                <section class="plan-body">
                    <p v-if="plan.frequency =='MONTHLY'">
                        {{ plan.value }} / Mes
                    </p>
                    <p v-else>
                        {{ plan.value }} / año
                    </p>
                </section>
                <section class="card-footer">
                    <button @click.prevent="selectPlan(plan.name)" type="button">Seleccionar</button>
                </section>
            </article>
        </section>

    </section>
</template>
<style lang="css" scoped>   
    .business-info{
        height: clamp(40vh,50vh,60vh);
    }

    .planes-area {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items:center;
        flex-wrap: nowrap;
        gap:5px;
        padding: 2px 10px 20px 10px; 
        & > .plan-card{
            width: 33.33%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 4px;
            background-color: var(--bg-200);
            color:var(--text-primary);
            border-radius: 10px;
            border: 2px solid var(--accent-100);
            & > .input-plan {
                display:none;
                
            }
            & > .plan.body{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                font-weight: bold;
            }
            & > .card-footer{
                display: flex;
                flex-direction: column;
                width: 100%;
                justify-content: center;
                align-items: center;
                & > button {
                    height: clamp(2rem,2.5rem,3rem);
                    background-color: var(--accent-100);
                    border-radius: 3px;
                    font-weight: bold;
                    color: var(--accent-200);
                    border:none;
                    cursor: pointr
                }
            }
        }
    }

    .selected {
        box-shadow: 0 0 5px var(--accent-100);
        background-color: var(--bg-100) !important;
    }
</style>