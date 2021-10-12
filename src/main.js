import Vue from 'vue';
import App from './App.vue';

import popup from '@/components/UsernamePopup/index';
Vue.prototype.$popup = popup;

new Vue({ render: h => h(App) }).$mount('#app');
