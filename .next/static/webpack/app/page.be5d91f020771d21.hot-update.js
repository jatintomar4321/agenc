"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/page.js":
/*!*********************!*\
  !*** ./app/page.js ***!
  \*********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/value/use-scroll.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/value/use-transform.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs\");\n/* harmony import */ var _components_Hero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Hero */ \"(app-pages-browser)/./app/components/Hero.jsx\");\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Navbar */ \"(app-pages-browser)/./app/components/Navbar.jsx\");\n/* harmony import */ var _components_Demo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Demo */ \"(app-pages-browser)/./app/components/Demo.jsx\");\n/* harmony import */ var _components_Slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Slider */ \"(app-pages-browser)/./app/components/Slider.jsx\");\n/* harmony import */ var locomotive_scroll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! locomotive-scroll */ \"(app-pages-browser)/./node_modules/locomotive-scroll/dist/locomotive-scroll.modern.mjs\");\n/* harmony import */ var _components_PricingTable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/PricingTable */ \"(app-pages-browser)/./app/components/PricingTable.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst Page = ()=>{\n    _s();\n    const scrollRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const { scrollYProgress } = (0,framer_motion__WEBPACK_IMPORTED_MODULE_8__.useScroll)();\n    const heroScale = (0,framer_motion__WEBPACK_IMPORTED_MODULE_9__.useTransform)(scrollYProgress, [\n        0,\n        0.5\n    ], [\n        1,\n        0.7\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"Page.useEffect\": ()=>{\n            if (scrollRef.current) {\n                const locomotiveScroll = new locomotive_scroll__WEBPACK_IMPORTED_MODULE_6__[\"default\"]({\n                    el: scrollRef.current,\n                    smooth: true\n                });\n                return ({\n                    \"Page.useEffect\": ()=>{\n                        locomotiveScroll.destroy() // Clean up on component unmount\n                        ;\n                    }\n                })[\"Page.useEffect\"];\n            }\n        }\n    }[\"Page.useEffect\"], []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: scrollRef,\n        className: \"w-full bg-[#0C0C0C] h-full pt-10\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/jatintomar/Desktop/agenc/app/page.js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_10__.motion.div, {\n                style: {\n                    scale: heroScale\n                },\n                className: \"sticky top-0\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Hero__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/jatintomar/Desktop/agenc/app/page.js\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/jatintomar/Desktop/agenc/app/page.js\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Demo__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/jatintomar/Desktop/agenc/app/page.js\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-[#0C0C0C]\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Slider__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        h1: \"Faster\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jatintomar/Desktop/agenc/app/page.js\",\n                        lineNumber: 41,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Slider__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        h1: \"Smarter\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jatintomar/Desktop/agenc/app/page.js\",\n                        lineNumber: 42,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Slider__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        h1: \"Limitless\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jatintomar/Desktop/agenc/app/page.js\",\n                        lineNumber: 44,\n                        columnNumber: 7\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jatintomar/Desktop/agenc/app/page.js\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PricingTable__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/jatintomar/Desktop/agenc/app/page.js\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jatintomar/Desktop/agenc/app/page.js\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Page, \"z8NtYI5qT7VGTj/q+q9qy79K0o8=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_8__.useScroll,\n        framer_motion__WEBPACK_IMPORTED_MODULE_9__.useTransform\n    ];\n});\n_c = Page;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Page);\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVnRDtBQUNlO0FBQzNCO0FBQ0k7QUFDSjtBQUNJO0FBRVE7QUFDSTtBQUVwRCxNQUFNWSxPQUFPOztJQUNYLE1BQU1DLFlBQVlaLDZDQUFNQSxDQUFDO0lBQ3pCLE1BQU0sRUFBRWEsZUFBZSxFQUFFLEdBQUdWLHdEQUFTQTtJQUVyQyxNQUFNVyxZQUFZViwyREFBWUEsQ0FBQ1MsaUJBQWlCO1FBQUM7UUFBRztLQUFJLEVBQUU7UUFBQztRQUFHO0tBQUk7SUFFbEVaLGdEQUFTQTswQkFBQztZQUNSLElBQUlXLFVBQVVHLE9BQU8sRUFBRTtnQkFDckIsTUFBTUMsbUJBQW1CLElBQUlQLHlEQUFnQkEsQ0FBQztvQkFDNUNRLElBQUlMLFVBQVVHLE9BQU87b0JBQ3JCRyxRQUFRO2dCQUNWO2dCQUVBO3NDQUFPO3dCQUNMRixpQkFBaUJHLE9BQU8sR0FBRyxnQ0FBZ0M7O29CQUM3RDs7WUFDRjtRQUNGO3lCQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ0M7UUFBSUMsS0FBS1Q7UUFBV1UsV0FBVTs7MEJBQzdCLDhEQUFDaEIsMERBQU1BOzs7OzswQkFDUCw4REFBQ0osa0RBQU1BLENBQUNrQixHQUFHO2dCQUFDRyxPQUFPO29CQUFFQyxPQUFPVjtnQkFBVTtnQkFBR1EsV0FBVTswQkFDakQsNEVBQUNqQix3REFBSUE7Ozs7Ozs7Ozs7MEJBR1AsOERBQUNFLHdEQUFJQTs7Ozs7MEJBQ0wsOERBQUNhO2dCQUFJRSxXQUFVOztrQ0FDZiw4REFBQ2QsMERBQU1BO3dCQUFDaUIsSUFBRzs7Ozs7O2tDQUNYLDhEQUFDakIsMERBQU1BO3dCQUFDaUIsSUFBRzs7Ozs7O2tDQUVYLDhEQUFDakIsMERBQU1BO3dCQUFDaUIsSUFBRzs7Ozs7Ozs7Ozs7OzBCQUVYLDhEQUFDZixnRUFBWUE7Ozs7Ozs7Ozs7O0FBTW5CO0dBdkNNQzs7UUFFd0JSLG9EQUFTQTtRQUVuQkMsdURBQVlBOzs7S0FKMUJPO0FBeUNOLGlFQUFlQSxJQUFJQSxFQUFBIiwic291cmNlcyI6WyIvVXNlcnMvamF0aW50b21hci9EZXNrdG9wL2FnZW5jL2FwcC9wYWdlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5cbmltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgbW90aW9uLCB1c2VTY3JvbGwsIHVzZVRyYW5zZm9ybSB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nXG5pbXBvcnQgSGVybyBmcm9tICcuL2NvbXBvbmVudHMvSGVybydcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi9jb21wb25lbnRzL05hdmJhcidcbmltcG9ydCBEZW1vIGZyb20gJy4vY29tcG9uZW50cy9EZW1vJ1xuaW1wb3J0IFNsaWRlciBmcm9tICcuL2NvbXBvbmVudHMvU2xpZGVyJ1xuXG5pbXBvcnQgTG9jb21vdGl2ZVNjcm9sbCBmcm9tICdsb2NvbW90aXZlLXNjcm9sbCdcbmltcG9ydCBQcmljaW5nVGFibGUgZnJvbSAnLi9jb21wb25lbnRzL1ByaWNpbmdUYWJsZSdcblxuY29uc3QgUGFnZSA9ICgpID0+IHtcbiAgY29uc3Qgc2Nyb2xsUmVmID0gdXNlUmVmKG51bGwpXG4gIGNvbnN0IHsgc2Nyb2xsWVByb2dyZXNzIH0gPSB1c2VTY3JvbGwoKVxuICBcbiAgY29uc3QgaGVyb1NjYWxlID0gdXNlVHJhbnNmb3JtKHNjcm9sbFlQcm9ncmVzcywgWzAsIDAuNV0sIFsxLCAwLjddKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHNjcm9sbFJlZi5jdXJyZW50KSB7XG4gICAgICBjb25zdCBsb2NvbW90aXZlU2Nyb2xsID0gbmV3IExvY29tb3RpdmVTY3JvbGwoe1xuICAgICAgICBlbDogc2Nyb2xsUmVmLmN1cnJlbnQsXG4gICAgICAgIHNtb290aDogdHJ1ZSxcbiAgICAgIH0pXG5cbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIGxvY29tb3RpdmVTY3JvbGwuZGVzdHJveSgpIC8vIENsZWFuIHVwIG9uIGNvbXBvbmVudCB1bm1vdW50XG4gICAgICB9XG4gICAgfVxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDxkaXYgcmVmPXtzY3JvbGxSZWZ9IGNsYXNzTmFtZT1cInctZnVsbCBiZy1bIzBDMEMwQ10gaC1mdWxsIHB0LTEwXCI+XG4gICAgICA8TmF2YmFyIC8+XG4gICAgICA8bW90aW9uLmRpdiBzdHlsZT17eyBzY2FsZTogaGVyb1NjYWxlIH19IGNsYXNzTmFtZT0nc3RpY2t5IHRvcC0wJz5cbiAgICAgICAgPEhlcm8gLz5cblxuICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgPERlbW8gLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdiZy1bIzBDMEMwQ10nPlxuICAgICAgPFNsaWRlciBoMT1cIkZhc3RlclwiLz5cbiAgICAgIDxTbGlkZXIgaDE9XCJTbWFydGVyXCIvPlxuXG4gICAgICA8U2xpZGVyIGgxPVwiTGltaXRsZXNzXCIvPlxuICAgICAgPC9kaXY+XG4gICAgICA8UHJpY2luZ1RhYmxlLz5cblxuXG4gICAgICBcbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQYWdlXG5cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJlZiIsInVzZUVmZmVjdCIsIm1vdGlvbiIsInVzZVNjcm9sbCIsInVzZVRyYW5zZm9ybSIsIkhlcm8iLCJOYXZiYXIiLCJEZW1vIiwiU2xpZGVyIiwiTG9jb21vdGl2ZVNjcm9sbCIsIlByaWNpbmdUYWJsZSIsIlBhZ2UiLCJzY3JvbGxSZWYiLCJzY3JvbGxZUHJvZ3Jlc3MiLCJoZXJvU2NhbGUiLCJjdXJyZW50IiwibG9jb21vdGl2ZVNjcm9sbCIsImVsIiwic21vb3RoIiwiZGVzdHJveSIsImRpdiIsInJlZiIsImNsYXNzTmFtZSIsInN0eWxlIiwic2NhbGUiLCJoMSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.js\n"));

/***/ })

});