<template>
  <a-row type="flex" justify="space-around" align="middle">
    <a-col :xs="24" :sm="24" :md="20" :lg="16" :xl="16">
      <h6>Presupuesto Quinquenal</h6>
      <a-form
        :model="ptdiResultadoStore.ptdiResultado"
        v-bind="layout"
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
                  label="2021"
                  name="presupuesto_2021"
                  :rules="[{ type: 'number', min: 0 }]"
                >
                  <a-input-number
                    v-model:value="
                      ptdiResultadoStore.ptdiResultado.presupuesto_2021
                    "
                  />
                </a-form-item>
              </a-col>
              <a-col :xs="24" :sm="6" :md="4" :lg="4" :xl="4">
                <a-form-item
                  label="2022"
                  name="presupuesto_2022"
                  :rules="[{ type: 'number', min: 0 }]"
                >
                  <a-input-number
                    v-model:value="
                      ptdiResultadoStore.ptdiResultado.presupuesto_2022
                    "
                  />
                </a-form-item>
              </a-col>
              <a-col :xs="24" :sm="6" :md="4" :lg="4" :xl="4">
                <a-form-item
                  label="2023"
                  name="presupuesto_2023"
                  :rules="[{ type: 'number', min: 0 }]"
                >
                  <a-input-number
                    v-model:value="
                      ptdiResultadoStore.ptdiResultado.presupuesto_2023
                    "
                  />
                </a-form-item>
              </a-col>
              <a-col :xs="24" :sm="6" :md="4" :lg="4" :xl="4">
                <a-form-item
                  name="presupuesto_2024"
                  :rules="[{ type: 'number', min: 0 }]"
                  label="2024"
                >
                  <a-input-number
                    v-model:value="
                      ptdiResultadoStore.ptdiResultado.presupuesto_2024
                    "
                  />
                </a-form-item>
              </a-col>
              <a-col :xs="24" :sm="6" :md="4" :lg="4" :xl="4">
                <a-form-item
                  name="presupuesto_2025"
                  :rules="[{ type: 'number', min: 0 }]"
                  label="2025"
                >
                  <a-input-number
                    v-model:value="
                      ptdiResultadoStore.ptdiResultado.presupuesto_2025
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
              name="presup_total"
              label="SUMA TOTAL"
              :rules="[{ type: 'number', min: 0 }]"
            >
              <a-input-number
                v-model:value="ptdiResultadoStore.ptdiResultado.presup_total"
              />
            </a-form-item>
            <a-form-item :wrapper-col="{ ...layout.wrapperCol, offset: 8 }">
              <a-button type="primary" html-type="submit">
                GUARDAR PROGRAMACIÓN FINANCIERA
              </a-button>
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
import { ref, reactive, toRefs, computed, watch } from "vue";
import { usePtdiResultadoStore } from "../../../../stores/ptdiResultadoStore";

const ptdiResultadoStore = usePtdiResultadoStore();

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const onFinish = (data) => {
  console.log("Success:", data);
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
