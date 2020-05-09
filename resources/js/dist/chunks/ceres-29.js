(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[29],{

/***/ "./node_modules/Ceres/resources/js/src/app/components/item/ItemBundle.vue":
/*!********************************************************************************!*\
  !*** ./node_modules/Ceres/resources/js/src/app/components/item/ItemBundle.vue ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ItemBundle_vue_vue_type_template_id_3ddd2ac5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ItemBundle.vue?vue&type=template&id=3ddd2ac5& */ "./node_modules/Ceres/resources/js/src/app/components/item/ItemBundle.vue?vue&type=template&id=3ddd2ac5&");
/* harmony import */ var _ItemBundle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ItemBundle.vue?vue&type=script&lang=js& */ "./node_modules/Ceres/resources/js/src/app/components/item/ItemBundle.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ItemBundle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ItemBundle_vue_vue_type_template_id_3ddd2ac5___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ItemBundle_vue_vue_type_template_id_3ddd2ac5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "node_modules/Ceres/resources/js/src/app/components/item/ItemBundle.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./node_modules/Ceres/resources/js/src/app/components/item/ItemBundle.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/Ceres/resources/js/src/app/components/item/ItemBundle.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_loader_lib_index_js_vue_loader_options_ItemBundle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../vue-loader/lib??vue-loader-options!./ItemBundle.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./node_modules/Ceres/resources/js/src/app/components/item/ItemBundle.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_vue_loader_lib_index_js_vue_loader_options_ItemBundle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./node_modules/Ceres/resources/js/src/app/components/item/ItemBundle.vue?vue&type=template&id=3ddd2ac5&":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/Ceres/resources/js/src/app/components/item/ItemBundle.vue?vue&type=template&id=3ddd2ac5& ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_ItemBundle_vue_vue_type_template_id_3ddd2ac5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../vue-loader/lib??vue-loader-options!./ItemBundle.vue?vue&type=template&id=3ddd2ac5& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/Ceres/resources/js/src/app/components/item/ItemBundle.vue?vue&type=template&id=3ddd2ac5&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_ItemBundle_vue_vue_type_template_id_3ddd2ac5___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_ItemBundle_vue_vue_type_template_id_3ddd2ac5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./node_modules/Ceres/resources/js/src/app/components/item/ItemBundle.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./node_modules/Ceres/resources/js/src/app/components/item/ItemBundle.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({

    name: "item-bundle",

    props: {
        paddingClasses: {
            type: String,
            default: null
        },
        paddingInlineStyles: {
            type: String,
            default: null
        },
        bundleType: String,
        bundleComponents: Array
    },
    
    computed:
    {
        showItemBundleItems()
        {
            return App.bundleSetting !== 1 && this.bundleType === "bundle";
        }
    },

    methods:
    {
        getBundleInnerText(item)
        {
            item.variation.bundleType = null;

            return item;
        }
    }
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/Ceres/resources/js/src/app/components/item/ItemBundle.vue?vue&type=template&id=3ddd2ac5&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/Ceres/resources/js/src/app/components/item/ItemBundle.vue?vue&type=template&id=3ddd2ac5& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm.showItemBundleItems
      ? _c(
          "div",
          { staticClass: "small font-weight-bold mb-3" },
          [
            _c("strong", [
              _vm._v(
                _vm._s(_vm.$translate("Ceres::Template.itemBundleContent"))
              )
            ]),
            _vm._v(" "),
            _vm._l(_vm.bundleComponents, function(item) {
              return _c(
                "div",
                { class: _vm.paddingClasses, style: _vm.paddingInlineStyles },
                [
                  _c("span", { staticClass: "text-muted" }, [
                    _vm._v(_vm._s(item.quantity) + " x")
                  ]),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticClass: "text-appearance",
                      attrs: { href: _vm._f("itemURL")(item.data) }
                    },
                    [
                      _vm._v(
                        " " +
                          _vm._s(
                            _vm._f("itemName")(
                              _vm.getBundleInnerText(item.data)
                            )
                          ) +
                          " "
                      )
                    ]
                  )
                ]
              )
            })
          ],
          2
        )
      : _c("div", [_vm._t("default")], 2)
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
//# sourceMappingURL=ceres-29.js.map