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
/* harmony import */ var _logic_ToDoApp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logic/ToDoApp */ "./src/logic/ToDoApp.js");
/* harmony import */ var _controllers_TasksController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./controllers/TasksController */ "./src/controllers/TasksController.js");





class App {
    constructor() {
        this.projectsModel = new _logic_ToDoApp__WEBPACK_IMPORTED_MODULE_2__["default"]()

        this.ui = new _ui_UI__WEBPACK_IMPORTED_MODULE_0__.UI()
        this.tasksController = new _controllers_TasksController__WEBPACK_IMPORTED_MODULE_3__["default"](this.projectsModel, this.ui.listView)
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
/* harmony import */ var _logic_ToDoApp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../logic/ToDoApp */ "./src/logic/ToDoApp.js");
/* harmony import */ var _logic_ToDoList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../logic/ToDoList */ "./src/logic/ToDoList.js");
/* harmony import */ var _ui_ProjectsView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/ProjectsView */ "./src/ui/ProjectsView.js");
/* harmony import */ var _utility_idGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utility/idGenerator */ "./src/utility/idGenerator.js");





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
/* harmony import */ var _ui_ListView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/ListView */ "./src/ui/ListView.js");
/* harmony import */ var _utility_idGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utility/idGenerator */ "./src/utility/idGenerator.js");
/* harmony import */ var _logic_ToDoItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../logic/ToDoItem */ "./src/logic/ToDoItem.js");




class TaskController {
    constructor(projectsModel, tasksView) {
        this.model = projectsModel
        this.view = tasksView
        this.setupAddTaskButton()
        this.setupCompletionCheckbox()
    }

    renderTasks() {
        this.view.render(this.model.currentList.toDoItems)
        this.view.setHeaderTitle(this.model.currentList.title)
    }

