import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.prototype.$api=axios.create({
  baseURL: 'https://allweb.fun/coop/api/',
  params:{
    text:'true'  
  },
    headers: {'Authorization': "264647fbb4b0f89dcc05c1d60194769db5d050a4"}
});
Vue.component('Header', ()=>import('@/components/Header.vue'));
import {Outils} from "./mixins/Outils.js";
Vue.mixin(Outils);
Vue.prototype.$api.interceptors.request.use(function (config) {


  if (store.state.token){
    config.params.token = store.state.token;
  }
  
  return config;
});
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
