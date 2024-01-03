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

/***/ "./src/fcp-data-provider.js":
/*!**********************************!*\
  !*** ./src/fcp-data-provider.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _fcp_global_variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fcp-global-variables */ \"./src/fcp-global-variables.js\");\n\n\nfunction fcp_get_data_from_object(field_id) {\n    \n    const found_field = _fcp_global_variables__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find(field => field.fieldID === field_id);\n\n    if (found_field) {\n        return found_field;\n    } else {\n        return null;\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fcp_get_data_from_object);\n\n//# sourceURL=webpack://js/./src/fcp-data-provider.js?");

/***/ }),

/***/ "./src/fcp-fields.js":
/*!***************************!*\
  !*** ./src/fcp-fields.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _fcp_global_variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fcp-global-variables */ \"./src/fcp-global-variables.js\");\nconst $ = jQuery;\n\n\nfunction fcp_field_appender_admin() {\n    var data = {}\n    function fcp_field_id_generator() {\n        var idstr = String.fromCharCode(Math.floor((Math.random() * 25) + 65));\n        do {\n            \n            var ascicode = Math.floor((Math.random() * 42) + 48);\n            if (ascicode < 58 || ascicode > 64) {\n                idstr += String.fromCharCode(ascicode);\n            }\n        } while (idstr.length < 32);\n\n        return (idstr);\n    }\n\n    $(document).on('click', '.fcp-single-widget', function () {\n        var fcp_field_id = fcp_field_id_generator()\n        var field_name = $(this).attr('data-input');\n        const PLUGIN_PATH = $('.fcp-form-fields-wrapper').attr('data-path');\n        const MINI_SETTINGS_BAR = `<div class=\"fcp-mini-setting-bar\" data-settings=${field_name}><img class=\"fcp-field-drag-indicator\" src=\"${PLUGIN_PATH}/assets/icons/drag_indicator.svg\"><img class=\"fcp-field-delete-icon\" src=\"${PLUGIN_PATH}assets/icons/icons8-delete.svg\"><a href=\"#first-popup\" class=\"fcp-popup-icon\"><img class=\"fcp-field-settings-icon\" src=\"${PLUGIN_PATH}assets/icons/icons8-settings.svg\"></a></div>`\n        const ADDRESS = `<div class=\"fcp-single-field-wrap\" data-id=${fcp_field_id} >${MINI_SETTINGS_BAR}<label class=\"fcp-label-admin\">Address</label><input class=\"fcp-form-control\" type=\"text\" id=\"street\" name=\"street\" disabled><div><label for=\"street\">Street Address</label></div><input type=\"text\" class=\"fcp-form-control\" id=\"street\" name=\"address-line-2\" disabled><div><label for=\"address-line-2\">Address Line 2</label></div><div class=\"fcp-city-state-spicimen-wrap\"><div class=\"fcp-city-field-wrap\"><input class=\"fcp-form-control\" type=\"text\" id=\"city\" name=\"city\" disabled><div><label for=\"city\">City:</label></div></div><div class=\"fcp-state-field-wrap\"><input class=\"fcp-form-control\" type=\"text\" id=\"state\" name=\"state\" disabled><div><label for=\"state\">State:</label></div></div></div><div class=\"fcp-city-state-spicimen-wrap\"><div class=\"fcp-city-field-wrap\"><input class=\"fcp-form-control\" type=\"text\" id=\"zip\" name=\"zip\" disabled><div><label for=\"zip\">ZIP Code:</label></div></div><div class=\"fcp-state-field-wrap\"><select class=\"fcp-form-control\" name=\"country\" id=\"country\" disabled></select><div><label for=\"country\">Country:</label></div></div></div></div>`;\n        const CHECKBOX = `<div class=\"fcp-single-field-wrap\" data-id=${fcp_field_id} >${MINI_SETTINGS_BAR}<ul><li><input type=\"checkbox\" value=\"option 1\" name=\"\" id=\"option-1\" disabled><label for=\"option-1\">Option 1</label></li><li><input type=\"checkbox\" value=\"option 2\" name=\"\" id=\"option-2\" disabled><label for=\"option-2\">Option 2</label></li><li><input type=\"checkbox\" value=\"option 3\" name=\"\" id=\"option-3\" disabled><label for=\"option-3\">Option 3</label></li></ul></div>`\n        const NAME = `<div class=\"fcp-single-field-wrap fcp-name-field-specimen\" data-id=${fcp_field_id} >${MINI_SETTINGS_BAR}<label class=\"fcp-label-admin\">Name</label><div class=\"fcp-name-fields-wrap\"><input class=\"fcp-form-control\" type=\"text\" disabled placeholder=\"First name\"><input class=\"fcp-form-control\" type=\"text\" disabled placeholder=\"Last name\"></div></div>`;\n        const TEXTAREA = `<div class=\"fcp-single-field-wrap\" data-id=${fcp_field_id} ><div>${MINI_SETTINGS_BAR}<label for=\"paragraph\">Paragraph</label></div><textarea name=\"paragraph\" id=\"paragraph\" cols=\"65\" rows=\"15\" disabled></textarea></div>`\n        if (field_name === \"text\") {\n\n            data = {\n                field_type: field_name,\n                settings: {\n                    placeholder: '',\n                    label: 'Untitled',\n                    required: false\n                },\n                fieldID: fcp_field_id\n            }\n            _fcp_global_variables__WEBPACK_IMPORTED_MODULE_0__[\"default\"].push(data)\n\n            $('.fcp-form-fields-wrapper').append(`<div class=\"fcp-single-field-wrap\" data-id=${fcp_field_id} >${MINI_SETTINGS_BAR}<div><label class=\"fcp-label-admin\">Untitled</label></div><input class='fcp-form-control' type=\"${field_name}\" disabled></div>`);\n\n        }else if (field_name === \"number\") {\n\n            data = {\n                field_type: field_name,\n                settings: {\n                    placeholder: '',\n                    label: 'Untitled',\n                    required: false,\n                    min_val: \"\",\n                    max_val: \"\"\n                },\n                fieldID: fcp_field_id\n            }\n            $('.fcp-form-fields-wrapper').append(`<div class=\"fcp-single-field-wrap\" data-id=${fcp_field_id} >${MINI_SETTINGS_BAR}<div><label class=\"fcp-label-admin\">Untitled</label></div><input class='fcp-form-control' type=\"${field_name}\" disabled></div>`);\n\n            _fcp_global_variables__WEBPACK_IMPORTED_MODULE_0__[\"default\"].push(data)\n        } else if (field_name === \"email\") {\n\n            data = {\n                field_type: field_name,\n                settings: {\n                    placeholder: '',\n                    label: 'Email',\n                    required: false\n                },\n                fieldID: fcp_field_id\n            }\n            _fcp_global_variables__WEBPACK_IMPORTED_MODULE_0__[\"default\"].push(data)\n            \n            $('.fcp-form-fields-wrapper').append(`<div class=\"fcp-single-field-wrap\" data-id=${fcp_field_id} >${MINI_SETTINGS_BAR}<div><label class=\"fcp-label-admin\">Email</label></div><input class='fcp-form-control' type=\"${field_name}\" disabled></div>`);\n\n        } else if (field_name === \"name\") {\n\n            data = {\n                field_type: field_name,\n                settings: {\n                    label: 'Name',\n                    required: false,\n                    firstname : true,\n                    lastname  : true\n                },\n                fieldID: fcp_field_id\n            }\n\n            _fcp_global_variables__WEBPACK_IMPORTED_MODULE_0__[\"default\"].push(data)\n\n            $('.fcp-form-fields-wrapper').append(NAME)\n\n        } else if (field_name === \"address\") {\n\n            data = {\n                field_type: field_name,\n                settings: {\n                    label: 'Address',\n                    required: false,\n                    street_address : true,\n                    address_line_2 : true,\n                    city           : true,\n                    state          : true,\n                    zip_code       : true,\n                    country         : true,\n                },\n                fieldID: fcp_field_id\n            }\n\n            _fcp_global_variables__WEBPACK_IMPORTED_MODULE_0__[\"default\"].push(data)\n\n            $('.fcp-form-fields-wrapper').append(ADDRESS)\n            \n        } else if (field_name === \"checkbox\") {\n        \n        } else if (field_name === \"password\") {\n        \n        } else if (field_name === \"textarea\") {\n            \n        }\n    });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fcp_field_appender_admin);\n\n\n\n\n//# sourceURL=webpack://js/./src/fcp-fields.js?");

