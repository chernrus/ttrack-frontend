export default {
    name: 'TimeControll',
    data() {
        return {
            formModel: {
                name: '',
                start_t: '',
                end_t: '',
            },
        }
    },
    methods: {
        addTime() {
            console.log(JSON.parse(JSON.stringify(this.formModel)));
        }
    }
}
