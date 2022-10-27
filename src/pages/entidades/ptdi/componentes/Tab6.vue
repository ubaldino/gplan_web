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
      <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <a-row type="flex" justify="space-around" align="middle">
          <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <a-form-item
              label="Departamento"
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
        </a-row>

        <a-row type="flex" justify="space-around" align="middle">
          <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <a-form-item
              label="Region"
              name="region"
              :rules="[{ required: true }]"
            >
              <a-textarea
                v-model:value="formState.region"
                placeholder="Escriba la Region"
                auto-size
              />
            </a-form-item>
          </a-col>
        </a-row>

        <a-row type="flex" justify="space-around" align="middle">
          <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <a-form-item label="Municipios" name="municipios_id">
              <a-select
                mode="multiple"
                v-model:value="formState.municipios_id"
                :filter-option="filterOption"
                placeholder="Elija los municipios"
              >
                <a-select-option
                  v-for="mun in formState.municipios"
                  :value="mun.id"
                  :key="mun.id"
                  :nombre="mun.denominacion"
                >
                  {{ mun.denominacion }}
                </a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
        </a-row>

        <a-row type="flex" justify="space-around" align="middle">
          <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <a-form-item name="tipo_distrito" label="Tipo Distrito">
              <a-radio-group v-model:value="formState.tipo_distritos">
                <a-radio-button value="urbano">URBANO</a-radio-button>
                <a-radio-button value="rural">RURAL</a-radio-button>
              </a-radio-group>
            </a-form-item>
          </a-col>
        </a-row>

        <a-row type="flex" justify="space-around" align="middle">
          <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <a-form-item
              label="Distrito"
              name="distritos"
              :rules="[{ required: true }]"
            >
              <a-textarea
                v-model:value="formState.distritos"
                placeholder="Escriba el Distrito"
                auto-size
              />
            </a-form-item>
          </a-col>
        </a-row>
      </a-col>
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
  municipios: [],
  municipios_id: [],
  region: "",
  tipo_distritos: "urbano",
  distritos: "",
});

watch(
  () => formState.departamento_id,
  (newData, oldData) => {
    formState.municipios = newData
      ? departamentosStore.departamentosSelect.find(
          (e) => e.id === parseInt(newData)
        ).municipios
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

const filterOption = (input, option) => {
  return option.nombre.toLowerCase().indexOf(input.toLowerCase()) >= 0;
};

const validateMessages = {
  required: "${label} es requirido!",
};
</script>
