'use strict';

/*
 * Response codes
 * --------------------------
 * List of response codes
 */

module.exports = {
	// You can use this handler to let clients do nice HTTP semantics with the "match" headers.
	// Last-Modified
	// If-Match
	// If-None-Match
	// If-Modified-Since
	// If-Unmodified-Since
	conditionalRequestHeaders: {
		'Etag': 'myETag',
		'Last-Modified': new Date()
	},
};
