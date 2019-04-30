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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__block_block_js__ = __webpack_require__(/*! ./block/block.js */ 1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__block_block_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__block_block_js__);\n/**\n * Gutenberg Blocks\n *\n * All blocks related JavaScript files should be imported here.\n * You can create a new block folder in this dir and include code\n * for that block here as well.\n *\n * All blocks should be included here since this is the file that\n * Webpack is compiling as the input file.\n */\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEd1dGVuYmVyZyBCbG9ja3NcbiAqXG4gKiBBbGwgYmxvY2tzIHJlbGF0ZWQgSmF2YVNjcmlwdCBmaWxlcyBzaG91bGQgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqIFlvdSBjYW4gY3JlYXRlIGEgbmV3IGJsb2NrIGZvbGRlciBpbiB0aGlzIGRpciBhbmQgaW5jbHVkZSBjb2RlXG4gKiBmb3IgdGhhdCBibG9jayBoZXJlIGFzIHdlbGwuXG4gKlxuICogQWxsIGJsb2NrcyBzaG91bGQgYmUgaW5jbHVkZWQgaGVyZSBzaW5jZSB0aGlzIGlzIHRoZSBmaWxlIHRoYXRcbiAqIFdlYnBhY2sgaXMgY29tcGlsaW5nIGFzIHRoZSBpbnB1dCBmaWxlLlxuICovXG5cbmltcG9ydCAnLi9ibG9jay9ibG9jay5qcyc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2tzLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!****************************!*\
  !*** ./src/block/block.js ***!
  \****************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("/**\n * BLOCK: bs-articles-avatar\n *\n * Registering a basic block with Gutenberg.\n * Simple block, renders and saves the same content without any interactivity.\n */\nvar __ = wp.i18n.__;\nvar registerBlockType = wp.blocks.registerBlockType;\nvar _wp$components = wp.components,\n    SelectControl = _wp$components.SelectControl,\n    TextControl = _wp$components.TextControl;\nvar withSelect = wp.data.withSelect;\n\nregisterBlockType('bonseo/block-bs-slim-articles', {\n\ttitle: __('Artículos con Avatar'),\n\ticon: 'editor-quote',\n\tcategory: 'bonseo-blocks',\n\tkeywords: [__('articles-avatar'), __('BonSeo'), __('BonSeo Block')],\n\n\tedit: withSelect(function (select) {\n\t\tvar _select = select('core'),\n\t\t    getEntityRecords = _select.getEntityRecords,\n\t\t    getPostTypes = _select.getPostTypes;\n\n\t\tvar query = { per_page: -1, hide_empty: true };\n\t\treturn {\n\t\t\tcategories: getEntityRecords('taxonomy', 'category', query),\n\t\t\ttypes: getPostTypes(),\n\t\t\tbrands: wp.apiRequest('/bonseo/v1/brand')\n\t\t};\n\t})(function (props) {\n\t\tvar attributes = props.attributes,\n\t\t    className = props.className,\n\t\t    setAttributes = props.setAttributes,\n\t\t    isSelected = props.isSelected;\n\n\t\tif (!props.categories) {\n\t\t\treturn \"Loading...\";\n\t\t}\n\n\t\tif (props.categories.length === 0) {\n\t\t\treturn \"No categories\";\n\t\t}\n\t\tvar categories = [''].concat(props.categories);\n\t\tvar types = [''].concat(props.types);\n\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\tnull,\n\t\t\twp.element.createElement(\n\t\t\t\t'h2',\n\t\t\t\tnull,\n\t\t\t\t'Art\\xEDcles Slim'\n\t\t\t),\n\t\t\twp.element.createElement(TextControl, {\n\t\t\t\tclassName: className + '__title',\n\t\t\t\tlabel: __('Elige título:'),\n\t\t\t\tvalue: attributes.title,\n\t\t\t\tonChange: function onChange(title) {\n\t\t\t\t\treturn setAttributes({ title: title });\n\t\t\t\t}\n\t\t\t}),\n\t\t\twp.element.createElement(TextControl, {\n\t\t\t\tclassName: className + '__max-entries',\n\t\t\t\tlabel: __('Cuántas entradas:'),\n\t\t\t\ttype: 'number',\n\t\t\t\tvalue: attributes.max_entries,\n\t\t\t\tonChange: function onChange(max_entries) {\n\t\t\t\t\treturn setAttributes({ max_entries: max_entries });\n\t\t\t\t}\n\t\t\t}),\n\t\t\twp.element.createElement(SelectControl, {\n\t\t\t\tlabel: 'categor\\xEDa',\n\t\t\t\tclassName: className + '__select',\n\t\t\t\tvalue: attributes.category,\n\t\t\t\toptions: categories.map(function (category) {\n\t\t\t\t\treturn {\n\t\t\t\t\t\tlabel: category.name,\n\t\t\t\t\t\tvalue: category.id\n\t\t\t\t\t};\n\t\t\t\t}),\n\t\t\t\tonChange: function onChange(category) {\n\t\t\t\t\treturn setAttributes({ category: category });\n\t\t\t\t}\n\t\t\t}),\n\t\t\twp.element.createElement(SelectControl, {\n\t\t\t\tlabel: 'Tipo de Post',\n\t\t\t\tclassName: className + '__type',\n\t\t\t\tvalue: attributes.type,\n\t\t\t\toptions: types.map(function (type) {\n\t\t\t\t\treturn {\n\t\t\t\t\t\tlabel: type.name,\n\t\t\t\t\t\tvalue: type.slug\n\t\t\t\t\t};\n\t\t\t\t}),\n\t\t\t\tonChange: function onChange(type) {\n\t\t\t\t\treturn setAttributes({ type: type });\n\t\t\t\t}\n\t\t\t})\n\t\t);\n\t}),\n\tsave: function save() {\n\t\treturn null;\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9ibG9jay5qcz85MjFkIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQkxPQ0s6IGJzLWFydGljbGVzLWF2YXRhclxuICpcbiAqIFJlZ2lzdGVyaW5nIGEgYmFzaWMgYmxvY2sgd2l0aCBHdXRlbmJlcmcuXG4gKiBTaW1wbGUgYmxvY2ssIHJlbmRlcnMgYW5kIHNhdmVzIHRoZSBzYW1lIGNvbnRlbnQgd2l0aG91dCBhbnkgaW50ZXJhY3Rpdml0eS5cbiAqL1xudmFyIF9fID0gd3AuaTE4bi5fXztcbnZhciByZWdpc3RlckJsb2NrVHlwZSA9IHdwLmJsb2Nrcy5yZWdpc3RlckJsb2NrVHlwZTtcbnZhciBfd3AkY29tcG9uZW50cyA9IHdwLmNvbXBvbmVudHMsXG4gICAgU2VsZWN0Q29udHJvbCA9IF93cCRjb21wb25lbnRzLlNlbGVjdENvbnRyb2wsXG4gICAgVGV4dENvbnRyb2wgPSBfd3AkY29tcG9uZW50cy5UZXh0Q29udHJvbDtcbnZhciB3aXRoU2VsZWN0ID0gd3AuZGF0YS53aXRoU2VsZWN0O1xuXG5yZWdpc3RlckJsb2NrVHlwZSgnYm9uc2VvL2Jsb2NrLWJzLXNsaW0tYXJ0aWNsZXMnLCB7XG5cdHRpdGxlOiBfXygnQXJ0w61jdWxvcyBjb24gQXZhdGFyJyksXG5cdGljb246ICdlZGl0b3ItcXVvdGUnLFxuXHRjYXRlZ29yeTogJ2JvbnNlby1ibG9ja3MnLFxuXHRrZXl3b3JkczogW19fKCdhcnRpY2xlcy1hdmF0YXInKSwgX18oJ0JvblNlbycpLCBfXygnQm9uU2VvIEJsb2NrJyldLFxuXG5cdGVkaXQ6IHdpdGhTZWxlY3QoZnVuY3Rpb24gKHNlbGVjdCkge1xuXHRcdHZhciBfc2VsZWN0ID0gc2VsZWN0KCdjb3JlJyksXG5cdFx0ICAgIGdldEVudGl0eVJlY29yZHMgPSBfc2VsZWN0LmdldEVudGl0eVJlY29yZHMsXG5cdFx0ICAgIGdldFBvc3RUeXBlcyA9IF9zZWxlY3QuZ2V0UG9zdFR5cGVzO1xuXG5cdFx0dmFyIHF1ZXJ5ID0geyBwZXJfcGFnZTogLTEsIGhpZGVfZW1wdHk6IHRydWUgfTtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Y2F0ZWdvcmllczogZ2V0RW50aXR5UmVjb3JkcygndGF4b25vbXknLCAnY2F0ZWdvcnknLCBxdWVyeSksXG5cdFx0XHR0eXBlczogZ2V0UG9zdFR5cGVzKCksXG5cdFx0XHRicmFuZHM6IHdwLmFwaVJlcXVlc3QoJy9ib25zZW8vdjEvYnJhbmQnKVxuXHRcdH07XG5cdH0pKGZ1bmN0aW9uIChwcm9wcykge1xuXHRcdHZhciBhdHRyaWJ1dGVzID0gcHJvcHMuYXR0cmlidXRlcyxcblx0XHQgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuXHRcdCAgICBzZXRBdHRyaWJ1dGVzID0gcHJvcHMuc2V0QXR0cmlidXRlcyxcblx0XHQgICAgaXNTZWxlY3RlZCA9IHByb3BzLmlzU2VsZWN0ZWQ7XG5cblx0XHRpZiAoIXByb3BzLmNhdGVnb3JpZXMpIHtcblx0XHRcdHJldHVybiBcIkxvYWRpbmcuLi5cIjtcblx0XHR9XG5cblx0XHRpZiAocHJvcHMuY2F0ZWdvcmllcy5sZW5ndGggPT09IDApIHtcblx0XHRcdHJldHVybiBcIk5vIGNhdGVnb3JpZXNcIjtcblx0XHR9XG5cdFx0dmFyIGNhdGVnb3JpZXMgPSBbJyddLmNvbmNhdChwcm9wcy5jYXRlZ29yaWVzKTtcblx0XHR2YXIgdHlwZXMgPSBbJyddLmNvbmNhdChwcm9wcy50eXBlcyk7XG5cblx0XHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0J2RpdicsXG5cdFx0XHRudWxsLFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHQnaDInLFxuXHRcdFx0XHRudWxsLFxuXHRcdFx0XHQnQXJ0XFx4RURjbGVzIFNsaW0nXG5cdFx0XHQpLFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFRleHRDb250cm9sLCB7XG5cdFx0XHRcdGNsYXNzTmFtZTogY2xhc3NOYW1lICsgJ19fdGl0bGUnLFxuXHRcdFx0XHRsYWJlbDogX18oJ0VsaWdlIHTDrXR1bG86JyksXG5cdFx0XHRcdHZhbHVlOiBhdHRyaWJ1dGVzLnRpdGxlLFxuXHRcdFx0XHRvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UodGl0bGUpIHtcblx0XHRcdFx0XHRyZXR1cm4gc2V0QXR0cmlidXRlcyh7IHRpdGxlOiB0aXRsZSB9KTtcblx0XHRcdFx0fVxuXHRcdFx0fSksXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoVGV4dENvbnRyb2wsIHtcblx0XHRcdFx0Y2xhc3NOYW1lOiBjbGFzc05hbWUgKyAnX19tYXgtZW50cmllcycsXG5cdFx0XHRcdGxhYmVsOiBfXygnQ3XDoW50YXMgZW50cmFkYXM6JyksXG5cdFx0XHRcdHR5cGU6ICdudW1iZXInLFxuXHRcdFx0XHR2YWx1ZTogYXR0cmlidXRlcy5tYXhfZW50cmllcyxcblx0XHRcdFx0b25DaGFuZ2U6IGZ1bmN0aW9uIG9uQ2hhbmdlKG1heF9lbnRyaWVzKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHNldEF0dHJpYnV0ZXMoeyBtYXhfZW50cmllczogbWF4X2VudHJpZXMgfSk7XG5cdFx0XHRcdH1cblx0XHRcdH0pLFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFNlbGVjdENvbnRyb2wsIHtcblx0XHRcdFx0bGFiZWw6ICdjYXRlZ29yXFx4RURhJyxcblx0XHRcdFx0Y2xhc3NOYW1lOiBjbGFzc05hbWUgKyAnX19zZWxlY3QnLFxuXHRcdFx0XHR2YWx1ZTogYXR0cmlidXRlcy5jYXRlZ29yeSxcblx0XHRcdFx0b3B0aW9uczogY2F0ZWdvcmllcy5tYXAoZnVuY3Rpb24gKGNhdGVnb3J5KSB7XG5cdFx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRcdGxhYmVsOiBjYXRlZ29yeS5uYW1lLFxuXHRcdFx0XHRcdFx0dmFsdWU6IGNhdGVnb3J5LmlkXG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0fSksXG5cdFx0XHRcdG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZShjYXRlZ29yeSkge1xuXHRcdFx0XHRcdHJldHVybiBzZXRBdHRyaWJ1dGVzKHsgY2F0ZWdvcnk6IGNhdGVnb3J5IH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9KSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChTZWxlY3RDb250cm9sLCB7XG5cdFx0XHRcdGxhYmVsOiAnVGlwbyBkZSBQb3N0Jyxcblx0XHRcdFx0Y2xhc3NOYW1lOiBjbGFzc05hbWUgKyAnX190eXBlJyxcblx0XHRcdFx0dmFsdWU6IGF0dHJpYnV0ZXMudHlwZSxcblx0XHRcdFx0b3B0aW9uczogdHlwZXMubWFwKGZ1bmN0aW9uICh0eXBlKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRcdGxhYmVsOiB0eXBlLm5hbWUsXG5cdFx0XHRcdFx0XHR2YWx1ZTogdHlwZS5zbHVnXG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0fSksXG5cdFx0XHRcdG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZSh0eXBlKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHNldEF0dHJpYnV0ZXMoeyB0eXBlOiB0eXBlIH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9KVxuXHRcdCk7XG5cdH0pLFxuXHRzYXZlOiBmdW5jdGlvbiBzYXZlKCkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9jay9ibG9jay5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ })
/******/ ]);