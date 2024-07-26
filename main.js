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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/raindrop.jpg */ \"./src/img/raindrop.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./img/windCatcherLogo.png */ \"./src/img/windCatcherLogo.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n  font-family: \"Quicksand\";\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nbutton {\n  width: 100px;\n  height: 30px;\n}\n\nbody {\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n  background-size: cover;\n  background-repeat: no-repeat;\n  color: #fff;\n}\n\n.weatherLogo {\n  position: absolute;\n  left: 20px;\n  top: 60px;\n  z-index: 10;\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 75px;\n  width: 225px;\n}\n\n.searchAPI {\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(223, 223, 223, 0.2);\n  min-height: 100px;\n  height: 100px;\n  margin: 50px 0;\n}\n\n#searchLocation {\n  height: 50px;\n  border-radius: 10px;\n  padding: 5px 10px;\n  background-color: rgba(23, 23, 23, 0.2);\n  color: #fff;\n}\n\nbody {\n  min-height: 100vh;\n}\n\nbody,\n.searchAPI,\n#pageContent,\n.mainContent,\n.dateTimeLocationContainer,\n.dailyWeatherForecastContainer,\n.dayContainer,\n.dayHighLow,\n.currentMiscWeatherItemsContainer,\n.sunriseSetContainer,\n.humidityContent,\n.rainContent,\n.windContent,\n.uvContent,\n.humidityContainer,\n.rainContainer,\n.windContainer,\n.uvContainer,\n.hourlyForecastContainer,\n.hourlyForecastContent,\n.hourContainer,\n.ics-container {\n  display: flex;\n}\n\nbody,\n#pageContent,\n.dateTimeLocationContainer,\n.dailyWeatherForecastContainer,\n.dayHighLow,\n.currentMiscWeatherItemsContainer,\n.hourContainer {\n  flex-direction: column;\n}\n\n#pageContent {\n  height: 100%;\n  width: 80vw;\n  max-width: 1600px;\n  margin: 0 auto;\n}\n\n.dateTimeLocationContainer,\n.dailyWeatherForecastContainer,\n.currentMiscWeatherItemsContainer,\n.hourlyForecastContainer {\n  background-color: rgba(10, 10, 10, 0.4);\n  border-radius: 20px;\n  box-shadow: 1px 5px 5px 2px #333;\n}\n\n.mainContent {\n  margin-bottom: 7vh;\n}\n\n.locationName {\n  font-size: 1.5rem;\n}\n\n.currentTemp {\n  font-size: 2.5rem;\n}\n\n.dateTimeLocationContainer {\n  position: relative;\n}\n\n.weatherIcon {\n  position: absolute;\n  top: 6rem;\n  right: 15px;\n  height: 15vh;\n  max-height: 100px;\n  max-width: 100px;\n  align-self: end;\n}\n\n.sunriseSetIcon {\n  height: 100px;\n}\n\n.currentWeatherConditions {\n  font-size: 1.1rem;\n  margin-top: 6rem;\n}\n\n.locationName,\n.currentTemp,\n.currentWeatherConditions,\n.currentMiscWeatherItemsHeading,\n.sunriseSetContainer,\n.humidityContent,\n.rainContent,\n.windContent,\n.uvContent {\n  padding: 15px;\n}\n\n.currentDate {\n  padding: 0 15px;\n}\n\n.currentMiscWeatherItemsHeading {\n  padding: 15px 15px 0 15px;\n}\n\n.mainContent {\n  justify-content: space-between;\n}\n\n.dailyWeatherForecastContainer {\n  min-width: 140px;\n  width: 25vw;\n  margin: auto 0;\n}\n\n.dailyWeatherForecastContent {\n  padding-bottom: 20px;\n}\n\n.dayDate {\n  font-size: 1.3rem;\n  padding: 15px 15px 0 15px;\n}\n\n.sunriseSetContainer,\n.humidityContent,\n.rainContent,\n.windContent,\n.uvContent {\n  align-items: center;\n  justify-content: space-between;\n}\n\n.dayContainer,\n.humidityContainer,\n.rainContainer,\n.windContainer,\n.uvContainer,\n.hourlyForecastContainer {\n  align-items: center;\n  justify-content: space-around;\n}\n\n.hourlyForecastContent {\n  width: 100%;\n  justify-content: space-around;\n}\n\n.miscIcon {\n  height: 30px;\n  padding: 0 10px;\n}\n\n.dateTimeLocationContainer,\n.currentMiscWeatherItemsContainer {\n  min-width: 140px;\n  width: 20vw;\n  max-width: 250px;\n}\n\n.hourContainer {\n  padding: 15px 5px;\n  align-items: center;\n  justify-content: center;\n}\n\n.ics-container {\n  justify-content: end;\n  align-items: center;\n  gap: 5px;\n  position: fixed;\n  bottom: 0;\n  right: 0;\n}\n\n.ics-img {\n  height: 25px;\n}\n\n.ics-p {\n  font-style: italic;\n}\n\n/*  MEDIA QUERIES */\n@media (max-width: 1160px) {\n  .currentMiscWeatherItemsContainer {\n    width: 23vw;\n  }\n  .dailyWeatherForecastContainer {\n    width: 23vw;\n  }\n}\n\n@media (max-width: 1120px) {\n  .weatherIcon {\n    position: absolute;\n    top: 9rem;\n    left: 15px;\n    height: 15vh;\n  }\n}\n\n@media (max-width: 1035px) {\n  .weatherIcon {\n    position: absolute;\n    top: 11rem;\n    left: 15px;\n    height: 15vh;\n  }\n  .currentMiscWeatherItemsContainer {\n    width: 25vw;\n  }\n  .dailyWeatherForecastContainer {\n    width: 21vw;\n  }\n}\n\n@media (max-width: 970px) {\n  .sunriseSetIcon {\n    height: 60px;\n  }\n  .currentMiscWeatherItemsContainer {\n    width: 26vw;\n  }\n  .dailyWeatherForecastContainer {\n    width: 20vw;\n  }\n}\n\n@media (max-width: 900px) {\n  .currentMiscWeatherItemsContainer {\n    width: 28vw;\n  }\n}\n\n@media (max-width: 830px) {\n  .currentDate,\n  .currentWeatherConditions,\n  .dayHigh,\n  .dayLow,\n  .miscHeading,\n  .sunriseSetText,\n  .miscText {\n    font-size: 0.9rem;\n  }\n}\n\n@media (max-width: 780px) {\n  .currentDate,\n  .currentWeatherConditions,\n  .dayHigh,\n  .dayLow,\n  .miscHeading,\n  .sunriseSetText,\n  .miscText {\n    font-size: 0.8rem;\n  }\n}\n\n@media (max-width: 725px) {\n  .humidityContent,\n  .rainContent,\n  .windContent,\n  .uvContent {\n    flex-direction: column;\n    align-items: start;\n  }\n  .miscText {\n    padding-left: 70px;\n  }\n  .currentTemp {\n    font-size: 2rem;\n  }\n  .weatherIcon {\n    height: 64px;\n  }\n  .hourlyForecastContent {\n    flex-direction: column;\n  }\n  .hourContainer {\n    flex-direction: row;\n  }\n  .hour0,\n  .hour3,\n  .hour6,\n  .hour9,\n  .hour12,\n  .hour15,\n  .hour18,\n  .hour21 {\n    display: flex;\n    align-items: center;\n    gap: 20px;\n  }\n  .searchAPI {\n    justify-content: end;\n  }\n  #searchLocation {\n    margin-right: 40px;\n  }\n}\n\n@media (max-width: 620px) {\n  .mainContent {\n    flex-direction: column;\n  }\n  .dateTimeLocationContainer,\n  .dailyWeatherForecastContainer,\n  .currentMiscWeatherItemsContainer {\n    width: 100%;\n    max-width: 100%;\n    margin-bottom: 10px;\n  }\n  .currentDate,\n  .currentWeatherConditions,\n  .dayHigh,\n  .dayLow,\n  .miscHeading,\n  .sunriseSetText,\n  .miscText {\n    font-size: 1.2rem;\n  }\n  .humidityContent,\n  .rainContent,\n  .windContent,\n  .uvContent {\n    flex-direction: row;\n    align-items: center;\n  }\n  .miscText {\n    padding-left: 10px;\n  }\n  .sunriseSetIcon {\n    height: 100px;\n  }\n  .weatherIcon {\n    top: 9rem;\n    left: 50px;\n    height: 15vh;\n    max-height: 100px;\n    max-width: 100px;\n  }\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://api-demo-weather-app/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://api-demo-weather-app/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://api-demo-weather-app/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://api-demo-weather-app/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://api-demo-weather-app/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://api-demo-weather-app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://api-demo-weather-app/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://api-demo-weather-app/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://api-demo-weather-app/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://api-demo-weather-app/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://api-demo-weather-app/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _modules_getWeatherData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/getWeatherData */ \"./src/modules/getWeatherData.js\");\n\n\n\nconst mainContent = document.querySelector(\".mainContent\");\nconst searchBar = document.querySelector(\"#searchLocation\");\nconst hourlyData = document.querySelector(\n    \"#pageContent>.hourlyForecastContainer\"\n  );\nlet newLocation;\n\n// Initialize page\nfunction loadPage() {\n    while (mainContent.firstChild) {\n      mainContent.removeChild(mainContent.firstChild);\n    }\n    if (hourlyData) {\n        container.remove(hourlyData);\n    }\n    (0,_modules_getWeatherData__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"helsinki\");\n  }\n  \n  loadPage();\n\n// Activate search bar\nsearchBar.addEventListener(\"input\", recordInput);\nsearchBar.addEventListener(\"keypress\", recordKey);\n\n// Save input from search bar\nfunction recordInput(evt) {\n  evt.preventDefault();\n  newLocation = evt.target.value;\n}\n\n// Run API search on \"Enter\"\nfunction recordKey(evt) {\n  if (evt.key === \"Enter\") {\n    evt.preventDefault();\n    updateLocation();\n  }\n}\n\nfunction updateLocation() {\n  const mainContent = document.querySelector(\".mainContent\");\n  const hourlyData = document.querySelector(\n    \"#pageContent>.hourlyForecastContainer\"\n  );\n\n  const ics = document.querySelector(\".ics-container\");\n  while (mainContent.firstChild) {\n    mainContent.removeChild(mainContent.firstChild);\n  }\n  if (hourlyData) {\n    hourlyData.remove();\n  }\n  if (ics) {\n    ics.remove();\n  }\n\n  const location = newLocation ? newLocation : \"helsinki\";\n\n  (0,_modules_getWeatherData__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(location);\n  searchBar.value = \"\";\n}\n\n//# sourceURL=webpack://api-demo-weather-app/./src/index.js?");

