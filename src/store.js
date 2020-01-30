import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        timeList: [{
            create_at: '',
            name: '',
            start: '',
            end: '',
            id: '',
            description: '',
        }],
        timeListSort: {
            property: 'create_at',
            direction: 'DESC',
        },
    },
    getters: {
        timeList: state => state.timeList,
    },
    mutations: {
        addTimeTask(state, task) {
            const { timeList, timeListSort: { direction, property } } = state;
            timeList.push(task);
            timeList.filter((a, b) => {
                let compare = 0;
                if (a[property] < b[property]) compare = 1;
                if (a[property] > b[property]) compare = -1;
                if (direction === 'DESC') compare *= -1;
                return compare;
            });
            Vue.set(state, 'timeList', timeList);
        },
    },
    actions: {

    },
});
