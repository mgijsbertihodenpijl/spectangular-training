require.config({
    baseUrl : '/',
    //paths
    paths : {
        //angular
        'angular'                       : 'vendor/angular/angular',
        'angular-animate'               : 'vendor/angular-animate/angular-animate',
        'angular-ui-router'             : 'vendor/angular-ui-router/release/angular-ui-router',
        'angular-resource'              : 'vendor/angular-resource/angular-resource',
        //components
        'component'                     : 'vendor/angular-require/src/component',
        //connect
        'connect-material'              : 'vendor/connect-material/dist/amd',
        //directive
        'directive'                     : 'vendor/angular-require/src/directive',
        //gids-resource
        'gids-resource'                 : 'vendor/gids-resources/src/gids-resource',
        //service 
        'service'                       : 'vendor/angular-require/src/service',
        'underscore'                    : 'vendor/underscore/underscore',
        'ui-router-loader'              : 'vendor/angular-require/src/ui-router-loader',
        'vp-utils'                      : 'vendor/vp-utils/src',
        'vp-pubsub'                     : 'vendor/vp-pubsub/vp-pubsub',
        'q'                             : 'vendor/q/q',
        'moment'                        : 'vendor/moment/moment'
    },
    //shims 
    shim : {
        //angular
        'angular'                       : {
            exports: 'angular'
        },
        'angular-animate'               : ['angular'],
        'angular-ui-router'             : ['angular'],
        //connect material
        'connect-material'              : ['angular'],
        'underscore'                    : {
            exports: '_'
        }
    },
    config: {
        component: {},
        'ui-router-loader': {
            appMatch: 'training',
            appPath: 'src/',
            appTmpPath: 'src/:app:.html'
        },
        'service': {
            appMatch: 'training'
        }
    }
});