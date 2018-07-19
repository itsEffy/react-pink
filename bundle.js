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
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/App.js":
/*!***********************!*\
  !*** ./client/App.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// import Header from './components/header/Header';\n// import { fetchCurrentUser } from './actions';\n\nconst Header = () => _react2.default.createElement(\n\t'h1',\n\tnull,\n\t'i\\'m header'\n);\n\nconst App = ({ route }) => {\n\treturn _react2.default.createElement(\n\t\t'div',\n\t\tnull,\n\t\t_react2.default.createElement(Header, null),\n\t\t_react2.default.createElement(\n\t\t\t'div',\n\t\t\tnull,\n\t\t\t(0, _reactRouterConfig.renderRoutes)(route.routes)\n\t\t)\n\t);\n};\n\nexports.default = {\n\tcomponent: App\n\t// , loadData: ({ dispatch }) => dispatch(fetchCurrentUser())\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvQXBwLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NsaWVudC9BcHAuanM/N2FhMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyByZW5kZXJSb3V0ZXMgfSBmcm9tICdyZWFjdC1yb3V0ZXItY29uZmlnJztcclxuLy8gaW1wb3J0IEhlYWRlciBmcm9tICcuL2NvbXBvbmVudHMvaGVhZGVyL0hlYWRlcic7XHJcbi8vIGltcG9ydCB7IGZldGNoQ3VycmVudFVzZXIgfSBmcm9tICcuL2FjdGlvbnMnO1xyXG5cclxuY29uc3QgSGVhZGVyID0gKCkgPT4gPGgxPmknbSBoZWFkZXI8L2gxPjtcclxuXHJcbmNvbnN0IEFwcCA9ICh7IHJvdXRlIH0pID0+IHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdj5cclxuXHRcdFx0PEhlYWRlciAvPlxyXG5cdFx0XHQ8ZGl2PntyZW5kZXJSb3V0ZXMocm91dGUucm91dGVzKX08L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0Y29tcG9uZW50OiBBcHBcclxuXHQvLyAsIGxvYWREYXRhOiAoeyBkaXNwYXRjaCB9KSA9PiBkaXNwYXRjaChmZXRjaEN1cnJlbnRVc2VyKCkpXHJcbn07XHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./client/App.js\n");

/***/ }),

/***/ "./client/Routes.js":
/*!**************************!*\
  !*** ./client/Routes.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n// import GalleryPage from './components/gallery/GalleryPage.jsx';\n// import TourPage from './components/tour/TourPage.jsx';\n\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _App = __webpack_require__(/*! ./App */ \"./client/App.js\");\n\nvar _App2 = _interopRequireDefault(_App);\n\nvar _HomePage = __webpack_require__(/*! ./components/home/HomePage.jsx */ \"./client/components/home/HomePage.jsx\");\n\nvar _HomePage2 = _interopRequireDefault(_HomePage);\n\nvar _NotFoundPage = __webpack_require__(/*! ./components/other/NotFoundPage.jsx */ \"./client/components/other/NotFoundPage.jsx\");\n\nvar _NotFoundPage2 = _interopRequireDefault(_NotFoundPage);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = [_extends({}, _App2.default, {\n  routes: [_extends({}, _HomePage2.default, {\n    path: '/',\n    exact: true\n  }), _extends({}, _NotFoundPage2.default)]\n})];\n\n/*\r\n{\r\n        ...GalleryPage,\r\n        path: '/photo',\r\n        exact: true\r\n      },\r\n      {\r\n        ...TourPage,\r\n        path: '/tour',\r\n        exact: true\r\n      },\r\n      {\r\n        ...TourPage,\r\n        path: '/about',\r\n        exact: true\r\n      }\r\n\r\n      *///# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvUm91dGVzLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NsaWVudC9Sb3V0ZXMuanM/NDkwNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQXBwIGZyb20gJy4vQXBwJztcclxuaW1wb3J0IEhvbWVQYWdlIGZyb20gJy4vY29tcG9uZW50cy9ob21lL0hvbWVQYWdlLmpzeCc7XHJcbi8vIGltcG9ydCBHYWxsZXJ5UGFnZSBmcm9tICcuL2NvbXBvbmVudHMvZ2FsbGVyeS9HYWxsZXJ5UGFnZS5qc3gnO1xyXG4vLyBpbXBvcnQgVG91clBhZ2UgZnJvbSAnLi9jb21wb25lbnRzL3RvdXIvVG91clBhZ2UuanN4JztcclxuaW1wb3J0IE5vdEZvdW5kUGFnZSBmcm9tICcuL2NvbXBvbmVudHMvb3RoZXIvTm90Rm91bmRQYWdlLmpzeCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBbXHJcbiAge1xyXG4gICAgLi4uQXBwLFxyXG4gICAgcm91dGVzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICAuLi5Ib21lUGFnZSxcclxuICAgICAgICBwYXRoOiAnLycsXHJcbiAgICAgICAgZXhhY3Q6IHRydWVcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIC4uLk5vdEZvdW5kUGFnZVxyXG4gICAgICB9XHJcbiAgICBdXHJcbiAgfVxyXG5dO1xyXG5cclxuLypcclxue1xyXG4gICAgICAgIC4uLkdhbGxlcnlQYWdlLFxyXG4gICAgICAgIHBhdGg6ICcvcGhvdG8nLFxyXG4gICAgICAgIGV4YWN0OiB0cnVlXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICAuLi5Ub3VyUGFnZSxcclxuICAgICAgICBwYXRoOiAnL3RvdXInLFxyXG4gICAgICAgIGV4YWN0OiB0cnVlXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICAuLi5Ub3VyUGFnZSxcclxuICAgICAgICBwYXRoOiAnL2Fib3V0JyxcclxuICAgICAgICBleGFjdDogdHJ1ZVxyXG4gICAgICB9XHJcblxyXG4gICAgICAqL1xyXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7Ozs7O0FBQ0E7QUFHQTtBQUdBO0FBQ0E7QUFKQTtBQUhBO0FBQ0E7QUFlQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./client/Routes.js\n");

/***/ }),

/***/ "./client/components/home/HomePage.jsx":
/*!*********************************************!*\
  !*** ./client/components/home/HomePage.jsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// import PageTemplate from '../other/PageTemplate.jsx';\n\n// import Features from './Features.jsx';\n// import Reviews from './Reviews.jsx';\n// import Price from './Price.jsx';\n// import Contacts from './Contacts.jsx';\n// import AdressMap from './Map.jsx';\n\n/*\r\nconst xHomePage = (props: {}) => (\r\n\t<PageTemplate home>\r\n\t\t<Features />\r\n\t\t<Reviews />\r\n\t\t<Price />\r\n\t\t<Contacts />\r\n\t\t<AdressMap />\r\n\t</PageTemplate>\r\n);\r\n*/\n\nconst HomePage = props => _react2.default.createElement(\n\t'h2',\n\tnull,\n\t'You are at home page'\n);\n\nexports.default = { component: HomePage };//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvY29tcG9uZW50cy9ob21lL0hvbWVQYWdlLmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9jbGllbnQvY29tcG9uZW50cy9ob21lL0hvbWVQYWdlLmpzeD9iNjAxIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEBmbG93XHJcblxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuLy8gaW1wb3J0IFBhZ2VUZW1wbGF0ZSBmcm9tICcuLi9vdGhlci9QYWdlVGVtcGxhdGUuanN4JztcclxuXHJcbi8vIGltcG9ydCBGZWF0dXJlcyBmcm9tICcuL0ZlYXR1cmVzLmpzeCc7XHJcbi8vIGltcG9ydCBSZXZpZXdzIGZyb20gJy4vUmV2aWV3cy5qc3gnO1xyXG4vLyBpbXBvcnQgUHJpY2UgZnJvbSAnLi9QcmljZS5qc3gnO1xyXG4vLyBpbXBvcnQgQ29udGFjdHMgZnJvbSAnLi9Db250YWN0cy5qc3gnO1xyXG4vLyBpbXBvcnQgQWRyZXNzTWFwIGZyb20gJy4vTWFwLmpzeCc7XHJcblxyXG4vKlxyXG5jb25zdCB4SG9tZVBhZ2UgPSAocHJvcHM6IHt9KSA9PiAoXHJcblx0PFBhZ2VUZW1wbGF0ZSBob21lPlxyXG5cdFx0PEZlYXR1cmVzIC8+XHJcblx0XHQ8UmV2aWV3cyAvPlxyXG5cdFx0PFByaWNlIC8+XHJcblx0XHQ8Q29udGFjdHMgLz5cclxuXHRcdDxBZHJlc3NNYXAgLz5cclxuXHQ8L1BhZ2VUZW1wbGF0ZT5cclxuKTtcclxuKi9cclxuXHJcbmNvbnN0IEhvbWVQYWdlID0gKHByb3BzOiB7fSkgPT4gPGgyPllvdSBhcmUgYXQgaG9tZSBwYWdlPC9oMj47XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7IGNvbXBvbmVudDogSG9tZVBhZ2UgfTtcclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFFQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FBWUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./client/components/home/HomePage.jsx\n");

