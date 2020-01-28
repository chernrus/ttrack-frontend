import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
import ElementUI from 'element-ui';
// import locale from 'element-ui/lib/locale/lang/ru-RU';
import locale from 'element-ui/lib/locale/lang/en';

Vue.use(ElementUI, {
    locale,
});

import './assets/styles/index.scss';
import './styles.scss';

Vue.config.productionTip = false

new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app')
