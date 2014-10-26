'use strict';

var configDefault = require('./config/eTag'),
	_ = require('lodash'),
	name = 'eTag';

module.exports = {
	enable: true,

	name: name,

	afterServer: function (elefrant, server, restify) {
		var config = configDefault;
		if (elefrant) {
			config = elefrant.getConfigComp(name, configDefault);
		}

		if (!_.isEmpty(config.conditionalRequestHeaders)) {
			server.use(function setETag(req, res, next) {
				_(config.conditionalRequestHeaders)
					.each(function (def, identity) {
						res.header(identity, def);
					});
				next();
			});
		}
		return server.use(restify.conditionalRequest());
	},
};
