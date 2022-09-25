"use strict";
(self["webpackChunkodin_todo"] = self["webpackChunkodin_todo"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/ui/style.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/ui/style.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html, body, div, span, applet, object, iframe,\r\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\nb, u, i, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td,\r\narticle, aside, canvas, details, embed, \r\nfigure, figcaption, footer, header, hgroup, \r\nmenu, nav, output, ruby, section, summary,\r\ntime, mark, audio, video {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tborder: 0;\r\n\tfont-size: 100%;\r\n\tfont: inherit;\r\n\tvertical-align: baseline;\r\n}\r\n/* HTML5 display-role reset for older browsers */\r\narticle, aside, details, figcaption, figure, \r\nfooter, header, hgroup, menu, nav, section {\r\n\tdisplay: block;\r\n}\r\nbody {\r\n\tline-height: 1;\r\n}\r\nol, ul {\r\n\tlist-style: none;\r\n}\r\nblockquote, q {\r\n\tquotes: none;\r\n}\r\nblockquote:before, blockquote:after,\r\nq:before, q:after {\r\n\tcontent: '';\r\n\tcontent: none;\r\n}\r\ntable {\r\n\tborder-collapse: collapse;\r\n\tborder-spacing: 0;\r\n}\r\n\r\n:root {\r\n    --dark-grey: #757575;\r\n}\r\n\r\n.app {\r\n    display: grid;\r\n    grid-template-columns: 1fr 3fr;\r\n    grid-template-rows: 60px 1fr;\r\n    grid-template-areas:\r\n        \"header header\"\r\n        \"sidebar display\";\r\n    min-height: 100vh;\r\n}\r\n\r\n.header {\r\n    grid-area: header;\r\n    background-color: #38bdf8;\r\n}\r\n\r\n.sidebar {\r\n    grid-area: sidebar;\r\n    background-color: #f5f5f5;\r\n}\r\n\r\n.display {\r\n    grid-area: display;\r\n    background-color: white;\r\n}\r\n\r\n.projects-header {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.project {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n#modal {\r\n    position: fixed;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%) scale(0);\r\n    transition: 200ms ease-in-out;\r\n    border: 1px solid black;\r\n    border-radius: 10px;\r\n    z-index: 10;\r\n    background-color: white;\r\n    width: 500px;\r\n    max-width: 80%;\r\n  }\r\n  \r\n  #modal.active {\r\n    transform: translate(-50%, -50%) scale(1);\r\n  }\r\n\r\n  #overlay {\r\n    position: fixed;\r\n    opacity: 0;\r\n    transition: 200ms ease-in-out;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background-color: rgba(0, 0, 0, .5);\r\n    pointer-events: none;\r\n  }\r\n  \r\n  #overlay.active {\r\n    opacity: 1;\r\n    pointer-events: all;\r\n  }\r\n\r\n  .project-list li {\r\n    display: flex;\r\n  }\r\n\r\n  .active-project {\r\n    font-size: 140%;\r\n    font-weight: bolder;\r\n  }", "",{"version":3,"sources":["webpack://./src/ui/style.css"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;CAaC,SAAS;CACT,UAAU;CACV,SAAS;CACT,eAAe;CACf,aAAa;CACb,wBAAwB;AACzB;AACA,gDAAgD;AAChD;;CAEC,cAAc;AACf;AACA;CACC,cAAc;AACf;AACA;CACC,gBAAgB;AACjB;AACA;CACC,YAAY;AACb;AACA;;CAEC,WAAW;CACX,aAAa;AACd;AACA;CACC,yBAAyB;CACzB,iBAAiB;AAClB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,4BAA4B;IAC5B;;yBAEqB;IACrB,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;IACjB,yBAAyB;AAC7B;;AAEA;IACI,kBAAkB;IAClB,yBAAyB;AAC7B;;AAEA;IACI,kBAAkB;IAClB,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,eAAe;IACf,QAAQ;IACR,SAAS;IACT,yCAAyC;IACzC,6BAA6B;IAC7B,uBAAuB;IACvB,mBAAmB;IACnB,WAAW;IACX,uBAAuB;IACvB,YAAY;IACZ,cAAc;EAChB;;EAEA;IACE,yCAAyC;EAC3C;;EAEA;IACE,eAAe;IACf,UAAU;IACV,6BAA6B;IAC7B,MAAM;IACN,OAAO;IACP,QAAQ;IACR,SAAS;IACT,mCAAmC;IACnC,oBAAoB;EACtB;;EAEA;IACE,UAAU;IACV,mBAAmB;EACrB;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,eAAe;IACf,mBAAmB;EACrB","sourcesContent":["html, body, div, span, applet, object, iframe,\r\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\nb, u, i, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td,\r\narticle, aside, canvas, details, embed, \r\nfigure, figcaption, footer, header, hgroup, \r\nmenu, nav, output, ruby, section, summary,\r\ntime, mark, audio, video {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tborder: 0;\r\n\tfont-size: 100%;\r\n\tfont: inherit;\r\n\tvertical-align: baseline;\r\n}\r\n/* HTML5 display-role reset for older browsers */\r\narticle, aside, details, figcaption, figure, \r\nfooter, header, hgroup, menu, nav, section {\r\n\tdisplay: block;\r\n}\r\nbody {\r\n\tline-height: 1;\r\n}\r\nol, ul {\r\n\tlist-style: none;\r\n}\r\nblockquote, q {\r\n\tquotes: none;\r\n}\r\nblockquote:before, blockquote:after,\r\nq:before, q:after {\r\n\tcontent: '';\r\n\tcontent: none;\r\n}\r\ntable {\r\n\tborder-collapse: collapse;\r\n\tborder-spacing: 0;\r\n}\r\n\r\n:root {\r\n    --dark-grey: #757575;\r\n}\r\n\r\n.app {\r\n    display: grid;\r\n    grid-template-columns: 1fr 3fr;\r\n    grid-template-rows: 60px 1fr;\r\n    grid-template-areas:\r\n        \"header header\"\r\n        \"sidebar display\";\r\n    min-height: 100vh;\r\n}\r\n\r\n.header {\r\n    grid-area: header;\r\n    background-color: #38bdf8;\r\n}\r\n\r\n.sidebar {\r\n    grid-area: sidebar;\r\n    background-color: #f5f5f5;\r\n}\r\n\r\n.display {\r\n    grid-area: display;\r\n    background-color: white;\r\n}\r\n\r\n.projects-header {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.project {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n#modal {\r\n    position: fixed;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%) scale(0);\r\n    transition: 200ms ease-in-out;\r\n    border: 1px solid black;\r\n    border-radius: 10px;\r\n    z-index: 10;\r\n    background-color: white;\r\n    width: 500px;\r\n    max-width: 80%;\r\n  }\r\n  \r\n  #modal.active {\r\n    transform: translate(-50%, -50%) scale(1);\r\n  }\r\n\r\n  #overlay {\r\n    position: fixed;\r\n    opacity: 0;\r\n    transition: 200ms ease-in-out;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background-color: rgba(0, 0, 0, .5);\r\n    pointer-events: none;\r\n  }\r\n  \r\n  #overlay.active {\r\n    opacity: 1;\r\n    pointer-events: all;\r\n  }\r\n\r\n  .project-list li {\r\n    display: flex;\r\n  }\r\n\r\n  .active-project {\r\n    font-size: 140%;\r\n    font-weight: bolder;\r\n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/ui/style.css":
/*!**************************!*\
  !*** ./src/ui/style.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/ui/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var _ui_UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui/UI */ "./src/ui/UI.js");
/* harmony import */ var _controllers_ProjectsController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controllers/ProjectsController */ "./src/controllers/ProjectsController.js");
/* harmony import */ var _logic_ToDoApp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logic/ToDoApp */ "./src/logic/ToDoApp.js");




class App {
    constructor() {
        this.projectsModel = new _logic_ToDoApp__WEBPACK_IMPORTED_MODULE_2__["default"]()

        this.ui = new _ui_UI__WEBPACK_IMPORTED_MODULE_0__.UI()
        this.projectsController = new _controllers_ProjectsController__WEBPACK_IMPORTED_MODULE_1__["default"](this.projectsModel, this.ui.projectsView)
    }
} 

