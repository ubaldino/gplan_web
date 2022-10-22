<template>
  <a-row>
    <a-col :xs="1" :sm="1" :md="1" :lg="1" :xl="1"></a-col>
    <a-col :xs="22" :sm="22" :md="22" :lg="22" :xl="22">
      <h6>GENERANDO LA MATRIZ PTDI / RESULTADOS</h6>
      <a-tabs
        v-model:activeKey="activeKey"
        type="card"
        class="padding"
        tab-position="top"
        size="small"
      >
        <a-tab-pane key="1" tab="1. SECTOR DE PLANIFICACIÓN Y LINEAMIENTO ESTRATÉGICO">
          <Tab1 />
        </a-tab-pane>
        <a-tab-pane key="2" tab="2. SELECTOR ENFOQUE POLÍTICO">
          <Tab2 />
        </a-tab-pane>
        <a-tab-pane key="3" tab="3. SELECCIÓN DE PROGRAMAS Y PROYECTOS">
          <Tab3 />
        </a-tab-pane>
        <a-tab-pane key="4" tab="4. FORMULACIÓN DE RESULTADO">
          <Tab4 />
        </a-tab-pane>
        <a-tab-pane key="5" tab="5. INDICADOR Y PROGRAMACIÓN FÍSICA RESULTADO">
          <Tab5 />
        </a-tab-pane>
        <a-tab-pane key="6" tab="6. TERRITORIALIZACIÓN">
          <Tab6 />
        </a-tab-pane>
        <a-tab-pane key="7" tab="7. PRESUPUESTO QUINQUENAL`">
          <Tab7 />
        </a-tab-pane>
      </a-tabs>
    </a-col>
    <a-col :xs="1" :sm="1" :md="1" :lg="1" :xl="1"></a-col>
  </a-row>
</template>

<script setup>
import { DownOutlined } from "@ant-design/icons-vue";
import { TreeSelect } from "ant-design-vue";
import { defineComponent, ref, reactive, toRefs, computed, watch } from "vue";

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
.padding {
  padding-left: 1rem;
  padding-right: 1rem;
}
</style>
