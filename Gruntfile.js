/* jshint node: true */
module.exports = function (grunt) {
    'use strict';
    var config = {};
    /**
     * jshint
     * @type {Object}
     */
    config.jshint = {
        options: {
            force: true,
            jshintrc: '.jshintrc'
        },
        local: {
            src: ['src/**/*.js']
        }
    };
    /**
     * nodemon
     * @type {Object}
     */
    config.nodemon = {
        dev: {
            script: 'bin/dev.js',
            options: {
                watch: [
                        'bin',
                        'spec/stub'
                    ],
                ext: '.js,.yml'

            }
        }
    };
    /**
     * autoprefixer
     * @type {Object}
     */
    config.autoprefixer = {
        options: {
            browsers: ['> 5% in NL', 'ie >= 10'],
            map: {
                prev: 'build/',
                inline: false,
                sourcesContent: true
            }
        },
        dev: {
            src: 'build/ipl.css'
        }
    };
    //all less config
    config.less = {
        dev: {
            options: {
                paths: ['./vendor/'],
                sourceMap:  true,
                sourceMapFilename: 'build/ipl.css.map',
                sourceMapURL: '/build/ipl.css.map',
                outputSourceFiles: true,
                ieCompat: false
            },
            files: {
                'build/ipl.css': 'src/ipl.less'
            }
        }
    };
    //watch
    config.watch = {
        options: {
            livereload: true,
            interval: 5007
        },
        configFiles: {
            files: [ 'Gruntfile.js'],
            options: {
                reload: true
            }
        },
        templates: {
            files: ['src/**/*.html']
        },
        less: {
            files: [
                'src/**/*.less'
            ],
            tasks: ['build-css']
        },
        js: {
            files: [
                'src/*.js', '!build/*'
            ],
            tasks: ['jshint:local'],
            options: {
                spawn: false,
            }
        }
    };
    //on watch events configure jshint:local to only run on changed file
    grunt.event.on('watch', function(action, filepath) {
        grunt.config('jshint.local.src', filepath);
    });
    //bower install
    config['bower-install-simple'] = {
        options: {
            color: true
        },
        dev: {
            options: {
                production: false
            }
        }
    };
    config.concurrent = {
        dev: {
            tasks: ['nodemon', 'watch'],
            options: {
                logConcurrentOutput: true
            }
        }
    };


    //set config;
    grunt.initConfig(config);
    //load tasks
    grunt.file.expand('node_modules/grunt-*/tasks').forEach(grunt.loadTasks);
    grunt.registerTask('build-css', ['less:dev', 'autoprefixer:dev']);
    //build with bower
    grunt.registerTask('build', ['bower-install-simple', 'build-css']);
	//start
	grunt.registerTask('start', ['concurrent']);
};