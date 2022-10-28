<template>
  <a-row class="row align-items-center">
    <a-col :xs="5" :sm="5" :md="5" :lg="5" :xl="5"></a-col>
    <a-col :xs="14" :sm="14" :md="14" :lg="14" :xl="14">
      <div class="card shadow rounded-lg py-5">
        <div class="card-body">
          <div>
            <div class="q-pa-md q-gutter-sm">
              <q-btn
                to="/entidades/crear"
                label="Crear Entidad"
                align="center"
                color="primary"
              />
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
    </a-col>
    <a-col :xs="5" :sm="5" :md="5" :lg="5" :xl="5"></a-col>
  </a-row>

  <a-row>
    <a-col :xs="1" :sm="1" :md="1" :lg="1" :xl="1"></a-col>
    <a-col :xs="22" :sm="22" :md="22" :lg="22" :xl="22">
      <div class="q-pa-md">
        <div
          class="row"
          v-for="(dep, index) in departamentosStore.all"
          :key="index"
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
                      <a-col
                        v-for="entidad in dep.entidades"
                        :key="entidad"
                        :span="6"
                      >
                        <a-card :title="entidad.sigla" :bordered="false">
                          <p>{{ entidad.denominacion }}</p>
                          <q-btn
                            v-if="entidad.ptdi"
                            :to="{
                              name: 'entidades-ptdi',
                              params: { codigo: entidad.codigo },
                            }"
                            align="left"
                            class="btn-fixed-width"
                            color="primary"
                            label="PTDI"
                          />
                          <q-btn
                            v-else
                            :to="{
                              name: 'entidades-ptdi-crear',
                              params: { codigo: entidad.codigo },
                            }"
                            align="left"
                            class="btn-fixed-width"
                            color="primary"
                            label="Crear PTDI"
                          />
                          <q-btn
                            :to="{
                              name: 'entidades-tecnicos',
                              params: { codigo: entidad.codigo },
                            }"
                            align="right"
                            class="btn-fixed-width"
                            color="secondary"
                            label="TECNICOS"
                          />
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
    </a-col>
    <a-col :xs="1" :sm="1" :md="1" :lg="1" :xl="1"></a-col>
  </a-row>
</template>

<script setup>
import LogoVue from "../components/Logo.vue";
import { useDepartamentosStore } from "../stores/departamentosStore";

const departamentosStore = useDepartamentosStore();

departamentosStore.fetchDepartamentos();
// departamentosStore.fetchParaQuinquenios();

document.title = "Inicio de GPLAN";

console.log(JSON.stringify(import.meta.env, null, 4));
</script>
