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
                placeholder="Escribir el Indicador"
              />
            </a-form-item>
            <a-form-item name="formula" label="FÓRMULA INDICADOR">
              <a-textarea
                v-model:value="ptdiResultadoStore.ptdiResultado.formula"
                placeholder="Escribir la Fórmula del Indicador"
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
              name="indicador_relativo_denominador"
              label="TIPO DE DENOMINADOR"
            >
              <a-radio-group
                v-model:value="
                  ptdiResultadoStore.ptdiResultado
                    .indicador_relativo_denominador
                "
                name="indicador_relativo_denominador"
              >
                <a-radio-button value="VARIABLE"
                  >Denominador Variable</a-radio-button
                >
                <a-radio-button value="FIJO">Denominador Fijo</a-radio-button>
              </a-radio-group>
            </a-form-item>
          </a-col>
        </a-row>

        <a-row type="flex" justify="space-around" align="middle">
          <a-col :xs="18" :sm="18" :md="18" :lg="18" :xl="18">
            <a-form-item name="linea_base" label="LINEA BASE 2020">
              <a-input-number
                v-model:value="ptdiResultadoStore.ptdiResultado.linea_base"
                placeholder="Escribir la Linea Base al 2020"
              />
            </a-form-item>
            <a-form-item name="meta_estimacion" label="META AL 2025">
              <a-input-number
                v-model:value="ptdiResultadoStore.ptdiResultado.meta_estimacion"
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
                  <a-form-item name="meta_prog_2021">
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
                  <a-form-item name="meta_prog_2022">
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
                  <a-form-item name="meta_prog_2023">
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
                  <a-form-item name="meta_prog_2024">
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
                  <a-form-item name="meta_prog_2025">
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
            <a-form-item name="ponderacion" label="PONDERACIÓN DE PRIORIDAD">
              <a-input-number
                v-model:value="ptdiResultadoStore.ptdiResultado.ponderacion"
                style="width: 200px"
                placeholder="Ponderación de prioridad"
              />
            </a-form-item>
            <a-form-item
              name="fuente_informacion"
              label="FUENTE DE INFORMACIÓN O VERIFICACIÓN"
            >
              <a-textarea
                v-model:value="
                  ptdiResultadoStore.ptdiResultado.fuente_informacion
                "
                placeholder="Escribir la Fuente de Información"
              />
            </a-form-item>
          </a-col>
        </a-row>

        <a-row type="flex" justify="space-around" align="middle">
          <a-col :xs="24" :sm="18" :md="18" :lg="18" :xl="18">
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
import { ref, reactive, computed, watch } from "vue";
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

const onFinish = async (data) => {
  let where = {
    id: ptdiResultadoStore.ptdiResultado.id,
  };
  console.log({ where, data });
  data.linea_base = parseFloat(data.linea_base);
  data.meta_estimacion = parseFloat(data.meta_estimacion);
  data.meta_prog_2021 = parseFloat(data.meta_prog_2021);
  data.meta_prog_2022 = parseFloat(data.meta_prog_2022);
  data.meta_prog_2023 = parseFloat(data.meta_prog_2023);
  data.meta_prog_2024 = parseFloat(data.meta_prog_2024);
  data.meta_prog_2025 = parseFloat(data.meta_prog_2025);
  data.ponderacion = parseFloat(data.ponderacion);

  await ptdiResultadoStore.updatePtdiResultado(where, data);
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

const size = ref(50);

const validateMessages = {
  required: "${label} es requerido!",
};
</script>