/***/ }),

/***/ "./client/components/other/NotFoundPage.jsx":
/*!**************************************************!*\
  !*** ./client/components/other/NotFoundPage.jsx ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactHelmet = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// import Header from '../header/Header';\n// import Footer from '../footer/Footer';\n// import styles from '../../sass/blocks/not-found.scss';\n\n// x\n\nconst Header = () => _react2.default.createElement(\n\t'h3',\n\tnull,\n\t'header'\n);\nconst Footer = () => _react2.default.createElement(\n\t'h3',\n\tnull,\n\t'footer'\n);\n\nconst NotFoundPage = ({ staticContext = {} }) => {\n\tstaticContext.notFound = true;\n\n\treturn _react2.default.createElement(\n\t\t'div',\n\t\t{ className: 'not-found' },\n\t\t_react2.default.createElement(\n\t\t\t_reactHelmet.Helmet,\n\t\t\tnull,\n\t\t\t_react2.default.createElement(\n\t\t\t\t'title',\n\t\t\t\tnull,\n\t\t\t\t'Pink | \\u0421\\u0442\\u0440\\u0430\\u043D\\u0438\\u0446\\u0430 \\u043D\\u0435 \\u043D\\u0430\\u0439\\u0434\\u0435\\u043D\\u0430!'\n\t\t\t)\n\t\t),\n\t\t_react2.default.createElement(Header, { className: 'header' }),\n\t\t_react2.default.createElement(\n\t\t\t'main',\n\t\t\tnull,\n\t\t\t_react2.default.createElement(\n\t\t\t\t'section',\n\t\t\t\t{ className: 'not-found__inner' },\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t'p',\n\t\t\t\t\t{ className: 'not-found__number' },\n\t\t\t\t\t'404'\n\t\t\t\t),\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t'p',\n\t\t\t\t\t{ className: 'not-found__description' },\n\t\t\t\t\t'\\u041A\\u0430\\u0436\\u0435\\u0442\\u0441\\u044F, \\u0432\\u044B \\u043D\\u0435\\u043C\\u043D\\u043E\\u0433\\u043E \\u043D\\u0435 \\u0442\\u0443\\u0434\\u0430 \\u043F\\u043E\\u043F\\u0430\\u043B\\u0438'\n\t\t\t\t)\n\t\t\t)\n\t\t)\n\t);\n};\n\nexports.default = { component: NotFoundPage };//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvY29tcG9uZW50cy9vdGhlci9Ob3RGb3VuZFBhZ2UuanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NsaWVudC9jb21wb25lbnRzL290aGVyL05vdEZvdW5kUGFnZS5qc3g/MzE2NiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyB4QGZsb3dcclxuXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEhlbG1ldCB9IGZyb20gJ3JlYWN0LWhlbG1ldCc7XHJcblxyXG4vLyBpbXBvcnQgSGVhZGVyIGZyb20gJy4uL2hlYWRlci9IZWFkZXInO1xyXG4vLyBpbXBvcnQgRm9vdGVyIGZyb20gJy4uL2Zvb3Rlci9Gb290ZXInO1xyXG4vLyBpbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3Nhc3MvYmxvY2tzL25vdC1mb3VuZC5zY3NzJztcclxuXHJcbmNvbnN0IEhlYWRlciA9ICgpID0+IDxoMz5oZWFkZXI8L2gzPjtcclxuY29uc3QgRm9vdGVyID0gKCkgPT4gPGgzPmZvb3RlcjwvaDM+O1xyXG5cclxuY29uc3QgTm90Rm91bmRQYWdlID0gKHsgc3RhdGljQ29udGV4dCA9IHt9IH0pID0+IHtcclxuXHRzdGF0aWNDb250ZXh0Lm5vdEZvdW5kID0gdHJ1ZTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPVwibm90LWZvdW5kXCI+XHJcblx0XHRcdDxIZWxtZXQ+XHJcblx0XHRcdFx0PHRpdGxlPlBpbmsgfCDQodGC0YDQsNC90LjRhtCwINC90LUg0L3QsNC50LTQtdC90LAhPC90aXRsZT5cclxuXHRcdFx0PC9IZWxtZXQ+XHJcblx0XHRcdDxIZWFkZXIgY2xhc3NOYW1lPVwiaGVhZGVyXCIgLz5cclxuXHRcdFx0PG1haW4+XHJcblx0XHRcdFx0PHNlY3Rpb24gY2xhc3NOYW1lPVwibm90LWZvdW5kX19pbm5lclwiPlxyXG5cdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibm90LWZvdW5kX19udW1iZXJcIj40MDQ8L3A+XHJcblx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJub3QtZm91bmRfX2Rlc2NyaXB0aW9uXCI+XHJcblx0XHRcdFx0XHRcdNCa0LDQttC10YLRgdGPLCDQstGLINC90LXQvNC90L7Qs9C+INC90LUg0YLRg9C00LAg0L/QvtC/0LDQu9C4XHJcblx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0PC9zZWN0aW9uPlxyXG5cdFx0XHQ8L21haW4+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgeyBjb21wb25lbnQ6IE5vdEZvdW5kUGFnZSB9O1xyXG4iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFDQTtBQVFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFHQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFEQTtBQUxBO0FBZUE7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./client/components/other/NotFoundPage.jsx\n");

/***/ }),

