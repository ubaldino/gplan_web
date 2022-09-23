<template></template>

<script setup>
import { ref, computed } from "vue";
import { useQuasar } from "quasar";
import { ejesStore } from "../../stores/ejesStore";

document.title = "Ejes";

const $q = useQuasar();

const ejes = ejesStore();
ejes.fetchEjes();

const rowsPerPageOptions = computed(() => {
  return $q.screen.gt.xs ? ($q.screen.gt.sm ? [30, 50, 80] : [30, 50]) : [30];
});
</script>
