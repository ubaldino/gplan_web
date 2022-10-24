<template>
  <a-row type="flex" justify="space-around" align="middle">
    <a-col :xs="24" :sm="24" :md="20" :lg="16" :xl="16">
      <h6>Presupuesto Quinquenal</h6>
      <a-form
        :model="formState"
        v-bind="layout4"
        layout="vertical"
        name="nest-messages"
        :validate-messages="validateMessages"
        @finish="onFinish"
      >
        <a-row type="flex" justify="space-around" align="middle">
          <a-col :xs="24" :sm="16" :md="16" :lg="16" :xl="16">
            <a-row type="flex" justify="space-around" align="middle">
              <a-col :xs="24" :sm="6" :md="4" :lg="4" :xl="4">
                <a-form-item
                  :name="[
                    'formtab6programacionfinanciera',
                    'programacionfinanciera2021',
                  ]"
                  label="2021"
                  :rules="[{ type: 'number', min: 0, max: 100 }]"
                >
                  <a-input-number
                    v-model:value="
                      formState.formtab6programacionfinanciera
                        .programacionfinanciera2021
                    "
                  />
                </a-form-item>
              </a-col>
              <a-col :xs="24" :sm="6" :md="4" :lg="4" :xl="4">
                <a-form-item
                  :name="[
                    'formtab6programacionfinanciera',
                    'programacionfinanciera2022',
                  ]"
                  :rules="[{ type: 'number', min: 0, max: 100 }]"
                  label="2022"
                >
                  <a-input-number
                    v-model:value="
                      formState.formtab6programacionfinanciera
                        .programacionfinanciera2022
                    "
                  />
                </a-form-item>
              </a-col>
              <a-col :xs="24" :sm="6" :md="4" :lg="4" :xl="4">
                <a-form-item
                  :name="[
                    'formtab6programacionfinanciera',
                    'programacionfinanciera2023',
                  ]"
                  :rules="[{ type: 'number', min: 0, max: 100 }]"
                  label="2023"
                >
                  <a-input-number
                    v-model:value="
                      formState.formtab6programacionfinanciera
                        .programacionfinanciera2023
                    "
                  />
                </a-form-item>
              </a-col>
              <a-col :xs="24" :sm="6" :md="4" :lg="4" :xl="4">
                <a-form-item
                  :name="[
                    'formtab6programacionfinanciera',
                    'programacionfinanciera2024',
                  ]"
                  :rules="[{ type: 'number', min: 0, max: 100 }]"
                  label="2024"
                >
                  <a-input-number
                    v-model:value="
                      formState.formtab6programacionfinanciera
                        .programacionfinanciera2024
                    "
                  />
                </a-form-item>
              </a-col>
              <a-col :xs="24" :sm="6" :md="4" :lg="4" :xl="4">
                <a-form-item
                  :name="[
                    'formtab6programacionfinanciera',
                    'programacionfinanciera2025',
                  ]"
                  :rules="[{ type: 'number', min: 0, max: 100 }]"
                  label="2025"
                >
                  <a-input-number
                    v-model:value="
                      formState.formtab6programacionfinanciera
                        .programacionfinanciera2025
                    "
                  />
                </a-form-item>
              </a-col>
            </a-row>
          </a-col>
          <a-col :xs="3" :sm="3" :md="3" :lg="3" :xl="3"></a-col>
        </a-row>
        <a-row type="flex" justify="space-around" align="middle">
          <a-col :xs="24" :sm="24" :md="16" :lg="16" :xl="16">
            <a-divider style="border-color: #8db600" dashed />
            <h6 align="left">Total Quinquenal</h6>
          </a-col>
          <a-col :xs="24" :sm="24" :md="16" :lg="16" :xl="16">
            <a-form-item
              :name="['formtab6programacionfinanciera', 'sumatotal']"
              label="SUMA TOTAL"
              :rules="[{ type: 'number', min: 0, max: 100 }]"
            >
              <a-input-number
                v-model:value="
                  formState.formtab6programacionfinanciera.sumatotal
                "
              />
            </a-form-item>
            <a-form-item :wrapper-col="{ ...layout.wrapperCol, offset: 8 }">
              <a-button type="primary" html-type="submit"
                >GUARDAR PROGRAMACIÓN FINANCIERA</a-button
              >
            </a-form-item>
          </a-col>
        </a-row>
      </a-form>
    </a-col>
  </a-row>
</template>
<script setup>
import { DownOutlined } from "@ant-design/icons-vue";
import { TreeSelect } from "ant-design-vue";
import { defineComponent, ref, reactive, toRefs, computed, watch } from "vue";

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
const formState = reactive({
  formtab6programacionfinanciera: {
    programacionfinanciera2021: undefined,
    programacionfinanciera2022: undefined,
    programacionfinanciera2023: undefined,
    programacionfinanciera2024: undefined,
    programacionfinanciera2025: undefined,
    sumatotal: undefined,
    website: "",
    introduction: "",
  },
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
  return option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0;
};

const checked = ref(false);

const checked2 = ref(true);

const value3 = ref("1");

const layout4 = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const validateMessages = {
  required: "${label} es requirido!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
</script>
