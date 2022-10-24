<template>
  <a-row type="flex" justify="space-around" align="middle">
    <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
      <H6>Indicador Resultado</H6>
    </a-col>
  </a-row>
  <a-row type="flex" justify="space-around" align="middle">
    <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
      <a-form
        :model="formState"
        v-bind="layout3"
        name="nest-messages"
        :validate-messages="validateMessages"
        @finish="onFinish"
      >
        <a-row type="flex" justify="space-around" align="middle">
          <a-col :xs="24" :sm="24" :md="16" :lg="16" :xl="16">
            <p align="center">ABSOLUTO (APAGADO) / RELATIVO (ENCENDIDO)</p>
            <a-form-item
              justify="space-around"
              :name="encendido_indicador"
              label=""
            >
              <a-switch v-model:checked="checked" justify="space-around" />
            </a-form-item>
          </a-col>
        </a-row>

        <div v-if="!checked">
          <a-row type="flex" justify="space-around" align="middle">
            <a-col :xs="24" :sm="24" :md="24" :lg="20" :xl="18">
              <a-form-item
                :name="tipo_indicador_absoluto"
                label="TIPO DE INDICADOR ABSOLUTO"
              >
                <a-select
                  v-model:value="formState.tipo_indicador_absoluto"
                  show-search
                  placeholder="Elija Indicador Absoluto"
                  :options="options4"
                  :filter-option="filterOption"
                  @focus="handleFocus"
                  @blur="handleBlur"
                  @change="handleChange"
                ></a-select>
              </a-form-item>
              <a-form-item
                :name="indicador_resultado_absoluto"
                label="INDICADOR RESULTADO ABSOLUTO"
              >
                <a-textarea
                  v-model:value="formState.indicador_resultado_absoluto"
                  placeholder="Escribir el Indicador de Valor Absoluto"
                />
              </a-form-item>
              <a-form-item
                :name="formula_absoluto"
                label="FÓRMULA INDICADOR ABSOLUTO"
              >
                <a-input
                  v-model:value="formState.formula_absoluto"
                  placeholder="Escribir la Fórmula de Valor Absoluto"
                />
              </a-form-item>
              <a-form-item
                :name="lineabase_2020_absoluto"
                label="LINEA BASE 2020"
                :rules="[{ type: 'number', min: 0, max: 100 }]"
              >
                <a-input-number
                  v-model:value="formState.linea_base_2020_absoluto"
                  style="width: 200px"
                  placeholder="Escribir la Linea Base al 2020"
                />
              </a-form-item>
              <a-form-item
                :name="meta_al_2025_absoluto"
                label="META AL 2025"
                :rules="[{ type: 'number', min: 0, max: 100 }]"
              >
                <a-input-number
                  v-model:value="formState.meta_al_2025_absoluto"
                  style="width: 200px"
                  placeholder="Escribir la Meta al 2025"
                />
              </a-form-item>
            </a-col>
          </a-row>
          <a-divider style="border-color: #8db600" dashed />
          <h6>Programación Física Resultado</h6>
          <a-row type="flex" justify="space-around" align="middle">
            <a-col :xs="16" :sm="16" :md="16" :lg="16" :xl="16">
              <div align="center">
                <a-space :size="size">
                  <a-col>
                    <a-col> 2021 </a-col>
                    <a-col>
                      <a-form-item
                        :name="linea_2021_absoluto"
                        :rules="[{ type: 'number', min: 0, max: 100 }]"
                      >
                        <a-input-number
                          v-model:value="formState.linea_2021_absoluto"
                        />
                      </a-form-item>
                    </a-col>
                  </a-col>
                  <a-col>
                    <a-col> 2022 </a-col>
                    <a-col>
                      <a-form-item
                        :name="linea_2022_absoluto"
                        :rules="[{ type: 'number', min: 0, max: 100 }]"
                      >
                        <a-input-number
                          v-model:value="formState.linea_2022_absoluto"
                        />
                      </a-form-item>
                    </a-col>
                  </a-col>
                  <a-col>
                    <a-col> 2023 </a-col>
                    <a-col>
                      <a-form-item
                        :name="linea_2023_absoluto"
                        :rules="[{ type: 'number', min: 0, max: 100 }]"
                      >
                        <a-input-number
                          v-model:value="formState.linea_2023_absoluto"
                        />
                      </a-form-item>
                    </a-col>
                  </a-col>
                  <a-col>
                    <a-col> 2024 </a-col>
                    <a-col>
                      <a-form-item
                        :name="linea_2024_absoluto"
                        :rules="[{ type: 'number', min: 0, max: 100 }]"
                      >
                        <a-input-number
                          v-model:value="formState.linea_2024_absoluto"
                        />
                      </a-form-item>
                    </a-col>
                  </a-col>
                  <a-col>
                    <a-col> 2025 </a-col>
                    <a-col>
                      <a-form-item
                        :name="linea_2025_absoluto"
                        :rules="[{ type: 'number', min: 0, max: 100 }]"
                      >
                        <a-input-number
                          v-model:value="formState.linea_2025_absoluto"
                        />
                      </a-form-item>
                    </a-col>
                  </a-col>
                </a-space>
              </div>
            </a-col>
          </a-row>
          <a-divider style="border-color: #8db600" dashed />
          <a-row type="flex" justify="space-around" align="middle">
            <a-col :xs="16" :sm="16" :md="16" :lg="16" :xl="22">
              <a-form-item
                :name="ponderacion_prioridad_absoluto"
                label="PONDERACIÓN DE PRIORIDAD"
                :rules="[{ type: 'number', min: 0, max: 100 }]"
              >
                <a-input-number
                  v-model:value="formState.ponderacion_prioridad_absoluto"
                  style="width: 200px"
                  placeholder="Ponderación de prioridad"
                />
              </a-form-item>
              <a-form-item
                :name="fuente_informacion_verificacion_absoluto"
                label="FUENTE DE INFORMACIÓN O VERIFICACIÓN"
                :rules="[{ type: 'number', min: 0, max: 100 }]"
              >
                <a-textarea
                  v-model:value="
                    formState.fuente_informacion_verificacion_absoluto
                  "
                  placeholder="Escribir la Fuente de Información"
                />
              </a-form-item>
            </a-col>
          </a-row>
        </div>
        <div v-else-if="checked">
          <a-row type="flex" justify="space-around" align="middle">
            <a-col :xs="18" :sm="18" :md="18" :lg="18" :xl="18">
              <a-form-item
                :name="tipo_indicador_relativo"
                label="TIPO DE INDICADOR RELATIVO"
              >
                <a-select
                  v-model:value="formState.tipo_indicador_relativo"
                  show-search
                  placeholder="Elija Indicador Relativo"
                  :options="options5"
                  :filter-option="filterOption"
                  @focus="handleFocus"
                  @blur="handleBlur"
                  @change="handleChange"
                ></a-select>
              </a-form-item>
              <a-form-item
                :name="indicador_resultado_relativo"
                label="INDICADOR RESULTADO RELATIVO"
              >
                <a-textarea
                  v-model:value="formState.indicador_resultado_relativo"
                  placeholder="Elija Indicador Relativo"
                />
              </a-form-item>
              <a-form-item
                :name="formula_relativo"
                label="FÓRMULA INDICADOR RELATIVO"
              >
                <a-input
                  v-model:value="formState.formula_relativo"
                  placeholder="Escribir la Fórmula de Valor Relativo"
                />
              </a-form-item>
              <a-form-item
                :name="encendido_denominador_relativo"
                label="ELEGIR TIPO DE DENOMINADOR"
              >
                <a-radio-group v-model:value="value3" name="radioGroup">
                  <a-radio value="1">Denominador Variable</a-radio>
                  <a-radio value="2">Denominador Fijo</a-radio>
                </a-radio-group>
              </a-form-item>
              <a-form-item
                :name="linea_base2020_relativo"
                label="LINEA BASE 2020 (%)"
                :rules="[{ type: 'number', min: 0, max: 100 }]"
              >
                <a-input-number
                  v-model:value="formState.linea_base2020_relativo"
                  style="width: 200px"
                  placeholder="Escribir la Linea Base al 2020"
                />
              </a-form-item>
              <a-form-item
                :name="meta_al_2025_relativo"
                label="META AL 2025 (%)"
                :rules="[{ type: 'number', min: 0, max: 100 }]"
              >
                <a-input-number
                  v-model:value="formState.meta_al_2025_relativo"
                  style="width: 200px"
                  placeholder="Escribir la Meta al 2025"
                />
              </a-form-item>
            </a-col>
          </a-row>
          <a-divider style="border-color: #8db600" dashed />
          <H6>Programación Física Resultado</H6>
          <a-row type="flex" justify="space-around" align="middle">
            <a-col :xs="16" :sm="16" :md="16" :lg="16" :xl="16">
              <div align="center">
                <a-space :size="size">
                  <a-col>
                    <a-col> 2021 (%) </a-col>
                    <a-col>
                      <a-form-item
                        :name="linea2021_relativo"
                        :rules="[{ type: 'number', min: 0, max: 100 }]"
                      >
                        <a-input-number
                          v-model:value="formState.linea2021_relativo"
                        />
                      </a-form-item>
                    </a-col>
                  </a-col>
                  <a-col>
                    <a-col> 2022 (%) </a-col>
                    <a-col>
                      <a-form-item
                        :name="linea_2022_relativo"
                        :rules="[{ type: 'number', min: 0, max: 100 }]"
                      >
                        <a-input-number
                          v-model:value="formState.linea_2022_relativo"
                        />
                      </a-form-item>
                    </a-col>
                  </a-col>
                  <a-col>
                    <a-col> 2023 (%) </a-col>
                    <a-col>
                      <a-form-item
                        :name="linea_2023_relativo"
                        :rules="[{ type: 'number', min: 0, max: 100 }]"
                      >
                        <a-input-number
                          v-model:value="formState.linea_2023_relativo"
                        />
                      </a-form-item>
                    </a-col>
                  </a-col>
                  <a-col>
                    <a-col> 2024 (%) </a-col>
                    <a-col>
                      <a-form-item
                        :name="linea_2024_relativo"
                        :rules="[{ type: 'number', min: 0, max: 100 }]"
                      >
                        <a-input-number
                          v-model:value="formState.linea_2024_relativo"
                        />
                      </a-form-item>
                    </a-col>
                  </a-col>
                  <a-col>
                    <a-col> 2025 (%) </a-col>
                    <a-col>
                      <a-form-item
                        :name="linea_2025_relativo"
                        :rules="[{ type: 'number', min: 0, max: 100 }]"
                      >
                        <a-input-number
                          v-model:value="formState.linea_2025_relativo"
                        />
                      </a-form-item>
                    </a-col>
                  </a-col>
                </a-space>
              </div>
            </a-col>
          </a-row>
          <a-divider style="border-color: #8db600" dashed />
          <a-row type="flex" justify="space-around" align="middle">
            <a-col :xs="16" :sm="16" :md="16" :lg="16" :xl="22">
              <a-form-item
                :name="ponderacion_prioridad_relativo"
                label="PONDERACIÓN DE PRIORIDAD (%)"
                :rules="[{ type: 'number', min: 0, max: 100 }]"
              >
                <a-input-number
                  v-model:value="formState.ponderacion_prioridad_relativo"
                  style="width: 200px"
                  placeholder="Ponderación de prioridad"
                />
              </a-form-item>
              <a-form-item
                :name="fuente_informacion_verificacion_relativo"
                label="FUENTE DE INFORMACIÓN O VERIFICACIÓN (%)"
                :rules="[{ type: 'number', min: 0, max: 100 }]"
              >
                <a-textarea
                  v-model:value="
                    formState.fuente_informacion_verificacion_relativo
                  "
                  style="width: 200px"
                  placeholder="Escribir la Fuente de Información"
                />
              </a-form-item>
            </a-col>
          </a-row>
        </div>
        <a-form-item :wrapper-col="{ ...layout.wrapperCol, offset: 8 }">
          <a-button type="primary" html-type="submit">
            GUARDAR INDICADOR RESULTADO
          </a-button>
        </a-form-item>
      </a-form>
    </a-col>
  </a-row>
