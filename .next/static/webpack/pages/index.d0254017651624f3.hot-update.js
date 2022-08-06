/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./public/static/images sync recursive ^\\.\\/.*$":
/*!*********************************************!*\
  !*** ./public/static/images/ sync ^\.\/.*$ ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./email.png": "./public/static/images/email.png",
	"./fb.png": "./public/static/images/fb.png",
	"./ig.jpg": "./public/static/images/ig.jpg",
	"./linkedin.png": "./public/static/images/linkedin.png",
	"./me1.jpg": "./public/static/images/me1.jpg",
	"./medium.png": "./public/static/images/medium.png"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./public/static/images sync recursive ^\\.\\/.*$";

/***/ })

});