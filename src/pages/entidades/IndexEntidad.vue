<template>
  <br />
  <div class="row align-items-center">
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
</template>

<script setup>
import { reactive, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useEntidadInstitucionalStore } from "../../stores/entidadInstitucionalStore";

const router = useRouter();

const entidadInstitucionalStore = useEntidadInstitucionalStore();

onMounted(() => {
  entidadInstitucionalStore.fetchEntidades();
});

const columns = [
  {
    title: "Codigo",
    dataIndex: "codigo",
    sorter: true,
    width: "20%",
  },
  {
    title: "Sigla",
    dataIndex: "sigla",
    width: "20%",
  },
  {
    title: "Denominacion",
    dataIndex: "denominacion",
    width: "20%",
  },
  {
    title: "Tipo Entidad",
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
    title: "Departamento",
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