/***/ "./src/client/actions/actions.js":
/*!***************************************!*\
  !*** ./src/client/actions/actions.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nconst SHOW_USER_INFO = exports.SHOW_USER_INFO = \"SHOW_USER_INFO\";\nconst SHOW_USER_PHOTOS = exports.SHOW_USER_PHOTOS = \"SHOW_USER_PHOTOS\";\nconst SET_SEARCH_TEXT = exports.SET_SEARCH_TEXT = \"SET_SEARCH_TEXT\";\nconst SET_USER_INFO_LOADING_STATUS = exports.SET_USER_INFO_LOADING_STATUS = \"SET_USER_INFO_LOADING_STATUS\";\n\nconst OPEN_CLOSE_MOBILE_MENU = exports.OPEN_CLOSE_MOBILE_MENU = \"OPEN_CLOSE_MOBILE_MENU\";\n\nconst SET_VIEWPORT_VERSION = exports.SET_VIEWPORT_VERSION = \"SET_VIEWPORT_VERSION\";\n\nconst CHANGE_VAR = exports.CHANGE_VAR = \"CHANGE_VAR\";\n\nconst SET_VALUE = exports.SET_VALUE = \"SET_VALUE\";\nconst SET_NAME_VALUE = exports.SET_NAME_VALUE = \"SET_NAME_VALUE\";\nconst SET_SURNAME_VALUE = exports.SET_SURNAME_VALUE = \"SET_SURNAME_VALUE\";\nconst SET_APPOPTIONS_VALUE = exports.SET_APPOPTIONS_VALUE = \"SET_APPOPTIONS_VALUE\";\nconst SET_PATRONYMIC_VALUE = exports.SET_PATRONYMIC_VALUE = \"SET_PATRONYMIC_VALUE\";\nconst SET_TEL_VALUE = exports.SET_TEL_VALUE = \"SET_TEL_VALUE\";\nconst SET_EMAIL_VALUE = exports.SET_EMAIL_VALUE = \"SET_EMAIL_VALUE\";\nconst SET_EMOTIONS_VALUE = exports.SET_EMOTIONS_VALUE = \"SET_EMOTIONS_VALUE\";\nconst SET_ACHIEVE = exports.SET_ACHIEVE = \"SET_ACHIEVE\";\nconst RESET_FORM = exports.RESET_FORM = \"RESET_FORM\";\n\nconst SET_SELFIE_ACHIEVE = exports.SET_SELFIE_ACHIEVE = \"SET_SELFIE_ACHIEVE\";\nconst SET_BURNT_ACHIEVE = exports.SET_BURNT_ACHIEVE = \"SET_BURNT_ACHIEVE\";\nconst SET_SAWSELEB_ACHIEVE = exports.SET_SAWSELEB_ACHIEVE = \"SET_SAWSELEB_ACHIEVE\";\nconst SET_SOUVENIRS_ACHIEVE = exports.SET_SOUVENIRS_ACHIEVE = \"SET_SOUVENIRS_ACHIEVE\";\nconst SET_HOLD_ACHIEVE = exports.SET_HOLD_ACHIEVE = \"SET_HOLD_ACHIEVE\";\nconst SET_DESTROY_ACHIEVE = exports.SET_DESTROY_ACHIEVE = \"SET_DESTROY_ACHIEVE\";\n\nconst ADD_PHOTOS = exports.ADD_PHOTOS = \"ADD_MORE_PHOTOS\";\nconst ADD_PANORAM = exports.ADD_PANORAM = \"ADD_PANORAM\";\n\nconst LIKE_PHOTO = exports.LIKE_PHOTO = \"LIKE_PHOTO\";\nconst LIKE_PANORAM = exports.LIKE_PANORAM = \"LIKE_PANORAM\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY2xpZW50L2FjdGlvbnMvYWN0aW9ucy5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvY2xpZW50L2FjdGlvbnMvYWN0aW9ucy5qcz81MDhlIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEBmbG93XG5cbmV4cG9ydCBjb25zdCBTSE9XX1VTRVJfSU5GTyA9IFwiU0hPV19VU0VSX0lORk9cIjtcbmV4cG9ydCBjb25zdCBTSE9XX1VTRVJfUEhPVE9TID0gXCJTSE9XX1VTRVJfUEhPVE9TXCI7XG5leHBvcnQgY29uc3QgU0VUX1NFQVJDSF9URVhUID0gXCJTRVRfU0VBUkNIX1RFWFRcIjtcbmV4cG9ydCBjb25zdCBTRVRfVVNFUl9JTkZPX0xPQURJTkdfU1RBVFVTID0gXCJTRVRfVVNFUl9JTkZPX0xPQURJTkdfU1RBVFVTXCI7XG5cbmV4cG9ydCBjb25zdCBPUEVOX0NMT1NFX01PQklMRV9NRU5VID0gXCJPUEVOX0NMT1NFX01PQklMRV9NRU5VXCI7XG5cbmV4cG9ydCBjb25zdCBTRVRfVklFV1BPUlRfVkVSU0lPTiA9IFwiU0VUX1ZJRVdQT1JUX1ZFUlNJT05cIjtcblxuZXhwb3J0IGNvbnN0IENIQU5HRV9WQVIgPSBcIkNIQU5HRV9WQVJcIjtcblxuZXhwb3J0IGNvbnN0IFNFVF9WQUxVRSA9IFwiU0VUX1ZBTFVFXCI7XG5leHBvcnQgY29uc3QgU0VUX05BTUVfVkFMVUUgPSBcIlNFVF9OQU1FX1ZBTFVFXCI7XG5leHBvcnQgY29uc3QgU0VUX1NVUk5BTUVfVkFMVUUgPSBcIlNFVF9TVVJOQU1FX1ZBTFVFXCI7XG5leHBvcnQgY29uc3QgU0VUX0FQUE9QVElPTlNfVkFMVUUgPSBcIlNFVF9BUFBPUFRJT05TX1ZBTFVFXCI7XG5leHBvcnQgY29uc3QgU0VUX1BBVFJPTllNSUNfVkFMVUUgPSBcIlNFVF9QQVRST05ZTUlDX1ZBTFVFXCI7XG5leHBvcnQgY29uc3QgU0VUX1RFTF9WQUxVRSA9IFwiU0VUX1RFTF9WQUxVRVwiO1xuZXhwb3J0IGNvbnN0IFNFVF9FTUFJTF9WQUxVRSA9IFwiU0VUX0VNQUlMX1ZBTFVFXCI7XG5leHBvcnQgY29uc3QgU0VUX0VNT1RJT05TX1ZBTFVFID0gXCJTRVRfRU1PVElPTlNfVkFMVUVcIjtcbmV4cG9ydCBjb25zdCBTRVRfQUNISUVWRSA9IFwiU0VUX0FDSElFVkVcIjtcbmV4cG9ydCBjb25zdCBSRVNFVF9GT1JNID0gXCJSRVNFVF9GT1JNXCI7XG5cbmV4cG9ydCBjb25zdCBTRVRfU0VMRklFX0FDSElFVkUgPSBcIlNFVF9TRUxGSUVfQUNISUVWRVwiO1xuZXhwb3J0IGNvbnN0IFNFVF9CVVJOVF9BQ0hJRVZFID0gXCJTRVRfQlVSTlRfQUNISUVWRVwiO1xuZXhwb3J0IGNvbnN0IFNFVF9TQVdTRUxFQl9BQ0hJRVZFID0gXCJTRVRfU0FXU0VMRUJfQUNISUVWRVwiO1xuZXhwb3J0IGNvbnN0IFNFVF9TT1VWRU5JUlNfQUNISUVWRSA9IFwiU0VUX1NPVVZFTklSU19BQ0hJRVZFXCI7XG5leHBvcnQgY29uc3QgU0VUX0hPTERfQUNISUVWRSA9IFwiU0VUX0hPTERfQUNISUVWRVwiO1xuZXhwb3J0IGNvbnN0IFNFVF9ERVNUUk9ZX0FDSElFVkUgPSBcIlNFVF9ERVNUUk9ZX0FDSElFVkVcIjtcblxuZXhwb3J0IGNvbnN0IEFERF9QSE9UT1MgPSBcIkFERF9NT1JFX1BIT1RPU1wiO1xuZXhwb3J0IGNvbnN0IEFERF9QQU5PUkFNID0gXCJBRERfUEFOT1JBTVwiO1xuXG5leHBvcnQgY29uc3QgTElLRV9QSE9UTyA9IFwiTElLRV9QSE9UT1wiO1xuZXhwb3J0IGNvbnN0IExJS0VfUEFOT1JBTSA9IFwiTElLRV9QQU5PUkFNXCI7XG4iXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/client/actions/actions.js\n");

/***/ }),

