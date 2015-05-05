module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		clean: ['<%= pkg.variable.build_root %>'],
		uglify: {
			options: {
				mangle : true
			},
			dev : {
				options: {
					sourceMap : true,
					sourceMapIncludeSources : true,
					compress: {
						global_defs: {
							"DEBUG": true
						},
						drop_console: false
					}
				},
				files: [{
					expand: true,
					src:  '*.js',
					dest: '<%= pkg.variable.build_js %>',
					cwd:  '<%= pkg.variable.src_js %>',
					ext: '.min.js',
					extDot: 'first'
				}]
			},
			prod : {
				options: {
					sourceMap : false,
					sourceMapIncludeSources : false,
					compress: {
						global_defs: {
							"DEBUG": false
						},
						drop_console: true
					}
				},
				files: [{
					expand: true,
					src:  '*.js',
					dest: '<%= pkg.variable.build_js %>',
					cwd:  '<%= pkg.variable.src_js %>',
					ext: '.min.js',
					extDot: 'first'
				}]
			}
		}
	});

	// Load the plugin that provides tasks.
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	// Default task(s).
	grunt.registerTask('build_dev', ['clean','uglify:dev']);
	grunt.registerTask('build_prod', ['clean','uglify:prod']);

};