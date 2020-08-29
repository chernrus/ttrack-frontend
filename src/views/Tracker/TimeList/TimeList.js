import { mapGetters, mapActions } from 'vuex';


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
    methods: {
        ...mapActions([
            'removeTimeTask',
        ]),
        remove({ id }) {
            console.log(id);
            this.removeTimeTask(id);
        },
    },
};
