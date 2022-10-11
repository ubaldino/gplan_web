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
            style="width: 200px"
            :options="options"
            :filter-option="filterOption"
            @focus="handleFocus"
            @blur="handleBlur"
            @change="handleChange"
          ></a-select>
        </a-form-item>
        <a-form-item :name="['formtab1ptdi', 'lineamientoestrategicoptdi']" label="LINEAMIENTO ESTRATÉGICO DE TERRITORIO" >
          <a-textarea v-model:value="formState.formtab1ptdi.lineamientoestrategicoptdi" />
        </a-form-item>
        <a-form-item :name="['formtab1ptdi', 'objetivoestrategicoptdi']" label="OBJETIVO ESTRATÉGICO" >
          <a-textarea v-model:value="formState.formtab1ptdi.objetivoestrategicoptdi" />
        </a-form-item>
        <a-form-item :wrapper-col="{ ...layout.wrapperCol, offset: 8 }">
          <a-button type="primary" html-type="submit">GUARDAR SECTOR</a-button>
        </a-form-item>
      </a-form>
    </a-tab-pane>
    <a-tab-pane key="2" tab="2. SELECTOR PDES">
      <div>
        <H6>Seleccionar PDES</H6>
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
    <a-tab-pane key="4" tab="4. REGISTRO RESULTADO">Content of Tab Pane 3</a-tab-pane>
    <a-tab-pane key="5" tab="5. INDICADOR RESULTADO">Content of Tab Pane 3</a-tab-pane>
    <a-tab-pane key="6" tab="6. PROGRAMACIÓN FÍSICA">Content of Tab Pane 3</a-tab-pane>
    <a-tab-pane key="7" tab="7. TERRITORIALIZACIÓN">Content of Tab Pane 3</a-tab-pane>
    <a-tab-pane key="8" tab="8. PROGRAMACIÓN FINANCIERA">Content of Tab Pane 3</a-tab-pane>
  </a-tabs>
</template>

<script setup>
  import { DownOutlined } from '@ant-design/icons-vue';
  import { defineComponent, ref, reactive } from 'vue';
  
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
        title: 'Papá 1',
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
        title: 'Papá 1',
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
