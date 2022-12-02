module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return IndexPage; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var algoliasearch_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! algoliasearch/lite */ \"algoliasearch/lite\");\n/* harmony import */ var algoliasearch_lite__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(algoliasearch_lite__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-instantsearch-dom */ \"react-instantsearch-dom\");\n/* harmony import */ var react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/laurensfranken/sites/with-algolia/pages/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nconst searchClient = algoliasearch_lite__WEBPACK_IMPORTED_MODULE_1___default()('2S0C9OYKM6', '7ba42782fc415dedae99de7c55229f41');\nfunction IndexPage() {\n  return __jsx(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_2__[\"InstantSearch\"], {\n    searchClient: searchClient,\n    indexName: \"dev_laurens\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 5\n    }\n  }, __jsx(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_2__[\"SearchBox\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }\n  }), __jsx(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_2__[\"Hits\"], {\n    hitComponent: ({\n      hit\n    }) => __jsx(\"pre\", {\n      key: hit.objectID,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 11\n      }\n    }, JSON.stringify(hit, null, 2)),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }\n  }));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbInNlYXJjaENsaWVudCIsImFsZ29saWFzZWFyY2giLCJJbmRleFBhZ2UiLCJoaXQiLCJvYmplY3RJRCIsIkpTT04iLCJzdHJpbmdpZnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLE1BQU1BLFlBQVksR0FBR0MseURBQWEsQ0FDaEMsWUFEZ0MsRUFFaEMsa0NBRmdDLENBQWxDO0FBS2UsU0FBU0MsU0FBVCxHQUFxQjtBQUNsQyxTQUNFLE1BQUMscUVBQUQ7QUFBZSxnQkFBWSxFQUFFRixZQUE3QjtBQUEyQyxhQUFTLEVBQUMsYUFBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUUsTUFBQyw0REFBRDtBQUNFLGdCQUFZLEVBQUUsQ0FBQztBQUFFRztBQUFGLEtBQUQsS0FDWjtBQUFLLFNBQUcsRUFBRUEsR0FBRyxDQUFDQyxRQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBeUJDLElBQUksQ0FBQ0MsU0FBTCxDQUFlSCxHQUFmLEVBQW9CLElBQXBCLEVBQTBCLENBQTFCLENBQXpCLENBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBREY7QUFVRCIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFsZ29saWFzZWFyY2ggZnJvbSAnYWxnb2xpYXNlYXJjaC9saXRlJztcbmltcG9ydCB7IEluc3RhbnRTZWFyY2gsIFNlYXJjaEJveCwgSGl0cyB9IGZyb20gJ3JlYWN0LWluc3RhbnRzZWFyY2gtZG9tJztcblxuY29uc3Qgc2VhcmNoQ2xpZW50ID0gYWxnb2xpYXNlYXJjaChcbiAgJzJTMEM5T1lLTTYnLFxuICAnN2JhNDI3ODJmYzQxNWRlZGFlOTlkZTdjNTUyMjlmNDEnXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleFBhZ2UoKSB7XG4gIHJldHVybiAoXG4gICAgPEluc3RhbnRTZWFyY2ggc2VhcmNoQ2xpZW50PXtzZWFyY2hDbGllbnR9IGluZGV4TmFtZT1cImRldl9sYXVyZW5zXCI+XG4gICAgICA8U2VhcmNoQm94IC8+XG4gICAgICA8SGl0c1xuICAgICAgICBoaXRDb21wb25lbnQ9eyh7IGhpdCB9KSA9PiAoXG4gICAgICAgICAgPHByZSBrZXk9e2hpdC5vYmplY3RJRH0+e0pTT04uc3RyaW5naWZ5KGhpdCwgbnVsbCwgMil9PC9wcmU+XG4gICAgICAgICl9XG4gICAgICAvPlxuICAgIDwvSW5zdGFudFNlYXJjaD5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "algoliasearch/lite":
/*!*************************************!*\
  !*** external "algoliasearch/lite" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"algoliasearch/lite\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbGdvbGlhc2VhcmNoL2xpdGVcIj8wYjkzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImFsZ29saWFzZWFyY2gvbGl0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFsZ29saWFzZWFyY2gvbGl0ZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///algoliasearch/lite\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-instantsearch-dom":
/*!******************************************!*\
  !*** external "react-instantsearch-dom" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-instantsearch-dom\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pbnN0YW50c2VhcmNoLWRvbVwiPzkzOWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtaW5zdGFudHNlYXJjaC1kb20uanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pbnN0YW50c2VhcmNoLWRvbVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-instantsearch-dom\n");

/***/ })

/******/ });