/***/ }),

/***/ "./src/modules/currentMiscWeatherItems.js":
/*!************************************************!*\
  !*** ./src/modules/currentMiscWeatherItems.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _img_sunriseSunset64_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/sunriseSunset64.png */ \"./src/img/sunriseSunset64.png\");\n/* harmony import */ var _img_humidity_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/humidity.png */ \"./src/img/humidity.png\");\n/* harmony import */ var _img_chanceOfRain_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/chanceOfRain.png */ \"./src/img/chanceOfRain.png\");\n/* harmony import */ var _img_wind_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/wind.png */ \"./src/img/wind.png\");\n/* harmony import */ var _img_uv_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/uv.png */ \"./src/img/uv.png\");\nconst container = document.querySelector(\"#pageContent\");\nconst mainContent = document.querySelector(\".mainContent\");\n\n\n\n\n\n\nfunction currentMiscItems(json) {\n  // CREATE ELEMENTS\n  const currentMiscWeatherItemsContainer = document.createElement(\"div\");\n  currentMiscWeatherItemsContainer.classList.add(\n    \"currentMiscWeatherItemsContainer\"\n  );\n\n  const currentMiscWeatherItemsContent = document.createElement(\"div\");\n  currentMiscWeatherItemsContent.classList.add(\n    \"currentMiscWeatherItemsContent\"\n  );\n  const currentMiscWeatherItemsHeading = document.createElement(\"h3\");\n  currentMiscWeatherItemsHeading.classList.add(\n    \"currentMiscWeatherItemsHeading\"\n  );\n\n  const sunriseSetContainer = document.createElement(\"div\");\n  sunriseSetContainer.classList.add(\"sunriseSetContainer\");\n  const sunriseSetContent = document.createElement(\"div\");\n  sunriseSetContent.classList.add(\"sunriseSetContent\");\n  const sunriseHeading = document.createElement(\"div\");\n  sunriseHeading.classList.add(\"miscHeading\");\n  const sunriseTime = document.createElement(\"div\");\n  sunriseTime.classList.add(\"sunriseSetText\");\n  const sunsetHeading = document.createElement(\"div\");\n  sunsetHeading.classList.add(\"miscHeading\");\n  const sunsetTime = document.createElement(\"div\");\n  sunsetTime.classList.add(\"sunriseSetText\");\n  const sunriseSetIcon = document.createElement(\"img\");\n  sunriseSetIcon.classList.add(\"sunriseSetIcon\");\n\n  sunriseSetContent.appendChild(sunriseHeading);\n  sunriseSetContent.appendChild(sunriseTime);\n  sunriseSetContent.appendChild(sunsetHeading);\n  sunriseSetContent.appendChild(sunsetTime);\n  sunriseSetContainer.appendChild(sunriseSetContent);\n  sunriseSetContainer.appendChild(sunriseSetIcon);\n\n  const humidityContent = document.createElement(\"div\");\n  humidityContent.classList.add(\"humidityContent\");\n  const humidityHeading = document.createElement(\"div\");\n  humidityHeading.classList.add(\"miscHeading\");\n  const humidityContainer = document.createElement(\"div\");\n  humidityContainer.classList.add(\"humidityContainer\");\n  const humidityIcon = document.createElement(\"img\");\n  humidityIcon.classList.add(\"miscIcon\");\n  const humidityPercentage = document.createElement(\"div\");\n  humidityPercentage.classList.add(\"miscText\");\n\n  humidityContainer.appendChild(humidityIcon);\n  humidityContainer.appendChild(humidityHeading);\n  humidityContent.appendChild(humidityContainer);\n  humidityContent.appendChild(humidityPercentage);\n\n  const rainContent = document.createElement(\"div\");\n  rainContent.classList.add(\"rainContent\");\n  const rainHeading = document.createElement(\"div\");\n  rainHeading.classList.add(\"miscHeading\");\n  const rainContainer = document.createElement(\"div\");\n  rainContainer.classList.add(\"humidityContainer\");\n  const rainIcon = document.createElement(\"img\");\n  rainIcon.classList.add(\"miscIcon\");\n  const chanceOfRain = document.createElement(\"div\");\n  chanceOfRain.classList.add(\"miscText\");\n\n  rainContainer.appendChild(rainIcon);\n  rainContainer.appendChild(rainHeading);\n  rainContent.appendChild(rainContainer);\n  rainContent.appendChild(chanceOfRain);\n\n  const windContent = document.createElement(\"div\");\n  windContent.classList.add(\"windContent\");\n  const windHeading = document.createElement(\"div\");\n  windHeading.classList.add(\"miscHeading\");\n  const windContainer = document.createElement(\"div\");\n  windContainer.classList.add(\"humidityContainer\");\n  const windIcon = document.createElement(\"img\");\n  windIcon.classList.add(\"miscIcon\");\n  const windSpeed = document.createElement(\"div\");\n  windSpeed.classList.add(\"miscText\");\n\n  windContainer.appendChild(windIcon);\n  windContainer.appendChild(windHeading);\n  windContent.appendChild(windContainer);\n  windContent.appendChild(windSpeed);\n\n  const uvContent = document.createElement(\"div\");\n  uvContent.classList.add(\"uvContent\");\n  const uvHeading = document.createElement(\"div\");\n  uvHeading.classList.add(\"miscHeading\");\n  const uvContainer = document.createElement(\"div\");\n  uvContainer.classList.add(\"humidityContainer\");\n  const uvIcon = document.createElement(\"img\");\n  uvIcon.classList.add(\"miscIcon\");\n  const uvIndex = document.createElement(\"div\");\n  uvIndex.classList.add(\"miscText\");\n\n  uvContainer.appendChild(uvIcon);\n  uvContainer.appendChild(uvHeading);\n  uvContent.appendChild(uvContainer);\n  uvContent.appendChild(uvIndex);\n\n  // ACCESS API AND FORMAT DATA\n\n  currentMiscWeatherItemsHeading.textContent = \"Current\";\n  sunriseHeading.textContent = `Sunrise:`;\n  sunsetHeading.textContent = `Sunset:`;\n  humidityHeading.textContent = `Humidity:`;\n  rainHeading.textContent = `Chance of Rain:`;\n  windHeading.textContent = `Wind speed:`;\n  uvHeading.textContent = `UV Index:`;\n\n  sunriseSetIcon.src = _img_sunriseSunset64_png__WEBPACK_IMPORTED_MODULE_0__;\n  humidityIcon.src = _img_humidity_png__WEBPACK_IMPORTED_MODULE_1__;\n  rainIcon.src = _img_chanceOfRain_png__WEBPACK_IMPORTED_MODULE_2__;\n  windIcon.src = _img_wind_png__WEBPACK_IMPORTED_MODULE_3__;\n  uvIcon.src = _img_uv_png__WEBPACK_IMPORTED_MODULE_4__;\n\n  sunriseTime.textContent = json.forecast.forecastday[0].astro.sunrise;\n  sunsetTime.textContent = json.forecast.forecastday[0].astro.sunset;\n  humidityPercentage.textContent = `${json.current.humidity} %`;\n  chanceOfRain.textContent = `${json.forecast.forecastday[0].day.daily_chance_of_rain} %`;\n  windSpeed.textContent = `${(json.current.wind_kph / 3.6).toFixed(1)} m/s`;\n  uvIndex.textContent = `${json.current.uv}`;\n\n  currentMiscWeatherItemsContent.appendChild(currentMiscWeatherItemsHeading);\n  currentMiscWeatherItemsContent.appendChild(sunriseSetContainer);\n  currentMiscWeatherItemsContent.appendChild(humidityContent);\n  currentMiscWeatherItemsContent.appendChild(rainContent);\n  currentMiscWeatherItemsContent.appendChild(windContent);\n  currentMiscWeatherItemsContent.appendChild(uvContent);\n\n  currentMiscWeatherItemsContainer.appendChild(currentMiscWeatherItemsContent);\n  mainContent.appendChild(currentMiscWeatherItemsContainer);\n  container.appendChild(mainContent);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (currentMiscItems);\n\n\n//# sourceURL=webpack://api-demo-weather-app/./src/modules/currentMiscWeatherItems.js?");

