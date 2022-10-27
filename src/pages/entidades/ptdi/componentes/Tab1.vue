<template>
  <a-row type="flex" justify="space-around" align="middle">
    <a-col :xs="24" :sm="20" :md="16" :lg="12" :xl="10">
      <h6>Sector de Planificación y Lineamiento Estratégico</h6>
      <a-form
        :model="formState"
        layout="vertical"
        name="nest-messages"
        :validate-messages="validateMessages"
        @finish="onFinish"
      >
        <a-form-item
          name="sector_planificacion_id"
          label="SECTOR DE PLANIFICACIÓN"
          :rules="[{ required: true }]"
        >
          <a-select
            v-model:value="formState.sector_planificacion_id"
            show-search
            placeholder="Elija un Sector"
            :filter-option="filterOption"
          >
            <a-select-option
              v-for="sect in sectoresPlanificacionStore.sectoresPlanificacion"
              :value="sect.id"
              :key="sect.id"
              :nombre="sect.nombre"
            >
              {{ sect.nombre }}
            </a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item
          name="lineamiento_estrategico_ptdi"
          label="LINEAMIENTO ESTRATÉGICO DE TERRITORIO"
          :rules="[{ required: true }]"
        >
          <a-textarea
            style="width: sm"
            v-model:value="formState.lineamiento_estrategico_ptdi"
            placeholder="Escriba el Lineamiento Estratégico de Desarrollo"
          />
        </a-form-item>
        <a-form-item
          name="objetivo_estrategico_ptdi"
          label="OBJETIVO ESTRATÉGICO"
          :rules="[{ required: true }]"
        >
          <a-textarea
            style="width: sm"
            v-model:value="formState.objetivo_estrategico_ptdi"
            placeholder="Escriba el Objetivo Estratégico"
          />
        </a-form-item>
        <a-form-item :wrapper-col="{ ...layout.wrapperCol, offset: 8 }">
          <a-button type="primary" html-type="submit">GUARDAR SECTOR</a-button>
        </a-form-item>
      </a-form>
    </a-col>
  </a-row>
</template>

<script setup>
import { ref, reactive, toRefs, computed, watch } from "vue";

import { useSectoresPlanificacionStore } from "../../../../stores/sectoresPlanificacionStore";

const sectoresPlanificacionStore = useSectoresPlanificacionStore();

sectoresPlanificacionStore.fetchAll();

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const validateMessages = {
  required: "${label} es requerido!",
};

const formState = reactive({
  sector_planificacion_id: null,
  lineamiento_estrategico_ptdi: "",
  objetivo_estrategico_ptdi: "",
});

const onFinish = (values) => {
  console.log("Success:");
  console.log(values);
};

const filterOption = (input, option) => {
  return option.nombre.toLowerCase().indexOf(input.toLowerCase()) >= 0;
};
</script>
