"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 663:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
;// CONCATENATED MODULE: ./components/layout/CustomizedTabs.js






const StyledTabs = (0,styles_.styled)((props)=>/*#__PURE__*/ jsx_runtime_.jsx(material_.Tabs, {
        ...props,
        onChange: props.onChange,
        TabIndicatorProps: {
            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "MuiTabs-indicatorSpan"
            })
        },
        centered: true
    })
)({
    "& .MuiTabs-indicator": {
        display: "flex",
        justifyContent: "center",
        backgroundColor: "transparent"
    },
    "& .MuiTabs-indicatorSpan": {
        maxWidth: 30,
        width: "100%",
        backgroundColor: "#566F94"
    }
});
const StyledTab = (0,styles_.styled)((props)=>/*#__PURE__*/ jsx_runtime_.jsx(material_.Tab, {
        disableRipple: true,
        ...props
    })
)(({ theme  })=>({
        textTransform: "none",
        marginRight: theme.spacing(3),
        color: "black",
        "&.Mui-selected": {
            color: "#566F94",
            fontWeight: "bold"
        }
    })
);
const CustomizedTabs = ()=>{
    const { 0: value , 1: setValue  } = (0,external_react_.useState)("/");
    const router = (0,router_namespaceObject.useRouter)();
    const handleChange = (event, newValue)=>{
        router.push({
            pathname: newValue
        }, undefined, {
            shallow: true
        });
        setValue(newValue);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(StyledTabs, {
        value: value,
        onChange: handleChange,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(StyledTab, {
                label: "Home",
                value: "/"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(StyledTab, {
                label: "Portfolio",
                value: "/PortfolioPage"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(StyledTab, {
                label: "About Me",
                value: "/AboutMePage"
            })
        ]
    });
};
/* harmony default export */ const layout_CustomizedTabs = (CustomizedTabs);

;// CONCATENATED MODULE: ./components/layout/MainNavigation.js


// import Link from "next/link";


const MainNavigation = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
        justifyContent: "center",
        children: /*#__PURE__*/ jsx_runtime_.jsx(material_.AppBar, {
            sx: {
                backgroundColor: "#EFF1F6"
            },
            position: "static",
            elevation: 0,
            children: /*#__PURE__*/ jsx_runtime_.jsx(layout_CustomizedTabs, {})
        })
    });
};
/* harmony default export */ const layout_MainNavigation = (MainNavigation);

;// CONCATENATED MODULE: ./components/layout/Layout.js



function Layout(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(layout_MainNavigation, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                children: props.children
            })
        ]
    });
}
/* harmony default export */ const layout_Layout = (Layout);

;// CONCATENATED MODULE: ./pages/_app.js




function MyApp({ Component , pageProps  }) {
    const theme = (0,styles_.createTheme)({
        typography: {
            fontFamily: "Work Sans"
        }
    });
    return /*#__PURE__*/ jsx_runtime_.jsx(styles_.ThemeProvider, {
        theme: theme,
        children: /*#__PURE__*/ jsx_runtime_.jsx(layout_Layout, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        })
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 5692:
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ 8442:
/***/ ((module) => {

module.exports = require("@mui/material/styles");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [686,505,397,664], () => (__webpack_exec__(663)));
module.exports = __webpack_exports__;

})();