<template>
  <a-row>
    <a-col :xs="5" :sm="5" :md="5" :lg="5" :xl="2"></a-col>
      <a-col :xs="14" :sm="14" :md="14" :lg="18" :xl="20">
        <H6>Indicador Resultado</H6>
        <a-form
          :model="formState"
          v-bind="layout3"
          name="nest-messages"
          :validate-messages="validateMessages"
          @finish="onFinish"
        >  
          <p>ABSOLUTO (APAGADO) / RELATIVO (ENCENDIDO)</p>             
          <a-form-item align="center" :name="['formtab5datosindicadorresultado', 'encendidoindicador']" label="">
            <a-switch v-model:checked="checked" justify="end"/>
          </a-form-item>
          <div v-if="!checked">
            <a-row>
              <a-col :xs="3" :sm="3" :md="3" :lg="3" :xl="3"></a-col>
              <a-col :xs="18" :sm="18" :md="18" :lg="18" :xl="18">
                <a-form-item :name="['formtab5datosindicadorresultado', 'tipoindicadorabsoluto']" label="TIPO DE INDICADOR ABSOLUTO" >

                    <a-select
                      v-model:value="formState.formtab5datosindicadorresultado.tipoindicadorabsoluto"
                      show-search
                      placeholder="Seleccionar Indicador Absoluto"
                      :options="options4"
                      :filter-option="filterOption"
                      @focus="handleFocus"
                      @blur="handleBlur"
                      @change="handleChange"
                    ></a-select>
                </a-form-item>
                <a-form-item :name="['formtab5datosindicadorresultado', 'indicadorresultadoabsoluto']" label="INDICADOR RESULTADO ABSOLUTO">
                  <a-textarea v-model:value="formState.formtab5datosindicadorresultado.indicadorresultadoabsoluto" />
                </a-form-item>
                <a-form-item :name="['formtab5datosindicadorresultado', 'formulaabsoluto']" label="FÓRMULA INDICADOR ABSOLUTO">
                  <a-input v-model:value="formState.formtab5datosindicadorresultado.formulaabsoluto" />
                </a-form-item>
                <a-form-item :name="['formtab5datosindicadorresultado', 'lineabase2020absoluto']" label="LINEA BASE 2020" :rules="[{ type: 'number', min: 0, max: 100 }]">
                  <a-input-number v-model:value="formState.formtab5datosindicadorresultado.lineabase2020absoluto" />
                </a-form-item>
                <a-form-item :name="['formtab5datosindicadorresultado', 'metaal2025absoluto']" label="META AL 2025" :rules="[{ type: 'number', min: 0, max: 100 }]">
                  <a-input-number v-model:value="formState.formtab5datosindicadorresultado.metaal2025absoluto" />
                </a-form-item>   
              </a-col>
              <a-col :xs="3" :sm="3" :md="3" :lg="3" :xl="3"></a-col>
            </a-row>
            <a-divider style="border-color: #8DB600" dashed />
            <h6>Programación Física Resultado</h6> 
            <a-row>
              <a-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4"></a-col>
              <a-col :xs="16" :sm="16" :md="16" :lg="16" :xl="16">
                <div align="center">
                  <a-space :size="size">
                    <a-col >
                      <a-col >
                        2021
                      </a-col>
                      <a-col>
                        <a-form-item :name="['formtab5datosindicadorresultado', 'linea2021absoluto']" :rules="[{ type: 'number', min: 0, max: 100 }]">
                          <a-input-number v-model:value="formState.formtab5datosindicadorresultado.linea2021absoluto" />
                        </a-form-item>
                      </a-col>
                    </a-col>
                    <a-col>
                        <a-col>
                          2022
                        </a-col>
                        <a-col>
                          <a-form-item  :name="['formtab5datosindicadorresultado', 'linea2022absoluto']" :rules="[{ type: 'number', min: 0, max: 100 }]">
                            <a-input-number v-model:value="formState.formtab5datosindicadorresultado.linea2022absoluto" />
                          </a-form-item>
                        </a-col>
                      </a-col>
                    <a-col>
                      <a-col>
                        2023
                      </a-col>
                      <a-col>
                        <a-form-item  :name="['formtab5datosindicadorresultado', 'linea2023absoluto']" :rules="[{ type: 'number', min: 0, max: 100 }]">
                          <a-input-number v-model:value="formState.formtab5datosindicadorresultado.linea2023absoluto" />
                        </a-form-item>
                      </a-col>        
                    </a-col>
                    <a-col>                    
                      <a-col>
                        2024
                      </a-col>
                      <a-col>
                        <a-form-item  :name="['formtab5datosindicadorresultado', 'linea2024absoluto']" :rules="[{ type: 'number', min: 0, max: 100 }]">
                          <a-input-number v-model:value="formState.formtab5datosindicadorresultado.linea2024absoluto" />
                        </a-form-item>
                      </a-col>  
                    </a-col>
                    <a-col>
                      <a-col>
                        2025
                      </a-col>
                      <a-col>
                        <a-form-item :name="['formtab5datosindicadorresultado', 'linea2025absoluto']" :rules="[{ type: 'number', min: 0, max: 100 }]">
                          <a-input-number v-model:value="formState.formtab5datosindicadorresultado.linea2025absoluto" />
                        </a-form-item>
                      </a-col>        
                    </a-col>
                  </a-space>
                </div>
              </a-col>
              <a-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4"></a-col>
            </a-row>
            <a-divider style="border-color: #8DB600" dashed />
            <a-row>
              <a-col :xs="4" :sm="4" :md="4" :lg="4" :xl="1"></a-col>
              <a-col :xs="16" :sm="16" :md="16" :lg="16" :xl="22">
                <a-form-item :name="['formtab5datosindicadorresultado', 'ponderacionprioridadabsoluto']" label="PONDERACIÓN DE PRIORIDAD" :rules="[{ type: 'number', min: 0, max: 100 }]">
                  <a-input-number v-model:value="formState.formtab5datosindicadorresultado.ponderacionprioridadabsoluto" />
                </a-form-item>
                <a-form-item :name="['formtab5datosindicadorresultado', 'fuenteinformacionverificacionabsoluto']" label="FUENTE DE INFORMACIÓN O VERIFICACIÓN" :rules="[{ type: 'number', min: 0, max: 100 }]">
                  <a-textarea v-model:value="formState.formtab5datosindicadorresultado.fuenteinformacionverificacionabsoluto" />
                </a-form-item> 
              </a-col>
              <a-col :xs="4" :sm="4" :md="4" :lg="4" :xl="1"></a-col>
            </a-row>
          </div>
          <div v-else-if="checked">
            <a-row>
              <a-col :xs="3" :sm="3" :md="3" :lg="3" :xl="3"></a-col>
              <a-col :xs="18" :sm="18" :md="18" :lg="18" :xl="18">
                <a-form-item :name="['formtab5datosindicadorresultado', 'tipoindicadorrelativo']" label="TIPO DE INDICADOR RELATIVO" >
                    <a-select
                      v-model:value="formState.formtab5datosindicadorresultado.tipoindicadorrelativo"
                      show-search
                      placeholder="Seleccionar Indicador Relativo"
                      :options="options5"
                      :filter-option="filterOption"
                      @focus="handleFocus"
                      @blur="handleBlur"
                      @change="handleChange"
                    ></a-select>
                </a-form-item>
                <a-form-item :name="['formtab5datosindicadorresultado', 'indicadorresultadorelativo']" label="INDICADOR RESULTADO RELATIVO">
                  <a-textarea v-model:value="formState.formtab5datosindicadorresultado.indicadorresultadorelativo" />
                </a-form-item>
                  <a-form-item :name="['formtab5datosindicadorresultado', 'formularelativo']" label="FÓRMULA INDICADOR RELATIVO">
                    <a-input v-model:value="formState.formtab5datosindicadorresultado.formularelativo" />
                  </a-form-item>
                  <a-form-item :name="['formtab5datosindicadorresultado', 'encendidodenominadorrelativo']" label="ELEGIR TIPO DE DENOMINADOR">
                    <a-radio-group v-model:value="value3" name="radioGroup">
                      <a-radio value="1">Denominador Variable</a-radio>
                      <a-radio value="2">Denominador Fijo</a-radio>
                    </a-radio-group>
                  </a-form-item>
                  <a-form-item :name="['formtab5datosindicadorresultado', 'lineabase2020relativo']" label="LINEA BASE 2020 (%)" :rules="[{ type: 'number', min: 0, max: 100 }]">
                    <a-input-number v-model:value="formState.formtab5datosindicadorresultado.lineabase2020relativo" />
                  </a-form-item>
                  <a-form-item :name="['formtab5datosindicadorresultado', 'meta2025relativo']" label="META AL 2025 (%)" :rules="[{ type: 'number', min: 0, max: 100 }]">
                    <a-input-number v-model:value="formState.formtab5datosindicadorresultado.meta2025relativo" />
                  </a-form-item>
                </a-col>
                <a-col :xs="3" :sm="3" :md="3" :lg="3" :xl="3"></a-col>
              </a-row>  
              <a-divider style="border-color: #8DB600" dashed />
              <H6>Programación Física Resultado</H6> 
              <a-row>
                <a-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4"></a-col>
                <a-col :xs="16" :sm="16" :md="16" :lg="16" :xl="16">
                  <div align="center">
                    <a-space :size="size">
                      <a-col>
                        <a-col>
                          2021 (%)
                        </a-col>
                        <a-col>
                          <a-form-item :name="['formtab5datosindicadorresultado', 'linea2021relativo']" :rules="[{ type: 'number', min: 0, max: 100 }]">
                            <a-input-number v-model:value="formState.formtab5datosindicadorresultado.linea2021relativo" />
                          </a-form-item>
                        </a-col>  
                      </a-col>
                      <a-col>
                        <a-col>
                          2022 (%)
                        </a-col>
                        <a-col>
                          <a-form-item :name="['formtab5datosindicadorresultado', 'linea2022relativo']" :rules="[{ type: 'number', min: 0, max: 100 }]">
                            <a-input-number v-model:value="formState.formtab5datosindicadorresultado.linea2022relativo" />
                          </a-form-item>
                        </a-col>
                      </a-col>
                      <a-col>
                        <a-col>
                          2023 (%)
                        </a-col>
                        <a-col>
                          <a-form-item :name="['formtab5datosindicadorresultado', 'linea2023relativo']" :rules="[{ type: 'number', min: 0, max: 100 }]">
                            <a-input-number v-model:value="formState.formtab5datosindicadorresultado.linea2023relativo" />
                          </a-form-item>
                        </a-col>
                      </a-col>
                      <a-col>
                        <a-col>
                          2024 (%)
                        </a-col>
                        <a-col>
                          <a-form-item :name="['formtab5datosindicadorresultado', 'linea2024relativo']" :rules="[{ type: 'number', min: 0, max: 100 }]">
                            <a-input-number v-model:value="formState.formtab5datosindicadorresultado.linea2024relativo" />
                          </a-form-item>
                        </a-col>
                      </a-col>
                      <a-col>
                        <a-col>
                          2025 (%)
                        </a-col>
                        <a-col>
                          <a-form-item :name="['formtab5datosindicadorresultado', 'linea2025relativo']" :rules="[{ type: 'number', min: 0, max: 100 }]">
                            <a-input-number v-model:value="formState.formtab5datosindicadorresultado.linea2025relativo" />
                          </a-form-item>
                        </a-col>          
                      </a-col>
                    </a-space>
                  </div>
                </a-col>
              <a-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4"></a-col>
            </a-row>
            <a-divider style="border-color: #8DB600" dashed />
            <a-row>
              <a-col :xs="4" :sm="4" :md="4" :lg="4" :xl="1"></a-col>
              <a-col :xs="16" :sm="16" :md="16" :lg="16" :xl="22">
                <a-form-item :name="['formtab5datosindicadorresultado', 'ponderacionprioridadrelativo']" label="PONDERACIÓN DE PRIORIDAD (%)" :rules="[{ type: 'number', min: 0, max: 100 }]">
                  <a-input-number v-model:value="formState.formtab5datosindicadorresultado.ponderacionprioridadrelativo" />
                </a-form-item>
                <a-form-item :name="['formtab5datosindicadorresultado', 'fuenteinformacionverificacionrelativo']" label="FUENTE DE INFORMACIÓN O VERIFICACIÓN (%)" :rules="[{ type: 'number', min: 0, max: 100 }]">
                  <a-textarea v-model:value="formState.formtab5datosindicadorresultado.fuenteinformacionverificacionrelativo" />
                </a-form-item>
                <a-form-item :wrapper-col="{ ...layout.wrapperCol, offset: 8 }">
                  <a-button type="primary" html-type="submit">GUARDAR INDICADOR RESULTADO</a-button>
                </a-form-item>
              </a-col>
              <a-col :xs="5" :sm="5" :md="5" :lg="5" :xl="2"></a-col>
            </a-row>
          </div>
        </a-form>
      </a-col>
    <a-col :xs="5" :sm="5" :md="5" :lg="5" :xl="2"></a-col>
  </a-row>  