</template>
<script setup>
import { ref, reactive, toRefs, computed, watch } from "vue";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const formState = reactive({
  tipo_indicador_absoluto: null,
  indicador_resultado_absoluto: "",
  formula_absoluto: "",
  linea_base_2020_absoluto: undefined,
  meta_al_2025_absoluto: undefined,
  linea_2021_absoluto: undefined,
  linea_2022_absoluto: undefined,
  linea_2023_absoluto: undefined,
  linea_2024_absoluto: undefined,
  linea_2025_absoluto: undefined,
  ponderacion_prioridad_absoluto: undefined,
  fuente_informacion_verificacion_absoluto: undefined,
  tipo_indicador_relativo: null,
  indicador_resultado_relativo: "",
  formula_relativo: "",
  linea_base_2020_relativo: undefined,
  meta_al_2025_relativo: undefined,
  linea_2021_relativo: undefined,
  linea_2022_relativo: undefined,
  linea_2023_relativo: undefined,
  linea_2024_relativo: undefined,
  linea_2025_relativo: undefined,
  ponderacion_prioridad_relativo: undefined,
  fuente_informacion_verificacion_relativo: undefined,
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

const layout3 = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const options4 = ref([
  {
    value: "jack",
    label: "Jack 4",
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

const options5 = ref([
  {
    value: "jack",
    label: "Jack 5",
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

const checked = ref(false);

const checked2 = ref(true);

const value3 = ref("1");

const size = ref(50);
</script>
