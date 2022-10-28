<template>
  <a-row type="flex" justify="space-around" align="middle">
    <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
      <h6>Seleccionar Programas y Proyectos</h6>
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
    </a-col>
  </a-row>

  <a-row type="flex" justify="space-around" align="middle">
    <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
      <a-divider> PDES </a-divider>
    </a-col>
    <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
      <a-table
        class="ant-table-striped"
        size="middle"
        :columns="columns"
        :data-source="proyectoProgramaStore.proyectosPrograma"
        :row-class-name="
          (_record, index) => (index % 2 === 1 ? 'table-striped' : null)
        "
      />
    </a-col>
  </a-row>

  <a-row type="flex" justify="space-around" align="middle">
    <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
      <div>
        <a-divider style="border-color: #8db600" dashed />
      </div>
      <div>
        <h6>Resultado del Programa o Proyecto</h6>
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
import { useProyectoProgramaStore } from "../../../../stores/proyectoProgramaStore";

const aperturaProgramaticaStore = useAperturaProgramaticaStore();
const proyectoProgramaStore = useProyectoProgramaStore();

aperturaProgramaticaStore.fetchAllTree();

const selfStore = reactive({
  expandedKeys: ["0-0-0"],
  selectedKeys: [],
  checkedKeys: [],
});

watch(
  () => selfStore.checkedKeys,
  (newData, oldData) => {
    let categorias_programatica = [...newData].filter(
      (e) => !e.startsWith("a::")
    );
    proyectoProgramaStore.fetchAll({ categorias_programatica });
  }
);

const columns = [
  {
    title: "Unidad Ejecutora",
    dataIndex: ["ue", "nombre"],
  },
  {
    title: "Categoria Programatica",
    dataIndex: "categoria_programatica",
  },
  {
    title: "Nombre",
    dataIndex: "nombre",
  },
  {
    title: "Presupuesto 2021",
    dataIndex: "presupuesto_2021",
  },
  {
    title: "Presupuesto 2022",
    dataIndex: "presupuesto_2022",
  },
  {
    title: "Presupuesto 2023",
    dataIndex: "presupuesto_2023",
  },
  {
    title: "Presupuesto 2024",
    dataIndex: "presupuesto_2024",
  },
  {
    title: "Presupuesto 2025",
    dataIndex: "presupuesto_2025",
  },
];

const SHOW_PARENT = TreeSelect.SHOW_PARENT;
</script>
