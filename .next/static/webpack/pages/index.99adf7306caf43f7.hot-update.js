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

/***/ "./components/pages/WorkPage.tsx":
/*!***************************************!*\
  !*** ./components/pages/WorkPage.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\nvar _this = undefined;\n\n\nvar cardVariants = {\n    offscreen: {\n        // rotate: -10,\n        width: \"50%\",\n        opacity: 0\n    },\n    onscreen: {\n        width: \"90%\",\n        opacity: 1,\n        // rotate: 0,\n        transition: {\n            type: \"spring\",\n            bounce: 0.4,\n            duration: 0.8\n        }\n    }\n};\nvar works = [\n    [\n        \"Depression Application\",\n        \"(Develop Web Application)\",\n        \"June 2021 - August 2021\", \n    ],\n    [\n        \"Depression AI\",\n        \"Built the model to predict depression scores\",\n        \"(September 2021 - November 2021)\", \n    ],\n    [\n        \"D-Mind\",\n        \"Developed the website to detect and monitor the prediction of depression for Chulalongkorn Hospital\",\n        \"(January 2022 - April 2022)\", \n    ],\n    [\n        \"This Website\",\n        \"Developed this website\",\n        \"(March 2022 - Present)\"\n    ],\n    [\n        \"Monster Brawl\",\n        \"Developed the 2D local-multiplayer game\",\n        \"(January 2021 - May 2021)\", \n    ],\n    [\n        \"Cute Queue\",\n        \"Developed the website that uses for queue management\",\n        \"(April 2022 - May 2022)\", \n    ],\n    [\n        \"Meme Web Application\",\n        \"Developed the website that uses for sharing or finding memes\",\n        \"(January 2021 - May 2021)\", \n    ], \n];\nvar Card = function(param) {\n    var topic = param.topic, description = param.description, date = param.date;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {\n        className: \"card-container\",\n        initial: \"offscreen\",\n        whileInView: \"onscreen\",\n        viewport: {\n            once: true,\n            amount: 0.8\n        },\n        variants: cardVariants,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {\n            className: \"card\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"topic\",\n                    children: topic\n                }, void 0, false, {\n                    fileName: \"/Users/pawankanjeam/Library/Mobile Documents/com~apple~CloudDocs/Workspace/Main-Project/Progress/personal-resume/personal-webapp/components/pages/WorkPage.tsx\",\n                    lineNumber: 71,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"description\",\n                    children: description\n                }, void 0, false, {\n                    fileName: \"/Users/pawankanjeam/Library/Mobile Documents/com~apple~CloudDocs/Workspace/Main-Project/Progress/personal-resume/personal-webapp/components/pages/WorkPage.tsx\",\n                    lineNumber: 72,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"date\",\n                    children: date\n                }, void 0, false, {\n                    fileName: \"/Users/pawankanjeam/Library/Mobile Documents/com~apple~CloudDocs/Workspace/Main-Project/Progress/personal-resume/personal-webapp/components/pages/WorkPage.tsx\",\n                    lineNumber: 73,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/pawankanjeam/Library/Mobile Documents/com~apple~CloudDocs/Workspace/Main-Project/Progress/personal-resume/personal-webapp/components/pages/WorkPage.tsx\",\n            lineNumber: 70,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/pawankanjeam/Library/Mobile Documents/com~apple~CloudDocs/Workspace/Main-Project/Progress/personal-resume/personal-webapp/components/pages/WorkPage.tsx\",\n        lineNumber: 63,\n        columnNumber: 5\n    }, _this);\n};\n_c = Card;\nvar WorkPage = function() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"workpage-container\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"info-section\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"header\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"header-container\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"info-topic\",\n                                children: \"Here is what i’ve been through!\"\n                            }, void 0, false, {\n                                fileName: \"/Users/pawankanjeam/Library/Mobile Documents/com~apple~CloudDocs/Workspace/Main-Project/Progress/personal-resume/personal-webapp/components/pages/WorkPage.tsx\",\n                                lineNumber: 84,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"divider\"\n                            }, void 0, false, {\n                                fileName: \"/Users/pawankanjeam/Library/Mobile Documents/com~apple~CloudDocs/Workspace/Main-Project/Progress/personal-resume/personal-webapp/components/pages/WorkPage.tsx\",\n                                lineNumber: 85,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/pawankanjeam/Library/Mobile Documents/com~apple~CloudDocs/Workspace/Main-Project/Progress/personal-resume/personal-webapp/components/pages/WorkPage.tsx\",\n                        lineNumber: 83,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/pawankanjeam/Library/Mobile Documents/com~apple~CloudDocs/Workspace/Main-Project/Progress/personal-resume/personal-webapp/components/pages/WorkPage.tsx\",\n                    lineNumber: 82,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"card-section\",\n                    children: works.map(function(param) {\n                        var _param = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(param, 3), topic = _param[0], description = _param[1], date = _param[2];\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Card, {\n                            topic: topic,\n                            description: description,\n                            date: date\n                        }, topic, false, {\n                            fileName: \"/Users/pawankanjeam/Library/Mobile Documents/com~apple~CloudDocs/Workspace/Main-Project/Progress/personal-resume/personal-webapp/components/pages/WorkPage.tsx\",\n                            lineNumber: 90,\n                            columnNumber: 13\n                        }, _this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/pawankanjeam/Library/Mobile Documents/com~apple~CloudDocs/Workspace/Main-Project/Progress/personal-resume/personal-webapp/components/pages/WorkPage.tsx\",\n                    lineNumber: 88,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/pawankanjeam/Library/Mobile Documents/com~apple~CloudDocs/Workspace/Main-Project/Progress/personal-resume/personal-webapp/components/pages/WorkPage.tsx\",\n            lineNumber: 81,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/pawankanjeam/Library/Mobile Documents/com~apple~CloudDocs/Workspace/Main-Project/Progress/personal-resume/personal-webapp/components/pages/WorkPage.tsx\",\n        lineNumber: 80,\n        columnNumber: 5\n    }, _this);\n};\n_c1 = WorkPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (WorkPage);\nvar _c, _c1;\n$RefreshReg$(_c, \"Card\");\n$RefreshReg$(_c1, \"WorkPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O2lDQUNWO3FCQUNILENBQUM7Ozs7O3lCQUNFOzs7Ozs7aUJBQ0Y7Ozs7O2FBQ0YsQ0FDTjtDQUNIO0FBdkJLVyxNQUFBQSxRQUFRO0FBeUJkLCtEQUFlQSxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYWdlcy9Xb3JrUGFnZS50c3g/ZjI4OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7TmV4dFBhZ2V9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQge21vdGlvbiwgVmFyaWFudHN9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHRvcGljOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIGRhdGU6IHN0cmluZztcbn1cbmNvbnN0IGNhcmRWYXJpYW50czogVmFyaWFudHMgPSB7XG4gIG9mZnNjcmVlbjoge1xuICAgIC8vIHJvdGF0ZTogLTEwLFxuICAgIHdpZHRoOiBcIjUwJVwiLFxuICAgIG9wYWNpdHk6IDAsXG4gIH0sXG4gIG9uc2NyZWVuOiB7XG4gICAgd2lkdGg6IFwiOTAlXCIsXG4gICAgb3BhY2l0eTogMSxcbiAgICAvLyByb3RhdGU6IDAsXG4gICAgdHJhbnNpdGlvbjoge1xuICAgICAgdHlwZTogXCJzcHJpbmdcIixcbiAgICAgIGJvdW5jZTogMC40LFxuICAgICAgZHVyYXRpb246IDAuOCxcbiAgICB9LFxuICB9LFxufTtcblxuY29uc3Qgd29ya3M6IFtzdHJpbmcsIHN0cmluZywgc3RyaW5nXVtdID0gW1xuICBbXG4gICAgXCJEZXByZXNzaW9uIEFwcGxpY2F0aW9uXCIsXG4gICAgXCIoRGV2ZWxvcCBXZWIgQXBwbGljYXRpb24pXCIsXG4gICAgXCJKdW5lIDIwMjEgLSBBdWd1c3QgMjAyMVwiLFxuICBdLFxuICBbXG4gICAgXCJEZXByZXNzaW9uIEFJXCIsXG4gICAgXCJCdWlsdCB0aGUgbW9kZWwgdG8gcHJlZGljdCBkZXByZXNzaW9uIHNjb3Jlc1wiLFxuICAgIFwiKFNlcHRlbWJlciAyMDIxIC0gTm92ZW1iZXIgMjAyMSlcIixcbiAgXSxcbiAgW1xuICAgIFwiRC1NaW5kXCIsXG4gICAgXCJEZXZlbG9wZWQgdGhlIHdlYnNpdGUgdG8gZGV0ZWN0IGFuZCBtb25pdG9yIHRoZSBwcmVkaWN0aW9uIG9mIGRlcHJlc3Npb24gZm9yIENodWxhbG9uZ2tvcm4gSG9zcGl0YWxcIixcbiAgICBcIihKYW51YXJ5IDIwMjIgLSBBcHJpbCAyMDIyKVwiLFxuICBdLFxuICBbXCJUaGlzIFdlYnNpdGVcIiwgXCJEZXZlbG9wZWQgdGhpcyB3ZWJzaXRlXCIsIFwiKE1hcmNoIDIwMjIgLSBQcmVzZW50KVwiXSxcbiAgW1xuICAgIFwiTW9uc3RlciBCcmF3bFwiLFxuICAgIFwiRGV2ZWxvcGVkIHRoZSAyRCBsb2NhbC1tdWx0aXBsYXllciBnYW1lXCIsXG4gICAgXCIoSmFudWFyeSAyMDIxIC0gTWF5IDIwMjEpXCIsXG4gIF0sXG4gIFtcbiAgICBcIkN1dGUgUXVldWVcIixcbiAgICBcIkRldmVsb3BlZCB0aGUgd2Vic2l0ZSB0aGF0IHVzZXMgZm9yIHF1ZXVlIG1hbmFnZW1lbnRcIixcbiAgICBcIihBcHJpbCAyMDIyIC0gTWF5IDIwMjIpXCIsXG4gIF0sXG4gIFtcbiAgICBcIk1lbWUgV2ViIEFwcGxpY2F0aW9uXCIsXG4gICAgXCJEZXZlbG9wZWQgdGhlIHdlYnNpdGUgdGhhdCB1c2VzIGZvciBzaGFyaW5nIG9yIGZpbmRpbmcgbWVtZXNcIixcbiAgICBcIihKYW51YXJ5IDIwMjEgLSBNYXkgMjAyMSlcIixcbiAgXSxcbl07XG5cbmNvbnN0IENhcmQgPSAoe3RvcGljLCBkZXNjcmlwdGlvbiwgZGF0ZX06IFByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPG1vdGlvbi5kaXZcbiAgICAgIGNsYXNzTmFtZT1cImNhcmQtY29udGFpbmVyXCJcbiAgICAgIGluaXRpYWw9XCJvZmZzY3JlZW5cIlxuICAgICAgd2hpbGVJblZpZXc9XCJvbnNjcmVlblwiXG4gICAgICB2aWV3cG9ydD17e29uY2U6IHRydWUsIGFtb3VudDogMC44fX1cbiAgICAgIHZhcmlhbnRzPXtjYXJkVmFyaWFudHN9XG4gICAgPlxuICAgICAgPG1vdGlvbi5kaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcGljXCI+e3RvcGljfTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+e2Rlc2NyaXB0aW9ufTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdGVcIj57ZGF0ZX08L2Rpdj5cbiAgICAgIDwvbW90aW9uLmRpdj5cbiAgICA8L21vdGlvbi5kaXY+XG4gICk7XG59O1xuY29uc3QgV29ya1BhZ2U6IE5leHRQYWdlID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwid29ya3BhZ2UtY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm8tc2VjdGlvblwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImluZm8tdG9waWNcIj5IZXJlIGlzIHdoYXQgaeKAmXZlIGJlZW4gdGhyb3VnaCE8L2gxPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXZpZGVyXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1zZWN0aW9uXCI+XG4gICAgICAgICAge3dvcmtzLm1hcCgoW3RvcGljLCBkZXNjcmlwdGlvbiwgZGF0ZV0pID0+IChcbiAgICAgICAgICAgIDxDYXJkXG4gICAgICAgICAgICAgIHRvcGljPXt0b3BpY31cbiAgICAgICAgICAgICAgZGVzY3JpcHRpb249e2Rlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICBkYXRlPXtkYXRlfVxuICAgICAgICAgICAgICBrZXk9e3RvcGljfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFdvcmtQYWdlO1xuIl0sIm5hbWVzIjpbIm1vdGlvbiIsImNhcmRWYXJpYW50cyIsIm9mZnNjcmVlbiIsIndpZHRoIiwib3BhY2l0eSIsIm9uc2NyZWVuIiwidHJhbnNpdGlvbiIsInR5cGUiLCJib3VuY2UiLCJkdXJhdGlvbiIsIndvcmtzIiwiQ2FyZCIsInRvcGljIiwiZGVzY3JpcHRpb24iLCJkYXRlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW5pdGlhbCIsIndoaWxlSW5WaWV3Iiwidmlld3BvcnQiLCJvbmNlIiwiYW1vdW50IiwidmFyaWFudHMiLCJXb3JrUGFnZSIsImgxIiwibWFwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/pages/WorkPage.tsx\n"));

/***/ })

});