<script setup lang="ts">
    import TextFields from './TextFields.vue'
    import { ref } from 'vue';
    let ownerName = ref<string>("");
    let ownerAddress = ref<string>(""); 
    let ownerPhone = ref<string>("");
    let ownerEmail = ref<string>("");
    let ownerPassword = ref<string>("");
    let ownerPasswordConfirm = ref<string>("");
</script>

<template>
    <section class="owner-info">
        <TextFields label="Nombre del Propietario" type="text" placeholder="Nombre del propietario" :value="ownerName" :required="true" :name="'ownerName'"/>
        <TextFields label="Dirección del Propietario" type="text" placeholder="Dirección del propietario" :value="ownerAddress" :required="true" :name="'ownerAddress'"/>
        <TextFields label="telefono del Propietario" type="phone" placeholder="Telefono del propietario" :value="ownerPhone" :required="true" :name="'ownerPhone'"/>
        <TextFields label="Email del Propietario" type="email" placeholder="Correo del propietario" :value="ownerEmail" :required="true" :name="'ownerEmail'"/>
        <TextFields label="Contraseña" type="password" placeholder="Contraseña del propietario" :value="ownerPassword" :required="true" :name="'ownerPassword'"/>
        <TextFields label="Confirme contraseña" type="password" placeholder="Confirmar contraseña del propietario" :value="ownerPasswordConfirm" :required="true" :name="'ownerPasswordConfirm'"/>
    </section>
</template>
<style lang="css" scoped>
    .owner-info{
        height: clamp(40vh,50vh,60vh);
    }
</style>