<template>
  <transition name="fade" mode="out-in">
    <div class="card shadow rounded-lg py-5">
      <div class="card-body">
        <div class="row align-items-center">
          <div class="q-pa-md q-gutter-sm">
            <q-btn align="left" class="btn-fixed-width" color="primary" label="PTDI" />
            <q-btn align="right" class="btn-fixed-width" color="secondary" label="PEI" />
            <q-btn align="between" class="btn-fixed-width" color="orange" label="MIGRACIÓN DE DATOS" />
            <q-btn align="between" class="btn-fixed-width" color="positive" label="REPORTES" />
            <q-btn align="between" class="btn-fixed-width" color="accent" label="PARÁMETROS" />
            <q-btn align="around" class="btn-fixed-width" color="brown-5" label="BITÁCORA INTERNA" />
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import LogoVue from "../components/Logo.vue";

document.title = "Inicio de GPLAN";

console.log(JSON.stringify(import.meta.env, null, 4));
</script>
