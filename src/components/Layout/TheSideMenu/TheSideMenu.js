export default {
    name: 'SideMenu',
    data() {
        return {
            appTitle: 'Time tracker',
            sideMenu: [
                {
                    url: '/tracker',
                    title: 'Tracker',
                },
                {
                    url: '/pomodoro',
                    title: 'Pomodoro',
                    disabled: true,
                },
                {
                    url: '/desk',
                    title: 'Desk',
                    disabled: true,
                },
                {
                    url: '/calendar',
                    title: 'Calendar',
                    disabled: true,
                },
            ],
        };
    },
};
