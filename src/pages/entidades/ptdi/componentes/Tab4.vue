<template>
  <a-row type="flex" justify="space-around" align="middle">
    <a-col :xs="24" :sm="20" :md="16" :lg="12" :xl="10">
      <H6>Formulación de Resultado</H6>
      <a-form
        :model="formState"
        v-bind="layout"
        name="nest-messages"
        :validate-messages="validateMessages"
        @finish="onFinish"
      >
        <a-form-item :name="entidad" label="ENTIDAD">
          <a-select
            v-model:value="ptdiResultadoStore.ptdiResultado.entidad_codigo"
            show-search
            placeholder="Elija un Sector"
            :filter-option="filterOption"
          >
            <a-select-option
              v-for="sect in entidadInstitucionalStore.entidadesInstitucionalesSelect"
              :value="sect.codigo"
              :key="sect.codigo"
              :nombre="sect.denominacion"
            >
              {{ sect.sigla }} - {{ sect.denominacion }}
            </a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item :name="area_organizacional" label="ÁREAS ORGANIZACIONALES">
          <a-textarea
            v-model:value="ptdiResultadoStore.ptdiResultado.area_organizacional"
            placeholder="Escriba Las areas organizacionales"
          />
        </a-form-item>
        <a-form-item :name="codigo" label="CÓDIGO DEL RESULTADO">
          <a-input
            v-model:value="ptdiResultadoStore.ptdiResultado.codigo"
            placeholder="Escriba un Código Resultado"
          />
        </a-form-item>
        <a-form-item :name="descripcion" label="DESCRIPCIÓN">
          <a-select
            v-model:value="formState.descripcion"
            show-search
            placeholder="Elija una Descripción"
            style="width: sm"
            :options="options3"
            :filter-option="filterOption"
            @focus="handleFocus"
            @blur="handleBlur"
            @change="handleChange"
          ></a-select>
          <a-button type="primary" shape="square">+</a-button>
        </a-form-item>
        <a-form-item
          :name="agregar_nuevadescripcion"
          label="AGREGAR DESCRIPCIÓN"
        >
          <div align="left">
            <a-button type="primary" color:positive @click="showModal">
              <template #icon>
                <SearchOutlined />
              </template>
              AGREGAR NUEVA DESCRIPCIÓN
            </a-button>
            <a-modal
              v-model:visible="visible"
              height="1000px"
              title="Agregando una Nueva Descripción"
              :ok-button-props="{ disabled: false }"
              :cancel-button-props="{ disabled: false }"
              @ok="handleOk"
            >
              <a-form-item :name="detalle" label="DETALLE">
                <a-textarea v-model:value="formState.detalle" />
              </a-form-item>
            </a-modal>
          </div>
        </a-form-item>
        <a-form-item :wrapper-col="{ ...layout.wrapperCol, offset: 8 }">
          <a-button type="primary" html-type="submit">
            GUARDAR RESULTADO
          </a-button>
        </a-form-item>
      </a-form>
    </a-col>
  </a-row>
</template>
<script setup>
import { TreeSelect } from "ant-design-vue";
import { ref, reactive, computed, watch } from "vue";
import { useEntidadInstitucionalStore } from "../../../../stores/entidadInstitucionalStore";
import { usePtdiResultadoStore } from "../../../../stores/ptdiResultadoStore";

const ptdiResultadoStore = usePtdiResultadoStore();

const entidadInstitucionalStore = useEntidadInstitucionalStore();

entidadInstitucionalStore.fetchEntidadesSelect();

const value = ref(undefined);
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const formState = reactive({
  entidad: null,
  areas_organizacionales: [],
  codigo_resultado: "",
  descripcion: null,
  detalle: "",
});

const onFinish = (values) => {
  console.log("Success:", values);
};

const handleChange = (value) => {
  console.log(`selected ${value}`);
};

const handleBlur = () => {
  console.log("blur");
};

const handleFocus = () => {
  console.log("focus");
};

const filterOption = (input, option) => {
  return option.nombre.toLowerCase().indexOf(input.toLowerCase()) >= 0;
};

const SHOW_PARENT = TreeSelect.SHOW_PARENT;

const treeData3 = [
  {
    title: "Node1",
    value: "0-0",
    children: [
      {
        title: "Child Node1",
        value: "0-0-0",
      },
    ],
  },
  {
    title: "Node2",
    value: "0-1",
    children: [
      {
        title: "Child Node3",
        value: "0-1-0",
        disabled: true,
      },
      {
        title: "Child Node4",
        value: "0-1-1",
      },
      {
        title: "Child Node5",
        value: "0-1-2",
      },
    ],
  },
];

watch(value, () => {
  console.log(value.value);
});

const options3 = ref([
  {
    value: "recuperardescripcion1",
    label: "RECUPERAR DE DESCRIPCIÓN 1",
  },
  {
    value: "recuperardescripcion2",
    label: "RECUPERAR DE DESCRIPCIÓN 2",
  },
  {
    value: "recuperardescripcion3",
    label: "RECUPERAR DE DESCRIPCIÓN 3",
  },
]);

const visible = ref(false);

const showModal = () => {
  visible.value = true;
};

const handleOk = (e) => {
  console.log(e);
  visible.value = false;
};

const handleCancel = (e) => {
  console.log(e);
  visible.value = false;
};
</script>
