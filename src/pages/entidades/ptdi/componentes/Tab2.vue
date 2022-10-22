<template>
    <a-row>
    <a-col :xs="1" :sm="1" :md="1" :lg="1" :xl="1"></a-col>
    <a-col :xs="22" :sm="22" :md="22" :lg="22" :xl="22">
        <H6>Selector Enfoque Político</H6>
        <a-tree
          v-model:expandedKeys="expandedKeys"
          v-model:selectedKeys="selectedKeys"
          show-line
          :tree-data="treeData"
        >
          <template #switcherIcon="{ switcherCls }"><down-outlined :class="switcherCls" /></template>
        </a-tree>
      
      <div>
        <a-divider style="border-color: #8DB600" dashed />
      </div>
      <div>
        <h6>Resultado</h6>
        <a-table :columns="columns" 
        :data-source="data" bordered>
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
    </a-col>
    <a-col :xs="1" :sm="1" :md="1" :lg="1" :xl="1"></a-col>
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

</script>