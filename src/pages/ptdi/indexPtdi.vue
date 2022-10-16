<template>
  <div>GENERACIÓN DE MATRIZ PTDI/RESULTADO</div>
  <a-tabs v-model:activeKey="activeKey" type="card" class="padding">


    <a-tab-pane key="1" tab="1. DATOS GENERALES DEL SECTOR DE PLANIFICACIÓN">
      <Tab1/>
    </a-tab-pane>



    <a-tab-pane key="2" tab="2. SELECTOR PDES">
      <div>
        <H6>Selector para PDES</H6>
        <a-tree
          v-model:expandedKeys="expandedKeys"
          v-model:selectedKeys="selectedKeys"
          show-line
          :tree-data="treeData"
        >
          <template #switcherIcon="{ switcherCls }"><down-outlined :class="switcherCls" /></template>
        </a-tree>
      </div>
      <div>
        <a-divider style="border-color: #8DB600" dashed />
      </div>
      <div>
        <h6>RESULTADO</h6>
        <a-table :columns="columns" :data-source="data" bordered>
          <template #bodyCell="{ column, text }">
            <template v-if="column.dataIndex === 'name'">
              <a>{{ text }}</a>
            </template>
          </template>
        </a-table>
        
      </div>
      <div align="right" >
        <a-button class="btn-fixed-width" type="primary" html-type="submit">GUARDAR SELECCIÓN</a-button>
      </div>
    </a-tab-pane>



    <a-tab-pane key="3" tab="3. SELECCIÓN DE PROGRAMAS Y PROYECTOS">
      <div>
        <H6>Seleccionar Programas y Proyectos</H6>
        <a-tree
          v-model:expandedKeys="expandedKeys"
          v-model:selectedKeys="selectedKeys"
          show-line
          :tree-data="treeData2"
        >
          <template #switcherIcon="{ switcherCls }"><down-outlined :class="switcherCls" /></template>
        </a-tree>
      </div>
      <div>
        <a-divider style="border-color: #8DB600" dashed />
      </div>
      <div>
        <h6>RESULTADO SECTOR SELECCIONADO</h6>
        <a-list size="large" bordered :data-source="data2">
          <template #renderItem="{ item }">
            <a-list-item>{{ item }}</a-list-item>
          </template>
          <template #header>
            <div>Header</div>
          </template>
          <template #footer>
            <div>Footer</div>
          </template>
        </a-list>
      </div>
      <div align="right" >
        <a-button class="btn-fixed-width" type="primary" html-type="submit">GUARDAR PROGRAMAS</a-button>
      </div>
    </a-tab-pane>



    <a-tab-pane key="4" tab="4. REGISTRO RESULTADO">
      <H6>Seleccionar Datos de Resultados</H6>
      <a-form
        :model="formState"
        v-bind="layout2"
        name="nest-messages"
        :validate-messages="validateMessages"
        @finish="onFinish"
      >
        <a-form-item :name="['formtab4datoresultado', 'entidad']" label="ENTIDAD">
          <a-select
            v-model:value="formState.formtab4datoresultado.entidad"
            show-search
            placeholder="Seleccione una Entidad"
            style="width: sm"
            :options="options2"
            :filter-option="filterOption"
            @focus="handleFocus"
            @blur="handleBlur"
            @change="handleChange"
          ></a-select>
        </a-form-item>
        <a-form-item :name="['formtab4datoresultado', 'areasorganizacionales']" label="ÁREAS ORGANIZACIONALES">
          <a-tree-select
            v-model:value2="formState.formtab4datoresultado.areasorganizacionales"
            style="width: sm"
            :tree-data="treeData3"
            tree-checkable
            allow-clear
            :show-checked-strategy="SHOW_PARENT"
            placeholder="Seleccionar Área Organizacional"
          />
        </a-form-item>
        <a-form-item :name="['formtab4datoresultado', 'codigoresultado']" label="CÓDIGO DEL RESULTADO">
          <a-input v-model:value="formState.formtab4datoresultado.codigoresultado" />

        </a-form-item>
        <a-form-item :name="['formtab4datoresultado', 'descripcion']" label="DESCRIPCIÓN">
          <a-select
            v-model:value="formState.formtab4datoresultado.descripcion"
            show-search
            placeholder="Seleccione una Descripción"
            style="width: sm"
            :options="options3"
            :filter-option="filterOption"
            @focus="handleFocus"
            @blur="handleBlur"
            @change="handleChange"
          ></a-select>
        </a-form-item>
        <a-form-item :name="['formtab4datoresultado', 'agregarnuevadescripcion']" label="AGREGAR DESCRIPCIÓN">
          <div align=center>
            <a-button type="primary" color:positive @click="showModal"><template #icon><SearchOutlined /></template>AGREGAR NUEVA DESCRIPCIÓN</a-button>
            <a-modal
              v-model:visible="visible"
              height="1000px"
              title="Agregando una Nueva Descripción"
              :ok-button-props="{ disabled: false }"
              :cancel-button-props="{ disabled: false }"
              @ok="handleOk"
            >
              <a-form-item :name="['formtab4datoresultado', 'detalle']" label="DETALLE">
                <a-textarea v-model:value="formState.formtab4datoresultado.detalle" />
              </a-form-item>
            </a-modal>
          </div>
        </a-form-item>
        <a-form-item :wrapper-col="{ ...layout.wrapperCol, offset: 8 }">
          <a-button type="primary" html-type="submit">GUARDAR RESULTADO</a-button>
        </a-form-item>
      </a-form>
    </a-tab-pane>



    <a-tab-pane key="5" tab="5. INDICADOR RESULTADO">
      <H6>Seleccionar los Datos del Indicador para Resultados</H6>
      <a-form
        :model="formState"
        v-bind="layout3"
        name="nest-messages"
        :validate-messages="validateMessages"
        @finish="onFinish"
      >
        <a-row>
          <a-col :span="24">
            <a-form-item align="center" :name="['formtab5datosindicadorresultado', 'encendidoindicardor']" label="INDICADOR ABSOLUTO (APAGADO) / INDICADOR RELATIVO (ENCENDIDO)">
              <a-switch v-model:checked="checked" />
            </a-form-item>
            <div v-if="!checked">
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
              <a-form-item :name="['formtab5datosindicadorresultado', 'meta2025absoluto']" label="META AL 2025" :rules="[{ type: 'number', min: 0, max: 100 }]">
                <a-input-number v-model:value="formState.formtab5datosindicadorresultado.meta2025absoluto" />
              </a-form-item>    
              <a-divider style="border-color: #8DB600" dashed />
              <div align="center">
                <a-row>
                  <a-col :xs="20" :sm="16" :md="12" :lg="8" :xl="4">
                    <a-row>
                      <a-col :md="24">
                        2021
                      </a-col>
                      <a-col :md="24">
                        <a-form-item align="center" :name="['formtab5datosindicadorresultado', 'linea2021absoluto']" :rules="[{ type: 'number', min: 0, max: 100 }]">
                          <a-input-number v-model:value="formState.formtab5datosindicadorresultado.linea2021absoluto" />
                        </a-form-item>
                      </a-col>
                    </a-row>
                  </a-col>
                  <a-col :xs="20" :sm="16" :md="12" :lg="8" :xl="4">
                    <a-row>
                      <a-col :md="24">
                        2022
                      </a-col>
                      <a-col :md="24">
                        <a-form-item align="center" :name="['formtab5datosindicadorresultado', 'linea2022absoluto']" :rules="[{ type: 'number', min: 0, max: 100 }]">
                          <a-input-number v-model:value="formState.formtab5datosindicadorresultado.linea2022absoluto" />
                        </a-form-item>
                      </a-col>
                    </a-row>
                  </a-col>
                  <a-col :xs="20" :sm="16" :md="12" :lg="8" :xl="4">
                    <a-row>
                      <a-col :md="24">
                        2023
                      </a-col>
                      <a-col :md="24">
                        <a-form-item align="center" :name="['formtab5datosindicadorresultado', 'linea2023absoluto']" :rules="[{ type: 'number', min: 0, max: 100 }]">
                          <a-input-number v-model:value="formState.formtab5datosindicadorresultado.linea2023absoluto" />
                        </a-form-item>
                      </a-col>
                    </a-row>          
                  </a-col>
                  <a-col :xs="20" :sm="16" :md="12" :lg="8" :xl="4">
                    <a-row>
                      <a-col :md="24">
                        2024 (%)
                      </a-col>
                      <a-col :md="24">
                        <a-form-item align="center" :name="['formtab5datosindicadorresultado', 'linea2024absoluto']" :rules="[{ type: 'number', min: 0, max: 100 }]">
                          <a-input-number v-model:value="formState.formtab5datosindicadorresultado.linea2024absoluto" />
                        </a-form-item>
                      </a-col>
                    </a-row>
                  </a-col>
                  <a-col :xs="20" :sm="16" :md="12" :lg="8" :xl="4">
                    <a-row>
                      <a-col :md="24">
                        2025
                      </a-col>
                      <a-col :md="24">
                        <a-form-item align="center" :name="['formtab5datosindicadorresultado', 'linea2025absoluto']" :rules="[{ type: 'number', min: 0, max: 100 }]">
                          <a-input-number v-model:value="formState.formtab5datosindicadorresultado.linea2025absoluto" />
                        </a-form-item>
                      </a-col>
                    </a-row>          
                  </a-col>
                </a-row>
              </div>
              <a-divider style="border-color: #8DB600" dashed />
              <a-form-item :name="['formtab5datosindicadorresultado', 'ponderacionprioridadabsoluto']" label="PONDERACIÓN DE PRIORIDAD" :rules="[{ type: 'number', min: 0, max: 100 }]">
                <a-input-number v-model:value="formState.formtab5datosindicadorresultado.ponderacionprioridadabsoluto" />
              </a-form-item>
              <a-form-item :name="['formtab5datosindicadorresultado', 'fuenteinformacionverificacionabsoluto']" label="FUENTE DE INFORMACIÓN O VERIFICACIÓN" :rules="[{ type: 'number', min: 0, max: 100 }]">
                <a-textarea v-model:value="formState.formtab5datosindicadorresultado.fuenteinformacionverificacionabsoluto" />
              </a-form-item>  
            </div>

            

            <div v-else-if="checked">
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
              <a-form-item :name="['formtab5datosindicadorresultado', 'encendidodenominadorrelativo']" label="DENOMINADOR VARIABLE (ENCENDIDO) / DENOMINADOR FIJO (APAGADO)">
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
              <a-divider style="border-color: #8DB600" dashed />
              <div align="center">
                <a-row>
                  <a-col :xs="20" :sm="16" :md="12" :lg="8" :xl="4">
                    <a-row>
                      <a-col :md="24">
                        2021 %
                      </a-col>
                      <a-col :md="24">
                        <a-form-item align="center" :name="['formtab5datosindicadorresultado', 'linea2021relativo']" :rules="[{ type: 'number', min: 0, max: 100 }]">
                          <a-input-number v-model:value="formState.formtab5datosindicadorresultado.linea2021relativo" />
                        </a-form-item>
                      </a-col>
                    </a-row>
                  </a-col>
                  <a-col :xs="20" :sm="16" :md="12" :lg="8" :xl="4">
                    <a-row>
                      <a-col :md="24">
                        2022 %
                      </a-col>
                      <a-col :md="24">
                        <a-form-item align="center" :name="['formtab5datosindicadorresultado', 'linea2022relativo']" :rules="[{ type: 'number', min: 0, max: 100 }]">
                          <a-input-number v-model:value="formState.formtab5datosindicadorresultado.linea2022relativo" />
                        </a-form-item>
                      </a-col>
                    </a-row>
                  </a-col>
                  <a-col :xs="20" :sm="16" :md="12" :lg="8" :xl="4">
                    <a-row>
                      <a-col :md="24">
                        2023 %
                      </a-col>
                      <a-col :md="24">
                        <a-form-item align="center" :name="['formtab5datosindicadorresultado', 'linea2023relativo']" :rules="[{ type: 'number', min: 0, max: 100 }]">
                          <a-input-number v-model:value="formState.formtab5datosindicadorresultado.linea2023relativo" />
                        </a-form-item>
                      </a-col>
                    </a-row>          
                  </a-col>
                  <a-col :xs="20" :sm="16" :md="12" :lg="8" :xl="4">
                    <a-row>
                      <a-col :md="24">
                        2024 %
                      </a-col>
                      <a-col :md="24">
                        <a-form-item align="center" :name="['formtab5datosindicadorresultado', 'linea2024relativo']" :rules="[{ type: 'number', min: 0, max: 100 }]">
                          <a-input-number v-model:value="formState.formtab5datosindicadorresultado.linea2024relativo" />
                        </a-form-item>
                      </a-col>
                    </a-row>
                  </a-col>
                  <a-col :xs="20" :sm="16" :md="12" :lg="8" :xl="4">
                    <a-row>
                      <a-col :md="24">
                        2025 %
                      </a-col>
                      <a-col :md="24">
                        <a-form-item align="center" :name="['formtab5datosindicadorresultado', 'linea2025relativo']" :rules="[{ type: 'number', min: 0, max: 100 }]">
                          <a-input-number v-model:value="formState.formtab5datosindicadorresultado.linea2025relativo" />
                        </a-form-item>
                      </a-col>
                    </a-row>          
                  </a-col>
                </a-row>
              </div>
              <a-divider style="border-color: #8DB600" dashed />
              <a-form-item :name="['formtab5datosindicadorresultado', 'ponderacionprioridadrelativo']" label="PONDERACIÓN DE PRIORIDAD" :rules="[{ type: 'number', min: 0, max: 100 }]">
                <a-input-number v-model:value="formState.formtab5datosindicadorresultado.ponderacionprioridadrelativo" />
              </a-form-item>
              <a-form-item :name="['formtab5datosindicadorresultado', 'fuenteinformacionverificacionrelativo']" label="FUENTE DE INFORMACIÓN O VERIFICACIÓN" :rules="[{ type: 'number', min: 0, max: 100 }]">
                <a-textarea v-model:value="formState.formtab5datosindicadorresultado.fuenteinformacionverificacionrelativo" />
              </a-form-item>




            </div>
          </a-col>
        </a-row>

        
        <a-form-item :wrapper-col="{ ...layout.wrapperCol, offset: 8 }">
          <a-button type="primary" html-type="submit">GUARDAR INDICADOR RESULTADO</a-button>
        </a-form-item>
      </a-form>

    </a-tab-pane>



    <a-tab-pane key="6" tab="6. TERRITORIALIZACIÓN">

      <div align="center">

        <a-form
          :model="formState"
          v-bind="layout4"
          name="nest-messages"
          :validate-messages="validateMessages"
          @finish="onFinish"
        >
          
          <a-space>
            <a-select
              v-model:value="state.departamento"
              style="width: 120px"
              :options="departamentos.map(dep => ({ value: dep.nombre }))"
            ></a-select>
            <a-select
              v-model:value="state.region"
              style="width: 120px"
              :options="regiones.map(region => ({ value: region.nombre }))"
            ></a-select>
            <!--
            <a-select
              v-model:value="state.municipio"
              style="width: 120px"
              :options="municipios.map(municipio => ({ value: municipio }))"
            ></a-select>
          -->
          </a-space>

          <a-form-item :wrapper-col="{ ...layout.wrapperCol, offset: 8 }">
            <a-button type="primary" html-type="submit">GUARDAR TERRITORIALIZACIÓN</a-button>
          </a-form-item>
          
        </a-form>
      </div>
    </a-tab-pane>



    <a-tab-pane key="7" tab="7. PROGRAMACIÓN FINANCIERA">
      




    </a-tab-pane>

  </a-tabs>
