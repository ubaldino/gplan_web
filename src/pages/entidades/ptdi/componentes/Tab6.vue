<template>
  <h6>Territorialización Resultado</h6>
  <a-form
    :model="formState"
    v-bind="layout"
    layout="vertical"
    name="territorializacion"
    :validate-messages="validateMessages"
    @finish="onFinish"
  >
    <a-row type="flex" justify="space-around" align="middle">
      <a-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6">
        <a-form-item
          label="Departamentos"
          name="departamento_id"
          :rules="[{ required: true }]"
        >
          <a-select v-model:value="formState.departamento_id">
            <a-select-option
              v-for="dep in departamentosStore.departamentosSelect"
              :value="dep.id"
              :key="dep.id"
            >
              {{ dep.denominacion }}
            </a-select-option>
          </a-select>
        </a-form-item>
      </a-col>
      <a-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6">
        <a-form-item
          label="Provincias"
          name="provincia_id"
          :rules="[{ required: true }]"
        >
          <a-select v-model:value="formState.provincia_id">
            <a-select-option
              v-for="pro in formState.provincias"
              :value="pro.id"
              :key="pro.id"
            >
              {{ pro.denominacion }}
            </a-select-option>
          </a-select>
        </a-form-item>
      </a-col>
      <a-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6">
        <a-form-item
          label="Municipios"
          name="municipio_id"
          :rules="[{ required: true }]"
        >
          <a-select v-model:value="formState.municipio_id">
            <a-select-option
              v-for="mun in formState.municipios"
              :value="mun.id"
              :key="mun.id"
            >
              {{ mun.denominacion }}
            </a-select-option>
          </a-select>
        </a-form-item>
      </a-col>
      <!--
      <a-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6">
        <a-form-item label="Distritos">
          <a-select v-model:value="formState.distrito_id">
            <a-select-option
              v-for="dep in departamentosStore.departamentosSelect"
              :value="dep.codigo"
              :key="dep.codigo"
            >
              {{ dep.denominacion }}
            </a-select-option>
          </a-select>
        </a-form-item>
      </a-col>
      -->
    </a-row>
    <a-row type="flex" justify="space-around" align="middle">
      <a-col :xs="24" :sm="10" :md="10" :lg="10" :xl="10">
        <a-form-item>
          <a-button type="primary" html-type="submit">
            GUARDAR TERRITORIALIZACIÓN
          </a-button>
        </a-form-item>
      </a-col>
    </a-row>
  </a-form>
</template>
<script setup>
import { reactive, watch, onBeforeMount } from "vue";
import { useDepartamentosStore } from "../../../../stores/departamentosStore";

const departamentosStore = useDepartamentosStore();

onBeforeMount(() => {
  departamentosStore.fetchDepartamentosForSelect();
});

const formState = reactive({
  departamento_id: null,
  provincia_id: null,
  municipio_id: null,
  distrito_id: null,
  provincias: [],
  municipios: [],
  distritos: [],
  region: null,
  municipio: null,
  distrito: null,
});

watch(
  () => formState.departamento_id,
  (newData, oldData) => {
    formState.provincias = newData
      ? departamentosStore.departamentosSelect.find(
          (e) => e.id === parseInt(newData)
        ).provincias
      : [];
  }
);

watch(
  () => formState.provincia_id,
  (newData, oldData) => {
    formState.municipios = newData
      ? formState.provincias.find((e) => e.id === parseInt(newData)).municipios
      : [];
  }
);

const layout = {
  labelCol: {
    span: 20,
  },
  labelWrap: true,
  wrapperCol: {
    span: 22,
  },
};

const onFinish = (values) => {
  console.log("Success:", values);
};

const handleDepChange = (value) => {
  console.log(`selected ${value}`);
};

const validateMessages = {
  required: "${label} es requirido!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
</script>
