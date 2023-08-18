/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* Reset default margin and padding */\nbody, h1, h2, h3, p {\n  margin: 0;\n  padding: 0;\n}\n\n/* Body styles */\nbody {\n  font-family: Arial, sans-serif;\n  background-color: #141414;\n  color: #ffffff;\n  margin: 0;\n  padding: 0;\n}\n\n/* Header */\nheader {\n  background-color: #b10909;\n  color: #fff;\n  padding: 20px 0;\n  height: 50px;\n}\n\nnav {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 20px;\n}\n\n.main-logo {\n  font-weight: bolder;\n  font-size: 48px;\n  margin-left: 35px;\n}\n\n.total-items {\n  font-size: 18px;\n  font-weight: bold;\n  margin-right: 30px;\n}\n\n/* Main content container */\n.container {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  padding: 20px;\n}\n\n/* Movie card styles */\n.card {\n  background-color: #181818;\n  border: none;\n  border-radius: 5px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n  margin: 15px;\n  overflow: hidden;\n  position: relative;\n  width: 220px;\n  transition: transform 0.3s ease-in-out;\n}\n\n.card:hover {\n  transform: translateY(-5px) scale(1.02);\n}\n\n.card img {\n  width: 100%;\n  height: auto;\n  object-fit: cover;\n  border-radius: 5px 5px 0 0;\n}\n\n.card-content {\n  padding: 10px;\n}\n\n.card h3 {\n  font-size: 16px;\n  margin: 10px 0;\n}\n\n.card-buttons {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 10px;\n}\n\n.like-button,\n.comment-button {\n  padding: 6px 12px;\n  font-size: 14px;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;\n  background-color: #1f1f1f;\n  color: #ffffff;\n  display: flex;\n  align-items: center; /* Align content vertically */\n}\n\n.like-button:hover,\n.comment-button:hover {\n  background-color: #d30813;\n}\n/* Like count */\n.like-count {\n  font-weight: bold;\n  margin-left: 4px;\n}\n\n/* Popup styles */\n.popup-container {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: #181818;\n  color: #fff;\n  padding: 30px;\n  border-radius: 10px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);\n  z-index: 1000;\n  max-width: 100%;\n  width: 80%;\n  height: 70%; /* Increase the height of the popup */\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  overflow-y: auto; /* Enable vertical scrolling */\n}\n\n.popup-header {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  margin-bottom: 20px;\n}\n\n.popup-header img {\n  width: 250px;\n  height: auto;\n  border-radius: 5px;\n  margin-right: 20px;\n}\n\n.popup-header button {\n  background-color: transparent;\n  border: none;\n  color: #fff;\n  cursor: pointer;\n  font-size: 18px;\n}\n\n.popup-header button:hover {\n  color: #d30813;\n}\n\n.popup-content {\n  width: 100%;\n  margin-bottom: 20px;\n}\n\n.comment-section {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\n.comment-form {\n  padding: 10px;\n  background-color: #282828;\n  border-radius: 5px;\n  margin-bottom: 20px;\n}\n\n.comment-form input,\n.comment-form textarea {\n  width: 90%;\n  padding: 10px;\n  margin-bottom: 10px;\n  border: none;\n  background-color: #1f1f1f;\n  color: #fff;\n  border-radius: 5px;\n}\n\n.comment-form textarea {\n  resize: vertical;\n}\n\n.popup-comment-button {\n  padding: 10px 20px;\n  background-color: #d30813;\n  color: #fff;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;\n}\n\n.popup-comment-button:hover {\n  background-color: #b10909;\n}\n\n.comment-list {\n  max-height: 320px;\n  overflow-y: auto;\n  padding: 10px;\n  background-color: #282828;\n  border-radius: 5px;\n  color: #fff;\n  height: 300px;\n  width: 620px;\n}\n\n.comment-list p {\n  margin-bottom: 8px;\n}\n.popup-close-button {\n  position: absolute;\n  top: 0;\n  right: 0;\n  padding: 10px;\n  cursor: pointer;\n  color: #090909; \n  transition: color 0.3s ease-in-out;\n  margin: 20px;\n  font-weight: bolder;\n}\n\n.popup-close-button:hover {\n  color: red; /* Change the color on hover */\n}\n\n.popup-content a {\n  display: inline-block;\n  padding: 6px 12px;\n  background-color: #e50914;\n  color: #ffffff;\n  font-size: 14px;\n  border-radius: 4px;\n  text-decoration: none;\n  transition: background-color 0.3s ease-in-out;\n}\n\n.popup-content a:hover {\n  background-color: #d30813;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://capstone-api-based-webapp/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://capstone-api-based-webapp/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://capstone-api-based-webapp/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://capstone-api-based-webapp/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://capstone-api-based-webapp/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://capstone-api-based-webapp/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://capstone-api-based-webapp/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://capstone-api-based-webapp/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://capstone-api-based-webapp/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://capstone-api-based-webapp/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/components/InvolvementAPI.js":
/*!******************************************!*\
  !*** ./src/components/InvolvementAPI.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst API_BASE_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';\nconst APP_ID = 'kWOTV5VjYokcGzg5Fbds';\n\n// Function to record a like for a specific item\nconst recordLike = async (itemId) => {\n  const response = await fetch(`${API_BASE_URL}apps/${APP_ID}/likes/`, {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json',\n    },\n    body: JSON.stringify({ item_id: itemId }),\n  });\n\n  if (response.status === 201) {\n    return true;\n  }\n  return false;\n};\n\n// Function to get a list of items with respective likes\nconst getLikes = async () => {\n  const response = await fetch(`${API_BASE_URL}apps/${APP_ID}/likes/`);\n\n  if (response.status === 200) {\n    const data = await response.json();\n    return data;\n  }\n  return null;\n};\n\n// Function to record a comment for a specific item\nconst recordComment = async (itemId, username, comment) => {\n  const response = await fetch(`${API_BASE_URL}apps/${APP_ID}/comments/`, {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json',\n    },\n    body: JSON.stringify({ item_id: itemId, username, comment }),\n  });\n\n  if (response.status === 201) {\n    return true;\n  }\n  return false;\n};\n\n// Function to get a list of comments for a specific item\nconst getComments = async (itemId) => {\n  const response = await fetch(`${API_BASE_URL}apps/${APP_ID}/comments?item_id=${itemId}`);\n\n  if (response.status === 200) {\n    const data = await response.json();\n    return data;\n  }\n  return null;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  recordLike,\n  getLikes,\n  recordComment,\n  getComments,\n});\n\n\n//# sourceURL=webpack://capstone-api-based-webapp/./src/components/InvolvementAPI.js?");

/***/ }),