</template>

<script setup>
  import { DownOutlined} from '@ant-design/icons-vue';
  import { TreeSelect } from 'ant-design-vue';
  import { defineComponent, ref, reactive, toRefs, computed, watch } from 'vue';

  import Tab1 from "./componentes/Tab1.vue"
  
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
    formtab1ptdi: {
      nombresector: '',
      lineamientoestrategicoptdi: '',
      objetivoestrategicoptdi: '',
    },
    formtab4datoresultado: {
      entidad: '',
      areasorganizacionales: '',
      codigoresultado: '',
      descripcion: '',
      detalle: '',
    },
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
      linea2022absolutorelativo: undefined,
      linea2023absolutorelativo: undefined,
      linea2024absolutorelativo: undefined,
      linea2025absolutorelativo: undefined,
      ponderacionprioridadrelativo: undefined,
      fuenteinformacionverificacionrelativo: undefined,
    },

    formtab6programacionfisica: {
        lineabase2020: undefined,
        metaal2025: undefined,
        website: '',
        introduction: '',
      },
  });

  const options = ref([{
    value: 'jack',
    label: 'Jack',
  }, {
    value: 'lucy',
    label: 'Lucy',
  }, {
    value: 'tom',
    label: 'Tom',
  }]);

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
  
  const expandedKeys2 = ref(['0-0-0']);
  const selectedKeys2 = ref([]);
  const treeData2 = [{
    title: 'Papá 1 de Programas y Proyectos',
    key: '0-0',
    children: [{
      title: 'Hijo 1-0',
      key: '0-0-0',
      children: [{
        title: 'Dato 1',
        key: '0-0-0-0',
      }, {
        title: 'Dato 2',
        key: '0-0-0-1',
      }, {
        title: 'Dato 3',
        key: '0-0-0-2',
      }],
    }, {
      title: 'Hijo 1-1',
      key: '0-0-1',
      children: [{
        title: 'Dato 4',
        key: '0-0-1-0',
      }],
    }, {
      title: 'Hijo 1-2',
      key: '0-0-2',
      children: [{
        title: 'Dato 5',
        key: '0-0-2-0',
      }, {
        title: 'Dato 6',
        key: '0-0-2-1',
      }],
    }],
  }];

  const columns = [{
    title: 'PILAR',
    dataIndex: 'pilar',
  }, {
    title: 'EJE',
    dataIndex: 'eje',
  }, {
    title: 'META',
    dataIndex: 'meta',
  }, {
    title: 'RESULTADO',
    dataIndex: 'resultado',
  }, {
    title: 'ACCIÓN',
    dataIndex: 'accion',
  }, {
    title: 'INDICADOR ESTIMADO',
    dataIndex: 'indicadorestimado',
  }];
  
  const data = [{
    key: '0',
    pilar: '1',
    eje: '1',
    meta: '1.1',
    resultado: '1.1.1',
    accion: '1.1.1.1',
    indicadorestimado: '1.1.1.1.1',
  }, {
    key: '1',
    pilar: 'Erradicación de la extrema pobreza',
    eje: 'RECONSTRUYENDO LA ECONOMÍA, RETOMANDO LA ESTABILIDAD MACROECONÓMICA Y SOCIAL',
    meta: 'Reconstruir la Economía reinstaurando el Modelo Económico Social Comunitario Productivo con Estabilidad Macroeconómica.',
    resultado: 'SE HA CONTINUADO DE MANERA SOBERANA CON LA IMPLEMENTACIÓN DE MEDIDAS QUE PERMITEN DEVOLVER AL PAÍS LA SOSTENIBILIDAD MACROECONÓMICA Y EL CRECIMIENTO.',
    accion: 'Establecer medidas para retomar la senda de crecimiento económico.',
    indicadorestimado: 'prueba ipsum',
  }];

  const expandedKeys = ref(['0-0-0']);
  const selectedKeys = ref([]);
  const treeData = [{
    title: 'Papá 1 del PDES',
    key: '0-0',
    children: [{
      title: 'Hijo 1-0',
      key: '0-0-0',
      children: [{
        title: 'Dato 1',
        key: '0-0-0-0',
      }, {
        title: 'Dato 2',
        key: '0-0-0-1',
      }, {
        title: 'Dato 3',
        key: '0-0-0-2',
      }],
    }, {
      title: 'Hijo 1-1',
      key: '0-0-1',
      children: [{
        title: 'Dato 4',
        key: '0-0-1-0',
      }],
    }, {
      title: 'Hijo 1-2',
      key: '0-0-2',
      children: [{
        title: 'Dato 5',
        key: '0-0-2-0',
      }, {
        title: 'Dato 6',
        key: '0-0-2-1',
      }],
    }],
  }];

  const data2 = ['Racing car sprays burning fuel into crowd.', 'Japanese princess to wed commoner.', 'Australian walks 100km after outback crash.', 'Man charged over missing wedding girl.', 'Los Angeles battles huge wildfires.'];

  const layout2 = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  

  const options2 = ref([{
    value: 'gadt',
    label: 'GADT',
  }, {
    value: 'alcaldia',
    label: 'Alcaldía',
  }, {
    value: 'gobernacion',
    label: 'Gobernación',
  }]);

  const SHOW_PARENT = TreeSelect.SHOW_PARENT;

  const treeData3 = [{
    title: 'Node1',
    value: '0-0',
    children: [{
      title: 'Child Node1',
      value: '0-0-0',
    }],
  }, {
    title: 'Node2',
    value: '0-1',
    children: [{
      title: 'Child Node3',
      value: '0-1-0',
      disabled: true,
    }, {
      title: 'Child Node4',
      value: '0-1-1',
    }, {
      title: 'Child Node5',
      value: '0-1-2',
    }],
  }];

  const value2 = ref(['0-0-0']);
  watch(value2, () => {
    console.log(value.value);
  });

  const options3 = ref([{
    value: 'recuperardescripcion1',
    label: 'RECUPERAR DE DESCRIPCIÓN 1',
  }, {
    value: 'recuperardescripcion2',
    label: 'RECUPERAR DE DESCRIPCIÓN 2',
  }, {
    value: 'recuperardescripcion3',
    label: 'RECUPERAR DE DESCRIPCIÓN 3',
  }]);

  const visible = ref(false);

  const showModal = () => {
    visible.value = true;
  };

  const handleOk = e => {
    console.log(e);
    visible.value = false;
  };

  const handleCancel = e => {
    console.log(e);
    visible.value = false;
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

  const layout4 = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };

  const departamentos = [
    {
      codigo: '6',
      nombre: 'Tarija',
      regiones: [
        {
          codigo: '601',
          nombre: 'Cercado',
          municipios: [
            {
              codigo: '6011',
              nombre: 'Tarija',
              distritos: [
                {
                  codigo: '60111',
                  nombre: 'Distrito 1',
                }
              ]
            }
          ]
        },
        {
          codigo: '',
          nombre: 'Uriondo',
          municipios: []
        },
        {
          codigo: '',
          nombre: 'Arce',
          municipios: []
        },
        {
          codigo: '',
          nombre: 'Mendez',
          municipios: []
        },
        {
          codigo: '',
          nombre: 'Gran Chaco',
          municipios: []
        },
        {
          codigo: '',
          nombre: 'Occonor',
          municipios: []
        },
      ]
    },
    {
      codigo: '',
      nombre: 'La Paz',
      regiones: [
        {
          codigo: '101',
          nombre: 'Murillo',
          municipios: [
            {
              codigo: '1011',
              nombre: 'Achocalla',
              distritos: [
                {
                  codigo: '10111',
                  nombre: 'Distrito 1',
                }
              ]
            }
          ]
        },
      ]
    },
  ];
 
 
  const departamento = departamentos[0].nombre;

  const state = reactive({
    departamento,
    region: '',
    municipio: '',
    distrito: ''
  });

  const regiones = computed(() => {
    return departamentos.find(e=> e.nombre == state.departamento).regiones;
  });
  
  
  /*
  watch(() => state.departamento, nombre => {
    state.region = state.regionData[val][0];
  });
  const municipios = computed(() => {
    return municipioData[state.region];
  });
  
  

  watch(() => state.region, val => {
    state.municipio = state.municipioData[val][0];
  });
  */
  
  const stateAsRefs = toRefs(state);



</script>


<style scoped>
.ant-table-striped :deep(.table-striped) td {
  background-color: #fafafa;
}
.padding{
  padding-left: 1rem;
  padding-right: 1rem;
}

</style>