</template>
<script setup>
  import { DownOutlined} from '@ant-design/icons-vue';
  import { TreeSelect } from 'ant-design-vue';
  import { defineComponent, ref, reactive, toRefs, computed, watch } from 'vue';
  
  const activeKey = ref('1');
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

    formtab5datosindicadorresultado: {
      tipoindicadorabsoluto: '',
      indicadorresultadoabsoluto: '',
      formulaabsoluto: '',
      lineabase2020absoluto: undefined,
      metaal2025absoluto: undefined,
      linea2021absoluto: undefined,
      linea2022absoluto: undefined,
      linea2023absoluto: undefined,
      linea2024absoluto: undefined,
      linea2025absoluto: undefined,
      ponderacionprioridadabsoluto: undefined,
      fuenteinformacionverificacionabsoluto: undefined,
      tipoindicadorrelativo: '',
      indicadorresultadorelativo: '',
      formularelativo: '',
      lineabase2020relativo: undefined,
      metaal2025relativo: undefined,
      linea2021relativo: undefined,
      linea2022relativo: undefined,
      linea2023relativo: undefined,
      linea2024relativo: undefined,
      linea2025relativo: undefined,
      ponderacionprioridadrelativo: undefined,
      fuenteinformacionverificacionrelativo: undefined,
    },

  });


  const onFinish = values => {
    console.log('Success:', values);
  };

  const handleChange = value => {
    console.log(`selected ${value}`);
  };

  const handleBlur = () => {
    console.log('blur');
  };

  const handleFocus = () => {
    console.log('focus');
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

  const options4 = ref([{
    value: 'jack',
    label: 'Jack 4',
  }, {
    value: 'lucy',
    label: 'Lucy',
  }, {
    value: 'tom',
    label: 'Tom',
  }]);

  const options5 = ref([{
    value: 'jack',
    label: 'Jack 5',
  }, {
    value: 'lucy',
    label: 'Lucy',
  }, {
    value: 'tom',
    label: 'Tom',
  }]);

  const checked = ref(false);

  const checked2 = ref(true);

  const value3 = ref('1');

  const size = ref(50);

</script>