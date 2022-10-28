<template>
  <a-row type="flex" justify="space-around" align="middle">
    <a-col :xs="20" :sm="14" :md="12" :lg="10" :xl="8">
      <h6>Crear Entidad</h6>
      <a-form
        :model="formState"
        v-bind="layout"
        :validate-messages="validateMessages"
        name="crear_entidad"
        @finish="onFinish"
      >
        <a-form-item
          name="quinquenio_id"
          label="TIPO ENTIDAD"
          :rules="[{ required: true, message: '' }]"
        >
          <a-select v-model:value="formState.quinquenio_id">
            <a-select-option value="">Elija un Quinquenio</a-select-option>
            <a-select-option
              v-for="quin in quinqueniosStore.quinquenios"
              :value="quin.id"
              :key="quin.id"
            >
              {{ quin.gestion_inicio }} - {{ quin.gestion_fin }}
            </a-select-option>
          </a-select>
        </a-form-item>

        <a-form-item :wrapper-col="{ ...layout.wrapperCol, offset: 8 }">
          <a-button type="primary" html-type="submit"> REGISTRAR </a-button>
        </a-form-item>
      </a-form>
    </a-col>
  </a-row>
</template>

<script setup>
import { reactive, onBeforeMount, getCurrentInstance } from "vue";
import { useRouter, useRoute } from "vue-router";

import { useQuinqueniosStore } from "../../../stores/quinqueniosStore";
import { usePtdiStore } from "../../../stores/ptdiStore";

const quinqueniosStore = useQuinqueniosStore();
const ptdiStore = usePtdiStore();

onBeforeMount(() => {
  console.log({});
});

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const route = useRoute();
const router = useRouter();

onBeforeMount(() => {
  console.log(route.params.codigo);
});

const formState = reactive({
  quinquenio_id: "",
});

const onFinish = async (values) => {
  values.entidad_institucional_codigo = route.params.codigo;
  console.log(values);

  await ptdiStore.createPtdi(values);
  router.push({
    name: "entidades-ptdi",
    params: { codigo: route.params.codigo },
  });
  /*
  if (res) {
  }
  values.departamento_id = parseInt(values.departamento_id);
  const res = await entidadInstitucionalStore.storeEntidadInstitucional(values);
  */
};
</script>
<style scoped>
.ant-table-striped :deep(.table-striped) td {
  background-color: #fafafa;
}
.padding {
  padding-left: 1rem;
  padding-right: 1rem;
}
</style>
