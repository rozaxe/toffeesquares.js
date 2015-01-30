module.exports = function (grunt) {
	grunt.loadNpmTasks('grunt-typescript')
	grunt.loadNpmTasks('grunt-contrib-watch')
	grunt.loadNpmTasks('grunt-contrib-connect')

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		connect: {
			server: {
				options: {
					port: 8080,
					base: './'
				}
			}
		},
		typescript: {
			base: {
				src: ['lib/**/*.ts'],
				dest: 'out/app.js',
				options: {
					sourceMap: true,
					references: [
						"bower_components/phaser/typescript/pixi.d.ts",
						"bower_components/phaser/typescript/phaser.d.ts"
					]
				}
			}
		},
		watch: {
			files: '**/*.ts',
			tasks: ['typescript'],
			options: {
				livereload: true
			}
		}
	})

	grunt.registerTask('default', ['connect', 'typescript', 'watch'])

}
