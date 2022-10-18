<template>
  <div class="card shadow rounded-lg py-5">
    <div class="card-body">
      <div class="row align-items-center">
        <div class="q-pa-md q-gutter-sm">
          <q-btn to="/entidades/crear" label="Crear Entidad" />
          <q-btn
            align="between"
            class="btn-fixed-width"
            color="orange"
            label="MIGRACIÓN DE DATOS"
          />
          <q-btn
            align="between"
            class="btn-fixed-width"
            color="positive"
            label="REPORTES"
          />
          <q-btn
            align="between"
            class="btn-fixed-width"
            color="accent"
            label="PARÁMETROS"
          />
          <q-btn
            align="around"
            class="btn-fixed-width"
            color="brown-5"
            label="BITÁCORA INTERNA"
          />
        </div>
      </div>
    </div>
  </div>
  <div class="q-pa-md">
    <div
      class="row"
      v-for="(dep, index) in departamentosStore.all"
      :key="dep.codigo"
    >
      <div class="col">
        <q-card class="my-card" flat bordered>
          <q-item class="bg-teal text-white">
            <!--
            <q-item-section avatar>
              <q-avatar>
                <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
              </q-avatar>
            </q-item-section>
          -->

            <q-item-section>
              <q-item-label>{{ dep.denominacion }}</q-item-label>
            </q-item-section>
          </q-item>

          <q-separator />

          <q-card-section horizontal>
            <q-card-section class="col-12">
              <div style="background-color: #ececec; padding: 10px">
                <a-row :gutter="16">
                  <a-col v-for="entidad in dep.entidades" :span="6">
                    <a-card :title="entidad.sigla" :bordered="false">
                      <p>{{ entidad.denominacion }}</p>
                      <q-btn
                        :to="{
                          name: 'entidades-ptdi',
                          params: { codigo: entidad.codigo },
                        }"
                        align="left"
                        class="btn-fixed-width"
                        color="primary"
                        label="PTDI"
                      />
                      <!-- <q-btn
                        align="right"
                        class="btn-fixed-width"
                        color="secondary"
                        label="PEI"
                      /> -->
                    </a-card>
                  </a-col>
                </a-row>
              </div>
            </q-card-section>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script setup>
import LogoVue from "../components/Logo.vue";
import { useDepartamentosStore } from "../stores/departamentosStore";

const departamentosStore = useDepartamentosStore();

departamentosStore.fetchDepartamentos();

document.title = "Inicio de GPLAN";

console.log(JSON.stringify(import.meta.env, null, 4));
</script>
