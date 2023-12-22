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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst $ = jQuery;\n\nfunction fcp_field_appender_admin() {\n\n    function fcp_field_id_generator() {\n        var idstr = String.fromCharCode(Math.floor((Math.random() * 25) + 65));\n        do {\n            \n            var ascicode = Math.floor((Math.random() * 42) + 48);\n            if (ascicode < 58 || ascicode > 64) {\n                idstr += String.fromCharCode(ascicode);\n            }\n        } while (idstr.length < 32);\n\n        return (idstr);\n    }\n\n    $(document).on('click', '.fcp-single-widget', function () {\n        var fcp_field_id = fcp_field_id_generator()\n        var field_name = $(this).attr('data-input');\n        const PLUGIN_PATH = $('.fcp-form-fields-wrapper').attr('data-path');\n        const MINI_SETTINGS_BAR = `<div class=\"fcp-mini-setting-bar\" data-settings=${field_name}><img class=\"fcp-field-drag-indicator\" src=\"${PLUGIN_PATH}/assets/icons/drag_indicator.svg\"><img class=\"fcp-field-delete-icon\" src=\"${PLUGIN_PATH}assets/icons/icons8-delete.svg\"><a href=\"#first-popup\" class=\"fcp-popup-icon\"><img class=\"fcp-field-settings-icon\" src=\"${PLUGIN_PATH}assets/icons/icons8-settings.svg\"></a></div>`\n        const ADDRESS = `<div class=\"fcp-single-field-wrap\" data-id=${fcp_field_id} >${MINI_SETTINGS_BAR}<input class=\"fcp-form-control\" type=\"text\" id=\"street\" name=\"street\" disabled><div><label for=\"street\">Street Address</label></div><input type=\"text\" class=\"fcp-form-control\" id=\"street\" name=\"address-line-2\" disabled><div><label for=\"address-line-2\">Address Line 2</label></div><div class=\"fcp-city-state-spicimen-wrap\"><div class=\"fcp-city-field-wrap\"><input class=\"fcp-form-control\" type=\"text\" id=\"city\" name=\"city\" disabled><div><label for=\"city\">City:</label></div></div><div class=\"fcp-state-field-wrap\"><input class=\"fcp-form-control\" type=\"text\" id=\"state\" name=\"state\" disabled><div><label for=\"state\">State:</label></div></div></div><div class=\"fcp-city-state-spicimen-wrap\"><div class=\"fcp-city-field-wrap\"><input class=\"fcp-form-control\" type=\"text\" id=\"zip\" name=\"zip\" disabled><div><label for=\"zip\">ZIP Code:</label></div></div><div class=\"fcp-state-field-wrap\"><select class=\"fcp-form-control\" name=\"country\" id=\"country\" disabled></select><div><label for=\"country\">Country:</label></div></div></div></div>`;\n        const CHECKBOX = `<div class=\"fcp-single-field-wrap\" data-id=${fcp_field_id} >${MINI_SETTINGS_BAR}<ul><li><input type=\"checkbox\" value=\"option 1\" name=\"\" id=\"option-1\" disabled><label for=\"option-1\">Option 1</label></li><li><input type=\"checkbox\" value=\"option 2\" name=\"\" id=\"option-2\" disabled><label for=\"option-2\">Option 2</label></li><li><input type=\"checkbox\" value=\"option 3\" name=\"\" id=\"option-3\" disabled><label for=\"option-3\">Option 3</label></li></ul></div>`\n        const NAME = `<div class=\"fcp-single-field-wrap fcp-name-field-specimen\" data-id=${fcp_field_id} >${MINI_SETTINGS_BAR}<div class=\"fcp-name-fields-wrap\"><input class=\"fcp-form-control\" type=\"text\" disabled placeholder=\"First name\"><input class=\"fcp-form-control\" type=\"text\" disabled placeholder=\"Last name\"></div></div>`;\n        const TEXTAREA = `<div class=\"fcp-single-field-wrap\" data-id=${fcp_field_id} ><div>${MINI_SETTINGS_BAR}<label for=\"paragraph\">Paragraph</label></div><textarea name=\"paragraph\" id=\"paragraph\" cols=\"65\" rows=\"15\" disabled></textarea></div>`\n        if (field_name === \"name\") {\n            $('.fcp-form-fields-wrapper').append(NAME);\n        } else if (field_name === \"address\") {\n            $('.fcp-form-fields-wrapper').append(ADDRESS);\n        } else if (field_name === \"checkbox\") {\n            $('.fcp-form-fields-wrapper').append(CHECKBOX);\n        } else if (field_name === \"textarea\") {\n            $('.fcp-form-fields-wrapper').append(TEXTAREA);\n        }\n        else if (field_name === \"email\") {\n            $('.fcp-form-fields-wrapper').append(`<div class=\"fcp-single-field-wrap\" data-id=${fcp_field_id} >${MINI_SETTINGS_BAR}<div><label for=\"paragraph\">Email</label></div><input class='fcp-form-control' type=\"${field_name}\" disabled></div>`);\n        }\n        else {\n            $('.fcp-form-fields-wrapper').append(`<div class=\"fcp-single-field-wrap\" data-id=${fcp_field_id} >${MINI_SETTINGS_BAR}<div><label for=\"paragraph\">Untitled</label></div><input class='fcp-form-control' type=\"${field_name}\" disabled></div>`);\n        }\n    });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fcp_field_appender_admin);\n\n//# sourceURL=webpack://js/./src/fcp-fields.js?");

/***/ }),

/***/ "./src/fcp-settings.js":
/*!*****************************!*\
  !*** ./src/fcp-settings.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst $ = jQuery;\nfunction fcp_field_settings_handler() {\n\n\n  $(document).on('click', '.fcp-field-delete-icon', function () {\n    $(this).closest('.fcp-single-field-wrap').remove();\n    // $(this).parent().parent().remove();\n  });\n\n$(document).on(\"click\", '.fcp-popup-icon', function (e) {\n\te.preventDefault();\n\t$('.fcp--field-settings--form .fcp-setting-fields-wrap').html(\"\")\n\tvar setting_for = $(this).closest('.fcp-mini-setting-bar').attr('data-settings');\n\n\tconst TEXT = `<label for=\"fcp-placeholder\">Placeholder</label> <input type=\"text\" class=\"fcp-placeholder-val-admin\"> <label for=\"fcp-label\">Label</label> <input type=\"text\" class=\"fcp-label-val-admin\"> <div class=\"fcp-required\"> <label for=\"fcp-isRequired\">Required</label> <label class=\"switch\"> <input type=\"checkbox\" class=\"fcp-req-val-admin\"> <span class=\"slider round\"></span> </label> </div>`;\n\tconst NUMBER = `<label for=\"fcp-label\">Label</label> <input type=\"text\" class=\"fcp-label-val-admin\"> <label for=\"fcp-placeholder\">Placeholder</label> <input type=\"text\" class=\"fcp-placeholder-val-admin\"> <label for=\"fcp-label\">Minimun</label> <input type=\"number\" class=\"fcp-min-num-val-admin\"> <label for=\"fcp-label\">Maximun</label> <input type=\"number\" class=\"fcp-max-num-val-admin\"> <div class=\"fcp-required\"> <label for=\"fcp-isRequired\">Required</label> <label class=\"switch\"> <input type=\"checkbox\" class=\"fcp-req-val-admin\"> <span class=\"slider round\"></span> </label> </div>`;\n\tconst EMAIL = `<label for=\"fcp-label\">Label</label> <input type=\"text\" class=\"fcp-label-val-admin\"> <label for=\"fcp-placeholder\">Placeholder</label> <input type=\"text\" class=\"fcp-placeholder-val-admin\"> <div class=\"fcp-required\"> <label for=\"fcp-isRequired\">Required</label> <label class=\"switch\"> <input type=\"checkbox\" class=\"fcp-req-val-admin\"> <span class=\"slider round\"></span> </label> </div>`;\n\tconst NAME = `<label for=\"fcp-label\">Label</label> <input type=\"text\" class=\"fcp-label-val-admin\"> <div class=\"fcp-required\"> <label for=\"fcp-isRequired\">Required</label> <label class=\"switch\"> <input type=\"checkbox\" class=\"fcp-req-val-admin\"> <span class=\"slider round\"></span> </label> </div> <div class=\"fcp-required fcp-req-firstname\"> <label for=\"fcp-isRequired\">Firstname</label> <label class=\"switch\"> <input type=\"checkbox\" class=\"fcp-firstn-req-val-admin\" checked> <span class=\"slider round\"></span> </label> </div> <div class=\"fcp-required fcp-req-last-name\"> <label for=\"fcp-isRequired\">Lastname</label> <label class=\"switch\"> <input type=\"checkbox\" class=\"fcp-lastn-req-val-admin\" checked> <span class=\"slider round\"></span> </label> </div>`;\n\tconst ADDRESS = `<label for=\"fcp-label\">Label</label> <input type=\"text\" class=\"fcp-label-val-admin\"> <div class=\"fcp-required\"> <label for=\"fcp-isRequired\">Required (For all fields)</label> <label class=\"switch\"> <input type=\"checkbox\" class=\"fcp-req-val-admin\"> <span class=\"slider round\"></span> </label> </div> <div class=\"fcp-required fcp-street-ad\"> <label for=\"fcp-street-adress\">Street Address</label> <label class=\"switch\"> <input type=\"checkbox\" class=\"fcp-stad-val-admin\" checked> <span class=\"slider round\"></span> </label> </div> <div class=\"fcp-required fcp-adli-two\"> <label for=\"fcp-adli-two\">Address line 2</label> <label class=\"switch\"> <input type=\"checkbox\" class=\"fcp-adli-val-admin\" checked> <span class=\"slider round\"></span> </label> </div> <div class=\"fcp-required\"> <label for=\"fcp-city-req\">City</label> <label class=\"switch\"> <input type=\"checkbox\" class=\"fcp-city-val-admin\" checked> <span class=\"slider round\"></span> </label> </div> <div class=\"fcp-required\"> <label for=\"fcp-state-req\">State</label> <label class=\"switch\"> <input type=\"checkbox\" class=\"fcp-state-val-admin\" checked> <span class=\"slider round\"></span> </label> </div> <div class=\"fcp-required\"> <label for=\"fcp-zpc\">Zip code</label> <label class=\"switch\"> <input type=\"checkbox\" class=\"fcp-zpc-val-admin\" checked> <span class=\"slider round\"></span> </label> </div> <div class=\"fcp-required\"> <label for=\"fcp-country\">Country</label> <label class=\"switch\"> <input type=\"checkbox\" class=\"fcp-country-val-admin\" checked> <span class=\"slider round\"></span> </label> </div>`;\n\tconst CHECKBOX = `<ul class=\"fcp-checkboxes-admin\"> <li><input type=\"text\" value=\"Option 1\"> <span>X</span></li> <li><input type=\"text\" value=\"Option 2\"> <span>X</span></li> <li><input type=\"text\" value=\"Option 3\"> <span>X</span></li> </ul> <button>+ Add more checkboxes</button>`;\n\tconst PASSWORD = `<label for=\"fcp-label\">Label</label> <input type=\"text\" class=\"fcp-label-val-admin\"> <label for=\"fcp-placeholder\">Placeholder</label> <input type=\"text\" class=\"fcp-placeholder-val-admin\">`;\n\tconst TEXTAREA = `<div class=\"fcp-required\"> <label for=\"fcp-isRequired\">Required</label> <label class=\"switch\"> <input type=\"checkbox\" class=\"fcp-req-val-admin\"> <span class=\"slider round\"></span> </label> </div> <label for=\"fcp-label\">Label</label> <input type=\"text\" class=\"fcp-label-val-admin\">`;\n\n\tif (setting_for === \"text\") {\n\t\t$('.fcp--field-settings--form .fcp-setting-fields-wrap').append(TEXT);\n\t} else if (setting_for === \"number\") {\n\t\t$('.fcp--field-settings--form .fcp-setting-fields-wrap').append(NUMBER);\n\t} else if (setting_for === \"email\") {\n\t\t$('.fcp--field-settings--form .fcp-setting-fields-wrap').append(EMAIL);\n\t} else if (setting_for === \"name\") {\n\t\t$('.fcp--field-settings--form .fcp-setting-fields-wrap').append(NAME);\n\t} else if (setting_for === \"address\") {\n\t\t$('.fcp--field-settings--form .fcp-setting-fields-wrap').append(ADDRESS);\n\t} else if (setting_for === \"checkbox\") {\n\t\t$('.fcp--field-settings--form .fcp-setting-fields-wrap').append(CHECKBOX);\n\t} else if (setting_for === \"password\") {\n\t\t$('.fcp--field-settings--form .fcp-setting-fields-wrap').append(PASSWORD);\n\t} else if (setting_for === \"textarea\") {\n\t\t$('.fcp--field-settings--form .fcp-setting-fields-wrap').append(TEXTAREA);\n\t} else {\n\t\tconsole.error(\"Invalid setting_for value:\", setting_for);\n\t}\n\t\n\n\n\t$.magnificPopup.open({\n\t\titems: {\n\t\t\tsrc: '#first-popup'\n\t\t},\n\t\ttype: 'inline',\n\t\tcloseBtnInside: true\n\t});\n\n})\n\n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fcp_field_settings_handler);\n\n//# sourceURL=webpack://js/./src/fcp-settings.js?");

/***/ }),