/***/ }),

/***/ "./src/controllers/ProjectsController.js":
/*!***********************************************!*\
  !*** ./src/controllers/ProjectsController.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProjectsController)
/* harmony export */ });
/* harmony import */ var _logic_ToDoApp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../logic/ToDoApp */ "./src/logic/ToDoApp.js");
/* harmony import */ var _logic_ToDoList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../logic/ToDoList */ "./src/logic/ToDoList.js");
/* harmony import */ var _ui_ProjectsView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/ProjectsView */ "./src/ui/ProjectsView.js");
/* harmony import */ var _utility_idGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utility/idGenerator */ "./src/utility/idGenerator.js");





class ProjectsController {
    constructor(projectsModel, projectsView) {
        this.model = projectsModel
        this.view = projectsView
        this.setupAddProjectButton()
        this.setupProjectSelection()
        this.setupEditProjectButton()
        this.setupDeleteProjectButton()
        this.renderProjects()
    }
    
    addProject(name) {
        const newList = new _logic_ToDoList__WEBPACK_IMPORTED_MODULE_1__["default"]((0,_utility_idGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(), name)
        this.model.addToDoList(newList)
        this.renderProjects()
    }

    editProject(id, newName) {
        this.model.editToDoList(id, newName)
        this.renderProjects()
    }

    removeProject(id) {
        this.model.removeToDoList(id)
        this.renderProjects()
    }

    selectActiveProject(id) {
        this.model.setActiveList(id)
        this.renderProjects()
    }

    setupAddProjectButton() {
        this.view.bindAddProjectButton(name => this.addProject(name))
    }

    setupEditProjectButton() {
        this.view.bindEditProjectButton((id, newName) => this.editProject(id, newName))
    }

    setupDeleteProjectButton() {
        this.view.bindDeleteProjectButton(id => this.removeProject(id))
    }

    setupProjectSelection() {
        this.view.bindProjectSelection(selectedListId => this.selectActiveProject(selectedListId))
    }

    renderProjects() {
        this.view.render(this.model.toDoLists);
        if (this.model.currentList != null) {
            this.view.highlightProject(this.model.currentList.id)
        }
    }
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ui_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui/style.css */ "./src/ui/style.css");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App */ "./src/App.js");



const app = new _App__WEBPACK_IMPORTED_MODULE_1__["default"]();
console.log(app.ui.projectsView.projectCreationForm.getAddProjectButton())

/***/ }),

/***/ "./src/logic/ToDoApp.js":
/*!******************************!*\
  !*** ./src/logic/ToDoApp.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ToDoApp)
/* harmony export */ });
/* harmony import */ var _ToDoList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ToDoList */ "./src/logic/ToDoList.js");
/* harmony import */ var _utility_idGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utility/idGenerator */ "./src/utility/idGenerator.js");



class ToDoApp {
    constructor() {
        this.toDoLists = []
        const defaultList = new _ToDoList__WEBPACK_IMPORTED_MODULE_0__["default"]((0,_utility_idGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(), "Default List")
        this.addToDoList(defaultList)
        this.currentList = this.toDoLists[0]
    }

    addToDoList(toDoList) {
        this.toDoLists.push(toDoList)
        if (this.toDoLists.length == 1) {
            this.currentList = this.toDoLists[0]
        }
    }

    removeToDoList(id) {
        this.toDoLists = this.toDoLists.filter(toDoList => toDoList.id !== id)
        if (this.toDoLists.length > 0) {
            this.currentList = this.toDoLists[0]
        } else {
            this.currentList = null
        }
    }

    getToDoList(id) {
        return this.toDoLists.find(list => list.id == id)
    }

    editToDoList(id, newTitle) {
        const listBeingEdited = this.getToDoList(id)
        if (!listBeingEdited) return
        listBeingEdited.setTitle(newTitle)
    }

    setActiveList(id) {
        const selectedList = this.getToDoList(id)
        if (selectedList) {
            this.currentList = selectedList
        }

    }
}

/***/ }),

/***/ "./src/logic/ToDoList.js":
/*!*******************************!*\
  !*** ./src/logic/ToDoList.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ToDoList)
/* harmony export */ });
class ToDoList {
    constructor(id, title) {
        this.id = id
        this.title = title
        this.toDoItems = []
    }

    addToDo(todo) {
        this.toDoItems.push(todo)
    }

    removeToDo(toDoId) {
        this.toDoItems = this.toDoItems.filter(toDoItem => toDoItem.id !== toDoId)
    }

    setTitle(title) {
        this.title = title
    }
}

/***/ }),

/***/ "./src/ui/Header.js":
/*!**************************!*\
  !*** ./src/ui/Header.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createHeader)
/* harmony export */ });
function createHeader(parentElement, appName) {
    const header = document.createElement('h1')
    header.textContent = appName
    parentElement.appendChild(header)
    return header
}

/***/ }),

/***/ "./src/ui/ListView.js":
/*!****************************!*\
  !*** ./src/ui/ListView.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ListView)
/* harmony export */ });
function taskItemFactory(id, title, dueDate, priority, description) {
    const taskItem = document.createElement('li')
    taskItem.innerHTML = `
        <input type="checkbox"/>
        <h4 class="task-name>${title}</h4>
        <button class="task-description"></button>
    `
}

class ListView {
    constructor(parentElement) {
        parentElement.innerHTML += `
            <h2 class="project-name-heading"></h2>
            <ul class="to-do-list"></ul>
            <button class="add-to-do">Add Task</button>
        `
        this.heading = parentElement.querySelector('h2')
        this.listElement = parentElement.querySelector('.to-do-list')
        this.addProjectButton = parentElement.querySelector('.add-to-do')
    }

    render(tasks) {
        this._clear()
        tasks.forEach(task => this._addTask())
    }

    _addTask(id, title, dueDate, priority, description) {
        this.listElement.appendChild(taskItemFactory(id, title, dueDate, priority, description))
    }

    _clear() {
        this.listElement.innerHTML = ''
    }
}

/***/ }),

/***/ "./src/ui/Popup.js":
/*!*************************!*\
  !*** ./src/ui/Popup.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ setupPopup),
/* harmony export */   "setModalContent": () => (/* binding */ setModalContent)
/* harmony export */ });
function setupPopup() {
    const body = document.querySelector('body')
    const popupWrapper = createPopupWrapper()
    const overlay = createOverlay()

    body.appendChild(popupWrapper)
    body.appendChild(overlay)

    addOpenPopupEventListener()
    addClosePopupEventListener()
    closeModalByClickingOutsideIt()
}

function createPopupWrapper() {
    const popupWrapper = document.createElement('div')
    popupWrapper.id = 'modal'
    return popupWrapper
}

function createOverlay() {
    const overlay = document.createElement('div')
    overlay.id = 'overlay'
    return overlay
}

function openModal() {
    const modal = document.querySelector('#modal')
    const overlay = document.querySelector('#overlay')
    
    modal.classList.add('active')
    overlay.classList.add('active')
  }
  
function closeModal() {
    const modal = document.querySelector('#modal')
    const overlay = document.querySelector('#overlay')

    modal.classList.remove('active')
    overlay.classList.remove('active')
}

function addOpenPopupEventListener() {
    const html = document.querySelector('html')
    html.addEventListener('click', e => {
        let openPopupButton = e.target.closest('.open-popup')
        if (!openPopupButton) return
        openModal()
    })
}

function addClosePopupEventListener() {
    const html = document.querySelector('html')
    const modal = document.querySelector('#modal')
    html.addEventListener('click', e => {
        let closePopupButton = e.target.closest('.close-popup')
        if (!closePopupButton) return
        closeModal()
        modal.innerHTML = ''
    })
}

function setModalContent(elementToAppend) {
    const modal = document.querySelector('#modal')
    modal.innerHTML = ''
    modal.appendChild(elementToAppend)
}

function closeModalByClickingOutsideIt() {
    const overlay = document.querySelector('#overlay')
    overlay.addEventListener('click', e => {
        closeModal()
    })
}

