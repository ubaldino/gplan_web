<template>
  <a-row type="flex" justify="space-around" align="middle">
    <a-col :xs="24" :sm="24" :md="24" :lg="23" :xl="23">
      <div class="table-operations">
        <a-button @click="agregarUsuario">Agregar Nuevo Usuario</a-button>
      </div>
      <a-modal
        v-model:visible="store.visible"
        title="Agregar Nuevo Usuario"
        @ok="handleOk"
      >
        <a-form
          :model="formState"
          name="formulario_crear_usuario"
          v-bind="formItemLayout"
          :validate-messages="validateMessages"
          @finishFailed="onFinishFailed"
          @finish="onFinish"
        >
          <a-form-item
            name="nombres"
            label="Nombres"
            :rules="[{ required: true }]"
          >
            <a-input v-model:value="formState.nombres" />
          </a-form-item>
          <a-form-item name="apellido_paterno" label="Apellido Paterno">
            <a-input v-model:value="formState.apellido_paterno" />
          </a-form-item>
          <a-form-item name="apellido_materno" label="Apellido Materno">
            <a-input v-model:value="formState.apellido_materno" />
          </a-form-item>
          <a-form-item
            name="email"
            label="Correo Electronico"
            :rules="[{ required: true }]"
          >
            <a-input v-model:value="formState.email" />
          </a-form-item>
          <a-form-item
            name="rol_id"
            label="Rol"
            has-feedback
            :rules="[{ required: true }]"
          >
            <a-select
              v-model:value="formState.rol_id"
              placeholder="Elija un Rol"
            >
              <a-select-option
                v-for="rol in rolesStore.roles"
                :value="rol.id"
                :key="rol.id"
              >
                {{ rol.nombre }}</a-select-option
              >
            </a-select>
          </a-form-item>

          <a-form-item :wrapper-col="{ span: 12, offset: 6 }">
            <a-button type="primary" html-type="submit">Submit</a-button>
          </a-form-item>
        </a-form>
      </a-modal>
    </a-col>
    <a-col :xs="24" :sm="24" :md="24" :lg="23" :xl="23">
      <a-table
        :columns="columns"
        :row-key="(record) => record.codigo"
        :data-source="usuariosStore.usuarios"
        bordered
        @change="handleTableChange"
      >
        <template #bodyCell="{ column, obj, index }">
          <template v-if="column.dataIndex === 'name'">
            {{ 1 + index }}
          </template>
          <template v-else-if="column.key === 'action'">
            <span>
              <a>Invite 一 {{ obj }}</a>
              <a-divider type="vertical" />
              <a>Delete</a>
              <a-divider type="vertical" />
              <a class="ant-dropdown-link">
                More actions
                <down-outlined />
              </a>
            </span>
          </template>
        </template>
      </a-table>
    </a-col>
  </a-row>
</template>

<script setup>
import { reactive, onBeforeMount } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useUsuariosStore } from "../../stores/usuariosStore";
import { useRolesStore } from "../../stores/rolesStore";

const router = useRouter();

const usuariosStore = useUsuariosStore();
const rolesStore = useRolesStore();

onBeforeMount(() => {
  usuariosStore.fetchUsuarios();
});
rolesStore.fetchAll();

const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
};
const formState = reactive({
  nombres: "",
  rol: null,
  "input-number": 3,
  "checkbox-group": ["A", "B"],
  rate: 3.5,
});

const onFinish = (values) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const columns = [
  {
    title: "#",
    dataIndex: "name",
    key: "name",
    resizable: true,
    width: 150,
  },
  {
    title: "USUARIO",
    dataIndex: "username",
    sorter: true,
    width: "10%",
  },
  {
    title: "NOMBRES",
    dataIndex: "nombres",
    width: "20%",
  },
  {
    title: "PATERNO",
    dataIndex: "apellido_paterno",
  },
  {
    title: "MATERNO",
    dataIndex: "apellido_materno",
  },
  {
    title: "CORREO",
    dataIndex: "email",
  },
  {
    title: "ROL",
    dataIndex: ["rol", "nombre"],
    key: "tipoEntidad",
    filters: [
      {
        text: "ROOT",
        value: "Root",
      },
    ],
  },
  {
    title: "Acciones",
    key: "action",
  },
];

const store = reactive({
  visible: false,
});

const agregarUsuario = () => {
  store.visible = true;
};

const handleOk = (e) => {
  console.log(e);
  store.visible = false;
};

const handleTableChange = (pag, filters, sorter) => {};

const validateMessages = {
  required: "${label} es requerido!",
};
</script>