/***/ "./src/client/reducers/form-reducers.jsx":
/*!***********************************************!*\
  !*** ./src/client/reducers/form-reducers.jsx ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.achieves = exports.emotions = exports.email = exports.tel = exports.appOptions = exports.patronymic = exports.name = exports.surname = undefined;\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _actions = __webpack_require__(/*! ../actions/actions */ \"./src/client/actions/actions.js\");\n\nvar A = _interopRequireWildcard(_actions);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nconst EMPTY_STRING = \"\";\n\nconst surname = exports.surname = (state = EMPTY_STRING, action) => {\n\tswitch (action.type) {\n\t\tcase A.SET_SURNAME_VALUE:\n\t\t\treturn action.payload;\n\n\t\tcase A.RESET_FORM:\n\t\t\treturn EMPTY_STRING;\n\n\t\tdefault:\n\t\t\treturn state;\n\t}\n};\n\nconst name = exports.name = (state = EMPTY_STRING, action) => {\n\tswitch (action.type) {\n\t\tcase A.SET_NAME_VALUE:\n\t\t\treturn action.payload;\n\n\t\tcase A.RESET_FORM:\n\t\t\treturn EMPTY_STRING;\n\n\t\tdefault:\n\t\t\treturn state;\n\t}\n};\n\nconst patronymic = exports.patronymic = (state = EMPTY_STRING, action) => {\n\tswitch (action.type) {\n\t\tcase A.SET_PATRONYMIC_VALUE:\n\t\t\treturn action.payload;\n\n\t\tcase A.RESET_FORM:\n\t\t\treturn EMPTY_STRING;\n\n\t\tdefault:\n\t\t\treturn state;\n\t}\n};\n\nconst defaultApp = \"android\";\n\nconst appOptions = exports.appOptions = (state = defaultApp, action) => {\n\tswitch (action.type) {\n\t\tcase A.SET_APPOPTIONS_VALUE:\n\t\t\treturn action.payload;\n\n\t\tcase A.RESET_FORM:\n\t\t\treturn defaultApp;\n\n\t\tdefault:\n\t\t\treturn state;\n\t}\n};\n\nconst tel = exports.tel = (state = EMPTY_STRING, action) => {\n\tswitch (action.type) {\n\t\tcase A.SET_TEL_VALUE:\n\t\t\treturn action.payload;\n\n\t\tcase A.RESET_FORM:\n\t\t\treturn EMPTY_STRING;\n\n\t\tdefault:\n\t\t\treturn state;\n\t}\n};\n\nconst email = exports.email = (state = EMPTY_STRING, action) => {\n\tswitch (action.type) {\n\t\tcase A.SET_EMAIL_VALUE:\n\t\t\treturn action.payload;\n\n\t\tcase A.RESET_FORM:\n\t\t\treturn EMPTY_STRING;\n\n\t\tdefault:\n\t\t\treturn state;\n\t}\n};\n\nconst emotions = exports.emotions = (state = EMPTY_STRING, action) => {\n\tswitch (action.type) {\n\t\tcase A.SET_EMOTIONS_VALUE:\n\t\t\treturn action.payload;\n\n\t\tcase A.RESET_FORM:\n\t\t\treturn EMPTY_STRING;\n\n\t\tdefault:\n\t\t\treturn state;\n\t}\n};\n\nconst defaultAchieves = {\n\tselfie: false,\n\tburnt: true,\n\tsawseleb: false,\n\tsouvenirs: true,\n\thold: false,\n\tdestroy: false\n};\n\nconst achieves = exports.achieves = (state = defaultAchieves, action) => {\n\tswitch (action.type) {\n\t\tcase A.SET_ACHIEVE:\n\t\t\t{\n\t\t\t\tconst { value, checked } = action.payload;\n\t\t\t\tconst newState = _extends({}, state, { [value]: checked });\n\t\t\t\treturn newState;\n\t\t\t}\n\n\t\tcase A.RESET_FORM:\n\t\t\treturn defaultAchieves;\n\n\t\tdefault:\n\t\t\treturn state;\n\t}\n};\n\n/*\r\nexport const achieves = (\r\n\tstate = {\r\n\t\tselfie: false,\r\n\t\tburnt: true,\r\n\t\tsawseleb: false,\r\n\t\tsouvenirs: true,\r\n\t\thold: false,\r\n\t\tdestroy: false\r\n\t},\r\n\taction: Action\r\n) => {\r\n\tswitch (action.type) {\r\n\t\tcase A.SET_SELFIE_ACHIEVE:\r\n\t\t\treturn { ...state, selfie: action.payload };\r\n\t\tcase A.SET_BURNT_ACHIEVE:\r\n\t\t\treturn { ...state, burnt: action.payload };\r\n\t\tcase A.SET_DESTROY_ACHIEVE:\r\n\t\t\treturn { ...state, destroy: action.payload };\r\n\t\tcase A.SET_SAWSELEB_ACHIEVE:\r\n\t\t\treturn { ...state, sawseleb: action.payload };\r\n\t\tcase A.SET_SOUVENIRS_ACHIEVE:\r\n\t\t\treturn { ...state, souvenirs: action.payload };\r\n\t\tcase A.SET_HOLD_ACHIEVE:\r\n\t\t\treturn { ...state, hold: action.payload };\r\n\t\tdefault:\r\n\t\t\treturn state;\r\n\t}\r\n};\r\n\r\n*///# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY2xpZW50L3JlZHVjZXJzL2Zvcm0tcmVkdWNlcnMuanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9jbGllbnQvcmVkdWNlcnMvZm9ybS1yZWR1Y2Vycy5qc3g/N2ZhZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xyXG5cclxuaW1wb3J0ICogYXMgQSBmcm9tIFwiLi4vYWN0aW9ucy9hY3Rpb25zXCI7XHJcblxyXG5jb25zdCBFTVBUWV9TVFJJTkcgPSBcIlwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHN1cm5hbWUgPSAoc3RhdGU6IHN0cmluZyA9IEVNUFRZX1NUUklORywgYWN0aW9uOiBBY3Rpb24pID0+IHtcclxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlIEEuU0VUX1NVUk5BTUVfVkFMVUU6XHJcblx0XHRcdHJldHVybiBhY3Rpb24ucGF5bG9hZDtcclxuXHJcblx0XHRjYXNlIEEuUkVTRVRfRk9STTpcclxuXHRcdFx0cmV0dXJuIEVNUFRZX1NUUklORztcclxuXHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IG5hbWUgPSAoc3RhdGU6IHN0cmluZyA9IEVNUFRZX1NUUklORywgYWN0aW9uOiBBY3Rpb24pID0+IHtcclxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlIEEuU0VUX05BTUVfVkFMVUU6XHJcblx0XHRcdHJldHVybiBhY3Rpb24ucGF5bG9hZDtcclxuXHJcblx0XHRjYXNlIEEuUkVTRVRfRk9STTpcclxuXHRcdFx0cmV0dXJuIEVNUFRZX1NUUklORztcclxuXHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHBhdHJvbnltaWMgPSAoc3RhdGU6IHN0cmluZyA9IEVNUFRZX1NUUklORywgYWN0aW9uOiBBY3Rpb24pID0+IHtcclxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlIEEuU0VUX1BBVFJPTllNSUNfVkFMVUU6XHJcblx0XHRcdHJldHVybiBhY3Rpb24ucGF5bG9hZDtcclxuXHJcblx0XHRjYXNlIEEuUkVTRVRfRk9STTpcclxuXHRcdFx0cmV0dXJuIEVNUFRZX1NUUklORztcclxuXHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0fVxyXG59O1xyXG5cclxuY29uc3QgZGVmYXVsdEFwcCA9IFwiYW5kcm9pZFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFwcE9wdGlvbnMgPSAoXHJcblx0c3RhdGU6IFwiYW5kcm9pZFwiIHwgXCJpb3NcIiB8IFwid2luZG93c1wiID0gZGVmYXVsdEFwcCxcclxuXHRhY3Rpb246IEFjdGlvblxyXG4pID0+IHtcclxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlIEEuU0VUX0FQUE9QVElPTlNfVkFMVUU6XHJcblx0XHRcdHJldHVybiBhY3Rpb24ucGF5bG9hZDtcclxuXHJcblx0XHRjYXNlIEEuUkVTRVRfRk9STTpcclxuXHRcdFx0cmV0dXJuIGRlZmF1bHRBcHA7XHJcblxyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0cmV0dXJuIHN0YXRlO1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB0ZWwgPSAoc3RhdGU6IHN0cmluZyA9IEVNUFRZX1NUUklORywgYWN0aW9uOiBBY3Rpb24pID0+IHtcclxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlIEEuU0VUX1RFTF9WQUxVRTpcclxuXHRcdFx0cmV0dXJuIGFjdGlvbi5wYXlsb2FkO1xyXG5cclxuXHRcdGNhc2UgQS5SRVNFVF9GT1JNOlxyXG5cdFx0XHRyZXR1cm4gRU1QVFlfU1RSSU5HO1xyXG5cclxuXHRcdGRlZmF1bHQ6XHJcblx0XHRcdHJldHVybiBzdGF0ZTtcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZW1haWwgPSAoc3RhdGU6IHN0cmluZyA9IEVNUFRZX1NUUklORywgYWN0aW9uOiBBY3Rpb24pID0+IHtcclxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlIEEuU0VUX0VNQUlMX1ZBTFVFOlxyXG5cdFx0XHRyZXR1cm4gYWN0aW9uLnBheWxvYWQ7XHJcblxyXG5cdFx0Y2FzZSBBLlJFU0VUX0ZPUk06XHJcblx0XHRcdHJldHVybiBFTVBUWV9TVFJJTkc7XHJcblxyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0cmV0dXJuIHN0YXRlO1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBlbW90aW9ucyA9IChzdGF0ZTogc3RyaW5nID0gRU1QVFlfU1RSSU5HLCBhY3Rpb246IEFjdGlvbikgPT4ge1xyXG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHRcdGNhc2UgQS5TRVRfRU1PVElPTlNfVkFMVUU6XHJcblx0XHRcdHJldHVybiBhY3Rpb24ucGF5bG9hZDtcclxuXHJcblx0XHRjYXNlIEEuUkVTRVRfRk9STTpcclxuXHRcdFx0cmV0dXJuIEVNUFRZX1NUUklORztcclxuXHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0fVxyXG59O1xyXG5cclxuY29uc3QgZGVmYXVsdEFjaGlldmVzID0ge1xyXG5cdHNlbGZpZTogZmFsc2UsXHJcblx0YnVybnQ6IHRydWUsXHJcblx0c2F3c2VsZWI6IGZhbHNlLFxyXG5cdHNvdXZlbmlyczogdHJ1ZSxcclxuXHRob2xkOiBmYWxzZSxcclxuXHRkZXN0cm95OiBmYWxzZVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGFjaGlldmVzID0gKHN0YXRlOiBPYmplY3QgPSBkZWZhdWx0QWNoaWV2ZXMsIGFjdGlvbjogQWN0aW9uKSA9PiB7XHJcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cdFx0Y2FzZSBBLlNFVF9BQ0hJRVZFOiB7XHJcblx0XHRcdGNvbnN0IHsgdmFsdWUsIGNoZWNrZWQgfSA9IGFjdGlvbi5wYXlsb2FkO1xyXG5cdFx0XHRjb25zdCBuZXdTdGF0ZSA9IHsgLi4uc3RhdGUsIFt2YWx1ZV06IGNoZWNrZWQgfTtcclxuXHRcdFx0cmV0dXJuIG5ld1N0YXRlO1xyXG5cdFx0fVxyXG5cclxuXHRcdGNhc2UgQS5SRVNFVF9GT1JNOlxyXG5cdFx0XHRyZXR1cm4gZGVmYXVsdEFjaGlldmVzO1xyXG5cclxuXHRcdGRlZmF1bHQ6XHJcblx0XHRcdHJldHVybiBzdGF0ZTtcclxuXHR9XHJcbn07XHJcblxyXG4vKlxyXG5leHBvcnQgY29uc3QgYWNoaWV2ZXMgPSAoXHJcblx0c3RhdGUgPSB7XHJcblx0XHRzZWxmaWU6IGZhbHNlLFxyXG5cdFx0YnVybnQ6IHRydWUsXHJcblx0XHRzYXdzZWxlYjogZmFsc2UsXHJcblx0XHRzb3V2ZW5pcnM6IHRydWUsXHJcblx0XHRob2xkOiBmYWxzZSxcclxuXHRcdGRlc3Ryb3k6IGZhbHNlXHJcblx0fSxcclxuXHRhY3Rpb246IEFjdGlvblxyXG4pID0+IHtcclxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlIEEuU0VUX1NFTEZJRV9BQ0hJRVZFOlxyXG5cdFx0XHRyZXR1cm4geyAuLi5zdGF0ZSwgc2VsZmllOiBhY3Rpb24ucGF5bG9hZCB9O1xyXG5cdFx0Y2FzZSBBLlNFVF9CVVJOVF9BQ0hJRVZFOlxyXG5cdFx0XHRyZXR1cm4geyAuLi5zdGF0ZSwgYnVybnQ6IGFjdGlvbi5wYXlsb2FkIH07XHJcblx0XHRjYXNlIEEuU0VUX0RFU1RST1lfQUNISUVWRTpcclxuXHRcdFx0cmV0dXJuIHsgLi4uc3RhdGUsIGRlc3Ryb3k6IGFjdGlvbi5wYXlsb2FkIH07XHJcblx0XHRjYXNlIEEuU0VUX1NBV1NFTEVCX0FDSElFVkU6XHJcblx0XHRcdHJldHVybiB7IC4uLnN0YXRlLCBzYXdzZWxlYjogYWN0aW9uLnBheWxvYWQgfTtcclxuXHRcdGNhc2UgQS5TRVRfU09VVkVOSVJTX0FDSElFVkU6XHJcblx0XHRcdHJldHVybiB7IC4uLnN0YXRlLCBzb3V2ZW5pcnM6IGFjdGlvbi5wYXlsb2FkIH07XHJcblx0XHRjYXNlIEEuU0VUX0hPTERfQUNISUVWRTpcclxuXHRcdFx0cmV0dXJuIHsgLi4uc3RhdGUsIGhvbGQ6IGFjdGlvbi5wYXlsb2FkIH07XHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0fVxyXG59O1xyXG5cclxuKi9cclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFQTtBQUNBO0FBREE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFYQTtBQWFBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/client/reducers/form-reducers.jsx\n");