/***/ }),

/***/ "./src/modules/currentTimeAndTemperature.js":
/*!**************************************************!*\
  !*** ./src/modules/currentTimeAndTemperature.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst container = document.querySelector(\"#pageContent\");\nconst mainContent = document.querySelector(\".mainContent\");\n\n\nfunction currentTimeAndTemperature(json) {\n  // CREATE ELEMENTS\n  const dateTimeLocationContainer = document.createElement(\"div\");\n  dateTimeLocationContainer.classList.add(\"dateTimeLocationContainer\");\n\n  const localTime = document.createElement(\"div\");\n  localTime.classList.add(\"localTime\");\n\n  const currentDate = document.createElement(\"div\");\n  currentDate.classList.add(\"currentDate\");\n\n  const locationContainer = document.createElement(\"div\");\n  locationContainer.classList.add(\"locationContainer\");\n\n  const country = document.createElement(\"div\");\n  country.classList.add(\"country\");\n\n  const locationName = document.createElement(\"div\");\n  locationName.classList.add(\"locationName\");\n\n  const currentWeatherConditions = document.createElement(\"div\");\n  currentWeatherConditions.classList.add(\"currentWeatherConditions\");\n\n  const currentWeatherConditionsText = document.createElement(\"p\");\n  currentWeatherConditionsText.classList.add(\"currentWeatherConditionsText\");\n\n  const currentTempContainer = document.createElement(\"div\");\n  currentTempContainer.classList.add(\"currentTempContainer\");\n\n  const currentTemp = document.createElement(\"div\");\n  currentTemp.classList.add(\"currentTemp\");\n\n  const currentTempIcon = document.createElement(\"img\");\n  currentTempIcon.classList.add(\"weatherIcon\");\n\n  // ACCESS API AND FORMAT DATA\n  // Last Upadated\n  const timeForUpdate = new Date(json.current.last_updated);\n  const days = [\"Sun\", \"Mon\", \"Tue\", \"Wed\", \"Thu\", \"Fri\", \"Sat\"];\n  const weekDay = days[timeForUpdate.getDay()];\n  const day = timeForUpdate.getDate();\n  const month = timeForUpdate.getMonth() + 1;\n  const hours = timeForUpdate.getHours();\n  const minutePre = timeForUpdate.getMinutes();\n  const minutes = minutePre < 10 ? \"0\" + minutePre : minutePre;\n  const updated = `${weekDay} ${day}.${month} at ${hours}:${minutes}`;\n\n  // Add data to elements\n  currentTempIcon.src = json.current.condition.icon;\n  currentWeatherConditions.textContent = `Weather condition:`;\n  currentWeatherConditionsText.textContent = `${json.current.condition.text}`;\n  locationName.textContent = `${json.location.name}, ${json.location.country}`;\n  currentTemp.textContent = `${json.current.temp_c}°C`;\n  currentDate.textContent = `${updated}`;\n\n  // Update page\n  function updateLocation() {\n    // Clear page of old content\n    while (mainContent.firstChild) {\n      mainContent.removeChild(mainContent.firstChild);\n    }\n    // Add new content\n    dateTimeLocationContainer.appendChild(locationName);\n    dateTimeLocationContainer.appendChild(currentDate);\n    dateTimeLocationContainer.appendChild(currentTemp);\n    dateTimeLocationContainer.appendChild(currentTempIcon);\n    currentWeatherConditions.appendChild(currentWeatherConditionsText);\n    dateTimeLocationContainer.appendChild(currentWeatherConditions);\n\n    mainContent.appendChild(dateTimeLocationContainer);\n    container.appendChild(mainContent);\n  }\n  updateLocation();\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (currentTimeAndTemperature);\n\n//# sourceURL=webpack://api-demo-weather-app/./src/modules/currentTimeAndTemperature.js?");

/***/ }),

