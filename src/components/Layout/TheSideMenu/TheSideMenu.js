export default {
    name: 'SideMenu',
    data() {
        return {
            appTitle: 'Time tracker',
            sideMenu: [
                {
                    url: '/tracker',
                    title: 'Tracker'
                },
                {
                    url: '/pomodoro',
                    title: 'Pomodoro'
                },
                {
                    url: '/desk',
                    title: 'Desk'
                },
                {
                    url: '/calendar',
                    title: 'Calendar',
                },
            ],
        }
    }
}
