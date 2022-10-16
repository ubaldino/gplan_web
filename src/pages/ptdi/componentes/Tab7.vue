<template>
    <a-form
  :model="formState"
  v-bind="layout4"
  name="nest-messages"
  :validate-messages="validateMessages"
  @finish="onFinish"
>
    <div align="center">
                <a-row>
                  <a-col :xs="20" :sm="16" :md="12" :lg="8" :xl="4">
                    <a-row>
                      <a-col :md="24">
                        2021
                      </a-col>
                      <a-col :md="24">
                        <a-form-item align="center" :name="['formtab6programacionfinanciera', 'programacionfinanciera2021']" :rules="[{ type: 'number', min: 0, max: 100 }]">
                          <a-input-number v-model:value="formState.formtab6programacionfinanciera.programacionfinanciera2021" />
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
                        <a-form-item align="center" :name="['formtab6programacionfinanciera', 'programacionfinanciera2022']" :rules="[{ type: 'number', min: 0, max: 100 }]">
                          <a-input-number v-model:value="formState.formtab6programacionfinanciera.programacionfinanciera2022" />
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
                        <a-form-item align="center" :name="['formtab6programacionfinanciera', 'programacionfinanciera2023']" :rules="[{ type: 'number', min: 0, max: 100 }]">
                          <a-input-number v-model:value="formState.formtab6programacionfinanciera.programacionfinanciera2023" />
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
                        <a-form-item align="center" :name="['formtab6programacionfinanciera', 'programacionfinanciera2024']" :rules="[{ type: 'number', min: 0, max: 100 }]">
                          <a-input-number v-model:value="formState.formtab6programacionfinanciera.programacionfinanciera2024" />
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
                        <a-form-item align="center" :name="['formtab6programacionfinanciera', 'programacionfinanciera2025']" :rules="[{ type: 'number', min: 0, max: 100 }]">
                          <a-input-number v-model:value="formState.formtab6programacionfinanciera.programacionfinanciera2025" />
                        </a-form-item>
                      </a-col>
                    </a-row>          
                  </a-col>
                </a-row>
              </div>
              <a-divider style="border-color: #8DB600" dashed />
              <a-form-item :name="['formtab6programacionfinanciera', 'sumatotal']" label="SUMA TOTAL" :rules="[{ type: 'number', min: 0, max: 100 }]">
                <a-input-number v-model:value="formState.formtab6programacionfinanciera.sumatotal" />
              </a-form-item>
              <a-form-item :wrapper-col="{ ...layout.wrapperCol, offset: 8 }">
                <a-button type="primary" html-type="submit">GUARDAR PROGRAMACIÓN FINANCIERA</a-button>
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


    formtab6programacionfinanciera: {
        programacionfinanciera2021: undefined,
        programacionfinanciera2022: undefined,
        programacionfinanciera2023: undefined,
        programacionfinanciera2024: undefined,
        programacionfinanciera2025: undefined,
        sumatotal: undefined,
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