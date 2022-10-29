<template>
  <a-row type="flex" justify="space-around" align="middle">
    <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
      <h6>Indicador Resultado</h6>
    </a-col>
  </a-row>
  <a-row type="flex" justify="space-around" align="middle">
    <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
      <a-form
        :model="ptdiResultadoStore.ptdiResultado"
        v-bind="layout3"
        name="nest-messages"
        :validate-messages="validateMessages"
        @finish="onFinish"
      >
        <a-row type="flex" justify="space-around" align="middle">
          <a-col :xs="24" :sm="24" :md="16" :lg="16" :xl="16">
            <a-form-item
              justify="space-around"
              name="indicador_tipo"
              label="TIPO DE INDICADOR"
            >
              <a-switch
                v-model:checked="
                  ptdiResultadoStore.ptdiResultado.indicador_tipo
                "
                justify="space-around"
                checkedValue="ABSOLUTO"
                unCheckedValue="RELATIVO"
                checked-children="ABSOLUTO"
                un-checked-children="RELATIVO"
                @change="checkChange"
              />
            </a-form-item>
          </a-col>
        </a-row>

        <a-row type="flex" justify="space-around" align="middle">
          <a-col :xs="24" :sm="24" :md="16" :lg="16" :xl="16">
            <a-form-item name="indicador" label="INDICADOR RESULTADO">
              <a-textarea
                v-model:value="ptdiResultadoStore.ptdiResultado.indicador"
                placeholder="Escribir el Indicador de Valor Absoluto"
              />
            </a-form-item>
          </a-col>
        </a-row>

        <a-row
          v-if="ptdiResultadoStore.ptdiResultado.indicador_tipo == 'ABSOLUTO'"
          type="flex"
          justify="space-around"
          align="middle"
        >
          <a-col :xs="24" :sm="24" :md="24" :lg="20" :xl="18"> </a-col>
        </a-row>
        <a-row
          v-else-if="
            ptdiResultadoStore.ptdiResultado.indicador_tipo == 'RELATIVO'
          "
          type="flex"
          justify="space-around"
          align="middle"
        >
          <a-col :xs="18" :sm="18" :md="18" :lg="18" :xl="18">
            <a-form-item
              name="indicador_resultado_relativo"
              label="INDICADOR RESULTADO RELATIVO"
            >
              <a-textarea
                v-model:value="formState.indicador_resultado_relativo"
                placeholder="Elija Indicador Relativo"
              />
            </a-form-item>
            <a-form-item
              name="formula_relativo"
              label="FÓRMULA INDICADOR RELATIVO"
            >
              <a-input
                v-model:value="formState.formula_relativo"
                placeholder="Escribir la Fórmula de Valor Relativo"
              />
            </a-form-item>
            <a-form-item
              name="encendido_denominador_relativo"
              label="ELEGIR TIPO DE DENOMINADOR"
            >
              <a-radio-group v-model:value="value3" name="radioGroup">
                <a-radio value="1">Denominador Variable</a-radio>
                <a-radio value="2">Denominador Fijo</a-radio>
              </a-radio-group>
            </a-form-item>
          </a-col>
        </a-row>

        <a-row type="flex" justify="space-around" align="middle">
          <a-col :xs="18" :sm="18" :md="18" :lg="18" :xl="18">
            <a-form-item
              name="formula_absoluto"
              label="FÓRMULA INDICADOR ABSOLUTO"
            >
              <a-input
                v-model:value="formState.formula_absoluto"
                placeholder="Escribir la Fórmula de Valor Absoluto"
              />
            </a-form-item>
            <a-form-item
              name="lineabase_2020_absoluto"
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
              name="meta_al_2025_absoluto"
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

        <a-row type="flex" justify="space-around" align="middle">
          <a-col :xs="18" :sm="18" :md="18" :lg="18" :xl="18">
            <a-divider style="border-color: #8db600" dashed />
            <h6>Programación Física Resultado</h6>
            <a-space :size="size">
              <a-col>
                <a-col> 2021 </a-col>
                <a-col>
                  <a-form-item
                    name="meta_prog_2021"
                    :rules="[{ type: 'number', min: 0, max: 100 }]"
                  >
                    <a-input-number
                      v-model:value="
                        ptdiResultadoStore.ptdiResultado.meta_prog_2021
                      "
                    />
                  </a-form-item>
                </a-col>
              </a-col>
              <a-col>
                <a-col> 2022 </a-col>
                <a-col>
                  <a-form-item
                    name="meta_prog_2022"
                    :rules="[{ type: 'number', min: 0, max: 100 }]"
                  >
                    <a-input-number
                      v-model:value="
                        ptdiResultadoStore.ptdiResultado.meta_prog_2022
                      "
                    />
                  </a-form-item>
                </a-col>
              </a-col>
              <a-col>
                <a-col> 2023 </a-col>
                <a-col>
                  <a-form-item
                    name="meta_prog_2023"
                    :rules="[{ type: 'number', min: 0, max: 100 }]"
                  >
                    <a-input-number
                      v-model:value="
                        ptdiResultadoStore.ptdiResultado.meta_prog_2023
                      "
                    />
                  </a-form-item>
                </a-col>
              </a-col>
              <a-col>
                <a-col> 2024 </a-col>
                <a-col>
                  <a-form-item
                    name="meta_prog_2024"
                    :rules="[{ type: 'number', min: 0, max: 100 }]"
                  >
                    <a-input-number
                      v-model:value="
                        ptdiResultadoStore.ptdiResultado.meta_prog_2024
                      "
                    />
                  </a-form-item>
                </a-col>
              </a-col>
              <a-col>
                <a-col> 2025 </a-col>
                <a-col>
                  <a-form-item
                    name="meta_prog_2025"
                    :rules="[{ type: 'number', min: 0, max: 100 }]"
                  >
                    <a-input-number
                      v-model:value="
                        ptdiResultadoStore.ptdiResultado.meta_prog_2025
                      "
                    />
                  </a-form-item>
                </a-col>
              </a-col>
            </a-space>
          </a-col>
          <a-divider style="border-color: #8db600" dashed />
        </a-row>

        <a-row type="flex" justify="space-around" align="middle">
          <a-col :xs="18" :sm="18" :md="18" :lg="18" :xl="18">
            <a-form-item
              name="ponderacion_prioridad_absoluto"
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
              name="fuente_informacion_verificacion_absoluto"
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

        <a-row type="flex" justify="space-around" align="middle">
          <a-col :xs="18" :sm="18" :md="18" :lg="18" :xl="18">
            <a-form-item :wrapper-col="{ ...layout.wrapperCol, offset: 8 }">
              <a-button type="primary" html-type="submit">
                GUARDAR INDICADOR RESULTADO
              </a-button>
            </a-form-item>
          </a-col>
        </a-row>
      </a-form>
    </a-col>
  </a-row>
</template>
<script setup>
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

const checkChange = () => {
  console.log(ptdiResultadoStore.ptdiResultado.indicador_tipo);
};

const layout3 = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const value3 = ref("1");

const size = ref(50);

const validateMessages = {
  required: "${label} es requerido!",
};
</script>