/***/ }),

/***/ "./src/client/reducers/reducers.js":
/*!*****************************************!*\
  !*** ./src/client/reducers/reducers.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _actions = __webpack_require__(/*! ../actions/actions */ \"./src/client/actions/actions.js\");\n\nvar A = _interopRequireWildcard(_actions);\n\nvar _formReducers = __webpack_require__(/*! ./form-reducers.jsx */ \"./src/client/reducers/form-reducers.jsx\");\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\n/*\r\nconst userInfo = (state = null, action: Action) => {\r\n\tif (action.type === SHOW_USER_INFO) {\r\n\t\treturn action.payload;\r\n\t}\r\n\treturn state;\r\n};\r\n\r\nconst userInfoLoadingStatus = (state = '', action: Action) => {\r\n\tif (action.type === SET_USER_INFO_LOADING_STATUS) {\r\n\t\treturn action.payload;\r\n\t}\r\n\treturn state;\r\n};\r\n*/\n\nconst panoram = (state = null, action) => {\n\tswitch (action.type) {\n\t\tcase A.ADD_PANORAM:\n\t\t\treturn _extends({}, action.payload);\n\t\tcase A.LIKE_PANORAM:\n\t\t\treturn _extends({}, state, {\n\t\t\t\tliked: action.payload,\n\t\t\t\tlikes: action.payload === true ? state.likes + 1 : state.likes - 1\n\t\t\t});\n\t\tdefault:\n\t\t\treturn state;\n\t}\n};\n\nconst photo = (state = {}, action) => {\n\tswitch (action.type) {\n\t\tcase A.LIKE_PHOTO:\n\t\t\tconsole.log(action.payload);\n\t\t\treturn _extends({}, state, {\n\t\t\t\tliked: action.payload.liked,\n\t\t\t\tlikes: action.payload.liked === true ? state.likes + 1 : state.likes - 1\n\t\t\t});\n\t\tdefault:\n\t\t\treturn state;\n\t}\n};\n\nconst gallery = (state = [], action) => {\n\tswitch (action.type) {\n\t\tcase A.ADD_PHOTOS:\n\t\t\treturn [...state, ...action.payload];\n\t\tcase A.LIKE_PHOTO:\n\t\t\treturn state.map(ph => {\n\t\t\t\tif (ph.id === action.payload.id) {\n\t\t\t\t\treturn photo(ph, action);\n\t\t\t\t}\n\t\t\t\treturn ph;\n\t\t\t});\n\t\tdefault:\n\t\t\treturn state;\n\t}\n};\n\n// сохраняет количество уже загруженных фотографий\n\nconst isMobileMenuOpened = (state = true, action) => {\n\tif (action.type === A.OPEN_CLOSE_MOBILE_MENU) {\n\t\treturn action.payload;\n\t}\n\treturn state;\n};\n\nconst viewportVersion = (state = 'mobile', action) => {\n\tif (action.type === A.SET_VIEWPORT_VERSION) {\n\t\treturn action.payload;\n\t}\n\treturn state;\n};\n\nconst SomeVariable = (state = 'initialized', action) => {\n\tif (action.type === A.CHANGE_VAR) {\n\t\treturn action.payload;\n\t}\n\treturn state;\n};\n\nconst rootReducer = (0, _redux.combineReducers)({\n\tisMobileMenuOpened,\n\tviewportVersion,\n\tSomeVariable,\n\tpanoram,\n\tgallery,\n\tsurname: _formReducers.surname,\n\tname: _formReducers.name,\n\tpatronymic: _formReducers.patronymic,\n\tappOptions: _formReducers.appOptions,\n\ttel: _formReducers.tel,\n\temail: _formReducers.email,\n\temotions: _formReducers.emotions,\n\tachieves: _formReducers.achieves\n});\n\nexports.default = rootReducer;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY2xpZW50L3JlZHVjZXJzL3JlZHVjZXJzLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9jbGllbnQvcmVkdWNlcnMvcmVkdWNlcnMuanM/ZjhlNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xyXG5cclxuaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgKiBhcyBBIGZyb20gJy4uL2FjdGlvbnMvYWN0aW9ucyc7XHJcbmltcG9ydCB7XHJcblx0c3VybmFtZSxcclxuXHRuYW1lLFxyXG5cdHBhdHJvbnltaWMsXHJcblx0YXBwT3B0aW9ucyxcclxuXHR0ZWwsXHJcblx0ZW1haWwsXHJcblx0ZW1vdGlvbnMsXHJcblx0YWNoaWV2ZXNcclxufSBmcm9tICcuL2Zvcm0tcmVkdWNlcnMuanN4JztcclxuXHJcbi8qXHJcbmNvbnN0IHVzZXJJbmZvID0gKHN0YXRlID0gbnVsbCwgYWN0aW9uOiBBY3Rpb24pID0+IHtcclxuXHRpZiAoYWN0aW9uLnR5cGUgPT09IFNIT1dfVVNFUl9JTkZPKSB7XHJcblx0XHRyZXR1cm4gYWN0aW9uLnBheWxvYWQ7XHJcblx0fVxyXG5cdHJldHVybiBzdGF0ZTtcclxufTtcclxuXHJcbmNvbnN0IHVzZXJJbmZvTG9hZGluZ1N0YXR1cyA9IChzdGF0ZSA9ICcnLCBhY3Rpb246IEFjdGlvbikgPT4ge1xyXG5cdGlmIChhY3Rpb24udHlwZSA9PT0gU0VUX1VTRVJfSU5GT19MT0FESU5HX1NUQVRVUykge1xyXG5cdFx0cmV0dXJuIGFjdGlvbi5wYXlsb2FkO1xyXG5cdH1cclxuXHRyZXR1cm4gc3RhdGU7XHJcbn07XHJcbiovXHJcblxyXG5jb25zdCBwYW5vcmFtID0gKHN0YXRlID0gbnVsbCwgYWN0aW9uOiBBY3Rpb24pID0+IHtcclxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlIEEuQUREX1BBTk9SQU06XHJcblx0XHRcdHJldHVybiB7IC4uLmFjdGlvbi5wYXlsb2FkIH07XHJcblx0XHRjYXNlIEEuTElLRV9QQU5PUkFNOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGxpa2VkOiBhY3Rpb24ucGF5bG9hZCxcclxuXHRcdFx0XHRsaWtlczpcclxuXHRcdFx0XHRcdGFjdGlvbi5wYXlsb2FkID09PSB0cnVlID8gc3RhdGUubGlrZXMgKyAxIDogc3RhdGUubGlrZXMgLSAxXHJcblx0XHRcdH07XHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0fVxyXG59O1xyXG5cclxuY29uc3QgcGhvdG8gPSAoc3RhdGUgPSB7fSwgYWN0aW9uOiBBY3Rpb24pID0+IHtcclxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlIEEuTElLRV9QSE9UTzpcclxuXHRcdFx0Y29uc29sZS5sb2coYWN0aW9uLnBheWxvYWQpO1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGxpa2VkOiBhY3Rpb24ucGF5bG9hZC5saWtlZCxcclxuXHRcdFx0XHRsaWtlczpcclxuXHRcdFx0XHRcdGFjdGlvbi5wYXlsb2FkLmxpa2VkID09PSB0cnVlXHJcblx0XHRcdFx0XHRcdD8gc3RhdGUubGlrZXMgKyAxXHJcblx0XHRcdFx0XHRcdDogc3RhdGUubGlrZXMgLSAxXHJcblx0XHRcdH07XHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0fVxyXG59O1xyXG5cclxuY29uc3QgZ2FsbGVyeSA9IChzdGF0ZSA9IFtdLCBhY3Rpb246IEFjdGlvbikgPT4ge1xyXG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHRcdGNhc2UgQS5BRERfUEhPVE9TOlxyXG5cdFx0XHRyZXR1cm4gWy4uLnN0YXRlLCAuLi5hY3Rpb24ucGF5bG9hZF07XHJcblx0XHRjYXNlIEEuTElLRV9QSE9UTzpcclxuXHRcdFx0cmV0dXJuIHN0YXRlLm1hcChwaCA9PiB7XHJcblx0XHRcdFx0aWYgKHBoLmlkID09PSBhY3Rpb24ucGF5bG9hZC5pZCkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIHBob3RvKHBoLCBhY3Rpb24pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXR1cm4gcGg7XHJcblx0XHRcdH0pO1xyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0cmV0dXJuIHN0YXRlO1xyXG5cdH1cclxufTtcclxuXHJcbi8vINGB0L7RhdGA0LDQvdGP0LXRgiDQutC+0LvQuNGH0LXRgdGC0LLQviDRg9C20LUg0LfQsNCz0YDRg9C20LXQvdC90YvRhSDRhNC+0YLQvtCz0YDQsNGE0LjQuVxyXG5cclxuY29uc3QgaXNNb2JpbGVNZW51T3BlbmVkID0gKHN0YXRlID0gdHJ1ZSwgYWN0aW9uOiBBY3Rpb24pID0+IHtcclxuXHRpZiAoYWN0aW9uLnR5cGUgPT09IEEuT1BFTl9DTE9TRV9NT0JJTEVfTUVOVSkge1xyXG5cdFx0cmV0dXJuIGFjdGlvbi5wYXlsb2FkO1xyXG5cdH1cclxuXHRyZXR1cm4gc3RhdGU7XHJcbn07XHJcblxyXG5jb25zdCB2aWV3cG9ydFZlcnNpb24gPSAoc3RhdGUgPSAnbW9iaWxlJywgYWN0aW9uOiBBY3Rpb24pID0+IHtcclxuXHRpZiAoYWN0aW9uLnR5cGUgPT09IEEuU0VUX1ZJRVdQT1JUX1ZFUlNJT04pIHtcclxuXHRcdHJldHVybiBhY3Rpb24ucGF5bG9hZDtcclxuXHR9XHJcblx0cmV0dXJuIHN0YXRlO1xyXG59O1xyXG5cclxuY29uc3QgU29tZVZhcmlhYmxlID0gKHN0YXRlID0gJ2luaXRpYWxpemVkJywgYWN0aW9uOiBPYmplY3QpID0+IHtcclxuXHRpZiAoYWN0aW9uLnR5cGUgPT09IEEuQ0hBTkdFX1ZBUikge1xyXG5cdFx0cmV0dXJuIGFjdGlvbi5wYXlsb2FkO1xyXG5cdH1cclxuXHRyZXR1cm4gc3RhdGU7XHJcbn07XHJcblxyXG5jb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcblx0aXNNb2JpbGVNZW51T3BlbmVkLFxyXG5cdHZpZXdwb3J0VmVyc2lvbixcclxuXHRTb21lVmFyaWFibGUsXHJcblx0cGFub3JhbSxcclxuXHRnYWxsZXJ5LFxyXG5cdHN1cm5hbWUsXHJcblx0bmFtZSxcclxuXHRwYXRyb255bWljLFxyXG5cdGFwcE9wdGlvbnMsXHJcblx0dGVsLFxyXG5cdGVtYWlsLFxyXG5cdGVtb3Rpb25zLFxyXG5cdGFjaGlldmVzXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7XHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBOzs7QUFVQTs7Ozs7Ozs7Ozs7Ozs7OztBQWdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBWEE7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFIQTtBQVFBO0FBQ0E7QUFaQTtBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVhBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBYkE7QUFDQTtBQWVBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/client/reducers/reducers.js\n");

