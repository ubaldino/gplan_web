import { createApp } from 'vue'
import { createPinia } from 'pinia'
// import { DefaultApolloClient } from "@vue/apollo-composable";

// import apolloClient from "./apolloClient";

import router from "./routes/indexRouter";

import './custom-antd.less';

import './style.css'
import App from './App.vue'


import defaultLayout from "./layouts/default.vue";

const pinia = createPinia()
const app = createApp(App)
// app.provide(DefaultApolloClient, apolloClient)
app.use(pinia)
app.use(router)
app.component("default", defaultLayout)
app.mount('#app')
