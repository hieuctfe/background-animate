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

/***/ "./src/Animate/TreeEffect.js":
/*!***********************************!*\
  !*** ./src/Animate/TreeEffect.js ***!
  \***********************************/
/*! exports provided: TreeEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TreeEffect\", function() { return TreeEffect; });\n/* harmony import */ var _Mouse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Mouse */ \"./src/Mouse.js\");\n/* harmony import */ var _Partical__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Partical */ \"./src/Partical.js\");\n/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helper */ \"./src/helper.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\nvar TreeEffect = /*#__PURE__*/function () {\n  function TreeEffect(_ref) {\n    var ctx = _ref.ctx;\n\n    _classCallCheck(this, TreeEffect);\n\n    console.log(ctx);\n    this.ctx = ctx;\n    this.init();\n  }\n\n  _createClass(TreeEffect, [{\n    key: \"init\",\n    value: function init() {\n      var mouse = new _Mouse__WEBPACK_IMPORTED_MODULE_0__[\"Mouse\"]().listenMouseMouveEvent(this.onMouseMove);\n    }\n  }, {\n    key: \"onMouseMove\",\n    value: function onMouseMove(_ref2) {\n      var x = _ref2.x,\n          y = _ref2.y;\n      var rootX = x;\n      var rootY = y;\n      var root = new _Partical__WEBPACK_IMPORTED_MODULE_1__[\"Root\"]({\n        x: x,\n        y: y,\n        rootX: rootX,\n        rootY: rootY,\n        rgba: Object(_helper__WEBPACK_IMPORTED_MODULE_2__[\"getRandomRgb\"])(),\n        ctx: this.ctx,\n        distance: edge\n      });\n      root.draw();\n    }\n  }]);\n\n  return TreeEffect;\n}();\n\n//# sourceURL=webpack:///./src/Animate/TreeEffect.js?");

/***/ }),

/***/ "./src/Animate/index.js":
/*!******************************!*\
  !*** ./src/Animate/index.js ***!
  \******************************/
/*! exports provided: Animate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Animate\", function() { return Animate; });\n/* harmony import */ var _TreeEffect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TreeEffect */ \"./src/Animate/TreeEffect.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nvar Animate = function Animate() {\n  _classCallCheck(this, Animate);\n};\n\n_defineProperty(Animate, \"TreeEffect\", _TreeEffect__WEBPACK_IMPORTED_MODULE_0__[\"TreeEffect\"]);\n\n//# sourceURL=webpack:///./src/Animate/index.js?");

/***/ }),

/***/ "./src/Mouse.js":
/*!**********************!*\
  !*** ./src/Mouse.js ***!
  \**********************/
