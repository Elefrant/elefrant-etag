'use strict';

var config = require('./config/eTag'),
	_ = require('lodash');

module.exports = {
	enable: true,

	name: 'eTag',

	afterServer: function (elefrant, server, restify) {
		var condReqH = config.conditionalRequestHeaders;
		if (elefrant && elefrant.config && elefrant.config.eTag && elefrant.config.eTag.conditionalRequestHeaders) {
			condReqH = elefrant.config.eTag.conditionalRequestHeaders;
		}

		if (!_.isEmpty(condReqH)) {
			server.use(function setETag(req, res, next) {
				_(condReqH)
					.each(function (def, identity) {
						res.header(identity, def);
					});
				next();
			});
		}
		return server.use(restify.conditionalRequest());
	},
};
