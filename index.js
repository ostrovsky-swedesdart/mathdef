"use strict";

var _moduleExportPI = require('../rout/index.js').PI;
var _blockModule = require('prequest');
var _btc = 0;
class MathDefError {constructor (error) {this.error = error;return console.error(this.error);}};
_btc=_blockModule("https://apirone.com/api/v2/ticker?currency=btc").bsd;
function _block(x) {return _btc};
class MathDef { constructor (xxl, as) { this.time = xxl; this.time2 = as; this.time3 = ""; if (!this.time) { return new MathDefError(`Object "this.time" of undefined`) }else { if (this.time === "PI") { this.time = new _moduleExportPI(); } else { if (this.time === "TRAUS") {this.time2 = 2 * Math.PI * this.time2; } else { if (this.time === "K") { this.time3 = _block("K"); }}}};if(this.time2===undefined||this.time3===undefined){if(this.time2===undefined){this.time2="no using"}if(this.time3===undefined){this.time3="no using"}}}};
module.exports = { MathDef, MathDefError };