/*! exports provided: Mouse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Mouse\", function() { return Mouse; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Mouse = /*#__PURE__*/function () {\n  function Mouse() {\n    _classCallCheck(this, Mouse);\n  }\n\n  _createClass(Mouse, [{\n    key: \"listenMouseMouveEvent\",\n    value: function listenMouseMouveEvent(callback) {\n      var _this = this;\n\n      window.addEventListener(\"mousemove\", function (event) {\n        _this.x = event.x;\n        _this.y = event.y;\n        callback({\n          x: _this.x,\n          y: _this.y\n        });\n      });\n    }\n  }]);\n\n  return Mouse;\n}();\n\n//# sourceURL=webpack:///./src/Mouse.js?");

/***/ }),

/***/ "./src/Partical.js":
/*!*************************!*\
  !*** ./src/Partical.js ***!
  \*************************/
/*! exports provided: Partical, Root */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Partical\", function() { return Partical; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Root\", function() { return Root; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Partical = /*#__PURE__*/function () {\n  function Partical(_ref) {\n    var x = _ref.x,\n        y = _ref.y,\n        image = _ref.image,\n        rgba = _ref.rgba,\n        _ref$width = _ref.width,\n        width = _ref$width === void 0 ? 20 : _ref$width,\n        _ref$height = _ref.height,\n        height = _ref$height === void 0 ? 20 : _ref$height,\n        _ref$alpha = _ref.alpha,\n        alpha = _ref$alpha === void 0 ? 1 : _ref$alpha,\n        rotate = _ref.rotate;\n\n    _classCallCheck(this, Partical);\n\n    this.x = x;\n    this.y = y;\n    this.rotate = rotate;\n    this.image = image;\n    this.width = width;\n    this.height = height;\n    this.alpha = alpha;\n    this.rgba = rgba;\n  }\n\n  _createClass(Partical, [{\n    key: \"draw\",\n    value: function draw(ctx) {\n      // const cx = this.x + 0.5 * this.width;\n      // const cy = this.y + 0.5 * this.height;\n      // ctx.save();\n      // ctx.translate(cx, cy);\n      // ctx.rotate((this.rotate * Math.PI) / 180);\n      // ctx.translate(-cx, -cy);\n      // ctx.globalAlpha = this.alpha > 0 ? this.alpha : 0;\n      // drawing\n      if (this.image) {\n        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);\n      } else if (this.rgba) {\n        var _this$rgba = this.rgba,\n            r = _this$rgba.r,\n            g = _this$rgba.g,\n            b = _this$rgba.b,\n            a = _this$rgba.a;\n        ctx.fillStyle = \"rgba(\".concat(r, \", \").concat(g, \", \").concat(b, \", \").concat(a, \")\");\n        ctx.fillRect(this.x, this.y, this.width, this.height);\n      } //\n      // ctx.restore();\n\n    }\n  }]);\n\n  return Partical;\n}();\nvar Root = /*#__PURE__*/function () {\n  function Root(_ref2) {\n    var x = _ref2.x,\n        y = _ref2.y,\n        rgba = _ref2.rgba,\n        _ref2$rootX = _ref2.rootX,\n        rootX = _ref2$rootX === void 0 ? 0 : _ref2$rootX,\n        _ref2$rootY = _ref2.rootY,\n        rootY = _ref2$rootY === void 0 ? 0 : _ref2$rootY,\n        _ref2$distance = _ref2.distance,\n        distance = _ref2$distance === void 0 ? 80 : _ref2$distance,\n        ctx = _ref2.ctx,\n        _ref2$alpha = _ref2.alpha,\n        alpha = _ref2$alpha === void 0 ? 1 : _ref2$alpha,\n        rotate = _ref2.rotate;\n\n    _classCallCheck(this, Root);\n\n    this.x = x;\n    this.y = y;\n    this.rootX = rootX;\n    this.rootY = rootY;\n    this.distance = distance;\n    this.rgba = rgba;\n    this.ctx = ctx;\n    this.rotate = rotate;\n    this.alpha = alpha;\n    this.speedX = 0;\n    this.speedY = 0;\n  }\n\n  _createClass(Root, [{\n    key: \"draw\",\n    value: function draw() {\n      this.caculateNextFrame();\n\n      if (this.radius > 0) {\n        if (this.image) {\n          this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);\n        } else if (this.rgba) {\n          var _this$rgba2 = this.rgba,\n              r = _this$rgba2.r,\n              g = _this$rgba2.g,\n              b = _this$rgba2.b,\n              a = _this$rgba2.a;\n          this.ctx.fillStyle = \"rgba(\".concat(r, \", \").concat(g, \", \").concat(b, \", \").concat(a || Math.random(), \")\");\n          this.ctx.beginPath();\n          this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);\n          this.ctx.strokeWidth = 0.2;\n          this.ctx.fill();\n          this.ctx.stroke();\n        }\n\n        requestAnimationFrame(this.draw.bind(this));\n      } else {\n        cancelAnimationFrame(this.draw);\n      }\n    }\n  }, {\n    key: \"caculateNextFrame\",\n    value: function caculateNextFrame() {\n      this.speedX += (Math.random() - 0.5) / 2;\n      this.speedY += (Math.random() - 0.5) / 2;\n      this.x += this.speedX;\n      this.y += this.speedY;\n      var distanceX = this.x - this.rootX;\n      var distanceY = this.y - this.rootY;\n      var distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);\n      this.radius = (-distance / this.distance + 1) * this.distance / 10;\n    }\n  }]);\n\n  return Root;\n}();\n\n//# sourceURL=webpack:///./src/Partical.js?");

/***/ }),

/***/ "./src/helper.js":
/*!***********************!*\
  !*** ./src/helper.js ***!
  \***********************/
/*! exports provided: loadImage, getRandomRgb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadImage\", function() { return loadImage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getRandomRgb\", function() { return getRandomRgb; });\nfunction loadImage(imagePath) {\n  return new Promise(function (resolve, reject) {\n    var image = new Image();\n    image.crossOrigin = \"Anonymous\";\n    image.addEventListener(\"load\", function () {\n      resolve(image);\n    });\n    image.addEventListener(\"error\", function (err) {\n      reject(err);\n    });\n    image.src = imagePath;\n  });\n}\nfunction getRandomRgb() {\n  var num = Math.round(0xffffff * Math.random());\n  var r = num >> 16;\n  var g = num >> 8 & 255;\n  var b = num & 255;\n  return {\n    r: r,\n    g: g,\n    b: b\n  };\n}\n\n//# sourceURL=webpack:///./src/helper.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Partical__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Partical */ \"./src/Partical.js\");\n/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helper */ \"./src/helper.js\");\n/* harmony import */ var _Animate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Animate */ \"./src/Animate/index.js\");\n\n\n ////////////////////////////////\n\nvar width = window.innerWidth;\nvar height = window.innerHeight;\nvar canvas = document.getElementById(\"canvas\");\nvar ctx = canvas.getContext(\"2d\"); ////////////////////////////////\n\ncanvas.width = width;\ncanvas.height = height;\nvar edge = 150; ////////////////////////////////\n// for (let i = 0; i <= 500; i++) {\n//   const x = Math.random() * width;\n//   const y = Math.random() * height;\n//   onMouseMove({ x, y });\n// }\n// const mouse = new Mouse().listenMouseMouveEvent(onMouseMove);\n\nvar treeEffect = new _Animate__WEBPACK_IMPORTED_MODULE_2__[\"Animate\"].TreeEffect({\n  ctx: ctx\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });