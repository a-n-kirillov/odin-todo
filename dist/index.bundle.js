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
___CSS_LOADER_EXPORT___.push([module.id, "html, body, div, span, applet, object, iframe,\r\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\nb, u, i, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td,\r\narticle, aside, canvas, details, embed, \r\nfigure, figcaption, footer, header, hgroup, \r\nmenu, nav, output, ruby, section, summary,\r\ntime, mark, audio, video {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tborder: 0;\r\n\tfont-size: 100%;\r\n\tfont: inherit;\r\n\tvertical-align: baseline;\r\n}\r\n/* HTML5 display-role reset for older browsers */\r\narticle, aside, details, figcaption, figure, \r\nfooter, header, hgroup, menu, nav, section {\r\n\tdisplay: block;\r\n}\r\nbody {\r\n\tline-height: 1;\r\n}\r\nol, ul {\r\n\tlist-style: none;\r\n}\r\nblockquote, q {\r\n\tquotes: none;\r\n}\r\nblockquote:before, blockquote:after,\r\nq:before, q:after {\r\n\tcontent: '';\r\n\tcontent: none;\r\n}\r\ntable {\r\n\tborder-collapse: collapse;\r\n\tborder-spacing: 0;\r\n}\r\n\r\n:root {\r\n    --dark-grey: #757575;\r\n}\r\n\r\n.app {\r\n    display: grid;\r\n    grid-template-columns: 1fr 3fr;\r\n    grid-template-rows: 60px 1fr;\r\n    grid-template-areas:\r\n        \"header header\"\r\n        \"sidebar display\";\r\n    min-height: 100vh;\r\n}\r\n\r\n.header {\r\n    grid-area: header;\r\n    background-color: #38bdf8;\r\n}\r\n\r\n.sidebar {\r\n    grid-area: sidebar;\r\n    background-color: #f5f5f5;\r\n}\r\n\r\n.display {\r\n    grid-area: display;\r\n    background-color: white;\r\n}\r\n\r\n.projects-header {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.project {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n#modal {\r\n    position: fixed;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%) scale(0);\r\n    transition: 200ms ease-in-out;\r\n    border: 1px solid black;\r\n    border-radius: 10px;\r\n    z-index: 10;\r\n    background-color: white;\r\n    width: 500px;\r\n    max-width: 80%;\r\n  }\r\n  \r\n  #modal.active {\r\n    transform: translate(-50%, -50%) scale(1);\r\n  }\r\n\r\n  #overlay {\r\n    position: fixed;\r\n    opacity: 0;\r\n    transition: 200ms ease-in-out;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background-color: rgba(0, 0, 0, .5);\r\n    pointer-events: none;\r\n  }\r\n  \r\n  #overlay.active {\r\n    opacity: 1;\r\n    pointer-events: all;\r\n  }\r\n\r\n  .project-list li {\r\n    display: flex;\r\n  }\r\n\r\n  .active-project {\r\n    font-size: 140%;\r\n    font-weight: bolder;\r\n  }\r\n\r\n  .to-do-list li {\r\n    display: flex;\r\n    gap: 20px;\r\n  }", "",{"version":3,"sources":["webpack://./src/ui/style.css"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;CAaC,SAAS;CACT,UAAU;CACV,SAAS;CACT,eAAe;CACf,aAAa;CACb,wBAAwB;AACzB;AACA,gDAAgD;AAChD;;CAEC,cAAc;AACf;AACA;CACC,cAAc;AACf;AACA;CACC,gBAAgB;AACjB;AACA;CACC,YAAY;AACb;AACA;;CAEC,WAAW;CACX,aAAa;AACd;AACA;CACC,yBAAyB;CACzB,iBAAiB;AAClB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,4BAA4B;IAC5B;;yBAEqB;IACrB,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;IACjB,yBAAyB;AAC7B;;AAEA;IACI,kBAAkB;IAClB,yBAAyB;AAC7B;;AAEA;IACI,kBAAkB;IAClB,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,eAAe;IACf,QAAQ;IACR,SAAS;IACT,yCAAyC;IACzC,6BAA6B;IAC7B,uBAAuB;IACvB,mBAAmB;IACnB,WAAW;IACX,uBAAuB;IACvB,YAAY;IACZ,cAAc;EAChB;;EAEA;IACE,yCAAyC;EAC3C;;EAEA;IACE,eAAe;IACf,UAAU;IACV,6BAA6B;IAC7B,MAAM;IACN,OAAO;IACP,QAAQ;IACR,SAAS;IACT,mCAAmC;IACnC,oBAAoB;EACtB;;EAEA;IACE,UAAU;IACV,mBAAmB;EACrB;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,eAAe;IACf,mBAAmB;EACrB;;EAEA;IACE,aAAa;IACb,SAAS;EACX","sourcesContent":["html, body, div, span, applet, object, iframe,\r\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\nb, u, i, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td,\r\narticle, aside, canvas, details, embed, \r\nfigure, figcaption, footer, header, hgroup, \r\nmenu, nav, output, ruby, section, summary,\r\ntime, mark, audio, video {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tborder: 0;\r\n\tfont-size: 100%;\r\n\tfont: inherit;\r\n\tvertical-align: baseline;\r\n}\r\n/* HTML5 display-role reset for older browsers */\r\narticle, aside, details, figcaption, figure, \r\nfooter, header, hgroup, menu, nav, section {\r\n\tdisplay: block;\r\n}\r\nbody {\r\n\tline-height: 1;\r\n}\r\nol, ul {\r\n\tlist-style: none;\r\n}\r\nblockquote, q {\r\n\tquotes: none;\r\n}\r\nblockquote:before, blockquote:after,\r\nq:before, q:after {\r\n\tcontent: '';\r\n\tcontent: none;\r\n}\r\ntable {\r\n\tborder-collapse: collapse;\r\n\tborder-spacing: 0;\r\n}\r\n\r\n:root {\r\n    --dark-grey: #757575;\r\n}\r\n\r\n.app {\r\n    display: grid;\r\n    grid-template-columns: 1fr 3fr;\r\n    grid-template-rows: 60px 1fr;\r\n    grid-template-areas:\r\n        \"header header\"\r\n        \"sidebar display\";\r\n    min-height: 100vh;\r\n}\r\n\r\n.header {\r\n    grid-area: header;\r\n    background-color: #38bdf8;\r\n}\r\n\r\n.sidebar {\r\n    grid-area: sidebar;\r\n    background-color: #f5f5f5;\r\n}\r\n\r\n.display {\r\n    grid-area: display;\r\n    background-color: white;\r\n}\r\n\r\n.projects-header {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.project {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n#modal {\r\n    position: fixed;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%) scale(0);\r\n    transition: 200ms ease-in-out;\r\n    border: 1px solid black;\r\n    border-radius: 10px;\r\n    z-index: 10;\r\n    background-color: white;\r\n    width: 500px;\r\n    max-width: 80%;\r\n  }\r\n  \r\n  #modal.active {\r\n    transform: translate(-50%, -50%) scale(1);\r\n  }\r\n\r\n  #overlay {\r\n    position: fixed;\r\n    opacity: 0;\r\n    transition: 200ms ease-in-out;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background-color: rgba(0, 0, 0, .5);\r\n    pointer-events: none;\r\n  }\r\n  \r\n  #overlay.active {\r\n    opacity: 1;\r\n    pointer-events: all;\r\n  }\r\n\r\n  .project-list li {\r\n    display: flex;\r\n  }\r\n\r\n  .active-project {\r\n    font-size: 140%;\r\n    font-weight: bolder;\r\n  }\r\n\r\n  .to-do-list li {\r\n    display: flex;\r\n    gap: 20px;\r\n  }"],"sourceRoot":""}]);
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
/* harmony import */ var _controllers_TasksController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controllers/TasksController */ "./src/controllers/TasksController.js");
/* harmony import */ var _persistance_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./persistance/storage */ "./src/persistance/storage.js");





class App {
    #STORAGE_KEY = 'TO_DO_LIST'

    constructor() {
        const localPersistance = new _persistance_storage__WEBPACK_IMPORTED_MODULE_3__["default"](this.#STORAGE_KEY)
        this.projectsModel = localPersistance.appProxy

        this.ui = new _ui_UI__WEBPACK_IMPORTED_MODULE_0__.UI()
        this.tasksController = new _controllers_TasksController__WEBPACK_IMPORTED_MODULE_2__["default"](this.projectsModel, this.ui.listView)
        this.projectsController = new _controllers_ProjectsController__WEBPACK_IMPORTED_MODULE_1__["default"](this.projectsModel, this.ui.projectsView, this.tasksController)
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
/* harmony import */ var _logic_ToDoList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../logic/ToDoList */ "./src/logic/ToDoList.js");
/* harmony import */ var _utility_idGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utility/idGenerator */ "./src/utility/idGenerator.js");



class ProjectsController {
    constructor(projectsModel, projectsView, tasksController) {
        this.model = projectsModel
        this.view = projectsView
        this.tasksController = tasksController
        this.setupAddProjectButton()
        this.setupProjectSelection()
        this.setupEditProjectButton()
        this.setupDeleteProjectButton()
        this.renderProjects()
    }
    
    addProject(name) {
        const newList = new _logic_ToDoList__WEBPACK_IMPORTED_MODULE_0__["default"]((0,_utility_idGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(), name)
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
        this.tasksController.renderTasks()
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

/***/ "./src/controllers/TasksController.js":
/*!********************************************!*\
  !*** ./src/controllers/TasksController.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TaskController)
/* harmony export */ });
/* harmony import */ var _utility_idGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utility/idGenerator */ "./src/utility/idGenerator.js");
/* harmony import */ var _logic_ToDoItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../logic/ToDoItem */ "./src/logic/ToDoItem.js");



class TaskController {
    constructor(projectsModel, tasksView) {
        this.model = projectsModel
        this.view = tasksView
        this.setupAddTaskButton()
        this.setupCompletionCheckbox()
        this.setupEditTaskButton()
        this.setupDeleteTaskButton()
        this.renderTasks()
    }

    renderTasks() {
        this.view.render(this.model.currentList.toDoItems)
        this.view.setHeaderTitle(this.model.currentList.title)
    }

    addTask(name, dueDate, priority, description) {
        const newTask = new _logic_ToDoItem__WEBPACK_IMPORTED_MODULE_1__["default"]((0,_utility_idGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(), name, dueDate, priority, description)
        console.log(newTask)
        this.model.currentList.addToDo(newTask)
        this.renderTasks()
    }

    editTask(id, newName, newDueDate, newPriority, newDescription) {
        const taskBeingChanged = this.model.currentList.getTask(id)
        taskBeingChanged.title = newName
        taskBeingChanged.dueDate = newDueDate
        taskBeingChanged.priority = newPriority
        taskBeingChanged.description = newDescription
        this.renderTasks()
    }

    deleteTask(id) {
        this.model.currentList.removeToDo(id)
        this.renderTasks()
    }

    changeCompletion(taskId, newState) {
        const taskBeingChanged = this.model.currentList.getTask(taskId)
        taskBeingChanged.setCompletionState(newState)
        this.renderTasks()
    }

    setupAddTaskButton() {
        this.view.bindAddTaskButton((name, dueDate, priority, description) => this.addTask(name, dueDate, priority, description))
    }

    setupCompletionCheckbox() {
        this.view.bindCompletionCheckbox((taskId, newState) => this.changeCompletion(taskId, newState))
    }

    setupEditTaskButton() {
        this.view.bindEditTaskButton((id, newName, newDueDate, newPriority, newDescription) => this.editTask(id, newName, newDueDate, newPriority, newDescription))
    }

    setupDeleteTaskButton() {
        this.view.bindDeleteTaskButton(id => this.deleteTask(id))
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

    static createFromParsedJSON(parsedJSONObject) {
        const lists = new this()

        if (parsedJSONObject == null) return lists;
        // we don't need the default list
        lists.toDoLists = []

        for (const parsedToDoList of parsedJSONObject.toDoLists) {
            lists.addToDoList(_ToDoList__WEBPACK_IMPORTED_MODULE_0__["default"].createFromParsedJSON(parsedToDoList))
        }

        lists.setActiveList(parsedJSONObject.currentList.id)
        return lists
    }
}

/***/ }),

/***/ "./src/logic/ToDoItem.js":
/*!*******************************!*\
  !*** ./src/logic/ToDoItem.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ToDoItem)
/* harmony export */ });
class ToDoItem {
    constructor(id, title, dueDate, priority, description) {
        this.id = id
        this.title = title
        this.dueDate = dueDate
        this.priority = priority
        this.description = description
        this.completed = false
    }

    setCompletionState(isTaskCompleted) {
        this.completed = isTaskCompleted
    }

    static createFromParsedJSON(parsedJSONObject) {
        const retrievedToDoItem = new this(
            parsedJSONObject.id,
            parsedJSONObject.title,
            parsedJSONObject.dueDate,
            parsedJSONObject.priority,
            parsedJSONObject.description
        )
        retrievedToDoItem.completed = parsedJSONObject.completed
        return retrievedToDoItem
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
/* harmony import */ var _ToDoItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ToDoItem */ "./src/logic/ToDoItem.js");


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

    getTask(id) {
        return this.toDoItems.find(task => task.id == id)
    }

    static createFromParsedJSON(parsedJSONObject) {
        const list = new this(parsedJSONObject.id, parsedJSONObject.title)
        for (const parsedToDoItem of parsedJSONObject.toDoItems) {
            list.addToDo(_ToDoItem__WEBPACK_IMPORTED_MODULE_0__["default"].createFromParsedJSON(parsedToDoItem))
        }
        
        return list
    }
}

/***/ }),

