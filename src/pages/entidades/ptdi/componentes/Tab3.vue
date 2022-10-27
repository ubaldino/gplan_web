<template>
  <a-row type="flex" justify="space-around" align="middle">
    <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
      <div>
        <H6>Seleccionar Programas y Proyectos</H6>
        <a-tree
          v-model:expandedKeys="selfStore.expandedKeys"
          v-model:checkedKeys="selfStore.checkedKeys"
          checkable
          show-line
          :tree-data="aperturaProgramaticaStore.aperturasProgramaticaTree"
        >
          <template #switcherIcon="{ switcherCls }">
            <down-outlined :class="switcherCls" />
          </template>
        </a-tree>
      </div>
      <div>
        <a-divider style="border-color: #8db600" dashed />
      </div>
      <div>
        <h6>Resultado del Programa o Proyecto</h6>
        <a-list size="large" bordered :data-source="data2">
          <template #renderItem="{ item }">
            <a-list-item>{{ item }}</a-list-item>
          </template>
          <template #header>
            <div>Header</div>
          </template>
          <template #footer>
            <div>Footer</div>
          </template>
        </a-list>
      </div>
      <div align="right">
        <a-button class="btn-fixed-width" type="primary" html-type="submit">
          GUARDAR PROGRAMAS
        </a-button>
      </div>
    </a-col>
  </a-row>
</template>
<script setup>
import { CarryOutOutlined, SmileTwoTone } from "@ant-design/icons-vue";
import { DownOutlined } from "@ant-design/icons-vue";
import { TreeSelect } from "ant-design-vue";
import { reactive, computed, watch } from "vue";
import { useAperturaProgramaticaStore } from "../../../../stores/aperturaProgramaticaStore";

const aperturaProgramaticaStore = useAperturaProgramaticaStore();

aperturaProgramaticaStore.fetchAllTree();

const selfStore = reactive({
  expandedKeys: ["0-0-0"],
  selectedKeys: [],
  checkedKeys: [],
});

watch(
  () => selfStore.checkedKeys,
  (newData, oldData) => {
    console.log("selectedKeys", newData);
  }
);

const treeData2 = [
  {
    title: "Papá 1 de Programas y Proyectos",
    key: "0-0",
    children: [
      {
        title: "Hijo 1-0",
        key: "0-0-0",
        children: [
          {
            title: "Dato 1",
            key: "0-0-0-0",
          },
          {
            title: "Dato 2",
            key: "0-0-0-1",
          },
          {
            title: "Dato 3",
            key: "0-0-0-2",
          },
        ],
      },
      {
        title: "Hijo 1-1",
        key: "0-0-1",
        children: [
          {
            title: "Dato 4",
            key: "0-0-1-0",
          },
        ],
      },
      {
        title: "Hijo 1-2",
        key: "0-0-2",
        children: [
          {
            title: "Dato 5",
            key: "0-0-2-0",
          },
          {
            title: "Dato 6",
            key: "0-0-2-1",
          },
        ],
      },
    ],
  },
];

const data2 = [
  "Racing car sprays burning fuel into crowd.",
  "Japanese princess to wed commoner.",
  "Australian walks 100km after outback crash.",
  "Man charged over missing wedding girl.",
  "Los Angeles battles huge wildfires.",
];

const SHOW_PARENT = TreeSelect.SHOW_PARENT;
</script>