/***/ "./src/modules/getWeatherData.js":
/*!***************************************!*\
  !*** ./src/modules/getWeatherData.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _currentTimeAndTemperature__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./currentTimeAndTemperature */ \"./src/modules/currentTimeAndTemperature.js\");\n/* harmony import */ var _threeDayForecast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./threeDayForecast */ \"./src/modules/threeDayForecast.js\");\n/* harmony import */ var _currentMiscWeatherItems__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./currentMiscWeatherItems */ \"./src/modules/currentMiscWeatherItems.js\");\n/* harmony import */ var _hourlyForecasts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hourlyForecasts */ \"./src/modules/hourlyForecasts.js\");\n\n\n\n\n\nasync function getData(location) {\n  const KEY = \"35cc3556129f4283a8483652230511\";\n  try {\n    const response = await fetch(\n      `https://api.weatherapi.com/v1/forecast.json?key=${KEY}&q=${location}&days=3`,\n      { mode: \"cors\" }\n    );\n    let json = await response.json();\n    // View data structure\n    /* console.log(json); */\n\n    (0,_currentTimeAndTemperature__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(json);\n    (0,_threeDayForecast__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(json);\n    (0,_currentMiscWeatherItems__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(json);\n    (0,_hourlyForecasts__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(json);\n  } catch (error) {\n    console.log(error.message);\n  }\n}\n  \n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);\n\n//# sourceURL=webpack://api-demo-weather-app/./src/modules/getWeatherData.js?");