/***/ "./src/components/MovieList.js":
/*!*************************************!*\
  !*** ./src/components/MovieList.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _InvolvementAPI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InvolvementAPI.js */ \"./src/components/InvolvementAPI.js\");\n/* harmony import */ var _PopupModule_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PopupModule.js */ \"./src/components/PopupModule.js\");\n\n\n// Create cards\nconst createCard = (show, initialLikes = 0) => {\n  const card = document.createElement('div');\n  card.classList.add('card');\n  card.innerHTML = `\n        <img src=\"${show.image.medium}\" alt=\"${show.name}\">\n        <div class=\"card-content\">\n            <h3>${show.name}</h3>\n        </div>\n        <div class=\"card-buttons\">\n            <button class=\"like-button\" data-show-id=\"${show.id}\" data-likes=\"${initialLikes}\">\n                ❤️ Like (${initialLikes})\n            </button>\n            <button class=\"comment-button\">💬 Comment</button>\n        </div>\n    `;\n  return card;\n};\n\nconst API_URL = 'https://api.tvmaze.com/shows';\n\nconst fetchAndDisplayShows = async () => {\n  fetch(API_URL)\n    .then((response) => response.json())\n    .then(async (data) => {\n      const showList = document.getElementById('showList');\n      const totalItems = document.getElementById('totalItems');\n\n      totalItems.textContent = `Total Shows: ${data.length}`;\n\n      data.forEach(async (show) => {\n        const likesData = await _InvolvementAPI_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getLikes();\n        const showLikes = likesData.find((item) => item.item_id === show.id);\n\n        const initialLikes = showLikes ? showLikes.likes : 0;\n\n        const card = createCard(show, initialLikes);\n\n        const likeButton = card.querySelector('.like-button');\n        const commentButton = card.querySelector('.comment-button');\n\n        likeButton.addEventListener('click', async () => {\n          const success = await _InvolvementAPI_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].recordLike(show.id);\n          if (success) {\n            const updatedLikesData = await _InvolvementAPI_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getLikes();\n            const updatedShowLikes = updatedLikesData.find((item) => item.item_id === show.id);\n            if (updatedShowLikes) {\n              likeButton.textContent = `❤️ Like (${updatedShowLikes.likes})`;\n            }\n          }\n        });\n\n        commentButton.addEventListener('click', () => {\n          (0,_PopupModule_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(show); // Show popup with details and comments\n        });\n\n        showList.appendChild(card);\n      });\n    });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchAndDisplayShows);\n\n//# sourceURL=webpack://capstone-api-based-webapp/./src/components/MovieList.js?");

