<template>
  <a-row>
    <a-col :xs="1" :sm="1" :md="1" :lg="1" :xl="1"></a-col>
    <a-col :xs="22" :sm="22" :md="22" :lg="22" :xl="22">
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

        <div class="col-11">
          <a-table
            :columns="columns"
            :row-key="(record) => record.codigo"
            :data-source="entidadInstitucionalStore.all"
            @change="handleTableChange"
          >
            <template #bodyCell="{ column, text }">
              <template v-if="column.dataIndex === 'name'"
                >{{ text.first }} {{ text.last }}</template
              >
            </template>
          </a-table>
        </div>
      </div>
    </a-col>
    <a-col :xs="1" :sm="1" :md="1" :lg="1" :xl="1"></a-col>
  </a-row>
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

const entidadInstitucionalStore = useEntidadInstitucionalStore();

onMounted(() => {
  entidadInstitucionalStore.fetchEntidades();
});

const columns = [
  {
    title: "CÓDIGO",
    dataIndex: "codigo",
    sorter: true,
    width: "20%",
  },
  {
    title: "SIGLA",
    dataIndex: "sigla",
    width: "20%",
  },
  {
    title: "DENOMINACIÓN",
    dataIndex: "denominacion",
    width: "20%",
  },
  {
    title: "TIPO ENTIDAD",
    dataIndex: ["tipoEntidad", "codigo"],
    key: "tipoEntidad",
    filters: [
      {
        text: "GAD",
        value: "GAD",
      },
      {
        text: "GAM",
        value: "GAM",
      },
    ],
  },
  {
    title: "DEPARTAMENTO",
    dataIndex: ["departamento", "denominacion"],
    filters: [
      {
        text: "TARIJA",
        value: "TARIJA",
      },
      {
        text: "PANDO",
        value: "PANDO",
      },
    ],
  },
];

const handleTableChange = (pag, filters, sorter) => {};
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
