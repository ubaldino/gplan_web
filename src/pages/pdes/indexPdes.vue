<template>
  <div>
    <a-tree
      :show-line="showLine"
      :show-icon="showIcon"
      :tree-data="pilares.allTree"
      @select="onSelect"
      default-expand-all
    >
      <template #icon><carry-out-outlined /></template>
      <template #title="{ dataRef }">
        {{ dataRef.title }}
      </template>
    </a-tree>
  </div>
  <a-divider> PDES </a-divider>
  <div>
    <a-table
      class="ant-table-striped"
      size="middle"
      :columns="columns"
      :data-source="data.tabla"
      :row-class-name="
        (_record, index) => (index % 2 === 1 ? 'table-striped' : null)
      "
    />
  </div>
</template>

<script setup>
import { defineComponent, computed, ref, reactive } from "vue";
import { useQuasar } from "quasar";
import { pilaresStore } from "../../stores/pilaresStore";

import "ant-design-vue/dist/antd.css";

import { CarryOutOutlined } from "@ant-design/icons-vue";

document.title = "Pilares";

const data = reactive({
  tabla: [],
  setDataTable(data) {
    for (let i = 0; i < data.length; i++) {
      this.tabla[0][data[i].tipo] = data[i].codigo;
      this.tabla[1][data[i].tipo] = data[i].title;
    }
  },

  setDefaultTable() {
    this.tabla = [
      {
        pilar: "",
        eje: "",
        meta: "",
        resultado: "",
        accion: "",
      },
      {
        pilar: "",
        eje: "",
        meta: "",
        resultado: "",
        accion: "",
      },
    ];
  },
});

data.setDefaultTable();

const $q = useQuasar();

const pilares = pilaresStore();

pilares.fetchPilaresTree();

const showLine = ref(true);
const showIcon = ref(false);

const onSelect = (selectedKeys, { node }) => {
  data.setDefaultTable();
  let parent = { node, parent: node.parent };
  let nodes = [];
  while (parent) {
    nodes.push({
      codigo: parent.node.codigo,
      title: parent.node.title,
      tipo: parent.node.tipo,
    });
    parent = parent.parent;
  }
  nodes.reverse();
  data.setDataTable(nodes);
};

const columns = [
  {
    title: "Pilar",
    dataIndex: "pilar",
  },
  {
    title: "Eje",
    dataIndex: "eje",
  },
  {
    title: "Meta",
    dataIndex: "meta",
  },
  {
    title: "Resultado",
    dataIndex: "resultado",
  },
  {
    title: "Accion",
    dataIndex: "accion",
  },
];
</script>

<style scoped>
.ant-table-striped :deep(.table-striped) td {
  background-color: #fafafa;
}
</style>
