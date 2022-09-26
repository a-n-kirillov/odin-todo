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
/* harmony import */ var _persistance_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./persistance/storage */ "./src/persistance/storage.js");






class App {
    #STORAGE_KEY = 'TO_DO_LIST'

    constructor() {
        const localPersistance = new _persistance_storage__WEBPACK_IMPORTED_MODULE_4__["default"](this.#STORAGE_KEY)
        this.projectsModel = localPersistance.appProxy

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
        this.setupEditTaskButton()
        this.setupDeleteTaskButton()
        this.renderTasks()
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


const proxyChangeHandler = {
    get: (target, key) => {
      if(typeof target[key] === "object" && target[key] !== null) {
        return new Proxy(target[key], handler)
      }
  
      return target[key]
    },
    set: (target, prop, value) => {
        target[prop] = value
        console.log("A change was made!")
      return true
    }
  }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLE1BQU07QUFDdEMsK0JBQStCLFFBQVE7QUFDdkMsK0JBQStCLFNBQVM7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLFNBQVM7QUFDdEQsMkNBQTJDLFFBQVE7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLEdBQUc7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHdEQUFlO0FBQzNCLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHdEQUFlO0FBQzNCLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksd0RBQWU7QUFDM0IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzlPZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzdFeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsWUFBWTtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHdEQUFlO0FBQzNCLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksd0RBQWU7QUFDM0I7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsdUVBQXVFLEdBQUc7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlKcUM7QUFDRjtBQUNNO0FBQ1I7QUFDRDtBQUNoQztBQUNPO0FBQ1A7QUFDQSxRQUFRLHVEQUFVO0FBQ2xCLFFBQVEsbURBQVU7QUFDbEIsc0JBQXNCLG1EQUFZO0FBQ2xDLGdDQUFnQyxxREFBWTtBQUM1Qyw0QkFBNEIsaURBQVE7QUFDcEM7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNkZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDakJlO0FBQ2Y7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tdG9kby8uL3NyYy91aS9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvdWkvc3R5bGUuY3NzPzc2ZjciLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvQXBwLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9jb250cm9sbGVycy9Qcm9qZWN0c0NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL2NvbnRyb2xsZXJzL1Rhc2tzQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL2xvZ2ljL1RvRG9BcHAuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL2xvZ2ljL1RvRG9JdGVtLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9sb2dpYy9Ub0RvTGlzdC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvcGVyc2lzdGFuY2Uvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvdWkvSGVhZGVyLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy91aS9MaXN0Vmlldy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvdWkvUG9wdXAuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL3VpL1Byb2plY3RzVmlldy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvdWkvVUkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL3VpL2luaXRMYXlvdXQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL3V0aWxpdHkvaWRHZW5lcmF0b3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJodG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxyXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcclxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXHJcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxyXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXHJcXG5iLCB1LCBpLCBjZW50ZXIsXFxyXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXHJcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXHJcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXHJcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxyXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXHJcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXHJcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcclxcblxcdG1hcmdpbjogMDtcXHJcXG5cXHRwYWRkaW5nOiAwO1xcclxcblxcdGJvcmRlcjogMDtcXHJcXG5cXHRmb250LXNpemU6IDEwMCU7XFxyXFxuXFx0Zm9udDogaW5oZXJpdDtcXHJcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxyXFxufVxcclxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXHJcXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcXHJcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcclxcblxcdGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5ib2R5IHtcXHJcXG5cXHRsaW5lLWhlaWdodDogMTtcXHJcXG59XFxyXFxub2wsIHVsIHtcXHJcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5ibG9ja3F1b3RlLCBxIHtcXHJcXG5cXHRxdW90ZXM6IG5vbmU7XFxyXFxufVxcclxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcclxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXHJcXG5cXHRjb250ZW50OiAnJztcXHJcXG5cXHRjb250ZW50OiBub25lO1xcclxcbn1cXHJcXG50YWJsZSB7XFxyXFxuXFx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXHJcXG5cXHRib3JkZXItc3BhY2luZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuOnJvb3Qge1xcclxcbiAgICAtLWRhcmstZ3JleTogIzc1NzU3NTtcXHJcXG59XFxyXFxuXFxyXFxuLmFwcCB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA2MHB4IDFmcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXHJcXG4gICAgICAgIFxcXCJoZWFkZXIgaGVhZGVyXFxcIlxcclxcbiAgICAgICAgXFxcInNpZGViYXIgZGlzcGxheVxcXCI7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzOGJkZjg7XFxyXFxufVxcclxcblxcclxcbi5zaWRlYmFyIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBzaWRlYmFyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xcclxcbn1cXHJcXG5cXHJcXG4uZGlzcGxheSB7XFxyXFxuICAgIGdyaWQtYXJlYTogZGlzcGxheTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0cy1oZWFkZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4jbW9kYWwge1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHRvcDogNTAlO1xcclxcbiAgICBsZWZ0OiA1MCU7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDApO1xcclxcbiAgICB0cmFuc2l0aW9uOiAyMDBtcyBlYXNlLWluLW91dDtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIHotaW5kZXg6IDEwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgd2lkdGg6IDUwMHB4O1xcclxcbiAgICBtYXgtd2lkdGg6IDgwJTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgI21vZGFsLmFjdGl2ZSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEpO1xcclxcbiAgfVxcclxcblxcclxcbiAgI292ZXJsYXkge1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIHRyYW5zaXRpb246IDIwMG1zIGVhc2UtaW4tb3V0O1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjUpO1xcclxcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgI292ZXJsYXkuYWN0aXZlIHtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gICAgcG9pbnRlci1ldmVudHM6IGFsbDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5wcm9qZWN0LWxpc3QgbGkge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmFjdGl2ZS1wcm9qZWN0IHtcXHJcXG4gICAgZm9udC1zaXplOiAxNDAlO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnRvLWRvLWxpc3QgbGkge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxuICB9XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3VpL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7Ozs7Ozs7Ozs7OztDQWFDLFNBQVM7Q0FDVCxVQUFVO0NBQ1YsU0FBUztDQUNULGVBQWU7Q0FDZixhQUFhO0NBQ2Isd0JBQXdCO0FBQ3pCO0FBQ0EsZ0RBQWdEO0FBQ2hEOztDQUVDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsY0FBYztBQUNmO0FBQ0E7Q0FDQyxnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLFlBQVk7QUFDYjtBQUNBOztDQUVDLFdBQVc7Q0FDWCxhQUFhO0FBQ2Q7QUFDQTtDQUNDLHlCQUF5QjtDQUN6QixpQkFBaUI7QUFDbEI7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLDRCQUE0QjtJQUM1Qjs7eUJBRXFCO0lBQ3JCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFFBQVE7SUFDUixTQUFTO0lBQ1QseUNBQXlDO0lBQ3pDLDZCQUE2QjtJQUM3Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSx5Q0FBeUM7RUFDM0M7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsVUFBVTtJQUNWLDZCQUE2QjtJQUM3QixNQUFNO0lBQ04sT0FBTztJQUNQLFFBQVE7SUFDUixTQUFTO0lBQ1QsbUNBQW1DO0lBQ25DLG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLFVBQVU7SUFDVixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLFNBQVM7RUFDWFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxyXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcclxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXHJcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxyXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXHJcXG5iLCB1LCBpLCBjZW50ZXIsXFxyXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXHJcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXHJcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXHJcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxyXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXHJcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXHJcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcclxcblxcdG1hcmdpbjogMDtcXHJcXG5cXHRwYWRkaW5nOiAwO1xcclxcblxcdGJvcmRlcjogMDtcXHJcXG5cXHRmb250LXNpemU6IDEwMCU7XFxyXFxuXFx0Zm9udDogaW5oZXJpdDtcXHJcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxyXFxufVxcclxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXHJcXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcXHJcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcclxcblxcdGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5ib2R5IHtcXHJcXG5cXHRsaW5lLWhlaWdodDogMTtcXHJcXG59XFxyXFxub2wsIHVsIHtcXHJcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5ibG9ja3F1b3RlLCBxIHtcXHJcXG5cXHRxdW90ZXM6IG5vbmU7XFxyXFxufVxcclxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcclxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXHJcXG5cXHRjb250ZW50OiAnJztcXHJcXG5cXHRjb250ZW50OiBub25lO1xcclxcbn1cXHJcXG50YWJsZSB7XFxyXFxuXFx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXHJcXG5cXHRib3JkZXItc3BhY2luZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuOnJvb3Qge1xcclxcbiAgICAtLWRhcmstZ3JleTogIzc1NzU3NTtcXHJcXG59XFxyXFxuXFxyXFxuLmFwcCB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA2MHB4IDFmcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXHJcXG4gICAgICAgIFxcXCJoZWFkZXIgaGVhZGVyXFxcIlxcclxcbiAgICAgICAgXFxcInNpZGViYXIgZGlzcGxheVxcXCI7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzOGJkZjg7XFxyXFxufVxcclxcblxcclxcbi5zaWRlYmFyIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBzaWRlYmFyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xcclxcbn1cXHJcXG5cXHJcXG4uZGlzcGxheSB7XFxyXFxuICAgIGdyaWQtYXJlYTogZGlzcGxheTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0cy1oZWFkZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4jbW9kYWwge1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHRvcDogNTAlO1xcclxcbiAgICBsZWZ0OiA1MCU7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDApO1xcclxcbiAgICB0cmFuc2l0aW9uOiAyMDBtcyBlYXNlLWluLW91dDtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIHotaW5kZXg6IDEwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgd2lkdGg6IDUwMHB4O1xcclxcbiAgICBtYXgtd2lkdGg6IDgwJTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgI21vZGFsLmFjdGl2ZSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEpO1xcclxcbiAgfVxcclxcblxcclxcbiAgI292ZXJsYXkge1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIHRyYW5zaXRpb246IDIwMG1zIGVhc2UtaW4tb3V0O1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjUpO1xcclxcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgI292ZXJsYXkuYWN0aXZlIHtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gICAgcG9pbnRlci1ldmVudHM6IGFsbDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5wcm9qZWN0LWxpc3QgbGkge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmFjdGl2ZS1wcm9qZWN0IHtcXHJcXG4gICAgZm9udC1zaXplOiAxNDAlO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnRvLWRvLWxpc3QgbGkge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxuICB9XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBVSSB9IGZyb20gXCIuL3VpL1VJXCI7XHJcbmltcG9ydCBQcm9qZWN0c0NvbnRyb2xsZXIgZnJvbSBcIi4vY29udHJvbGxlcnMvUHJvamVjdHNDb250cm9sbGVyXCI7XHJcbmltcG9ydCBUb0RvQXBwIGZyb20gXCIuL2xvZ2ljL1RvRG9BcHBcIjtcclxuaW1wb3J0IFRhc2tDb250cm9sbGVyIGZyb20gXCIuL2NvbnRyb2xsZXJzL1Rhc2tzQ29udHJvbGxlclwiO1xyXG5pbXBvcnQgU3RvcmFnZSBmcm9tIFwiLi9wZXJzaXN0YW5jZS9zdG9yYWdlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHAge1xyXG4gICAgI1NUT1JBR0VfS0VZID0gJ1RPX0RPX0xJU1QnXHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgY29uc3QgbG9jYWxQZXJzaXN0YW5jZSA9IG5ldyBTdG9yYWdlKHRoaXMuI1NUT1JBR0VfS0VZKVxyXG4gICAgICAgIHRoaXMucHJvamVjdHNNb2RlbCA9IGxvY2FsUGVyc2lzdGFuY2UuYXBwUHJveHlcclxuXHJcbiAgICAgICAgdGhpcy51aSA9IG5ldyBVSSgpXHJcbiAgICAgICAgdGhpcy50YXNrc0NvbnRyb2xsZXIgPSBuZXcgVGFza0NvbnRyb2xsZXIodGhpcy5wcm9qZWN0c01vZGVsLCB0aGlzLnVpLmxpc3RWaWV3KVxyXG4gICAgICAgIHRoaXMucHJvamVjdHNDb250cm9sbGVyID0gbmV3IFByb2plY3RzQ29udHJvbGxlcih0aGlzLnByb2plY3RzTW9kZWwsIHRoaXMudWkucHJvamVjdHNWaWV3LCB0aGlzLnRhc2tzQ29udHJvbGxlcilcclxuICAgIH1cclxufSAiLCJpbXBvcnQgVG9Eb0FwcCBmcm9tIFwiLi4vbG9naWMvVG9Eb0FwcFwiXHJcbmltcG9ydCBUb0RvTGlzdCBmcm9tIFwiLi4vbG9naWMvVG9Eb0xpc3RcIlxyXG5pbXBvcnQgUHJvamVjdHNWaWV3IGZyb20gXCIuLi91aS9Qcm9qZWN0c1ZpZXdcIlxyXG5pbXBvcnQgZ2V0VW5pcXVlSWQgZnJvbSBcIi4uL3V0aWxpdHkvaWRHZW5lcmF0b3JcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdHNDb250cm9sbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKHByb2plY3RzTW9kZWwsIHByb2plY3RzVmlldywgdGFza3NDb250cm9sbGVyKSB7XHJcbiAgICAgICAgdGhpcy5tb2RlbCA9IHByb2plY3RzTW9kZWxcclxuICAgICAgICB0aGlzLnZpZXcgPSBwcm9qZWN0c1ZpZXdcclxuICAgICAgICB0aGlzLnRhc2tzQ29udHJvbGxlciA9IHRhc2tzQ29udHJvbGxlclxyXG4gICAgICAgIHRoaXMuc2V0dXBBZGRQcm9qZWN0QnV0dG9uKClcclxuICAgICAgICB0aGlzLnNldHVwUHJvamVjdFNlbGVjdGlvbigpXHJcbiAgICAgICAgdGhpcy5zZXR1cEVkaXRQcm9qZWN0QnV0dG9uKClcclxuICAgICAgICB0aGlzLnNldHVwRGVsZXRlUHJvamVjdEJ1dHRvbigpXHJcbiAgICAgICAgdGhpcy5yZW5kZXJQcm9qZWN0cygpXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGFkZFByb2plY3QobmFtZSkge1xyXG4gICAgICAgIGNvbnN0IG5ld0xpc3QgPSBuZXcgVG9Eb0xpc3QoZ2V0VW5pcXVlSWQoKSwgbmFtZSlcclxuICAgICAgICB0aGlzLm1vZGVsLmFkZFRvRG9MaXN0KG5ld0xpc3QpXHJcbiAgICAgICAgdGhpcy5yZW5kZXJQcm9qZWN0cygpXHJcbiAgICB9XHJcblxyXG4gICAgZWRpdFByb2plY3QoaWQsIG5ld05hbWUpIHtcclxuICAgICAgICB0aGlzLm1vZGVsLmVkaXRUb0RvTGlzdChpZCwgbmV3TmFtZSlcclxuICAgICAgICB0aGlzLnJlbmRlclByb2plY3RzKClcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVQcm9qZWN0KGlkKSB7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5yZW1vdmVUb0RvTGlzdChpZClcclxuICAgICAgICB0aGlzLnJlbmRlclByb2plY3RzKClcclxuICAgIH1cclxuXHJcbiAgICBzZWxlY3RBY3RpdmVQcm9qZWN0KGlkKSB7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5zZXRBY3RpdmVMaXN0KGlkKVxyXG4gICAgICAgIHRoaXMucmVuZGVyUHJvamVjdHMoKVxyXG4gICAgICAgIHRoaXMudGFza3NDb250cm9sbGVyLnJlbmRlclRhc2tzKClcclxuICAgIH1cclxuXHJcbiAgICBzZXR1cEFkZFByb2plY3RCdXR0b24oKSB7XHJcbiAgICAgICAgdGhpcy52aWV3LmJpbmRBZGRQcm9qZWN0QnV0dG9uKG5hbWUgPT4gdGhpcy5hZGRQcm9qZWN0KG5hbWUpKVxyXG4gICAgfVxyXG5cclxuICAgIHNldHVwRWRpdFByb2plY3RCdXR0b24oKSB7XHJcbiAgICAgICAgdGhpcy52aWV3LmJpbmRFZGl0UHJvamVjdEJ1dHRvbigoaWQsIG5ld05hbWUpID0+IHRoaXMuZWRpdFByb2plY3QoaWQsIG5ld05hbWUpKVxyXG4gICAgfVxyXG5cclxuICAgIHNldHVwRGVsZXRlUHJvamVjdEJ1dHRvbigpIHtcclxuICAgICAgICB0aGlzLnZpZXcuYmluZERlbGV0ZVByb2plY3RCdXR0b24oaWQgPT4gdGhpcy5yZW1vdmVQcm9qZWN0KGlkKSlcclxuICAgIH1cclxuXHJcbiAgICBzZXR1cFByb2plY3RTZWxlY3Rpb24oKSB7XHJcbiAgICAgICAgdGhpcy52aWV3LmJpbmRQcm9qZWN0U2VsZWN0aW9uKHNlbGVjdGVkTGlzdElkID0+IHRoaXMuc2VsZWN0QWN0aXZlUHJvamVjdChzZWxlY3RlZExpc3RJZCkpXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyUHJvamVjdHMoKSB7XHJcbiAgICAgICAgdGhpcy52aWV3LnJlbmRlcih0aGlzLm1vZGVsLnRvRG9MaXN0cyk7XHJcbiAgICAgICAgaWYgKHRoaXMubW9kZWwuY3VycmVudExpc3QgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLnZpZXcuaGlnaGxpZ2h0UHJvamVjdCh0aGlzLm1vZGVsLmN1cnJlbnRMaXN0LmlkKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCBMaXN0VmlldyBmcm9tIFwiLi4vdWkvTGlzdFZpZXdcIjtcclxuaW1wb3J0IGdldFVuaXF1ZUlkIGZyb20gJy4uL3V0aWxpdHkvaWRHZW5lcmF0b3InXHJcbmltcG9ydCBUb0RvSXRlbSBmcm9tICcuLi9sb2dpYy9Ub0RvSXRlbSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2tDb250cm9sbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKHByb2plY3RzTW9kZWwsIHRhc2tzVmlldykge1xyXG4gICAgICAgIHRoaXMubW9kZWwgPSBwcm9qZWN0c01vZGVsXHJcbiAgICAgICAgdGhpcy52aWV3ID0gdGFza3NWaWV3XHJcbiAgICAgICAgdGhpcy5zZXR1cEFkZFRhc2tCdXR0b24oKVxyXG4gICAgICAgIHRoaXMuc2V0dXBDb21wbGV0aW9uQ2hlY2tib3goKVxyXG4gICAgICAgIHRoaXMuc2V0dXBFZGl0VGFza0J1dHRvbigpXHJcbiAgICAgICAgdGhpcy5zZXR1cERlbGV0ZVRhc2tCdXR0b24oKVxyXG4gICAgICAgIHRoaXMucmVuZGVyVGFza3MoKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlclRhc2tzKCkge1xyXG4gICAgICAgIHRoaXMudmlldy5yZW5kZXIodGhpcy5tb2RlbC5jdXJyZW50TGlzdC50b0RvSXRlbXMpXHJcbiAgICAgICAgdGhpcy52aWV3LnNldEhlYWRlclRpdGxlKHRoaXMubW9kZWwuY3VycmVudExpc3QudGl0bGUpXHJcbiAgICB9XHJcblxyXG4gICAgYWRkVGFzayhuYW1lLCBkdWVEYXRlLCBwcmlvcml0eSwgZGVzY3JpcHRpb24pIHtcclxuICAgICAgICBjb25zdCBuZXdUYXNrID0gbmV3IFRvRG9JdGVtKGdldFVuaXF1ZUlkKCksIG5hbWUsIGR1ZURhdGUsIHByaW9yaXR5LCBkZXNjcmlwdGlvbilcclxuICAgICAgICBjb25zb2xlLmxvZyhuZXdUYXNrKVxyXG4gICAgICAgIHRoaXMubW9kZWwuY3VycmVudExpc3QuYWRkVG9EbyhuZXdUYXNrKVxyXG4gICAgICAgIHRoaXMucmVuZGVyVGFza3MoKVxyXG4gICAgfVxyXG5cclxuICAgIGVkaXRUYXNrKGlkLCBuZXdOYW1lLCBuZXdEdWVEYXRlLCBuZXdQcmlvcml0eSwgbmV3RGVzY3JpcHRpb24pIHtcclxuICAgICAgICBjb25zdCB0YXNrQmVpbmdDaGFuZ2VkID0gdGhpcy5tb2RlbC5jdXJyZW50TGlzdC5nZXRUYXNrKGlkKVxyXG4gICAgICAgIHRhc2tCZWluZ0NoYW5nZWQudGl0bGUgPSBuZXdOYW1lXHJcbiAgICAgICAgdGFza0JlaW5nQ2hhbmdlZC5kdWVEYXRlID0gbmV3RHVlRGF0ZVxyXG4gICAgICAgIHRhc2tCZWluZ0NoYW5nZWQucHJpb3JpdHkgPSBuZXdQcmlvcml0eVxyXG4gICAgICAgIHRhc2tCZWluZ0NoYW5nZWQuZGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvblxyXG4gICAgICAgIHRoaXMucmVuZGVyVGFza3MoKVxyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZVRhc2soaWQpIHtcclxuICAgICAgICB0aGlzLm1vZGVsLmN1cnJlbnRMaXN0LnJlbW92ZVRvRG8oaWQpXHJcbiAgICAgICAgdGhpcy5yZW5kZXJUYXNrcygpXHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlQ29tcGxldGlvbih0YXNrSWQsIG5ld1N0YXRlKSB7XHJcbiAgICAgICAgY29uc3QgdGFza0JlaW5nQ2hhbmdlZCA9IHRoaXMubW9kZWwuY3VycmVudExpc3QuZ2V0VGFzayh0YXNrSWQpXHJcbiAgICAgICAgdGFza0JlaW5nQ2hhbmdlZC5zZXRDb21wbGV0aW9uU3RhdGUobmV3U3RhdGUpXHJcbiAgICAgICAgdGhpcy5yZW5kZXJUYXNrcygpXHJcbiAgICB9XHJcblxyXG4gICAgc2V0dXBBZGRUYXNrQnV0dG9uKCkge1xyXG4gICAgICAgIHRoaXMudmlldy5iaW5kQWRkVGFza0J1dHRvbigobmFtZSwgZHVlRGF0ZSwgcHJpb3JpdHksIGRlc2NyaXB0aW9uKSA9PiB0aGlzLmFkZFRhc2sobmFtZSwgZHVlRGF0ZSwgcHJpb3JpdHksIGRlc2NyaXB0aW9uKSlcclxuICAgIH1cclxuXHJcbiAgICBzZXR1cENvbXBsZXRpb25DaGVja2JveCgpIHtcclxuICAgICAgICB0aGlzLnZpZXcuYmluZENvbXBsZXRpb25DaGVja2JveCgodGFza0lkLCBuZXdTdGF0ZSkgPT4gdGhpcy5jaGFuZ2VDb21wbGV0aW9uKHRhc2tJZCwgbmV3U3RhdGUpKVxyXG4gICAgfVxyXG5cclxuICAgIHNldHVwRWRpdFRhc2tCdXR0b24oKSB7XHJcbiAgICAgICAgdGhpcy52aWV3LmJpbmRFZGl0VGFza0J1dHRvbigoaWQsIG5ld05hbWUsIG5ld0R1ZURhdGUsIG5ld1ByaW9yaXR5LCBuZXdEZXNjcmlwdGlvbikgPT4gdGhpcy5lZGl0VGFzayhpZCwgbmV3TmFtZSwgbmV3RHVlRGF0ZSwgbmV3UHJpb3JpdHksIG5ld0Rlc2NyaXB0aW9uKSlcclxuICAgIH1cclxuXHJcbiAgICBzZXR1cERlbGV0ZVRhc2tCdXR0b24oKSB7XHJcbiAgICAgICAgdGhpcy52aWV3LmJpbmREZWxldGVUYXNrQnV0dG9uKGlkID0+IHRoaXMuZGVsZXRlVGFzayhpZCkpXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgJy4vdWkvc3R5bGUuY3NzJ1xyXG5pbXBvcnQgQXBwIGZyb20gJy4vQXBwJ1xyXG5cclxuY29uc3QgYXBwID0gbmV3IEFwcCgpO1xyXG5jb25zb2xlLmxvZyhhcHAudWkucHJvamVjdHNWaWV3LnByb2plY3RDcmVhdGlvbkZvcm0uZ2V0QWRkUHJvamVjdEJ1dHRvbigpKSIsImltcG9ydCBUb0RvTGlzdCBmcm9tIFwiLi9Ub0RvTGlzdFwiXHJcbmltcG9ydCBnZXRVbmlxdWVJZCBmcm9tICcuLi91dGlsaXR5L2lkR2VuZXJhdG9yJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9Eb0FwcCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnRvRG9MaXN0cyA9IFtdXHJcbiAgICAgICAgY29uc3QgZGVmYXVsdExpc3QgPSBuZXcgVG9Eb0xpc3QoZ2V0VW5pcXVlSWQoKSwgXCJEZWZhdWx0IExpc3RcIilcclxuICAgICAgICB0aGlzLmFkZFRvRG9MaXN0KGRlZmF1bHRMaXN0KVxyXG4gICAgICAgIHRoaXMuY3VycmVudExpc3QgPSB0aGlzLnRvRG9MaXN0c1swXVxyXG4gICAgfVxyXG5cclxuICAgIGFkZFRvRG9MaXN0KHRvRG9MaXN0KSB7XHJcbiAgICAgICAgdGhpcy50b0RvTGlzdHMucHVzaCh0b0RvTGlzdClcclxuICAgICAgICBpZiAodGhpcy50b0RvTGlzdHMubGVuZ3RoID09IDEpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50TGlzdCA9IHRoaXMudG9Eb0xpc3RzWzBdXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZVRvRG9MaXN0KGlkKSB7XHJcbiAgICAgICAgdGhpcy50b0RvTGlzdHMgPSB0aGlzLnRvRG9MaXN0cy5maWx0ZXIodG9Eb0xpc3QgPT4gdG9Eb0xpc3QuaWQgIT09IGlkKVxyXG4gICAgICAgIGlmICh0aGlzLnRvRG9MaXN0cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudExpc3QgPSB0aGlzLnRvRG9MaXN0c1swXVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudExpc3QgPSBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldFRvRG9MaXN0KGlkKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudG9Eb0xpc3RzLmZpbmQobGlzdCA9PiBsaXN0LmlkID09IGlkKVxyXG4gICAgfVxyXG5cclxuICAgIGVkaXRUb0RvTGlzdChpZCwgbmV3VGl0bGUpIHtcclxuICAgICAgICBjb25zdCBsaXN0QmVpbmdFZGl0ZWQgPSB0aGlzLmdldFRvRG9MaXN0KGlkKVxyXG4gICAgICAgIGlmICghbGlzdEJlaW5nRWRpdGVkKSByZXR1cm5cclxuICAgICAgICBsaXN0QmVpbmdFZGl0ZWQuc2V0VGl0bGUobmV3VGl0bGUpXHJcbiAgICB9XHJcblxyXG4gICAgc2V0QWN0aXZlTGlzdChpZCkge1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkTGlzdCA9IHRoaXMuZ2V0VG9Eb0xpc3QoaWQpXHJcbiAgICAgICAgaWYgKHNlbGVjdGVkTGlzdCkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRMaXN0ID0gc2VsZWN0ZWRMaXN0XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjcmVhdGVGcm9tUGFyc2VkSlNPTihwYXJzZWRKU09OT2JqZWN0KSB7XHJcbiAgICAgICAgY29uc3QgbGlzdHMgPSBuZXcgdGhpcygpXHJcblxyXG4gICAgICAgIGlmIChwYXJzZWRKU09OT2JqZWN0ID09IG51bGwpIHJldHVybiBsaXN0cztcclxuICAgICAgICAvLyB3ZSBkb24ndCBuZWVkIHRoZSBkZWZhdWx0IGxpc3RcclxuICAgICAgICBsaXN0cy50b0RvTGlzdHMgPSBbXVxyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IHBhcnNlZFRvRG9MaXN0IG9mIHBhcnNlZEpTT05PYmplY3QudG9Eb0xpc3RzKSB7XHJcbiAgICAgICAgICAgIGxpc3RzLmFkZFRvRG9MaXN0KFRvRG9MaXN0LmNyZWF0ZUZyb21QYXJzZWRKU09OKHBhcnNlZFRvRG9MaXN0KSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxpc3RzLnNldEFjdGl2ZUxpc3QocGFyc2VkSlNPTk9iamVjdC5jdXJyZW50TGlzdC5pZClcclxuICAgICAgICByZXR1cm4gbGlzdHNcclxuICAgIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvRG9JdGVtIHtcclxuICAgIGNvbnN0cnVjdG9yKGlkLCB0aXRsZSwgZHVlRGF0ZSwgcHJpb3JpdHksIGRlc2NyaXB0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkXHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlXHJcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZVxyXG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eVxyXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvblxyXG4gICAgICAgIHRoaXMuY29tcGxldGVkID0gZmFsc2VcclxuICAgIH1cclxuXHJcbiAgICBzZXRDb21wbGV0aW9uU3RhdGUoaXNUYXNrQ29tcGxldGVkKSB7XHJcbiAgICAgICAgdGhpcy5jb21wbGV0ZWQgPSBpc1Rhc2tDb21wbGV0ZWRcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY3JlYXRlRnJvbVBhcnNlZEpTT04ocGFyc2VkSlNPTk9iamVjdCkge1xyXG4gICAgICAgIGNvbnN0IHJldHJpZXZlZFRvRG9JdGVtID0gbmV3IHRoaXMoXHJcbiAgICAgICAgICAgIHBhcnNlZEpTT05PYmplY3QuaWQsXHJcbiAgICAgICAgICAgIHBhcnNlZEpTT05PYmplY3QudGl0bGUsXHJcbiAgICAgICAgICAgIHBhcnNlZEpTT05PYmplY3QuZHVlRGF0ZSxcclxuICAgICAgICAgICAgcGFyc2VkSlNPTk9iamVjdC5wcmlvcml0eSxcclxuICAgICAgICAgICAgcGFyc2VkSlNPTk9iamVjdC5kZXNjcmlwdGlvblxyXG4gICAgICAgIClcclxuICAgICAgICByZXRyaWV2ZWRUb0RvSXRlbS5jb21wbGV0ZWQgPSBwYXJzZWRKU09OT2JqZWN0LmNvbXBsZXRlZFxyXG4gICAgICAgIHJldHVybiByZXRyaWV2ZWRUb0RvSXRlbVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IFRvRG9JdGVtIGZyb20gXCIuL1RvRG9JdGVtXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvRG9MaXN0IHtcclxuICAgIGNvbnN0cnVjdG9yKGlkLCB0aXRsZSkge1xyXG4gICAgICAgIHRoaXMuaWQgPSBpZFxyXG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZVxyXG4gICAgICAgIHRoaXMudG9Eb0l0ZW1zID0gW11cclxuICAgIH1cclxuXHJcbiAgICBhZGRUb0RvKHRvZG8pIHtcclxuICAgICAgICB0aGlzLnRvRG9JdGVtcy5wdXNoKHRvZG8pXHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlVG9Ebyh0b0RvSWQpIHtcclxuICAgICAgICB0aGlzLnRvRG9JdGVtcyA9IHRoaXMudG9Eb0l0ZW1zLmZpbHRlcih0b0RvSXRlbSA9PiB0b0RvSXRlbS5pZCAhPT0gdG9Eb0lkKVxyXG4gICAgfVxyXG5cclxuICAgIHNldFRpdGxlKHRpdGxlKSB7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VGFzayhpZCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRvRG9JdGVtcy5maW5kKHRhc2sgPT4gdGFzay5pZCA9PSBpZClcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY3JlYXRlRnJvbVBhcnNlZEpTT04ocGFyc2VkSlNPTk9iamVjdCkge1xyXG4gICAgICAgIGNvbnN0IGxpc3QgPSBuZXcgdGhpcyhwYXJzZWRKU09OT2JqZWN0LmlkLCBwYXJzZWRKU09OT2JqZWN0LnRpdGxlKVxyXG4gICAgICAgIGZvciAoY29uc3QgcGFyc2VkVG9Eb0l0ZW0gb2YgcGFyc2VkSlNPTk9iamVjdC50b0RvSXRlbXMpIHtcclxuICAgICAgICAgICAgbGlzdC5hZGRUb0RvKFRvRG9JdGVtLmNyZWF0ZUZyb21QYXJzZWRKU09OKHBhcnNlZFRvRG9JdGVtKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIGxpc3RcclxuICAgIH1cclxufSIsImltcG9ydCBUb0RvQXBwIGZyb20gJy4uL2xvZ2ljL1RvRG9BcHAnXHJcblxyXG5jb25zdCBwcm94eUNoYW5nZUhhbmRsZXIgPSB7XHJcbiAgICBnZXQ6ICh0YXJnZXQsIGtleSkgPT4ge1xyXG4gICAgICBpZih0eXBlb2YgdGFyZ2V0W2tleV0gPT09IFwib2JqZWN0XCIgJiYgdGFyZ2V0W2tleV0gIT09IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb3h5KHRhcmdldFtrZXldLCBoYW5kbGVyKVxyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIHJldHVybiB0YXJnZXRba2V5XVxyXG4gICAgfSxcclxuICAgIHNldDogKHRhcmdldCwgcHJvcCwgdmFsdWUpID0+IHtcclxuICAgICAgICB0YXJnZXRbcHJvcF0gPSB2YWx1ZVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQSBjaGFuZ2Ugd2FzIG1hZGUhXCIpXHJcbiAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RvcmFnZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihsb2NhbFN0b3JhZ2VLZXkpIHtcclxuICAgICAgICB0aGlzLmxvY2FsU3RvcmFnZUtleSA9IGxvY2FsU3RvcmFnZUtleVxyXG4gICAgICAgIHRoaXMuYXBwUHJveHkgPSB0aGlzLmxvYWRBcHAoKVxyXG4gICAgfVxyXG5cclxuICAgIGxvYWRBcHAoKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgdGhpcy5kaXJlY3RBcHAgPSBUb0RvQXBwLmNyZWF0ZUZyb21QYXJzZWRKU09OKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5sb2NhbFN0b3JhZ2VLZXkpKSlcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICB0aGlzLmRpcmVjdEFwcCA9IG5ldyBUb0RvQXBwKClcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5sb2NhbFN0b3JhZ2VLZXksIEpTT04uc3RyaW5naWZ5KHRoaXMuZGlyZWN0QXBwKSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgUHJveHkodGhpcy5kaXJlY3RBcHAsIHRoaXMuI3Byb3h5Q2hhbmdlSGFuZGxlcilcclxuICAgIH1cclxuXHJcbiAgICAjcHJveHlDaGFuZ2VIYW5kbGVyID0ge1xyXG4gICAgICAgIGdldDogKHRhcmdldCwga2V5KSA9PiB7XHJcbiAgICAgICAgICBpZih0eXBlb2YgdGFyZ2V0W2tleV0gPT09IFwib2JqZWN0XCIgJiYgdGFyZ2V0W2tleV0gIT09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm94eSh0YXJnZXRba2V5XSwgdGhpcy4jcHJveHlDaGFuZ2VIYW5kbGVyKVxyXG4gICAgICAgICAgfVxyXG4gICAgICBcclxuICAgICAgICAgIHJldHVybiB0YXJnZXRba2V5XVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0OiAodGFyZ2V0LCBwcm9wLCB2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICB0YXJnZXRbcHJvcF0gPSB2YWx1ZVxyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLmxvY2FsU3RvcmFnZUtleSwgSlNPTi5zdHJpbmdpZnkodGhpcy5kaXJlY3RBcHApKVxyXG4gICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUhlYWRlcihwYXJlbnRFbGVtZW50LCBhcHBOYW1lKSB7XHJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXHJcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBhcHBOYW1lXHJcbiAgICBwYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKGhlYWRlcilcclxuICAgIHJldHVybiBoZWFkZXJcclxufSIsImltcG9ydCB7IHNldE1vZGFsQ29udGVudCB9IGZyb20gJy4vUG9wdXAnXHJcblxyXG5mdW5jdGlvbiB0YXNrSXRlbUZhY3RvcnkoaWQsIHRpdGxlLCBkdWVEYXRlLCBwcmlvcml0eSkge1xyXG4gICAgY29uc3QgdGFza0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXHJcbiAgICB0YXNrSXRlbS5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgPGlucHV0IGNsYXNzPVwidGFzay1jb21wbGV0aW9uXCIgdHlwZT1cImNoZWNrYm94XCIvPlxyXG4gICAgICAgIDxoNCBjbGFzcz1cInRhc2stbmFtZVwiPiR7dGl0bGV9PC9oND5cclxuICAgICAgICA8aDQgY2xhc3M9XCJkdWUtZGF0ZVwiPiR7ZHVlRGF0ZX08L2g0PlxyXG4gICAgICAgIDxoNCBjbGFzcz1cInByaW9yaXR5XCI+JHtwcmlvcml0eX08L2g0PlxyXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJ0YXNrLWRlc2NyaXB0aW9uIG9wZW4tcG9wdXBcIj5EZXNjcmlwdGlvbjwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJlZGl0LXRhc2sgb3Blbi1wb3B1cFwiPkVkaXQ8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZGVsZXRlLXRhc2tcIj5EZWxldGU8L2J1dHRvbj5cclxuICAgIGBcclxuXHJcbiAgICB0YXNrSXRlbS5pZCA9IGlkXHJcbiAgICByZXR1cm4gdGFza0l0ZW1cclxufVxyXG5cclxuZnVuY3Rpb24gZGVzY3JpcHRpb25WaWV3RmFjdG9yeSh0YXNrTmFtZSwgY29udGVudCkge1xyXG4gICAgY29uc3QgZGVzY3JpcHRpb25Cb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgZGVzY3JpcHRpb25Cb3guaW5uZXJIVE1MID0gYFxyXG4gICAgICAgIDxoMiBjbGFzcz1cInRhc2stZGVzY3JpcHRpb24tdGl0bGVcIj4ke3Rhc2tOYW1lfTwvaDI+XHJcbiAgICAgICAgPHAgY2xhc3M9XCJ0YXNrLWRlc2NyaXB0aW9uLWJvZHlcIj4ke2NvbnRlbnR9PC9wPlxyXG4gICAgYFxyXG4gICAgcmV0dXJuIGRlc2NyaXB0aW9uQm94XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpc3RWaWV3IHtcclxuICAgIGNvbnN0cnVjdG9yKHBhcmVudEVsZW1lbnQpIHtcclxuICAgICAgICBwYXJlbnRFbGVtZW50LmlubmVySFRNTCArPSBgXHJcbiAgICAgICAgICAgIDxoMiBjbGFzcz1cInByb2plY3QtbmFtZS1oZWFkaW5nXCI+PC9oMj5cclxuICAgICAgICAgICAgPHVsIGNsYXNzPVwidG8tZG8tbGlzdFwiPjwvdWw+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJhZGQtdG8tZG8gb3Blbi1wb3B1cFwiPkFkZCBUYXNrPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9J3JlbW92ZS1kb25lLXRhc2tzXCI+UmVtb3ZlIGNvbXBsZXRlZCB0YXNrczwvYnV0dG9uPlxyXG4gICAgICAgIGBcclxuICAgICAgICB0aGlzLmhlYWRpbmcgPSBwYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2gyJylcclxuICAgICAgICB0aGlzLmxpc3RFbGVtZW50ID0gcGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcudG8tZG8tbGlzdCcpXHJcbiAgICAgICAgdGhpcy5hZGRUYXNrQnV0dG9uID0gcGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRvLWRvJylcclxuICAgICAgICB0aGlzLnJlbW92ZURvbmVUYXNrc0J1dHRvbiA9IHBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLnJlbW92ZS1kb25lLXRhc2tzJylcclxuXHJcbiAgICAgICAgdGhpcy50YXNrQ3JlYXRpb25Gb3JtID0gbmV3IFRhc2tDcmVhdGlvbkZvcm0oKVxyXG4gICAgICAgIHRoaXMudGFza0VkaXRpb25Gb3JtID0gbmV3IFRhc2tFZGl0aW9uRm9ybSgpXHJcblxyXG4gICAgICAgIHRoaXMuX3NldHVwQWRkVGFza0J1dHRvbigpXHJcbiAgICAgICAgdGhpcy5fc2V0dXBEZXNjcmlwdGlvbkJ1dHRvbigpXHJcbiAgICAgICAgdGhpcy5fc2V0dXBFZGl0VGFza0J1dHRvbigpXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKHRhc2tzKSB7XHJcbiAgICAgICAgdGhpcy5fY2xlYXIoKVxyXG4gICAgICAgIHRhc2tzLmZvckVhY2godGFzayA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX2FkZFRhc2sodGFzay5pZCwgdGFzay50aXRsZSwgdGFzay5kdWVEYXRlLCB0YXNrLnByaW9yaXR5KVxyXG4gICAgICAgICAgICB0aGlzLl9zZXRUYXNrQ29tcGxldGlvbih0YXNrLmlkLCB0YXNrLmNvbXBsZXRlZClcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMuX21hcFRhc2tzVG9EZXNjcmlwdGlvbnModGFza3MpXHJcbiAgICB9XHJcblxyXG4gICAgX3NldFRhc2tDb21wbGV0aW9uKGlkLCBuZXdTdGF0ZSkge1xyXG4gICAgICAgIHRoaXMubGlzdEVsZW1lbnQucXVlcnlTZWxlY3RvcihgW2lkPVwiJHtpZH1cIl1gKS5xdWVyeVNlbGVjdG9yKCcudGFzay1jb21wbGV0aW9uJykuY2hlY2tlZCA9IG5ld1N0YXRlIFxyXG4gICAgfVxyXG5cclxuICAgIF9hZGRUYXNrKGlkLCB0aXRsZSwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcclxuICAgICAgICB0aGlzLmxpc3RFbGVtZW50LmFwcGVuZENoaWxkKHRhc2tJdGVtRmFjdG9yeShpZCwgdGl0bGUsIGR1ZURhdGUsIHByaW9yaXR5KSlcclxuICAgIH1cclxuXHJcbiAgICBfY2xlYXIoKSB7XHJcbiAgICAgICAgdGhpcy5saXN0RWxlbWVudC5pbm5lckhUTUwgPSAnJ1xyXG4gICAgfVxyXG5cclxuICAgIF9zZXR1cEFkZFRhc2tCdXR0b24oKSB7XHJcbiAgICAgICAgdGhpcy5hZGRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudGFza0NyZWF0aW9uRm9ybS5jbGVhcigpXHJcbiAgICAgICAgICAgIHNldE1vZGFsQ29udGVudCh0aGlzLnRhc2tDcmVhdGlvbkZvcm0uZWxlbWVudClcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIF9zZXR1cEVkaXRUYXNrQnV0dG9uKCkge1xyXG4gICAgICAgIHRoaXMubGlzdEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICAgICAgICAgICAgdGhpcy50YXNrRWRpdGlvbkZvcm0uY2xlYXIoKVxyXG4gICAgICAgICAgICBjb25zdCBwb3RlbnRpYWxseVByZXNzZWRFZGl0QnV0dG9uID0gZS50YXJnZXQuY2xvc2VzdCgnLmVkaXQtdGFzaycpIFxyXG4gICAgICAgICAgICBpZiAoIXBvdGVudGlhbGx5UHJlc3NlZEVkaXRCdXR0b24pIHJldHVyblxyXG4gICAgICAgICAgICBjb25zdCBwcmVzc2VkVGFzayA9IHBvdGVudGlhbGx5UHJlc3NlZEVkaXRCdXR0b24uY2xvc2VzdCgnbGknKVxyXG4gICAgICAgICAgICB0aGlzLmlkT2ZUYXNrVW5kZXJFZGl0aW9uID0gcHJlc3NlZFRhc2suaWRcclxuICAgICAgICAgICAgdGhpcy50YXNrRWRpdGlvbkZvcm0ubG9hZFZhbHVlcyhcclxuICAgICAgICAgICAgICAgIHByZXNzZWRUYXNrLnF1ZXJ5U2VsZWN0b3IoJy50YXNrLW5hbWUnKS50ZXh0Q29udGVudCxcclxuICAgICAgICAgICAgICAgIHByZXNzZWRUYXNrLnF1ZXJ5U2VsZWN0b3IoJy5kdWUtZGF0ZScpLnRleHRDb250ZW50LFxyXG4gICAgICAgICAgICAgICAgcHJlc3NlZFRhc2sucXVlcnlTZWxlY3RvcignLnByaW9yaXR5JykudGV4dENvbnRlbnQudG9Mb3dlckNhc2UoKSxcclxuICAgICAgICAgICAgICAgIHRoaXMudGFza3NUb0Rlc2NyaXB0aW9uc01hcFtwcmVzc2VkVGFzay5pZF1cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICBzZXRNb2RhbENvbnRlbnQodGhpcy50YXNrRWRpdGlvbkZvcm0uZWxlbWVudClcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIF9tYXBUYXNrc1RvRGVzY3JpcHRpb25zKHRhc2tzKSB7XHJcbiAgICAgICAgdGhpcy50YXNrc1RvRGVzY3JpcHRpb25zTWFwID0ge31cclxuICAgICAgICB0YXNrcy5mb3JFYWNoKHRhc2sgPT4gdGhpcy50YXNrc1RvRGVzY3JpcHRpb25zTWFwW3Rhc2suaWRdID0gdGFzay5kZXNjcmlwdGlvbilcclxuICAgIH1cclxuXHJcbiAgICBfc2V0dXBEZXNjcmlwdGlvbkJ1dHRvbigpIHtcclxuICAgICAgICB0aGlzLmxpc3RFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBvdGVudGlhbGx5UHJlc3NlZERlc2NyaXB0aW9uQnV0dG9uID0gZS50YXJnZXQuY2xvc2VzdCgnLnRhc2stZGVzY3JpcHRpb24nKSBcclxuICAgICAgICAgICAgaWYgKCFwb3RlbnRpYWxseVByZXNzZWREZXNjcmlwdGlvbkJ1dHRvbikgcmV0dXJuXHJcbiAgICAgICAgICAgIGNvbnN0IHByZXNzZWRUYXNrID0gcG90ZW50aWFsbHlQcmVzc2VkRGVzY3JpcHRpb25CdXR0b24uY2xvc2VzdCgnbGknKVxyXG4gICAgICAgICAgICBjb25zdCBkZXNjcmlwdGlvbkJveCA9IGRlc2NyaXB0aW9uVmlld0ZhY3RvcnkoXHJcbiAgICAgICAgICAgICAgICBwcmVzc2VkVGFzay5xdWVyeVNlbGVjdG9yKCcudGFzay1uYW1lJykudGV4dENvbnRlbnQsXHJcbiAgICAgICAgICAgICAgICB0aGlzLnRhc2tzVG9EZXNjcmlwdGlvbnNNYXBbcHJlc3NlZFRhc2suaWRdXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIHNldE1vZGFsQ29udGVudChkZXNjcmlwdGlvbkJveClcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHNldEhlYWRlclRpdGxlKHRpdGxlKSB7XHJcbiAgICAgICAgdGhpcy5oZWFkaW5nLmlubmVySFRNTCA9IHRpdGxlXHJcbiAgICB9XHJcblxyXG4gICAgYmluZEFkZFRhc2tCdXR0b24oYWN0aW9uKSB7XHJcbiAgICAgICAgdGhpcy50YXNrQ3JlYXRpb25Gb3JtLmNvbmZpcm1CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICAgICAgICAgICAgYWN0aW9uKFxyXG4gICAgICAgICAgICAgICAgdGhpcy50YXNrQ3JlYXRpb25Gb3JtLm5hbWVJbnB1dC52YWx1ZSxcclxuICAgICAgICAgICAgICAgIHRoaXMudGFza0NyZWF0aW9uRm9ybS5kdWVEYXRlUGlja2VyLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgdGhpcy50YXNrQ3JlYXRpb25Gb3JtLnByaW9yaXR5U2VsZWN0aW9uLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgdGhpcy50YXNrQ3JlYXRpb25Gb3JtLnRhc2tEZXNjcmlwdGlvbi52YWx1ZVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBiaW5kRWRpdFRhc2tCdXR0b24oYWN0aW9uKSB7XHJcbiAgICAgICAgdGhpcy50YXNrRWRpdGlvbkZvcm0uY29uZmlybUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG4gICAgICAgICAgICBhY3Rpb24oXHJcbiAgICAgICAgICAgICAgICB0aGlzLmlkT2ZUYXNrVW5kZXJFZGl0aW9uLFxyXG4gICAgICAgICAgICAgICAgdGhpcy50YXNrRWRpdGlvbkZvcm0ubmFtZUlucHV0LnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgdGhpcy50YXNrRWRpdGlvbkZvcm0uZHVlRGF0ZVBpY2tlci52YWx1ZSxcclxuICAgICAgICAgICAgICAgIHRoaXMudGFza0VkaXRpb25Gb3JtLnByaW9yaXR5U2VsZWN0aW9uLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgdGhpcy50YXNrRWRpdGlvbkZvcm0udGFza0Rlc2NyaXB0aW9uLnZhbHVlXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGJpbmREZWxldGVUYXNrQnV0dG9uKGFjdGlvbikge1xyXG4gICAgICAgIHRoaXMubGlzdEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcG90ZW50aWFsbHlQcmVzc2VkRGVsZXRlQnV0dG9uID0gZS50YXJnZXQuY2xvc2VzdCgnLmRlbGV0ZS10YXNrJykgXHJcbiAgICAgICAgICAgIGlmICghcG90ZW50aWFsbHlQcmVzc2VkRGVsZXRlQnV0dG9uKSByZXR1cm5cclxuICAgICAgICAgICAgY29uc3QgcHJlc3NlZFRhc2sgPSBwb3RlbnRpYWxseVByZXNzZWREZWxldGVCdXR0b24uY2xvc2VzdCgnbGknKVxyXG4gICAgICAgICAgICBhY3Rpb24ocHJlc3NlZFRhc2suaWQpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBiaW5kQ29tcGxldGlvbkNoZWNrYm94KGFjdGlvbikge1xyXG4gICAgICAgIHRoaXMubGlzdEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICAgICAgICAgICAgaWYgKCFlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3Rhc2stY29tcGxldGlvbicpKSByZXR1cm47XHJcbiAgICAgICAgICAgIGFjdGlvbih0aGlzLmdldENsb3Nlc3RMaXN0SXRlbUlkKGUudGFyZ2V0KSwgZS50YXJnZXQuY2hlY2tlZClcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGdldENsb3Nlc3RMaXN0SXRlbUlkKGNoaWxkRm9yV2hpY2hXZVNlYXJjaENsb3Nlc3RMaXN0SXRlbSkge1xyXG4gICAgICAgIHJldHVybiBjaGlsZEZvcldoaWNoV2VTZWFyY2hDbG9zZXN0TGlzdEl0ZW0uY2xvc2VzdCgnbGknKS5pZFxyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBUYXNrRm9ybSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLl9jcmVhdGVFbGVtZW50KClcclxuICAgICAgICB0aGlzLl9hZGRQcmlvcml0eVNlbGVjdE9wdGlvbnMoKVxyXG4gICAgfVxyXG5cclxuICAgIF9jcmVhdGVFbGVtZW50KCkge1xyXG4gICAgICAgIGNvbnN0IHRhc2tDcmVhdGlvbkZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIHRhc2tDcmVhdGlvbkZvcm0uY2xhc3NMaXN0LmFkZCgndGFzay1jcmVhdGlvbicpXHJcblxyXG4gICAgICAgIHRhc2tDcmVhdGlvbkZvcm0uaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwidGFzay1uYW1lLWlucHV0XCI+UHJvamVjdCBuYW1lOjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dCBpZD1cInRhc2stbmFtZS1pbnB1dFwiIHR5cGU9XCJ0ZXh0XCIvPlxyXG5cclxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImR1ZS1kYXRlLXBpY2tlclwiPkR1ZSBkYXRlOjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dCBpZD1cImR1ZS1kYXRlLXBpY2tlclwiIHR5cGU9XCJkYXRlXCIvPlxyXG5cclxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cInByaW9yaXR5LXNlbGVjdGlvblwiPlByaW9yaXR5OjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxzZWxlY3QgaWQ9XCJwcmlvcml0eS1zZWxlY3Rpb25cIj48L3NlbGVjdD5cclxuXHJcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0YXNrLWRlc2NyaXB0aW9uXCI+RGVzY3JpcHRpb246PC9sYWJlbD5cclxuICAgICAgICAgICAgPHRleHRhcmVhIGlkPVwidGFzay1kZXNjcmlwdGlvblwiPjwvdGV4dGFyZWE+XHJcblxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY29uZmlybS10YXNrLWZvcm0gY2xvc2UtcG9wdXBcIj48L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNhbmNlbC10YXNrLWZvcm0gY2xvc2UtcG9wdXBcIj5DYW5jZWw8L2J1dHRvbj5cclxuICAgICAgICBgXHJcbiAgICAgICAgdGhpcy5uYW1lSW5wdXQgPSB0YXNrQ3JlYXRpb25Gb3JtLnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLW5hbWUtaW5wdXQnKVxyXG4gICAgICAgIHRoaXMuZHVlRGF0ZVBpY2tlciA9IHRhc2tDcmVhdGlvbkZvcm0ucXVlcnlTZWxlY3RvcignI2R1ZS1kYXRlLXBpY2tlcicpXHJcbiAgICAgICAgdGhpcy5wcmlvcml0eVNlbGVjdGlvbiA9IHRhc2tDcmVhdGlvbkZvcm0ucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5LXNlbGVjdGlvbicpXHJcbiAgICAgICAgdGhpcy50YXNrRGVzY3JpcHRpb24gPSB0YXNrQ3JlYXRpb25Gb3JtLnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWRlc2NyaXB0aW9uJylcclxuICAgICAgICB0aGlzLmNvbmZpcm1CdXR0b24gPSB0YXNrQ3JlYXRpb25Gb3JtLnF1ZXJ5U2VsZWN0b3IoJy5jb25maXJtLXRhc2stZm9ybScpXHJcbiAgICAgICAgdGhpcy5jYW5jZWxCdXR0b24gPSB0YXNrQ3JlYXRpb25Gb3JtLnF1ZXJ5U2VsZWN0b3IoJy5jYW5jZWwtdGFzay1mb3JtJylcclxuICAgICAgICB0aGlzLmVsZW1lbnQgPSB0YXNrQ3JlYXRpb25Gb3JtXHJcbiAgICB9XHJcblxyXG4gICAgX2FkZFByaW9yaXR5U2VsZWN0T3B0aW9ucygpIHtcclxuICAgICAgICB0aGlzLnByaW9yaXR5U2VsZWN0aW9uLmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImxvd1wiPkxvdzwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibWVkaXVtXCI+TWVkaXVtPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJoaWdoXCI+SGlnaDwvb3B0aW9uPlxyXG4gICAgICAgIGAgXHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXIoKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lSW5wdXQudmFsdWUgPSAnJ1xyXG4gICAgICAgIHRoaXMuZHVlRGF0ZVBpY2tlci52YWx1ZSA9ICcnXHJcbiAgICAgICAgdGhpcy5wcmlvcml0eVNlbGVjdGlvbi52YWx1ZSA9ICdsb3cnXHJcbiAgICAgICAgdGhpcy50YXNrRGVzY3JpcHRpb24udmFsdWUgPSAnJ1xyXG4gICAgfVxyXG5cclxuICAgIHNldENvbmZpcm1CdXR0b25UZXh0KG5ld1RleHQpIHtcclxuICAgICAgICB0aGlzLmNvbmZpcm1CdXR0b24udGV4dENvbnRlbnQgPSBuZXdUZXh0XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIFRhc2tDcmVhdGlvbkZvcm0gZXh0ZW5kcyBUYXNrRm9ybSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpXHJcbiAgICAgICAgdGhpcy5zZXRDb25maXJtQnV0dG9uVGV4dCgnQWRkJylcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgVGFza0VkaXRpb25Gb3JtIGV4dGVuZHMgVGFza0Zvcm0ge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKVxyXG4gICAgICAgIHRoaXMuc2V0Q29uZmlybUJ1dHRvblRleHQoJ0VkaXQnKVxyXG4gICAgfVxyXG5cclxuICAgIGxvYWRWYWx1ZXMoXHJcbiAgICAgICAgbmFtZSxcclxuICAgICAgICBkYXRlLFxyXG4gICAgICAgIHByaW9yaXR5LFxyXG4gICAgICAgIGRlc2NyaXB0aW9uXHJcbiAgICApIHtcclxuICAgICAgICB0aGlzLm5hbWVJbnB1dC52YWx1ZSA9IG5hbWVcclxuICAgICAgICB0aGlzLmR1ZURhdGVQaWNrZXIudmFsdWUgPSBkYXRlXHJcbiAgICAgICAgdGhpcy5wcmlvcml0eVNlbGVjdGlvbi52YWx1ZSA9IHByaW9yaXR5XHJcbiAgICAgICAgdGhpcy50YXNrRGVzY3JpcHRpb24udmFsdWUgPSBkZXNjcmlwdGlvblxyXG4gICAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2V0dXBQb3B1cCgpIHtcclxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JylcclxuICAgIGNvbnN0IHBvcHVwV3JhcHBlciA9IGNyZWF0ZVBvcHVwV3JhcHBlcigpXHJcbiAgICBjb25zdCBvdmVybGF5ID0gY3JlYXRlT3ZlcmxheSgpXHJcblxyXG4gICAgYm9keS5hcHBlbmRDaGlsZChwb3B1cFdyYXBwZXIpXHJcbiAgICBib2R5LmFwcGVuZENoaWxkKG92ZXJsYXkpXHJcblxyXG4gICAgYWRkT3BlblBvcHVwRXZlbnRMaXN0ZW5lcigpXHJcbiAgICBhZGRDbG9zZVBvcHVwRXZlbnRMaXN0ZW5lcigpXHJcbiAgICBjbG9zZU1vZGFsQnlDbGlja2luZ091dHNpZGVJdCgpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVBvcHVwV3JhcHBlcigpIHtcclxuICAgIGNvbnN0IHBvcHVwV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBwb3B1cFdyYXBwZXIuaWQgPSAnbW9kYWwnXHJcbiAgICByZXR1cm4gcG9wdXBXcmFwcGVyXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU92ZXJsYXkoKSB7XHJcbiAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIG92ZXJsYXkuaWQgPSAnb3ZlcmxheSdcclxuICAgIHJldHVybiBvdmVybGF5XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9wZW5Nb2RhbCgpIHtcclxuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsJylcclxuICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjb3ZlcmxheScpXHJcbiAgICBcclxuICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXHJcbiAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXHJcbiAgfVxyXG4gIFxyXG5mdW5jdGlvbiBjbG9zZU1vZGFsKCkge1xyXG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwnKVxyXG4gICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNvdmVybGF5JylcclxuXHJcbiAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG4gICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRPcGVuUG9wdXBFdmVudExpc3RlbmVyKCkge1xyXG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2h0bWwnKVxyXG4gICAgaHRtbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG4gICAgICAgIGxldCBvcGVuUG9wdXBCdXR0b24gPSBlLnRhcmdldC5jbG9zZXN0KCcub3Blbi1wb3B1cCcpXHJcbiAgICAgICAgaWYgKCFvcGVuUG9wdXBCdXR0b24pIHJldHVyblxyXG4gICAgICAgIG9wZW5Nb2RhbCgpXHJcbiAgICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRDbG9zZVBvcHVwRXZlbnRMaXN0ZW5lcigpIHtcclxuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdodG1sJylcclxuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsJylcclxuICAgIGh0bWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICAgICAgICBsZXQgY2xvc2VQb3B1cEJ1dHRvbiA9IGUudGFyZ2V0LmNsb3Nlc3QoJy5jbG9zZS1wb3B1cCcpXHJcbiAgICAgICAgaWYgKCFjbG9zZVBvcHVwQnV0dG9uKSByZXR1cm5cclxuICAgICAgICBjbG9zZU1vZGFsKClcclxuICAgICAgICBtb2RhbC5pbm5lckhUTUwgPSAnJ1xyXG4gICAgfSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldE1vZGFsQ29udGVudChlbGVtZW50VG9BcHBlbmQpIHtcclxuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsJylcclxuICAgIG1vZGFsLmlubmVySFRNTCA9ICcnXHJcbiAgICBtb2RhbC5hcHBlbmRDaGlsZChlbGVtZW50VG9BcHBlbmQpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsb3NlTW9kYWxCeUNsaWNraW5nT3V0c2lkZUl0KCkge1xyXG4gICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNvdmVybGF5JylcclxuICAgIG92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICAgICAgICBjbG9zZU1vZGFsKClcclxuICAgIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzTW9kYWxBY3RpdmUoKSB7XHJcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbCcpXHJcbiAgICByZXR1cm4gbW9kYWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKVxyXG59IiwiaW1wb3J0IHsgc2V0TW9kYWxDb250ZW50IH0gZnJvbSAnLi9Qb3B1cCdcclxuXHJcbmZ1bmN0aW9uIHByb2plY3RJdGVtRmFjdG9yeShpZCwgcHJvamVjdE5hbWUpIHtcclxuICAgIGNvbnN0IHByb2plY3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxyXG4gICAgcHJvamVjdEl0ZW0uaW5uZXJIVE1MID0gYFxyXG4gICAgICAgIDxoNCBjbGFzcz1cInByb2plY3QtbmFtZVwiPiR7cHJvamVjdE5hbWV9PC9oND5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZWRpdC1wcm9qZWN0IG9wZW4tcG9wdXBcIj5FZGl0PC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImRlbGV0ZS1wcm9qZWN0XCI+RGVsZXRlPC9idXR0b24+XHJcbiAgICBgXHJcbiAgICBwcm9qZWN0SXRlbS5zZXRBdHRyaWJ1dGUoJ2lkJywgaWQpXHJcbiAgICByZXR1cm4gcHJvamVjdEl0ZW1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdHNWaWV3IHtcclxuICAgIGNvbnN0cnVjdG9yKHBhcmVudEVsZW1lbnQpIHtcclxuICAgICAgICBwYXJlbnRFbGVtZW50LmlubmVySFRNTCArPSBgXHJcbiAgICAgICAgPGgzPlByb2plY3RzPC9oMz5cclxuICAgICAgICA8dWwgY2xhc3M9XCJwcm9qZWN0LWxpc3RcIj48L3VsPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJhZGQgb3Blbi1wb3B1cFwiPkFkZDwvYnV0dG9uPlxyXG4gICAgYFxyXG4gICAgdGhpcy5oZWFkaW5nID0gcGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCdoMycpXHJcbiAgICB0aGlzLmxpc3RFbGVtZW50ID0gcGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1saXN0JylcclxuICAgIHRoaXMuYWRkUHJvamVjdEJ1dHRvbiA9IHBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLmFkZCcpXHJcbiAgICB0aGlzLnByb2plY3RDcmVhdGlvbkZvcm0gPSBuZXcgUHJvamVjdENyZWF0aW9uRm9ybSgpXHJcbiAgICB0aGlzLnByb2plY3RFZGl0aW9uRm9ybSA9IG5ldyBQcm9qZWN0RWRpdGlvbkZvcm0oKVxyXG4gICAgdGhpcy5fc2V0dXBBZGRQcm9qZWN0QnV0dG9uKClcclxuICAgIHRoaXMuX3NldHVwRWRpdFByb2plY3RCdXR0b24oKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcihwcm9qZWN0cykge1xyXG4gICAgICAgIHRoaXMuX2NsZWFyKClcclxuICAgICAgICBwcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4gdGhpcy5fYWRkUHJvamVjdChwcm9qZWN0LmlkLCBwcm9qZWN0LnRpdGxlKSlcclxuICAgIH1cclxuXHJcbiAgICBfYWRkUHJvamVjdChpZCwgbmFtZSkge1xyXG4gICAgICAgIHRoaXMubGlzdEVsZW1lbnQuYXBwZW5kQ2hpbGQocHJvamVjdEl0ZW1GYWN0b3J5KGlkLCBuYW1lKSlcclxuICAgIH1cclxuXHJcbiAgICBfY2xlYXIoKSB7XHJcbiAgICAgICAgdGhpcy5saXN0RWxlbWVudC5pbm5lckhUTUwgPSAnJ1xyXG4gICAgfVxyXG5cclxuICAgIF9zZXR1cEFkZFByb2plY3RCdXR0b24oKSB7XHJcbiAgICAgICAgdGhpcy5hZGRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvamVjdENyZWF0aW9uRm9ybS5jbGVhcklucHV0KClcclxuICAgICAgICAgICAgc2V0TW9kYWxDb250ZW50KHRoaXMucHJvamVjdENyZWF0aW9uRm9ybS5lbGVtZW50KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgX3NldHVwRWRpdFByb2plY3RCdXR0b24oKSB7XHJcbiAgICAgICAgdGhpcy5saXN0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnByb2plY3RFZGl0aW9uRm9ybS5jbGVhcklucHV0KClcclxuICAgICAgICAgICAgY29uc3QgZWRpdFByb2plY3RCdXR0b24gPSBlLnRhcmdldC5jbG9zZXN0KCdidXR0b24uZWRpdC1wcm9qZWN0JylcclxuICAgICAgICAgICAgaWYgKCFlZGl0UHJvamVjdEJ1dHRvbikgcmV0dXJuXHJcbiAgICAgICAgICAgIHNldE1vZGFsQ29udGVudCh0aGlzLnByb2plY3RFZGl0aW9uRm9ybS5lbGVtZW50KVxyXG4gICAgICAgICAgICB0aGlzLmlkT2ZQcm9qZWN0QmVpbmdFZGl0dGVkID0gZS50YXJnZXQuY2xvc2VzdCgnbGknKS5pZFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgaGlnaGxpZ2h0UHJvamVjdChpZCkge1xyXG4gICAgICAgIGNvbnN0IGFjdGl2ZVByb2plY3QgPSB0aGlzLmxpc3RFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYGxpW2lkPVwiJHtpZH1cIl1gKVxyXG4gICAgICAgIGFjdGl2ZVByb2plY3QuY2xhc3NMaXN0LmFkZCgnYWN0aXZlLXByb2plY3QnKVxyXG4gICAgfVxyXG5cclxuICAgIGJpbmRBZGRQcm9qZWN0QnV0dG9uKGFjdGlvbikge1xyXG4gICAgICAgIGNvbnN0IGFkZFByb2plY3RCdXR0b24gPSB0aGlzLnByb2plY3RDcmVhdGlvbkZvcm0uZ2V0QWRkUHJvamVjdEJ1dHRvbigpXHJcbiAgICAgICAgYWRkUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4gYWN0aW9uKHRoaXMucHJvamVjdENyZWF0aW9uRm9ybS5nZXRJbnB1dEZpZWxkVmFsdWUoKSkpXHJcbiAgICB9XHJcblxyXG4gICAgYmluZEVkaXRQcm9qZWN0QnV0dG9uKGFjdGlvbikge1xyXG4gICAgICAgIGNvbnN0IGVkaXRQcm9qZWN0QnV0dG9uID0gdGhpcy5wcm9qZWN0RWRpdGlvbkZvcm0uZ2V0RWRpdFByb2plY3RCdXR0b24oKVxyXG4gICAgICAgIGVkaXRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgICAgICAgICAgIGFjdGlvbih0aGlzLmlkT2ZQcm9qZWN0QmVpbmdFZGl0dGVkLCB0aGlzLnByb2plY3RFZGl0aW9uRm9ybS5nZXRJbnB1dEZpZWxkVmFsdWUoKSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGJpbmREZWxldGVQcm9qZWN0QnV0dG9uKGFjdGlvbikge1xyXG4gICAgICAgIHRoaXMubGlzdEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcHJlc3NlZERlbGV0ZUJ1dHRvbiA9IGUudGFyZ2V0LmNsb3Nlc3QoJy5kZWxldGUtcHJvamVjdCcpXHJcbiAgICAgICAgICAgIGlmICghcHJlc3NlZERlbGV0ZUJ1dHRvbikgcmV0dXJuXHJcbiAgICAgICAgICAgIGNvbnN0IHByZXNzZWRMaXN0SXRlbSA9IHByZXNzZWREZWxldGVCdXR0b24uY2xvc2VzdCgnbGknKVxyXG4gICAgICAgICAgICBhY3Rpb24ocHJlc3NlZExpc3RJdGVtLmlkKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgYmluZFByb2plY3RTZWxlY3Rpb24oYWN0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5saXN0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcHJvamVjdExpc3RJdGVtID0gZS50YXJnZXQuY2xvc2VzdCgnbGknKVxyXG4gICAgICAgICAgICBpZiAoIXByb2plY3RMaXN0SXRlbSkgcmV0dXJuXHJcbiAgICAgICAgICAgIGlmIChlLnRhcmdldC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdidXR0b24nKSByZXR1cm5cclxuICAgICAgICAgICAgYWN0aW9uKHByb2plY3RMaXN0SXRlbS5pZClcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBQcm9qZWN0Q3JlYXRpb25Gb3JtIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudCA9IHRoaXMuX2NyZWF0ZUVsZW1lbnQoKVxyXG4gICAgfVxyXG5cclxuICAgIF9jcmVhdGVFbGVtZW50KCkge1xyXG4gICAgICAgIGNvbnN0IHByb2plY3RDcmVhdGlvbkZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIHByb2plY3RDcmVhdGlvbkZvcm0uY2xhc3NMaXN0LmFkZCgncHJvamVjdC1jcmVhdGlvbicpXHJcbiAgICBcclxuICAgICAgICBwcm9qZWN0Q3JlYXRpb25Gb3JtLmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cInByb2plY3QtbmFtZS1pbnB1dFwiPlByb2plY3QgbmFtZTo8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXQgaWQ9XCJwcm9qZWN0LW5hbWUtaW5wdXRcIiB0eXBlPVwidGV4dFwiLz5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImFkZC1wcm9qZWN0IGNsb3NlLXBvcHVwXCI+QWRkPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJjbG9zZS1wb3B1cFwiPkNhbmNlbDwvYnV0dG9uPlxyXG4gICAgICAgIGBcclxuICAgICAgICByZXR1cm4gcHJvamVjdENyZWF0aW9uRm9ybVxyXG4gICAgfVxyXG5cclxuICAgIGNsZWFySW5wdXQoKSB7XHJcbiAgICAgICAgY29uc3QgZm9ybUlucHV0ID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LW5hbWUtaW5wdXQnKVxyXG4gICAgICAgIGZvcm1JbnB1dC52YWx1ZSA9ICcnXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QWRkUHJvamVjdEJ1dHRvbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtcHJvamVjdCcpXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SW5wdXRGaWVsZFZhbHVlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtbmFtZS1pbnB1dCcpLnZhbHVlXHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBQcm9qZWN0RWRpdGlvbkZvcm0ge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gdGhpcy5fY3JlYXRlRWxlbWVudCgpXHJcbiAgICB9XHJcblxyXG4gICAgX2NyZWF0ZUVsZW1lbnQoKSB7XHJcbiAgICAgICAgY29uc3QgcHJvamVjdEVkaXRpb25Gb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICBwcm9qZWN0RWRpdGlvbkZvcm0uY2xhc3NMaXN0LmFkZCgncHJvamVjdC1lZGl0aW9uJylcclxuICAgIFxyXG4gICAgICAgIHByb2plY3RFZGl0aW9uRm9ybS5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwcm9qZWN0LW5hbWUtaW5wdXRcIj5OZXcgcHJvamVjdCBuYW1lOjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dCBpZD1cInByb2plY3QtbmFtZS1pbnB1dFwiIHR5cGU9XCJ0ZXh0XCIvPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZWRpdC1wcm9qZWN0IGNsb3NlLXBvcHVwXCI+RWRpdDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY2xvc2UtcG9wdXBcIj5DYW5jZWw8L2J1dHRvbj5cclxuICAgICAgICBgXHJcbiAgICAgICAgcmV0dXJuIHByb2plY3RFZGl0aW9uRm9ybVxyXG4gICAgfVxyXG5cclxuICAgIGNsZWFySW5wdXQoKSB7XHJcbiAgICAgICAgY29uc3QgZm9ybUlucHV0ID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LW5hbWUtaW5wdXQnKVxyXG4gICAgICAgIGZvcm1JbnB1dC52YWx1ZSA9ICcnXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RWRpdFByb2plY3RCdXR0b24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC1wcm9qZWN0JylcclxuICAgIH1cclxuXHJcbiAgICBnZXRJbnB1dEZpZWxkVmFsdWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1uYW1lLWlucHV0JykudmFsdWVcclxuICAgIH1cclxufSIsImltcG9ydCBpbml0TGF5b3V0IGZyb20gJy4vaW5pdExheW91dCdcclxuaW1wb3J0IGNyZWF0ZUhlYWRlciBmcm9tICcuL0hlYWRlcidcclxuaW1wb3J0IFByb2plY3RzVmlldyBmcm9tICcuL1Byb2plY3RzVmlldydcclxuaW1wb3J0IExpc3RWaWV3IGZyb20gJy4vTGlzdFZpZXcnXHJcbmltcG9ydCBzZXR1cFBvcHVwIGZyb20gJy4vUG9wdXAnXHJcblxyXG5leHBvcnQgY2xhc3MgVUkge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgaW5pdExheW91dChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykpXHJcbiAgICAgICAgc2V0dXBQb3B1cCgpXHJcbiAgICAgICAgdGhpcy5oZWFkZXIgPSBjcmVhdGVIZWFkZXIoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcicpLCAnVG9EbycpXHJcbiAgICAgICAgdGhpcy5wcm9qZWN0c1ZpZXcgPSBuZXcgUHJvamVjdHNWaWV3KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyJykpXHJcbiAgICAgICAgdGhpcy5saXN0VmlldyA9IG5ldyBMaXN0Vmlldyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGlzcGxheScpKVxyXG4gICAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdExheW91dChwYXJlbnRFbGVtZW50KSB7XHJcbiAgICBjb25zdCBhcHBXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGFwcFdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnYXBwJylcclxuICAgIFxyXG4gICAgY29uc3QgaGVhZGVyV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBoZWFkZXJXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpXHJcblxyXG4gICAgY29uc3Qgc2lkZWJhcldyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgc2lkZWJhcldyYXBwZXIuY2xhc3NMaXN0LmFkZCgnc2lkZWJhcicpXHJcbiAgICBcclxuICAgIGNvbnN0IGRpc3BsYXlXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGRpc3BsYXlXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2Rpc3BsYXknKVxyXG4gICAgXHJcbiAgICBhcHBXcmFwcGVyLmFwcGVuZENoaWxkKGhlYWRlcldyYXBwZXIpXHJcbiAgICBhcHBXcmFwcGVyLmFwcGVuZENoaWxkKHNpZGViYXJXcmFwcGVyKVxyXG4gICAgYXBwV3JhcHBlci5hcHBlbmRDaGlsZChkaXNwbGF5V3JhcHBlcilcclxuICAgIHBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoYXBwV3JhcHBlcilcclxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVuaXF1ZUlkKCkge1xyXG4gICAgcmV0dXJuIEJpZ0ludChEYXRlLm5vdygpKS50b1N0cmluZygpXHJcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=