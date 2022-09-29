<template>
  <a-table
    :columns="columns"
    :data-source="pilares.allForTable"
    bordered
    size="small"
  >
    <template #bodyCell="{ column, text, record }">
      <template v-if="column.dataIndex !== 'operation'">
        <div>
          <a-input
            v-if="editableData[record.key]"
            v-model:value="editableData[record.key][column.dataIndex]"
            style="margin: -5px 0"
          />
          <template v-else>
            {{ text }}
          </template>
        </div>
      </template>
      <template v-else-if="column.dataIndex === 'operation'">
        <div class="editable-row-operations">
          <span v-if="editableData[record.key]">
            <a-typography-link @click="save(record.key)">
              Actualizar
            </a-typography-link>
            <a-popconfirm
              title="Seguro quieres cancelar?"
              @confirm="cancel(record.key)"
              ok-text="Si"
              cancel-text="No"
            >
              <a>Cancelar</a>
            </a-popconfirm>
          </span>
          <span v-else>
            <a @click="edit(record.key)">Editar</a>
          </span>
        </div>
      </template>
    </template>
  </a-table>
</template>

<script setup>
import { cloneDeep } from "lodash-es";
import { defineComponent, reactive, ref } from "vue";

import { pilaresStore } from "../../stores/pilaresStore";

document.title = "Pilares";

const pilares = pilaresStore();
pilares.fetchPilares();

const columns = [
  {
    title: "Codigo",
    dataIndex: "codigo",
    width: "5%",
  },
  {
    title: "Denominacion",
    dataIndex: "denominacion",
    width: "65%",
  },
  {
    title: "Opciones",
    dataIndex: "operation",
  },
];
const data = [];

const editableData = reactive({});

const edit = (key) => {
  editableData[key] = cloneDeep(
    pilares.allForTable.filter((item) => key === item.key)[0]
  );
};

const save = (key) => {
  console.log(pilares.allForTable.filter((item) => key === item.key));

  Object.assign(
    pilares.allForTable.filter((item) => key === item.key)[0],
    editableData[key]
  );
  delete editableData[key];
};

const cancel = (key) => {
  delete editableData[key];
};
</script>

<style scoped>
.editable-row-operations a {
  margin-right: 8px;
}
</style>
