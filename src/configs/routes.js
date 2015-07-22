define({
    'overview': {
        url: '/',
        views: {
            'ipl': {
                component: 'overview'
            }
        }
    },
    'overview.add': {
        url: 'add',
        views: {
            'drawer': {
                component: 'add'
            },
            'ipl-form@overview.add': {
                component: 'ipl-form'
            }
        }
    }
});