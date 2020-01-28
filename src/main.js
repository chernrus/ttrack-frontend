import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
import ElementUI from 'element-ui';
import './styles.scss';
import './assets/styles/index.scss';

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app')
