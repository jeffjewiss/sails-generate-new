/**
 * .sailsrc
 *
 * @param  {[type]} scope [description]
 * @return {[type]}       [description]
 */
module.exports = function(scope) {

	return {
		generators: {

			// Default values of scope variables
			scope: {
				engine: 'ejs',
				linker: true,
				adapter: 'sails-disk'
			},

			// The module to use for each known type of generator
			modules: {
				new: 'sails-generate-new',
				backend: 'sails-generate-backend',
				frontend: 'sails-generate-frontend',
				gruntfile: 'sails-generate-gruntfile',
				model: 'sails-generate-model',
				controller: 'sails-generate-controller',
				api: 'sails-generate-api',
				policy: 'sails-generate-policy',
				service: 'sails-generate-service',
				apiresponse: 'sails-generate-apiresponse',
				blueprints: 'sails-generate-blueprints',
				view: 'sails-generate-view',
				adapter: 'sails-generate-adapter',
				generator: 'sails-generate-generator',
				hook: 'sails-generate-hook'
			}
		}
	};
};