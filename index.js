var Parser = require('./lib/parser');

function getGlobal() {
	return this;
}

module.exports = {
	create: function(buffer, global) {
		global = global || getGlobal();
		if(buffer instanceof global.ArrayBuffer) {
			var DOMBufferStream = require('./lib/dom-bufferstream');
			return new Parser(new DOMBufferStream(buffer, 0, buffer.length, true, global));
		} else {
			var NodeBufferStream = require('./lib/bufferstream');
			return new Parser(new NodeBufferStream(buffer, 0, buffer.length, true));
		}
	}
};