/***/ "./src/fcp-update-fields.js":
/*!**********************************!*\
  !*** ./src/fcp-update-fields.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst $ = jQuery;\nfunction fcp_update_specimen_fields_with_settings(){\n    var field = \"\";\n    var setting_field_type = \"\"\n    var field_id = \"\"\n    var field_id_type_and_settings = [];\n\n    $(document).on('click', '.fcp-popup-icon', function () {\n        setting_field_type = $(this).closest('.fcp-mini-setting-bar').attr('data-settings');\n        field = $(this).closest('.fcp-single-field-wrap');\n        \n        var html_of_field = field.prop('outerHTML');\n\n        field_id = $(html_of_field).data('id');\n        \n    });\n    \n    $(document).on('submit' , '.fcp--field-settings--form' , function (e){\n        e.preventDefault();\n        var req = false\n        if($('.fcp-req-val-admin').prop('checked') == true){\n            req = true\n        }\n        var placeholder_val = $('.fcp-placeholder-val-admin').val();\n        var label_val = $('.fcp-label-val-admin').val();               \n        \n        if (setting_field_type === \"text\") {\n            var text_field_data = {\n                field_type: setting_field_type,\n                settings: [Placeholder = placeholder_val , Label = label_val , Required = req],\n                fieldID: field_id\n\n            }\n            \n            field_id_type_and_settings.push(text_field_data)\n            console.log(field_id_type_and_settings)\n        } else if (setting_field_type === \"number\") {\n            \n        } else if (setting_field_type === \"email\") {\n            \n        } else if (setting_field_type === \"name\") {\n            \n        } else if (setting_field_type === \"address\") {\n            \n        } else if (setting_field_type === \"checkbox\") {\n            \n        } else if (setting_field_type === \"password\") {\n            \n        } else if (setting_field_type === \"textarea\") {\n            \n        }\n\n    })\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fcp_update_specimen_fields_with_settings);\n\n//# sourceURL=webpack://js/./src/fcp-update-fields.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _fcp_fields__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fcp-fields */ \"./src/fcp-fields.js\");\n/* harmony import */ var _fcp_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fcp-settings */ \"./src/fcp-settings.js\");\n/* harmony import */ var _fcp_update_fields__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fcp-update-fields */ \"./src/fcp-update-fields.js\");\n\n\n\njQuery(document).ready(function ($) {\n    (0,_fcp_fields__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n    ;(0,_fcp_settings__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();    \n\n    $( \".fcp-form-fields-wrapper\" ).sortable({\n        placeholder: \"ui-state-highlight\",\n        connectWith: \".fcp-form-fields-wrapper\"\n    })\n\n    ;(0,_fcp_update_fields__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\n});\n\n//# sourceURL=webpack://js/./src/index.js?");

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