/***/ }),

/***/ "./src/helpers/createStore.js":
/*!************************************!*\
  !*** ./src/helpers/createStore.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _reduxThunk = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n\nvar _reduxThunk2 = _interopRequireDefault(_reduxThunk);\n\nvar _axios = __webpack_require__(/*! axios */ \"axios\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nvar _reducers = __webpack_require__(/*! ../client/reducers/reducers */ \"./src/client/reducers/reducers.js\");\n\nvar _reducers2 = _interopRequireDefault(_reducers);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = req => {\n\t// создать api-сервер\n\tconst axiosInstance = _axios2.default.create({\n\t\tbaseURL: 'http://react-ssr-api.herokuapp.com',\n\t\theaders: { cookie: req.get('cookie') || '' }\n\t});\n\n\t// создаем хранилище как на клиенте\n\tconst store = (0, _redux.createStore)(_reducers2.default, {}, (0, _redux.applyMiddleware)(_reduxThunk2.default.withExtraArgument(axiosInstance)));\n\n\treturn store;\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaGVscGVycy9jcmVhdGVTdG9yZS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvaGVscGVycy9jcmVhdGVTdG9yZS5qcz9lZDVlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB0aHVuayBmcm9tICdyZWR1eC10aHVuayc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCByZWR1Y2VycyBmcm9tICcuLi9jbGllbnQvcmVkdWNlcnMvcmVkdWNlcnMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVxID0+IHtcclxuXHQvLyDRgdC+0LfQtNCw0YLRjCBhcGkt0YHQtdGA0LLQtdGAXHJcblx0Y29uc3QgYXhpb3NJbnN0YW5jZSA9IGF4aW9zLmNyZWF0ZSh7XHJcblx0XHRiYXNlVVJMOiAnaHR0cDovL3JlYWN0LXNzci1hcGkuaGVyb2t1YXBwLmNvbScsXHJcblx0XHRoZWFkZXJzOiB7IGNvb2tpZTogcmVxLmdldCgnY29va2llJykgfHwgJycgfVxyXG5cdH0pO1xyXG5cclxuXHQvLyDRgdC+0LfQtNCw0LXQvCDRhdGA0LDQvdC40LvQuNGJ0LUg0LrQsNC6INC90LAg0LrQu9C40LXQvdGC0LVcclxuXHRjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKFxyXG5cdFx0cmVkdWNlcnMsXHJcblx0XHR7fSxcclxuXHRcdGFwcGx5TWlkZGxld2FyZSh0aHVuay53aXRoRXh0cmFBcmd1bWVudChheGlvc0luc3RhbmNlKSlcclxuXHQpO1xyXG5cclxuXHRyZXR1cm4gc3RvcmU7XHJcbn07XHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFLQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/helpers/createStore.js\n");

