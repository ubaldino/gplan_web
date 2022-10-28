<template>
  <a-row type="flex" justify="space-around" align="middle">
    <a-col :xs="24" :sm="24" :md="24" :lg="23" :xl="23">
      <a-tree
        :show-line="showLine"
        :show-icon="showIcon"
        :tree-data="pilares.pilaresTree"
        @select="onSelect"
        default-expand-all
      >
        <template #icon><carry-out-outlined /></template>
        <template #title="{ dataRef }">
          {{ dataRef.title }}
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
        :data-source="selfStore.tabla"
        :row-class-name="
          (_record, index) => (index % 2 === 1 ? 'table-striped' : null)
        "
      />
    </a-col>
  </a-row>

  <a-row type="flex" justify="space-around" align="middle">
    <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
      <a-divider> INDICADORES </a-divider>
    </a-col>
    <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
      <a-table
        class="ant-table-striped"
        size="middle"
        :columns="columnsIndicadores"
        :data-source="pdesIndicadoresStore.pdesIndicadores"
        :row-class-name="
          (_record, index) => (index % 2 === 1 ? 'table-striped' : null)
        "
      >
        <template #bodyCell="{ column, obj, index }">
          <template v-if="column.key === 'index'">
            {{ 1 + index }}
          </template>
        </template>
      </a-table>
    </a-col>
  </a-row>

  <a-row type="flex" justify="space-around" align="middle">
    <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
      <a-button type="primary" html-type="submit" @click="guardar">
        GUARDAR
      </a-button>
    </a-col>
  </a-row>
</template>

<script setup>
import { ref, reactive } from "vue";
import { pilaresStore } from "../../../../stores/pilaresStore";
import { usePdesIndicadoresStore } from "../../../../stores/pdesIndicadoresStore";
import { usePtdiResultadoStore } from "../../../../stores/ptdiResultadoStore";

const ptdiResultadoStore = usePtdiResultadoStore();

const selfStore = reactive({
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

selfStore.setDefaultTable();

const pilares = pilaresStore();
const pdesIndicadoresStore = usePdesIndicadoresStore();

pilares.fetchPilaresTree();

const showLine = ref(true);
const showIcon = ref(false);

const onSelect = (selectedKeys, { node }) => {
  selfStore.setDefaultTable();
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
  if (node.tipo == "accion") {
    pdesIndicadoresStore.fetchPdesIndicadores({
      accion_codigo: node.codigo,
    });
  } else {
    pdesIndicadoresStore.resetPdesIndicadores();
  }
  nodes.reverse();
  selfStore.setDataTable(nodes);
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
const columnsIndicadores = [
  {
    title: "#",
    key: "index",
  },
  {
    title: "Descripcion",
    dataIndex: "descripcion",
  },
  {
    title: "Estimacion 2025",
    dataIndex: "estimacion_2025",
  },
  {
    title: "Linea Base",
    dataIndex: "linea_base",
  },
];

const guardar = async () => {
  const dataTable = { ...selfStore.tabla[0] };
  let data = {};
  let where = {
    id: ptdiResultadoStore.ptdiResultado.id,
  };

  if (dataTable.accion !== "") {
    data = {
      pdes_pilares_codigo: dataTable.pilar,
      pdes_ejes_codigo: dataTable.eje,
      pdes_meta_codigo: dataTable.meta,
      pdes_resultado_codigo: dataTable.resultado,
      pdes_accion_codigo: dataTable.accion,
    };
  }
  console.log(dataTable);
  console.log({ where, data });

  await ptdiResultadoStore.updatePtdiResultado(where, data);
};
</script>

<style scoped>
.ant-table-striped :deep(.table-striped) td {
  background-color: #fafafa;
}
</style>
