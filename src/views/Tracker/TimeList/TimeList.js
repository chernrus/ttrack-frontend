import { mapGetters, mapActions } from 'vuex';
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
    methods: {
        ...mapActions([
            'removeTimeTask',
        ]),
        remove({ id }) {
            console.log(id);
            this.removeTimeTask(id);
        },
        totalTime({ start_t, end_t }) {
            console.log({ start_t, end_t });
            const start = moment(start_t);
            const end = moment(end_t);
            // return start.from(end);
            // console.log(start, end);
            // console.log(start, end);
            console.log(end.diff(start));
            const duration = moment.duration(end.diff(start));

            const time = moment({ hour: duration.hours(), minute: duration.minutes(), seconds: duration.seconds() }).format('HH:mm:ss');
            return time;
            // return end.diff(start);this.
        },
        copyToClipboard({ start_t, end_t }) {
            try {
                const str = this.totalTime({ start_t, end_t });
                const el = document.createElement('textarea');
                el.value = str;
                el.setAttribute('readonly', '');
                el.style.position = 'absolute';
                el.style.left = '-9999px';
                document.body.appendChild(el);
                el.select();
                document.execCommand('copy');
                document.body.removeChild(el);
                this.$message('Time copy to clipboard');
            } catch (e) { console.error(e); }
        },
    },
};
