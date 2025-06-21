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
                        monthly: plan[2],
                        yearly: plan[3],
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
                    item.classList.remove('selected');
                }
            }
            input.parentElement?.classList.add('selected');
            
        }

        function frequencySelected(ev:Event){
            let target = ev.target as HTMLInputElement;
            if(target.parentElement!.parentElement!.parentElement?.dataset.index == planesArea.value?.dataset.index){
              target.classList.toggle('frequency-selected');
              target.querySelector('input')!.checked =true;
            }

        }
    

</script>
<template>
    <section class="business-info">
        <TextFiels label="Nombre del Negocio" type="text" placeholder="Nombre del negocio" :value="businessName" :required="true" :name="'businessName'"/>

        <TextFiels :name="'businessAddress'" label="Dirección del Negocio" type="text" placeholder="Dirección del negocio" :value="businessAddress" :required="true"/>

        <TextFiels :name="'businessPhone'" label="Telefono del Negocio" type="phone" placeholder="Telefono del negocio" :required="true" :value="businessPhone"/>
        <section class="planes-area" ref="planes-area">
            <article  v-for="plan in planes" :key="plan.id" class="plan-card" :data-index="plan.id">
                <input type="radio" :value="plan.id" :id="plan.name" name="plan" class="input-plan"/>
                <section class="plan-header">
                    <h3>{{ plan.name }}</h3>
                </section>
                <section class="plan-body">
                    <label v-on:click="frequencySelected($event)" :data-index="plan.id">
                        {{ plan.monthly }} / Mes
                        <input :value="plan.monthly" type="radio" class="hidden" :name="'select-frequency-'+plan.id"  :title="plan.name+'-'+plan.id"/>
                    </label>
                    <label v-on:click="frequencySelected($event)" :data-index="plan.id">
                        {{ plan.yearly }} / año
                      <input :value="plan.yearly" type="radio"  class="hidden" :name="'select-frequency-'+plan.id"  :title="plan.name+'-'+plan.id"/>
                    </label>
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
            & > .plan-body {
                display: flex;
                flex-direction: column;
                justify-content: center;
                height:10vh ;
                width: 90%;
              & > label {
                  align-items: center;
                  font-weight: bold;
                  margin-top: clamp(1px,2px,2px);
                  margin-bottom: clamp(1px,2px,2px);
                  width: 100%;
                  text-align: center;
                  cursor: pointer;
                border-bottom: 1px solid transparent;
              }
              & > label:hover{
                  border-bottom: 1px solid var(--accent-100);
              }
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
                    cursor: pointer
                }
            }
        }
    }

    .selected {
        box-shadow: 0 0 5px var(--accent-100);
        background-color: var(--bg-100) !important;
    }

    .frequency-selected {
      border: 2px solid var(--accent-100);
    }
</style>