import SideMenu from "../SideMenu/SideMenu.vue";

export default {
    name: 'AppLayout',
    components: {
        SideMenu
    },
    data() {
        return {
            model: '1'
        }
    },
    created() {
        console.log(this);
        console.log(SideMenu);
    }
}
