/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/css/index.scss":
/*!****************************!*\
  !*** ./src/css/index.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/css/index.scss?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/index.scss */ \"./src/css/index.scss\");\n/* harmony import */ var _css_index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_index_scss__WEBPACK_IMPORTED_MODULE_0__);\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n // indicator \n\nvar progress = document.querySelector('#progress');\n\nvar navItem = _toConsumableArray(document.querySelectorAll('.pages a'));\n\nvar page = document.querySelector('.page');\nvar reveal = document.querySelector('.reveal');\nvar menuHamburger = document.querySelector('.menu__hamburger');\nvar menuText = document.querySelector('.menu__text');\nvar navigation = document.querySelector('.navigation');\nvar navigationPages = document.querySelector('.pages');\n\nfunction indicator(e) {\n  progress.style.left = e.offsetLeft + \"px\";\n  progress.style.width = e.offsetWidth + \"px\";\n}\n\nnavItem.forEach(function (link) {\n  link.addEventListener('click', function (e) {\n    indicator(e.target);\n    changePage();\n\n    if (link.classList.contains('pages__about_title')) {\n      setTimeout(\"location.href = './index.html';\", 500);\n    } else if (link.classList.contains('pages__video_title')) {\n      setTimeout(\"location.href = './video.html';\", 500);\n    } else if (link.classList.contains('pages__kontakt_title')) {\n      setTimeout(\"location.href = './kontakt.html';\", 500);\n    }\n  });\n}); // close menu icon and open navigation\n\nmenuHamburger.addEventListener('click', clickNavi);\n\nfunction changePage() {\n  navigationPages.classList.add('pages_hidden');\n}\n\nfunction clickNavi() {\n  menuHamburger.classList.toggle('toggle');\n  menuText.classList.toggle('hidden');\n\n  if (navigation.classList.contains('hidden_nav') && navigationPages.classList.contains('pages_hidden')) {\n    navigation.classList.remove('roll');\n    navigation.classList.remove('hidden_nav');\n    navigation.classList.add('show_nav');\n    navigationPages.classList.remove('pages_hidden');\n    navigationPages.classList.add('pages_show');\n  } else {\n    navigation.classList.remove('show_nav');\n    navigation.classList.add('roll');\n    navigationPages.classList.remove('pages_show');\n    navigationPages.classList.add('pages_hidden');\n    setTimeout(function () {\n      navigation.classList.add('hidden_nav');\n    }, 500);\n  }\n} // show when page is loading \n\n\nwindow.onload = function () {\n  reveal.classList.add('roll');\n}; // video play \n\n\nvar videobuttonStart = document.querySelectorAll('.videoButton');\nvar video = document.querySelectorAll('.play');\nvar loop = 0;\nvideobuttonStart.forEach(function (btn) {\n  btn.addEventListener('click', function () {\n    var film = btn.previousElementSibling;\n    console.log(film);\n    film.load();\n    film.muted = false;\n    btn.style.visibility = 'hidden';\n    film.setAttribute(\"controls\", \"controls\");\n    film.addEventListener('ended', function () {\n      film.play();\n      loop++;\n\n      if (loop > 0) {\n        film.muted = true;\n        btn.style.visibility = 'visible';\n      }\n    });\n  });\n});\nvideo.forEach(function (film) {\n  film.addEventListener('ended', function () {\n    film.play();\n\n    if (film.hasAttribute(\"controls\", \"controls\")) {\n      film.removeAttribute(\"controls\", \"controls\");\n    }\n  });\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });