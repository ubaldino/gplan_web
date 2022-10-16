<template>
    <div align="center">

<a-form
  :model="formState"
  v-bind="layout4"
  name="nest-messages"
  :validate-messages="validateMessages"
  @finish="onFinish"
>
<a-form-item>
  
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
    
    <a-select
      v-model:value="state.municipio"
      style="width: 120px"
      
    ></a-select>

    <a-select
      v-model:value="state.distrito"
      style="width: 120px"
      
    ></a-select>

  </a-space>
</a-form-item>
  <a-form-item :wrapper-col="{ ...layout.wrapperCol, offset: 8 }">
    <a-button type="primary" html-type="submit">GUARDAR TERRITORIALIZACIÓN</a-button>
  </a-form-item>
  
</a-form>
</div>
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
  
  watch(() => state.departamento, nombre => {
    state.region = state.region;
  });
  
  const municipios = computed(() => {
    return state.region;
  });
  
  

  watch(() => state.region, nombre => {
    state.municipio = state.municipio;
  });

  
  const stateAsRefs = toRefs(state);

</script>