<template>
  <a-row type="flex" justify="space-around" align="middle">
    <a-col :xs="24" :sm="24" :md="24" :lg="22" :xl="22">
      <div class="q-pa-md">
        <q-btn-group spread>
          <q-btn
            color="purple"
            :label="entidadStore.entidadInstitucional.denominacion"
            icon="visibility"
          />
          <q-btn
            color="purple"
            label="Agregar Nuevo Resultado"
            icon="timeline"
            @click="modalNuevoResultado"
          />
        </q-btn-group>

        <div class="col-11">
          <a-table
            v-if="entidadStore.entidadInstitucional.ptdi"
            :columns="columns"
            :row-key="(record) => record.id"
            :data-source="entidadStore.entidadInstitucional.ptdi.resultados"
          >
            <template #bodyCell="{ column, record, index }">
              <template v-if="column.key === 'index'">
                {{ 1 + index }}
              </template>
              <template v-else-if="column.key === 'action'">
                <q-btn
                  size="xs"
                  color="secondary"
                  icon="edit"
                  :to="{
                    name: 'entidades-ptdi-resultados-editar',
                    params: {
                      codigo: entidadStore.entidadInstitucional.codigo,
                      re_id: record.id,
                    },
                  }"
                />
              </template>
            </template>
          </a-table>
        </div>
      </div>
    </a-col>
  </a-row>

  <a-modal
    v-model:visible="selfStore.modalNuevoResultado"
    title="Nuevo Resultado"
    @ok="handleOk"
  >
    <a-form
      :model="formState"
      layout="vertical"
      name="nest-messages"
      :validate-messages="validateMessages"
      @finish="onFinish"
    >
      <a-form-item
        name="sector_planificacion_id"
        label="SECTOR DE PLANIFICACIÓN"
        :rules="[{ required: true }]"
      >
        <a-select
          v-model:value="formState.sector_planificacion_id"
          show-search
          placeholder="Elija un Sector"
          :filter-option="filterOption"
        >
          <a-select-option
            v-for="sect in sectoresPlanificacionStore.sectoresPlanificacion"
            :value="sect.id"
            :key="sect.id"
            :nombre="sect.nombre"
          >
            {{ sect.nombre }}
          </a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item
        name="lineamiento_estrat_territorio"
        label="LINEAMIENTO ESTRATÉGICO DE TERRITORIO"
        :rules="[{ required: true }]"
      >
        <a-textarea
          style="width: sm"
          v-model:value="formState.lineamiento_estrat_territorio"
          placeholder="Escriba el Lineamiento Estratégico de Desarrollo"
        />
      </a-form-item>
      <a-form-item
        name="objetivo_estrategico"
        label="OBJETIVO ESTRATÉGICO"
        :rules="[{ required: true }]"
      >
        <a-textarea
          style="width: sm"
          v-model:value="formState.objetivo_estrategico"
          placeholder="Escriba el Objetivo Estratégico"
        />
      </a-form-item>
      <a-form-item :wrapper-col="{ ...layout.wrapperCol, offset: 8 }">
        <a-button type="primary" html-type="submit">Crear Resultado</a-button>
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script setup>
import { reactive, onMounted, onBeforeMount } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useEntidadInstitucionalStore } from "../../../stores/entidadInstitucionalStore";
import { useSectoresPlanificacionStore } from "../../../stores/sectoresPlanificacionStore";
import { usePtdiResultadoStore } from "../../../stores/ptdiResultadoStore";

const sectoresPlanificacionStore = useSectoresPlanificacionStore();
const entidadStore = useEntidadInstitucionalStore();
const ptdiResultadoStore = usePtdiResultadoStore();
const route = useRoute();

onBeforeMount(() => {
  entidadStore.fetchEntidad(route.params.codigo);
  console.log(route.params.codigo);
});
entidadStore.fetchEntidades();
sectoresPlanificacionStore.fetchAll();

onMounted(() => {});

const selfStore = reactive({
  modalNuevoResultado: false,
});

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const validateMessages = {
  required: "${label} es requerido!",
};

const formState = reactive({
  sector_planificacion_id: "",
  lineamiento_estrat_territorio: "",
  objetivo_estrategico: "",
});

const onFinish = async (values) => {
  console.log(JSON.stringify(values, null, 4));
  // values.sector_planificacion_id = parseInt(values.sector_planificacion_id);
  values.ptdi_id = entidadStore.entidadInstitucional.ptdi.id;
  await ptdiResultadoStore.createPtdiResultado(values);
  entidadStore.fetchEntidad(route.params.codigo);
  selfStore.modalNuevoResultado = false;
};

const filterOption = (input, option) => {
  return option.nombre.toLowerCase().indexOf(input.toLowerCase()) >= 0;
};
const handleOk = (e) => {
  console.log(e);
  selfStore.modalNuevoResultado = false;
};

const modalNuevoResultado = () => {
  selfStore.modalNuevoResultado = true;
};

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const columns = [
  {
    title: "#",
    key: "index",
  },
  {
    title: "Sector",
    dataIndex: ["sectorPlanificacion", "nombre"],
  },
  {
    title: "Lineamiento Estrategico",
    dataIndex: "lineamiento_estrat_territorio",
  },
  {
    title: "2021",
    dataIndex: "presupuesto_2021",
  },
  {
    title: "2022",
    dataIndex: "presupuesto_2022",
  },
  {
    title: "2023",
    dataIndex: "presupuesto_2023",
  },
  {
    title: "2024",
    dataIndex: "presupuesto_2024",
  },
  {
    title: "2025",
    dataIndex: "presupuesto_2025",
  },
  {
    title: "Acciones",
    key: "action",
  },
];

// const handleTableChange = (pag, filters, sorter) => {};
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
