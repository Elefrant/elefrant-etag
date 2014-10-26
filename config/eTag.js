'use strict';

/*
 * eTAg
 * --------------------------
 * Allow clients to make conditional requests
 */

module.exports = {

	/*
	 * conditionalRequestHeaders
	 * --------------------------
	 * You can use this handler to let clients do nice HTTP semantics with the 'match' headers
	 *
	 * Usage:
	 *   Last-Modified: The lastModified property returns the date and time the current document was last modified.
	 *   If-Match: Only perform the action if the client supplied entity matches the same entity on the server. This is mainly for methods like PUT to only update a resource if it has not been modified since the user last updated it.
	 *   If-None-Match: Allows a 304 Not Modified to be returned if content is unchanged.
	 *   If-Modified-Since: Allows a 304 Not Modified to be returned if content is unchanged.
	 *   If-Unmodified-Since: Only send the response if the entity has not been modified since a specific time.
	 *   If-Range: If the entity is unchanged, send me the part(s) that I am missing; otherwise, send me the entire new entity.
	 */

	conditionalRequestHeaders: {
		'Etag': 'myETag',
		'Last-Modified': new Date()
	},
};
