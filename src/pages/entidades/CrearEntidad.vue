<template>
  <br />
  <div class="row align-items-center">
    <div class="col-8">
      <a-form
        ref="formRef"
        name="crear_entidad"
        :model="form"
        @finish="onFinish"
      >
        <a-form-item
          name="tipo_entidad_codigo"
          label="Tipo Entidad"
          :rules="[{ required: true, message: '' }]"
        >
          <a-select
            v-model:value="form.tipo_entidad_codigo"
            style="width: 320px"
          >
            <a-select-option value="NONE">Elija un Tipo</a-select-option>
            <a-select-option
              v-for="tipoEnt in tiposEntidadStore.all"
              :value="tipoEnt.codigo"
            >
              {{ tipoEnt.nombre }}
            </a-select-option>
          </a-select>
        </a-form-item>

        <a-form-item
          name="departamento_codigo"
          label="Tipo Entidad"
          :rules="[{ required: true, message: '' }]"
        >
          <a-select
            v-model:value="form.departamento_codigo"
            style="width: 320px"
          >
            <a-select-option value="NONE">
              Elija un Departamento
            </a-select-option>
            <a-select-option
              v-for="dep in departamentosStore.all"
              :value="dep.codigo"
            >
              {{ dep.denominacion }}
            </a-select-option>
          </a-select>
        </a-form-item>

        <a-form-item
          name="codigo"
          label="Codigo"
          :rules="[{ required: true, message: 'Debe llenar este campo' }]"
        >
          <a-input v-model:value="form.codigo" placeholder="Codigo" />
        </a-form-item>

        <a-form-item
          name="denominacion"
          label="Denominacion"
          :rules="[{ required: true, message: 'Debe llenar este campo' }]"
        >
          <a-input
            v-model:value="form.denominacion"
            placeholder="Denominacion"
          />
        </a-form-item>

        <a-form-item
          name="sigla"
          label="Sigla"
          :rules="[{ required: true, message: 'Debe llenar este campo' }]"
        >
          <a-input v-model:value="form.sigla" placeholder="Sigla" />
        </a-form-item>

        <a-form-item>
          <a-button type="primary" html-type="submit">Registrar</a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script setup>
import { reactive, onMounted, getCurrentInstance } from "vue";
import { useRouter } from "vue-router";
import { useTiposEntidadStore } from "../../stores/tiposEntidadStore";
import { useDepartamentosStore } from "../../stores/departamentosStore";
import { useEntidadInstitucionalStore } from "../../stores/entidadInstitucionalStore";

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
  departamento_codigo: "NONE",
  codigo: "",
  denominacion: "",
  sigla: "",
});

onMounted(() => {
  console.log({ ...usuario });
});

const onFinish = async (values) => {
  const res = await entidadInstitucionalStore.storeEntidadInstitucional(values);
  if (res) {
    router.push({ name: "entidades-index" });
  }
};
</script>