/***/ }),

/***/ "./src/helpers/renderer.js":
/*!*********************************!*\
  !*** ./src/helpers/renderer.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _server = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _reactHelmet = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n\nvar _serializeJavascript = __webpack_require__(/*! serialize-javascript */ \"serialize-javascript\");\n\nvar _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);\n\nvar _Routes = __webpack_require__(/*! ../../client/Routes */ \"./client/Routes.js\");\n\nvar _Routes2 = _interopRequireDefault(_Routes);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = (req, store, context) => {\n  /*\r\n  const content = renderToString(\r\n    <Provider store={store}>\r\n      <StaticRouter location={req.path} context={context}>\r\n        <div>{renderRoutes(Routes)}</div>\r\n      </StaticRouter>\r\n    </Provider>\r\n  );\r\n  */\n\n  const content = (0, _server.renderToString)(_react2.default.createElement(\n    _reactRouterDom.StaticRouter,\n    { location: req.path, context: context },\n    _react2.default.createElement(\n      'div',\n      null,\n      (0, _reactRouterConfig.renderRoutes)(_Routes2.default)\n    )\n  ));\n\n  const helmet = _reactHelmet.Helmet.renderStatic();\n\n  return `\n  <html>\n    <head>\n    ${helmet.title.toString()}\n    ${helmet.meta.toString()}\n      <link rel=\"stylesheet\" href=\"main.css\">\n      <link rel=\"shortcut icon\" href=\"/favicon-96x96.png\">\n    </head>\n    <body className=\"noHover\">\n      <div id=\"root\">${content}</div>\n      <div>${JSON.stringify(context)}</div>\n      \n      <script src=\"client-bundle.js\"></script>\n    </body>\n  </html> \n  `;\n};\n/* \r\n<script>\r\n        window.INITIAL_STATE = ${JSON.stringify(store.getState())}\r\n      </script>\r\n\r\n      *///# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaGVscGVycy9yZW5kZXJlci5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvaGVscGVycy9yZW5kZXJlci5qcz9kNDYxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSAncmVhY3QtZG9tL3NlcnZlcic7XHJcbmltcG9ydCB7IFN0YXRpY1JvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyByZW5kZXJSb3V0ZXMgfSBmcm9tICdyZWFjdC1yb3V0ZXItY29uZmlnJztcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IEhlbG1ldCB9IGZyb20gJ3JlYWN0LWhlbG1ldCc7XHJcbmltcG9ydCBzZXJpYWxpemUgZnJvbSAnc2VyaWFsaXplLWphdmFzY3JpcHQnO1xyXG5pbXBvcnQgUm91dGVzIGZyb20gJy4uLy4uL2NsaWVudC9Sb3V0ZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHJlcSwgc3RvcmUsIGNvbnRleHQpID0+IHtcclxuICAvKlxyXG4gIGNvbnN0IGNvbnRlbnQgPSByZW5kZXJUb1N0cmluZyhcclxuICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxyXG4gICAgICA8U3RhdGljUm91dGVyIGxvY2F0aW9uPXtyZXEucGF0aH0gY29udGV4dD17Y29udGV4dH0+XHJcbiAgICAgICAgPGRpdj57cmVuZGVyUm91dGVzKFJvdXRlcyl9PC9kaXY+XHJcbiAgICAgIDwvU3RhdGljUm91dGVyPlxyXG4gICAgPC9Qcm92aWRlcj5cclxuICApO1xyXG4qL1xyXG5cclxuICBjb25zdCBjb250ZW50ID0gcmVuZGVyVG9TdHJpbmcoXHJcbiAgICA8U3RhdGljUm91dGVyIGxvY2F0aW9uPXtyZXEucGF0aH0gY29udGV4dD17Y29udGV4dH0+XHJcbiAgICAgIDxkaXY+e3JlbmRlclJvdXRlcyhSb3V0ZXMpfTwvZGl2PlxyXG4gICAgPC9TdGF0aWNSb3V0ZXI+XHJcbiAgKTtcclxuXHJcbiAgY29uc3QgaGVsbWV0ID0gSGVsbWV0LnJlbmRlclN0YXRpYygpO1xyXG5cclxuICByZXR1cm4gYFxyXG4gIDxodG1sPlxyXG4gICAgPGhlYWQ+XHJcbiAgICAke2hlbG1ldC50aXRsZS50b1N0cmluZygpfVxyXG4gICAgJHtoZWxtZXQubWV0YS50b1N0cmluZygpfVxyXG4gICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIm1haW4uY3NzXCI+XHJcbiAgICAgIDxsaW5rIHJlbD1cInNob3J0Y3V0IGljb25cIiBocmVmPVwiL2Zhdmljb24tOTZ4OTYucG5nXCI+XHJcbiAgICA8L2hlYWQ+XHJcbiAgICA8Ym9keSBjbGFzc05hbWU9XCJub0hvdmVyXCI+XHJcbiAgICAgIDxkaXYgaWQ9XCJyb290XCI+JHtjb250ZW50fTwvZGl2PlxyXG4gICAgICA8ZGl2PiR7SlNPTi5zdHJpbmdpZnkoY29udGV4dCl9PC9kaXY+XHJcbiAgICAgIFxyXG4gICAgICA8c2NyaXB0IHNyYz1cImNsaWVudC1idW5kbGUuanNcIj48L3NjcmlwdD5cclxuICAgIDwvYm9keT5cclxuICA8L2h0bWw+IFxyXG4gIGA7XHJcbn07XHJcbi8qIFxyXG48c2NyaXB0PlxyXG4gICAgICAgIHdpbmRvdy5JTklUSUFMX1NUQVRFID0gJHtKU09OLnN0cmluZ2lmeShzdG9yZS5nZXRTdGF0ZSgpKX1cclxuICAgICAgPC9zY3JpcHQ+XHJcblxyXG4gICAgICAqL1xyXG4iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FBVUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBOzs7O0FBWEE7QUFnQkE7QUFDQTs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/helpers/renderer.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! babel-polyfill */ \"babel-polyfill\");\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nvar _expressHttpProxy = __webpack_require__(/*! express-http-proxy */ \"express-http-proxy\");\n\nvar _expressHttpProxy2 = _interopRequireDefault(_expressHttpProxy);\n\nvar _Routes = __webpack_require__(/*! ../client/Routes */ \"./client/Routes.js\");\n\nvar _Routes2 = _interopRequireDefault(_Routes);\n\nvar _renderer = __webpack_require__(/*! ./helpers/renderer */ \"./src/helpers/renderer.js\");\n\nvar _renderer2 = _interopRequireDefault(_renderer);\n\nvar _createStore = __webpack_require__(/*! ./helpers/createStore */ \"./src/helpers/createStore.js\");\n\nvar _createStore2 = _interopRequireDefault(_createStore);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst app = (0, _express2.default)(); // x\n\n// позволяет использовать async/await\n\n\napp.use(_express2.default.static('client/public'));\n\napp.get('*', (req, res) => {\n\tconsole.log('запрос ресурса ', req.url);\n\n\tconst store = (0, _createStore2.default)(req);\n\n\t// вызываем функцию, проверяющую список нужных компонентов до вызова рендеринга. Извлекаем свойство route у каждого такого объекта, если оно есть. Возвращаем массив промизов- диспетчингов хранилища\n\tconst promises = (0, _reactRouterConfig.matchRoutes)(_Routes2.default, req.path).map(({ route }) => route.loadData ? route.loadData(store) : null).map(promise => {\n\t\tif (promise) {\n\t\t\treturn new Promise((resolve, reject) => {\n\t\t\t\tpromise.then(resolve).catch(resolve);\n\t\t\t});\n\t\t}\n\t});\n\n\tPromise.all(promises).then(() => {\n\t\t// создаем пустой контекст перед рендерингом\n\t\tconst context = {};\n\n\t\t// затем, когда все начальные данные подгружены, с созданным хранилищем и вызываем renderer, передав ему также контекст\n\t\tconst content = (0, _renderer2.default)(req, store, context);\n\n\t\t// проверка на наличие редиректа\n\t\tif (context.url) {\n\t\t\tconsole.log('доступ невозможен, перенаправляю');\n\t\t\treturn res.redirect(301, context.url);\n\t\t}\n\n\t\t// проверка на несуществующую страницу\n\t\tif (context.notFound) {\n\t\t\tres.status(404);\n\t\t}\n\n\t\tres.send(content);\n\t});\n});\n\nconst PORT = process.env.PORT || 7000;\n\napp.listen(PORT, () => {\n\tconsole.log('listening on', PORT);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2luZGV4LmpzPzEyZDUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8geEBmbG93XHJcblxyXG4vLyDQv9C+0LfQstC+0LvRj9C10YIg0LjRgdC/0L7Qu9GM0LfQvtCy0LDRgtGMIGFzeW5jL2F3YWl0XHJcbmltcG9ydCAnYmFiZWwtcG9seWZpbGwnO1xyXG5pbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcclxuaW1wb3J0IHsgbWF0Y2hSb3V0ZXMgfSBmcm9tICdyZWFjdC1yb3V0ZXItY29uZmlnJztcclxuaW1wb3J0IHByb3h5IGZyb20gJ2V4cHJlc3MtaHR0cC1wcm94eSc7XHJcbmltcG9ydCBSb3V0ZXMgZnJvbSAnLi4vY2xpZW50L1JvdXRlcyc7XHJcbmltcG9ydCByZW5kZXJlciBmcm9tICcuL2hlbHBlcnMvcmVuZGVyZXInO1xyXG5pbXBvcnQgY3JlYXRlU3RvcmUgZnJvbSAnLi9oZWxwZXJzL2NyZWF0ZVN0b3JlJztcclxuXHJcbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcclxuXHJcbmFwcC51c2UoZXhwcmVzcy5zdGF0aWMoJ2NsaWVudC9wdWJsaWMnKSk7XHJcblxyXG5hcHAuZ2V0KCcqJywgKHJlcSwgcmVzKSA9PiB7XHJcblx0Y29uc29sZS5sb2coJ9C30LDQv9GA0L7RgSDRgNC10YHRg9GA0YHQsCAnLCByZXEudXJsKTtcclxuXHJcblx0Y29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZXEpO1xyXG5cclxuXHQvLyDQstGL0LfRi9Cy0LDQtdC8INGE0YPQvdC60YbQuNGOLCDQv9GA0L7QstC10YDRj9GO0YnRg9GOINGB0L/QuNGB0L7QuiDQvdGD0LbQvdGL0YUg0LrQvtC80L/QvtC90LXQvdGC0L7QsiDQtNC+INCy0YvQt9C+0LLQsCDRgNC10L3QtNC10YDQuNC90LPQsC4g0JjQt9Cy0LvQtdC60LDQtdC8INGB0LLQvtC50YHRgtCy0L4gcm91dGUg0YMg0LrQsNC20LTQvtCz0L4g0YLQsNC60L7Qs9C+INC+0LHRitC10LrRgtCwLCDQtdGB0LvQuCDQvtC90L4g0LXRgdGC0YwuINCS0L7Qt9Cy0YDQsNGJ0LDQtdC8INC80LDRgdGB0LjQsiDQv9GA0L7QvNC40LfQvtCyLSDQtNC40YHQv9C10YLRh9C40L3Qs9C+0LIg0YXRgNCw0L3QuNC70LjRidCwXHJcblx0Y29uc3QgcHJvbWlzZXMgPSBtYXRjaFJvdXRlcyhSb3V0ZXMsIHJlcS5wYXRoKVxyXG5cdFx0Lm1hcCgoeyByb3V0ZSB9KSA9PiAocm91dGUubG9hZERhdGEgPyByb3V0ZS5sb2FkRGF0YShzdG9yZSkgOiBudWxsKSlcclxuXHRcdC5tYXAocHJvbWlzZSA9PiB7XHJcblx0XHRcdGlmIChwcm9taXNlKSB7XHJcblx0XHRcdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHRcdFx0XHRcdHByb21pc2UudGhlbihyZXNvbHZlKS5jYXRjaChyZXNvbHZlKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblxyXG5cdFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKCgpID0+IHtcclxuXHRcdC8vINGB0L7Qt9C00LDQtdC8INC/0YPRgdGC0L7QuSDQutC+0L3RgtC10LrRgdGCINC/0LXRgNC10LQg0YDQtdC90LTQtdGA0LjQvdCz0L7QvFxyXG5cdFx0Y29uc3QgY29udGV4dCA9IHt9O1xyXG5cclxuXHRcdC8vINC30LDRgtC10LwsINC60L7Qs9C00LAg0LLRgdC1INC90LDRh9Cw0LvRjNC90YvQtSDQtNCw0L3QvdGL0LUg0L/QvtC00LPRgNGD0LbQtdC90YssINGBINGB0L7Qt9C00LDQvdC90YvQvCDRhdGA0LDQvdC40LvQuNGJ0LXQvCDQuCDQstGL0LfRi9Cy0LDQtdC8IHJlbmRlcmVyLCDQv9C10YDQtdC00LDQsiDQtdC80YMg0YLQsNC60LbQtSDQutC+0L3RgtC10LrRgdGCXHJcblx0XHRjb25zdCBjb250ZW50ID0gcmVuZGVyZXIocmVxLCBzdG9yZSwgY29udGV4dCk7XHJcblxyXG5cdFx0Ly8g0L/RgNC+0LLQtdGA0LrQsCDQvdCwINC90LDQu9C40YfQuNC1INGA0LXQtNC40YDQtdC60YLQsFxyXG5cdFx0aWYgKGNvbnRleHQudXJsKSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCfQtNC+0YHRgtGD0L8g0L3QtdCy0L7Qt9C80L7QttC10L0sINC/0LXRgNC10L3QsNC/0YDQsNCy0LvRj9GOJyk7XHJcblx0XHRcdHJldHVybiByZXMucmVkaXJlY3QoMzAxLCBjb250ZXh0LnVybCk7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8g0L/RgNC+0LLQtdGA0LrQsCDQvdCwINC90LXRgdGD0YnQtdGB0YLQstGD0Y7RidGD0Y4g0YHRgtGA0LDQvdC40YbRg1xyXG5cdFx0aWYgKGNvbnRleHQubm90Rm91bmQpIHtcclxuXHRcdFx0cmVzLnN0YXR1cyg0MDQpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJlcy5zZW5kKGNvbnRlbnQpO1xyXG5cdH0pO1xyXG59KTtcclxuXHJcbmNvbnN0IFBPUlQgPSBwcm9jZXNzLmVudi5QT1JUIHx8IDcwMDA7XHJcblxyXG5hcHAubGlzdGVuKFBPUlQsICgpID0+IHtcclxuXHRjb25zb2xlLmxvZygnbGlzdGVuaW5nIG9uJywgUE9SVCk7XHJcbn0pO1xyXG4iXSwibWFwcGluZ3MiOiI7O0FBR0E7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFWQTtBQUNBO0FBQ0E7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///axios\n");

