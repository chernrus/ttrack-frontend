import TheSideMenu from "../TheSideMenu/TheSideMenu.vue";

export default {
    name: 'AppLayout',
    components: {
        TheSideMenu
    },
    props: {
        title: {
            type: String,
            default: '',
        },
    },
    data() {
        return {
            model: '1'
        }
    },
    created() {
        console.log(this);
    },
    computed: {
        pageTitle() {
            return this.$route.meta.title || this.title;
        }
    }
}
