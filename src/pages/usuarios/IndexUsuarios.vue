<template>
  <a-row type="flex" justify="space-around" align="middle">
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
import { reactive, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useUsuariosStore } from "../../stores/usuariosStore";

const router = useRouter();

const usuariosStore = useUsuariosStore();

usuariosStore.fetchUsuarios();
onMounted(() => {});

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

const handleTableChange = (pag, filters, sorter) => {};
</script>
