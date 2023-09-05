exports.id = 336;
exports.ids = [336];
exports.modules = {

/***/ 51160:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   r: () => (/* binding */ reader)
/* harmony export */ });
/* harmony import */ var _keystatic_core_reader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76326);
/* harmony import */ var _keystatic_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25504);


const reader = (0,_keystatic_core_reader__WEBPACK_IMPORTED_MODULE_0__/* .createReader */ .t)(process.cwd(), _keystatic_config__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z);


/***/ }),

/***/ 25504:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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


/***/ }),

/***/ 7618:
/***/ (() => {



/***/ })

};
;