'use strict';

var ridict = require('ridict');

window.returnRID = function (input) {
	return ridict.matches(input);
};