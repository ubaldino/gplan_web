<template>
  <div>GENERACIÓN DE MATRIZ PTDI/RESULTADO</div>
  <a-tabs v-model:activeKey="activeKey" type="card" class="padding">
    <a-tab-pane key="1" tab="1. DATOS GENERALES DEL SECTOR DE PLANIFICACIÓN">
      <Tab1/>
    </a-tab-pane>
    <a-tab-pane key="2" tab="2. SELECTOR PDES">
      <Tab2/>
    </a-tab-pane>
    <a-tab-pane key="3" tab="3. SELECCIÓN DE PROGRAMAS Y PROYECTOS">
      <Tab3/>
    </a-tab-pane>
    <a-tab-pane key="4" tab="4. REGISTRO RESULTADO">
      <Tab4/>
    </a-tab-pane>
    <a-tab-pane key="5" tab="5. INDICADOR RESULTADO">
      <Tab5/>
    </a-tab-pane>
    <a-tab-pane key="6" tab="6. TERRITORIALIZACIÓN">

      <Tab6/>
    </a-tab-pane>



    <a-tab-pane key="7" tab="7. PROGRAMACIÓN FINANCIERA">
      <Tab7/>




    </a-tab-pane>

  </a-tabs>
</template>

<script setup>
  import { DownOutlined} from '@ant-design/icons-vue';
  import { TreeSelect } from 'ant-design-vue';
  import { defineComponent, ref, reactive, toRefs, computed, watch } from 'vue';

  import Tab1 from "./componentes/Tab1.vue";
  import Tab2 from "./componentes/Tab2.vue";
  import Tab3 from "./componentes/Tab3.vue";
  import Tab4 from "./componentes/Tab4.vue";
  import Tab5 from "./componentes/Tab5.vue";
  import Tab6 from "./componentes/Tab6.vue";
  import Tab7 from "./componentes/Tab7.vue";
  
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