function isModalActive() {
    const modal = document.querySelector('#modal')
    return modal.classList.contains('active')
}

/***/ }),

/***/ "./src/ui/ProjectsView.js":
/*!********************************!*\
  !*** ./src/ui/ProjectsView.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProjectsView)
/* harmony export */ });
/* harmony import */ var _Popup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup */ "./src/ui/Popup.js");
/* harmony import */ var _controllers_ProjectsController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/ProjectsController */ "./src/controllers/ProjectsController.js");



function projectItemFactory(id, projectName) {
    const projectItem = document.createElement('li')
    projectItem.innerHTML = `
        <h4 class="project-name">${projectName}</h4>
        <button class="edit-project open-popup">Edit</button>
        <button class="delete-project">Delete</button>
    `
    projectItem.setAttribute('id', id)
    return projectItem
}

class ProjectsView {
    constructor(parentElement) {
        parentElement.innerHTML += `
        <h3>Projects</h3>
        <ul class="project-list"></ul>
        <button class="add open-popup">Add</button>
    `
    this.heading = parentElement.querySelector('h3')
    this.listElement = parentElement.querySelector('.project-list')
    this.addProjectButton = parentElement.querySelector('.add')
    this.projectCreationForm = new ProjectCreationForm()
    this.projectEditionForm = new ProjectEditionForm()
    this._setupAddProjectButton()
    this._setupEditProjectButton()
    }

    render(projects) {
        this._clear()
        projects.forEach(project => this._addProject(project.id, project.title))
    }

    _addProject(id, name) {
        this.listElement.appendChild(projectItemFactory(id, name))
    }

    _clear() {
        this.listElement.innerHTML = ''
    }

    _setupAddProjectButton() {
        this.addProjectButton.addEventListener('click', e => {
            this.projectCreationForm.clearInput()
            ;(0,_Popup__WEBPACK_IMPORTED_MODULE_0__.setModalContent)(this.projectCreationForm.element)
        })
    }

    _setupEditProjectButton() {
        this.listElement.addEventListener('click', e => {
            this.projectEditionForm.clearInput()
            const editProjectButton = e.target.closest('button.edit-project')
            if (!editProjectButton) return
            ;(0,_Popup__WEBPACK_IMPORTED_MODULE_0__.setModalContent)(this.projectEditionForm.element)
            this.idOfProjectBeingEditted = e.target.closest('li').id
        })
    }

    highlightProject(id) {
        const activeProject = this.listElement.querySelector(`li[id="${id}"]`)
        activeProject.classList.add('active-project')
    }

    bindAddProjectButton(action) {
        const addProjectButton = this.projectCreationForm.getAddProjectButton()
        addProjectButton.addEventListener('click', e => action(this.projectCreationForm.getInputFieldValue()))
    }

    bindEditProjectButton(action) {
        const editProjectButton = this.projectEditionForm.getEditProjectButton()
        editProjectButton.addEventListener('click', e => {
            action(this.idOfProjectBeingEditted, this.projectEditionForm.getInputFieldValue())
        })
    }

    bindDeleteProjectButton(action) {
        this.listElement.addEventListener('click', e => {
            const pressedDeleteButton = e.target.closest('.delete-project')
            if (!pressedDeleteButton) return
            const pressedListItem = pressedDeleteButton.closest('li')
            action(pressedListItem.id)
        })
    }

    bindProjectSelection(action) {
        this.listElement.addEventListener('click', e => {
            let projectListItem = e.target.closest('li')
            if (!projectListItem) return
            if (e.target.tagName.toLowerCase() === 'button') return
            action(projectListItem.id)
        })
    }
}

class ProjectCreationForm {
    constructor() {
        this.element = this._createElement()
    }

    _createElement() {
        const projectCreationForm = document.createElement('div')
        projectCreationForm.classList.add('project-creation')
    
        projectCreationForm.innerHTML = `
            <label for="project-name-input">Project name:</label>
            <input id="project-name-input" type="text"/>
            <button class="add-project close-popup">Add</button>
            <button class="close-popup">Cancel</button>
        `
        return projectCreationForm
    }

    clearInput() {
        const formInput = this.element.querySelector('#project-name-input')
        formInput.value = ''
    }

    getAddProjectButton() {
        return this.element.querySelector('.add-project')
    }

    getInputFieldValue() {
        return this.element.querySelector('#project-name-input').value

    }
}

class ProjectEditionForm {
    constructor() {
        this.element = this._createElement()
    }

    _createElement() {
        const projectEditionForm = document.createElement('div')
        projectEditionForm.classList.add('project-edition')
    
        projectEditionForm.innerHTML = `
            <label for="project-name-input">New project name:</label>
            <input id="project-name-input" type="text"/>
            <button class="edit-project close-popup">Edit</button>
            <button class="close-popup">Cancel</button>
        `
        return projectEditionForm
    }

    clearInput() {
        const formInput = this.element.querySelector('#project-name-input')
        formInput.value = ''
    }

    getEditProjectButton() {
        return this.element.querySelector('.edit-project')
    }

    getInputFieldValue() {
        return this.element.querySelector('#project-name-input').value
    }
}

/***/ }),

/***/ "./src/ui/UI.js":
/*!**********************!*\
  !*** ./src/ui/UI.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UI": () => (/* binding */ UI)
/* harmony export */ });
/* harmony import */ var _initLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initLayout */ "./src/ui/initLayout.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ "./src/ui/Header.js");
/* harmony import */ var _ProjectsView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProjectsView */ "./src/ui/ProjectsView.js");
/* harmony import */ var _ListView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ListView */ "./src/ui/ListView.js");
/* harmony import */ var _Popup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Popup */ "./src/ui/Popup.js");






class UI {
    constructor() {
        (0,_initLayout__WEBPACK_IMPORTED_MODULE_0__["default"])(document.querySelector('body'))
        ;(0,_Popup__WEBPACK_IMPORTED_MODULE_4__["default"])()
        this.header = (0,_Header__WEBPACK_IMPORTED_MODULE_1__["default"])(document.querySelector('.header'), 'ToDo')
        this.projectsView = new _ProjectsView__WEBPACK_IMPORTED_MODULE_2__["default"](document.querySelector('.sidebar'))
        this.listView = new _ListView__WEBPACK_IMPORTED_MODULE_3__["default"](document.querySelector('.display'))
    }
}

/***/ }),

/***/ "./src/ui/initLayout.js":
/*!******************************!*\
  !*** ./src/ui/initLayout.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ initLayout)
/* harmony export */ });
function initLayout(parentElement) {
    const appWrapper = document.createElement('div')
    appWrapper.classList.add('app')
    
    const headerWrapper = document.createElement('div')
    headerWrapper.classList.add('header')

    const sidebarWrapper = document.createElement('div')
    sidebarWrapper.classList.add('sidebar')
    
    const displayWrapper = document.createElement('div')
    displayWrapper.classList.add('display')
    
    appWrapper.appendChild(headerWrapper)
    appWrapper.appendChild(sidebarWrapper)
    appWrapper.appendChild(displayWrapper)
    parentElement.appendChild(appWrapper)
}

/***/ }),

