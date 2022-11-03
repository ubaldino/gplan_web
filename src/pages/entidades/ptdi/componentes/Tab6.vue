<template>
  <h6>Territorialización Resultado</h6>
  <a-form
    :model="ptdiResultadoStore.ptdiResultado"
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
              name="departamento_codigo"
              :rules="[{ required: true }]"
            >
              <a-select
                v-model:value="
                  ptdiResultadoStore.ptdiResultado.departamento_codigo
                "
              >
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
        </a-row>

        <a-row type="flex" justify="space-around" align="middle">
          <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <a-form-item label="Region" name="region">
              <a-textarea
                v-model:value="ptdiResultadoStore.ptdiResultado.region"
                placeholder="Escriba la Region"
                auto-size
              />
            </a-form-item>
          </a-col>
        </a-row>

        <a-row type="flex" justify="space-around" align="middle">
          <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <a-form-item label="Municipios" name="municipios_codigo">
              <a-select
                mode="multiple"
                v-model:value="
                  ptdiResultadoStore.ptdiResultado.municipios_codigo
                "
                :filter-option="filterOption"
                placeholder="Elija los municipios"
              >
                <a-select-option
                  v-for="mun in formState.municipios"
                  :value="mun.codigo"
                  :key="mun.codigo"
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
            <a-form-item label="Tipo Distritos" name="distritos_tipo">
              <a-checkbox-group
                v-model:value="ptdiResultadoStore.ptdiResultado.distritos_tipo"
              >
                <a-checkbox value="urbano" name="distritos_tipo">
                  URBANO
                </a-checkbox>
                <a-checkbox value="rural" name="distritos_tipo">
                  RURAL
                </a-checkbox>
              </a-checkbox-group>
            </a-form-item>
          </a-col>
        </a-row>

        <a-row type="flex" justify="space-around" align="middle">
          <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <a-form-item label="Distrito" name="distritos">
              <a-textarea
                v-model:value="ptdiResultadoStore.ptdiResultado.distritos"
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
import { usePtdiResultadoStore } from "../../../../stores/ptdiResultadoStore";

const ptdiResultadoStore = usePtdiResultadoStore();

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
  () => ptdiResultadoStore.ptdiResultado.departamento_codigo,
  (newData, oldData) => {
    console.log("newData", newData);
    try {
      formState.municipios = newData
        ? departamentosStore.departamentosSelect.find(
            (e) => e.codigo === newData
          ).municipios
        : [];
    } catch (error) {}
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

const onFinish = async (data) => {
  const dep = departamentosStore.departamentosSelect.find(
    (e) => data.departamento_codigo == e.codigo
  );
  data.departamento_sigla = dep.sigla;

  data.municipios_sigla = formState.municipios
    .filter((e) => data.municipios_codigo.includes(e.codigo))
    .map((e) => e.sigla);

  let where = {
    id: ptdiResultadoStore.ptdiResultado.id,
  };
  console.log({ where, data });
  await ptdiResultadoStore.updatePtdiResultado(where, data);
};

const filterOption = (input, option) => {
  return option.nombre.toLowerCase().indexOf(input.toLowerCase()) >= 0;
};

const validateMessages = {
  required: "${label} es requirido!",
};
</script>
