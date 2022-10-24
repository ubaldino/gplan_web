<template>
  <a-row>
    <a-col :xs="2" :sm="5" :md="6" :lg="7" :xl="8"></a-col>
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
          name="tipo_entidad_codigo"
          label="TIPO ENTIDAD"
          :rules="[{ required: true, message: '' }]"
        >
          <a-select v-model:value="form.tipo_entidad_codigo" style="width: sm">
            <a-select-option value="NONE">Elija un Tipo</a-select-option>
            <a-select-option
              v-for="tipoEnt in tiposEntidadStore.all"
              :value="tipoEnt.codigo"
              :key="tipoEnt.codigo"
            >
              {{ tipoEnt.nombre }}
            </a-select-option>
          </a-select>
        </a-form-item>

        <a-form-item
          name="departamento_id"
          label="DEPARTAMENTO"
          :rules="[{ required: true, message: '' }]"
        >
          <a-select v-model:value="form.departamento_id">
            <a-select-option value="NONE">
              Elija un Departamento
            </a-select-option>
            <a-select-option
              v-for="dep in departamentosStore.all"
              :value="dep.codigo"
              :key="dep.codigo"
            >
              {{ dep.denominacion }}
            </a-select-option>
          </a-select>
        </a-form-item>

        <a-form-item
          name="codigo"
          label="CÓDIGO"
          :rules="[{ required: true, message: 'Debe llenar este campo' }]"
        >
          <a-input
            v-model:value="form.codigo"
            placeholder="Debe llenar el Código"
          />
        </a-form-item>

        <a-form-item
          name="denominacion"
          label="DENOMINACIÓN"
          :rules="[{ required: true, message: 'Debe llenar este campo' }]"
        >
          <a-input
            v-model:value="form.denominacion"
            placeholder="Debe llenar la Denominación"
          />
        </a-form-item>

        <a-form-item
          name="sigla"
          label="SIGLA"
          :rules="[{ required: true, message: 'Debe llenar este campo' }]"
        >
          <a-input
            v-model:value="form.sigla"
            placeholder="Debe llenar la Sigla"
          />
        </a-form-item>

        <a-form-item :wrapper-col="{ ...layout.wrapperCol, offset: 8 }">
          <a-button type="primary" html-type="submit">REGISTRAR</a-button>
        </a-form-item>
      </a-form>
    </a-col>
    <a-col :xs="2" :sm="5" :md="6" :lg="7" :xl="8"></a-col>
  </a-row>
</template>

<script setup>
import { reactive, onMounted, getCurrentInstance } from "vue";
import { useRouter } from "vue-router";
import { useTiposEntidadStore } from "../../stores/tiposEntidadStore";
import { useDepartamentosStore } from "../../stores/departamentosStore";
import { useEntidadInstitucionalStore } from "../../stores/entidadInstitucionalStore";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const app = getCurrentInstance();
const { usuario } = app.appContext.config.globalProperties.$auth;

const tiposEntidadStore = useTiposEntidadStore();
tiposEntidadStore.fetchTiposEntidad();

const departamentosStore = useDepartamentosStore();
departamentosStore.fetchDepartamentos();

const entidadInstitucionalStore = useEntidadInstitucionalStore();

const router = useRouter();

const form = reactive({
  tipo_entidad_codigo: "NONE",
  departamento_id: "NONE",
  codigo: "",
  denominacion: "",
  sigla: "",
});

onMounted(() => {
  console.log({ ...usuario });
});

const onFinish = async (values) => {
  values.departamento_id = parseInt(values.departamento_id);
  const res = await entidadInstitucionalStore.storeEntidadInstitucional(values);
  if (res) {
    router.push({ name: "entidades-index" });
  }
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
