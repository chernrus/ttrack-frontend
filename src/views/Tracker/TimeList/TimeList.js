import { mapGetters } from 'vuex';
import moment from 'moment';


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
