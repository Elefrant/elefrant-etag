'use strict';

var component = require('../component'),
	restify = require('restify'),
	should = require('should');

var server = restify.createServer();

describe('eTag', function () {

	it('exports an object', function () {
		should.exist(component);
	});

	it('check use server', function () {
		should(component.afterServer({}, server, restify)).be.ok;
	});
});