/***/ }),

/***/ "./src/modules/hourlyForecasts.js":
/*!****************************************!*\
  !*** ./src/modules/hourlyForecasts.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _icsDemoFootnote__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icsDemoFootnote */ \"./src/modules/icsDemoFootnote.js\");\n\nconst container = document.querySelector(\"#pageContent\");\n\nfunction hourlyForecasts(json) {\n  // CREATE ELEMENTS\n  const hourlyForecastContainer = document.createElement(\"div\");\n  hourlyForecastContainer.classList.add(\"hourlyForecastContainer\");\n  const hourlyForecastContent = document.createElement(\"div\");\n  hourlyForecastContent.classList.add(\"hourlyForecastContent\");\n\n  for (let i = 0; i < 24; i = i + 3) {\n    let dayContainer = document.createElement(\"div\");\n    let hour = document.createElement(\"div\");\n    let heading = document.createElement(\"h3\");\n    let time = document.createElement(\"p\");\n    let weatherIcon = document.createElement(\"img\");\n    let temp = document.createElement(\"div\");\n\n    dayContainer.className = `hour${[i]}Container`;\n    dayContainer.className = `hourContainer`;\n    hour.className = `hour${[i]}`;\n\n    const forecastTime = new Date(json.forecast.forecastday[1].hour[i].time);\n    const day = forecastTime.getDate();\n    const month = forecastTime.getMonth() + 1;\n    const hoursPre = forecastTime.getHours();\n    const hours = hoursPre < 10 ? \"0\" + hoursPre : hoursPre;\n    const minutePre = forecastTime.getMinutes();\n    const minutes = minutePre < 10 ? \"0\" + minutePre : minutePre;\n\n    heading.textContent = `${day}.${month}`;\n    time.textContent = `${hours}:${minutes}`;\n    weatherIcon.className = `hourIcon`;\n    weatherIcon.src = json.forecast.forecastday[1].hour[i].condition.icon;\n    temp.className = `hour${[i]}Temp`;\n    temp.textContent = `${json.forecast.forecastday[1].hour[i].temp_c}°C`;\n\n    hour.appendChild(heading);\n    hour.appendChild(time);\n    dayContainer.appendChild(hour);\n    dayContainer.appendChild(weatherIcon);\n    dayContainer.appendChild(temp);\n    hourlyForecastContent.appendChild(dayContainer);\n  }\n\n  hourlyForecastContainer.appendChild(hourlyForecastContent);\n  container.appendChild(hourlyForecastContainer);\n  container.appendChild((0,_icsDemoFootnote__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hourlyForecasts);\n\n//# sourceURL=webpack://api-demo-weather-app/./src/modules/hourlyForecasts.js?");

