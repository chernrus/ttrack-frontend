
export default {
    name: 'TimeControll',
    data() {
        return {
            formModel: {
                name: '',
                start_t: '',
                end_t: '',
                description: '',
            },
        };
    },
    created() {
        window.TC = this;
    },
    methods: {
        addTime() {
            this.$store.commit('addTimeTask', this.formModel);
            console.log(this);
            console.log(JSON.parse(JSON.stringify(this.formModel)));
        },
    },
};