/***/ }),

/***/ "./src/fcp-global-variables.js":
/*!*************************************!*\
  !*** ./src/fcp-global-variables.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar all_fields = []\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (all_fields);\n\n//# sourceURL=webpack://js/./src/fcp-global-variables.js?");

/***/ }),

/***/ "./src/fcp-settings.js":
/*!*****************************!*\
  !*** ./src/fcp-settings.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _fcp_data_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fcp-data-provider */ \"./src/fcp-data-provider.js\");\nconst $ = jQuery;\n\nfunction fcp_field_settings_handler() { \n\n\t$(document).on(\"click\", '.fcp-popup-icon', function (e) {\n\t\te.preventDefault();\n\t\tvar field_id = $(this).closest('.fcp-single-field-wrap').data('id') \n\t\tvar setting_for = $(this).closest('.fcp-mini-setting-bar').attr('data-settings');\n\t\tvar data_of_the_field = (0,_fcp_data_provider__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(field_id)\n\t\t$('.fcp-setting-field-cc').hide()\n\t\t// var settings = data_of_the_field.settings\n\n\t\tif (setting_for === \"text\" && data_of_the_field.field_type === \"text\") {\n\t\t\t\n\t\t\t$('.fcp-placeholder-admin-wrap').show()\n\t\t\t$('.fcp-required').css('display','flex')\n\t\t\t$('.fcp-label-admin-wrap').show()\t\t\n\n\t\t\t$('.fcp-label-val-admin').val(settings.label)\n\t\t\t$('.fcp-placeholder-val-admin').val(settings.placeholer)\n\t\t\t$('.fcp-req-val-admin').prop('checked', settings.required)\n\n\t\t} else if (setting_for === \"number\" && data_of_the_field.field_type === \"number\") {\n\n\t\t\t$('.fcp-required').css('display','flex')\n\t\t\t$('.fcp-placeholder-admin-wrap').show()\n\t\t\t$('.fcp-label-admin-wrap').show()\n\t\t\t$('.fcp-min--max-admin-wrap').show()\t\t\t\n\n\t\t\t$('.fcp-placeholder-val-admin').val(settings.placeholer)\n\t\t\t$('.fcp-label-val-admin').val(settings.label)\n\t\t\t$('.fcp-req-val-admin').prop('checked', settings.required)\n\t\t\t$('.fcp-min-num-val-admin').val(settings.min_val)\n\t\t\t$('.fcp-max-num-val-admin').val(settings.max_val)\n\n\t\t} else if (setting_for === \"email\" && data_of_the_field.field_type === \"email\") {\n\n\t\t\t$('.fcp-placeholder-admin-wrap').show()\n\t\t\t$('.fcp-required').css('display','flex')\n\t\t\t$('.fcp-label-admin-wrap').show()\n\n\t\t\t$('.fcp-label-val-admin').val(settings.label)\n\t\t\t$('.fcp-placeholder-val-admin').val(settings.placeholer)\n\t\t\t$('.fcp-req-val-admin').prop('checked', settings.required)\n\n\t\t} else if (setting_for === \"name\" && data_of_the_field.field_type === \"name\") {\n\n\t\t\t$('.fcp-required').css('display','flex')\n\t\t\t$('.fcp-name-fields-wrap').show();\n\t\t\t$('.fcp-label-admin-wrap').show();\n\n\t\t\t$('.fcp-label-val-admin').val(settings.label)\n\t\t\t$('.fcp-req-val-admin').prop('checked', settings.required)\n\t\t\t$('.fcp-firstn-req-val-admin').prop('checked', settings.firstname)\n\t\t\t$('.fcp-lastn-req-val-admin').prop('checked', settings.lastname)\n\n\t\t} else if (setting_for === \"address\" && data_of_the_field.field_type === \"address\") {\n\n\t\t\t$('.fcp-label-admin-wrap').show();\n\t\t\t$('.fcp-required').css('display','flex')\n\t\t\t$('.fcp-address-settings-wrap').show()\n\n\t\t\t\n\t\t} else if (setting_for === \"checkbox\") {\n\t\t\t$('.fcp-label-admin-wrap').show()\n\t\t\t$('.fcp-checkboxes-admin-wrap').show()\n\t\t} else if (setting_for === \"password\") {\n\t\t\t$('.fcp-placeholder-admin-wrap').show()\n\t\t\t$('.fcp-label-admin-wrap').show()\n\t\t} else if (setting_for === \"textarea\") {\n\t\t\t$('.fcp-required').css('display','flex')\n\t\t\t$('.fcp-label-admin-wrap').show()\n\t\t}\n\t\t\n\n\n\t\tjQuery.magnificPopup.open({\n\t\t\titems: {\n\t\t\t\tsrc: '#first-popup'\n\t\t\t},\n\t\t\ttype: 'inline',\n\t\t\tcloseBtnInside: true\n\t\t});\n\n\t})\n\n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fcp_field_settings_handler);\n\n//# sourceURL=webpack://js/./src/fcp-settings.js?");

