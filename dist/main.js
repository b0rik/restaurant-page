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

/***/ "./src/button.js":
/*!***********************!*\
  !*** ./src/button.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ makeButton),\n/* harmony export */   \"setActiveButton\": () => (/* binding */ setActiveButton)\n/* harmony export */ });\nfunction makeButton(text, loadPage) {\r\n    const button = document.createElement('button');\r\n\r\n    button.classList.add('button-nav');\r\n    button.textContent = text;\r\n\r\n    button.addEventListener('click', e => {\r\n        setActiveButton(e.target);\r\n        loadPage();\r\n    });\r\n\r\n    return button;\r\n}\r\n\r\nfunction setActiveButton(button) {\r\n    if(button.classList.contains('active')) return;\r\n\r\n    const buttons = document.querySelectorAll('.button-nav');\r\n\r\n    buttons.forEach(button => button.classList.remove('active'));\r\n\r\n    button.classList.add('active');\r\n}\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/button.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadContact)\n/* harmony export */ });\nfunction loadContact() {\r\n    const main = document.querySelector('main');\r\n    main.innerHTML = '';\r\n    main.appendChild(makeContact());\r\n}\r\n\r\nfunction makeContact() {\r\n    const container = document.createElement('div');\r\n    container.classList.add('container');\r\n\r\n    const heading = document.createElement('h2');\r\n    heading.textContent = 'Tell Us What You Think';\r\n    heading.classList.add('heading-contact');\r\n\r\n    const phoneNumber = document.createElement('h3');\r\n    phoneNumber.textContent = '+000-000000000';\r\n    phoneNumber.classList.add('contact-item');\r\n\r\n    const address = document.createElement('h3');\r\n    address.textContent = '69 This st. , That Country, ABC DEF.';\r\n    address.classList.add('contact-item');\r\n\r\n    const email = document.createElement('h3');\r\n    email.textContent = 'email@email.com';\r\n    email.classList.add('contact-item');\r\n\r\n    container.appendChild(heading);\r\n    container.appendChild(phoneNumber);\r\n    container.appendChild(address);\r\n    container.appendChild(email);\r\n\r\n    return container;\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ makeHeader)\n/* harmony export */ });\n/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav */ \"./src/nav.js\");\n/* harmony import */ var _logo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logo */ \"./src/logo.js\");\n\r\n\r\n\r\nfunction makeHeader() {\r\n    const header = document.createElement('header');\r\n    header.classList.add('header');\r\n\r\n    header.appendChild((0,_logo__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\r\n    header.appendChild((0,_nav__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\r\n\r\n    return header;\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/header.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadHome)\n/* harmony export */ });\nfunction loadHome() {\r\n    const main = document.querySelector('main');\r\n    main.innerHTML = '';\r\n    main.appendChild(makeHome());\r\n}\r\n\r\nfunction makeHome() {\r\n    const container = document.createElement('div');\r\n    container.classList.add('container');\r\n\r\n    const heading = document.createElement('h2');\r\n    heading.textContent = 'GOLD BLACK';\r\n    heading.classList.add('heading-home');\r\n\r\n    const image = document.createElement('img');\r\n    image.classList.add('image-home');\r\n    image.src = './images/coffee.jpg';\r\n    image.alt = 'coffee image';\r\n\r\n    const paragraph = document.createElement('p');\r\n    paragraph.classList.add('text-home');\r\n    paragraph.textContent = 'A cup of coffee lasts only a moment, but it is that moment that makes your day better.';\r\n\r\n    container.appendChild(heading);\r\n    container.appendChild(image);\r\n    container.appendChild(paragraph);\r\n\r\n    return container;\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page */ \"./src/page.js\");\n\r\n\r\n(0,_page__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/logo.js":
/*!*********************!*\
  !*** ./src/logo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ makeLogo)\n/* harmony export */ });\nfunction makeLogo() {\r\n    const logo = document.createElement('img');\r\n    logo.src = './images/logo.png';\r\n    logo.alt = 'Gold Black Logo';\r\n    logo.classList.add('logo');\r\n\r\n    return logo;\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/logo.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ makeMain)\n/* harmony export */ });\nfunction makeMain() {\r\n    const main = document.createElement('main');\r\n\r\n    return main;\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/main.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadMenu)\n/* harmony export */ });\nfunction loadMenu() {\r\n    const main = document.querySelector('main');\r\n    main.innerHTML = '';\r\n    main.appendChild(makeMenu());\r\n}\r\n\r\nfunction makeMenu() {\r\n    const container = document.createElement('div');\r\n    container.classList.add('container');\r\n\r\n    const heading = document.createElement('h2');\r\n    heading.textContent = 'Our Cup of Coffee';\r\n    heading.classList.add('heading-menu');\r\n\r\n    const menuContainer = document.createElement('div');\r\n    menuContainer.classList.add('container-menu');\r\n\r\n    menuContainer.appendChild(makeMenuItem('Espresso'));\r\n    menuContainer.appendChild(makeMenuItem('Latte'));\r\n    menuContainer.appendChild(makeMenuItem('Capuccino'));\r\n    menuContainer.appendChild(makeMenuItem('Americano'));\r\n\r\n    container.appendChild(heading);\r\n    container.appendChild(menuContainer);\r\n\r\n    return container;\r\n}\r\n\r\nfunction makeMenuItem(name) {\r\n    const item = document.createElement('div');\r\n    item.classList.add('menu-item');\r\n\r\n    const image = document.createElement('img');\r\n    image.src = `./images/${name.toLowerCase()}.jpg`;\r\n    image.alt = name;\r\n\r\n    const heading = document.createElement('h3');\r\n    heading.textContent = name;\r\n\r\n    item.appendChild(image);\r\n    item.appendChild(heading);\r\n\r\n    return item;\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/nav.js":
/*!********************!*\
  !*** ./src/nav.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ makeNav)\n/* harmony export */ });\n/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button */ \"./src/button.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nfunction makeNav() {\r\n    const nav = document.createElement('nav');\r\n    \r\n    nav.appendChild((0,_button__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('Home', _home__WEBPACK_IMPORTED_MODULE_1__[\"default\"]));\r\n    nav.appendChild((0,_button__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('Menu', _menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"]));\r\n    nav.appendChild((0,_button__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('Contact', _contact__WEBPACK_IMPORTED_MODULE_3__[\"default\"]));\r\n\r\n    return nav;\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/nav.js?");

/***/ }),

/***/ "./src/page.js":
/*!*********************!*\
  !*** ./src/page.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initPage)\n/* harmony export */ });\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ \"./src/header.js\");\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main */ \"./src/main.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./button */ \"./src/button.js\");\n\r\n\r\n\r\n\r\n\r\nfunction initPage() {\r\n    const content = document.querySelector('#content');\r\n\r\n    content.appendChild((0,_header__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\r\n    content.appendChild((0,_main__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\r\n\r\n    (0,_home__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n    (0,_button__WEBPACK_IMPORTED_MODULE_3__.setActiveButton)(document.querySelector('.button-nav'));\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/page.js?");

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