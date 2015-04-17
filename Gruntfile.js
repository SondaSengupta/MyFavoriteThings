module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      options: {
        compress: false,
        sourcemap: 'none'
      },
      dist: {
        files: {
          'app/main.css': 'app/sass/main.scss'
        }
      }
    },

    watch: {
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: ['app/*.html','app/sass/*.scss','app/js/*.js']
      },
      sass: {
        files: ['app/sass','app/sass/*.scss'],
        tasks: ['sass']
      }
    },

    connect: {
      options: {
        port: 8000,
        livereload: 35729,
        hostname: 'localhost'
      },
      livereload: {
        options: {
          open: true,
          base: 'app/'
        }
      }
    },
  });

  grunt.registerTask('serve', ['connect:livereload','sass','watch']);
};
