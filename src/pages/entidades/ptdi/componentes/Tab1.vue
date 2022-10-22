<template>
  <a-row>
    <a-col :xs="3" :sm="3" :md="3" :lg="3" :xl="3"></a-col>
    <a-col :xs="18" :sm="18" :md="18" :lg="18" :xl="18">
      <h6>Sector de Planificación y Lineamiento Estratégico</h6 >
      <a-form
        :model="formState"
        v-bind="layout"
        name="nest-messages"
        :validate-messages="validateMessages"
        @finish="onFinish"
      >
        <a-form-item 
          name="nombre_sector_ptdi" 
          label="SECTOR DE PLANIFICACIÓN" 
        >
          <a-select
            v-model:value="formState.nombre_sector"
            show-search
            placeholder="Elija un Sector"
            style="width: sm"
            :options="options"
            :filter-option="filterOption"
            @focus="handleFocus"
            @blur="handleBlur"
            @change="handleChange"
          ></a-select>
        </a-form-item>
        <a-form-item name="lineamiento_estrategico_ptdi" label="LINEAMIENTO ESTRATÉGICO DE TERRITORIO" >
          <a-textarea style="width: sm" v-model:value="formState.lineamiento_estrategico_ptdi" placeholder="Escriba el Lineamiento Estratégico de Desarrollo"/>
        </a-form-item>
        <a-form-item name="objetivo_estrategico_ptdi" label="OBJETIVO ESTRATÉGICO" >
          <a-textarea style="width: sm" v-model:value="formState.objetivo_estrategico_ptdi" placeholder="Escriba el Objetivo Estratégico"/>
        </a-form-item>
        <a-form-item :wrapper-col="{ ...layout.wrapperCol, offset: 8 }">
          <a-button type="primary" html-type="submit">GUARDAR SECTOR</a-button>
        </a-form-item>
      </a-form>
    </a-col>
    <a-col :xs="3" :sm="3" :md="3" :lg="3" :xl="3"></a-col>
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
    nombre_sector: null,
    lineamiento_estrategico_ptdi: '',
    objetivo_estrategico_ptdi: '',
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
  

</script>