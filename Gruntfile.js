module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      },
      my_target: {
		files: {
			'_/js/script.js': ['_/components/js/*.js']
		} //files
	  } //my_target
    },
    compass: {
    	dev: {
    		options: {
    			config: 'config.rb'
    		} //options
    	} //dev
    },
    watch: {
    	options: { livereload: true },
    	scripts: {
    		files: ['_/components/js/*.js'],
    		tasks: ['uglify']
    	}, // scripts
    	sass: {
    		files: ['_/components/sass/*.scss'],
    		tasks: ['compass:dev']
    	},
    	html: {
    		files: ['*.html']
    	}
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);
  grunt.registerTask('default', ['watch']);

};