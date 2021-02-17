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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/index.scss */ \"./src/css/index.scss\");\n/* harmony import */ var _css_index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_index_scss__WEBPACK_IMPORTED_MODULE_0__);\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n // indicator \n\nvar progress = document.querySelector('#progress');\n\nvar navItem = _toConsumableArray(document.querySelectorAll('.pages a'));\n\nvar body = document.querySelector('body');\nvar reveal = document.querySelector('.reveal');\nvar menuHamburger = document.querySelector('.menu__hamburger');\nvar menuText = document.querySelector('.menu__text');\nvar navigation = document.querySelector('.navigation');\nvar navigationPages = document.querySelector('.pages');\n\nfunction indicator(e) {\n  progress.style.left = e.offsetLeft + \"px\";\n  progress.style.width = e.offsetWidth + \"px\";\n}\n\nnavItem.forEach(function (link) {\n  link.addEventListener('click', function (e) {\n    indicator(e.target);\n    changePage();\n\n    if (link.classList.contains('pages__about_title')) {\n      setTimeout(\"location.href = './index.html';\", 500);\n    } else if (link.classList.contains('pages__video_title')) {\n      setTimeout(\"location.href = './video.html';\", 500);\n    } else if (link.classList.contains('pages__kontakt_title')) {\n      setTimeout(\"location.href = './kontakt.html';\", 500);\n    }\n  });\n}); // close menu icon and open navigation\n\nmenuHamburger.addEventListener('click', clickNavi);\n\nfunction changePage() {\n  navigationPages.classList.add('pages_hidden');\n}\n\nfunction clickNavi() {\n  menuHamburger.classList.toggle('toggle');\n  menuText.classList.toggle('hidden');\n\n  if (navigation.classList.contains('hidden_nav') && navigationPages.classList.contains('pages_hidden')) {\n    navigation.classList.remove('roll');\n    navigation.classList.remove('hidden_nav');\n    navigation.classList.add('show_nav');\n    navigationPages.classList.remove('pages_hidden');\n    navigationPages.classList.add('pages_show');\n  } else {\n    navigation.classList.remove('show_nav');\n    navigation.classList.add('roll');\n    navigationPages.classList.remove('pages_show');\n    navigationPages.classList.add('pages_hidden');\n    setTimeout(function () {\n      navigation.classList.add('hidden_nav');\n    }, 500);\n  }\n} // show when page is loading \n\n\nwindow.onload = function () {\n  reveal.classList.add('roll');\n}; // Paralax image\n\n\nfunction parallax(element, speed) {\n  var item = document.querySelector(element);\n  var contentPosition = item.getBoundingClientRect().top / 8;\n  item.style.backgroundSize = 110 + window.pageYOffset / 70 + '%';\n  item.style.transform = \"translateY(\".concat(contentPosition * speed, \"px)\");\n  item.style.transition = \"background-size 2s ease-in-out, transform 1s ease-in-out\";\n}\n\nfunction parallaxBg(element) {\n  var item = document.querySelector(element);\n  item.style.backgroundSize = 90 + window.pageYOffset / 60 + '%';\n  item.style.transition = \"background-size 2s ease-in-out\";\n}\n\nfunction parallaxText(element) {\n  var item = document.querySelector(element);\n  var itemPosition = item.getBoundingClientRect().top;\n  var screenPosition = window.innerHeight / 1.2;\n\n  if (itemPosition < screenPosition) {\n    item.classList.remove('hidden');\n    item.classList.add('showText');\n  } else {\n    item.classList.remove('showText');\n    item.classList.add('hidden');\n  }\n}\n\nwindow.addEventListener('scroll', function () {\n  if (body.classList.contains('aboutMePage')) {\n    effectsForAboutMe();\n  } else if (body.classList.contains('videosPage')) {\n    effectsForVideoPage();\n  }\n});\n\nfunction effectsForAboutMe() {\n  parallax('.nav .name', 0.2);\n  parallax('.nav .surname', 0.5);\n  parallax('.nav .quote', 0.2);\n  parallax('.aboutMe__image', 0.2);\n  parallax('.aboutMe2__image', 0.2);\n  parallax('.aboutMe3__image', 0.2);\n  parallax('.aboutMe4__image', 0.2);\n  parallax('.quote__image2', 0.2);\n  parallax('.quote__image2_back', 0.2);\n  parallaxBg('.aboutMe5__image');\n  parallaxText('.aboutMe__content p');\n  parallaxText('.aboutMe2__content p');\n  parallaxText('.aboutMe3__content p');\n  parallaxText('.aboutMe4__content p');\n  parallaxText('.aboutMe5__content p');\n  parallaxText('.quote__quote p');\n}\n\nfunction effectsForVideoPage() {\n  parallax('.nav .name2', 0.2);\n  parallax('.video1__container .video_wrapper', 0.2);\n  parallax('.video2 .video_wrapper', 0.2);\n  parallaxText('.video1__content p');\n  parallaxText('.video2__content p');\n} // <============= video play ===================> \n\n\nvar videobuttonStart = document.querySelectorAll('.videoButton');\nvar video = document.querySelectorAll('.play');\nvar loop = 0;\nvideobuttonStart.forEach(function (btn) {\n  btn.addEventListener('click', function () {\n    var film = btn.previousElementSibling;\n    startPlay(film);\n    btn.style.visibility = 'hidden';\n    film.addEventListener('ended', function () {\n      endPlay(film);\n      btn.style.visibility = 'visible';\n    });\n  });\n});\n\nfunction startPlay(film) {\n  film.load();\n  film.muted = false;\n  film.setAttribute(\"controls\", \"controls\");\n}\n\nfunction endPlay(film) {\n  film.play();\n  loop++;\n\n  if (loop > 0) {\n    film.muted = true;\n  }\n}\n\nvideo.forEach(function (film) {\n  film.addEventListener('ended', function () {\n    film.play();\n\n    if (film.hasAttribute(\"controls\", \"controls\")) {\n      film.removeAttribute(\"controls\", \"controls\");\n    }\n  });\n}); //<================ video carousel ==============>\n\nvar section3 = document.querySelector('.video3');\nvar section4 = document.querySelector('.video4');\nvar containerMovie = document.querySelector('.container_movie');\nvar containerMovie2 = document.querySelector('.container_movie2');\nvar section3btns = document.querySelectorAll('.videoButton1');\nvar section4btns = document.querySelectorAll('.videoButton2');\nvar initialPosition = null;\nvar moving = false;\nvar transform = 0;\nvar lastPageX = 0;\nvar transformValue = 0;\nvar transformMatrix = 0;\nvar carusel1 = false;\nvar carusel2 = false;\n\nvar gestureStart = function gestureStart(e) {\n  initialPosition = e.pageX;\n  moving = true;\n\n  if (carusel1) {\n    containerMovie.style.pointerEvents = 'none';\n    transformMatrix = window.getComputedStyle(containerMovie).getPropertyValue('transform');\n  } else if (carusel2) {\n    containerMovie2.style.pointerEvents = 'none';\n    transformMatrix = window.getComputedStyle(containerMovie2).getPropertyValue('transform');\n  }\n\n  if (transformMatrix !== 'none') {\n    transform = parseInt(transformMatrix.split(',')[4].trim());\n  }\n};\n\nvar gestureMove = function gestureMove(e) {\n  e.preventDefault();\n\n  if (moving) {\n    var currentPosition = e.pageX;\n    var diff = currentPosition - initialPosition;\n    var section3_rect = section3.getBoundingClientRect();\n    var containerMovie_rect = containerMovie.getBoundingClientRect();\n    var section4_rect = section4.getBoundingClientRect();\n    var containerMovie2_rect = containerMovie2.getBoundingClientRect();\n\n    if (e.pageX - lastPageX > 0) {\n      if (transformValue > 0) {\n        return;\n      }\n    } else {\n      if (containerMovie_rect.right < section3_rect.right || containerMovie2_rect.right < section4_rect.right) {\n        return;\n      }\n    }\n\n    transformValue = parseInt(transform) + diff;\n\n    if (carusel1) {\n      containerMovie.style.transform = \"translateX(\".concat(transformValue, \"px)\");\n    } else if (carusel2) {\n      containerMovie2.style.transform = \"translateX(\".concat(transformValue, \"px)\");\n    }\n  }\n\n  lastPageX = e.pageX;\n};\n\nvar gestureEnd = function gestureEnd(e) {\n  e.preventDefault();\n  clearTimeout(pressTimer);\n  moving = false;\n\n  if (carusel1) {\n    carusel1 = false;\n    containerMovie.style.pointerEvents = 'all';\n  } else if (carusel2) {\n    carusel2 = false;\n    containerMovie2.style.pointerEvents = 'all';\n  }\n}; //detect how long is press\n\n\nvar pressTimer = 0;\nvar longpress = false;\nsection3btns.forEach(function (btn) {\n  btn.addEventListener('mousedown', function (e) {\n    e.preventDefault();\n    carusel1 = true;\n    carusel2 = false;\n    mousedownCaruselBtn(e);\n    console.log(carusel1);\n  });\n});\nsection4btns.forEach(function (btn) {\n  btn.addEventListener('mousedown', function (e) {\n    e.preventDefault();\n    carusel2 = true;\n    carusel1 = false;\n    mousedownCaruselBtn(e);\n  });\n});\nsection3btns.forEach(function (btn) {\n  btn.addEventListener('mouseup', function (e) {\n    mouseupCaruselBtn(e);\n  });\n});\nsection4btns.forEach(function (btn) {\n  btn.addEventListener('mouseup', function (e) {\n    mouseupCaruselBtn(e);\n  });\n});\nsection3btns.forEach(function (btn) {\n  clickCaruselBtn(btn);\n});\nsection4btns.forEach(function (btn) {\n  clickCaruselBtn(btn);\n});\n\nfunction mousedownCaruselBtn(btn) {\n  longpress = false;\n  pressTimer = window.setTimeout(function () {\n    longpress = true;\n    console.log('dlugi click');\n    gestureStart(btn);\n  }, 200);\n}\n\nfunction mouseupCaruselBtn(btn) {\n  gestureEnd(btn);\n}\n\nfunction clickCaruselBtn(btn) {\n  btn.addEventListener('click', function () {\n    if (longpress) {\n      // if detect hold, stop onclick function\n      return false;\n    } else {\n      var film = btn.previousElementSibling;\n      btn.style.visibility = 'hidden';\n      startPlay(film);\n      film.addEventListener('ended', function () {\n        endPlay(film);\n        btn.style.visibility = 'visible';\n      });\n    }\n  });\n} // Pointer Events\n\n\nif (window.PointerEvent) {\n  // section3.addEventListener('pointerdown', gestureStart);\n  section3.addEventListener('pointermove', gestureMove);\n  section3.addEventListener('pointerup', gestureEnd);\n  section4.addEventListener('pointermove', gestureMove);\n  section4.addEventListener('pointerup', gestureEnd);\n} else {\n  // section3.addEventListener('touchdown', gestureStart);\n  section3.addEventListener('touchmove', gestureMove);\n  section3.addEventListener('touchup', gestureEnd);\n  section4.addEventListener('touchmove', gestureMove);\n  section4.addEventListener('touchup', gestureEnd); // section3.addEventListener('mousedown', gestureStart);\n\n  section3.addEventListener('mousemove', gestureMove);\n  section3.addEventListener('mouseup', gestureEnd);\n  section4.addEventListener('mousemove', gestureMove);\n  section4.addEventListener('mouseup', gestureEnd);\n}\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });