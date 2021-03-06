import Vue from 'vue';
import Vuex from 'vuex';
import uuidv4 from 'uuid/v4';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        timeList: [],
        timeListSort: {
            property: 'create_at',
            direction: 'DESC',
        },
    },
    getters: {
        timeList: state => state.timeList,
    },
    mutations: {
        loadTimeList(state) {
            let timeStorage = JSON.parse(localStorage.getItem('timeStorage'));
            console.log(timeStorage);
            if (!timeStorage) {
                timeStorage = [];
                localStorage.setItem('timeStorage', JSON.stringify(timeStorage));
                Vue.set(state, 'timeList', timeStorage);
            } else Vue.set(state, 'timeList', timeStorage);
        },
        addTimeTask(state, {
            name, start_t, end_t, description,
        }) {
            const { timeList, timeListSort: { direction, property } } = state;
            const id = uuidv4();
            const create_at = new Date();
            timeList.push({
                create_at, name, start_t, end_t, id, description,
            });

            timeList.filter((a, b) => {
                let compare = 0;
                if (a[property] < b[property]) compare = 1;
                if (a[property] > b[property]) compare = -1;
                if (direction === 'DESC') compare *= -1;
                return compare;
            });

            Vue.set(state, 'timeList', timeList);
            localStorage.setItem('timeStorage', JSON.stringify(timeList));
        },
        removeTimeTask(state, _id) {
            const { timeList } = state;
            const itemIndex = timeList.findIndex(({ id }) => id === _id);
            timeList.splice(itemIndex, 1);
            Vue.set(state, 'timeList', timeList);
            localStorage.setItem('timeStorage', JSON.stringify(timeList));
        },
    },
    actions: {
        loadTimeList({ commit }) {
            commit('loadTimeList');
        },
        removeTimeTask({ commit }, id) {
            commit('removeTimeTask', id);
        },
    },
});