/***/ }),

/***/ "./src/fcp-update-fields.js":
/*!**********************************!*\
  !*** ./src/fcp-update-fields.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst $ = jQuery;\n\nfunction fcp_update_specimen_fields_with_settings_and_create_json() {\n    var field = \"\";\n    var setting_field_type = \"\"\n    var field_id = \"\"\n\n    $(document).on('click', '.fcp-popup-icon', function () {\n        setting_field_type = $(this).closest('.fcp-mini-setting-bar').attr('data-settings');\n        field = $(this).closest('.fcp-single-field-wrap');\n        var html_of_field = field.prop('outerHTML');\n        field_id = $(html_of_field).data('id');\n    });\n\n    $(document).on('submit', '.fcp--field-settings--form', function (e) {\n        e.preventDefault();\n        var req = false\n        if ($('.fcp-req-val-admin').prop('checked') == true) {\n            req = true\n        }\n        var placeholder_val = $('.fcp-placeholder-val-admin').val();\n        var label_val = $('.fcp-label-val-admin').val();\n\n        if (setting_field_type === \"text\") {\n            var text_field_data = {\n                field_type: setting_field_type,\n                settings: {\n                    placeholder: placeholder_val,\n                    label: label_val,\n                    required: req\n                },\n                fieldID: field_id\n            }\n            \n            var existing_index = field_id_type_and_settings.findIndex(field => field.fieldID === field_id);\n\n            if (existing_index !== -1) {\n                field_id_type_and_settings[existing_index] = text_field_data;\n                field.find(\"label\").text(field_id_type_and_settings[existing_index].settings.label);\n                field.find(\"input\").attr(\"placeholder\", field_id_type_and_settings[existing_index].settings.placeholder);\n            } else {\n                field_id_type_and_settings.push(text_field_data);\n            }\n            console.log(field_id_type_and_settings)\n            \n        } else if (setting_field_type === \"number\") {\n            \n        } else if (setting_field_type === \"email\") {\n            \n        } else if (setting_field_type === \"name\") {\n\n        } else if (setting_field_type === \"address\") {\n\n        } else if (setting_field_type === \"checkbox\") {\n\n        } else if (setting_field_type === \"password\") {\n\n        } else if (setting_field_type === \"textarea\") {\n\n        }\n\n    })\n\n    $(document).on('click', '.fcp-field-delete-icon', function () {\n        var deleted_field_id = $(this).closest('.fcp-single-field-wrap').data('id');\n\n        var index_to_remove = field_id_type_and_settings.findIndex(field => field.fieldID === deleted_field_id);\n\n        if (index_to_remove !== -1) {\n            field_id_type_and_settings.splice(index_to_remove, 1);\n        }\n        // console.log(field_id_type_and_settings)\n        $(this).closest('.fcp-single-field-wrap').remove();\n    });\n\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fcp_update_specimen_fields_with_settings_and_create_json);\n\n//# sourceURL=webpack://js/./src/fcp-update-fields.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _fcp_fields__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fcp-fields */ \"./src/fcp-fields.js\");\n/* harmony import */ var _fcp_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fcp-settings */ \"./src/fcp-settings.js\");\n/* harmony import */ var _fcp_update_fields__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fcp-update-fields */ \"./src/fcp-update-fields.js\");\n\n\n\n\njQuery(document).ready(function ($) {\n    (0,_fcp_fields__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n    ;(0,_fcp_settings__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    $( \".fcp-form-fields-wrapper\" ).sortable({\n        placeholder: \"ui-state-highlight\",\n        connectWith: \".fcp-form-fields-wrapper\"\n    })\n\n    ;(0,_fcp_update_fields__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\n});\n\n//# sourceURL=webpack://js/./src/index.js?");

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