    addTask(name, dueDate, priority, description) {
        const newTask = new _logic_ToDoItem__WEBPACK_IMPORTED_MODULE_2__["default"]((0,_utility_idGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(), name, dueDate, priority, description)
        console.log(newTask)
        this.model.currentList.addToDo(newTask)
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

    getTask(id) {
        return this.toDoItems.find(task => task.id == id)
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

        this.taskCreationForm = new TaskForm('add')

        this._setupAddTaskButton()
        this._setupDescriptionButton()
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
    constructor(type) {
        this.type = type
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

            <button class="confirm-task-form close-popup">${this.getConfirmButtonText()}</button>
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

    getConfirmButtonText() {
        let confirmText = ''
        switch (this.type) {
            case 'add':
                confirmText = 'Add'
                break
            case 'edit':
                confirmText = 'Edit'
                break
        }

        return confirmText
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNiZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3RCZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ0x5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLE1BQU07QUFDdEMsK0JBQStCLFFBQVE7QUFDdkMsK0JBQStCLFNBQVM7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLFNBQVM7QUFDdEQsMkNBQTJDLFFBQVE7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsR0FBRztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksd0RBQWU7QUFDM0IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSx3REFBZTtBQUMzQixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0REFBNEQsNEJBQTRCO0FBQ3hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN2TGU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUM3RXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLFlBQVk7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSx3REFBZTtBQUMzQixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHdEQUFlO0FBQzNCO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLHVFQUF1RSxHQUFHO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5SnFDO0FBQ0Y7QUFDTTtBQUNSO0FBQ0Q7QUFDaEM7QUFDTztBQUNQO0FBQ0EsUUFBUSx1REFBVTtBQUNsQixRQUFRLG1EQUFVO0FBQ2xCLHNCQUFzQixtREFBWTtBQUNsQyxnQ0FBZ0MscURBQVk7QUFDNUMsNEJBQTRCLGlEQUFRO0FBQ3BDO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDZGU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2pCZTtBQUNmO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvdWkvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL3VpL3N0eWxlLmNzcz83NmY3Iiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL0FwcC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvY29udHJvbGxlcnMvUHJvamVjdHNDb250cm9sbGVyLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9jb250cm9sbGVycy9UYXNrc0NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9sb2dpYy9Ub0RvQXBwLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9sb2dpYy9Ub0RvSXRlbS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvbG9naWMvVG9Eb0xpc3QuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL3VpL0hlYWRlci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvdWkvTGlzdFZpZXcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL3VpL1BvcHVwLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy91aS9Qcm9qZWN0c1ZpZXcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL3VpL1VJLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy91aS9pbml0TGF5b3V0LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy91dGlsaXR5L2lkR2VuZXJhdG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcclxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXHJcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxyXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcclxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxyXFxuYiwgdSwgaSwgY2VudGVyLFxcclxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxyXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxyXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxyXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxcclxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXFxyXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxyXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXHJcXG5cXHRtYXJnaW46IDA7XFxyXFxuXFx0cGFkZGluZzogMDtcXHJcXG5cXHRib3JkZXI6IDA7XFxyXFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcclxcblxcdGZvbnQ6IGluaGVyaXQ7XFxyXFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcclxcbn1cXHJcXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxyXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXFxyXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXHJcXG5cXHRkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuYm9keSB7XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxyXFxufVxcclxcbm9sLCB1bCB7XFxyXFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuYmxvY2txdW90ZSwgcSB7XFxyXFxuXFx0cXVvdGVzOiBub25lO1xcclxcbn1cXHJcXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXHJcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxyXFxuXFx0Y29udGVudDogJyc7XFxyXFxuXFx0Y29udGVudDogbm9uZTtcXHJcXG59XFxyXFxudGFibGUge1xcclxcblxcdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxyXFxuXFx0Ym9yZGVyLXNwYWNpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbjpyb290IHtcXHJcXG4gICAgLS1kYXJrLWdyZXk6ICM3NTc1NzU7XFxyXFxufVxcclxcblxcclxcbi5hcHAge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNjBweCAxZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxyXFxuICAgICAgICBcXFwiaGVhZGVyIGhlYWRlclxcXCJcXHJcXG4gICAgICAgIFxcXCJzaWRlYmFyIGRpc3BsYXlcXFwiO1xcclxcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciB7XFxyXFxuICAgIGdyaWQtYXJlYTogaGVhZGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzhiZGY4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZWJhciB7XFxyXFxuICAgIGdyaWQtYXJlYTogc2lkZWJhcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcXHJcXG59XFxyXFxuXFxyXFxuLmRpc3BsYXkge1xcclxcbiAgICBncmlkLWFyZWE6IGRpc3BsYXk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdHMtaGVhZGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuI21vZGFsIHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB0b3A6IDUwJTtcXHJcXG4gICAgbGVmdDogNTAlO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgwKTtcXHJcXG4gICAgdHJhbnNpdGlvbjogMjAwbXMgZWFzZS1pbi1vdXQ7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICB6LWluZGV4OiAxMDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIHdpZHRoOiA1MDBweDtcXHJcXG4gICAgbWF4LXdpZHRoOiA4MCU7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gICNtb2RhbC5hY3RpdmUge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNvdmVybGF5IHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgICB0cmFuc2l0aW9uOiAyMDBtcyBlYXNlLWluLW91dDtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC41KTtcXHJcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gICNvdmVybGF5LmFjdGl2ZSB7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucHJvamVjdC1saXN0IGxpIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5hY3RpdmUtcHJvamVjdCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTQwJTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC50by1kby1saXN0IGxpIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiAyMHB4O1xcclxcbiAgfVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy91aS9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Ozs7Ozs7Ozs7Ozs7Q0FhQyxTQUFTO0NBQ1QsVUFBVTtDQUNWLFNBQVM7Q0FDVCxlQUFlO0NBQ2YsYUFBYTtDQUNiLHdCQUF3QjtBQUN6QjtBQUNBLGdEQUFnRDtBQUNoRDs7Q0FFQyxjQUFjO0FBQ2Y7QUFDQTtDQUNDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxZQUFZO0FBQ2I7QUFDQTs7Q0FFQyxXQUFXO0NBQ1gsYUFBYTtBQUNkO0FBQ0E7Q0FDQyx5QkFBeUI7Q0FDekIsaUJBQWlCO0FBQ2xCOztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5Qiw0QkFBNEI7SUFDNUI7O3lCQUVxQjtJQUNyQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGVBQWU7SUFDZixRQUFRO0lBQ1IsU0FBUztJQUNULHlDQUF5QztJQUN6Qyw2QkFBNkI7SUFDN0IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixjQUFjO0VBQ2hCOztFQUVBO0lBQ0UseUNBQXlDO0VBQzNDOztFQUVBO0lBQ0UsZUFBZTtJQUNmLFVBQVU7SUFDViw2QkFBNkI7SUFDN0IsTUFBTTtJQUNOLE9BQU87SUFDUCxRQUFRO0lBQ1IsU0FBUztJQUNULG1DQUFtQztJQUNuQyxvQkFBb0I7RUFDdEI7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsZUFBZTtJQUNmLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixTQUFTO0VBQ1hcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcclxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXHJcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxyXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcclxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxyXFxuYiwgdSwgaSwgY2VudGVyLFxcclxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxyXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxyXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxyXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxcclxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXFxyXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxyXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXHJcXG5cXHRtYXJnaW46IDA7XFxyXFxuXFx0cGFkZGluZzogMDtcXHJcXG5cXHRib3JkZXI6IDA7XFxyXFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcclxcblxcdGZvbnQ6IGluaGVyaXQ7XFxyXFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcclxcbn1cXHJcXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxyXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXFxyXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXHJcXG5cXHRkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuYm9keSB7XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxyXFxufVxcclxcbm9sLCB1bCB7XFxyXFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuYmxvY2txdW90ZSwgcSB7XFxyXFxuXFx0cXVvdGVzOiBub25lO1xcclxcbn1cXHJcXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXHJcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxyXFxuXFx0Y29udGVudDogJyc7XFxyXFxuXFx0Y29udGVudDogbm9uZTtcXHJcXG59XFxyXFxudGFibGUge1xcclxcblxcdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxyXFxuXFx0Ym9yZGVyLXNwYWNpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbjpyb290IHtcXHJcXG4gICAgLS1kYXJrLWdyZXk6ICM3NTc1NzU7XFxyXFxufVxcclxcblxcclxcbi5hcHAge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNjBweCAxZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxyXFxuICAgICAgICBcXFwiaGVhZGVyIGhlYWRlclxcXCJcXHJcXG4gICAgICAgIFxcXCJzaWRlYmFyIGRpc3BsYXlcXFwiO1xcclxcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciB7XFxyXFxuICAgIGdyaWQtYXJlYTogaGVhZGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzhiZGY4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZWJhciB7XFxyXFxuICAgIGdyaWQtYXJlYTogc2lkZWJhcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcXHJcXG59XFxyXFxuXFxyXFxuLmRpc3BsYXkge1xcclxcbiAgICBncmlkLWFyZWE6IGRpc3BsYXk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdHMtaGVhZGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuI21vZGFsIHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB0b3A6IDUwJTtcXHJcXG4gICAgbGVmdDogNTAlO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgwKTtcXHJcXG4gICAgdHJhbnNpdGlvbjogMjAwbXMgZWFzZS1pbi1vdXQ7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICB6LWluZGV4OiAxMDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIHdpZHRoOiA1MDBweDtcXHJcXG4gICAgbWF4LXdpZHRoOiA4MCU7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gICNtb2RhbC5hY3RpdmUge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNvdmVybGF5IHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgICB0cmFuc2l0aW9uOiAyMDBtcyBlYXNlLWluLW91dDtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC41KTtcXHJcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gICNvdmVybGF5LmFjdGl2ZSB7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucHJvamVjdC1saXN0IGxpIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5hY3RpdmUtcHJvamVjdCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTQwJTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC50by1kby1saXN0IGxpIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiAyMHB4O1xcclxcbiAgfVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgVUkgfSBmcm9tIFwiLi91aS9VSVwiO1xyXG5pbXBvcnQgUHJvamVjdHNDb250cm9sbGVyIGZyb20gXCIuL2NvbnRyb2xsZXJzL1Byb2plY3RzQ29udHJvbGxlclwiO1xyXG5pbXBvcnQgVG9Eb0FwcCBmcm9tIFwiLi9sb2dpYy9Ub0RvQXBwXCI7XHJcbmltcG9ydCBUYXNrQ29udHJvbGxlciBmcm9tIFwiLi9jb250cm9sbGVycy9UYXNrc0NvbnRyb2xsZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnByb2plY3RzTW9kZWwgPSBuZXcgVG9Eb0FwcCgpXHJcblxyXG4gICAgICAgIHRoaXMudWkgPSBuZXcgVUkoKVxyXG4gICAgICAgIHRoaXMudGFza3NDb250cm9sbGVyID0gbmV3IFRhc2tDb250cm9sbGVyKHRoaXMucHJvamVjdHNNb2RlbCwgdGhpcy51aS5saXN0VmlldylcclxuICAgICAgICB0aGlzLnByb2plY3RzQ29udHJvbGxlciA9IG5ldyBQcm9qZWN0c0NvbnRyb2xsZXIodGhpcy5wcm9qZWN0c01vZGVsLCB0aGlzLnVpLnByb2plY3RzVmlldywgdGhpcy50YXNrc0NvbnRyb2xsZXIpXHJcbiAgICB9XHJcbn0gIiwiaW1wb3J0IFRvRG9BcHAgZnJvbSBcIi4uL2xvZ2ljL1RvRG9BcHBcIlxyXG5pbXBvcnQgVG9Eb0xpc3QgZnJvbSBcIi4uL2xvZ2ljL1RvRG9MaXN0XCJcclxuaW1wb3J0IFByb2plY3RzVmlldyBmcm9tIFwiLi4vdWkvUHJvamVjdHNWaWV3XCJcclxuaW1wb3J0IGdldFVuaXF1ZUlkIGZyb20gXCIuLi91dGlsaXR5L2lkR2VuZXJhdG9yXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3RzQ29udHJvbGxlciB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9qZWN0c01vZGVsLCBwcm9qZWN0c1ZpZXcsIHRhc2tzQ29udHJvbGxlcikge1xyXG4gICAgICAgIHRoaXMubW9kZWwgPSBwcm9qZWN0c01vZGVsXHJcbiAgICAgICAgdGhpcy52aWV3ID0gcHJvamVjdHNWaWV3XHJcbiAgICAgICAgdGhpcy50YXNrc0NvbnRyb2xsZXIgPSB0YXNrc0NvbnRyb2xsZXJcclxuICAgICAgICB0aGlzLnNldHVwQWRkUHJvamVjdEJ1dHRvbigpXHJcbiAgICAgICAgdGhpcy5zZXR1cFByb2plY3RTZWxlY3Rpb24oKVxyXG4gICAgICAgIHRoaXMuc2V0dXBFZGl0UHJvamVjdEJ1dHRvbigpXHJcbiAgICAgICAgdGhpcy5zZXR1cERlbGV0ZVByb2plY3RCdXR0b24oKVxyXG4gICAgICAgIHRoaXMucmVuZGVyUHJvamVjdHMoKVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBhZGRQcm9qZWN0KG5hbWUpIHtcclxuICAgICAgICBjb25zdCBuZXdMaXN0ID0gbmV3IFRvRG9MaXN0KGdldFVuaXF1ZUlkKCksIG5hbWUpXHJcbiAgICAgICAgdGhpcy5tb2RlbC5hZGRUb0RvTGlzdChuZXdMaXN0KVxyXG4gICAgICAgIHRoaXMucmVuZGVyUHJvamVjdHMoKVxyXG4gICAgfVxyXG5cclxuICAgIGVkaXRQcm9qZWN0KGlkLCBuZXdOYW1lKSB7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5lZGl0VG9Eb0xpc3QoaWQsIG5ld05hbWUpXHJcbiAgICAgICAgdGhpcy5yZW5kZXJQcm9qZWN0cygpXHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlUHJvamVjdChpZCkge1xyXG4gICAgICAgIHRoaXMubW9kZWwucmVtb3ZlVG9Eb0xpc3QoaWQpXHJcbiAgICAgICAgdGhpcy5yZW5kZXJQcm9qZWN0cygpXHJcbiAgICB9XHJcblxyXG4gICAgc2VsZWN0QWN0aXZlUHJvamVjdChpZCkge1xyXG4gICAgICAgIHRoaXMubW9kZWwuc2V0QWN0aXZlTGlzdChpZClcclxuICAgICAgICB0aGlzLnJlbmRlclByb2plY3RzKClcclxuICAgICAgICB0aGlzLnRhc2tzQ29udHJvbGxlci5yZW5kZXJUYXNrcygpXHJcbiAgICB9XHJcblxyXG4gICAgc2V0dXBBZGRQcm9qZWN0QnV0dG9uKCkge1xyXG4gICAgICAgIHRoaXMudmlldy5iaW5kQWRkUHJvamVjdEJ1dHRvbihuYW1lID0+IHRoaXMuYWRkUHJvamVjdChuYW1lKSlcclxuICAgIH1cclxuXHJcbiAgICBzZXR1cEVkaXRQcm9qZWN0QnV0dG9uKCkge1xyXG4gICAgICAgIHRoaXMudmlldy5iaW5kRWRpdFByb2plY3RCdXR0b24oKGlkLCBuZXdOYW1lKSA9PiB0aGlzLmVkaXRQcm9qZWN0KGlkLCBuZXdOYW1lKSlcclxuICAgIH1cclxuXHJcbiAgICBzZXR1cERlbGV0ZVByb2plY3RCdXR0b24oKSB7XHJcbiAgICAgICAgdGhpcy52aWV3LmJpbmREZWxldGVQcm9qZWN0QnV0dG9uKGlkID0+IHRoaXMucmVtb3ZlUHJvamVjdChpZCkpXHJcbiAgICB9XHJcblxyXG4gICAgc2V0dXBQcm9qZWN0U2VsZWN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMudmlldy5iaW5kUHJvamVjdFNlbGVjdGlvbihzZWxlY3RlZExpc3RJZCA9PiB0aGlzLnNlbGVjdEFjdGl2ZVByb2plY3Qoc2VsZWN0ZWRMaXN0SWQpKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlclByb2plY3RzKCkge1xyXG4gICAgICAgIHRoaXMudmlldy5yZW5kZXIodGhpcy5tb2RlbC50b0RvTGlzdHMpO1xyXG4gICAgICAgIGlmICh0aGlzLm1vZGVsLmN1cnJlbnRMaXN0ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy52aWV3LmhpZ2hsaWdodFByb2plY3QodGhpcy5tb2RlbC5jdXJyZW50TGlzdC5pZClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgTGlzdFZpZXcgZnJvbSBcIi4uL3VpL0xpc3RWaWV3XCI7XHJcbmltcG9ydCBnZXRVbmlxdWVJZCBmcm9tICcuLi91dGlsaXR5L2lkR2VuZXJhdG9yJ1xyXG5pbXBvcnQgVG9Eb0l0ZW0gZnJvbSAnLi4vbG9naWMvVG9Eb0l0ZW0nXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrQ29udHJvbGxlciB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9qZWN0c01vZGVsLCB0YXNrc1ZpZXcpIHtcclxuICAgICAgICB0aGlzLm1vZGVsID0gcHJvamVjdHNNb2RlbFxyXG4gICAgICAgIHRoaXMudmlldyA9IHRhc2tzVmlld1xyXG4gICAgICAgIHRoaXMuc2V0dXBBZGRUYXNrQnV0dG9uKClcclxuICAgICAgICB0aGlzLnNldHVwQ29tcGxldGlvbkNoZWNrYm94KClcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJUYXNrcygpIHtcclxuICAgICAgICB0aGlzLnZpZXcucmVuZGVyKHRoaXMubW9kZWwuY3VycmVudExpc3QudG9Eb0l0ZW1zKVxyXG4gICAgICAgIHRoaXMudmlldy5zZXRIZWFkZXJUaXRsZSh0aGlzLm1vZGVsLmN1cnJlbnRMaXN0LnRpdGxlKVxyXG4gICAgfVxyXG5cclxuICAgIGFkZFRhc2sobmFtZSwgZHVlRGF0ZSwgcHJpb3JpdHksIGRlc2NyaXB0aW9uKSB7XHJcbiAgICAgICAgY29uc3QgbmV3VGFzayA9IG5ldyBUb0RvSXRlbShnZXRVbmlxdWVJZCgpLCBuYW1lLCBkdWVEYXRlLCBwcmlvcml0eSwgZGVzY3JpcHRpb24pXHJcbiAgICAgICAgY29uc29sZS5sb2cobmV3VGFzaylcclxuICAgICAgICB0aGlzLm1vZGVsLmN1cnJlbnRMaXN0LmFkZFRvRG8obmV3VGFzaylcclxuICAgICAgICB0aGlzLnJlbmRlclRhc2tzKClcclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VDb21wbGV0aW9uKHRhc2tJZCwgbmV3U3RhdGUpIHtcclxuICAgICAgICBjb25zdCB0YXNrQmVpbmdDaGFuZ2VkID0gdGhpcy5tb2RlbC5jdXJyZW50TGlzdC5nZXRUYXNrKHRhc2tJZClcclxuICAgICAgICB0YXNrQmVpbmdDaGFuZ2VkLnNldENvbXBsZXRpb25TdGF0ZShuZXdTdGF0ZSlcclxuICAgICAgICB0aGlzLnJlbmRlclRhc2tzKClcclxuICAgIH1cclxuXHJcbiAgICBzZXR1cEFkZFRhc2tCdXR0b24oKSB7XHJcbiAgICAgICAgdGhpcy52aWV3LmJpbmRBZGRUYXNrQnV0dG9uKChuYW1lLCBkdWVEYXRlLCBwcmlvcml0eSwgZGVzY3JpcHRpb24pID0+IHRoaXMuYWRkVGFzayhuYW1lLCBkdWVEYXRlLCBwcmlvcml0eSwgZGVzY3JpcHRpb24pKVxyXG4gICAgfVxyXG5cclxuICAgIHNldHVwQ29tcGxldGlvbkNoZWNrYm94KCkge1xyXG4gICAgICAgIHRoaXMudmlldy5iaW5kQ29tcGxldGlvbkNoZWNrYm94KCh0YXNrSWQsIG5ld1N0YXRlKSA9PiB0aGlzLmNoYW5nZUNvbXBsZXRpb24odGFza0lkLCBuZXdTdGF0ZSkpXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgJy4vdWkvc3R5bGUuY3NzJ1xyXG5pbXBvcnQgQXBwIGZyb20gJy4vQXBwJ1xyXG5cclxuY29uc3QgYXBwID0gbmV3IEFwcCgpO1xyXG5jb25zb2xlLmxvZyhhcHAudWkucHJvamVjdHNWaWV3LnByb2plY3RDcmVhdGlvbkZvcm0uZ2V0QWRkUHJvamVjdEJ1dHRvbigpKSIsImltcG9ydCBUb0RvTGlzdCBmcm9tIFwiLi9Ub0RvTGlzdFwiXHJcbmltcG9ydCBnZXRVbmlxdWVJZCBmcm9tICcuLi91dGlsaXR5L2lkR2VuZXJhdG9yJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9Eb0FwcCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnRvRG9MaXN0cyA9IFtdXHJcbiAgICAgICAgY29uc3QgZGVmYXVsdExpc3QgPSBuZXcgVG9Eb0xpc3QoZ2V0VW5pcXVlSWQoKSwgXCJEZWZhdWx0IExpc3RcIilcclxuICAgICAgICB0aGlzLmFkZFRvRG9MaXN0KGRlZmF1bHRMaXN0KVxyXG4gICAgICAgIHRoaXMuY3VycmVudExpc3QgPSB0aGlzLnRvRG9MaXN0c1swXVxyXG4gICAgfVxyXG5cclxuICAgIGFkZFRvRG9MaXN0KHRvRG9MaXN0KSB7XHJcbiAgICAgICAgdGhpcy50b0RvTGlzdHMucHVzaCh0b0RvTGlzdClcclxuICAgICAgICBpZiAodGhpcy50b0RvTGlzdHMubGVuZ3RoID09IDEpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50TGlzdCA9IHRoaXMudG9Eb0xpc3RzWzBdXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZVRvRG9MaXN0KGlkKSB7XHJcbiAgICAgICAgdGhpcy50b0RvTGlzdHMgPSB0aGlzLnRvRG9MaXN0cy5maWx0ZXIodG9Eb0xpc3QgPT4gdG9Eb0xpc3QuaWQgIT09IGlkKVxyXG4gICAgICAgIGlmICh0aGlzLnRvRG9MaXN0cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudExpc3QgPSB0aGlzLnRvRG9MaXN0c1swXVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudExpc3QgPSBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldFRvRG9MaXN0KGlkKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudG9Eb0xpc3RzLmZpbmQobGlzdCA9PiBsaXN0LmlkID09IGlkKVxyXG4gICAgfVxyXG5cclxuICAgIGVkaXRUb0RvTGlzdChpZCwgbmV3VGl0bGUpIHtcclxuICAgICAgICBjb25zdCBsaXN0QmVpbmdFZGl0ZWQgPSB0aGlzLmdldFRvRG9MaXN0KGlkKVxyXG4gICAgICAgIGlmICghbGlzdEJlaW5nRWRpdGVkKSByZXR1cm5cclxuICAgICAgICBsaXN0QmVpbmdFZGl0ZWQuc2V0VGl0bGUobmV3VGl0bGUpXHJcbiAgICB9XHJcblxyXG4gICAgc2V0QWN0aXZlTGlzdChpZCkge1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkTGlzdCA9IHRoaXMuZ2V0VG9Eb0xpc3QoaWQpXHJcbiAgICAgICAgaWYgKHNlbGVjdGVkTGlzdCkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRMaXN0ID0gc2VsZWN0ZWRMaXN0XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvRG9JdGVtIHtcclxuICAgIGNvbnN0cnVjdG9yKGlkLCB0aXRsZSwgZHVlRGF0ZSwgcHJpb3JpdHksIGRlc2NyaXB0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkXHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlXHJcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZVxyXG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eVxyXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvblxyXG4gICAgICAgIHRoaXMuY29tcGxldGVkID0gZmFsc2VcclxuICAgIH1cclxuXHJcbiAgICBzZXRDb21wbGV0aW9uU3RhdGUoaXNUYXNrQ29tcGxldGVkKSB7XHJcbiAgICAgICAgdGhpcy5jb21wbGV0ZWQgPSBpc1Rhc2tDb21wbGV0ZWRcclxuICAgIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvRG9MaXN0IHtcclxuICAgIGNvbnN0cnVjdG9yKGlkLCB0aXRsZSkge1xyXG4gICAgICAgIHRoaXMuaWQgPSBpZFxyXG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZVxyXG4gICAgICAgIHRoaXMudG9Eb0l0ZW1zID0gW11cclxuICAgIH1cclxuXHJcbiAgICBhZGRUb0RvKHRvZG8pIHtcclxuICAgICAgICB0aGlzLnRvRG9JdGVtcy5wdXNoKHRvZG8pXHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlVG9Ebyh0b0RvSWQpIHtcclxuICAgICAgICB0aGlzLnRvRG9JdGVtcyA9IHRoaXMudG9Eb0l0ZW1zLmZpbHRlcih0b0RvSXRlbSA9PiB0b0RvSXRlbS5pZCAhPT0gdG9Eb0lkKVxyXG4gICAgfVxyXG5cclxuICAgIHNldFRpdGxlKHRpdGxlKSB7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VGFzayhpZCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRvRG9JdGVtcy5maW5kKHRhc2sgPT4gdGFzay5pZCA9PSBpZClcclxuICAgIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUhlYWRlcihwYXJlbnRFbGVtZW50LCBhcHBOYW1lKSB7XHJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXHJcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBhcHBOYW1lXHJcbiAgICBwYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKGhlYWRlcilcclxuICAgIHJldHVybiBoZWFkZXJcclxufSIsImltcG9ydCB7IHNldE1vZGFsQ29udGVudCB9IGZyb20gJy4vUG9wdXAnXHJcblxyXG5mdW5jdGlvbiB0YXNrSXRlbUZhY3RvcnkoaWQsIHRpdGxlLCBkdWVEYXRlLCBwcmlvcml0eSkge1xyXG4gICAgY29uc3QgdGFza0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXHJcbiAgICB0YXNrSXRlbS5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgPGlucHV0IGNsYXNzPVwidGFzay1jb21wbGV0aW9uXCIgdHlwZT1cImNoZWNrYm94XCIvPlxyXG4gICAgICAgIDxoNCBjbGFzcz1cInRhc2stbmFtZVwiPiR7dGl0bGV9PC9oND5cclxuICAgICAgICA8aDQgY2xhc3M9XCJkdWUtZGF0ZVwiPiR7ZHVlRGF0ZX08L2g0PlxyXG4gICAgICAgIDxoNCBjbGFzcz1cInByaW9yaXR5XCI+JHtwcmlvcml0eX08L2g0PlxyXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJ0YXNrLWRlc2NyaXB0aW9uIG9wZW4tcG9wdXBcIj5EZXNjcmlwdGlvbjwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJlZGl0LXRhc2sgb3Blbi1wb3B1cFwiPkVkaXQ8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZGVsZXRlLXRhc2tcIj5EZWxldGU8L2J1dHRvbj5cclxuICAgIGBcclxuXHJcbiAgICB0YXNrSXRlbS5pZCA9IGlkXHJcbiAgICByZXR1cm4gdGFza0l0ZW1cclxufVxyXG5cclxuZnVuY3Rpb24gZGVzY3JpcHRpb25WaWV3RmFjdG9yeSh0YXNrTmFtZSwgY29udGVudCkge1xyXG4gICAgY29uc3QgZGVzY3JpcHRpb25Cb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgZGVzY3JpcHRpb25Cb3guaW5uZXJIVE1MID0gYFxyXG4gICAgICAgIDxoMiBjbGFzcz1cInRhc2stZGVzY3JpcHRpb24tdGl0bGVcIj4ke3Rhc2tOYW1lfTwvaDI+XHJcbiAgICAgICAgPHAgY2xhc3M9XCJ0YXNrLWRlc2NyaXB0aW9uLWJvZHlcIj4ke2NvbnRlbnR9PC9wPlxyXG4gICAgYFxyXG4gICAgcmV0dXJuIGRlc2NyaXB0aW9uQm94XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpc3RWaWV3IHtcclxuICAgIGNvbnN0cnVjdG9yKHBhcmVudEVsZW1lbnQpIHtcclxuICAgICAgICBwYXJlbnRFbGVtZW50LmlubmVySFRNTCArPSBgXHJcbiAgICAgICAgICAgIDxoMiBjbGFzcz1cInByb2plY3QtbmFtZS1oZWFkaW5nXCI+PC9oMj5cclxuICAgICAgICAgICAgPHVsIGNsYXNzPVwidG8tZG8tbGlzdFwiPjwvdWw+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJhZGQtdG8tZG8gb3Blbi1wb3B1cFwiPkFkZCBUYXNrPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9J3JlbW92ZS1kb25lLXRhc2tzXCI+UmVtb3ZlIGNvbXBsZXRlZCB0YXNrczwvYnV0dG9uPlxyXG4gICAgICAgIGBcclxuICAgICAgICB0aGlzLmhlYWRpbmcgPSBwYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2gyJylcclxuICAgICAgICB0aGlzLmxpc3RFbGVtZW50ID0gcGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcudG8tZG8tbGlzdCcpXHJcbiAgICAgICAgdGhpcy5hZGRUYXNrQnV0dG9uID0gcGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRvLWRvJylcclxuICAgICAgICB0aGlzLnJlbW92ZURvbmVUYXNrc0J1dHRvbiA9IHBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLnJlbW92ZS1kb25lLXRhc2tzJylcclxuXHJcbiAgICAgICAgdGhpcy50YXNrQ3JlYXRpb25Gb3JtID0gbmV3IFRhc2tGb3JtKCdhZGQnKVxyXG5cclxuICAgICAgICB0aGlzLl9zZXR1cEFkZFRhc2tCdXR0b24oKVxyXG4gICAgICAgIHRoaXMuX3NldHVwRGVzY3JpcHRpb25CdXR0b24oKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcih0YXNrcykge1xyXG4gICAgICAgIHRoaXMuX2NsZWFyKClcclxuICAgICAgICB0YXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9hZGRUYXNrKHRhc2suaWQsIHRhc2sudGl0bGUsIHRhc2suZHVlRGF0ZSwgdGFzay5wcmlvcml0eSlcclxuICAgICAgICAgICAgdGhpcy5fc2V0VGFza0NvbXBsZXRpb24odGFzay5pZCwgdGFzay5jb21wbGV0ZWQpXHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLl9tYXBUYXNrc1RvRGVzY3JpcHRpb25zKHRhc2tzKVxyXG4gICAgfVxyXG5cclxuICAgIF9zZXRUYXNrQ29tcGxldGlvbihpZCwgbmV3U3RhdGUpIHtcclxuICAgICAgICB0aGlzLmxpc3RFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYFtpZD1cIiR7aWR9XCJdYCkucXVlcnlTZWxlY3RvcignLnRhc2stY29tcGxldGlvbicpLmNoZWNrZWQgPSBuZXdTdGF0ZSBcclxuICAgIH1cclxuXHJcbiAgICBfYWRkVGFzayhpZCwgdGl0bGUsIGR1ZURhdGUsIHByaW9yaXR5KSB7XHJcbiAgICAgICAgdGhpcy5saXN0RWxlbWVudC5hcHBlbmRDaGlsZCh0YXNrSXRlbUZhY3RvcnkoaWQsIHRpdGxlLCBkdWVEYXRlLCBwcmlvcml0eSkpXHJcbiAgICB9XHJcblxyXG4gICAgX2NsZWFyKCkge1xyXG4gICAgICAgIHRoaXMubGlzdEVsZW1lbnQuaW5uZXJIVE1MID0gJydcclxuICAgIH1cclxuXHJcbiAgICBfc2V0dXBBZGRUYXNrQnV0dG9uKCkge1xyXG4gICAgICAgIHRoaXMuYWRkVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnRhc2tDcmVhdGlvbkZvcm0uY2xlYXIoKVxyXG4gICAgICAgICAgICBzZXRNb2RhbENvbnRlbnQodGhpcy50YXNrQ3JlYXRpb25Gb3JtLmVsZW1lbnQpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBfbWFwVGFza3NUb0Rlc2NyaXB0aW9ucyh0YXNrcykge1xyXG4gICAgICAgIHRoaXMudGFza3NUb0Rlc2NyaXB0aW9uc01hcCA9IHt9XHJcbiAgICAgICAgdGFza3MuZm9yRWFjaCh0YXNrID0+IHRoaXMudGFza3NUb0Rlc2NyaXB0aW9uc01hcFt0YXNrLmlkXSA9IHRhc2suZGVzY3JpcHRpb24pXHJcbiAgICB9XHJcblxyXG4gICAgX3NldHVwRGVzY3JpcHRpb25CdXR0b24oKSB7XHJcbiAgICAgICAgdGhpcy5saXN0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwb3RlbnRpYWxseVByZXNzZWREZXNjcmlwdGlvbkJ1dHRvbiA9IGUudGFyZ2V0LmNsb3Nlc3QoJy50YXNrLWRlc2NyaXB0aW9uJykgXHJcbiAgICAgICAgICAgIGlmICghcG90ZW50aWFsbHlQcmVzc2VkRGVzY3JpcHRpb25CdXR0b24pIHJldHVyblxyXG4gICAgICAgICAgICBjb25zdCBwcmVzc2VkVGFzayA9IHBvdGVudGlhbGx5UHJlc3NlZERlc2NyaXB0aW9uQnV0dG9uLmNsb3Nlc3QoJ2xpJylcclxuICAgICAgICAgICAgY29uc3QgZGVzY3JpcHRpb25Cb3ggPSBkZXNjcmlwdGlvblZpZXdGYWN0b3J5KFxyXG4gICAgICAgICAgICAgICAgcHJlc3NlZFRhc2sucXVlcnlTZWxlY3RvcignLnRhc2stbmFtZScpLnRleHRDb250ZW50LFxyXG4gICAgICAgICAgICAgICAgdGhpcy50YXNrc1RvRGVzY3JpcHRpb25zTWFwW3ByZXNzZWRUYXNrLmlkXVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICBzZXRNb2RhbENvbnRlbnQoZGVzY3JpcHRpb25Cb3gpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBzZXRIZWFkZXJUaXRsZSh0aXRsZSkge1xyXG4gICAgICAgIHRoaXMuaGVhZGluZy5pbm5lckhUTUwgPSB0aXRsZVxyXG4gICAgfVxyXG5cclxuICAgIGJpbmRBZGRUYXNrQnV0dG9uKGFjdGlvbikge1xyXG4gICAgICAgIHRoaXMudGFza0NyZWF0aW9uRm9ybS5jb25maXJtQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgICAgICAgICAgIGFjdGlvbihcclxuICAgICAgICAgICAgICAgIHRoaXMudGFza0NyZWF0aW9uRm9ybS5uYW1lSW5wdXQudmFsdWUsXHJcbiAgICAgICAgICAgICAgICB0aGlzLnRhc2tDcmVhdGlvbkZvcm0uZHVlRGF0ZVBpY2tlci52YWx1ZSxcclxuICAgICAgICAgICAgICAgIHRoaXMudGFza0NyZWF0aW9uRm9ybS5wcmlvcml0eVNlbGVjdGlvbi52YWx1ZSxcclxuICAgICAgICAgICAgICAgIHRoaXMudGFza0NyZWF0aW9uRm9ybS50YXNrRGVzY3JpcHRpb24udmFsdWVcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgYmluZENvbXBsZXRpb25DaGVja2JveChhY3Rpb24pIHtcclxuICAgICAgICB0aGlzLmxpc3RFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCd0YXNrLWNvbXBsZXRpb24nKSkgcmV0dXJuO1xyXG4gICAgICAgICAgICBhY3Rpb24odGhpcy5nZXRDbG9zZXN0TGlzdEl0ZW1JZChlLnRhcmdldCksIGUudGFyZ2V0LmNoZWNrZWQpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBnZXRDbG9zZXN0TGlzdEl0ZW1JZChjaGlsZEZvcldoaWNoV2VTZWFyY2hDbG9zZXN0TGlzdEl0ZW0pIHtcclxuICAgICAgICByZXR1cm4gY2hpbGRGb3JXaGljaFdlU2VhcmNoQ2xvc2VzdExpc3RJdGVtLmNsb3Nlc3QoJ2xpJykuaWRcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgVGFza0Zvcm0ge1xyXG4gICAgY29uc3RydWN0b3IodHlwZSkge1xyXG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGVcclxuICAgICAgICB0aGlzLl9jcmVhdGVFbGVtZW50KClcclxuICAgICAgICB0aGlzLl9hZGRQcmlvcml0eVNlbGVjdE9wdGlvbnMoKVxyXG4gICAgfVxyXG5cclxuICAgIF9jcmVhdGVFbGVtZW50KCkge1xyXG4gICAgICAgIGNvbnN0IHRhc2tDcmVhdGlvbkZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIHRhc2tDcmVhdGlvbkZvcm0uY2xhc3NMaXN0LmFkZCgndGFzay1jcmVhdGlvbicpXHJcblxyXG4gICAgICAgIHRhc2tDcmVhdGlvbkZvcm0uaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwidGFzay1uYW1lLWlucHV0XCI+UHJvamVjdCBuYW1lOjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dCBpZD1cInRhc2stbmFtZS1pbnB1dFwiIHR5cGU9XCJ0ZXh0XCIvPlxyXG5cclxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImR1ZS1kYXRlLXBpY2tlclwiPkR1ZSBkYXRlOjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dCBpZD1cImR1ZS1kYXRlLXBpY2tlclwiIHR5cGU9XCJkYXRlXCIvPlxyXG5cclxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cInByaW9yaXR5LXNlbGVjdGlvblwiPlByaW9yaXR5OjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxzZWxlY3QgaWQ9XCJwcmlvcml0eS1zZWxlY3Rpb25cIj48L3NlbGVjdD5cclxuXHJcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0YXNrLWRlc2NyaXB0aW9uXCI+RGVzY3JpcHRpb246PC9sYWJlbD5cclxuICAgICAgICAgICAgPHRleHRhcmVhIGlkPVwidGFzay1kZXNjcmlwdGlvblwiPjwvdGV4dGFyZWE+XHJcblxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY29uZmlybS10YXNrLWZvcm0gY2xvc2UtcG9wdXBcIj4ke3RoaXMuZ2V0Q29uZmlybUJ1dHRvblRleHQoKX08L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNhbmNlbC10YXNrLWZvcm0gY2xvc2UtcG9wdXBcIj5DYW5jZWw8L2J1dHRvbj5cclxuICAgICAgICBgXHJcbiAgICAgICAgdGhpcy5uYW1lSW5wdXQgPSB0YXNrQ3JlYXRpb25Gb3JtLnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLW5hbWUtaW5wdXQnKVxyXG4gICAgICAgIHRoaXMuZHVlRGF0ZVBpY2tlciA9IHRhc2tDcmVhdGlvbkZvcm0ucXVlcnlTZWxlY3RvcignI2R1ZS1kYXRlLXBpY2tlcicpXHJcbiAgICAgICAgdGhpcy5wcmlvcml0eVNlbGVjdGlvbiA9IHRhc2tDcmVhdGlvbkZvcm0ucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5LXNlbGVjdGlvbicpXHJcbiAgICAgICAgdGhpcy50YXNrRGVzY3JpcHRpb24gPSB0YXNrQ3JlYXRpb25Gb3JtLnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWRlc2NyaXB0aW9uJylcclxuICAgICAgICB0aGlzLmNvbmZpcm1CdXR0b24gPSB0YXNrQ3JlYXRpb25Gb3JtLnF1ZXJ5U2VsZWN0b3IoJy5jb25maXJtLXRhc2stZm9ybScpXHJcbiAgICAgICAgdGhpcy5jYW5jZWxCdXR0b24gPSB0YXNrQ3JlYXRpb25Gb3JtLnF1ZXJ5U2VsZWN0b3IoJy5jYW5jZWwtdGFzay1mb3JtJylcclxuICAgICAgICB0aGlzLmVsZW1lbnQgPSB0YXNrQ3JlYXRpb25Gb3JtXHJcbiAgICB9XHJcblxyXG4gICAgX2FkZFByaW9yaXR5U2VsZWN0T3B0aW9ucygpIHtcclxuICAgICAgICB0aGlzLnByaW9yaXR5U2VsZWN0aW9uLmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImxvd1wiPkxvdzwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibWVkaXVtXCI+TWVkaXVtPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJoaWdoXCI+SGlnaDwvb3B0aW9uPlxyXG4gICAgICAgIGAgXHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXIoKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lSW5wdXQudmFsdWUgPSAnJ1xyXG4gICAgICAgIHRoaXMuZHVlRGF0ZVBpY2tlci52YWx1ZSA9ICcnXHJcbiAgICAgICAgdGhpcy5wcmlvcml0eVNlbGVjdGlvbi52YWx1ZSA9ICdsb3cnXHJcbiAgICAgICAgdGhpcy50YXNrRGVzY3JpcHRpb24udmFsdWUgPSAnJ1xyXG4gICAgfVxyXG5cclxuICAgIGdldENvbmZpcm1CdXR0b25UZXh0KCkge1xyXG4gICAgICAgIGxldCBjb25maXJtVGV4dCA9ICcnXHJcbiAgICAgICAgc3dpdGNoICh0aGlzLnR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSAnYWRkJzpcclxuICAgICAgICAgICAgICAgIGNvbmZpcm1UZXh0ID0gJ0FkZCdcclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIGNhc2UgJ2VkaXQnOlxyXG4gICAgICAgICAgICAgICAgY29uZmlybVRleHQgPSAnRWRpdCdcclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gY29uZmlybVRleHRcclxuICAgIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldHVwUG9wdXAoKSB7XHJcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpXHJcbiAgICBjb25zdCBwb3B1cFdyYXBwZXIgPSBjcmVhdGVQb3B1cFdyYXBwZXIoKVxyXG4gICAgY29uc3Qgb3ZlcmxheSA9IGNyZWF0ZU92ZXJsYXkoKVxyXG5cclxuICAgIGJvZHkuYXBwZW5kQ2hpbGQocG9wdXBXcmFwcGVyKVxyXG4gICAgYm9keS5hcHBlbmRDaGlsZChvdmVybGF5KVxyXG5cclxuICAgIGFkZE9wZW5Qb3B1cEV2ZW50TGlzdGVuZXIoKVxyXG4gICAgYWRkQ2xvc2VQb3B1cEV2ZW50TGlzdGVuZXIoKVxyXG4gICAgY2xvc2VNb2RhbEJ5Q2xpY2tpbmdPdXRzaWRlSXQoKVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVQb3B1cFdyYXBwZXIoKSB7XHJcbiAgICBjb25zdCBwb3B1cFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgcG9wdXBXcmFwcGVyLmlkID0gJ21vZGFsJ1xyXG4gICAgcmV0dXJuIHBvcHVwV3JhcHBlclxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVPdmVybGF5KCkge1xyXG4gICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBvdmVybGF5LmlkID0gJ292ZXJsYXknXHJcbiAgICByZXR1cm4gb3ZlcmxheVxyXG59XHJcblxyXG5mdW5jdGlvbiBvcGVuTW9kYWwoKSB7XHJcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbCcpXHJcbiAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI292ZXJsYXknKVxyXG4gICAgXHJcbiAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxyXG4gICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxyXG4gIH1cclxuICBcclxuZnVuY3Rpb24gY2xvc2VNb2RhbCgpIHtcclxuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsJylcclxuICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjb3ZlcmxheScpXHJcblxyXG4gICAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcclxuICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkT3BlblBvcHVwRXZlbnRMaXN0ZW5lcigpIHtcclxuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdodG1sJylcclxuICAgIGh0bWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICAgICAgICBsZXQgb3BlblBvcHVwQnV0dG9uID0gZS50YXJnZXQuY2xvc2VzdCgnLm9wZW4tcG9wdXAnKVxyXG4gICAgICAgIGlmICghb3BlblBvcHVwQnV0dG9uKSByZXR1cm5cclxuICAgICAgICBvcGVuTW9kYWwoKVxyXG4gICAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkQ2xvc2VQb3B1cEV2ZW50TGlzdGVuZXIoKSB7XHJcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaHRtbCcpXHJcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbCcpXHJcbiAgICBodG1sLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgICAgICAgbGV0IGNsb3NlUG9wdXBCdXR0b24gPSBlLnRhcmdldC5jbG9zZXN0KCcuY2xvc2UtcG9wdXAnKVxyXG4gICAgICAgIGlmICghY2xvc2VQb3B1cEJ1dHRvbikgcmV0dXJuXHJcbiAgICAgICAgY2xvc2VNb2RhbCgpXHJcbiAgICAgICAgbW9kYWwuaW5uZXJIVE1MID0gJydcclxuICAgIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRNb2RhbENvbnRlbnQoZWxlbWVudFRvQXBwZW5kKSB7XHJcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbCcpXHJcbiAgICBtb2RhbC5pbm5lckhUTUwgPSAnJ1xyXG4gICAgbW9kYWwuYXBwZW5kQ2hpbGQoZWxlbWVudFRvQXBwZW5kKVxyXG59XHJcblxyXG5mdW5jdGlvbiBjbG9zZU1vZGFsQnlDbGlja2luZ091dHNpZGVJdCgpIHtcclxuICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjb3ZlcmxheScpXHJcbiAgICBvdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgICAgICAgY2xvc2VNb2RhbCgpXHJcbiAgICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBpc01vZGFsQWN0aXZlKCkge1xyXG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwnKVxyXG4gICAgcmV0dXJuIG1vZGFsLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJylcclxufSIsImltcG9ydCB7IHNldE1vZGFsQ29udGVudCB9IGZyb20gJy4vUG9wdXAnXHJcblxyXG5mdW5jdGlvbiBwcm9qZWN0SXRlbUZhY3RvcnkoaWQsIHByb2plY3ROYW1lKSB7XHJcbiAgICBjb25zdCBwcm9qZWN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcclxuICAgIHByb2plY3RJdGVtLmlubmVySFRNTCA9IGBcclxuICAgICAgICA8aDQgY2xhc3M9XCJwcm9qZWN0LW5hbWVcIj4ke3Byb2plY3ROYW1lfTwvaDQ+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImVkaXQtcHJvamVjdCBvcGVuLXBvcHVwXCI+RWRpdDwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJkZWxldGUtcHJvamVjdFwiPkRlbGV0ZTwvYnV0dG9uPlxyXG4gICAgYFxyXG4gICAgcHJvamVjdEl0ZW0uc2V0QXR0cmlidXRlKCdpZCcsIGlkKVxyXG4gICAgcmV0dXJuIHByb2plY3RJdGVtXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3RzVmlldyB7XHJcbiAgICBjb25zdHJ1Y3RvcihwYXJlbnRFbGVtZW50KSB7XHJcbiAgICAgICAgcGFyZW50RWxlbWVudC5pbm5lckhUTUwgKz0gYFxyXG4gICAgICAgIDxoMz5Qcm9qZWN0czwvaDM+XHJcbiAgICAgICAgPHVsIGNsYXNzPVwicHJvamVjdC1saXN0XCI+PC91bD5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYWRkIG9wZW4tcG9wdXBcIj5BZGQ8L2J1dHRvbj5cclxuICAgIGBcclxuICAgIHRoaXMuaGVhZGluZyA9IHBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignaDMnKVxyXG4gICAgdGhpcy5saXN0RWxlbWVudCA9IHBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtbGlzdCcpXHJcbiAgICB0aGlzLmFkZFByb2plY3RCdXR0b24gPSBwYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQnKVxyXG4gICAgdGhpcy5wcm9qZWN0Q3JlYXRpb25Gb3JtID0gbmV3IFByb2plY3RDcmVhdGlvbkZvcm0oKVxyXG4gICAgdGhpcy5wcm9qZWN0RWRpdGlvbkZvcm0gPSBuZXcgUHJvamVjdEVkaXRpb25Gb3JtKClcclxuICAgIHRoaXMuX3NldHVwQWRkUHJvamVjdEJ1dHRvbigpXHJcbiAgICB0aGlzLl9zZXR1cEVkaXRQcm9qZWN0QnV0dG9uKClcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIocHJvamVjdHMpIHtcclxuICAgICAgICB0aGlzLl9jbGVhcigpXHJcbiAgICAgICAgcHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHRoaXMuX2FkZFByb2plY3QocHJvamVjdC5pZCwgcHJvamVjdC50aXRsZSkpXHJcbiAgICB9XHJcblxyXG4gICAgX2FkZFByb2plY3QoaWQsIG5hbWUpIHtcclxuICAgICAgICB0aGlzLmxpc3RFbGVtZW50LmFwcGVuZENoaWxkKHByb2plY3RJdGVtRmFjdG9yeShpZCwgbmFtZSkpXHJcbiAgICB9XHJcblxyXG4gICAgX2NsZWFyKCkge1xyXG4gICAgICAgIHRoaXMubGlzdEVsZW1lbnQuaW5uZXJIVE1MID0gJydcclxuICAgIH1cclxuXHJcbiAgICBfc2V0dXBBZGRQcm9qZWN0QnV0dG9uKCkge1xyXG4gICAgICAgIHRoaXMuYWRkUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnByb2plY3RDcmVhdGlvbkZvcm0uY2xlYXJJbnB1dCgpXHJcbiAgICAgICAgICAgIHNldE1vZGFsQ29udGVudCh0aGlzLnByb2plY3RDcmVhdGlvbkZvcm0uZWxlbWVudClcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIF9zZXR1cEVkaXRQcm9qZWN0QnV0dG9uKCkge1xyXG4gICAgICAgIHRoaXMubGlzdEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICAgICAgICAgICAgdGhpcy5wcm9qZWN0RWRpdGlvbkZvcm0uY2xlYXJJbnB1dCgpXHJcbiAgICAgICAgICAgIGNvbnN0IGVkaXRQcm9qZWN0QnV0dG9uID0gZS50YXJnZXQuY2xvc2VzdCgnYnV0dG9uLmVkaXQtcHJvamVjdCcpXHJcbiAgICAgICAgICAgIGlmICghZWRpdFByb2plY3RCdXR0b24pIHJldHVyblxyXG4gICAgICAgICAgICBzZXRNb2RhbENvbnRlbnQodGhpcy5wcm9qZWN0RWRpdGlvbkZvcm0uZWxlbWVudClcclxuICAgICAgICAgICAgdGhpcy5pZE9mUHJvamVjdEJlaW5nRWRpdHRlZCA9IGUudGFyZ2V0LmNsb3Nlc3QoJ2xpJykuaWRcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGhpZ2hsaWdodFByb2plY3QoaWQpIHtcclxuICAgICAgICBjb25zdCBhY3RpdmVQcm9qZWN0ID0gdGhpcy5saXN0RWxlbWVudC5xdWVyeVNlbGVjdG9yKGBsaVtpZD1cIiR7aWR9XCJdYClcclxuICAgICAgICBhY3RpdmVQcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZS1wcm9qZWN0JylcclxuICAgIH1cclxuXHJcbiAgICBiaW5kQWRkUHJvamVjdEJ1dHRvbihhY3Rpb24pIHtcclxuICAgICAgICBjb25zdCBhZGRQcm9qZWN0QnV0dG9uID0gdGhpcy5wcm9qZWN0Q3JlYXRpb25Gb3JtLmdldEFkZFByb2plY3RCdXR0b24oKVxyXG4gICAgICAgIGFkZFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IGFjdGlvbih0aGlzLnByb2plY3RDcmVhdGlvbkZvcm0uZ2V0SW5wdXRGaWVsZFZhbHVlKCkpKVxyXG4gICAgfVxyXG5cclxuICAgIGJpbmRFZGl0UHJvamVjdEJ1dHRvbihhY3Rpb24pIHtcclxuICAgICAgICBjb25zdCBlZGl0UHJvamVjdEJ1dHRvbiA9IHRoaXMucHJvamVjdEVkaXRpb25Gb3JtLmdldEVkaXRQcm9qZWN0QnV0dG9uKClcclxuICAgICAgICBlZGl0UHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG4gICAgICAgICAgICBhY3Rpb24odGhpcy5pZE9mUHJvamVjdEJlaW5nRWRpdHRlZCwgdGhpcy5wcm9qZWN0RWRpdGlvbkZvcm0uZ2V0SW5wdXRGaWVsZFZhbHVlKCkpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBiaW5kRGVsZXRlUHJvamVjdEJ1dHRvbihhY3Rpb24pIHtcclxuICAgICAgICB0aGlzLmxpc3RFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByZXNzZWREZWxldGVCdXR0b24gPSBlLnRhcmdldC5jbG9zZXN0KCcuZGVsZXRlLXByb2plY3QnKVxyXG4gICAgICAgICAgICBpZiAoIXByZXNzZWREZWxldGVCdXR0b24pIHJldHVyblxyXG4gICAgICAgICAgICBjb25zdCBwcmVzc2VkTGlzdEl0ZW0gPSBwcmVzc2VkRGVsZXRlQnV0dG9uLmNsb3Nlc3QoJ2xpJylcclxuICAgICAgICAgICAgYWN0aW9uKHByZXNzZWRMaXN0SXRlbS5pZClcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGJpbmRQcm9qZWN0U2VsZWN0aW9uKGFjdGlvbikge1xyXG4gICAgICAgIHRoaXMubGlzdEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICAgICAgICAgICAgbGV0IHByb2plY3RMaXN0SXRlbSA9IGUudGFyZ2V0LmNsb3Nlc3QoJ2xpJylcclxuICAgICAgICAgICAgaWYgKCFwcm9qZWN0TGlzdEl0ZW0pIHJldHVyblxyXG4gICAgICAgICAgICBpZiAoZS50YXJnZXQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnYnV0dG9uJykgcmV0dXJuXHJcbiAgICAgICAgICAgIGFjdGlvbihwcm9qZWN0TGlzdEl0ZW0uaWQpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgUHJvamVjdENyZWF0aW9uRm9ybSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLl9jcmVhdGVFbGVtZW50KClcclxuICAgIH1cclxuXHJcbiAgICBfY3JlYXRlRWxlbWVudCgpIHtcclxuICAgICAgICBjb25zdCBwcm9qZWN0Q3JlYXRpb25Gb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICBwcm9qZWN0Q3JlYXRpb25Gb3JtLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtY3JlYXRpb24nKVxyXG4gICAgXHJcbiAgICAgICAgcHJvamVjdENyZWF0aW9uRm9ybS5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwcm9qZWN0LW5hbWUtaW5wdXRcIj5Qcm9qZWN0IG5hbWU6PC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0IGlkPVwicHJvamVjdC1uYW1lLWlucHV0XCIgdHlwZT1cInRleHRcIi8+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJhZGQtcHJvamVjdCBjbG9zZS1wb3B1cFwiPkFkZDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY2xvc2UtcG9wdXBcIj5DYW5jZWw8L2J1dHRvbj5cclxuICAgICAgICBgXHJcbiAgICAgICAgcmV0dXJuIHByb2plY3RDcmVhdGlvbkZvcm1cclxuICAgIH1cclxuXHJcbiAgICBjbGVhcklucHV0KCkge1xyXG4gICAgICAgIGNvbnN0IGZvcm1JbnB1dCA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1uYW1lLWlucHV0JylcclxuICAgICAgICBmb3JtSW5wdXQudmFsdWUgPSAnJ1xyXG4gICAgfVxyXG5cclxuICAgIGdldEFkZFByb2plY3RCdXR0b24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXByb2plY3QnKVxyXG4gICAgfVxyXG5cclxuICAgIGdldElucHV0RmllbGRWYWx1ZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LW5hbWUtaW5wdXQnKS52YWx1ZVxyXG5cclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgUHJvamVjdEVkaXRpb25Gb3JtIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudCA9IHRoaXMuX2NyZWF0ZUVsZW1lbnQoKVxyXG4gICAgfVxyXG5cclxuICAgIF9jcmVhdGVFbGVtZW50KCkge1xyXG4gICAgICAgIGNvbnN0IHByb2plY3RFZGl0aW9uRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgcHJvamVjdEVkaXRpb25Gb3JtLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtZWRpdGlvbicpXHJcbiAgICBcclxuICAgICAgICBwcm9qZWN0RWRpdGlvbkZvcm0uaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwicHJvamVjdC1uYW1lLWlucHV0XCI+TmV3IHByb2plY3QgbmFtZTo8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXQgaWQ9XCJwcm9qZWN0LW5hbWUtaW5wdXRcIiB0eXBlPVwidGV4dFwiLz5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImVkaXQtcHJvamVjdCBjbG9zZS1wb3B1cFwiPkVkaXQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNsb3NlLXBvcHVwXCI+Q2FuY2VsPC9idXR0b24+XHJcbiAgICAgICAgYFxyXG4gICAgICAgIHJldHVybiBwcm9qZWN0RWRpdGlvbkZvcm1cclxuICAgIH1cclxuXHJcbiAgICBjbGVhcklucHV0KCkge1xyXG4gICAgICAgIGNvbnN0IGZvcm1JbnB1dCA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1uYW1lLWlucHV0JylcclxuICAgICAgICBmb3JtSW5wdXQudmFsdWUgPSAnJ1xyXG4gICAgfVxyXG5cclxuICAgIGdldEVkaXRQcm9qZWN0QnV0dG9uKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtcHJvamVjdCcpXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SW5wdXRGaWVsZFZhbHVlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtbmFtZS1pbnB1dCcpLnZhbHVlXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgaW5pdExheW91dCBmcm9tICcuL2luaXRMYXlvdXQnXHJcbmltcG9ydCBjcmVhdGVIZWFkZXIgZnJvbSAnLi9IZWFkZXInXHJcbmltcG9ydCBQcm9qZWN0c1ZpZXcgZnJvbSAnLi9Qcm9qZWN0c1ZpZXcnXHJcbmltcG9ydCBMaXN0VmlldyBmcm9tICcuL0xpc3RWaWV3J1xyXG5pbXBvcnQgc2V0dXBQb3B1cCBmcm9tICcuL1BvcHVwJ1xyXG5cclxuZXhwb3J0IGNsYXNzIFVJIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIGluaXRMYXlvdXQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpKVxyXG4gICAgICAgIHNldHVwUG9wdXAoKVxyXG4gICAgICAgIHRoaXMuaGVhZGVyID0gY3JlYXRlSGVhZGVyKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXInKSwgJ1RvRG8nKVxyXG4gICAgICAgIHRoaXMucHJvamVjdHNWaWV3ID0gbmV3IFByb2plY3RzVmlldyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcicpKVxyXG4gICAgICAgIHRoaXMubGlzdFZpZXcgPSBuZXcgTGlzdFZpZXcoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRpc3BsYXknKSlcclxuICAgIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXRMYXlvdXQocGFyZW50RWxlbWVudCkge1xyXG4gICAgY29uc3QgYXBwV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBhcHBXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2FwcCcpXHJcbiAgICBcclxuICAgIGNvbnN0IGhlYWRlcldyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgaGVhZGVyV3JhcHBlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKVxyXG5cclxuICAgIGNvbnN0IHNpZGViYXJXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIHNpZGViYXJXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXInKVxyXG4gICAgXHJcbiAgICBjb25zdCBkaXNwbGF5V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBkaXNwbGF5V3JhcHBlci5jbGFzc0xpc3QuYWRkKCdkaXNwbGF5JylcclxuICAgIFxyXG4gICAgYXBwV3JhcHBlci5hcHBlbmRDaGlsZChoZWFkZXJXcmFwcGVyKVxyXG4gICAgYXBwV3JhcHBlci5hcHBlbmRDaGlsZChzaWRlYmFyV3JhcHBlcilcclxuICAgIGFwcFdyYXBwZXIuYXBwZW5kQ2hpbGQoZGlzcGxheVdyYXBwZXIpXHJcbiAgICBwYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKGFwcFdyYXBwZXIpXHJcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVbmlxdWVJZCgpIHtcclxuICAgIHJldHVybiBCaWdJbnQoRGF0ZS5ub3coKSkudG9TdHJpbmcoKVxyXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9