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

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_onsenui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-onsenui */ \"./node_modules/react-onsenui/dist/react-onsenui.js\");\n/* harmony import */ var react_onsenui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_onsenui__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Tabs_Tab1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Tabs/Tab1 */ \"./src/Tabs/Tab1.tsx\");\n/* harmony import */ var _Tabs_Tab2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Tabs/Tab2 */ \"./src/Tabs/Tab2.tsx\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar __assign = (undefined && undefined.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\n\n\n\n\n\nvar MyTab = /** @class */ (function (_super) {\n    __extends(MyTab, _super);\n    function MyTab() {\n        return _super !== null && _super.apply(this, arguments) || this;\n    }\n    MyTab.prototype.render = function () {\n        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_onsenui__WEBPACK_IMPORTED_MODULE_2__.Page, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"section\", { children: this.props.content }) }));\n    };\n    return MyTab;\n}(react__WEBPACK_IMPORTED_MODULE_1__.Component));\nvar App = /** @class */ (function (_super) {\n    __extends(App, _super);\n    function App(props) {\n        var _this = _super.call(this, props) || this;\n        _this.state = {\n            index: 0,\n        };\n        return _this;\n    }\n    App.prototype.renderToolbar = function () {\n        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_onsenui__WEBPACK_IMPORTED_MODULE_2__.Toolbar, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", __assign({ className: \"center\" }, { children: \"Fake Charger\" })) }));\n    };\n    App.prototype.renderTabs = function () {\n        return [\n            {\n                content: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MyTab, { content: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Tabs_Tab1__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}) }),\n                tab: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_onsenui__WEBPACK_IMPORTED_MODULE_2__.Tab, { label: \"Charger\" }),\n            },\n            {\n                content: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MyTab, { content: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Tabs_Tab2__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}) }),\n                tab: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_onsenui__WEBPACK_IMPORTED_MODULE_2__.Tab, { label: \"Battery\" }),\n            },\n        ];\n    };\n    App.prototype.render = function () {\n        var _this = this;\n        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_onsenui__WEBPACK_IMPORTED_MODULE_2__.Page, __assign({ renderToolbar: this.renderToolbar }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_onsenui__WEBPACK_IMPORTED_MODULE_2__.Tabbar, { swipeable: true, position: \"auto\", index: this.state.index, \n                // @ts-ignore\n                onPreChange: function (event) {\n                    if (event.index != _this.state.index) {\n                        _this.setState({ index: event.index });\n                    }\n                }, renderTabs: this.renderTabs }) })));\n    };\n    return App;\n}(react__WEBPACK_IMPORTED_MODULE_1__.Component));\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n\n//# sourceURL=webpack://your-name-here/./src/App.tsx?");

/***/ }),

