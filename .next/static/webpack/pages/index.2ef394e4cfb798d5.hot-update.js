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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar AccordionComponent = function(param) {\n    var expanded = param.expanded, setExpanded = param.setExpanded;\n    // By using `AnimatePresence` to mount and unmount the contents, we can animate\n    // them in and out while also only rendering the contents of open accordions\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.header, {\n                initial: false,\n                animate: {\n                    backgroundColor: expanded ? \"#62626114\" : \"#e1e6f7\"\n                },\n                onClick: function() {\n                    return setExpanded(expanded ? false : true);\n                },\n                children: \"hhaa\"\n            }, void 0, false, {\n                fileName: \"/Users/pawankanjeam/Library/Mobile Documents/com~apple~CloudDocs/Workspace/Main-Project/Progress/personal-resume/personal-webapp/components/common/accordion/Accordion.tsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.AnimatePresence, {\n                initial: false,\n                children: expanded && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.section, {\n                    initial: \"collapsed\",\n                    animate: \"open\",\n                    exit: \"collapsed\",\n                    variants: {\n                        open: {\n                            opacity: 1,\n                            height: \"auto\"\n                        },\n                        collapsed: {\n                            opacity: 0,\n                            height: 0\n                        }\n                    },\n                    transition: {\n                        duration: 0.8,\n                        ease: [\n                            0.04,\n                            0.62,\n                            0.23,\n                            0.98\n                        ]\n                    },\n                    children: \"haha\"\n                }, \"content\", false, {\n                    fileName: \"/Users/pawankanjeam/Library/Mobile Documents/com~apple~CloudDocs/Workspace/Main-Project/Progress/personal-resume/personal-webapp/components/common/accordion/Accordion.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/pawankanjeam/Library/Mobile Documents/com~apple~CloudDocs/Workspace/Main-Project/Progress/personal-resume/personal-webapp/components/common/accordion/Accordion.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_c = AccordionComponent;\nvar Accordion = function(param) {\n    var topic = param.topic, contents = param.contents;\n    _s();\n    // This approach is if you only want max one section open at a time. If you want multiple\n    // sections to potentially be open simultaneously, they can all be given their own `useState`.\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), expanded = ref[0], setExpanded = ref[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"accordion-container\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AccordionComponent, {\n            expanded: expanded,\n            setExpanded: setExpanded\n        }, topic, false, {\n            fileName: \"/Users/pawankanjeam/Library/Mobile Documents/com~apple~CloudDocs/Workspace/Main-Project/Progress/personal-resume/personal-webapp/components/common/accordion/Accordion.tsx\",\n            lineNumber: 56,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/pawankanjeam/Library/Mobile Documents/com~apple~CloudDocs/Workspace/Main-Project/Progress/personal-resume/personal-webapp/components/common/accordion/Accordion.tsx\",\n        lineNumber: 55,\n        columnNumber: 5\n    }, _this);\n};\n_s(Accordion, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c1 = Accordion;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Accordion);\nvar _c, _c1;\n$RefreshReg$(_c, \"AccordionComponent\");\n$RefreshReg$(_c1, \"Accordion\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NvbW1vbi9hY2NvcmRpb24vQWNjb3JkaW9uLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFBK0I7QUFDQTtBQUN1Qjs7QUFNdEQsSUFBTUksa0JBQWtCLEdBQUcsZ0JBR0k7UUFGN0JDLFFBQVEsU0FBUkEsUUFBUSxFQUNSQyxXQUFXLFNBQVhBLFdBQVc7SUFFWCwrRUFBK0U7SUFDL0UsNEVBQTRFO0lBQzVFLHFCQUNFOzswQkFDRSw4REFBQ0osd0RBQWE7Z0JBQ1pNLE9BQU8sRUFBRSxLQUFLO2dCQUNkQyxPQUFPLEVBQUU7b0JBQUNDLGVBQWUsRUFBRUwsUUFBUSxHQUFHLFdBQVcsR0FBRyxTQUFTO2lCQUFDO2dCQUM5RE0sT0FBTyxFQUFFOzJCQUFNTCxXQUFXLENBQUNELFFBQVEsR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDO2lCQUFBOzBCQUNwRCxNQUVEOzs7OztxQkFBZ0I7MEJBQ2hCLDhEQUFDRiwwREFBZTtnQkFBQ0ssT0FBTyxFQUFFLEtBQUs7MEJBQzVCSCxRQUFRLGtCQUNQLDhEQUFDSCx5REFBYztvQkFFYk0sT0FBTyxFQUFDLFdBQVc7b0JBQ25CQyxPQUFPLEVBQUMsTUFBTTtvQkFDZEksSUFBSSxFQUFDLFdBQVc7b0JBQ2hCQyxRQUFRLEVBQUU7d0JBQ1JDLElBQUksRUFBRTs0QkFBQ0MsT0FBTyxFQUFFLENBQUM7NEJBQUVDLE1BQU0sRUFBRSxNQUFNO3lCQUFDO3dCQUNsQ0MsU0FBUyxFQUFFOzRCQUFDRixPQUFPLEVBQUUsQ0FBQzs0QkFBRUMsTUFBTSxFQUFFLENBQUM7eUJBQUM7cUJBQ25DO29CQUNERSxVQUFVLEVBQUU7d0JBQUNDLFFBQVEsRUFBRSxHQUFHO3dCQUFFQyxJQUFJLEVBQUU7QUFBQyxnQ0FBSTtBQUFFLGdDQUFJO0FBQUUsZ0NBQUk7QUFBRSxnQ0FBSTt5QkFBQztxQkFBQzs4QkFDNUQsTUFFRDttQkFYTSxTQUFTOzs7O3lCQVdFOzs7OztxQkFFSDs7b0JBQ2pCLENBQ0g7Q0FDSDtBQWxDS2pCLEtBQUFBLGtCQUFrQjtBQXdDeEIsSUFBTWtCLFNBQVMsR0FBRyxnQkFBdUM7UUFBckNDLEtBQUssU0FBTEEsS0FBSyxFQUFFQyxRQUFRLFNBQVJBLFFBQVE7O0lBQ2pDLHlGQUF5RjtJQUN6Riw4RkFBOEY7SUFDOUYsSUFBZ0N2QixHQUF3QixHQUF4QkEsK0NBQVEsQ0FBVSxLQUFLLENBQUMsRUFBakRJLFFBQVEsR0FBaUJKLEdBQXdCLEdBQXpDLEVBQUVLLFdBQVcsR0FBSUwsR0FBd0IsR0FBNUI7SUFFNUIscUJBQ0UsOERBQUN3QixLQUFHO1FBQUNDLFNBQVMsRUFBQyxxQkFBcUI7a0JBQ2xDLDRFQUFDdEIsa0JBQWtCO1lBQ2pCQyxRQUFRLEVBQUVBLFFBQVE7WUFDbEJDLFdBQVcsRUFBRUEsV0FBVztXQUNuQmlCLEtBQUs7Ozs7aUJBQ1Y7Ozs7O2FBQ0UsQ0FDTjtDQUNIO0dBZEtELFNBQVM7QUFBVEEsTUFBQUEsU0FBUztBQWdCZiwrREFBZUEsU0FBUyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvY29tbW9uL2FjY29yZGlvbi9BY2NvcmRpb24udHN4P2ZjZTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7bW90aW9uLCBBbmltYXRlUHJlc2VuY2V9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5cbmludGVyZmFjZSBBY2NvcmRpb25Db21wb25lbnRQcm9wcyB7XG4gIGV4cGFuZGVkOiBib29sZWFuO1xuICBzZXRFeHBhbmRlZDogUmVhY3QuRGlzcGF0Y2g8UmVhY3QuU2V0U3RhdGVBY3Rpb248Ym9vbGVhbj4+O1xufVxuY29uc3QgQWNjb3JkaW9uQ29tcG9uZW50ID0gKHtcbiAgZXhwYW5kZWQsXG4gIHNldEV4cGFuZGVkLFxufTogQWNjb3JkaW9uQ29tcG9uZW50UHJvcHMpID0+IHtcbiAgLy8gQnkgdXNpbmcgYEFuaW1hdGVQcmVzZW5jZWAgdG8gbW91bnQgYW5kIHVubW91bnQgdGhlIGNvbnRlbnRzLCB3ZSBjYW4gYW5pbWF0ZVxuICAvLyB0aGVtIGluIGFuZCBvdXQgd2hpbGUgYWxzbyBvbmx5IHJlbmRlcmluZyB0aGUgY29udGVudHMgb2Ygb3BlbiBhY2NvcmRpb25zXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxtb3Rpb24uaGVhZGVyXG4gICAgICAgIGluaXRpYWw9e2ZhbHNlfVxuICAgICAgICBhbmltYXRlPXt7YmFja2dyb3VuZENvbG9yOiBleHBhbmRlZCA/IFwiIzYyNjI2MTE0XCIgOiBcIiNlMWU2ZjdcIn19XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEV4cGFuZGVkKGV4cGFuZGVkID8gZmFsc2UgOiB0cnVlKX1cbiAgICAgID5cbiAgICAgICAgaGhhYVxuICAgICAgPC9tb3Rpb24uaGVhZGVyPlxuICAgICAgPEFuaW1hdGVQcmVzZW5jZSBpbml0aWFsPXtmYWxzZX0+XG4gICAgICAgIHtleHBhbmRlZCAmJiAoXG4gICAgICAgICAgPG1vdGlvbi5zZWN0aW9uXG4gICAgICAgICAgICBrZXk9XCJjb250ZW50XCJcbiAgICAgICAgICAgIGluaXRpYWw9XCJjb2xsYXBzZWRcIlxuICAgICAgICAgICAgYW5pbWF0ZT1cIm9wZW5cIlxuICAgICAgICAgICAgZXhpdD1cImNvbGxhcHNlZFwiXG4gICAgICAgICAgICB2YXJpYW50cz17e1xuICAgICAgICAgICAgICBvcGVuOiB7b3BhY2l0eTogMSwgaGVpZ2h0OiBcImF1dG9cIn0sXG4gICAgICAgICAgICAgIGNvbGxhcHNlZDoge29wYWNpdHk6IDAsIGhlaWdodDogMH0sXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgdHJhbnNpdGlvbj17e2R1cmF0aW9uOiAwLjgsIGVhc2U6IFswLjA0LCAwLjYyLCAwLjIzLCAwLjk4XX19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgaGFoYVxuICAgICAgICAgIDwvbW90aW9uLnNlY3Rpb24+XG4gICAgICAgICl9XG4gICAgICA8L0FuaW1hdGVQcmVzZW5jZT5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmludGVyZmFjZSBBY2NvcmRpb25Qcm9wcyB7XG4gIHRvcGljOiBzdHJpbmc7XG4gIGNvbnRlbnRzOiBzdHJpbmdbXTtcbn1cbmNvbnN0IEFjY29yZGlvbiA9ICh7dG9waWMsIGNvbnRlbnRzfTogQWNjb3JkaW9uUHJvcHMpID0+IHtcbiAgLy8gVGhpcyBhcHByb2FjaCBpcyBpZiB5b3Ugb25seSB3YW50IG1heCBvbmUgc2VjdGlvbiBvcGVuIGF0IGEgdGltZS4gSWYgeW91IHdhbnQgbXVsdGlwbGVcbiAgLy8gc2VjdGlvbnMgdG8gcG90ZW50aWFsbHkgYmUgb3BlbiBzaW11bHRhbmVvdXNseSwgdGhleSBjYW4gYWxsIGJlIGdpdmVuIHRoZWlyIG93biBgdXNlU3RhdGVgLlxuICBjb25zdCBbZXhwYW5kZWQsIHNldEV4cGFuZGVkXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjb3JkaW9uLWNvbnRhaW5lclwiPlxuICAgICAgPEFjY29yZGlvbkNvbXBvbmVudFxuICAgICAgICBleHBhbmRlZD17ZXhwYW5kZWR9XG4gICAgICAgIHNldEV4cGFuZGVkPXtzZXRFeHBhbmRlZH1cbiAgICAgICAga2V5PXt0b3BpY31cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBY2NvcmRpb247XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIm1vdGlvbiIsIkFuaW1hdGVQcmVzZW5jZSIsIkFjY29yZGlvbkNvbXBvbmVudCIsImV4cGFuZGVkIiwic2V0RXhwYW5kZWQiLCJoZWFkZXIiLCJpbml0aWFsIiwiYW5pbWF0ZSIsImJhY2tncm91bmRDb2xvciIsIm9uQ2xpY2siLCJzZWN0aW9uIiwiZXhpdCIsInZhcmlhbnRzIiwib3BlbiIsIm9wYWNpdHkiLCJoZWlnaHQiLCJjb2xsYXBzZWQiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJlYXNlIiwiQWNjb3JkaW9uIiwidG9waWMiLCJjb250ZW50cyIsImRpdiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/common/accordion/Accordion.tsx\n"));

/***/ })

});