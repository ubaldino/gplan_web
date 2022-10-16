<template>
    
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
    formtab1ptdi: {
      nombresector: '',
      lineamientoestrategicoptdi: '',
      objetivoestrategicoptdi: '',
    }
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