/***/ }),

/***/ "babel-polyfill":
/*!*********************************!*\
  !*** external "babel-polyfill" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-polyfill\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFiZWwtcG9seWZpbGwuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiYWJlbC1wb2x5ZmlsbFwiPzYzNjIiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmFiZWwtcG9seWZpbGxcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///babel-polyfill\n");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwcmVzcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIj8yMmZlIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///express\n");

/***/ }),

/***/ "express-http-proxy":
/*!*************************************!*\
  !*** external "express-http-proxy" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-http-proxy\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwcmVzcy1odHRwLXByb3h5LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzcy1odHRwLXByb3h5XCI/NDYyMSJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzLWh0dHAtcHJveHlcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///express-http-proxy\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhY3QtZG9tL3NlcnZlci5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWRvbS9zZXJ2ZXJcIj85NDM5Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRvbS9zZXJ2ZXJcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///react-dom/server\n");

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-helmet\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhY3QtaGVsbWV0LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaGVsbWV0XCI/YzlkMCJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1oZWxtZXRcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///react-helmet\n");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhY3QtcmVkdXguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiPzc4Y2QiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///react-redux\n");

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-config\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhY3Qtcm91dGVyLWNvbmZpZy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJvdXRlci1jb25maWdcIj81MzRhIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJvdXRlci1jb25maWdcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///react-router-config\n");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhY3Qtcm91dGVyLWRvbS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJvdXRlci1kb21cIj81M2I5Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJvdXRlci1kb21cIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///react-router-dom\n");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVkdXguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiP2QzMjUiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///redux\n");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVkdXgtdGh1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC10aHVua1wiPzg4MDgiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtdGh1bmtcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///redux-thunk\n");

/***/ }),

/***/ "serialize-javascript":
/*!***************************************!*\
  !*** external "serialize-javascript" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"serialize-javascript\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VyaWFsaXplLWphdmFzY3JpcHQuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzZXJpYWxpemUtamF2YXNjcmlwdFwiPzE2ZjkiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2VyaWFsaXplLWphdmFzY3JpcHRcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///serialize-javascript\n");

/***/ })

/******/ });