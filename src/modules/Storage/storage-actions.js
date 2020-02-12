export default {
    async init() {
        if (!localStorage.getItem('timeStorage')) {
            localStorage.setItem('timeStorage', { timeList: [] });
        }
    },

    async update(_list) {
        if (!localStorage.getItem('timeStorage')) {
            this.init();
        }
        localStorage.setItem('timeStorage', { timeList: _list });
    },
};