/***/ "./src/persistance/storage.js":
/*!************************************!*\
  !*** ./src/persistance/storage.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Storage)
/* harmony export */ });
/* harmony import */ var _logic_ToDoApp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../logic/ToDoApp */ "./src/logic/ToDoApp.js");


class Storage {
    constructor(localStorageKey) {
        this.localStorageKey = localStorageKey
        this.appProxy = this.loadApp()
    }

    loadApp() {
        try {
            this.directApp = _logic_ToDoApp__WEBPACK_IMPORTED_MODULE_0__["default"].createFromParsedJSON(JSON.parse(localStorage.getItem(this.localStorageKey)))
        } catch (error) {
            this.directApp = new _logic_ToDoApp__WEBPACK_IMPORTED_MODULE_0__["default"]()
            localStorage.setItem(this.localStorageKey, JSON.stringify(this.directApp))
        }

        return new Proxy(this.directApp, this.#proxyChangeHandler)
    }

    #proxyChangeHandler = {
        get: (target, key) => {
          if(typeof target[key] === "object" && target[key] !== null) {
            return new Proxy(target[key], this.#proxyChangeHandler)
          }
      
          return target[key]
        },
        set: (target, prop, value) => {
            target[prop] = value
            localStorage.setItem(this.localStorageKey, JSON.stringify(this.directApp))
          return true
        }
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
/* harmony import */ var _Popup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup */ "./src/ui/Popup.js");


function taskItemFactory(id, title, dueDate, priority) {
    const taskItem = document.createElement('li')
    taskItem.innerHTML = `
        <input class="task-completion" type="checkbox"/>
        <h4 class="task-name">${title}</h4>
        <h4 class="due-date">${dueDate}</h4>
        <h4 class="priority">${priority}</h4>
        <button class="task-description open-popup">Description</button>
        <button class="edit-task open-popup">Edit</button>
        <button class="delete-task">Delete</button>
    `

    taskItem.id = id
    return taskItem
}

function descriptionViewFactory(taskName, content) {
    const descriptionBox = document.createElement('div')
    descriptionBox.innerHTML = `
        <h2 class="task-description-title">${taskName}</h2>
        <p class="task-description-body">${content}</p>
    `
    return descriptionBox
}

class ListView {
    constructor(parentElement) {
        parentElement.innerHTML += `
            <h2 class="project-name-heading"></h2>
            <ul class="to-do-list"></ul>
            <button class="add-to-do open-popup">Add Task</button>
            <button class='remove-done-tasks">Remove completed tasks</button>
        `
        this.heading = parentElement.querySelector('h2')
        this.listElement = parentElement.querySelector('.to-do-list')
        this.addTaskButton = parentElement.querySelector('.add-to-do')
        this.removeDoneTasksButton = parentElement.querySelector('.remove-done-tasks')

        this.taskCreationForm = new TaskCreationForm()
        this.taskEditionForm = new TaskEditionForm()

        this._setupAddTaskButton()
        this._setupDescriptionButton()
        this._setupEditTaskButton()
    }

    render(tasks) {
        this._clear()
        tasks.forEach(task => {
            this._addTask(task.id, task.title, task.dueDate, task.priority)
            this._setTaskCompletion(task.id, task.completed)
        })
        this._mapTasksToDescriptions(tasks)
    }

    _setTaskCompletion(id, newState) {
        this.listElement.querySelector(`[id="${id}"]`).querySelector('.task-completion').checked = newState 
    }

    _addTask(id, title, dueDate, priority) {
        this.listElement.appendChild(taskItemFactory(id, title, dueDate, priority))
    }

    _clear() {
        this.listElement.innerHTML = ''
    }

    _setupAddTaskButton() {
        this.addTaskButton.addEventListener('click', e => {
            this.taskCreationForm.clear()
            ;(0,_Popup__WEBPACK_IMPORTED_MODULE_0__.setModalContent)(this.taskCreationForm.element)
        })
    }

    _setupEditTaskButton() {
        this.listElement.addEventListener('click', e => {
            this.taskEditionForm.clear()
            const potentiallyPressedEditButton = e.target.closest('.edit-task') 
            if (!potentiallyPressedEditButton) return
            const pressedTask = potentiallyPressedEditButton.closest('li')
            this.idOfTaskUnderEdition = pressedTask.id
            this.taskEditionForm.loadValues(
                pressedTask.querySelector('.task-name').textContent,
                pressedTask.querySelector('.due-date').textContent,
                pressedTask.querySelector('.priority').textContent.toLowerCase(),
                this.tasksToDescriptionsMap[pressedTask.id]
            )
            ;(0,_Popup__WEBPACK_IMPORTED_MODULE_0__.setModalContent)(this.taskEditionForm.element)
        })
    }

    _mapTasksToDescriptions(tasks) {
        this.tasksToDescriptionsMap = {}
        tasks.forEach(task => this.tasksToDescriptionsMap[task.id] = task.description)
    }

    _setupDescriptionButton() {
        this.listElement.addEventListener('click', e => {
            const potentiallyPressedDescriptionButton = e.target.closest('.task-description') 
            if (!potentiallyPressedDescriptionButton) return
            const pressedTask = potentiallyPressedDescriptionButton.closest('li')
            const descriptionBox = descriptionViewFactory(
                pressedTask.querySelector('.task-name').textContent,
                this.tasksToDescriptionsMap[pressedTask.id]
                )
            ;(0,_Popup__WEBPACK_IMPORTED_MODULE_0__.setModalContent)(descriptionBox)
        })
    }

    setHeaderTitle(title) {
        this.heading.innerHTML = title
    }

    bindAddTaskButton(action) {
        this.taskCreationForm.confirmButton.addEventListener('click', e => {
            action(
                this.taskCreationForm.nameInput.value,
                this.taskCreationForm.dueDatePicker.value,
                this.taskCreationForm.prioritySelection.value,
                this.taskCreationForm.taskDescription.value
            )
        })
    }

    bindEditTaskButton(action) {
        this.taskEditionForm.confirmButton.addEventListener('click', e => {
            action(
                this.idOfTaskUnderEdition,
                this.taskEditionForm.nameInput.value,
                this.taskEditionForm.dueDatePicker.value,
                this.taskEditionForm.prioritySelection.value,
                this.taskEditionForm.taskDescription.value
            )
        })
    }

    bindDeleteTaskButton(action) {
        this.listElement.addEventListener('click', e => {
            const potentiallyPressedDeleteButton = e.target.closest('.delete-task') 
            if (!potentiallyPressedDeleteButton) return
            const pressedTask = potentiallyPressedDeleteButton.closest('li')
            action(pressedTask.id)
        })
    }

    bindCompletionCheckbox(action) {
        this.listElement.addEventListener('click', e => {
            if (!e.target.classList.contains('task-completion')) return;
            action(this.getClosestListItemId(e.target), e.target.checked)
        })
    }

    getClosestListItemId(childForWhichWeSearchClosestListItem) {
        return childForWhichWeSearchClosestListItem.closest('li').id
    }
}

class TaskForm {
    constructor() {
        this._createElement()
        this._addPrioritySelectOptions()
    }

    _createElement() {
        const taskCreationForm = document.createElement('div')
        taskCreationForm.classList.add('task-creation')

        taskCreationForm.innerHTML = `
            <label for="task-name-input">Project name:</label>
            <input id="task-name-input" type="text"/>

            <label for="due-date-picker">Due date:</label>
            <input id="due-date-picker" type="date"/>

            <label for="priority-selection">Priority:</label>
            <select id="priority-selection"></select>

            <label for="task-description">Description:</label>
            <textarea id="task-description"></textarea>

            <button class="confirm-task-form close-popup"></button>
            <button class="cancel-task-form close-popup">Cancel</button>
        `
        this.nameInput = taskCreationForm.querySelector('#task-name-input')
        this.dueDatePicker = taskCreationForm.querySelector('#due-date-picker')
        this.prioritySelection = taskCreationForm.querySelector('#priority-selection')
        this.taskDescription = taskCreationForm.querySelector('#task-description')
        this.confirmButton = taskCreationForm.querySelector('.confirm-task-form')
        this.cancelButton = taskCreationForm.querySelector('.cancel-task-form')
        this.element = taskCreationForm
    }

    _addPrioritySelectOptions() {
        this.prioritySelection.innerHTML = `
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
        ` 
    }

    clear() {
        this.nameInput.value = ''
        this.dueDatePicker.value = ''
        this.prioritySelection.value = 'low'
        this.taskDescription.value = ''
    }

    setConfirmButtonText(newText) {
        this.confirmButton.textContent = newText
    }
}

class TaskCreationForm extends TaskForm {
    constructor() {
        super()
        this.setConfirmButtonText('Add')
    }
}

class TaskEditionForm extends TaskForm {
    constructor() {
        super()
        this.setConfirmButtonText('Edit')
    }

    loadValues(
        name,
        date,
        priority,
        description
    ) {
        this.nameInput.value = name
        this.dueDatePicker.value = date
        this.prioritySelection.value = priority
        this.taskDescription.value = description
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxTQUFTO0FBQ3RELDJDQUEyQyxRQUFRO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxHQUFHO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSx3REFBZTtBQUMzQixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSx3REFBZTtBQUMzQixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHdEQUFlO0FBQzNCLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUM5T2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUM3RXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLFlBQVk7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSx3REFBZTtBQUMzQixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHdEQUFlO0FBQzNCO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLHVFQUF1RSxHQUFHO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5SnFDO0FBQ0Y7QUFDTTtBQUNSO0FBQ0Q7QUFDaEM7QUFDTztBQUNQO0FBQ0EsUUFBUSx1REFBVTtBQUNsQixRQUFRLG1EQUFVO0FBQ2xCLHNCQUFzQixtREFBWTtBQUNsQyxnQ0FBZ0MscURBQVk7QUFDNUMsNEJBQTRCLGlEQUFRO0FBQ3BDO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDZGU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2pCZTtBQUNmO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvdWkvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL3VpL3N0eWxlLmNzcz83NmY3Iiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL0FwcC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvY29udHJvbGxlcnMvUHJvamVjdHNDb250cm9sbGVyLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9jb250cm9sbGVycy9UYXNrc0NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9sb2dpYy9Ub0RvQXBwLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9sb2dpYy9Ub0RvSXRlbS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvbG9naWMvVG9Eb0xpc3QuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL3BlcnNpc3RhbmNlL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL3VpL0hlYWRlci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvdWkvTGlzdFZpZXcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL3VpL1BvcHVwLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy91aS9Qcm9qZWN0c1ZpZXcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL3VpL1VJLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy91aS9pbml0TGF5b3V0LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy91dGlsaXR5L2lkR2VuZXJhdG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcclxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXHJcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxyXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcclxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxyXFxuYiwgdSwgaSwgY2VudGVyLFxcclxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxyXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxyXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxyXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxcclxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXFxyXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxyXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXHJcXG5cXHRtYXJnaW46IDA7XFxyXFxuXFx0cGFkZGluZzogMDtcXHJcXG5cXHRib3JkZXI6IDA7XFxyXFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcclxcblxcdGZvbnQ6IGluaGVyaXQ7XFxyXFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcclxcbn1cXHJcXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxyXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXFxyXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXHJcXG5cXHRkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuYm9keSB7XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxyXFxufVxcclxcbm9sLCB1bCB7XFxyXFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuYmxvY2txdW90ZSwgcSB7XFxyXFxuXFx0cXVvdGVzOiBub25lO1xcclxcbn1cXHJcXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXHJcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxyXFxuXFx0Y29udGVudDogJyc7XFxyXFxuXFx0Y29udGVudDogbm9uZTtcXHJcXG59XFxyXFxudGFibGUge1xcclxcblxcdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxyXFxuXFx0Ym9yZGVyLXNwYWNpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbjpyb290IHtcXHJcXG4gICAgLS1kYXJrLWdyZXk6ICM3NTc1NzU7XFxyXFxufVxcclxcblxcclxcbi5hcHAge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNjBweCAxZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxyXFxuICAgICAgICBcXFwiaGVhZGVyIGhlYWRlclxcXCJcXHJcXG4gICAgICAgIFxcXCJzaWRlYmFyIGRpc3BsYXlcXFwiO1xcclxcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciB7XFxyXFxuICAgIGdyaWQtYXJlYTogaGVhZGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzhiZGY4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZWJhciB7XFxyXFxuICAgIGdyaWQtYXJlYTogc2lkZWJhcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcXHJcXG59XFxyXFxuXFxyXFxuLmRpc3BsYXkge1xcclxcbiAgICBncmlkLWFyZWE6IGRpc3BsYXk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdHMtaGVhZGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuI21vZGFsIHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB0b3A6IDUwJTtcXHJcXG4gICAgbGVmdDogNTAlO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgwKTtcXHJcXG4gICAgdHJhbnNpdGlvbjogMjAwbXMgZWFzZS1pbi1vdXQ7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICB6LWluZGV4OiAxMDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIHdpZHRoOiA1MDBweDtcXHJcXG4gICAgbWF4LXdpZHRoOiA4MCU7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gICNtb2RhbC5hY3RpdmUge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNvdmVybGF5IHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgICB0cmFuc2l0aW9uOiAyMDBtcyBlYXNlLWluLW91dDtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC41KTtcXHJcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gICNvdmVybGF5LmFjdGl2ZSB7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucHJvamVjdC1saXN0IGxpIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5hY3RpdmUtcHJvamVjdCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTQwJTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC50by1kby1saXN0IGxpIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiAyMHB4O1xcclxcbiAgfVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy91aS9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Ozs7Ozs7Ozs7Ozs7Q0FhQyxTQUFTO0NBQ1QsVUFBVTtDQUNWLFNBQVM7Q0FDVCxlQUFlO0NBQ2YsYUFBYTtDQUNiLHdCQUF3QjtBQUN6QjtBQUNBLGdEQUFnRDtBQUNoRDs7Q0FFQyxjQUFjO0FBQ2Y7QUFDQTtDQUNDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxZQUFZO0FBQ2I7QUFDQTs7Q0FFQyxXQUFXO0NBQ1gsYUFBYTtBQUNkO0FBQ0E7Q0FDQyx5QkFBeUI7Q0FDekIsaUJBQWlCO0FBQ2xCOztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5Qiw0QkFBNEI7SUFDNUI7O3lCQUVxQjtJQUNyQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGVBQWU7SUFDZixRQUFRO0lBQ1IsU0FBUztJQUNULHlDQUF5QztJQUN6Qyw2QkFBNkI7SUFDN0IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixjQUFjO0VBQ2hCOztFQUVBO0lBQ0UseUNBQXlDO0VBQzNDOztFQUVBO0lBQ0UsZUFBZTtJQUNmLFVBQVU7SUFDViw2QkFBNkI7SUFDN0IsTUFBTTtJQUNOLE9BQU87SUFDUCxRQUFRO0lBQ1IsU0FBUztJQUNULG1DQUFtQztJQUNuQyxvQkFBb0I7RUFDdEI7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsZUFBZTtJQUNmLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixTQUFTO0VBQ1hcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcclxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXHJcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxyXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcclxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxyXFxuYiwgdSwgaSwgY2VudGVyLFxcclxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxyXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxyXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxyXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxcclxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXFxyXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxyXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXHJcXG5cXHRtYXJnaW46IDA7XFxyXFxuXFx0cGFkZGluZzogMDtcXHJcXG5cXHRib3JkZXI6IDA7XFxyXFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcclxcblxcdGZvbnQ6IGluaGVyaXQ7XFxyXFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcclxcbn1cXHJcXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxyXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXFxyXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXHJcXG5cXHRkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuYm9keSB7XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxyXFxufVxcclxcbm9sLCB1bCB7XFxyXFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuYmxvY2txdW90ZSwgcSB7XFxyXFxuXFx0cXVvdGVzOiBub25lO1xcclxcbn1cXHJcXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXHJcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxyXFxuXFx0Y29udGVudDogJyc7XFxyXFxuXFx0Y29udGVudDogbm9uZTtcXHJcXG59XFxyXFxudGFibGUge1xcclxcblxcdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxyXFxuXFx0Ym9yZGVyLXNwYWNpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbjpyb290IHtcXHJcXG4gICAgLS1kYXJrLWdyZXk6ICM3NTc1NzU7XFxyXFxufVxcclxcblxcclxcbi5hcHAge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNjBweCAxZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxyXFxuICAgICAgICBcXFwiaGVhZGVyIGhlYWRlclxcXCJcXHJcXG4gICAgICAgIFxcXCJzaWRlYmFyIGRpc3BsYXlcXFwiO1xcclxcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciB7XFxyXFxuICAgIGdyaWQtYXJlYTogaGVhZGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzhiZGY4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZWJhciB7XFxyXFxuICAgIGdyaWQtYXJlYTogc2lkZWJhcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcXHJcXG59XFxyXFxuXFxyXFxuLmRpc3BsYXkge1xcclxcbiAgICBncmlkLWFyZWE6IGRpc3BsYXk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdHMtaGVhZGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuI21vZGFsIHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB0b3A6IDUwJTtcXHJcXG4gICAgbGVmdDogNTAlO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgwKTtcXHJcXG4gICAgdHJhbnNpdGlvbjogMjAwbXMgZWFzZS1pbi1vdXQ7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICB6LWluZGV4OiAxMDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIHdpZHRoOiA1MDBweDtcXHJcXG4gICAgbWF4LXdpZHRoOiA4MCU7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gICNtb2RhbC5hY3RpdmUge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNvdmVybGF5IHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgICB0cmFuc2l0aW9uOiAyMDBtcyBlYXNlLWluLW91dDtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC41KTtcXHJcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gICNvdmVybGF5LmFjdGl2ZSB7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucHJvamVjdC1saXN0IGxpIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5hY3RpdmUtcHJvamVjdCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTQwJTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC50by1kby1saXN0IGxpIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiAyMHB4O1xcclxcbiAgfVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgVUkgfSBmcm9tIFwiLi91aS9VSVwiO1xyXG5pbXBvcnQgUHJvamVjdHNDb250cm9sbGVyIGZyb20gXCIuL2NvbnRyb2xsZXJzL1Byb2plY3RzQ29udHJvbGxlclwiO1xyXG5pbXBvcnQgVGFza0NvbnRyb2xsZXIgZnJvbSBcIi4vY29udHJvbGxlcnMvVGFza3NDb250cm9sbGVyXCI7XHJcbmltcG9ydCBTdG9yYWdlIGZyb20gXCIuL3BlcnNpc3RhbmNlL3N0b3JhZ2VcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCB7XHJcbiAgICAjU1RPUkFHRV9LRVkgPSAnVE9fRE9fTElTVCdcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBjb25zdCBsb2NhbFBlcnNpc3RhbmNlID0gbmV3IFN0b3JhZ2UodGhpcy4jU1RPUkFHRV9LRVkpXHJcbiAgICAgICAgdGhpcy5wcm9qZWN0c01vZGVsID0gbG9jYWxQZXJzaXN0YW5jZS5hcHBQcm94eVxyXG5cclxuICAgICAgICB0aGlzLnVpID0gbmV3IFVJKClcclxuICAgICAgICB0aGlzLnRhc2tzQ29udHJvbGxlciA9IG5ldyBUYXNrQ29udHJvbGxlcih0aGlzLnByb2plY3RzTW9kZWwsIHRoaXMudWkubGlzdFZpZXcpXHJcbiAgICAgICAgdGhpcy5wcm9qZWN0c0NvbnRyb2xsZXIgPSBuZXcgUHJvamVjdHNDb250cm9sbGVyKHRoaXMucHJvamVjdHNNb2RlbCwgdGhpcy51aS5wcm9qZWN0c1ZpZXcsIHRoaXMudGFza3NDb250cm9sbGVyKVxyXG4gICAgfVxyXG59ICIsImltcG9ydCBUb0RvTGlzdCBmcm9tIFwiLi4vbG9naWMvVG9Eb0xpc3RcIlxyXG5pbXBvcnQgZ2V0VW5pcXVlSWQgZnJvbSBcIi4uL3V0aWxpdHkvaWRHZW5lcmF0b3JcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdHNDb250cm9sbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKHByb2plY3RzTW9kZWwsIHByb2plY3RzVmlldywgdGFza3NDb250cm9sbGVyKSB7XHJcbiAgICAgICAgdGhpcy5tb2RlbCA9IHByb2plY3RzTW9kZWxcclxuICAgICAgICB0aGlzLnZpZXcgPSBwcm9qZWN0c1ZpZXdcclxuICAgICAgICB0aGlzLnRhc2tzQ29udHJvbGxlciA9IHRhc2tzQ29udHJvbGxlclxyXG4gICAgICAgIHRoaXMuc2V0dXBBZGRQcm9qZWN0QnV0dG9uKClcclxuICAgICAgICB0aGlzLnNldHVwUHJvamVjdFNlbGVjdGlvbigpXHJcbiAgICAgICAgdGhpcy5zZXR1cEVkaXRQcm9qZWN0QnV0dG9uKClcclxuICAgICAgICB0aGlzLnNldHVwRGVsZXRlUHJvamVjdEJ1dHRvbigpXHJcbiAgICAgICAgdGhpcy5yZW5kZXJQcm9qZWN0cygpXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGFkZFByb2plY3QobmFtZSkge1xyXG4gICAgICAgIGNvbnN0IG5ld0xpc3QgPSBuZXcgVG9Eb0xpc3QoZ2V0VW5pcXVlSWQoKSwgbmFtZSlcclxuICAgICAgICB0aGlzLm1vZGVsLmFkZFRvRG9MaXN0KG5ld0xpc3QpXHJcbiAgICAgICAgdGhpcy5yZW5kZXJQcm9qZWN0cygpXHJcbiAgICB9XHJcblxyXG4gICAgZWRpdFByb2plY3QoaWQsIG5ld05hbWUpIHtcclxuICAgICAgICB0aGlzLm1vZGVsLmVkaXRUb0RvTGlzdChpZCwgbmV3TmFtZSlcclxuICAgICAgICB0aGlzLnJlbmRlclByb2plY3RzKClcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVQcm9qZWN0KGlkKSB7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5yZW1vdmVUb0RvTGlzdChpZClcclxuICAgICAgICB0aGlzLnJlbmRlclByb2plY3RzKClcclxuICAgIH1cclxuXHJcbiAgICBzZWxlY3RBY3RpdmVQcm9qZWN0KGlkKSB7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5zZXRBY3RpdmVMaXN0KGlkKVxyXG4gICAgICAgIHRoaXMucmVuZGVyUHJvamVjdHMoKVxyXG4gICAgICAgIHRoaXMudGFza3NDb250cm9sbGVyLnJlbmRlclRhc2tzKClcclxuICAgIH1cclxuXHJcbiAgICBzZXR1cEFkZFByb2plY3RCdXR0b24oKSB7XHJcbiAgICAgICAgdGhpcy52aWV3LmJpbmRBZGRQcm9qZWN0QnV0dG9uKG5hbWUgPT4gdGhpcy5hZGRQcm9qZWN0KG5hbWUpKVxyXG4gICAgfVxyXG5cclxuICAgIHNldHVwRWRpdFByb2plY3RCdXR0b24oKSB7XHJcbiAgICAgICAgdGhpcy52aWV3LmJpbmRFZGl0UHJvamVjdEJ1dHRvbigoaWQsIG5ld05hbWUpID0+IHRoaXMuZWRpdFByb2plY3QoaWQsIG5ld05hbWUpKVxyXG4gICAgfVxyXG5cclxuICAgIHNldHVwRGVsZXRlUHJvamVjdEJ1dHRvbigpIHtcclxuICAgICAgICB0aGlzLnZpZXcuYmluZERlbGV0ZVByb2plY3RCdXR0b24oaWQgPT4gdGhpcy5yZW1vdmVQcm9qZWN0KGlkKSlcclxuICAgIH1cclxuXHJcbiAgICBzZXR1cFByb2plY3RTZWxlY3Rpb24oKSB7XHJcbiAgICAgICAgdGhpcy52aWV3LmJpbmRQcm9qZWN0U2VsZWN0aW9uKHNlbGVjdGVkTGlzdElkID0+IHRoaXMuc2VsZWN0QWN0aXZlUHJvamVjdChzZWxlY3RlZExpc3RJZCkpXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyUHJvamVjdHMoKSB7XHJcbiAgICAgICAgdGhpcy52aWV3LnJlbmRlcih0aGlzLm1vZGVsLnRvRG9MaXN0cyk7XHJcbiAgICAgICAgaWYgKHRoaXMubW9kZWwuY3VycmVudExpc3QgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLnZpZXcuaGlnaGxpZ2h0UHJvamVjdCh0aGlzLm1vZGVsLmN1cnJlbnRMaXN0LmlkKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCBnZXRVbmlxdWVJZCBmcm9tICcuLi91dGlsaXR5L2lkR2VuZXJhdG9yJ1xyXG5pbXBvcnQgVG9Eb0l0ZW0gZnJvbSAnLi4vbG9naWMvVG9Eb0l0ZW0nXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrQ29udHJvbGxlciB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9qZWN0c01vZGVsLCB0YXNrc1ZpZXcpIHtcclxuICAgICAgICB0aGlzLm1vZGVsID0gcHJvamVjdHNNb2RlbFxyXG4gICAgICAgIHRoaXMudmlldyA9IHRhc2tzVmlld1xyXG4gICAgICAgIHRoaXMuc2V0dXBBZGRUYXNrQnV0dG9uKClcclxuICAgICAgICB0aGlzLnNldHVwQ29tcGxldGlvbkNoZWNrYm94KClcclxuICAgICAgICB0aGlzLnNldHVwRWRpdFRhc2tCdXR0b24oKVxyXG4gICAgICAgIHRoaXMuc2V0dXBEZWxldGVUYXNrQnV0dG9uKClcclxuICAgICAgICB0aGlzLnJlbmRlclRhc2tzKClcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJUYXNrcygpIHtcclxuICAgICAgICB0aGlzLnZpZXcucmVuZGVyKHRoaXMubW9kZWwuY3VycmVudExpc3QudG9Eb0l0ZW1zKVxyXG4gICAgICAgIHRoaXMudmlldy5zZXRIZWFkZXJUaXRsZSh0aGlzLm1vZGVsLmN1cnJlbnRMaXN0LnRpdGxlKVxyXG4gICAgfVxyXG5cclxuICAgIGFkZFRhc2sobmFtZSwgZHVlRGF0ZSwgcHJpb3JpdHksIGRlc2NyaXB0aW9uKSB7XHJcbiAgICAgICAgY29uc3QgbmV3VGFzayA9IG5ldyBUb0RvSXRlbShnZXRVbmlxdWVJZCgpLCBuYW1lLCBkdWVEYXRlLCBwcmlvcml0eSwgZGVzY3JpcHRpb24pXHJcbiAgICAgICAgY29uc29sZS5sb2cobmV3VGFzaylcclxuICAgICAgICB0aGlzLm1vZGVsLmN1cnJlbnRMaXN0LmFkZFRvRG8obmV3VGFzaylcclxuICAgICAgICB0aGlzLnJlbmRlclRhc2tzKClcclxuICAgIH1cclxuXHJcbiAgICBlZGl0VGFzayhpZCwgbmV3TmFtZSwgbmV3RHVlRGF0ZSwgbmV3UHJpb3JpdHksIG5ld0Rlc2NyaXB0aW9uKSB7XHJcbiAgICAgICAgY29uc3QgdGFza0JlaW5nQ2hhbmdlZCA9IHRoaXMubW9kZWwuY3VycmVudExpc3QuZ2V0VGFzayhpZClcclxuICAgICAgICB0YXNrQmVpbmdDaGFuZ2VkLnRpdGxlID0gbmV3TmFtZVxyXG4gICAgICAgIHRhc2tCZWluZ0NoYW5nZWQuZHVlRGF0ZSA9IG5ld0R1ZURhdGVcclxuICAgICAgICB0YXNrQmVpbmdDaGFuZ2VkLnByaW9yaXR5ID0gbmV3UHJpb3JpdHlcclxuICAgICAgICB0YXNrQmVpbmdDaGFuZ2VkLmRlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb25cclxuICAgICAgICB0aGlzLnJlbmRlclRhc2tzKClcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVUYXNrKGlkKSB7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5jdXJyZW50TGlzdC5yZW1vdmVUb0RvKGlkKVxyXG4gICAgICAgIHRoaXMucmVuZGVyVGFza3MoKVxyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZUNvbXBsZXRpb24odGFza0lkLCBuZXdTdGF0ZSkge1xyXG4gICAgICAgIGNvbnN0IHRhc2tCZWluZ0NoYW5nZWQgPSB0aGlzLm1vZGVsLmN1cnJlbnRMaXN0LmdldFRhc2sodGFza0lkKVxyXG4gICAgICAgIHRhc2tCZWluZ0NoYW5nZWQuc2V0Q29tcGxldGlvblN0YXRlKG5ld1N0YXRlKVxyXG4gICAgICAgIHRoaXMucmVuZGVyVGFza3MoKVxyXG4gICAgfVxyXG5cclxuICAgIHNldHVwQWRkVGFza0J1dHRvbigpIHtcclxuICAgICAgICB0aGlzLnZpZXcuYmluZEFkZFRhc2tCdXR0b24oKG5hbWUsIGR1ZURhdGUsIHByaW9yaXR5LCBkZXNjcmlwdGlvbikgPT4gdGhpcy5hZGRUYXNrKG5hbWUsIGR1ZURhdGUsIHByaW9yaXR5LCBkZXNjcmlwdGlvbikpXHJcbiAgICB9XHJcblxyXG4gICAgc2V0dXBDb21wbGV0aW9uQ2hlY2tib3goKSB7XHJcbiAgICAgICAgdGhpcy52aWV3LmJpbmRDb21wbGV0aW9uQ2hlY2tib3goKHRhc2tJZCwgbmV3U3RhdGUpID0+IHRoaXMuY2hhbmdlQ29tcGxldGlvbih0YXNrSWQsIG5ld1N0YXRlKSlcclxuICAgIH1cclxuXHJcbiAgICBzZXR1cEVkaXRUYXNrQnV0dG9uKCkge1xyXG4gICAgICAgIHRoaXMudmlldy5iaW5kRWRpdFRhc2tCdXR0b24oKGlkLCBuZXdOYW1lLCBuZXdEdWVEYXRlLCBuZXdQcmlvcml0eSwgbmV3RGVzY3JpcHRpb24pID0+IHRoaXMuZWRpdFRhc2soaWQsIG5ld05hbWUsIG5ld0R1ZURhdGUsIG5ld1ByaW9yaXR5LCBuZXdEZXNjcmlwdGlvbikpXHJcbiAgICB9XHJcblxyXG4gICAgc2V0dXBEZWxldGVUYXNrQnV0dG9uKCkge1xyXG4gICAgICAgIHRoaXMudmlldy5iaW5kRGVsZXRlVGFza0J1dHRvbihpZCA9PiB0aGlzLmRlbGV0ZVRhc2soaWQpKVxyXG4gICAgfVxyXG59IiwiaW1wb3J0ICcuL3VpL3N0eWxlLmNzcydcclxuaW1wb3J0IEFwcCBmcm9tICcuL0FwcCdcclxuXHJcbmNvbnN0IGFwcCA9IG5ldyBBcHAoKTsiLCJpbXBvcnQgVG9Eb0xpc3QgZnJvbSBcIi4vVG9Eb0xpc3RcIlxyXG5pbXBvcnQgZ2V0VW5pcXVlSWQgZnJvbSAnLi4vdXRpbGl0eS9pZEdlbmVyYXRvcidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvRG9BcHAge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy50b0RvTGlzdHMgPSBbXVxyXG4gICAgICAgIGNvbnN0IGRlZmF1bHRMaXN0ID0gbmV3IFRvRG9MaXN0KGdldFVuaXF1ZUlkKCksIFwiRGVmYXVsdCBMaXN0XCIpXHJcbiAgICAgICAgdGhpcy5hZGRUb0RvTGlzdChkZWZhdWx0TGlzdClcclxuICAgICAgICB0aGlzLmN1cnJlbnRMaXN0ID0gdGhpcy50b0RvTGlzdHNbMF1cclxuICAgIH1cclxuXHJcbiAgICBhZGRUb0RvTGlzdCh0b0RvTGlzdCkge1xyXG4gICAgICAgIHRoaXMudG9Eb0xpc3RzLnB1c2godG9Eb0xpc3QpXHJcbiAgICAgICAgaWYgKHRoaXMudG9Eb0xpc3RzLmxlbmd0aCA9PSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudExpc3QgPSB0aGlzLnRvRG9MaXN0c1swXVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVUb0RvTGlzdChpZCkge1xyXG4gICAgICAgIHRoaXMudG9Eb0xpc3RzID0gdGhpcy50b0RvTGlzdHMuZmlsdGVyKHRvRG9MaXN0ID0+IHRvRG9MaXN0LmlkICE9PSBpZClcclxuICAgICAgICBpZiAodGhpcy50b0RvTGlzdHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRMaXN0ID0gdGhpcy50b0RvTGlzdHNbMF1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRMaXN0ID0gbnVsbFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRUb0RvTGlzdChpZCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRvRG9MaXN0cy5maW5kKGxpc3QgPT4gbGlzdC5pZCA9PSBpZClcclxuICAgIH1cclxuXHJcbiAgICBlZGl0VG9Eb0xpc3QoaWQsIG5ld1RpdGxlKSB7XHJcbiAgICAgICAgY29uc3QgbGlzdEJlaW5nRWRpdGVkID0gdGhpcy5nZXRUb0RvTGlzdChpZClcclxuICAgICAgICBpZiAoIWxpc3RCZWluZ0VkaXRlZCkgcmV0dXJuXHJcbiAgICAgICAgbGlzdEJlaW5nRWRpdGVkLnNldFRpdGxlKG5ld1RpdGxlKVxyXG4gICAgfVxyXG5cclxuICAgIHNldEFjdGl2ZUxpc3QoaWQpIHtcclxuICAgICAgICBjb25zdCBzZWxlY3RlZExpc3QgPSB0aGlzLmdldFRvRG9MaXN0KGlkKVxyXG4gICAgICAgIGlmIChzZWxlY3RlZExpc3QpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50TGlzdCA9IHNlbGVjdGVkTGlzdFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY3JlYXRlRnJvbVBhcnNlZEpTT04ocGFyc2VkSlNPTk9iamVjdCkge1xyXG4gICAgICAgIGNvbnN0IGxpc3RzID0gbmV3IHRoaXMoKVxyXG5cclxuICAgICAgICBpZiAocGFyc2VkSlNPTk9iamVjdCA9PSBudWxsKSByZXR1cm4gbGlzdHM7XHJcbiAgICAgICAgLy8gd2UgZG9uJ3QgbmVlZCB0aGUgZGVmYXVsdCBsaXN0XHJcbiAgICAgICAgbGlzdHMudG9Eb0xpc3RzID0gW11cclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBwYXJzZWRUb0RvTGlzdCBvZiBwYXJzZWRKU09OT2JqZWN0LnRvRG9MaXN0cykge1xyXG4gICAgICAgICAgICBsaXN0cy5hZGRUb0RvTGlzdChUb0RvTGlzdC5jcmVhdGVGcm9tUGFyc2VkSlNPTihwYXJzZWRUb0RvTGlzdCkpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsaXN0cy5zZXRBY3RpdmVMaXN0KHBhcnNlZEpTT05PYmplY3QuY3VycmVudExpc3QuaWQpXHJcbiAgICAgICAgcmV0dXJuIGxpc3RzXHJcbiAgICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUb0RvSXRlbSB7XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgdGl0bGUsIGR1ZURhdGUsIHByaW9yaXR5LCBkZXNjcmlwdGlvbikge1xyXG4gICAgICAgIHRoaXMuaWQgPSBpZFxyXG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZVxyXG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGVcclxuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHlcclxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25cclxuICAgICAgICB0aGlzLmNvbXBsZXRlZCA9IGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgc2V0Q29tcGxldGlvblN0YXRlKGlzVGFza0NvbXBsZXRlZCkge1xyXG4gICAgICAgIHRoaXMuY29tcGxldGVkID0gaXNUYXNrQ29tcGxldGVkXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNyZWF0ZUZyb21QYXJzZWRKU09OKHBhcnNlZEpTT05PYmplY3QpIHtcclxuICAgICAgICBjb25zdCByZXRyaWV2ZWRUb0RvSXRlbSA9IG5ldyB0aGlzKFxyXG4gICAgICAgICAgICBwYXJzZWRKU09OT2JqZWN0LmlkLFxyXG4gICAgICAgICAgICBwYXJzZWRKU09OT2JqZWN0LnRpdGxlLFxyXG4gICAgICAgICAgICBwYXJzZWRKU09OT2JqZWN0LmR1ZURhdGUsXHJcbiAgICAgICAgICAgIHBhcnNlZEpTT05PYmplY3QucHJpb3JpdHksXHJcbiAgICAgICAgICAgIHBhcnNlZEpTT05PYmplY3QuZGVzY3JpcHRpb25cclxuICAgICAgICApXHJcbiAgICAgICAgcmV0cmlldmVkVG9Eb0l0ZW0uY29tcGxldGVkID0gcGFyc2VkSlNPTk9iamVjdC5jb21wbGV0ZWRcclxuICAgICAgICByZXR1cm4gcmV0cmlldmVkVG9Eb0l0ZW1cclxuICAgIH1cclxufSIsImltcG9ydCBUb0RvSXRlbSBmcm9tIFwiLi9Ub0RvSXRlbVwiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb0RvTGlzdCB7XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgdGl0bGUpIHtcclxuICAgICAgICB0aGlzLmlkID0gaWRcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGVcclxuICAgICAgICB0aGlzLnRvRG9JdGVtcyA9IFtdXHJcbiAgICB9XHJcblxyXG4gICAgYWRkVG9Ebyh0b2RvKSB7XHJcbiAgICAgICAgdGhpcy50b0RvSXRlbXMucHVzaCh0b2RvKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZVRvRG8odG9Eb0lkKSB7XHJcbiAgICAgICAgdGhpcy50b0RvSXRlbXMgPSB0aGlzLnRvRG9JdGVtcy5maWx0ZXIodG9Eb0l0ZW0gPT4gdG9Eb0l0ZW0uaWQgIT09IHRvRG9JZClcclxuICAgIH1cclxuXHJcbiAgICBzZXRUaXRsZSh0aXRsZSkge1xyXG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZVxyXG4gICAgfVxyXG5cclxuICAgIGdldFRhc2soaWQpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50b0RvSXRlbXMuZmluZCh0YXNrID0+IHRhc2suaWQgPT0gaWQpXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNyZWF0ZUZyb21QYXJzZWRKU09OKHBhcnNlZEpTT05PYmplY3QpIHtcclxuICAgICAgICBjb25zdCBsaXN0ID0gbmV3IHRoaXMocGFyc2VkSlNPTk9iamVjdC5pZCwgcGFyc2VkSlNPTk9iamVjdC50aXRsZSlcclxuICAgICAgICBmb3IgKGNvbnN0IHBhcnNlZFRvRG9JdGVtIG9mIHBhcnNlZEpTT05PYmplY3QudG9Eb0l0ZW1zKSB7XHJcbiAgICAgICAgICAgIGxpc3QuYWRkVG9EbyhUb0RvSXRlbS5jcmVhdGVGcm9tUGFyc2VkSlNPTihwYXJzZWRUb0RvSXRlbSkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiBsaXN0XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgVG9Eb0FwcCBmcm9tICcuLi9sb2dpYy9Ub0RvQXBwJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RvcmFnZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihsb2NhbFN0b3JhZ2VLZXkpIHtcclxuICAgICAgICB0aGlzLmxvY2FsU3RvcmFnZUtleSA9IGxvY2FsU3RvcmFnZUtleVxyXG4gICAgICAgIHRoaXMuYXBwUHJveHkgPSB0aGlzLmxvYWRBcHAoKVxyXG4gICAgfVxyXG5cclxuICAgIGxvYWRBcHAoKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgdGhpcy5kaXJlY3RBcHAgPSBUb0RvQXBwLmNyZWF0ZUZyb21QYXJzZWRKU09OKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5sb2NhbFN0b3JhZ2VLZXkpKSlcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICB0aGlzLmRpcmVjdEFwcCA9IG5ldyBUb0RvQXBwKClcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5sb2NhbFN0b3JhZ2VLZXksIEpTT04uc3RyaW5naWZ5KHRoaXMuZGlyZWN0QXBwKSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgUHJveHkodGhpcy5kaXJlY3RBcHAsIHRoaXMuI3Byb3h5Q2hhbmdlSGFuZGxlcilcclxuICAgIH1cclxuXHJcbiAgICAjcHJveHlDaGFuZ2VIYW5kbGVyID0ge1xyXG4gICAgICAgIGdldDogKHRhcmdldCwga2V5KSA9PiB7XHJcbiAgICAgICAgICBpZih0eXBlb2YgdGFyZ2V0W2tleV0gPT09IFwib2JqZWN0XCIgJiYgdGFyZ2V0W2tleV0gIT09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm94eSh0YXJnZXRba2V5XSwgdGhpcy4jcHJveHlDaGFuZ2VIYW5kbGVyKVxyXG4gICAgICAgICAgfVxyXG4gICAgICBcclxuICAgICAgICAgIHJldHVybiB0YXJnZXRba2V5XVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0OiAodGFyZ2V0LCBwcm9wLCB2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICB0YXJnZXRbcHJvcF0gPSB2YWx1ZVxyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLmxvY2FsU3RvcmFnZUtleSwgSlNPTi5zdHJpbmdpZnkodGhpcy5kaXJlY3RBcHApKVxyXG4gICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUhlYWRlcihwYXJlbnRFbGVtZW50LCBhcHBOYW1lKSB7XHJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXHJcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBhcHBOYW1lXHJcbiAgICBwYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKGhlYWRlcilcclxuICAgIHJldHVybiBoZWFkZXJcclxufSIsImltcG9ydCB7IHNldE1vZGFsQ29udGVudCB9IGZyb20gJy4vUG9wdXAnXHJcblxyXG5mdW5jdGlvbiB0YXNrSXRlbUZhY3RvcnkoaWQsIHRpdGxlLCBkdWVEYXRlLCBwcmlvcml0eSkge1xyXG4gICAgY29uc3QgdGFza0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXHJcbiAgICB0YXNrSXRlbS5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgPGlucHV0IGNsYXNzPVwidGFzay1jb21wbGV0aW9uXCIgdHlwZT1cImNoZWNrYm94XCIvPlxyXG4gICAgICAgIDxoNCBjbGFzcz1cInRhc2stbmFtZVwiPiR7dGl0bGV9PC9oND5cclxuICAgICAgICA8aDQgY2xhc3M9XCJkdWUtZGF0ZVwiPiR7ZHVlRGF0ZX08L2g0PlxyXG4gICAgICAgIDxoNCBjbGFzcz1cInByaW9yaXR5XCI+JHtwcmlvcml0eX08L2g0PlxyXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJ0YXNrLWRlc2NyaXB0aW9uIG9wZW4tcG9wdXBcIj5EZXNjcmlwdGlvbjwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJlZGl0LXRhc2sgb3Blbi1wb3B1cFwiPkVkaXQ8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZGVsZXRlLXRhc2tcIj5EZWxldGU8L2J1dHRvbj5cclxuICAgIGBcclxuXHJcbiAgICB0YXNrSXRlbS5pZCA9IGlkXHJcbiAgICByZXR1cm4gdGFza0l0ZW1cclxufVxyXG5cclxuZnVuY3Rpb24gZGVzY3JpcHRpb25WaWV3RmFjdG9yeSh0YXNrTmFtZSwgY29udGVudCkge1xyXG4gICAgY29uc3QgZGVzY3JpcHRpb25Cb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgZGVzY3JpcHRpb25Cb3guaW5uZXJIVE1MID0gYFxyXG4gICAgICAgIDxoMiBjbGFzcz1cInRhc2stZGVzY3JpcHRpb24tdGl0bGVcIj4ke3Rhc2tOYW1lfTwvaDI+XHJcbiAgICAgICAgPHAgY2xhc3M9XCJ0YXNrLWRlc2NyaXB0aW9uLWJvZHlcIj4ke2NvbnRlbnR9PC9wPlxyXG4gICAgYFxyXG4gICAgcmV0dXJuIGRlc2NyaXB0aW9uQm94XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpc3RWaWV3IHtcclxuICAgIGNvbnN0cnVjdG9yKHBhcmVudEVsZW1lbnQpIHtcclxuICAgICAgICBwYXJlbnRFbGVtZW50LmlubmVySFRNTCArPSBgXHJcbiAgICAgICAgICAgIDxoMiBjbGFzcz1cInByb2plY3QtbmFtZS1oZWFkaW5nXCI+PC9oMj5cclxuICAgICAgICAgICAgPHVsIGNsYXNzPVwidG8tZG8tbGlzdFwiPjwvdWw+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJhZGQtdG8tZG8gb3Blbi1wb3B1cFwiPkFkZCBUYXNrPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9J3JlbW92ZS1kb25lLXRhc2tzXCI+UmVtb3ZlIGNvbXBsZXRlZCB0YXNrczwvYnV0dG9uPlxyXG4gICAgICAgIGBcclxuICAgICAgICB0aGlzLmhlYWRpbmcgPSBwYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2gyJylcclxuICAgICAgICB0aGlzLmxpc3RFbGVtZW50ID0gcGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcudG8tZG8tbGlzdCcpXHJcbiAgICAgICAgdGhpcy5hZGRUYXNrQnV0dG9uID0gcGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRvLWRvJylcclxuICAgICAgICB0aGlzLnJlbW92ZURvbmVUYXNrc0J1dHRvbiA9IHBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLnJlbW92ZS1kb25lLXRhc2tzJylcclxuXHJcbiAgICAgICAgdGhpcy50YXNrQ3JlYXRpb25Gb3JtID0gbmV3IFRhc2tDcmVhdGlvbkZvcm0oKVxyXG4gICAgICAgIHRoaXMudGFza0VkaXRpb25Gb3JtID0gbmV3IFRhc2tFZGl0aW9uRm9ybSgpXHJcblxyXG4gICAgICAgIHRoaXMuX3NldHVwQWRkVGFza0J1dHRvbigpXHJcbiAgICAgICAgdGhpcy5fc2V0dXBEZXNjcmlwdGlvbkJ1dHRvbigpXHJcbiAgICAgICAgdGhpcy5fc2V0dXBFZGl0VGFza0J1dHRvbigpXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKHRhc2tzKSB7XHJcbiAgICAgICAgdGhpcy5fY2xlYXIoKVxyXG4gICAgICAgIHRhc2tzLmZvckVhY2godGFzayA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX2FkZFRhc2sodGFzay5pZCwgdGFzay50aXRsZSwgdGFzay5kdWVEYXRlLCB0YXNrLnByaW9yaXR5KVxyXG4gICAgICAgICAgICB0aGlzLl9zZXRUYXNrQ29tcGxldGlvbih0YXNrLmlkLCB0YXNrLmNvbXBsZXRlZClcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMuX21hcFRhc2tzVG9EZXNjcmlwdGlvbnModGFza3MpXHJcbiAgICB9XHJcblxyXG4gICAgX3NldFRhc2tDb21wbGV0aW9uKGlkLCBuZXdTdGF0ZSkge1xyXG4gICAgICAgIHRoaXMubGlzdEVsZW1lbnQucXVlcnlTZWxlY3RvcihgW2lkPVwiJHtpZH1cIl1gKS5xdWVyeVNlbGVjdG9yKCcudGFzay1jb21wbGV0aW9uJykuY2hlY2tlZCA9IG5ld1N0YXRlIFxyXG4gICAgfVxyXG5cclxuICAgIF9hZGRUYXNrKGlkLCB0aXRsZSwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcclxuICAgICAgICB0aGlzLmxpc3RFbGVtZW50LmFwcGVuZENoaWxkKHRhc2tJdGVtRmFjdG9yeShpZCwgdGl0bGUsIGR1ZURhdGUsIHByaW9yaXR5KSlcclxuICAgIH1cclxuXHJcbiAgICBfY2xlYXIoKSB7XHJcbiAgICAgICAgdGhpcy5saXN0RWxlbWVudC5pbm5lckhUTUwgPSAnJ1xyXG4gICAgfVxyXG5cclxuICAgIF9zZXR1cEFkZFRhc2tCdXR0b24oKSB7XHJcbiAgICAgICAgdGhpcy5hZGRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudGFza0NyZWF0aW9uRm9ybS5jbGVhcigpXHJcbiAgICAgICAgICAgIHNldE1vZGFsQ29udGVudCh0aGlzLnRhc2tDcmVhdGlvbkZvcm0uZWxlbWVudClcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIF9zZXR1cEVkaXRUYXNrQnV0dG9uKCkge1xyXG4gICAgICAgIHRoaXMubGlzdEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICAgICAgICAgICAgdGhpcy50YXNrRWRpdGlvbkZvcm0uY2xlYXIoKVxyXG4gICAgICAgICAgICBjb25zdCBwb3RlbnRpYWxseVByZXNzZWRFZGl0QnV0dG9uID0gZS50YXJnZXQuY2xvc2VzdCgnLmVkaXQtdGFzaycpIFxyXG4gICAgICAgICAgICBpZiAoIXBvdGVudGlhbGx5UHJlc3NlZEVkaXRCdXR0b24pIHJldHVyblxyXG4gICAgICAgICAgICBjb25zdCBwcmVzc2VkVGFzayA9IHBvdGVudGlhbGx5UHJlc3NlZEVkaXRCdXR0b24uY2xvc2VzdCgnbGknKVxyXG4gICAgICAgICAgICB0aGlzLmlkT2ZUYXNrVW5kZXJFZGl0aW9uID0gcHJlc3NlZFRhc2suaWRcclxuICAgICAgICAgICAgdGhpcy50YXNrRWRpdGlvbkZvcm0ubG9hZFZhbHVlcyhcclxuICAgICAgICAgICAgICAgIHByZXNzZWRUYXNrLnF1ZXJ5U2VsZWN0b3IoJy50YXNrLW5hbWUnKS50ZXh0Q29udGVudCxcclxuICAgICAgICAgICAgICAgIHByZXNzZWRUYXNrLnF1ZXJ5U2VsZWN0b3IoJy5kdWUtZGF0ZScpLnRleHRDb250ZW50LFxyXG4gICAgICAgICAgICAgICAgcHJlc3NlZFRhc2sucXVlcnlTZWxlY3RvcignLnByaW9yaXR5JykudGV4dENvbnRlbnQudG9Mb3dlckNhc2UoKSxcclxuICAgICAgICAgICAgICAgIHRoaXMudGFza3NUb0Rlc2NyaXB0aW9uc01hcFtwcmVzc2VkVGFzay5pZF1cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICBzZXRNb2RhbENvbnRlbnQodGhpcy50YXNrRWRpdGlvbkZvcm0uZWxlbWVudClcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIF9tYXBUYXNrc1RvRGVzY3JpcHRpb25zKHRhc2tzKSB7XHJcbiAgICAgICAgdGhpcy50YXNrc1RvRGVzY3JpcHRpb25zTWFwID0ge31cclxuICAgICAgICB0YXNrcy5mb3JFYWNoKHRhc2sgPT4gdGhpcy50YXNrc1RvRGVzY3JpcHRpb25zTWFwW3Rhc2suaWRdID0gdGFzay5kZXNjcmlwdGlvbilcclxuICAgIH1cclxuXHJcbiAgICBfc2V0dXBEZXNjcmlwdGlvbkJ1dHRvbigpIHtcclxuICAgICAgICB0aGlzLmxpc3RFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBvdGVudGlhbGx5UHJlc3NlZERlc2NyaXB0aW9uQnV0dG9uID0gZS50YXJnZXQuY2xvc2VzdCgnLnRhc2stZGVzY3JpcHRpb24nKSBcclxuICAgICAgICAgICAgaWYgKCFwb3RlbnRpYWxseVByZXNzZWREZXNjcmlwdGlvbkJ1dHRvbikgcmV0dXJuXHJcbiAgICAgICAgICAgIGNvbnN0IHByZXNzZWRUYXNrID0gcG90ZW50aWFsbHlQcmVzc2VkRGVzY3JpcHRpb25CdXR0b24uY2xvc2VzdCgnbGknKVxyXG4gICAgICAgICAgICBjb25zdCBkZXNjcmlwdGlvbkJveCA9IGRlc2NyaXB0aW9uVmlld0ZhY3RvcnkoXHJcbiAgICAgICAgICAgICAgICBwcmVzc2VkVGFzay5xdWVyeVNlbGVjdG9yKCcudGFzay1uYW1lJykudGV4dENvbnRlbnQsXHJcbiAgICAgICAgICAgICAgICB0aGlzLnRhc2tzVG9EZXNjcmlwdGlvbnNNYXBbcHJlc3NlZFRhc2suaWRdXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIHNldE1vZGFsQ29udGVudChkZXNjcmlwdGlvbkJveClcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHNldEhlYWRlclRpdGxlKHRpdGxlKSB7XHJcbiAgICAgICAgdGhpcy5oZWFkaW5nLmlubmVySFRNTCA9IHRpdGxlXHJcbiAgICB9XHJcblxyXG4gICAgYmluZEFkZFRhc2tCdXR0b24oYWN0aW9uKSB7XHJcbiAgICAgICAgdGhpcy50YXNrQ3JlYXRpb25Gb3JtLmNvbmZpcm1CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICAgICAgICAgICAgYWN0aW9uKFxyXG4gICAgICAgICAgICAgICAgdGhpcy50YXNrQ3JlYXRpb25Gb3JtLm5hbWVJbnB1dC52YWx1ZSxcclxuICAgICAgICAgICAgICAgIHRoaXMudGFza0NyZWF0aW9uRm9ybS5kdWVEYXRlUGlja2VyLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgdGhpcy50YXNrQ3JlYXRpb25Gb3JtLnByaW9yaXR5U2VsZWN0aW9uLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgdGhpcy50YXNrQ3JlYXRpb25Gb3JtLnRhc2tEZXNjcmlwdGlvbi52YWx1ZVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBiaW5kRWRpdFRhc2tCdXR0b24oYWN0aW9uKSB7XHJcbiAgICAgICAgdGhpcy50YXNrRWRpdGlvbkZvcm0uY29uZmlybUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG4gICAgICAgICAgICBhY3Rpb24oXHJcbiAgICAgICAgICAgICAgICB0aGlzLmlkT2ZUYXNrVW5kZXJFZGl0aW9uLFxyXG4gICAgICAgICAgICAgICAgdGhpcy50YXNrRWRpdGlvbkZvcm0ubmFtZUlucHV0LnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgdGhpcy50YXNrRWRpdGlvbkZvcm0uZHVlRGF0ZVBpY2tlci52YWx1ZSxcclxuICAgICAgICAgICAgICAgIHRoaXMudGFza0VkaXRpb25Gb3JtLnByaW9yaXR5U2VsZWN0aW9uLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgdGhpcy50YXNrRWRpdGlvbkZvcm0udGFza0Rlc2NyaXB0aW9uLnZhbHVlXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGJpbmREZWxldGVUYXNrQnV0dG9uKGFjdGlvbikge1xyXG4gICAgICAgIHRoaXMubGlzdEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcG90ZW50aWFsbHlQcmVzc2VkRGVsZXRlQnV0dG9uID0gZS50YXJnZXQuY2xvc2VzdCgnLmRlbGV0ZS10YXNrJykgXHJcbiAgICAgICAgICAgIGlmICghcG90ZW50aWFsbHlQcmVzc2VkRGVsZXRlQnV0dG9uKSByZXR1cm5cclxuICAgICAgICAgICAgY29uc3QgcHJlc3NlZFRhc2sgPSBwb3RlbnRpYWxseVByZXNzZWREZWxldGVCdXR0b24uY2xvc2VzdCgnbGknKVxyXG4gICAgICAgICAgICBhY3Rpb24ocHJlc3NlZFRhc2suaWQpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBiaW5kQ29tcGxldGlvbkNoZWNrYm94KGFjdGlvbikge1xyXG4gICAgICAgIHRoaXMubGlzdEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICAgICAgICAgICAgaWYgKCFlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3Rhc2stY29tcGxldGlvbicpKSByZXR1cm47XHJcbiAgICAgICAgICAgIGFjdGlvbih0aGlzLmdldENsb3Nlc3RMaXN0SXRlbUlkKGUudGFyZ2V0KSwgZS50YXJnZXQuY2hlY2tlZClcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGdldENsb3Nlc3RMaXN0SXRlbUlkKGNoaWxkRm9yV2hpY2hXZVNlYXJjaENsb3Nlc3RMaXN0SXRlbSkge1xyXG4gICAgICAgIHJldHVybiBjaGlsZEZvcldoaWNoV2VTZWFyY2hDbG9zZXN0TGlzdEl0ZW0uY2xvc2VzdCgnbGknKS5pZFxyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBUYXNrRm9ybSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLl9jcmVhdGVFbGVtZW50KClcclxuICAgICAgICB0aGlzLl9hZGRQcmlvcml0eVNlbGVjdE9wdGlvbnMoKVxyXG4gICAgfVxyXG5cclxuICAgIF9jcmVhdGVFbGVtZW50KCkge1xyXG4gICAgICAgIGNvbnN0IHRhc2tDcmVhdGlvbkZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIHRhc2tDcmVhdGlvbkZvcm0uY2xhc3NMaXN0LmFkZCgndGFzay1jcmVhdGlvbicpXHJcblxyXG4gICAgICAgIHRhc2tDcmVhdGlvbkZvcm0uaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwidGFzay1uYW1lLWlucHV0XCI+UHJvamVjdCBuYW1lOjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dCBpZD1cInRhc2stbmFtZS1pbnB1dFwiIHR5cGU9XCJ0ZXh0XCIvPlxyXG5cclxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImR1ZS1kYXRlLXBpY2tlclwiPkR1ZSBkYXRlOjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dCBpZD1cImR1ZS1kYXRlLXBpY2tlclwiIHR5cGU9XCJkYXRlXCIvPlxyXG5cclxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cInByaW9yaXR5LXNlbGVjdGlvblwiPlByaW9yaXR5OjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxzZWxlY3QgaWQ9XCJwcmlvcml0eS1zZWxlY3Rpb25cIj48L3NlbGVjdD5cclxuXHJcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0YXNrLWRlc2NyaXB0aW9uXCI+RGVzY3JpcHRpb246PC9sYWJlbD5cclxuICAgICAgICAgICAgPHRleHRhcmVhIGlkPVwidGFzay1kZXNjcmlwdGlvblwiPjwvdGV4dGFyZWE+XHJcblxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY29uZmlybS10YXNrLWZvcm0gY2xvc2UtcG9wdXBcIj48L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNhbmNlbC10YXNrLWZvcm0gY2xvc2UtcG9wdXBcIj5DYW5jZWw8L2J1dHRvbj5cclxuICAgICAgICBgXHJcbiAgICAgICAgdGhpcy5uYW1lSW5wdXQgPSB0YXNrQ3JlYXRpb25Gb3JtLnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLW5hbWUtaW5wdXQnKVxyXG4gICAgICAgIHRoaXMuZHVlRGF0ZVBpY2tlciA9IHRhc2tDcmVhdGlvbkZvcm0ucXVlcnlTZWxlY3RvcignI2R1ZS1kYXRlLXBpY2tlcicpXHJcbiAgICAgICAgdGhpcy5wcmlvcml0eVNlbGVjdGlvbiA9IHRhc2tDcmVhdGlvbkZvcm0ucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5LXNlbGVjdGlvbicpXHJcbiAgICAgICAgdGhpcy50YXNrRGVzY3JpcHRpb24gPSB0YXNrQ3JlYXRpb25Gb3JtLnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWRlc2NyaXB0aW9uJylcclxuICAgICAgICB0aGlzLmNvbmZpcm1CdXR0b24gPSB0YXNrQ3JlYXRpb25Gb3JtLnF1ZXJ5U2VsZWN0b3IoJy5jb25maXJtLXRhc2stZm9ybScpXHJcbiAgICAgICAgdGhpcy5jYW5jZWxCdXR0b24gPSB0YXNrQ3JlYXRpb25Gb3JtLnF1ZXJ5U2VsZWN0b3IoJy5jYW5jZWwtdGFzay1mb3JtJylcclxuICAgICAgICB0aGlzLmVsZW1lbnQgPSB0YXNrQ3JlYXRpb25Gb3JtXHJcbiAgICB9XHJcblxyXG4gICAgX2FkZFByaW9yaXR5U2VsZWN0T3B0aW9ucygpIHtcclxuICAgICAgICB0aGlzLnByaW9yaXR5U2VsZWN0aW9uLmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImxvd1wiPkxvdzwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibWVkaXVtXCI+TWVkaXVtPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJoaWdoXCI+SGlnaDwvb3B0aW9uPlxyXG4gICAgICAgIGAgXHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXIoKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lSW5wdXQudmFsdWUgPSAnJ1xyXG4gICAgICAgIHRoaXMuZHVlRGF0ZVBpY2tlci52YWx1ZSA9ICcnXHJcbiAgICAgICAgdGhpcy5wcmlvcml0eVNlbGVjdGlvbi52YWx1ZSA9ICdsb3cnXHJcbiAgICAgICAgdGhpcy50YXNrRGVzY3JpcHRpb24udmFsdWUgPSAnJ1xyXG4gICAgfVxyXG5cclxuICAgIHNldENvbmZpcm1CdXR0b25UZXh0KG5ld1RleHQpIHtcclxuICAgICAgICB0aGlzLmNvbmZpcm1CdXR0b24udGV4dENvbnRlbnQgPSBuZXdUZXh0XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIFRhc2tDcmVhdGlvbkZvcm0gZXh0ZW5kcyBUYXNrRm9ybSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpXHJcbiAgICAgICAgdGhpcy5zZXRDb25maXJtQnV0dG9uVGV4dCgnQWRkJylcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgVGFza0VkaXRpb25Gb3JtIGV4dGVuZHMgVGFza0Zvcm0ge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKVxyXG4gICAgICAgIHRoaXMuc2V0Q29uZmlybUJ1dHRvblRleHQoJ0VkaXQnKVxyXG4gICAgfVxyXG5cclxuICAgIGxvYWRWYWx1ZXMoXHJcbiAgICAgICAgbmFtZSxcclxuICAgICAgICBkYXRlLFxyXG4gICAgICAgIHByaW9yaXR5LFxyXG4gICAgICAgIGRlc2NyaXB0aW9uXHJcbiAgICApIHtcclxuICAgICAgICB0aGlzLm5hbWVJbnB1dC52YWx1ZSA9IG5hbWVcclxuICAgICAgICB0aGlzLmR1ZURhdGVQaWNrZXIudmFsdWUgPSBkYXRlXHJcbiAgICAgICAgdGhpcy5wcmlvcml0eVNlbGVjdGlvbi52YWx1ZSA9IHByaW9yaXR5XHJcbiAgICAgICAgdGhpcy50YXNrRGVzY3JpcHRpb24udmFsdWUgPSBkZXNjcmlwdGlvblxyXG4gICAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2V0dXBQb3B1cCgpIHtcclxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JylcclxuICAgIGNvbnN0IHBvcHVwV3JhcHBlciA9IGNyZWF0ZVBvcHVwV3JhcHBlcigpXHJcbiAgICBjb25zdCBvdmVybGF5ID0gY3JlYXRlT3ZlcmxheSgpXHJcblxyXG4gICAgYm9keS5hcHBlbmRDaGlsZChwb3B1cFdyYXBwZXIpXHJcbiAgICBib2R5LmFwcGVuZENoaWxkKG92ZXJsYXkpXHJcblxyXG4gICAgYWRkT3BlblBvcHVwRXZlbnRMaXN0ZW5lcigpXHJcbiAgICBhZGRDbG9zZVBvcHVwRXZlbnRMaXN0ZW5lcigpXHJcbiAgICBjbG9zZU1vZGFsQnlDbGlja2luZ091dHNpZGVJdCgpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVBvcHVwV3JhcHBlcigpIHtcclxuICAgIGNvbnN0IHBvcHVwV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBwb3B1cFdyYXBwZXIuaWQgPSAnbW9kYWwnXHJcbiAgICByZXR1cm4gcG9wdXBXcmFwcGVyXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU92ZXJsYXkoKSB7XHJcbiAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIG92ZXJsYXkuaWQgPSAnb3ZlcmxheSdcclxuICAgIHJldHVybiBvdmVybGF5XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9wZW5Nb2RhbCgpIHtcclxuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsJylcclxuICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjb3ZlcmxheScpXHJcbiAgICBcclxuICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXHJcbiAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXHJcbiAgfVxyXG4gIFxyXG5mdW5jdGlvbiBjbG9zZU1vZGFsKCkge1xyXG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwnKVxyXG4gICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNvdmVybGF5JylcclxuXHJcbiAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG4gICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRPcGVuUG9wdXBFdmVudExpc3RlbmVyKCkge1xyXG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2h0bWwnKVxyXG4gICAgaHRtbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG4gICAgICAgIGxldCBvcGVuUG9wdXBCdXR0b24gPSBlLnRhcmdldC5jbG9zZXN0KCcub3Blbi1wb3B1cCcpXHJcbiAgICAgICAgaWYgKCFvcGVuUG9wdXBCdXR0b24pIHJldHVyblxyXG4gICAgICAgIG9wZW5Nb2RhbCgpXHJcbiAgICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRDbG9zZVBvcHVwRXZlbnRMaXN0ZW5lcigpIHtcclxuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdodG1sJylcclxuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsJylcclxuICAgIGh0bWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICAgICAgICBsZXQgY2xvc2VQb3B1cEJ1dHRvbiA9IGUudGFyZ2V0LmNsb3Nlc3QoJy5jbG9zZS1wb3B1cCcpXHJcbiAgICAgICAgaWYgKCFjbG9zZVBvcHVwQnV0dG9uKSByZXR1cm5cclxuICAgICAgICBjbG9zZU1vZGFsKClcclxuICAgICAgICBtb2RhbC5pbm5lckhUTUwgPSAnJ1xyXG4gICAgfSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldE1vZGFsQ29udGVudChlbGVtZW50VG9BcHBlbmQpIHtcclxuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsJylcclxuICAgIG1vZGFsLmlubmVySFRNTCA9ICcnXHJcbiAgICBtb2RhbC5hcHBlbmRDaGlsZChlbGVtZW50VG9BcHBlbmQpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsb3NlTW9kYWxCeUNsaWNraW5nT3V0c2lkZUl0KCkge1xyXG4gICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNvdmVybGF5JylcclxuICAgIG92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICAgICAgICBjbG9zZU1vZGFsKClcclxuICAgIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzTW9kYWxBY3RpdmUoKSB7XHJcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbCcpXHJcbiAgICByZXR1cm4gbW9kYWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKVxyXG59IiwiaW1wb3J0IHsgc2V0TW9kYWxDb250ZW50IH0gZnJvbSAnLi9Qb3B1cCdcclxuXHJcbmZ1bmN0aW9uIHByb2plY3RJdGVtRmFjdG9yeShpZCwgcHJvamVjdE5hbWUpIHtcclxuICAgIGNvbnN0IHByb2plY3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxyXG4gICAgcHJvamVjdEl0ZW0uaW5uZXJIVE1MID0gYFxyXG4gICAgICAgIDxoNCBjbGFzcz1cInByb2plY3QtbmFtZVwiPiR7cHJvamVjdE5hbWV9PC9oND5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZWRpdC1wcm9qZWN0IG9wZW4tcG9wdXBcIj5FZGl0PC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImRlbGV0ZS1wcm9qZWN0XCI+RGVsZXRlPC9idXR0b24+XHJcbiAgICBgXHJcbiAgICBwcm9qZWN0SXRlbS5zZXRBdHRyaWJ1dGUoJ2lkJywgaWQpXHJcbiAgICByZXR1cm4gcHJvamVjdEl0ZW1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdHNWaWV3IHtcclxuICAgIGNvbnN0cnVjdG9yKHBhcmVudEVsZW1lbnQpIHtcclxuICAgICAgICBwYXJlbnRFbGVtZW50LmlubmVySFRNTCArPSBgXHJcbiAgICAgICAgPGgzPlByb2plY3RzPC9oMz5cclxuICAgICAgICA8dWwgY2xhc3M9XCJwcm9qZWN0LWxpc3RcIj48L3VsPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJhZGQgb3Blbi1wb3B1cFwiPkFkZDwvYnV0dG9uPlxyXG4gICAgYFxyXG4gICAgdGhpcy5oZWFkaW5nID0gcGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCdoMycpXHJcbiAgICB0aGlzLmxpc3RFbGVtZW50ID0gcGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1saXN0JylcclxuICAgIHRoaXMuYWRkUHJvamVjdEJ1dHRvbiA9IHBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLmFkZCcpXHJcbiAgICB0aGlzLnByb2plY3RDcmVhdGlvbkZvcm0gPSBuZXcgUHJvamVjdENyZWF0aW9uRm9ybSgpXHJcbiAgICB0aGlzLnByb2plY3RFZGl0aW9uRm9ybSA9IG5ldyBQcm9qZWN0RWRpdGlvbkZvcm0oKVxyXG4gICAgdGhpcy5fc2V0dXBBZGRQcm9qZWN0QnV0dG9uKClcclxuICAgIHRoaXMuX3NldHVwRWRpdFByb2plY3RCdXR0b24oKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcihwcm9qZWN0cykge1xyXG4gICAgICAgIHRoaXMuX2NsZWFyKClcclxuICAgICAgICBwcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4gdGhpcy5fYWRkUHJvamVjdChwcm9qZWN0LmlkLCBwcm9qZWN0LnRpdGxlKSlcclxuICAgIH1cclxuXHJcbiAgICBfYWRkUHJvamVjdChpZCwgbmFtZSkge1xyXG4gICAgICAgIHRoaXMubGlzdEVsZW1lbnQuYXBwZW5kQ2hpbGQocHJvamVjdEl0ZW1GYWN0b3J5KGlkLCBuYW1lKSlcclxuICAgIH1cclxuXHJcbiAgICBfY2xlYXIoKSB7XHJcbiAgICAgICAgdGhpcy5saXN0RWxlbWVudC5pbm5lckhUTUwgPSAnJ1xyXG4gICAgfVxyXG5cclxuICAgIF9zZXR1cEFkZFByb2plY3RCdXR0b24oKSB7XHJcbiAgICAgICAgdGhpcy5hZGRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvamVjdENyZWF0aW9uRm9ybS5jbGVhcklucHV0KClcclxuICAgICAgICAgICAgc2V0TW9kYWxDb250ZW50KHRoaXMucHJvamVjdENyZWF0aW9uRm9ybS5lbGVtZW50KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgX3NldHVwRWRpdFByb2plY3RCdXR0b24oKSB7XHJcbiAgICAgICAgdGhpcy5saXN0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnByb2plY3RFZGl0aW9uRm9ybS5jbGVhcklucHV0KClcclxuICAgICAgICAgICAgY29uc3QgZWRpdFByb2plY3RCdXR0b24gPSBlLnRhcmdldC5jbG9zZXN0KCdidXR0b24uZWRpdC1wcm9qZWN0JylcclxuICAgICAgICAgICAgaWYgKCFlZGl0UHJvamVjdEJ1dHRvbikgcmV0dXJuXHJcbiAgICAgICAgICAgIHNldE1vZGFsQ29udGVudCh0aGlzLnByb2plY3RFZGl0aW9uRm9ybS5lbGVtZW50KVxyXG4gICAgICAgICAgICB0aGlzLmlkT2ZQcm9qZWN0QmVpbmdFZGl0dGVkID0gZS50YXJnZXQuY2xvc2VzdCgnbGknKS5pZFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgaGlnaGxpZ2h0UHJvamVjdChpZCkge1xyXG4gICAgICAgIGNvbnN0IGFjdGl2ZVByb2plY3QgPSB0aGlzLmxpc3RFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYGxpW2lkPVwiJHtpZH1cIl1gKVxyXG4gICAgICAgIGFjdGl2ZVByb2plY3QuY2xhc3NMaXN0LmFkZCgnYWN0aXZlLXByb2plY3QnKVxyXG4gICAgfVxyXG5cclxuICAgIGJpbmRBZGRQcm9qZWN0QnV0dG9uKGFjdGlvbikge1xyXG4gICAgICAgIGNvbnN0IGFkZFByb2plY3RCdXR0b24gPSB0aGlzLnByb2plY3RDcmVhdGlvbkZvcm0uZ2V0QWRkUHJvamVjdEJ1dHRvbigpXHJcbiAgICAgICAgYWRkUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4gYWN0aW9uKHRoaXMucHJvamVjdENyZWF0aW9uRm9ybS5nZXRJbnB1dEZpZWxkVmFsdWUoKSkpXHJcbiAgICB9XHJcblxyXG4gICAgYmluZEVkaXRQcm9qZWN0QnV0dG9uKGFjdGlvbikge1xyXG4gICAgICAgIGNvbnN0IGVkaXRQcm9qZWN0QnV0dG9uID0gdGhpcy5wcm9qZWN0RWRpdGlvbkZvcm0uZ2V0RWRpdFByb2plY3RCdXR0b24oKVxyXG4gICAgICAgIGVkaXRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgICAgICAgICAgIGFjdGlvbih0aGlzLmlkT2ZQcm9qZWN0QmVpbmdFZGl0dGVkLCB0aGlzLnByb2plY3RFZGl0aW9uRm9ybS5nZXRJbnB1dEZpZWxkVmFsdWUoKSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGJpbmREZWxldGVQcm9qZWN0QnV0dG9uKGFjdGlvbikge1xyXG4gICAgICAgIHRoaXMubGlzdEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcHJlc3NlZERlbGV0ZUJ1dHRvbiA9IGUudGFyZ2V0LmNsb3Nlc3QoJy5kZWxldGUtcHJvamVjdCcpXHJcbiAgICAgICAgICAgIGlmICghcHJlc3NlZERlbGV0ZUJ1dHRvbikgcmV0dXJuXHJcbiAgICAgICAgICAgIGNvbnN0IHByZXNzZWRMaXN0SXRlbSA9IHByZXNzZWREZWxldGVCdXR0b24uY2xvc2VzdCgnbGknKVxyXG4gICAgICAgICAgICBhY3Rpb24ocHJlc3NlZExpc3RJdGVtLmlkKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgYmluZFByb2plY3RTZWxlY3Rpb24oYWN0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5saXN0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcHJvamVjdExpc3RJdGVtID0gZS50YXJnZXQuY2xvc2VzdCgnbGknKVxyXG4gICAgICAgICAgICBpZiAoIXByb2plY3RMaXN0SXRlbSkgcmV0dXJuXHJcbiAgICAgICAgICAgIGlmIChlLnRhcmdldC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdidXR0b24nKSByZXR1cm5cclxuICAgICAgICAgICAgYWN0aW9uKHByb2plY3RMaXN0SXRlbS5pZClcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBQcm9qZWN0Q3JlYXRpb25Gb3JtIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudCA9IHRoaXMuX2NyZWF0ZUVsZW1lbnQoKVxyXG4gICAgfVxyXG5cclxuICAgIF9jcmVhdGVFbGVtZW50KCkge1xyXG4gICAgICAgIGNvbnN0IHByb2plY3RDcmVhdGlvbkZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIHByb2plY3RDcmVhdGlvbkZvcm0uY2xhc3NMaXN0LmFkZCgncHJvamVjdC1jcmVhdGlvbicpXHJcbiAgICBcclxuICAgICAgICBwcm9qZWN0Q3JlYXRpb25Gb3JtLmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cInByb2plY3QtbmFtZS1pbnB1dFwiPlByb2plY3QgbmFtZTo8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXQgaWQ9XCJwcm9qZWN0LW5hbWUtaW5wdXRcIiB0eXBlPVwidGV4dFwiLz5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImFkZC1wcm9qZWN0IGNsb3NlLXBvcHVwXCI+QWRkPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJjbG9zZS1wb3B1cFwiPkNhbmNlbDwvYnV0dG9uPlxyXG4gICAgICAgIGBcclxuICAgICAgICByZXR1cm4gcHJvamVjdENyZWF0aW9uRm9ybVxyXG4gICAgfVxyXG5cclxuICAgIGNsZWFySW5wdXQoKSB7XHJcbiAgICAgICAgY29uc3QgZm9ybUlucHV0ID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LW5hbWUtaW5wdXQnKVxyXG4gICAgICAgIGZvcm1JbnB1dC52YWx1ZSA9ICcnXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QWRkUHJvamVjdEJ1dHRvbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtcHJvamVjdCcpXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SW5wdXRGaWVsZFZhbHVlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtbmFtZS1pbnB1dCcpLnZhbHVlXHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBQcm9qZWN0RWRpdGlvbkZvcm0ge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gdGhpcy5fY3JlYXRlRWxlbWVudCgpXHJcbiAgICB9XHJcblxyXG4gICAgX2NyZWF0ZUVsZW1lbnQoKSB7XHJcbiAgICAgICAgY29uc3QgcHJvamVjdEVkaXRpb25Gb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICBwcm9qZWN0RWRpdGlvbkZvcm0uY2xhc3NMaXN0LmFkZCgncHJvamVjdC1lZGl0aW9uJylcclxuICAgIFxyXG4gICAgICAgIHByb2plY3RFZGl0aW9uRm9ybS5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwcm9qZWN0LW5hbWUtaW5wdXRcIj5OZXcgcHJvamVjdCBuYW1lOjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dCBpZD1cInByb2plY3QtbmFtZS1pbnB1dFwiIHR5cGU9XCJ0ZXh0XCIvPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZWRpdC1wcm9qZWN0IGNsb3NlLXBvcHVwXCI+RWRpdDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY2xvc2UtcG9wdXBcIj5DYW5jZWw8L2J1dHRvbj5cclxuICAgICAgICBgXHJcbiAgICAgICAgcmV0dXJuIHByb2plY3RFZGl0aW9uRm9ybVxyXG4gICAgfVxyXG5cclxuICAgIGNsZWFySW5wdXQoKSB7XHJcbiAgICAgICAgY29uc3QgZm9ybUlucHV0ID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LW5hbWUtaW5wdXQnKVxyXG4gICAgICAgIGZvcm1JbnB1dC52YWx1ZSA9ICcnXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RWRpdFByb2plY3RCdXR0b24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC1wcm9qZWN0JylcclxuICAgIH1cclxuXHJcbiAgICBnZXRJbnB1dEZpZWxkVmFsdWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1uYW1lLWlucHV0JykudmFsdWVcclxuICAgIH1cclxufSIsImltcG9ydCBpbml0TGF5b3V0IGZyb20gJy4vaW5pdExheW91dCdcclxuaW1wb3J0IGNyZWF0ZUhlYWRlciBmcm9tICcuL0hlYWRlcidcclxuaW1wb3J0IFByb2plY3RzVmlldyBmcm9tICcuL1Byb2plY3RzVmlldydcclxuaW1wb3J0IExpc3RWaWV3IGZyb20gJy4vTGlzdFZpZXcnXHJcbmltcG9ydCBzZXR1cFBvcHVwIGZyb20gJy4vUG9wdXAnXHJcblxyXG5leHBvcnQgY2xhc3MgVUkge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgaW5pdExheW91dChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykpXHJcbiAgICAgICAgc2V0dXBQb3B1cCgpXHJcbiAgICAgICAgdGhpcy5oZWFkZXIgPSBjcmVhdGVIZWFkZXIoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcicpLCAnVG9EbycpXHJcbiAgICAgICAgdGhpcy5wcm9qZWN0c1ZpZXcgPSBuZXcgUHJvamVjdHNWaWV3KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyJykpXHJcbiAgICAgICAgdGhpcy5saXN0VmlldyA9IG5ldyBMaXN0Vmlldyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGlzcGxheScpKVxyXG4gICAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdExheW91dChwYXJlbnRFbGVtZW50KSB7XHJcbiAgICBjb25zdCBhcHBXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGFwcFdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnYXBwJylcclxuICAgIFxyXG4gICAgY29uc3QgaGVhZGVyV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBoZWFkZXJXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpXHJcblxyXG4gICAgY29uc3Qgc2lkZWJhcldyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgc2lkZWJhcldyYXBwZXIuY2xhc3NMaXN0LmFkZCgnc2lkZWJhcicpXHJcbiAgICBcclxuICAgIGNvbnN0IGRpc3BsYXlXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGRpc3BsYXlXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2Rpc3BsYXknKVxyXG4gICAgXHJcbiAgICBhcHBXcmFwcGVyLmFwcGVuZENoaWxkKGhlYWRlcldyYXBwZXIpXHJcbiAgICBhcHBXcmFwcGVyLmFwcGVuZENoaWxkKHNpZGViYXJXcmFwcGVyKVxyXG4gICAgYXBwV3JhcHBlci5hcHBlbmRDaGlsZChkaXNwbGF5V3JhcHBlcilcclxuICAgIHBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoYXBwV3JhcHBlcilcclxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVuaXF1ZUlkKCkge1xyXG4gICAgcmV0dXJuIEJpZ0ludChEYXRlLm5vdygpKS50b1N0cmluZygpXHJcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=