/***/ }),

/***/ "./src/modules/icsDemoFootnote.js":
/*!****************************************!*\
  !*** ./src/modules/icsDemoFootnote.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _img_iCeeqSolutionsLogo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/iCeeqSolutionsLogo.png */ \"./src/img/iCeeqSolutionsLogo.png\");\n\n\nfunction icsStatement() {\n  const container = document.createElement(\"div\");\n  const p = document.createElement(\"p\");\n  const a = document.createElement(\"a\");\n  const img = document.createElement(\"img\");\n  /* const logo = new Image(); */\n\n  container.className = \"ics-container\";\n  p.className = \"ics-p\";\n  p.textContent = \"API demo by: \";\n  a.href = \"https://iceeqsolutions.fi\";\n  a.target = \"_blank\";\n  img.className = \"ics-img\";\n  img.src = _img_iCeeqSolutionsLogo_png__WEBPACK_IMPORTED_MODULE_0__;\n\n  a.appendChild(img);\n  container.appendChild(p);\n  container.appendChild(a);\n\n  return container;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (icsStatement);\n\n\n//# sourceURL=webpack://api-demo-weather-app/./src/modules/icsDemoFootnote.js?");

/***/ }),

/***/ "./src/modules/threeDayForecast.js":
/*!*****************************************!*\
  !*** ./src/modules/threeDayForecast.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst container = document.querySelector(\"#pageContent\");\nconst mainContent = document.querySelector(\".mainContent\");\n\nfunction dailyWeatherForecast(json) {\n  // CREATE ELEMENTS\n  const dailyWeatherForecastContainer = document.createElement(\"div\");\n  dailyWeatherForecastContainer.classList.add(\"dailyWeatherForecastContainer\");\n\n  const dailyWeatherForecastContent = document.createElement(\"div\");\n  dailyWeatherForecastContent.classList.add(\"dailyWeatherForecastContent\");\n\n  const weatherDay0 = document.createElement(\"div\");\n  weatherDay0.classList.add(\"weatherDay0\");\n  const day0Container = document.createElement(\"div\");\n  day0Container.classList.add(\"dayContainer\");\n  const day0Date = document.createElement(\"div\");\n  day0Date.classList.add(\"dayDate\");\n  const day0Img = document.createElement(\"img\");\n  day0Img.classList.add(\"dayilyIcon\");\n  const day0HighLow = document.createElement(\"div\");\n  day0HighLow.classList.add(\"dayHighLow\");\n  const day0High = document.createElement(\"div\");\n  day0High.classList.add(\"dayHigh\");\n  const day0Low = document.createElement(\"div\");\n  day0Low.classList.add(\"dayLow\");\n\n  weatherDay0.appendChild(day0Date);\n  day0HighLow.appendChild(day0High);\n  day0HighLow.appendChild(day0Low);\n  day0Container.appendChild(day0HighLow);\n  day0Container.appendChild(day0Img);\n  weatherDay0.appendChild(day0Container);\n\n  const weatherDay1 = document.createElement(\"div\");\n  weatherDay1.classList.add(\"weatherDay1\");\n  const day1Container = document.createElement(\"div\");\n  day1Container.classList.add(\"dayContainer\");\n  const day1Date = document.createElement(\"div\");\n  day1Date.classList.add(\"dayDate\");\n  const day1Img = document.createElement(\"img\");\n  day1Img.classList.add(\"dayilyIcon\");\n  const day1HighLow = document.createElement(\"div\");\n  day1HighLow.classList.add(\"dayHighLow\");\n  const day1High = document.createElement(\"div\");\n  day1High.classList.add(\"dayHigh\");\n  const day1Low = document.createElement(\"div\");\n  day1Low.classList.add(\"dayLow\");\n\n  weatherDay1.appendChild(day1Date);\n  day1HighLow.appendChild(day1High);\n  day1HighLow.appendChild(day1Low);\n  day1Container.appendChild(day1HighLow);\n  day1Container.appendChild(day1Img);\n  weatherDay1.appendChild(day1Container);\n\n  const weatherDay2 = document.createElement(\"div\");\n  weatherDay2.classList.add(\"weatherDay2\");\n  const day2Container = document.createElement(\"div\");\n  day2Container.classList.add(\"dayContainer\");\n  const day2Date = document.createElement(\"div\");\n  day2Date.classList.add(\"dayDate\");\n  const day2Img = document.createElement(\"img\");\n  day2Img.classList.add(\"dayilyIcon\");\n  const day2HighLow = document.createElement(\"div\");\n  day2HighLow.classList.add(\"dayHighLow\");\n  const day2High = document.createElement(\"div\");\n  day2High.classList.add(\"dayHigh\");\n  const day2Low = document.createElement(\"div\");\n  day2Low.classList.add(\"dayLow\");\n\n  weatherDay2.appendChild(day2Date);\n  day2HighLow.appendChild(day2High);\n  day2HighLow.appendChild(day2Low);\n  day2Container.appendChild(day2HighLow);\n  day2Container.appendChild(day2Img);\n  weatherDay2.appendChild(day2Container);\n\n  // ACCESS API AND FORMAT DATA\n  const days = [\"Sun\", \"Mon\", \"Tue\", \"Wed\", \"Thu\", \"Fri\", \"Sat\"];\n\n  const date0 = new Date(json.forecast.forecastday[0].date);\n  const weekDay0 = days[date0.getDay()];\n  const day0 = date0.getDate();\n  const month0 = date0.getMonth() + 1;\n  const formattedDate0 = `${weekDay0} ${day0}.${month0}`;\n  day0Date.textContent = formattedDate0;\n\n  const date1 = new Date(json.forecast.forecastday[1].date);\n  const weekDay1 = days[date1.getDay()];\n  const day1 = date1.getDate();\n  const month1 = date1.getMonth() + 1;\n  const formattedDate1 = `${weekDay1} ${day1}.${month1}`;\n  day1Date.textContent = formattedDate1;\n\n  const date2 = new Date(json.forecast.forecastday[2].date);\n  const weekDay2 = days[date2.getDay()];\n  const day2 = date2.getDate();\n  const month2 = date2.getMonth() + 1;\n  const formattedDate2 = `${weekDay2} ${day2}.${month2}`;\n  day2Date.textContent = formattedDate2;\n\n  day0Img.src = json.forecast.forecastday[0].day.condition.icon;\n  day1Img.src = json.forecast.forecastday[1].day.condition.icon;\n  day2Img.src = json.forecast.forecastday[2].day.condition.icon;\n\n  day0High.textContent = `Max: ${json.forecast.forecastday[0].day.maxtemp_c}°C`;\n  day1High.textContent = `Max: ${json.forecast.forecastday[1].day.maxtemp_c}°C`;\n  day2High.textContent = `Max: ${json.forecast.forecastday[2].day.maxtemp_c}°C`;\n\n  day0Low.textContent = `Min: ${json.forecast.forecastday[0].day.mintemp_c}°C`;\n  day1Low.textContent = `Min: ${json.forecast.forecastday[1].day.mintemp_c}°C`;\n  day2Low.textContent = `Min: ${json.forecast.forecastday[2].day.mintemp_c}°C`;\n\n  dailyWeatherForecastContent.appendChild(weatherDay1);\n  dailyWeatherForecastContent.appendChild(weatherDay2);\n  dailyWeatherForecastContainer.appendChild(dailyWeatherForecastContent);\n  mainContent.appendChild(dailyWeatherForecastContainer);\n  container.appendChild(mainContent);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dailyWeatherForecast);\n\n\n//# sourceURL=webpack://api-demo-weather-app/./src/modules/threeDayForecast.js?");

/***/ }),

