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

/***/ "./components/common/Accordion.tsx":
/*!*****************************************!*\
  !*** ./components/common/Accordion.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar AccordionComponent = function(param) {\n    var index = param.index, expanded = param.expanded, setExpanded = param.setExpanded;\n    var isOpen = index === expanded;\n    // By using `AnimatePresence` to mount and unmount the contents, we can animate\n    // them in and out while also only rendering the contents of open accordions\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.header, {\n                initial: false,\n                animate: {\n                    backgroundColor: isOpen ? \"#FF0088\" : \"#0055FF\"\n                },\n                onClick: function() {\n                    return setExpanded(isOpen ? false : index);\n                }\n            }, void 0, false, {\n                fileName: \"/Users/pawankanjeam/Library/Mobile Documents/com~apple~CloudDocs/Workspace/Main-Project/Progress/personal-resume/personal-webapp/components/common/Accordion.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.AnimatePresence, {\n                initial: false,\n                children: isOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.section, {\n                    initial: \"collapsed\",\n                    animate: \"open\",\n                    exit: \"collapsed\",\n                    variants: {\n                        open: {\n                            opacity: 1,\n                            height: \"auto\"\n                        },\n                        collapsed: {\n                            opacity: 0,\n                            height: 0\n                        }\n                    },\n                    transition: {\n                        duration: 0.8,\n                        ease: [\n                            0.04,\n                            0.62,\n                            0.23,\n                            0.98\n                        ]\n                    },\n                    children: \"haha\"\n                }, \"content\", false, {\n                    fileName: \"/Users/pawankanjeam/Library/Mobile Documents/com~apple~CloudDocs/Workspace/Main-Project/Progress/personal-resume/personal-webapp/components/common/Accordion.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/pawankanjeam/Library/Mobile Documents/com~apple~CloudDocs/Workspace/Main-Project/Progress/personal-resume/personal-webapp/components/common/Accordion.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_c = AccordionComponent;\nvar Accordion = function() {\n    _s();\n    // This approach is if you only want max one section open at a time. If you want multiple\n    // sections to potentially be open simultaneously, they can all be given their own `useState`.\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), expanded = ref[0], setExpanded = ref[1];\n    var accordionIds = [\n        0,\n        1,\n        2,\n        3\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: accordionIds.map(function(index) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AccordionComponent, {\n                index: index,\n                expanded: expanded,\n                setExpanded: setExpanded\n            }, void 0, false, {\n                fileName: \"/Users/pawankanjeam/Library/Mobile Documents/com~apple~CloudDocs/Workspace/Main-Project/Progress/personal-resume/personal-webapp/components/common/Accordion.tsx\",\n                lineNumber: 56,\n                columnNumber: 9\n            }, _this);\n        })\n    }, void 0, false);\n};\n_s(Accordion, \"rGEI62VsuwnwPY/75ViYiWAYY24=\");\n_c1 = Accordion;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Accordion);\nvar _c, _c1;\n$RefreshReg$(_c, \"AccordionComponent\");\n$RefreshReg$(_c1, \"Accordion\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NvbW1vbi9BY2NvcmRpb24udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUErQjtBQUNBO0FBQ3VCOztBQU90RCxJQUFNSSxrQkFBa0IsR0FBRyxnQkFJSTtRQUg3QkMsS0FBSyxTQUFMQSxLQUFLLEVBQ0xDLFFBQVEsU0FBUkEsUUFBUSxFQUNSQyxXQUFXLFNBQVhBLFdBQVc7SUFFWCxJQUFNQyxNQUFNLEdBQUdILEtBQUssS0FBS0MsUUFBUTtJQUVqQywrRUFBK0U7SUFDL0UsNEVBQTRFO0lBQzVFLHFCQUNFOzswQkFDRSw4REFBQ0osd0RBQWE7Z0JBQ1pRLE9BQU8sRUFBRSxLQUFLO2dCQUNkQyxPQUFPLEVBQUU7b0JBQUNDLGVBQWUsRUFBRUosTUFBTSxHQUFHLFNBQVMsR0FBRyxTQUFTO2lCQUFDO2dCQUMxREssT0FBTyxFQUFFOzJCQUFNTixXQUFXLENBQUNDLE1BQU0sR0FBRyxLQUFLLEdBQUdILEtBQUssQ0FBQztpQkFBQTs7Ozs7cUJBQ2xEOzBCQUNGLDhEQUFDRiwwREFBZTtnQkFBQ08sT0FBTyxFQUFFLEtBQUs7MEJBQzVCRixNQUFNLGtCQUNMLDhEQUFDTix5REFBYztvQkFFYlEsT0FBTyxFQUFDLFdBQVc7b0JBQ25CQyxPQUFPLEVBQUMsTUFBTTtvQkFDZEksSUFBSSxFQUFDLFdBQVc7b0JBQ2hCQyxRQUFRLEVBQUU7d0JBQ1JDLElBQUksRUFBRTs0QkFBQ0MsT0FBTyxFQUFFLENBQUM7NEJBQUVDLE1BQU0sRUFBRSxNQUFNO3lCQUFDO3dCQUNsQ0MsU0FBUyxFQUFFOzRCQUFDRixPQUFPLEVBQUUsQ0FBQzs0QkFBRUMsTUFBTSxFQUFFLENBQUM7eUJBQUM7cUJBQ25DO29CQUNERSxVQUFVLEVBQUU7d0JBQUNDLFFBQVEsRUFBRSxHQUFHO3dCQUFFQyxJQUFJLEVBQUU7QUFBQyxnQ0FBSTtBQUFFLGdDQUFJO0FBQUUsZ0NBQUk7QUFBRSxnQ0FBSTt5QkFBQztxQkFBQzs4QkFDNUQsTUFFRDttQkFYTSxTQUFTOzs7O3lCQVdFOzs7OztxQkFFSDs7b0JBQ2pCLENBQ0g7Q0FDSDtBQW5DS25CLEtBQUFBLGtCQUFrQjtBQXFDeEIsSUFBTW9CLFNBQVMsR0FBRyxXQUFNOztJQUN0Qix5RkFBeUY7SUFDekYsOEZBQThGO0lBQzlGLElBQWdDdkIsR0FBMkIsR0FBM0JBLCtDQUFRLENBQWlCLENBQUMsQ0FBQyxFQUFwREssUUFBUSxHQUFpQkwsR0FBMkIsR0FBNUMsRUFBRU0sV0FBVyxHQUFJTixHQUEyQixHQUEvQjtJQUM1QixJQUFNd0IsWUFBWSxHQUFHO0FBQUMsU0FBQztBQUFFLFNBQUM7QUFBRSxTQUFDO0FBQUUsU0FBQztLQUFDO0lBRWpDLHFCQUNFO2tCQUNHQSxZQUFZLENBQUNDLEdBQUcsQ0FBQyxTQUFDckIsS0FBSztpQ0FDdEIsOERBQUNELGtCQUFrQjtnQkFDakJDLEtBQUssRUFBRUEsS0FBSztnQkFDWkMsUUFBUSxFQUFFQSxRQUFRO2dCQUNsQkMsV0FBVyxFQUFFQSxXQUFXOzs7OztxQkFDeEI7U0FDSCxDQUFDO3FCQUNELENBQ0g7Q0FDSDtHQWpCS2lCLFNBQVM7QUFBVEEsTUFBQUEsU0FBUztBQW1CZiwrREFBZUEsU0FBUyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvY29tbW9uL0FjY29yZGlvbi50c3g/YTJiMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHttb3Rpb24sIEFuaW1hdGVQcmVzZW5jZX0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcblxuaW50ZXJmYWNlIEFjY29yZGlvbkNvbXBvbmVudFByb3BzIHtcbiAgaW5kZXg6IG51bWJlcjtcbiAgZXhwYW5kZWQ6IG51bWJlciB8IGZhbHNlO1xuICBzZXRFeHBhbmRlZDogUmVhY3QuRGlzcGF0Y2g8UmVhY3QuU2V0U3RhdGVBY3Rpb248bnVtYmVyIHwgZmFsc2U+Pjtcbn1cbmNvbnN0IEFjY29yZGlvbkNvbXBvbmVudCA9ICh7XG4gIGluZGV4LFxuICBleHBhbmRlZCxcbiAgc2V0RXhwYW5kZWQsXG59OiBBY2NvcmRpb25Db21wb25lbnRQcm9wcykgPT4ge1xuICBjb25zdCBpc09wZW4gPSBpbmRleCA9PT0gZXhwYW5kZWQ7XG5cbiAgLy8gQnkgdXNpbmcgYEFuaW1hdGVQcmVzZW5jZWAgdG8gbW91bnQgYW5kIHVubW91bnQgdGhlIGNvbnRlbnRzLCB3ZSBjYW4gYW5pbWF0ZVxuICAvLyB0aGVtIGluIGFuZCBvdXQgd2hpbGUgYWxzbyBvbmx5IHJlbmRlcmluZyB0aGUgY29udGVudHMgb2Ygb3BlbiBhY2NvcmRpb25zXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxtb3Rpb24uaGVhZGVyXG4gICAgICAgIGluaXRpYWw9e2ZhbHNlfVxuICAgICAgICBhbmltYXRlPXt7YmFja2dyb3VuZENvbG9yOiBpc09wZW4gPyBcIiNGRjAwODhcIiA6IFwiIzAwNTVGRlwifX1cbiAgICAgICAgb25DbGljaz17KCkgPT4gc2V0RXhwYW5kZWQoaXNPcGVuID8gZmFsc2UgOiBpbmRleCl9XG4gICAgICAvPlxuICAgICAgPEFuaW1hdGVQcmVzZW5jZSBpbml0aWFsPXtmYWxzZX0+XG4gICAgICAgIHtpc09wZW4gJiYgKFxuICAgICAgICAgIDxtb3Rpb24uc2VjdGlvblxuICAgICAgICAgICAga2V5PVwiY29udGVudFwiXG4gICAgICAgICAgICBpbml0aWFsPVwiY29sbGFwc2VkXCJcbiAgICAgICAgICAgIGFuaW1hdGU9XCJvcGVuXCJcbiAgICAgICAgICAgIGV4aXQ9XCJjb2xsYXBzZWRcIlxuICAgICAgICAgICAgdmFyaWFudHM9e3tcbiAgICAgICAgICAgICAgb3Blbjoge29wYWNpdHk6IDEsIGhlaWdodDogXCJhdXRvXCJ9LFxuICAgICAgICAgICAgICBjb2xsYXBzZWQ6IHtvcGFjaXR5OiAwLCBoZWlnaHQ6IDB9LFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIHRyYW5zaXRpb249e3tkdXJhdGlvbjogMC44LCBlYXNlOiBbMC4wNCwgMC42MiwgMC4yMywgMC45OF19fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIGhhaGFcbiAgICAgICAgICA8L21vdGlvbi5zZWN0aW9uPlxuICAgICAgICApfVxuICAgICAgPC9BbmltYXRlUHJlc2VuY2U+XG4gICAgPC8+XG4gICk7XG59O1xuXG5jb25zdCBBY2NvcmRpb24gPSAoKSA9PiB7XG4gIC8vIFRoaXMgYXBwcm9hY2ggaXMgaWYgeW91IG9ubHkgd2FudCBtYXggb25lIHNlY3Rpb24gb3BlbiBhdCBhIHRpbWUuIElmIHlvdSB3YW50IG11bHRpcGxlXG4gIC8vIHNlY3Rpb25zIHRvIHBvdGVudGlhbGx5IGJlIG9wZW4gc2ltdWx0YW5lb3VzbHksIHRoZXkgY2FuIGFsbCBiZSBnaXZlbiB0aGVpciBvd24gYHVzZVN0YXRlYC5cbiAgY29uc3QgW2V4cGFuZGVkLCBzZXRFeHBhbmRlZF0gPSB1c2VTdGF0ZTxmYWxzZSB8IG51bWJlcj4oMCk7XG4gIGNvbnN0IGFjY29yZGlvbklkcyA9IFswLCAxLCAyLCAzXTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7YWNjb3JkaW9uSWRzLm1hcCgoaW5kZXgpID0+IChcbiAgICAgICAgPEFjY29yZGlvbkNvbXBvbmVudFxuICAgICAgICAgIGluZGV4PXtpbmRleH1cbiAgICAgICAgICBleHBhbmRlZD17ZXhwYW5kZWR9XG4gICAgICAgICAgc2V0RXhwYW5kZWQ9e3NldEV4cGFuZGVkfVxuICAgICAgICAvPlxuICAgICAgKSl9XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBY2NvcmRpb247XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIm1vdGlvbiIsIkFuaW1hdGVQcmVzZW5jZSIsIkFjY29yZGlvbkNvbXBvbmVudCIsImluZGV4IiwiZXhwYW5kZWQiLCJzZXRFeHBhbmRlZCIsImlzT3BlbiIsImhlYWRlciIsImluaXRpYWwiLCJhbmltYXRlIiwiYmFja2dyb3VuZENvbG9yIiwib25DbGljayIsInNlY3Rpb24iLCJleGl0IiwidmFyaWFudHMiLCJvcGVuIiwib3BhY2l0eSIsImhlaWdodCIsImNvbGxhcHNlZCIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImVhc2UiLCJBY2NvcmRpb24iLCJhY2NvcmRpb25JZHMiLCJtYXAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/common/Accordion.tsx\n"));

/***/ })

});