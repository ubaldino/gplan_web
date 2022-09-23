<template>
  <div class="q-pa-md">
    <q-table
      title="Pilares"
      dense
      :rows="pilares.all"
      :columns="columns"
      row-key="codigo"
      :rows-per-page-options="rowsPerPageOptions"
    />
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useQuasar } from "quasar";
import { pilaresStore } from "../../stores/pilaresStore";

document.title = "Pilares";

const $q = useQuasar();

const pilares = pilaresStore();
pilares.fetchPilares();

const rowsPerPageOptions = computed(() => {
  return $q.screen.gt.xs ? ($q.screen.gt.sm ? [30, 50, 80] : [30, 50]) : [30];
});

const columns = [
  {
    name: "codigo",
    required: true,
    label: "Codigo",
    align: "left",
    field: (row) => row.codigo,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "denominacion",
    align: "left",
    label: "Denominacion",
    field: "denominacion",
    sortable: true,
  },
];
</script>
