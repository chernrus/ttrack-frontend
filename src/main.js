import Vue from 'vue';
import ElementUI from 'element-ui';
// import uuidv4 from 'uuid/v4';
import locale from 'element-ui/lib/locale/lang/en';
import App from './App.vue';
import store from './store';
import router from './router';
import timeFilter from './filters/time';
// import locale from 'element-ui/lib/locale/lang/ru-RU';

import './assets/styles/index.scss';
import './styles.scss';

Vue.use(ElementUI, {
    locale,
});
Vue.use(ElementUI, {
    locale,
});

Vue.filter('time', timeFilter);

Vue.config.productionTip = false;
// Vue.prototype.$uuidv4 = uuidv4;
new Vue({
    store,
    router,
    render: h => h(App),
}).$mount('#app');

store.dispatch('loadTimeList');
