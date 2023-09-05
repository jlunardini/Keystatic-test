"use strict";
(() => {
var exports = {};
exports.id = 880;
exports.ids = [880];
exports.modules = {

/***/ 56786:
/***/ ((module) => {

module.exports = require("next/dist/compiled/react/jsx-runtime");

/***/ }),

/***/ 6113:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 73292:
/***/ ((module) => {

module.exports = require("fs/promises");

/***/ }),

/***/ 6005:
/***/ ((module) => {

module.exports = require("node:crypto");

/***/ }),

/***/ 22037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 71017:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 12781:
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ 58601:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  headerHooks: () => (/* binding */ headerHooks),
  originalPathname: () => (/* binding */ originalPathname),
  requestAsyncStorage: () => (/* binding */ requestAsyncStorage),
  routeModule: () => (/* binding */ routeModule),
  serverHooks: () => (/* binding */ serverHooks),
  staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),
  staticGenerationBailout: () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./app/api/keystatic/[...params]/route.ts
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  GET: () => (GET),
  POST: () => (POST)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(42394);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(69692);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-kind.js
var route_kind = __webpack_require__(19513);
// EXTERNAL MODULE: ./node_modules/@keystatic/next/route-handler/dist/keystatic-next-route-handler.esm.js + 3 modules
var keystatic_next_route_handler_esm = __webpack_require__(78039);
// EXTERNAL MODULE: ./keystatic.config.ts
var keystatic_config = __webpack_require__(25504);
;// CONCATENATED MODULE: ./app/api/keystatic/[...params]/route.ts


const { POST, GET } = (0,keystatic_next_route_handler_esm/* makeRouteHandler */.J)({
    config: keystatic_config/* default */.Z
});

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fkeystatic%2F%5B...params%5D%2Froute&name=app%2Fapi%2Fkeystatic%2F%5B...params%5D%2Froute&pagePath=private-next-app-dir%2Fapi%2Fkeystatic%2F%5B...params%5D%2Froute.ts&appDir=%2FUsers%2Fjlunardini%2FSites%2Fkeystatic-default%2Fapp&appPaths=%2Fapi%2Fkeystatic%2F%5B...params%5D%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

// @ts-ignore this need to be imported from next/dist to be external


// @ts-expect-error - replaced by webpack/turbopack loader

const AppRouteRouteModule = app_route_module.AppRouteRouteModule;
// We inject the nextConfigOutput here so that we can use them in the route
// module.
const nextConfigOutput = ""
const routeModule = new AppRouteRouteModule({
    definition: {
        kind: route_kind.RouteKind.APP_ROUTE,
        page: "/api/keystatic/[...params]/route",
        pathname: "/api/keystatic/[...params]",
        filename: "route",
        bundlePath: "app/api/keystatic/[...params]/route"
    },
    resolvedPagePath: "/Users/jlunardini/Sites/keystatic-default/app/api/keystatic/[...params]/route.ts",
    nextConfigOutput,
    userland: route_namespaceObject
});
// Pull out the exports that we need to expose from the module. This should
// be eliminated when we've moved the other routes to the new format. These
// are used to hook into the route.
const { requestAsyncStorage , staticGenerationAsyncStorage , serverHooks , headerHooks , staticGenerationBailout  } = routeModule;
const originalPathname = "/api/keystatic/[...params]/route";


//# sourceMappingURL=app-route.js.map

/***/ }),

/***/ 25504:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _keystatic_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28120);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_keystatic_core__WEBPACK_IMPORTED_MODULE_0__/* .config */ .vc)({
    storage: {
        kind: "local"
    },
    collections: {
        posts: (0,_keystatic_core__WEBPACK_IMPORTED_MODULE_0__/* .collection */ .hJ)({
            label: "Posts",
            slugField: "title",
            path: "posts/*",
            format: {
                contentField: "content"
            },
            schema: {
                title: _keystatic_core__WEBPACK_IMPORTED_MODULE_0__/* .fields */ .XU.slug({
                    name: {
                        label: "Title"
                    }
                }),
                content: _keystatic_core__WEBPACK_IMPORTED_MODULE_0__/* .fields */ .XU.document({
                    label: "Content",
                    formatting: true,
                    dividers: true,
                    links: true,
                    images: true
                })
            }
        })
    }
}));


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [478,120,335], () => (__webpack_exec__(58601)));
module.exports = __webpack_exports__;

})();