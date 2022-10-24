<template>
  <a-row type="flex" justify="space-around" align="middle">
    <a-col :xs="24" :sm="24" :md="16" :lg="14" :xl="10">
      <q-btn-group spread>
        <q-btn
          color="purple"
          :label="entidadStore.entidadInstitucional.denominacion"
          icon="visibility"
        />
        <q-btn
          @click="showModal"
          color="purple"
          label="Agregar Tecnico"
          icon="timeline"
        />
      </q-btn-group>
    </a-col>
  </a-row>
  <a-row type="flex" justify="space-around" align="middle">
    <a-col :xs="24" :sm="24" :md="23" :lg="23" :xl="23">
      <a-table
        :columns="columns"
        :row-key="(record) => record.usuario.username"
        :data-source="entidadStore.entidadInstitucional.tecnicos"
        bordered
        @change="handleTableChange"
      >
        <template #bodyCell="{ column, obj, index }">
          <template v-if="column.key === 'index'">
            {{ 1 + index }}
          </template>
          <template v-if="column.key === 'nombre_completo'">
            {{ obj }}
          </template>
        </template>
      </a-table>
    </a-col>
  </a-row>
  <a-modal
    v-model:visible="formState.visible"
    title="Basic Modal"
    @ok="handleOk"
  >
    <a-select
      v-model:value="formState.tecnicos"
      mode="multiple"
      style="width: 100%"
      placeholder="Elegir Tecnicos"
      :options="formState.usuarios"
    />
  </a-modal>
</template>

<script setup>
import { reactive, onMounted, onBeforeMount } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useEntidadInstitucionalStore } from "../../../stores/entidadInstitucionalStore";
import { useUsuariosStore } from "../../../stores/usuariosStore";
import { debounce } from "lodash-es";

const route = useRoute();
const entidadStore = useEntidadInstitucionalStore();
const usuariosStore = useUsuariosStore();

// Now you can access params like:
onBeforeMount(() => {
  console.log(route.params.codigo);
  entidadStore.fetchEntidad(route.params.codigo);
});

const formState = reactive({
  tecnicos: [],
  visible: false,
  usuarios: [],
});

const showModal = async () => {
  await usuariosStore.fetchUsuarios();
  formState.usuarios = [...usuariosStore.usuariosSelect];
  formState.visible = true;
};

const handleOk = async (e) => {
  console.log(formState.tecnicos);
  await entidadStore.agregarTecnicoEnEntidad({
    entidad_codigo: route.params.codigo,
    usuarios: [...formState.tecnicos],
  });
  formState.visible = false;
};

const columns = [
  {
    title: "#",
    key: "index",
    sorter: true,
    width: "10%",
  },
  {
    title: "USUARIO",
    dataIndex: ["usuario", "username"],
    width: "20%",
  },
  {
    title: "NOMBRE COMPLETO",
    key: "nombre_completo",
    width: "20%",
  },
];

const handleTableChange = (pag, filters, sorter) => {};
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
