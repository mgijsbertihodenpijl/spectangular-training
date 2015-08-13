define({
    'overview': {
        url: '/',
        views: {
            'training': {
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
            'training-form@overview.add': {
                component: 'training-form'
            }
        }
    }
});