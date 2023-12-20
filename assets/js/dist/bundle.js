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

/***/ "./src/fcp-fields.js":
/*!***************************!*\
  !*** ./src/fcp-fields.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst $ = jQuery;\n\nfunction fcp_field_appender_admin() {\n    \n    // console.log(MINI_SETTINGS_BAR)\n    // $('.fcp-single-field-wrap').append(MINI_SETTINGS_BAR);\n    // $('.fcp-single-field-wrap').html(MINI_SETTINGS_BAR);\n    $(document).on('click', '.fcp-single-widget', function () {\n        var field_name = $(this).attr('data-input');\n        const PLUGIN_PATH = $('.fcp-form-fields-wrapper').attr('data-path');\n        const MINI_SETTINGS_BAR = `<div class=\"fcp-mini-setting-bar\" data-settings=${field_name}><img class=\"fcp-field-drag-indicator\" src=\"${ PLUGIN_PATH }/assets/icons/drag_indicator.svg\"><img class=\"fcp-field-delete-icon\" src=\"${ PLUGIN_PATH }assets/icons/icons8-delete.svg\"><a href=\"#first-popup\" class=\"fcp-popup-icon\"><img class=\"fcp-field-settings-icon\" src=\"${ PLUGIN_PATH }assets/icons/icons8-settings.svg\"></a></div>`\n        const ADDRESS = `<div class=\"fcp-single-field-wrap\">${ MINI_SETTINGS_BAR }<input class=\"fcp-form-control\" type=\"text\" id=\"street\" name=\"street\" disabled><div><label for=\"street\">Street Address</label></div><input type=\"text\" class=\"fcp-form-control\" id=\"street\" name=\"address-line-2\" disabled><div><label for=\"address-line-2\">Address Line 2</label></div><div class=\"fcp-city-state-spicimen-wrap\"><div class=\"fcp-city-field-wrap\"><input class=\"fcp-form-control\" type=\"text\" id=\"city\" name=\"city\" disabled><div><label for=\"city\">City:</label></div></div><div class=\"fcp-state-field-wrap\"><input class=\"fcp-form-control\" type=\"text\" id=\"state\" name=\"state\" disabled><div><label for=\"state\">State:</label></div></div></div><div class=\"fcp-city-state-spicimen-wrap\"><div class=\"fcp-city-field-wrap\"><input class=\"fcp-form-control\" type=\"text\" id=\"zip\" name=\"zip\" disabled><div><label for=\"zip\">ZIP Code:</label></div></div><div class=\"fcp-state-field-wrap\"><select class=\"fcp-form-control\" name=\"country\" id=\"country\" disabled></select><div><label for=\"country\">Country:</label></div></div></div></div>`;\n        const CHECKBOX = `<div class=\"fcp-single-field-wrap\">${ MINI_SETTINGS_BAR }<ul><li><input type=\"checkbox\" value=\"option 1\" name=\"\" id=\"option-1\" disabled><label for=\"option-1\">Option 1</label></li><li><input type=\"checkbox\" value=\"option 2\" name=\"\" id=\"option-2\" disabled><label for=\"option-2\">Option 2</label></li><li><input type=\"checkbox\" value=\"option 3\" name=\"\" id=\"option-3\" disabled><label for=\"option-3\">Option 3</label></li></ul></div>`\n        const NAME = `<div class=\"fcp-single-field-wrap fcp-name-field-specimen\">${ MINI_SETTINGS_BAR }<div class=\"fcp-name-fields-wrap\"><input class=\"fcp-form-control\" type=\"text\" disabled placeholder=\"First name\"><input class=\"fcp-form-control\" type=\"text\" disabled placeholder=\"Last name\"></div></div>`;\n        const TEXTAREA = `<div class=\"fcp-single-field-wrap\"><div>${ MINI_SETTINGS_BAR }<label for=\"paragraph\">Paragraph</label></div><textarea name=\"paragraph\" id=\"paragraph\" cols=\"65\" rows=\"15\" disabled></textarea></div>`    \n        if (field_name === \"name\") {\n            $('.fcp-form-fields-wrapper').append(NAME);\n        } else if (field_name === \"address\") {\n            $('.fcp-form-fields-wrapper').append(ADDRESS);\n        }else if(field_name === \"checkbox\") {\n            $('.fcp-form-fields-wrapper').append(CHECKBOX);\n        }else if(field_name === \"textarea\"){\n            $('.fcp-form-fields-wrapper').append(TEXTAREA);\n        }\n        else if(field_name === \"email\"){\n            $('.fcp-form-fields-wrapper').append(`<div class=\"fcp-single-field-wrap\">${ MINI_SETTINGS_BAR }<div><label for=\"paragraph\">Email</label></div><input class='fcp-form-control' type=\"${field_name}\" disabled></div>`);\n        }\n         else {\n            $('.fcp-form-fields-wrapper').append(`<div class=\"fcp-single-field-wrap\">${ MINI_SETTINGS_BAR }<div><label for=\"paragraph\">Untitled</label></div><input class='fcp-form-control' type=\"${field_name}\" disabled></div>`);\n        }\n    });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fcp_field_appender_admin);\n\n//# sourceURL=webpack://js/./src/fcp-fields.js?");

/***/ }),

/***/ "./src/fcp-settings.js":
/*!*****************************!*\
  !*** ./src/fcp-settings.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst $ = jQuery;\nfunction fcp_field_settings_handler(){\n\n  \n    $(document).on('click' , '.fcp-field-delete-icon' ,function(){\n        $(this).closest('.fcp-single-field-wrap').remove();\n        // $(this).parent().parent().remove();\n    });\n    \n    $(document).on(\"click\" , '.fcp-popup-icon' ,function(e){\n\n      var setting_for = $(this).closest('.fcp-mini-setting-bar').attr('data-settings');\n      e.preventDefault()\n      $.magnificPopup.open({\n        items: {\n            src: '#first-popup'\n        },\n        type: 'inline',\n        closeBtnInside: true\n      });\n\n    })\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fcp_field_settings_handler);\n\n//# sourceURL=webpack://js/./src/fcp-settings.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _fcp_fields__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fcp-fields */ \"./src/fcp-fields.js\");\n/* harmony import */ var _fcp_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fcp-settings */ \"./src/fcp-settings.js\");\n\n\njQuery(document).ready(function ($) {\n    (0,_fcp_fields__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n    \n    $( \".fcp-form-fields-wrapper\" ).sortable({\n        placeholder: \"ui-state-highlight\",\n        connectWith: \".fcp-form-fields-wrapper\"\n    })\n\n    ;(0,_fcp_settings__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    \n    $.magnificPopup.open({\n        items: {\n            src: '#first-popup'\n        },\n        type: 'inline',\n        closeBtnInside: true\n    })\n    \n\n});\n\n//# sourceURL=webpack://js/./src/index.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;