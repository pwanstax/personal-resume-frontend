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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\nvar _this = undefined;\n\n\nvar cardVariants = {\n    offscreen: {\n        y: 300\n    },\n    onscreen: {\n        y: 50,\n        rotate: -10,\n        transition: {\n            type: \"spring\",\n            bounce: 0.4,\n            duration: 0.8\n        }\n    }\n};\nvar hue = function(h) {\n    return \"hsl(\".concat(h, \", 100%, 50%)\");\n};\nvar food = [\n    [\n        \"\\uD83C\\uDF45\",\n        340,\n        10\n    ],\n    [\n        \"\\uD83C\\uDF4A\",\n        20,\n        40\n    ],\n    [\n        \"\\uD83C\\uDF4B\",\n        60,\n        90\n    ],\n    [\n        \"\\uD83C\\uDF50\",\n        80,\n        120\n    ],\n    [\n        \"\\uD83C\\uDF4F\",\n        100,\n        140\n    ],\n    [\n        \"\\uD83E\\uDED0\",\n        205,\n        245\n    ],\n    [\n        \"\\uD83C\\uDF46\",\n        260,\n        290\n    ],\n    [\n        \"\\uD83C\\uDF47\",\n        290,\n        320\n    ], \n];\nvar WorkPage = function() {\n    var Card = function(param) {\n        var _$emoji = param.emoji, _$hueA = param.hueA, _$hueB = param.hueB;\n        var background = \"linear-gradient(306deg, \".concat(hue(_$hueA), \", \").concat(hue(_$hueB), \")\");\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {\n            className: \"card-container\",\n            initial: \"offscreen\",\n            whileInView: \"onscreen\",\n            viewport: {\n                once: true,\n                amount: 0.8\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"splash\",\n                    style: {\n                        background: background\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/pawankanjeam/Library/Mobile Documents/com~apple~CloudDocs/Workspace/Main-Project/Progress/personal-resume/personal-webapp/components/pages/WorkPage.tsx\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {\n                    className: \"card\",\n                    variants: cardVariants,\n                    children: _$emoji\n                }, void 0, false, {\n                    fileName: \"/Users/pawankanjeam/Library/Mobile Documents/com~apple~CloudDocs/Workspace/Main-Project/Progress/personal-resume/personal-webapp/components/pages/WorkPage.tsx\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/pawankanjeam/Library/Mobile Documents/com~apple~CloudDocs/Workspace/Main-Project/Progress/personal-resume/personal-webapp/components/pages/WorkPage.tsx\",\n            lineNumber: 41,\n            columnNumber: 7\n        }, _this);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"workpage-container\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"info-section\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"info-header\",\n                    children: \"Here is what i’ve been through!\"\n                }, void 0, false, {\n                    fileName: \"/Users/pawankanjeam/Library/Mobile Documents/com~apple~CloudDocs/Workspace/Main-Project/Progress/personal-resume/personal-webapp/components/pages/WorkPage.tsx\",\n                    lineNumber: 58,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"divider\"\n                }, void 0, false, {\n                    fileName: \"/Users/pawankanjeam/Library/Mobile Documents/com~apple~CloudDocs/Workspace/Main-Project/Progress/personal-resume/personal-webapp/components/pages/WorkPage.tsx\",\n                    lineNumber: 59,\n                    columnNumber: 9\n                }, _this),\n                \"food.map(([emoji, hueA, hueB]) => (\",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Card, {\n                    emoji: emoji,\n                    hueA: hueA,\n                    hueB: hueB\n                }, emoji, false, {\n                    fileName: \"/Users/pawankanjeam/Library/Mobile Documents/com~apple~CloudDocs/Workspace/Main-Project/Progress/personal-resume/personal-webapp/components/pages/WorkPage.tsx\",\n                    lineNumber: 61,\n                    columnNumber: 5\n                }, _this),\n                \"));\"\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/pawankanjeam/Library/Mobile Documents/com~apple~CloudDocs/Workspace/Main-Project/Progress/personal-resume/personal-webapp/components/pages/WorkPage.tsx\",\n            lineNumber: 57,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/pawankanjeam/Library/Mobile Documents/com~apple~CloudDocs/Workspace/Main-Project/Progress/personal-resume/personal-webapp/components/pages/WorkPage.tsx\",\n        lineNumber: 56,\n        columnNumber: 5\n    }, _this);\n};\n_c = WorkPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (WorkPage);\nvar _c;\n$RefreshReg$(_c, \"WorkPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b21wb25lbnRzL3BhZ2VzL1dvcmtQYWdlLnRzeD9mMjg5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHtOZXh0UGFnZX0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCB7bW90aW9uLCBWYXJpYW50c30gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgZW1vamk6IHN0cmluZztcbiAgaHVlQTogbnVtYmVyO1xuICBodWVCOiBudW1iZXI7XG59XG5jb25zdCBjYXJkVmFyaWFudHM6IFZhcmlhbnRzID0ge1xuICBvZmZzY3JlZW46IHtcbiAgICB5OiAzMDAsXG4gIH0sXG4gIG9uc2NyZWVuOiB7XG4gICAgeTogNTAsXG4gICAgcm90YXRlOiAtMTAsXG4gICAgdHJhbnNpdGlvbjoge1xuICAgICAgdHlwZTogXCJzcHJpbmdcIixcbiAgICAgIGJvdW5jZTogMC40LFxuICAgICAgZHVyYXRpb246IDAuOCxcbiAgICB9LFxuICB9LFxufTtcbmNvbnN0IGh1ZSA9IChoOiBudW1iZXIpID0+IGBoc2woJHtofSwgMTAwJSwgNTAlKWA7XG5cbmNvbnN0IGZvb2Q6IFtzdHJpbmcsIG51bWJlciwgbnVtYmVyXVtdID0gW1xuICBbXCLwn42FXCIsIDM0MCwgMTBdLFxuICBbXCLwn42KXCIsIDIwLCA0MF0sXG4gIFtcIvCfjYtcIiwgNjAsIDkwXSxcbiAgW1wi8J+NkFwiLCA4MCwgMTIwXSxcbiAgW1wi8J+Nj1wiLCAxMDAsIDE0MF0sXG4gIFtcIvCfq5BcIiwgMjA1LCAyNDVdLFxuICBbXCLwn42GXCIsIDI2MCwgMjkwXSxcbiAgW1wi8J+Nh1wiLCAyOTAsIDMyMF0sXG5dO1xuXG5jb25zdCBXb3JrUGFnZTogTmV4dFBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IENhcmQgPSAoe2Vtb2ppLCBodWVBLCBodWVCfTogUHJvcHMpID0+IHtcbiAgICBjb25zdCBiYWNrZ3JvdW5kID0gYGxpbmVhci1ncmFkaWVudCgzMDZkZWcsICR7aHVlKGh1ZUEpfSwgJHtodWUoaHVlQil9KWA7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgY2xhc3NOYW1lPVwiY2FyZC1jb250YWluZXJcIlxuICAgICAgICBpbml0aWFsPVwib2Zmc2NyZWVuXCJcbiAgICAgICAgd2hpbGVJblZpZXc9XCJvbnNjcmVlblwiXG4gICAgICAgIHZpZXdwb3J0PXt7b25jZTogdHJ1ZSwgYW1vdW50OiAwLjh9fVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwbGFzaFwiIHN0eWxlPXt7YmFja2dyb3VuZH19IC8+XG4gICAgICAgIDxtb3Rpb24uZGl2IGNsYXNzTmFtZT1cImNhcmRcIiB2YXJpYW50cz17Y2FyZFZhcmlhbnRzfT5cbiAgICAgICAgICB7ZW1vaml9XG4gICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgIDwvbW90aW9uLmRpdj5cbiAgICApO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3b3JrcGFnZS1jb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mby1zZWN0aW9uXCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJpbmZvLWhlYWRlclwiPkhlcmUgaXMgd2hhdCBp4oCZdmUgYmVlbiB0aHJvdWdoITwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2aWRlclwiIC8+XG4gICAgICAgIGZvb2QubWFwKChbZW1vamksIGh1ZUEsIGh1ZUJdKSA9PiAoXG4gICAgPENhcmQgZW1vamk9e2Vtb2ppfSBodWVBPXtodWVBfSBodWVCPXtodWVCfSBrZXk9e2Vtb2ppfSAvPlxuICApKTtcbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgV29ya1BhZ2U7XG4iXSwibmFtZXMiOlsibW90aW9uIiwiY2FyZFZhcmlhbnRzIiwib2Zmc2NyZWVuIiwieSIsIm9uc2NyZWVuIiwicm90YXRlIiwidHJhbnNpdGlvbiIsInR5cGUiLCJib3VuY2UiLCJkdXJhdGlvbiIsImh1ZSIsImgiLCJmb29kIiwiV29ya1BhZ2UiLCJDYXJkIiwiZW1vamkiLCJodWVBIiwiaHVlQiIsImJhY2tncm91bmQiLCJkaXYiLCJjbGFzc05hbWUiLCJpbml0aWFsIiwid2hpbGVJblZpZXciLCJ2aWV3cG9ydCIsIm9uY2UiLCJhbW91bnQiLCJzdHlsZSIsInZhcmlhbnRzIiwiaDEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/pages/WorkPage.tsx\n"));

/***/ })

});