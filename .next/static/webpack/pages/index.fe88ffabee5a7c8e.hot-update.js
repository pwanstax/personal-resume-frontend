"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/common/accordion/Accordion.tsx":
/*!***************************************************!*\
  !*** ./components/common/accordion/Accordion.tsx ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar AccordionComponent = function(param) {\n    var index = param.index, expanded = param.expanded, setExpanded = param.setExpanded;\n    var isOpen = index === expanded;\n    // By using `AnimatePresence` to mount and unmount the contents, we can animate\n    // them in and out while also only rendering the contents of open accordions\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.header, {\n                initial: false,\n                animate: {\n                    backgroundColor: isOpen ? \"#FF0088\" : \"#0055FF\"\n                },\n                onClick: function() {\n                    return setExpanded(isOpen ? false : index);\n                }\n            }, void 0, false, {\n                fileName: \"/Users/pawankanjeam/Library/Mobile Documents/com~apple~CloudDocs/Workspace/Main-Project/Progress/personal-resume/personal-webapp/components/common/accordion/Accordion.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.AnimatePresence, {\n                initial: false,\n                children: isOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.section, {\n                    initial: \"collapsed\",\n                    animate: \"open\",\n                    exit: \"collapsed\",\n                    variants: {\n                        open: {\n                            opacity: 1,\n                            height: \"auto\"\n                        },\n                        collapsed: {\n                            opacity: 0,\n                            height: 0\n                        }\n                    },\n                    transition: {\n                        duration: 0.8,\n                        ease: [\n                            0.04,\n                            0.62,\n                            0.23,\n                            0.98\n                        ]\n                    },\n                    children: \"haha\"\n                }, \"content\", false, {\n                    fileName: \"/Users/pawankanjeam/Library/Mobile Documents/com~apple~CloudDocs/Workspace/Main-Project/Progress/personal-resume/personal-webapp/components/common/accordion/Accordion.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/pawankanjeam/Library/Mobile Documents/com~apple~CloudDocs/Workspace/Main-Project/Progress/personal-resume/personal-webapp/components/common/accordion/Accordion.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_c = AccordionComponent;\nvar Accordion = function() {\n    _s();\n    // This approach is if you only want max one section open at a time. If you want multiple\n    // sections to potentially be open simultaneously, they can all be given their own `useState`.\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), expanded = ref[0], setExpanded = ref[1];\n    var accordionIds = [\n        0,\n        1,\n        2,\n        3\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: accordionIds.map(function(index) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AccordionComponent, {\n                index: index,\n                expanded: expanded,\n                setExpanded: setExpanded\n            }, void 0, false, {\n                fileName: \"/Users/pawankanjeam/Library/Mobile Documents/com~apple~CloudDocs/Workspace/Main-Project/Progress/personal-resume/personal-webapp/components/common/accordion/Accordion.tsx\",\n                lineNumber: 56,\n                columnNumber: 9\n            }, _this);\n        })\n    }, void 0, false);\n};\n_s(Accordion, \"rGEI62VsuwnwPY/75ViYiWAYY24=\");\n_c1 = Accordion;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Accordion);\nvar _c, _c1;\n$RefreshReg$(_c, \"AccordionComponent\");\n$RefreshReg$(_c1, \"Accordion\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NvbW1vbi9hY2NvcmRpb24vQWNjb3JkaW9uLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFBK0I7QUFDQTtBQUN1Qjs7QUFPdEQsSUFBTUksa0JBQWtCLEdBQUcsZ0JBSUk7UUFIN0JDLEtBQUssU0FBTEEsS0FBSyxFQUNMQyxRQUFRLFNBQVJBLFFBQVEsRUFDUkMsV0FBVyxTQUFYQSxXQUFXO0lBRVgsSUFBTUMsTUFBTSxHQUFHSCxLQUFLLEtBQUtDLFFBQVE7SUFFakMsK0VBQStFO0lBQy9FLDRFQUE0RTtJQUM1RSxxQkFDRTs7MEJBQ0UsOERBQUNKLHdEQUFhO2dCQUNaUSxPQUFPLEVBQUUsS0FBSztnQkFDZEMsT0FBTyxFQUFFO29CQUFDQyxlQUFlLEVBQUVKLE1BQU0sR0FBRyxTQUFTLEdBQUcsU0FBUztpQkFBQztnQkFDMURLLE9BQU8sRUFBRTsyQkFBTU4sV0FBVyxDQUFDQyxNQUFNLEdBQUcsS0FBSyxHQUFHSCxLQUFLLENBQUM7aUJBQUE7Ozs7O3FCQUNsRDswQkFDRiw4REFBQ0YsMERBQWU7Z0JBQUNPLE9BQU8sRUFBRSxLQUFLOzBCQUM1QkYsTUFBTSxrQkFDTCw4REFBQ04seURBQWM7b0JBRWJRLE9BQU8sRUFBQyxXQUFXO29CQUNuQkMsT0FBTyxFQUFDLE1BQU07b0JBQ2RJLElBQUksRUFBQyxXQUFXO29CQUNoQkMsUUFBUSxFQUFFO3dCQUNSQyxJQUFJLEVBQUU7NEJBQUNDLE9BQU8sRUFBRSxDQUFDOzRCQUFFQyxNQUFNLEVBQUUsTUFBTTt5QkFBQzt3QkFDbENDLFNBQVMsRUFBRTs0QkFBQ0YsT0FBTyxFQUFFLENBQUM7NEJBQUVDLE1BQU0sRUFBRSxDQUFDO3lCQUFDO3FCQUNuQztvQkFDREUsVUFBVSxFQUFFO3dCQUFDQyxRQUFRLEVBQUUsR0FBRzt3QkFBRUMsSUFBSSxFQUFFO0FBQUMsZ0NBQUk7QUFBRSxnQ0FBSTtBQUFFLGdDQUFJO0FBQUUsZ0NBQUk7eUJBQUM7cUJBQUM7OEJBQzVELE1BRUQ7bUJBWE0sU0FBUzs7Ozt5QkFXRTs7Ozs7cUJBRUg7O29CQUNqQixDQUNIO0NBQ0g7QUFuQ0tuQixLQUFBQSxrQkFBa0I7QUFxQ3hCLElBQU1vQixTQUFTLEdBQUcsV0FBTTs7SUFDdEIseUZBQXlGO0lBQ3pGLDhGQUE4RjtJQUM5RixJQUFnQ3ZCLEdBQTJCLEdBQTNCQSwrQ0FBUSxDQUFpQixDQUFDLENBQUMsRUFBcERLLFFBQVEsR0FBaUJMLEdBQTJCLEdBQTVDLEVBQUVNLFdBQVcsR0FBSU4sR0FBMkIsR0FBL0I7SUFDNUIsSUFBTXdCLFlBQVksR0FBRztBQUFDLFNBQUM7QUFBRSxTQUFDO0FBQUUsU0FBQztBQUFFLFNBQUM7S0FBQztJQUVqQyxxQkFDRTtrQkFDR0EsWUFBWSxDQUFDQyxHQUFHLENBQUMsU0FBQ3JCLEtBQUs7aUNBQ3RCLDhEQUFDRCxrQkFBa0I7Z0JBQ2pCQyxLQUFLLEVBQUVBLEtBQUs7Z0JBQ1pDLFFBQVEsRUFBRUEsUUFBUTtnQkFDbEJDLFdBQVcsRUFBRUEsV0FBVzs7Ozs7cUJBQ3hCO1NBQ0gsQ0FBQztxQkFDRCxDQUNIO0NBQ0g7R0FqQktpQixTQUFTO0FBQVRBLE1BQUFBLFNBQVM7QUFtQmYsK0RBQWVBLFNBQVMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2NvbW1vbi9hY2NvcmRpb24vQWNjb3JkaW9uLnRzeD9mY2U2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge21vdGlvbiwgQW5pbWF0ZVByZXNlbmNlfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuXG5pbnRlcmZhY2UgQWNjb3JkaW9uQ29tcG9uZW50UHJvcHMge1xuICBpbmRleDogbnVtYmVyO1xuICBleHBhbmRlZDogbnVtYmVyIHwgZmFsc2U7XG4gIHNldEV4cGFuZGVkOiBSZWFjdC5EaXNwYXRjaDxSZWFjdC5TZXRTdGF0ZUFjdGlvbjxudW1iZXIgfCBmYWxzZT4+O1xufVxuY29uc3QgQWNjb3JkaW9uQ29tcG9uZW50ID0gKHtcbiAgaW5kZXgsXG4gIGV4cGFuZGVkLFxuICBzZXRFeHBhbmRlZCxcbn06IEFjY29yZGlvbkNvbXBvbmVudFByb3BzKSA9PiB7XG4gIGNvbnN0IGlzT3BlbiA9IGluZGV4ID09PSBleHBhbmRlZDtcblxuICAvLyBCeSB1c2luZyBgQW5pbWF0ZVByZXNlbmNlYCB0byBtb3VudCBhbmQgdW5tb3VudCB0aGUgY29udGVudHMsIHdlIGNhbiBhbmltYXRlXG4gIC8vIHRoZW0gaW4gYW5kIG91dCB3aGlsZSBhbHNvIG9ubHkgcmVuZGVyaW5nIHRoZSBjb250ZW50cyBvZiBvcGVuIGFjY29yZGlvbnNcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPG1vdGlvbi5oZWFkZXJcbiAgICAgICAgaW5pdGlhbD17ZmFsc2V9XG4gICAgICAgIGFuaW1hdGU9e3tiYWNrZ3JvdW5kQ29sb3I6IGlzT3BlbiA/IFwiI0ZGMDA4OFwiIDogXCIjMDA1NUZGXCJ9fVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRFeHBhbmRlZChpc09wZW4gPyBmYWxzZSA6IGluZGV4KX1cbiAgICAgIC8+XG4gICAgICA8QW5pbWF0ZVByZXNlbmNlIGluaXRpYWw9e2ZhbHNlfT5cbiAgICAgICAge2lzT3BlbiAmJiAoXG4gICAgICAgICAgPG1vdGlvbi5zZWN0aW9uXG4gICAgICAgICAgICBrZXk9XCJjb250ZW50XCJcbiAgICAgICAgICAgIGluaXRpYWw9XCJjb2xsYXBzZWRcIlxuICAgICAgICAgICAgYW5pbWF0ZT1cIm9wZW5cIlxuICAgICAgICAgICAgZXhpdD1cImNvbGxhcHNlZFwiXG4gICAgICAgICAgICB2YXJpYW50cz17e1xuICAgICAgICAgICAgICBvcGVuOiB7b3BhY2l0eTogMSwgaGVpZ2h0OiBcImF1dG9cIn0sXG4gICAgICAgICAgICAgIGNvbGxhcHNlZDoge29wYWNpdHk6IDAsIGhlaWdodDogMH0sXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgdHJhbnNpdGlvbj17e2R1cmF0aW9uOiAwLjgsIGVhc2U6IFswLjA0LCAwLjYyLCAwLjIzLCAwLjk4XX19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgaGFoYVxuICAgICAgICAgIDwvbW90aW9uLnNlY3Rpb24+XG4gICAgICAgICl9XG4gICAgICA8L0FuaW1hdGVQcmVzZW5jZT5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmNvbnN0IEFjY29yZGlvbiA9ICgpID0+IHtcbiAgLy8gVGhpcyBhcHByb2FjaCBpcyBpZiB5b3Ugb25seSB3YW50IG1heCBvbmUgc2VjdGlvbiBvcGVuIGF0IGEgdGltZS4gSWYgeW91IHdhbnQgbXVsdGlwbGVcbiAgLy8gc2VjdGlvbnMgdG8gcG90ZW50aWFsbHkgYmUgb3BlbiBzaW11bHRhbmVvdXNseSwgdGhleSBjYW4gYWxsIGJlIGdpdmVuIHRoZWlyIG93biBgdXNlU3RhdGVgLlxuICBjb25zdCBbZXhwYW5kZWQsIHNldEV4cGFuZGVkXSA9IHVzZVN0YXRlPGZhbHNlIHwgbnVtYmVyPigwKTtcbiAgY29uc3QgYWNjb3JkaW9uSWRzID0gWzAsIDEsIDIsIDNdO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHthY2NvcmRpb25JZHMubWFwKChpbmRleCkgPT4gKFxuICAgICAgICA8QWNjb3JkaW9uQ29tcG9uZW50XG4gICAgICAgICAgaW5kZXg9e2luZGV4fVxuICAgICAgICAgIGV4cGFuZGVkPXtleHBhbmRlZH1cbiAgICAgICAgICBzZXRFeHBhbmRlZD17c2V0RXhwYW5kZWR9XG4gICAgICAgIC8+XG4gICAgICApKX1cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFjY29yZGlvbjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwibW90aW9uIiwiQW5pbWF0ZVByZXNlbmNlIiwiQWNjb3JkaW9uQ29tcG9uZW50IiwiaW5kZXgiLCJleHBhbmRlZCIsInNldEV4cGFuZGVkIiwiaXNPcGVuIiwiaGVhZGVyIiwiaW5pdGlhbCIsImFuaW1hdGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJvbkNsaWNrIiwic2VjdGlvbiIsImV4aXQiLCJ2YXJpYW50cyIsIm9wZW4iLCJvcGFjaXR5IiwiaGVpZ2h0IiwiY29sbGFwc2VkIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZWFzZSIsIkFjY29yZGlvbiIsImFjY29yZGlvbklkcyIsIm1hcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/common/accordion/Accordion.tsx\n"));

/***/ }),