/***/ "./src/utility/idGenerator.js":
/*!************************************!*\
  !*** ./src/utility/idGenerator.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUniqueId)
/* harmony export */ });
function getUniqueId() {
    return BigInt(Date.now()).toString()
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3RXlDO0FBQ3lCO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLFlBQVk7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSx3REFBZTtBQUMzQixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHdEQUFlO0FBQzNCO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLHVFQUF1RSxHQUFHO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvSnFDO0FBQ0Y7QUFDTTtBQUNSO0FBQ0Q7QUFDaEM7QUFDTztBQUNQO0FBQ0EsUUFBUSx1REFBVTtBQUNsQixRQUFRLG1EQUFVO0FBQ2xCLHNCQUFzQixtREFBWTtBQUNsQyxnQ0FBZ0MscURBQVk7QUFDNUMsNEJBQTRCLGlEQUFRO0FBQ3BDO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDZGU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2pCZTtBQUNmO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvdWkvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL3VpL3N0eWxlLmNzcz83NmY3Iiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL0FwcC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvY29udHJvbGxlcnMvUHJvamVjdHNDb250cm9sbGVyLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvbG9naWMvVG9Eb0FwcC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvbG9naWMvVG9Eb0xpc3QuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL3VpL0hlYWRlci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvdWkvTGlzdFZpZXcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL3VpL1BvcHVwLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy91aS9Qcm9qZWN0c1ZpZXcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL3VpL1VJLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy91aS9pbml0TGF5b3V0LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy91dGlsaXR5L2lkR2VuZXJhdG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcclxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXHJcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxyXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcclxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxyXFxuYiwgdSwgaSwgY2VudGVyLFxcclxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxyXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxyXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxyXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxcclxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXFxyXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxyXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXHJcXG5cXHRtYXJnaW46IDA7XFxyXFxuXFx0cGFkZGluZzogMDtcXHJcXG5cXHRib3JkZXI6IDA7XFxyXFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcclxcblxcdGZvbnQ6IGluaGVyaXQ7XFxyXFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcclxcbn1cXHJcXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxyXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXFxyXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXHJcXG5cXHRkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuYm9keSB7XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxyXFxufVxcclxcbm9sLCB1bCB7XFxyXFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuYmxvY2txdW90ZSwgcSB7XFxyXFxuXFx0cXVvdGVzOiBub25lO1xcclxcbn1cXHJcXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXHJcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxyXFxuXFx0Y29udGVudDogJyc7XFxyXFxuXFx0Y29udGVudDogbm9uZTtcXHJcXG59XFxyXFxudGFibGUge1xcclxcblxcdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxyXFxuXFx0Ym9yZGVyLXNwYWNpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbjpyb290IHtcXHJcXG4gICAgLS1kYXJrLWdyZXk6ICM3NTc1NzU7XFxyXFxufVxcclxcblxcclxcbi5hcHAge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNjBweCAxZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxyXFxuICAgICAgICBcXFwiaGVhZGVyIGhlYWRlclxcXCJcXHJcXG4gICAgICAgIFxcXCJzaWRlYmFyIGRpc3BsYXlcXFwiO1xcclxcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciB7XFxyXFxuICAgIGdyaWQtYXJlYTogaGVhZGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzhiZGY4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZWJhciB7XFxyXFxuICAgIGdyaWQtYXJlYTogc2lkZWJhcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcXHJcXG59XFxyXFxuXFxyXFxuLmRpc3BsYXkge1xcclxcbiAgICBncmlkLWFyZWE6IGRpc3BsYXk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdHMtaGVhZGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuI21vZGFsIHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB0b3A6IDUwJTtcXHJcXG4gICAgbGVmdDogNTAlO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgwKTtcXHJcXG4gICAgdHJhbnNpdGlvbjogMjAwbXMgZWFzZS1pbi1vdXQ7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICB6LWluZGV4OiAxMDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIHdpZHRoOiA1MDBweDtcXHJcXG4gICAgbWF4LXdpZHRoOiA4MCU7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gICNtb2RhbC5hY3RpdmUge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNvdmVybGF5IHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgICB0cmFuc2l0aW9uOiAyMDBtcyBlYXNlLWluLW91dDtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC41KTtcXHJcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gICNvdmVybGF5LmFjdGl2ZSB7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucHJvamVjdC1saXN0IGxpIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5hY3RpdmUtcHJvamVjdCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTQwJTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXHJcXG4gIH1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvdWkvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Ozs7Ozs7Ozs7O0NBYUMsU0FBUztDQUNULFVBQVU7Q0FDVixTQUFTO0NBQ1QsZUFBZTtDQUNmLGFBQWE7Q0FDYix3QkFBd0I7QUFDekI7QUFDQSxnREFBZ0Q7QUFDaEQ7O0NBRUMsY0FBYztBQUNmO0FBQ0E7Q0FDQyxjQUFjO0FBQ2Y7QUFDQTtDQUNDLGdCQUFnQjtBQUNqQjtBQUNBO0NBQ0MsWUFBWTtBQUNiO0FBQ0E7O0NBRUMsV0FBVztDQUNYLGFBQWE7QUFDZDtBQUNBO0NBQ0MseUJBQXlCO0NBQ3pCLGlCQUFpQjtBQUNsQjs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsNEJBQTRCO0lBQzVCOzt5QkFFcUI7SUFDckIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsUUFBUTtJQUNSLFNBQVM7SUFDVCx5Q0FBeUM7SUFDekMsNkJBQTZCO0lBQzdCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osY0FBYztFQUNoQjs7RUFFQTtJQUNFLHlDQUF5QztFQUMzQzs7RUFFQTtJQUNFLGVBQWU7SUFDZixVQUFVO0lBQ1YsNkJBQTZCO0lBQzdCLE1BQU07SUFDTixPQUFPO0lBQ1AsUUFBUTtJQUNSLFNBQVM7SUFDVCxtQ0FBbUM7SUFDbkMsb0JBQW9CO0VBQ3RCOztFQUVBO0lBQ0UsVUFBVTtJQUNWLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGVBQWU7SUFDZixtQkFBbUI7RUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcclxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXHJcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxyXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcclxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxyXFxuYiwgdSwgaSwgY2VudGVyLFxcclxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxyXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxyXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxyXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxcclxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXFxyXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxyXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXHJcXG5cXHRtYXJnaW46IDA7XFxyXFxuXFx0cGFkZGluZzogMDtcXHJcXG5cXHRib3JkZXI6IDA7XFxyXFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcclxcblxcdGZvbnQ6IGluaGVyaXQ7XFxyXFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcclxcbn1cXHJcXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxyXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXFxyXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXHJcXG5cXHRkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuYm9keSB7XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxyXFxufVxcclxcbm9sLCB1bCB7XFxyXFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuYmxvY2txdW90ZSwgcSB7XFxyXFxuXFx0cXVvdGVzOiBub25lO1xcclxcbn1cXHJcXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXHJcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxyXFxuXFx0Y29udGVudDogJyc7XFxyXFxuXFx0Y29udGVudDogbm9uZTtcXHJcXG59XFxyXFxudGFibGUge1xcclxcblxcdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxyXFxuXFx0Ym9yZGVyLXNwYWNpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbjpyb290IHtcXHJcXG4gICAgLS1kYXJrLWdyZXk6ICM3NTc1NzU7XFxyXFxufVxcclxcblxcclxcbi5hcHAge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNjBweCAxZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxyXFxuICAgICAgICBcXFwiaGVhZGVyIGhlYWRlclxcXCJcXHJcXG4gICAgICAgIFxcXCJzaWRlYmFyIGRpc3BsYXlcXFwiO1xcclxcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciB7XFxyXFxuICAgIGdyaWQtYXJlYTogaGVhZGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzhiZGY4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZWJhciB7XFxyXFxuICAgIGdyaWQtYXJlYTogc2lkZWJhcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcXHJcXG59XFxyXFxuXFxyXFxuLmRpc3BsYXkge1xcclxcbiAgICBncmlkLWFyZWE6IGRpc3BsYXk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdHMtaGVhZGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuI21vZGFsIHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB0b3A6IDUwJTtcXHJcXG4gICAgbGVmdDogNTAlO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgwKTtcXHJcXG4gICAgdHJhbnNpdGlvbjogMjAwbXMgZWFzZS1pbi1vdXQ7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICB6LWluZGV4OiAxMDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIHdpZHRoOiA1MDBweDtcXHJcXG4gICAgbWF4LXdpZHRoOiA4MCU7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gICNtb2RhbC5hY3RpdmUge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNvdmVybGF5IHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgICB0cmFuc2l0aW9uOiAyMDBtcyBlYXNlLWluLW91dDtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC41KTtcXHJcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gICNvdmVybGF5LmFjdGl2ZSB7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucHJvamVjdC1saXN0IGxpIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5hY3RpdmUtcHJvamVjdCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTQwJTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXHJcXG4gIH1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IFVJIH0gZnJvbSBcIi4vdWkvVUlcIjtcclxuaW1wb3J0IFByb2plY3RzQ29udHJvbGxlciBmcm9tIFwiLi9jb250cm9sbGVycy9Qcm9qZWN0c0NvbnRyb2xsZXJcIjtcclxuaW1wb3J0IFRvRG9BcHAgZnJvbSBcIi4vbG9naWMvVG9Eb0FwcFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMucHJvamVjdHNNb2RlbCA9IG5ldyBUb0RvQXBwKClcclxuXHJcbiAgICAgICAgdGhpcy51aSA9IG5ldyBVSSgpXHJcbiAgICAgICAgdGhpcy5wcm9qZWN0c0NvbnRyb2xsZXIgPSBuZXcgUHJvamVjdHNDb250cm9sbGVyKHRoaXMucHJvamVjdHNNb2RlbCwgdGhpcy51aS5wcm9qZWN0c1ZpZXcpXHJcbiAgICB9XHJcbn0gIiwiaW1wb3J0IFRvRG9BcHAgZnJvbSBcIi4uL2xvZ2ljL1RvRG9BcHBcIlxyXG5pbXBvcnQgVG9Eb0xpc3QgZnJvbSBcIi4uL2xvZ2ljL1RvRG9MaXN0XCJcclxuaW1wb3J0IFByb2plY3RzVmlldyBmcm9tIFwiLi4vdWkvUHJvamVjdHNWaWV3XCJcclxuaW1wb3J0IGdldFVuaXF1ZUlkIGZyb20gXCIuLi91dGlsaXR5L2lkR2VuZXJhdG9yXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3RzQ29udHJvbGxlciB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9qZWN0c01vZGVsLCBwcm9qZWN0c1ZpZXcpIHtcclxuICAgICAgICB0aGlzLm1vZGVsID0gcHJvamVjdHNNb2RlbFxyXG4gICAgICAgIHRoaXMudmlldyA9IHByb2plY3RzVmlld1xyXG4gICAgICAgIHRoaXMuc2V0dXBBZGRQcm9qZWN0QnV0dG9uKClcclxuICAgICAgICB0aGlzLnNldHVwUHJvamVjdFNlbGVjdGlvbigpXHJcbiAgICAgICAgdGhpcy5zZXR1cEVkaXRQcm9qZWN0QnV0dG9uKClcclxuICAgICAgICB0aGlzLnNldHVwRGVsZXRlUHJvamVjdEJ1dHRvbigpXHJcbiAgICAgICAgdGhpcy5yZW5kZXJQcm9qZWN0cygpXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGFkZFByb2plY3QobmFtZSkge1xyXG4gICAgICAgIGNvbnN0IG5ld0xpc3QgPSBuZXcgVG9Eb0xpc3QoZ2V0VW5pcXVlSWQoKSwgbmFtZSlcclxuICAgICAgICB0aGlzLm1vZGVsLmFkZFRvRG9MaXN0KG5ld0xpc3QpXHJcbiAgICAgICAgdGhpcy5yZW5kZXJQcm9qZWN0cygpXHJcbiAgICB9XHJcblxyXG4gICAgZWRpdFByb2plY3QoaWQsIG5ld05hbWUpIHtcclxuICAgICAgICB0aGlzLm1vZGVsLmVkaXRUb0RvTGlzdChpZCwgbmV3TmFtZSlcclxuICAgICAgICB0aGlzLnJlbmRlclByb2plY3RzKClcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVQcm9qZWN0KGlkKSB7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5yZW1vdmVUb0RvTGlzdChpZClcclxuICAgICAgICB0aGlzLnJlbmRlclByb2plY3RzKClcclxuICAgIH1cclxuXHJcbiAgICBzZWxlY3RBY3RpdmVQcm9qZWN0KGlkKSB7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5zZXRBY3RpdmVMaXN0KGlkKVxyXG4gICAgICAgIHRoaXMucmVuZGVyUHJvamVjdHMoKVxyXG4gICAgfVxyXG5cclxuICAgIHNldHVwQWRkUHJvamVjdEJ1dHRvbigpIHtcclxuICAgICAgICB0aGlzLnZpZXcuYmluZEFkZFByb2plY3RCdXR0b24obmFtZSA9PiB0aGlzLmFkZFByb2plY3QobmFtZSkpXHJcbiAgICB9XHJcblxyXG4gICAgc2V0dXBFZGl0UHJvamVjdEJ1dHRvbigpIHtcclxuICAgICAgICB0aGlzLnZpZXcuYmluZEVkaXRQcm9qZWN0QnV0dG9uKChpZCwgbmV3TmFtZSkgPT4gdGhpcy5lZGl0UHJvamVjdChpZCwgbmV3TmFtZSkpXHJcbiAgICB9XHJcblxyXG4gICAgc2V0dXBEZWxldGVQcm9qZWN0QnV0dG9uKCkge1xyXG4gICAgICAgIHRoaXMudmlldy5iaW5kRGVsZXRlUHJvamVjdEJ1dHRvbihpZCA9PiB0aGlzLnJlbW92ZVByb2plY3QoaWQpKVxyXG4gICAgfVxyXG5cclxuICAgIHNldHVwUHJvamVjdFNlbGVjdGlvbigpIHtcclxuICAgICAgICB0aGlzLnZpZXcuYmluZFByb2plY3RTZWxlY3Rpb24oc2VsZWN0ZWRMaXN0SWQgPT4gdGhpcy5zZWxlY3RBY3RpdmVQcm9qZWN0KHNlbGVjdGVkTGlzdElkKSlcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJQcm9qZWN0cygpIHtcclxuICAgICAgICB0aGlzLnZpZXcucmVuZGVyKHRoaXMubW9kZWwudG9Eb0xpc3RzKTtcclxuICAgICAgICBpZiAodGhpcy5tb2RlbC5jdXJyZW50TGlzdCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmlldy5oaWdobGlnaHRQcm9qZWN0KHRoaXMubW9kZWwuY3VycmVudExpc3QuaWQpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0ICcuL3VpL3N0eWxlLmNzcydcclxuaW1wb3J0IEFwcCBmcm9tICcuL0FwcCdcclxuXHJcbmNvbnN0IGFwcCA9IG5ldyBBcHAoKTtcclxuY29uc29sZS5sb2coYXBwLnVpLnByb2plY3RzVmlldy5wcm9qZWN0Q3JlYXRpb25Gb3JtLmdldEFkZFByb2plY3RCdXR0b24oKSkiLCJpbXBvcnQgVG9Eb0xpc3QgZnJvbSBcIi4vVG9Eb0xpc3RcIlxyXG5pbXBvcnQgZ2V0VW5pcXVlSWQgZnJvbSAnLi4vdXRpbGl0eS9pZEdlbmVyYXRvcidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvRG9BcHAge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy50b0RvTGlzdHMgPSBbXVxyXG4gICAgICAgIGNvbnN0IGRlZmF1bHRMaXN0ID0gbmV3IFRvRG9MaXN0KGdldFVuaXF1ZUlkKCksIFwiRGVmYXVsdCBMaXN0XCIpXHJcbiAgICAgICAgdGhpcy5hZGRUb0RvTGlzdChkZWZhdWx0TGlzdClcclxuICAgICAgICB0aGlzLmN1cnJlbnRMaXN0ID0gdGhpcy50b0RvTGlzdHNbMF1cclxuICAgIH1cclxuXHJcbiAgICBhZGRUb0RvTGlzdCh0b0RvTGlzdCkge1xyXG4gICAgICAgIHRoaXMudG9Eb0xpc3RzLnB1c2godG9Eb0xpc3QpXHJcbiAgICAgICAgaWYgKHRoaXMudG9Eb0xpc3RzLmxlbmd0aCA9PSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudExpc3QgPSB0aGlzLnRvRG9MaXN0c1swXVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVUb0RvTGlzdChpZCkge1xyXG4gICAgICAgIHRoaXMudG9Eb0xpc3RzID0gdGhpcy50b0RvTGlzdHMuZmlsdGVyKHRvRG9MaXN0ID0+IHRvRG9MaXN0LmlkICE9PSBpZClcclxuICAgICAgICBpZiAodGhpcy50b0RvTGlzdHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRMaXN0ID0gdGhpcy50b0RvTGlzdHNbMF1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRMaXN0ID0gbnVsbFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRUb0RvTGlzdChpZCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRvRG9MaXN0cy5maW5kKGxpc3QgPT4gbGlzdC5pZCA9PSBpZClcclxuICAgIH1cclxuXHJcbiAgICBlZGl0VG9Eb0xpc3QoaWQsIG5ld1RpdGxlKSB7XHJcbiAgICAgICAgY29uc3QgbGlzdEJlaW5nRWRpdGVkID0gdGhpcy5nZXRUb0RvTGlzdChpZClcclxuICAgICAgICBpZiAoIWxpc3RCZWluZ0VkaXRlZCkgcmV0dXJuXHJcbiAgICAgICAgbGlzdEJlaW5nRWRpdGVkLnNldFRpdGxlKG5ld1RpdGxlKVxyXG4gICAgfVxyXG5cclxuICAgIHNldEFjdGl2ZUxpc3QoaWQpIHtcclxuICAgICAgICBjb25zdCBzZWxlY3RlZExpc3QgPSB0aGlzLmdldFRvRG9MaXN0KGlkKVxyXG4gICAgICAgIGlmIChzZWxlY3RlZExpc3QpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50TGlzdCA9IHNlbGVjdGVkTGlzdFxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUb0RvTGlzdCB7XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgdGl0bGUpIHtcclxuICAgICAgICB0aGlzLmlkID0gaWRcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGVcclxuICAgICAgICB0aGlzLnRvRG9JdGVtcyA9IFtdXHJcbiAgICB9XHJcblxyXG4gICAgYWRkVG9Ebyh0b2RvKSB7XHJcbiAgICAgICAgdGhpcy50b0RvSXRlbXMucHVzaCh0b2RvKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZVRvRG8odG9Eb0lkKSB7XHJcbiAgICAgICAgdGhpcy50b0RvSXRlbXMgPSB0aGlzLnRvRG9JdGVtcy5maWx0ZXIodG9Eb0l0ZW0gPT4gdG9Eb0l0ZW0uaWQgIT09IHRvRG9JZClcclxuICAgIH1cclxuXHJcbiAgICBzZXRUaXRsZSh0aXRsZSkge1xyXG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZVxyXG4gICAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlSGVhZGVyKHBhcmVudEVsZW1lbnQsIGFwcE5hbWUpIHtcclxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcclxuICAgIGhlYWRlci50ZXh0Q29udGVudCA9IGFwcE5hbWVcclxuICAgIHBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKVxyXG4gICAgcmV0dXJuIGhlYWRlclxyXG59IiwiZnVuY3Rpb24gdGFza0l0ZW1GYWN0b3J5KGlkLCB0aXRsZSwgZHVlRGF0ZSwgcHJpb3JpdHksIGRlc2NyaXB0aW9uKSB7XHJcbiAgICBjb25zdCB0YXNrSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcclxuICAgIHRhc2tJdGVtLmlubmVySFRNTCA9IGBcclxuICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIvPlxyXG4gICAgICAgIDxoNCBjbGFzcz1cInRhc2stbmFtZT4ke3RpdGxlfTwvaDQ+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInRhc2stZGVzY3JpcHRpb25cIj48L2J1dHRvbj5cclxuICAgIGBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlzdFZpZXcge1xyXG4gICAgY29uc3RydWN0b3IocGFyZW50RWxlbWVudCkge1xyXG4gICAgICAgIHBhcmVudEVsZW1lbnQuaW5uZXJIVE1MICs9IGBcclxuICAgICAgICAgICAgPGgyIGNsYXNzPVwicHJvamVjdC1uYW1lLWhlYWRpbmdcIj48L2gyPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3M9XCJ0by1kby1saXN0XCI+PC91bD5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImFkZC10by1kb1wiPkFkZCBUYXNrPC9idXR0b24+XHJcbiAgICAgICAgYFxyXG4gICAgICAgIHRoaXMuaGVhZGluZyA9IHBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignaDInKVxyXG4gICAgICAgIHRoaXMubGlzdEVsZW1lbnQgPSBwYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy50by1kby1saXN0JylcclxuICAgICAgICB0aGlzLmFkZFByb2plY3RCdXR0b24gPSBwYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdG8tZG8nKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcih0YXNrcykge1xyXG4gICAgICAgIHRoaXMuX2NsZWFyKClcclxuICAgICAgICB0YXNrcy5mb3JFYWNoKHRhc2sgPT4gdGhpcy5fYWRkVGFzaygpKVxyXG4gICAgfVxyXG5cclxuICAgIF9hZGRUYXNrKGlkLCB0aXRsZSwgZHVlRGF0ZSwgcHJpb3JpdHksIGRlc2NyaXB0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5saXN0RWxlbWVudC5hcHBlbmRDaGlsZCh0YXNrSXRlbUZhY3RvcnkoaWQsIHRpdGxlLCBkdWVEYXRlLCBwcmlvcml0eSwgZGVzY3JpcHRpb24pKVxyXG4gICAgfVxyXG5cclxuICAgIF9jbGVhcigpIHtcclxuICAgICAgICB0aGlzLmxpc3RFbGVtZW50LmlubmVySFRNTCA9ICcnXHJcbiAgICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXR1cFBvcHVwKCkge1xyXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKVxyXG4gICAgY29uc3QgcG9wdXBXcmFwcGVyID0gY3JlYXRlUG9wdXBXcmFwcGVyKClcclxuICAgIGNvbnN0IG92ZXJsYXkgPSBjcmVhdGVPdmVybGF5KClcclxuXHJcbiAgICBib2R5LmFwcGVuZENoaWxkKHBvcHVwV3JhcHBlcilcclxuICAgIGJvZHkuYXBwZW5kQ2hpbGQob3ZlcmxheSlcclxuXHJcbiAgICBhZGRPcGVuUG9wdXBFdmVudExpc3RlbmVyKClcclxuICAgIGFkZENsb3NlUG9wdXBFdmVudExpc3RlbmVyKClcclxuICAgIGNsb3NlTW9kYWxCeUNsaWNraW5nT3V0c2lkZUl0KClcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlUG9wdXBXcmFwcGVyKCkge1xyXG4gICAgY29uc3QgcG9wdXBXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIHBvcHVwV3JhcHBlci5pZCA9ICdtb2RhbCdcclxuICAgIHJldHVybiBwb3B1cFdyYXBwZXJcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlT3ZlcmxheSgpIHtcclxuICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgb3ZlcmxheS5pZCA9ICdvdmVybGF5J1xyXG4gICAgcmV0dXJuIG92ZXJsYXlcclxufVxyXG5cclxuZnVuY3Rpb24gb3Blbk1vZGFsKCkge1xyXG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwnKVxyXG4gICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNvdmVybGF5JylcclxuICAgIFxyXG4gICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcclxuICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcclxuICB9XHJcbiAgXHJcbmZ1bmN0aW9uIGNsb3NlTW9kYWwoKSB7XHJcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbCcpXHJcbiAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI292ZXJsYXknKVxyXG5cclxuICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXHJcbiAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZE9wZW5Qb3B1cEV2ZW50TGlzdGVuZXIoKSB7XHJcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaHRtbCcpXHJcbiAgICBodG1sLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgICAgICAgbGV0IG9wZW5Qb3B1cEJ1dHRvbiA9IGUudGFyZ2V0LmNsb3Nlc3QoJy5vcGVuLXBvcHVwJylcclxuICAgICAgICBpZiAoIW9wZW5Qb3B1cEJ1dHRvbikgcmV0dXJuXHJcbiAgICAgICAgb3Blbk1vZGFsKClcclxuICAgIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZENsb3NlUG9wdXBFdmVudExpc3RlbmVyKCkge1xyXG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2h0bWwnKVxyXG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwnKVxyXG4gICAgaHRtbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG4gICAgICAgIGxldCBjbG9zZVBvcHVwQnV0dG9uID0gZS50YXJnZXQuY2xvc2VzdCgnLmNsb3NlLXBvcHVwJylcclxuICAgICAgICBpZiAoIWNsb3NlUG9wdXBCdXR0b24pIHJldHVyblxyXG4gICAgICAgIGNsb3NlTW9kYWwoKVxyXG4gICAgICAgIG1vZGFsLmlubmVySFRNTCA9ICcnXHJcbiAgICB9KVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0TW9kYWxDb250ZW50KGVsZW1lbnRUb0FwcGVuZCkge1xyXG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwnKVxyXG4gICAgbW9kYWwuaW5uZXJIVE1MID0gJydcclxuICAgIG1vZGFsLmFwcGVuZENoaWxkKGVsZW1lbnRUb0FwcGVuZClcclxufVxyXG5cclxuZnVuY3Rpb24gY2xvc2VNb2RhbEJ5Q2xpY2tpbmdPdXRzaWRlSXQoKSB7XHJcbiAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI292ZXJsYXknKVxyXG4gICAgb3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG4gICAgICAgIGNsb3NlTW9kYWwoKVxyXG4gICAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gaXNNb2RhbEFjdGl2ZSgpIHtcclxuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsJylcclxuICAgIHJldHVybiBtb2RhbC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpXHJcbn0iLCJpbXBvcnQgeyBzZXRNb2RhbENvbnRlbnQgfSBmcm9tICcuL1BvcHVwJ1xyXG5pbXBvcnQgUHJvamVjdHNDb250cm9sbGVyIGZyb20gJy4uL2NvbnRyb2xsZXJzL1Byb2plY3RzQ29udHJvbGxlcidcclxuXHJcbmZ1bmN0aW9uIHByb2plY3RJdGVtRmFjdG9yeShpZCwgcHJvamVjdE5hbWUpIHtcclxuICAgIGNvbnN0IHByb2plY3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxyXG4gICAgcHJvamVjdEl0ZW0uaW5uZXJIVE1MID0gYFxyXG4gICAgICAgIDxoNCBjbGFzcz1cInByb2plY3QtbmFtZVwiPiR7cHJvamVjdE5hbWV9PC9oND5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZWRpdC1wcm9qZWN0IG9wZW4tcG9wdXBcIj5FZGl0PC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImRlbGV0ZS1wcm9qZWN0XCI+RGVsZXRlPC9idXR0b24+XHJcbiAgICBgXHJcbiAgICBwcm9qZWN0SXRlbS5zZXRBdHRyaWJ1dGUoJ2lkJywgaWQpXHJcbiAgICByZXR1cm4gcHJvamVjdEl0ZW1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdHNWaWV3IHtcclxuICAgIGNvbnN0cnVjdG9yKHBhcmVudEVsZW1lbnQpIHtcclxuICAgICAgICBwYXJlbnRFbGVtZW50LmlubmVySFRNTCArPSBgXHJcbiAgICAgICAgPGgzPlByb2plY3RzPC9oMz5cclxuICAgICAgICA8dWwgY2xhc3M9XCJwcm9qZWN0LWxpc3RcIj48L3VsPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJhZGQgb3Blbi1wb3B1cFwiPkFkZDwvYnV0dG9uPlxyXG4gICAgYFxyXG4gICAgdGhpcy5oZWFkaW5nID0gcGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCdoMycpXHJcbiAgICB0aGlzLmxpc3RFbGVtZW50ID0gcGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1saXN0JylcclxuICAgIHRoaXMuYWRkUHJvamVjdEJ1dHRvbiA9IHBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLmFkZCcpXHJcbiAgICB0aGlzLnByb2plY3RDcmVhdGlvbkZvcm0gPSBuZXcgUHJvamVjdENyZWF0aW9uRm9ybSgpXHJcbiAgICB0aGlzLnByb2plY3RFZGl0aW9uRm9ybSA9IG5ldyBQcm9qZWN0RWRpdGlvbkZvcm0oKVxyXG4gICAgdGhpcy5fc2V0dXBBZGRQcm9qZWN0QnV0dG9uKClcclxuICAgIHRoaXMuX3NldHVwRWRpdFByb2plY3RCdXR0b24oKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcihwcm9qZWN0cykge1xyXG4gICAgICAgIHRoaXMuX2NsZWFyKClcclxuICAgICAgICBwcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4gdGhpcy5fYWRkUHJvamVjdChwcm9qZWN0LmlkLCBwcm9qZWN0LnRpdGxlKSlcclxuICAgIH1cclxuXHJcbiAgICBfYWRkUHJvamVjdChpZCwgbmFtZSkge1xyXG4gICAgICAgIHRoaXMubGlzdEVsZW1lbnQuYXBwZW5kQ2hpbGQocHJvamVjdEl0ZW1GYWN0b3J5KGlkLCBuYW1lKSlcclxuICAgIH1cclxuXHJcbiAgICBfY2xlYXIoKSB7XHJcbiAgICAgICAgdGhpcy5saXN0RWxlbWVudC5pbm5lckhUTUwgPSAnJ1xyXG4gICAgfVxyXG5cclxuICAgIF9zZXR1cEFkZFByb2plY3RCdXR0b24oKSB7XHJcbiAgICAgICAgdGhpcy5hZGRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvamVjdENyZWF0aW9uRm9ybS5jbGVhcklucHV0KClcclxuICAgICAgICAgICAgc2V0TW9kYWxDb250ZW50KHRoaXMucHJvamVjdENyZWF0aW9uRm9ybS5lbGVtZW50KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgX3NldHVwRWRpdFByb2plY3RCdXR0b24oKSB7XHJcbiAgICAgICAgdGhpcy5saXN0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnByb2plY3RFZGl0aW9uRm9ybS5jbGVhcklucHV0KClcclxuICAgICAgICAgICAgY29uc3QgZWRpdFByb2plY3RCdXR0b24gPSBlLnRhcmdldC5jbG9zZXN0KCdidXR0b24uZWRpdC1wcm9qZWN0JylcclxuICAgICAgICAgICAgaWYgKCFlZGl0UHJvamVjdEJ1dHRvbikgcmV0dXJuXHJcbiAgICAgICAgICAgIHNldE1vZGFsQ29udGVudCh0aGlzLnByb2plY3RFZGl0aW9uRm9ybS5lbGVtZW50KVxyXG4gICAgICAgICAgICB0aGlzLmlkT2ZQcm9qZWN0QmVpbmdFZGl0dGVkID0gZS50YXJnZXQuY2xvc2VzdCgnbGknKS5pZFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgaGlnaGxpZ2h0UHJvamVjdChpZCkge1xyXG4gICAgICAgIGNvbnN0IGFjdGl2ZVByb2plY3QgPSB0aGlzLmxpc3RFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYGxpW2lkPVwiJHtpZH1cIl1gKVxyXG4gICAgICAgIGFjdGl2ZVByb2plY3QuY2xhc3NMaXN0LmFkZCgnYWN0aXZlLXByb2plY3QnKVxyXG4gICAgfVxyXG5cclxuICAgIGJpbmRBZGRQcm9qZWN0QnV0dG9uKGFjdGlvbikge1xyXG4gICAgICAgIGNvbnN0IGFkZFByb2plY3RCdXR0b24gPSB0aGlzLnByb2plY3RDcmVhdGlvbkZvcm0uZ2V0QWRkUHJvamVjdEJ1dHRvbigpXHJcbiAgICAgICAgYWRkUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4gYWN0aW9uKHRoaXMucHJvamVjdENyZWF0aW9uRm9ybS5nZXRJbnB1dEZpZWxkVmFsdWUoKSkpXHJcbiAgICB9XHJcblxyXG4gICAgYmluZEVkaXRQcm9qZWN0QnV0dG9uKGFjdGlvbikge1xyXG4gICAgICAgIGNvbnN0IGVkaXRQcm9qZWN0QnV0dG9uID0gdGhpcy5wcm9qZWN0RWRpdGlvbkZvcm0uZ2V0RWRpdFByb2plY3RCdXR0b24oKVxyXG4gICAgICAgIGVkaXRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgICAgICAgICAgIGFjdGlvbih0aGlzLmlkT2ZQcm9qZWN0QmVpbmdFZGl0dGVkLCB0aGlzLnByb2plY3RFZGl0aW9uRm9ybS5nZXRJbnB1dEZpZWxkVmFsdWUoKSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGJpbmREZWxldGVQcm9qZWN0QnV0dG9uKGFjdGlvbikge1xyXG4gICAgICAgIHRoaXMubGlzdEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcHJlc3NlZERlbGV0ZUJ1dHRvbiA9IGUudGFyZ2V0LmNsb3Nlc3QoJy5kZWxldGUtcHJvamVjdCcpXHJcbiAgICAgICAgICAgIGlmICghcHJlc3NlZERlbGV0ZUJ1dHRvbikgcmV0dXJuXHJcbiAgICAgICAgICAgIGNvbnN0IHByZXNzZWRMaXN0SXRlbSA9IHByZXNzZWREZWxldGVCdXR0b24uY2xvc2VzdCgnbGknKVxyXG4gICAgICAgICAgICBhY3Rpb24ocHJlc3NlZExpc3RJdGVtLmlkKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgYmluZFByb2plY3RTZWxlY3Rpb24oYWN0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5saXN0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcHJvamVjdExpc3RJdGVtID0gZS50YXJnZXQuY2xvc2VzdCgnbGknKVxyXG4gICAgICAgICAgICBpZiAoIXByb2plY3RMaXN0SXRlbSkgcmV0dXJuXHJcbiAgICAgICAgICAgIGlmIChlLnRhcmdldC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdidXR0b24nKSByZXR1cm5cclxuICAgICAgICAgICAgYWN0aW9uKHByb2plY3RMaXN0SXRlbS5pZClcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBQcm9qZWN0Q3JlYXRpb25Gb3JtIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudCA9IHRoaXMuX2NyZWF0ZUVsZW1lbnQoKVxyXG4gICAgfVxyXG5cclxuICAgIF9jcmVhdGVFbGVtZW50KCkge1xyXG4gICAgICAgIGNvbnN0IHByb2plY3RDcmVhdGlvbkZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIHByb2plY3RDcmVhdGlvbkZvcm0uY2xhc3NMaXN0LmFkZCgncHJvamVjdC1jcmVhdGlvbicpXHJcbiAgICBcclxuICAgICAgICBwcm9qZWN0Q3JlYXRpb25Gb3JtLmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cInByb2plY3QtbmFtZS1pbnB1dFwiPlByb2plY3QgbmFtZTo8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXQgaWQ9XCJwcm9qZWN0LW5hbWUtaW5wdXRcIiB0eXBlPVwidGV4dFwiLz5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImFkZC1wcm9qZWN0IGNsb3NlLXBvcHVwXCI+QWRkPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJjbG9zZS1wb3B1cFwiPkNhbmNlbDwvYnV0dG9uPlxyXG4gICAgICAgIGBcclxuICAgICAgICByZXR1cm4gcHJvamVjdENyZWF0aW9uRm9ybVxyXG4gICAgfVxyXG5cclxuICAgIGNsZWFySW5wdXQoKSB7XHJcbiAgICAgICAgY29uc3QgZm9ybUlucHV0ID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LW5hbWUtaW5wdXQnKVxyXG4gICAgICAgIGZvcm1JbnB1dC52YWx1ZSA9ICcnXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QWRkUHJvamVjdEJ1dHRvbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtcHJvamVjdCcpXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SW5wdXRGaWVsZFZhbHVlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtbmFtZS1pbnB1dCcpLnZhbHVlXHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBQcm9qZWN0RWRpdGlvbkZvcm0ge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gdGhpcy5fY3JlYXRlRWxlbWVudCgpXHJcbiAgICB9XHJcblxyXG4gICAgX2NyZWF0ZUVsZW1lbnQoKSB7XHJcbiAgICAgICAgY29uc3QgcHJvamVjdEVkaXRpb25Gb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICBwcm9qZWN0RWRpdGlvbkZvcm0uY2xhc3NMaXN0LmFkZCgncHJvamVjdC1lZGl0aW9uJylcclxuICAgIFxyXG4gICAgICAgIHByb2plY3RFZGl0aW9uRm9ybS5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwcm9qZWN0LW5hbWUtaW5wdXRcIj5OZXcgcHJvamVjdCBuYW1lOjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dCBpZD1cInByb2plY3QtbmFtZS1pbnB1dFwiIHR5cGU9XCJ0ZXh0XCIvPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZWRpdC1wcm9qZWN0IGNsb3NlLXBvcHVwXCI+RWRpdDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY2xvc2UtcG9wdXBcIj5DYW5jZWw8L2J1dHRvbj5cclxuICAgICAgICBgXHJcbiAgICAgICAgcmV0dXJuIHByb2plY3RFZGl0aW9uRm9ybVxyXG4gICAgfVxyXG5cclxuICAgIGNsZWFySW5wdXQoKSB7XHJcbiAgICAgICAgY29uc3QgZm9ybUlucHV0ID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LW5hbWUtaW5wdXQnKVxyXG4gICAgICAgIGZvcm1JbnB1dC52YWx1ZSA9ICcnXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RWRpdFByb2plY3RCdXR0b24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC1wcm9qZWN0JylcclxuICAgIH1cclxuXHJcbiAgICBnZXRJbnB1dEZpZWxkVmFsdWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1uYW1lLWlucHV0JykudmFsdWVcclxuICAgIH1cclxufSIsImltcG9ydCBpbml0TGF5b3V0IGZyb20gJy4vaW5pdExheW91dCdcclxuaW1wb3J0IGNyZWF0ZUhlYWRlciBmcm9tICcuL0hlYWRlcidcclxuaW1wb3J0IFByb2plY3RzVmlldyBmcm9tICcuL1Byb2plY3RzVmlldydcclxuaW1wb3J0IExpc3RWaWV3IGZyb20gJy4vTGlzdFZpZXcnXHJcbmltcG9ydCBzZXR1cFBvcHVwIGZyb20gJy4vUG9wdXAnXHJcblxyXG5leHBvcnQgY2xhc3MgVUkge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgaW5pdExheW91dChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykpXHJcbiAgICAgICAgc2V0dXBQb3B1cCgpXHJcbiAgICAgICAgdGhpcy5oZWFkZXIgPSBjcmVhdGVIZWFkZXIoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcicpLCAnVG9EbycpXHJcbiAgICAgICAgdGhpcy5wcm9qZWN0c1ZpZXcgPSBuZXcgUHJvamVjdHNWaWV3KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyJykpXHJcbiAgICAgICAgdGhpcy5saXN0VmlldyA9IG5ldyBMaXN0Vmlldyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGlzcGxheScpKVxyXG4gICAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdExheW91dChwYXJlbnRFbGVtZW50KSB7XHJcbiAgICBjb25zdCBhcHBXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGFwcFdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnYXBwJylcclxuICAgIFxyXG4gICAgY29uc3QgaGVhZGVyV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBoZWFkZXJXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpXHJcblxyXG4gICAgY29uc3Qgc2lkZWJhcldyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgc2lkZWJhcldyYXBwZXIuY2xhc3NMaXN0LmFkZCgnc2lkZWJhcicpXHJcbiAgICBcclxuICAgIGNvbnN0IGRpc3BsYXlXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGRpc3BsYXlXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2Rpc3BsYXknKVxyXG4gICAgXHJcbiAgICBhcHBXcmFwcGVyLmFwcGVuZENoaWxkKGhlYWRlcldyYXBwZXIpXHJcbiAgICBhcHBXcmFwcGVyLmFwcGVuZENoaWxkKHNpZGViYXJXcmFwcGVyKVxyXG4gICAgYXBwV3JhcHBlci5hcHBlbmRDaGlsZChkaXNwbGF5V3JhcHBlcilcclxuICAgIHBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoYXBwV3JhcHBlcilcclxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVuaXF1ZUlkKCkge1xyXG4gICAgcmV0dXJuIEJpZ0ludChEYXRlLm5vdygpKS50b1N0cmluZygpXHJcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=