/***/ "./src/img/chanceOfRain.png":
/*!**********************************!*\
  !*** ./src/img/chanceOfRain.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"210b8eadfab639546b02.png\";\n\n//# sourceURL=webpack://api-demo-weather-app/./src/img/chanceOfRain.png?");

/***/ }),

/***/ "./src/img/humidity.png":
/*!******************************!*\
  !*** ./src/img/humidity.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b0875a8801a5a0da2cfe.png\";\n\n//# sourceURL=webpack://api-demo-weather-app/./src/img/humidity.png?");

/***/ }),

/***/ "./src/img/iCeeqSolutionsLogo.png":
/*!****************************************!*\
  !*** ./src/img/iCeeqSolutionsLogo.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7c076e598134f82e33d0.png\";\n\n//# sourceURL=webpack://api-demo-weather-app/./src/img/iCeeqSolutionsLogo.png?");

/***/ }),

/***/ "./src/img/raindrop.jpg":
/*!******************************!*\
  !*** ./src/img/raindrop.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1c0e0771b21a5bcf9119.jpg\";\n\n//# sourceURL=webpack://api-demo-weather-app/./src/img/raindrop.jpg?");

/***/ }),

/***/ "./src/img/sunriseSunset64.png":
/*!*************************************!*\
  !*** ./src/img/sunriseSunset64.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9fdbf8d97e398cb25992.png\";\n\n//# sourceURL=webpack://api-demo-weather-app/./src/img/sunriseSunset64.png?");

/***/ }),

/***/ "./src/img/uv.png":
/*!************************!*\
  !*** ./src/img/uv.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9b62720cc6aebbacffc2.png\";\n\n//# sourceURL=webpack://api-demo-weather-app/./src/img/uv.png?");

/***/ }),

/***/ "./src/img/wind.png":
/*!**************************!*\
  !*** ./src/img/wind.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f6fcc91ba00d368cd9ac.png\";\n\n//# sourceURL=webpack://api-demo-weather-app/./src/img/wind.png?");

/***/ }),

/***/ "./src/img/windCatcherLogo.png":
/*!*************************************!*\
  !*** ./src/img/windCatcherLogo.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2d0a9d41142fe2ba3eec.png\";\n\n//# sourceURL=webpack://api-demo-weather-app/./src/img/windCatcherLogo.png?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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