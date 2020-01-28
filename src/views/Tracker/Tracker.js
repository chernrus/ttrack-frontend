const TimeControll = () => import('./TimeControll/TimeControll.vue');
const TimeList = () => import('./TimeList/TimeList.vue');

export default {
    name: 'Tracker',
    components: {
        TimeControll,
        TimeList
    }
}
