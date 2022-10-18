<template>
  <div class="q-pa-md">
    <q-btn-group spread>
      <q-btn
        color="purple"
        :label="entidadStore.entidadInstitucional.denominacion"
        icon="visibility"
      />
      <q-btn
        :to="{
          name: 'entidades-ptdi-resultados-agregar',
          params: { codigo: entidadStore.entidadInstitucional.codigo },
        }"
        color="purple"
        label="Agregar Nuevo Resultado"
        icon="timeline"
      />
    </q-btn-group>
  </div>
</template>

<script setup>
import { reactive, onMounted, onBeforeMount } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useEntidadInstitucionalStore } from "../../../stores/entidadInstitucionalStore";

const route = useRoute();
const entidadStore = useEntidadInstitucionalStore();

// Now you can access params like:
onBeforeMount(() => {
  console.log(route.params.codigo);
  entidadStore.fetchEntidad(route.params.codigo);
});
</script>

<style scoped>
.ant-table-striped :deep(.table-striped) td {
  background-color: #fafafa;
}
.padding {
  padding-left: 1rem;
  padding-right: 1rem;
}
</style>
