<template>
  <a-row type="flex" justify="space-around" align="middle">
    <a-col :xs="24" :sm="20" :md="16" :lg="12" :xl="10">
      <h6>Sector de Planificación y Lineamiento Estratégico</h6>
      <a-form
        :model="formState"
        layout="vertical"
        name="nest-messages"
        :validate-messages="validateMessages"
        @finish="onFinish"
      >
        <a-form-item name="nombre_sector_ptdi" label="SECTOR DE PLANIFICACIÓN">
          <a-select
            v-model:value="formState.nombre_sector"
            show-search
            placeholder="Elija un Sector"
            style="width: sm"
            :options="options"
            :filter-option="filterOption"
            @focus="handleFocus"
            @blur="handleBlur"
            @change="handleChange"
          ></a-select>
        </a-form-item>
        <a-form-item
          name="lineamiento_estrategico_ptdi"
          label="LINEAMIENTO ESTRATÉGICO DE TERRITORIO"
        >
          <a-textarea
            style="width: sm"
            v-model:value="formState.lineamiento_estrategico_ptdi"
            placeholder="Escriba el Lineamiento Estratégico de Desarrollo"
          />
        </a-form-item>
        <a-form-item
          name="objetivo_estrategico_ptdi"
          label="OBJETIVO ESTRATÉGICO"
        >
          <a-textarea
            style="width: sm"
            v-model:value="formState.objetivo_estrategico_ptdi"
            placeholder="Escriba el Objetivo Estratégico"
          />
        </a-form-item>
        <a-form-item :wrapper-col="{ ...layout.wrapperCol, offset: 8 }">
          <a-button type="primary" html-type="submit">GUARDAR SECTOR</a-button>
        </a-form-item>
      </a-form>
    </a-col>
  </a-row>
</template>

<script setup>
import { ref, reactive, toRefs, computed, watch } from "vue";

const activeKey = ref("1");
const value = ref(undefined);
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

const formState = reactive({
  nombre_sector: null,
  lineamiento_estrategico_ptdi: "",
  objetivo_estrategico_ptdi: "",
});

const options = ref([
  {
    value: "jack",
    label: "Jack",
  },
  {
    value: "lucy",
    label: "Lucy",
  },
  {
    value: "tom",
    label: "Tom",
  },
]);

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
  return option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0;
};
</script>
