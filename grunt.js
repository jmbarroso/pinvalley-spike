/*global module:false*/
module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        meta:{
            version:'0.1.0',
            banner:'/*! PROJECT_NAME - v<%= meta.version %> - ' +
                '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
                '* http://PROJECT_WEBSITE/\n' +
                '* Copyright (c) <%= grunt.template.today("yyyy") %> ' +
                'YOUR_NAME; Licensed MIT */'
        },
        lint:{
            files:['grunt.js', 'lib/**/*.js', 'test/**/*.js']
        },
        concat:{
            client:{
                src:['client/src/**/*.js'],
                dest:'client/dist/program.js'
            }
        },
        min:{
            dist:{
                src:['client/dist/*.js'],
                dest:'client/dist/program-min.js'
            }
        },
        watch:{
            files:'<config:lint.files>',
            tasks:'lint qunit'
        },
        jshint:{
            options:{
                curly:true,
                eqeqeq:true,
                immed:true,
                latedef:true,
                newcap:true,
                noarg:true,
                sub:true,
                undef:true,
                boss:true,
                eqnull:true,
                browser:true
            },
            globals:{}
        },
        uglify:{}
    });

    // Default task.
    grunt.registerTask('default', 'concat min');

};
