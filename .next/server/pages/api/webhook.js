module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/webhook.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/webhook.js":
/*!******************************!*\
  !*** ./pages/api/webhook.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\nconst algoliasearch = __webpack_require__(/*! algoliasearch */ \"algoliasearch\");\n\nconst algolia = algoliasearch('2S0C9OYKM6', process.env.ALGOLIA_ADMIN_API_KEY);\nconst index = algolia.initIndex('dev_laurens'); // const devIndex = algolia.index('dev_laurens')\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n  if (req.method !== 'POST') return res.end();\n  if (req.headers['authorization'] !== process.env.WEBHOOK_SECRET_KEY) return res.status(401).end();\n\n  try {\n    const {\n      data: {\n        PUBLISHED\n      }\n    } = req.body;\n\n    const {\n      id: objectID\n    } = PUBLISHED,\n          data = _objectWithoutProperties(PUBLISHED, [\"id\"]);\n\n    await index.saveObject(_objectSpread({\n      objectID\n    }, data));\n    res.send(201);\n  } catch (err) {\n    res.status(400).send(err === null || err === void 0 ? void 0 : err.message);\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvd2ViaG9vay5qcz9iMDFkIl0sIm5hbWVzIjpbImFsZ29saWFzZWFyY2giLCJyZXF1aXJlIiwiYWxnb2xpYSIsInByb2Nlc3MiLCJlbnYiLCJBTEdPTElBX0FETUlOX0FQSV9LRVkiLCJpbmRleCIsImluaXRJbmRleCIsInJlcSIsInJlcyIsIm1ldGhvZCIsImVuZCIsImhlYWRlcnMiLCJXRUJIT09LX1NFQ1JFVF9LRVkiLCJzdGF0dXMiLCJkYXRhIiwiUFVCTElTSEVEIiwiYm9keSIsImlkIiwib2JqZWN0SUQiLCJzYXZlT2JqZWN0Iiwic2VuZCIsImVyciIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsTUFBTUEsYUFBYSxHQUFHQyxtQkFBTyxDQUFDLG9DQUFELENBQTdCOztBQUVBLE1BQU1DLE9BQU8sR0FBR0YsYUFBYSxDQUFDLFlBQUQsRUFBZUcsT0FBTyxDQUFDQyxHQUFSLENBQVlDLHFCQUEzQixDQUE3QjtBQUVBLE1BQU1DLEtBQUssR0FBR0osT0FBTyxDQUFDSyxTQUFSLENBQWtCLGFBQWxCLENBQWQsQyxDQUNBOztBQUVlLHNFQUFPQyxHQUFQLEVBQVlDLEdBQVosS0FBb0I7QUFDakMsTUFBSUQsR0FBRyxDQUFDRSxNQUFKLEtBQWUsTUFBbkIsRUFBMkIsT0FBT0QsR0FBRyxDQUFDRSxHQUFKLEVBQVA7QUFFM0IsTUFBSUgsR0FBRyxDQUFDSSxPQUFKLENBQVksZUFBWixNQUFpQ1QsT0FBTyxDQUFDQyxHQUFSLENBQVlTLGtCQUFqRCxFQUNFLE9BQU9KLEdBQUcsQ0FBQ0ssTUFBSixDQUFXLEdBQVgsRUFBZ0JILEdBQWhCLEVBQVA7O0FBRUYsTUFBSTtBQUNGLFVBQU07QUFDSkksVUFBSSxFQUFFO0FBQUVDO0FBQUY7QUFERixRQUVGUixHQUFHLENBQUNTLElBRlI7O0FBSUEsVUFBTTtBQUFFQyxRQUFFLEVBQUVDO0FBQU4sUUFBNEJILFNBQWxDO0FBQUEsVUFBeUJELElBQXpCLDRCQUFrQ0MsU0FBbEM7O0FBRUEsVUFBTVYsS0FBSyxDQUFDYyxVQUFOO0FBQW1CRDtBQUFuQixPQUFnQ0osSUFBaEMsRUFBTjtBQUVBTixPQUFHLENBQUNZLElBQUosQ0FBUyxHQUFUO0FBQ0QsR0FWRCxDQVVFLE9BQU9DLEdBQVAsRUFBWTtBQUNaYixPQUFHLENBQUNLLE1BQUosQ0FBVyxHQUFYLEVBQWdCTyxJQUFoQixDQUFxQkMsR0FBckIsYUFBcUJBLEdBQXJCLHVCQUFxQkEsR0FBRyxDQUFFQyxPQUExQjtBQUNEO0FBQ0YsQ0FuQkQiLCJmaWxlIjoiLi9wYWdlcy9hcGkvd2ViaG9vay5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGFsZ29saWFzZWFyY2ggPSByZXF1aXJlKCdhbGdvbGlhc2VhcmNoJyk7XG5cbmNvbnN0IGFsZ29saWEgPSBhbGdvbGlhc2VhcmNoKCcyUzBDOU9ZS002JywgcHJvY2Vzcy5lbnYuQUxHT0xJQV9BRE1JTl9BUElfS0VZKTtcblxuY29uc3QgaW5kZXggPSBhbGdvbGlhLmluaXRJbmRleCgnZGV2X2xhdXJlbnMnKTtcbi8vIGNvbnN0IGRldkluZGV4ID0gYWxnb2xpYS5pbmRleCgnZGV2X2xhdXJlbnMnKVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgaWYgKHJlcS5tZXRob2QgIT09ICdQT1NUJykgcmV0dXJuIHJlcy5lbmQoKTtcblxuICBpZiAocmVxLmhlYWRlcnNbJ2F1dGhvcml6YXRpb24nXSAhPT0gcHJvY2Vzcy5lbnYuV0VCSE9PS19TRUNSRVRfS0VZKVxuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMSkuZW5kKCk7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCB7XG4gICAgICBkYXRhOiB7IFBVQkxJU0hFRCB9LFxuICAgIH0gPSByZXEuYm9keTtcblxuICAgIGNvbnN0IHsgaWQ6IG9iamVjdElELCAuLi5kYXRhIH0gPSBQVUJMSVNIRUQ7XG5cbiAgICBhd2FpdCBpbmRleC5zYXZlT2JqZWN0KHsgb2JqZWN0SUQsIC4uLmRhdGEgfSk7XG5cbiAgICByZXMuc2VuZCgyMDEpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXMuc3RhdHVzKDQwMCkuc2VuZChlcnI/Lm1lc3NhZ2UpO1xuICB9XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/webhook.js\n");

/***/ }),

/***/ "algoliasearch":
/*!********************************!*\
  !*** external "algoliasearch" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"algoliasearch\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbGdvbGlhc2VhcmNoXCI/ZmFmOCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJhbGdvbGlhc2VhcmNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYWxnb2xpYXNlYXJjaFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///algoliasearch\n");

/***/ })

/******/ });