/***/ "./src/NoRoot.tsx":
/*!************************!*\
  !*** ./src/NoRoot.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_onsenui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-onsenui */ \"./node_modules/react-onsenui/dist/react-onsenui.js\");\n/* harmony import */ var react_onsenui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_onsenui__WEBPACK_IMPORTED_MODULE_2__);\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar __assign = (undefined && undefined.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\n\n\n\nvar NoRoot = /** @class */ (function (_super) {\n    __extends(NoRoot, _super);\n    function NoRoot() {\n        return _super !== null && _super.apply(this, arguments) || this;\n    }\n    NoRoot.prototype.renderToolbar = function () {\n        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_onsenui__WEBPACK_IMPORTED_MODULE_2__.Toolbar, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", __assign({ className: \"center\" }, { children: \"No Root\" })) }));\n    };\n    NoRoot.prototype.render = function () {\n        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_onsenui__WEBPACK_IMPORTED_MODULE_2__.Page, __assign({ renderToolbar: this.renderToolbar }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_onsenui__WEBPACK_IMPORTED_MODULE_2__.Card, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", __assign({ className: \"title\" }, { children: \"Missing root access\" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", __assign({ className: \"content\" }, { children: \"Semes like you don't have root access. Check in your superuser app or root your phone\" }))] }) })));\n    };\n    return NoRoot;\n}(react__WEBPACK_IMPORTED_MODULE_1__.Component));\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NoRoot);\n\n\n//# sourceURL=webpack://your-name-here/./src/NoRoot.tsx?");

/***/ }),

/***/ "./src/Tabs/Tab1.tsx":
/*!***************************!*\
  !*** ./src/Tabs/Tab1.tsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_onsenui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-onsenui */ \"./node_modules/react-onsenui/dist/react-onsenui.js\");\n/* harmony import */ var react_onsenui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_onsenui__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_CustomButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/CustomButton */ \"./src/components/CustomButton.tsx\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar __assign = (undefined && undefined.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\n\n\n\n\nvar Tab1 = /** @class */ (function (_super) {\n    __extends(Tab1, _super);\n    function Tab1(props) {\n        var _this = _super.call(this, props) || this;\n        _this.delay = function (time) {\n            return new Promise(function (resolve) { return setTimeout(resolve, time); });\n        };\n        _this.runFake = function () { return __awaiter(_this, void 0, void 0, function () {\n            var points, i, i;\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0:\n                        points = new Array(Number(this.state.maxBattery));\n                        for (i = 0; i < Number(this.state.maxBattery); i++) {\n                            points[i] = i + 1; //This populates the array.  +1 is necessary because arrays are 0 index based and you want to store 1-100 in it, NOT 0-99.\n                        }\n                        i = 0;\n                        _a.label = 1;\n                    case 1:\n                        if (!(i < points.length)) return [3 /*break*/, 5];\n                        if (!this.state.active) return [3 /*break*/, 3];\n                        window.android.cmd(\"cmd battery set level \".concat(points[i]));\n                        return [4 /*yield*/, this.delay(Number(this.state.delayBetween))];\n                    case 2:\n                        _a.sent();\n                        return [3 /*break*/, 4];\n                    case 3: return [2 /*return*/];\n                    case 4:\n                        i++;\n                        return [3 /*break*/, 1];\n                    case 5:\n                        this.delay(Number(this.state.resetDelay)).then(function () {\n                            window.android.cmd(\"cmd battery reset\");\n                        });\n                        return [2 /*return*/];\n                }\n            });\n        }); };\n        _this.state = {\n            maxBattery: \"100\",\n            resetDelay: \"2000\",\n            delayBetween: \"2000\",\n            active: true,\n        };\n        return _this;\n    }\n    Tab1.prototype.render = function () {\n        var _this = this;\n        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_onsenui__WEBPACK_IMPORTED_MODULE_2__.List, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_onsenui__WEBPACK_IMPORTED_MODULE_2__.ListTitle, { children: \"Options\" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_onsenui__WEBPACK_IMPORTED_MODULE_2__.ListItem, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", __assign({ className: \"center\" }, { children: \"Max Battery\" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", __assign({ className: \"right\" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_onsenui__WEBPACK_IMPORTED_MODULE_2__.Input, { value: this.state.maxBattery, onChange: function (e) {\n                                            _this.setState({ maxBattery: e.target.value });\n                                        }, modifier: \"underbar\", float: true, placeholder: \"Maximal Battery Charge\" }) }))] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_onsenui__WEBPACK_IMPORTED_MODULE_2__.ListItem, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", __assign({ className: \"center\" }, { children: \"Reset Delay\" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", __assign({ className: \"right\" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_onsenui__WEBPACK_IMPORTED_MODULE_2__.Input, { value: this.state.resetDelay, onChange: function (e) {\n                                            _this.setState({ resetDelay: e.target.value });\n                                        }, modifier: \"underbar\", float: true, placeholder: \"Reset after the given sec.\" }) }))] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_onsenui__WEBPACK_IMPORTED_MODULE_2__.ListItem, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", __assign({ className: \"center\" }, { children: \"Delay Between\" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", __assign({ className: \"right\" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_onsenui__WEBPACK_IMPORTED_MODULE_2__.Input, { value: this.state.delayBetween, onChange: function (e) {\n                                            _this.setState({ delayBetween: e.target.value });\n                                        }, modifier: \"underbar\", float: true, placeholder: \"Delay between the charge progress\" }) }))] })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_CustomButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"], __assign({ onClick: this.runFake }, { children: \"Run fake\" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_CustomButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"], __assign({ onClick: function () {\n                        window.android.cmd(\"exit\");\n                    } }, { children: \"Stop\" }))] }));\n    };\n    return Tab1;\n}(react__WEBPACK_IMPORTED_MODULE_1__.Component));\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tab1);\n\n\n//# sourceURL=webpack://your-name-here/./src/Tabs/Tab1.tsx?");

/***/ }),

/***/ "./src/Tabs/Tab2.tsx":
/*!***************************!*\
  !*** ./src/Tabs/Tab2.tsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_onsenui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-onsenui */ \"./node_modules/react-onsenui/dist/react-onsenui.js\");\n/* harmony import */ var react_onsenui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_onsenui__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_CustomButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/CustomButton */ \"./src/components/CustomButton.tsx\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar __assign = (undefined && undefined.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\n\n\n\n\nvar Tab2 = /** @class */ (function (_super) {\n    __extends(Tab2, _super);\n    function Tab2(props) {\n        var _this = _super.call(this, props) || this;\n        _this.handleBatteryLevelChange = function (e) {\n            _this.setState({ batteryLevel: e.target.value });\n        };\n        _this.render = function () {\n            return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_onsenui__WEBPACK_IMPORTED_MODULE_2__.List, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_onsenui__WEBPACK_IMPORTED_MODULE_2__.ListTitle, { children: \"Options\" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_onsenui__WEBPACK_IMPORTED_MODULE_2__.ListItem, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", __assign({ className: \"center\" }, { children: \"Battery Level\" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", __assign({ className: \"right\" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_onsenui__WEBPACK_IMPORTED_MODULE_2__.Input, { value: _this.state.batteryLevel, onChange: _this.handleBatteryLevelChange, modifier: \"underbar\", type: \"n\", float: true, placeholder: \"100\" }) }))] })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_CustomButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"], __assign({ onClick: function () {\n                            window.android.cmd(\"cmd battery set level \".concat(_this.state.batteryLevel));\n                        } }, { children: \"Set\" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_CustomButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"], __assign({ onClick: function () {\n                            window.android.cmd(\"cmd battery reset\");\n                        } }, { children: \"Reset\" }))] }));\n        };\n        _this.state = {\n            batteryLevel: \"100\",\n        };\n        _this.input = react__WEBPACK_IMPORTED_MODULE_1__.createRef();\n        return _this;\n    }\n    return Tab2;\n}(react__WEBPACK_IMPORTED_MODULE_1__.Component));\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tab2);\n\n\n//# sourceURL=webpack://your-name-here/./src/Tabs/Tab2.tsx?");

/***/ }),

/***/ "./src/components/CustomButton.tsx":
/*!*****************************************!*\
  !*** ./src/components/CustomButton.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_onsenui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-onsenui */ \"./node_modules/react-onsenui/dist/react-onsenui.js\");\n/* harmony import */ var react_onsenui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_onsenui__WEBPACK_IMPORTED_MODULE_2__);\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar __assign = (undefined && undefined.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\n\n\n\nvar CustomButton = /** @class */ (function (_super) {\n    __extends(CustomButton, _super);\n    function CustomButton() {\n        return _super !== null && _super.apply(this, arguments) || this;\n    }\n    CustomButton.prototype.render = function () {\n        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", __assign({ style: { margin: \"8px\" } }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_onsenui__WEBPACK_IMPORTED_MODULE_2__.Button, __assign({ modifier: \"large\", onClick: this.props.onClick }, { children: this.props.children })) })) }));\n    };\n    return CustomButton;\n}(react__WEBPACK_IMPORTED_MODULE_1__.Component));\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomButton);\n\n\n//# sourceURL=webpack://your-name-here/./src/components/CustomButton.tsx?");

/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ \"./src/App.tsx\");\n/* harmony import */ var react_onsenui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-onsenui */ \"./node_modules/react-onsenui/dist/react-onsenui.js\");\n/* harmony import */ var react_onsenui__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_onsenui__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var onsenui_css_onsenui_core_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! onsenui/css/onsenui-core.min.css */ \"./node_modules/onsenui/css/onsenui-core.min.css\");\n/* harmony import */ var onsenui_css_onsen_css_components_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! onsenui/css/onsen-css-components.css */ \"./node_modules/onsenui/css/onsen-css-components.css\");\n/* harmony import */ var _NoRoot__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./NoRoot */ \"./src/NoRoot.tsx\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar __assign = (undefined && undefined.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\n\n\n\n\n\n\n\n\nvar InitActivity = /** @class */ (function (_super) {\n    __extends(InitActivity, _super);\n    function InitActivity(props) {\n        var _this = _super.call(this, props) || this;\n        _this.componentDidMount = function () {\n            window.addEventListener(\"load\", _this.windowLoadPush);\n        };\n        _this.componentWillUnmount = function () {\n            window.removeEventListener(\"load\", _this.windowLoadPush);\n        };\n        _this.windowLoadPush = function () {\n            if (typeof history.pushState === \"function\") {\n                history.pushState(\"jibberish\", \"\", null);\n                window.onpopstate = function () {\n                    history.pushState(\"newjibberish\", \"\", null);\n                    if (_this.state.currentPage === \"main\") {\n                        window.android.close();\n                    }\n                    else {\n                        _this.popPage();\n                    }\n                };\n            }\n            else {\n                var ignoreHashChange = true;\n                window.onhashchange = function () {\n                    if (!ignoreHashChange) {\n                        ignoreHashChange = true;\n                        window.location.hash = Math.random().toString();\n                    }\n                    else {\n                        ignoreHashChange = false;\n                    }\n                };\n            }\n        };\n        _this.pushPage = function (props) {\n            var route = {\n                component: props.activity,\n                props: {\n                    key: props.key,\n                    extras: props.extras,\n                    popPage: function () { return _this.popPage(); },\n                    pushPage: function () {\n                        var args = [];\n                        for (var _i = 0; _i < arguments.length; _i++) {\n                            args[_i] = arguments[_i];\n                        }\n                        return _this.pushPage.apply(null, args);\n                    },\n                },\n            };\n            var routeConfig = _this.state.routeConfig;\n            routeConfig = react_onsenui__WEBPACK_IMPORTED_MODULE_4__.RouterUtil.push({\n                routeConfig: routeConfig,\n                route: route,\n            });\n            _this.setState({ routeConfig: routeConfig });\n            _this.setState({ currentPage: props.key });\n        };\n        _this.popPage = function (options) {\n            if (options === void 0) { options = {}; }\n            var routeConfig = _this.state.routeConfig;\n            routeConfig = react_onsenui__WEBPACK_IMPORTED_MODULE_4__.RouterUtil.pop({\n                routeConfig: routeConfig,\n                options: __assign(__assign({}, options), { animationOptions: {\n                        duration: 0.2,\n                        timing: \"ease-in\",\n                        animation: \"fade-ios\",\n                    } }),\n            });\n            _this.setState({ routeConfig: routeConfig });\n            _this.setState({ currentPage: \"main\" });\n        };\n        _this.onPostPush = function () {\n            var routeConfig = react_onsenui__WEBPACK_IMPORTED_MODULE_4__.RouterUtil.postPush(_this.state.routeConfig);\n            _this.setState({ routeConfig: routeConfig });\n        };\n        _this.onPostPop = function () {\n            var routeConfig = react_onsenui__WEBPACK_IMPORTED_MODULE_4__.RouterUtil.postPop(_this.state.routeConfig);\n            _this.setState({ routeConfig: routeConfig });\n        };\n        _this.renderPage = function (route) {\n            var props = route.props || {};\n            return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(route.component, __assign({}, props));\n        };\n        var checkRoot = function () {\n            if (window.android.rootAccess()) {\n                return _App__WEBPACK_IMPORTED_MODULE_3__[\"default\"];\n            }\n            else {\n                return _NoRoot__WEBPACK_IMPORTED_MODULE_7__[\"default\"];\n            }\n        };\n        var routeConfig = react_onsenui__WEBPACK_IMPORTED_MODULE_4__.RouterUtil.init([\n            {\n                component: checkRoot(),\n                props: {\n                    key: \"main\",\n                    pushPage: function () {\n                        var args = [];\n                        for (var _i = 0; _i < arguments.length; _i++) {\n                            args[_i] = arguments[_i];\n                        }\n                        return _this.pushPage.apply(null, args);\n                    },\n                },\n            },\n        ]);\n        _this.state = {\n            routeConfig: routeConfig,\n            currentPage: \"main\",\n        };\n        return _this;\n    }\n    InitActivity.prototype.renderToolbar = function () {\n        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_onsenui__WEBPACK_IMPORTED_MODULE_4__.Toolbar, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", __assign({ className: \"left\" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_onsenui__WEBPACK_IMPORTED_MODULE_4__.BackButton, {}) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", __assign({ className: \"center\" }, { children: \"Stateless Navigator\" }))] }));\n    };\n    InitActivity.prototype.render = function () {\n        var _this = this;\n        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_onsenui__WEBPACK_IMPORTED_MODULE_4__.Page, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_onsenui__WEBPACK_IMPORTED_MODULE_4__.RouterNavigator, { swipeable: true, \n                // @ts-ignore\n                swipePop: function (options) { return _this.popPage(options); }, routeConfig: this.state.routeConfig, renderPage: this.renderPage, onPostPush: function () { return _this.onPostPush(); }, onPostPop: function () { return _this.onPostPop(); } }) }));\n    };\n    return InitActivity;\n}(react__WEBPACK_IMPORTED_MODULE_1__.Component));\nreact_dom__WEBPACK_IMPORTED_MODULE_2__.render((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InitActivity, {}), document.querySelector(\"app\"));\n\n\n//# sourceURL=webpack://your-name-here/./src/index.tsx?");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkyour_name_here"] = self["webpackChunkyour_name_here"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], () => (__webpack_require__("./src/index.tsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;