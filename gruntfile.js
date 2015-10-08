module.exports = function (grunt) {
    grunt.initConfig({
        pkgFile: 'package.json',
        clean: ['build'],
        babel: {
            options: {
                optional: ['runtime'],
                sourceMap: false
            },
            commands: {
                files: [{
                    expand: true,
                    cwd: './',
                    src: ['lib/commands/*.js'],
                    dest: 'build',
                    ext: '.js'
                }]
            },
            protocol: {
                files: [{
                    expand: true,
                    cwd: './',
                    src: ['lib/protocol/*.js'],
                    dest: 'build',
                    ext: '.js'
                }]
            },
            core: {
                files: [{
                    expand: true,
                    cwd: './',
                    src: ['lib/*.js', 'lib/utils/*.js', 'lib/helpers/*.js', 'index.js'],
                    dest: 'build',
                    ext: '.js'
                }]
            }
        },
        eslint: {
            options: {
                parser: 'babel-eslint'
            },
            target: ['lib/**/*.js', '!lib/scripts/*', '!test/spec', '!test/conf']
        },
        contributors: {
            options: {
                commitMessage: 'update contributors'
            }
        },
        bump: {
            options: {
                commitMessage: 'v%VERSION%',
                pushTo: 'upstream'
            }
        },
        watch: {
            commands: {
                files: 'lib/commands/*.js',
                tasks: ['babel:commands']
            },
            protocol: {
                files: 'lib/protocol/*.js',
                tasks: ['babel:protocol']
            },
            core: {
                files: ['lib/*.js', 'lib/helpers/*.js', 'lib/utils/*.js', 'index.js'],
                tasks: ['babel:core']
            }
        }
    })

    require('load-grunt-tasks')(grunt)
    grunt.registerTask('default', ['build'])
    grunt.registerTask('build', 'Build wdio-mocha', function () {
        grunt.task.run([
            'eslint',
            'clean',
            'babel'
        ])
    })
    grunt.registerTask('release', 'Bump and tag version', function (type) {
        grunt.task.run([
            'build',
            'contributors',
            'bump:' + (type || 'patch')
        ])
    })
}