/***/ }),

/***/ "./src/components/PopupModule.js":
/*!***************************************!*\
  !*** ./src/components/PopupModule.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _InvolvementAPI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InvolvementAPI.js */ \"./src/components/InvolvementAPI.js\");\n\n\nconst showPopup = async (show) => {\n  // Create and style the popup container\n  const popupContainer = document.createElement('div');\n  popupContainer.classList.add('popup-container');\n\n  // Fetch details about the selected show from TVmaze API\n  const response = await fetch(`https://api.tvmaze.com/shows/${show.id}`);\n  const showDetails = await response.json();\n  // Populate the popup content with show details\n  popupContainer.innerHTML = `\n    <div class=\"popup-header\">\n      <img src=\"${showDetails.image.medium}\" alt=\"${showDetails.name}\">\n      <h2>${showDetails.name}</h2>\n    </div>\n    <div class=\"popup-content\">\n      <p>${showDetails.summary}</p><br>\n      <a href=\"${show.url}\" target=\"_blank\">Learn More</a>\n    </div>\n    <button class=\"popup-close-button\">✖</button>\n    <div class=\"comment-form\">\n      <input type=\"text\" id=\"commentName\" placeholder=\"Your Name\">\n      <textarea id=\"commentText\" placeholder=\"Your Comment\"></textarea>\n      <button class=\"popup-comment-button\">💬 Add Comment</button>\n    </div>\n    <div class=\"comment-count\">Comments (0)</div>\n    <div class=\"comment-list\">\n      <!-- Comment list will be populated here -->\n    </div>\n  `;\n  const mainContainer = document.querySelector('main .container');\n  mainContainer.parentNode.insertBefore(popupContainer, mainContainer);\n\n  const commentListElement = popupContainer.querySelector('.comment-list');\n  const commentCountElement = popupContainer.querySelector('.comment-count');\n\n  // Handle the close button click inside the popup\n  const closeButton = popupContainer.querySelector('.popup-close-button');\n  closeButton.addEventListener('click', () => {\n    popupContainer.remove();\n  });\n  const commentButton = popupContainer.querySelector('.popup-comment-button');\n  commentButton.addEventListener('click', async () => {\n    const commentName = popupContainer.querySelector('#commentName').value;\n    const commentText = popupContainer.querySelector('#commentText').value;\n\n    if (commentName && commentText) {\n      // Record the comment using InvolvementAPI\n      const success = await _InvolvementAPI_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].recordComment(show.id, commentName, commentText);\n\n      if (success) {\n        popupContainer.querySelector('#commentName').value = '';\n        popupContainer.querySelector('#commentText').value = '';\n        await updateCommentList(show.id, commentListElement, commentCountElement);\n      }\n    }\n  });\n\n  await updateCommentList(show.id, commentListElement, commentCountElement);\n};\n\n// Function to update the comment list\nconst updateCommentList = async (itemId, commentListElement, commentCountElement) => {\n  const comments = await _InvolvementAPI_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getComments(itemId);\n  if (comments && comments.length > 0) {\n    const commentsHTML = comments\n      .map((comment, index) => `\n        <div class=\"comment-item ${index % 2 === 0 ? 'even' : 'odd'}\">\n          <div class=\"comment-header\">\n            <p class=\"comment-username\">${comment.username}</p>\n            <p class=\"comment-date\">${formatDate(comment.creation_date)}</p>\n          </div>\n          <p class=\"comment-text\">${comment.comment}</p>\n        </div>\n      `)\n      .join('');\n    commentListElement.innerHTML = commentsHTML;\n    commentCountElement.textContent = `Comments (${comments.length})`;\n  } else {\n    commentListElement.innerHTML = '<p class=\"no-comments\">No comments yet.</p>';\n    commentCountElement.textContent = 'Comments (0)';\n  }\n};\n\n// Function to format date into human-readable format\nconst formatDate = (dateString) => {\n  if (!dateString || dateString === 'Invalid Date') {\n    return 'Date unknown';\n  }\n\n  const options = { year: 'numeric', month: 'long', day: 'numeric' };\n  return new Date(dateString).toLocaleDateString(undefined, options);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showPopup);\n\n//# sourceURL=webpack://capstone-api-based-webapp/./src/components/PopupModule.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _components_MovieList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/MovieList.js */ \"./src/components/MovieList.js\");\n\n\n\ndocument.addEventListener('DOMContentLoaded', _components_MovieList_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n\n//# sourceURL=webpack://capstone-api-based-webapp/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;