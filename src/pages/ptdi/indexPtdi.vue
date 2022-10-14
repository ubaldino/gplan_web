<template>
  <div>GENERACIÓN DE MATRIZ PTDI/RESULTADO</div>
  <a-tabs v-model:activeKey="activeKey" type="card" class="padding">



    <a-tab-pane key="1" tab="1. DATOS GENERALES DEL SECTOR DE PLANIFICACIÓN">
      <a-form
        :model="formState"
        v-bind="layout"
        name="nest-messages"
        :validate-messages="validateMessages"
        @finish="onFinish"
      >
        <a-form-item :name="['formtab1ptdi', 'nombresectorptdi']" label="SECTOR DE PLANIFICACIÓN" >
          <a-select
            v-model:value="formState.formtab1ptdi.nombresector"
            show-search
            placeholder="Seleccionar Sector"
            style="width: sm"
            :options="options"
            :filter-option="filterOption"
            @focus="handleFocus"
            @blur="handleBlur"
            @change="handleChange"
          ></a-select>
        </a-form-item>
        <a-form-item :name="['formtab1ptdi', 'lineamientoestrategicoptdi']" label="LINEAMIENTO ESTRATÉGICO DE TERRITORIO" >
          <a-textarea style="width: sm" v-model:value="formState.formtab1ptdi.lineamientoestrategicoptdi" />
        </a-form-item>
        <a-form-item :name="['formtab1ptdi', 'objetivoestrategicoptdi']" label="OBJETIVO ESTRATÉGICO" >
          <a-textarea style="width: sm" v-model:value="formState.formtab1ptdi.objetivoestrategicoptdi" />
        </a-form-item>
        <a-form-item :wrapper-col="{ ...layout.wrapperCol, offset: 8 }">
          <a-button type="primary" html-type="submit">GUARDAR SECTOR</a-button>
        </a-form-item>
      </a-form>
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
            <a-form-item align="center" :name="['formtab5datosindicadorresultado', 'encendidoindicardor']" label="INDICADOR ABSOLUTO (ENCENDIDO) / INDICADOR RELATIVO (APAGADO)">
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
              <a-form-item :name="['formtab5datosindicadorresultado', 'indicadorresultadoabsoluto']" label="INDICADOR RESULTADO RELATIVO">
                <a-textarea v-model:value="formState.formtab5datosindicadorresultado.indicadorresultadorelativo" />
              </a-form-item>
              <a-form-item :name="['formtab5datosindicadorresultado', 'formularelativo']" label="FÓRMULA INDICADOR RELATIVO">
                <a-input v-model:value="formState.formtab5datosindicadorresultado.formularelativo" />
              </a-form-item>
              <a-form-item :name="['formtab5datosindicadorresultado', 'encendidodenominador']" label="DENOMINADOR VARIABLE (ENCENDIDO) / DENOMINADOR FIJO (APAGADO)">
                <a-radio-group v-model:value="value3" name="radioGroup">
                  <a-radio value="1">Denominador Variable</a-radio>
                  <a-radio value="2">Denominador Fijo</a-radio>
                </a-radio-group>
              </a-form-item>
            </div>
          </a-col>
        </a-row>

        <a-form-item :wrapper-col="{ ...layout.wrapperCol, offset: 8 }">
          <a-button type="primary" html-type="submit">GUARDAR INDICADOR RESULTADO</a-button>
        </a-form-item>
      </a-form>

    </a-tab-pane>



    <a-tab-pane key="6" tab="6. PROGRAMACIÓN FÍSICA">



      <a-form
        :model="formState"
        v-bind="layout4"
        name="nest-messages"
        :validate-messages="validateMessages"
        @finish="onFinish"
      >
      <a-form-item :name="['formtab6programacionfisica', 'lineabase2020']" label="LINEA BASE 2020" :rules="[{ type: 'number', min: 0, max: 100 }]">
        <a-input-number v-model:value="formState.formtab6programacionfisica.lineabase2020" />
      </a-form-item>
      <a-form-item :name="['formtab6programacionfisica', 'meta2025']" label="META AL 2025" :rules="[{ type: 'number', min: 0, max: 100 }]">
        <a-input-number v-model:value="formState.formtab6programacionfisica.meta2025" />
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
                <a-form-item align="center" :name="['formtab6programacionfisica', 'linea2021']" :rules="[{ type: 'number', min: 0, max: 100 }]">
                  <a-input-number v-model:value="formState.formtab6programacionfisica.linea2021" />
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
                <a-form-item align="center" :name="['formtab6programacionfisica', 'linea2022']" :rules="[{ type: 'number', min: 0, max: 100 }]">
                  <a-input-number v-model:value="formState.formtab6programacionfisica.linea2022" />
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
                <a-form-item align="center" :name="['formtab6programacionfisica', 'linea2023']" :rules="[{ type: 'number', min: 0, max: 100 }]">
                  <a-input-number v-model:value="formState.formtab6programacionfisica.linea2023" />
                </a-form-item>
              </a-col>
            </a-row>          
          </a-col>
          <a-col :xs="20" :sm="16" :md="12" :lg="8" :xl="4">
            <a-row>
              <a-col :md="24">
                2024
              </a-col>
              <a-col :md="24">
                <a-form-item align="center" :name="['formtab6programacionfisica', 'linea2024']" :rules="[{ type: 'number', min: 0, max: 100 }]">
                  <a-input-number v-model:value="formState.formtab6programacionfisica.linea2024" />
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
                <a-form-item align="center" :name="['formtab6programacionfisica', 'linea2025']" :rules="[{ type: 'number', min: 0, max: 100 }]">
                  <a-input-number v-model:value="formState.formtab6programacionfisica.linea2025" />
                </a-form-item>
              </a-col>
            </a-row>          
          </a-col>
        </a-row>
      </div>
      <a-divider style="border-color: #8DB600" dashed />
      <a-form-item :name="['formtab6programacionfisica', 'ponderacionprioridad']" label="PONDERACIÓN PRIORIDAD" :rules="[{ type: 'number', min: 0, max: 100 }]">
        <a-input-number v-model:value="formState.formtab6programacionfisica.ponderacionprioridad" />
      </a-form-item>
      <a-form-item :name="['formtab6programacionfisica', 'fuenteinformacionverificacion']" label="FUENTE DE INFORMACIÓN O VERIFICACIÓN" :rules="[{ type: 'number', min: 0, max: 100 }]">
        <a-input-number v-model:value="formState.formtab6programacionfisica.metaal2025" />
      </a-form-item>   
        <a-form-item :wrapper-col="{ ...layout.wrapperCol, offset: 8 }">
          <a-button type="primary" html-type="submit">GUARDAR PROGRAMACIÓN FÍSICA</a-button>
        </a-form-item>
      </a-form>
    </a-tab-pane>



    <a-tab-pane key="7" tab="7. TERRITORIALIZACIÓN">Content of Tab Pane 3</a-tab-pane>



    <a-tab-pane key="8" tab="8. PROGRAMACIÓN FINANCIERA">Content of Tab Pane 3</a-tab-pane>
  </a-tabs>
</template>

<script setup>
  import { DownOutlined} from '@ant-design/icons-vue';
  import { TreeSelect } from 'ant-design-vue';
  import { defineComponent, ref, reactive, watch } from 'vue';
  
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
      tipoindicadorrelativo: '',
      indicadorresultadorelativo: '',
      formularelativo: '',
    },
    formtab6programacionfisica: {
        lineabase2020: undefined,
        metaal2025: undefined,
        metaal2025: undefined,
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