/***/ "./components/pages/aboutPage/AboutPage.tsx":
/*!**************************************************!*\
  !*** ./components/pages/aboutPage/AboutPage.tsx ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _common_accordion_Accordion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/accordion/Accordion */ \"./components/common/accordion/Accordion.tsx\");\nvar _this = undefined;\n\n\nvar AboutPage = function() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"aboutpage-container\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_accordion_Accordion__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n            fileName: \"/Users/pawankanjeam/Library/Mobile Documents/com~apple~CloudDocs/Workspace/Main-Project/Progress/personal-resume/personal-webapp/components/pages/aboutPage/AboutPage.tsx\",\n            lineNumber: 7,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/pawankanjeam/Library/Mobile Documents/com~apple~CloudDocs/Workspace/Main-Project/Progress/personal-resume/personal-webapp/components/pages/aboutPage/AboutPage.tsx\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, _this);\n};\n_c = AboutPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AboutPage);\nvar _c;\n$RefreshReg$(_c, \"AboutPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3BhZ2VzL2Fib3V0UGFnZS9BYm91dFBhZ2UudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7QUFDeUQ7QUFFekQsSUFBTUMsU0FBUyxHQUFhLFdBQU07SUFDaEMscUJBQ0UsOERBQUNDLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLHFCQUFxQjtrQkFDbEMsNEVBQUNILG1FQUFTOzs7O2lCQUFHOzs7OzthQUNULENBQ047Q0FDSDtBQU5LQyxLQUFBQSxTQUFTO0FBUWYsK0RBQWVBLFNBQVMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3BhZ2VzL2Fib3V0UGFnZS9BYm91dFBhZ2UudHN4PzMyMWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUge05leHRQYWdlfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IEFjY29yZGlvbiBmcm9tIFwiLi4vLi4vY29tbW9uL2FjY29yZGlvbi9BY2NvcmRpb25cIjtcblxuY29uc3QgQWJvdXRQYWdlOiBOZXh0UGFnZSA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImFib3V0cGFnZS1jb250YWluZXJcIj5cbiAgICAgIDxBY2NvcmRpb24gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFib3V0UGFnZTtcbiJdLCJuYW1lcyI6WyJBY2NvcmRpb24iLCJBYm91dFBhZ2UiLCJkaXYiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/pages/aboutPage/AboutPage.tsx\n"));

/***/ })

});