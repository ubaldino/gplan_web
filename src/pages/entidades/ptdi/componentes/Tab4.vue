<template>
  <a-row>
    <a-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6"></a-col>
      <a-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
      <H6>Formulación de Resultado</H6>
      <a-form
        :model="formState"
        v-bind="layout"
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
            v-model:value="formState.formtab4datoresultado.areasorganizacionales"
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
          <div align=left>
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
    </a-col>
    <a-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6"></a-col>
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

    formtab4datoresultado: {
      entidad: '',
      areasorganizacionales: [],
      codigoresultado: '',
      descripcion: '',
      detalle: '',
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
  watch(value, () => {
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




</script>