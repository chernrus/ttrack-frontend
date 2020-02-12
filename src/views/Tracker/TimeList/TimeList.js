import { mapGetters } from 'vuex';


export default {
    name: 'TimeList',
    data() {
        return {};
    },
    computed: {
        ...mapGetters({
            timeList: 'timeList',
        }),
    },
    created() {

    },

};
