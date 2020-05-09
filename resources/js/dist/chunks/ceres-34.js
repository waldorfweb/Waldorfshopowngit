(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[34],{

/***/ "./node_modules/Ceres/resources/js/src/app/components/item/SetPrice.vue":
/*!******************************************************************************!*\
  !*** ./node_modules/Ceres/resources/js/src/app/components/item/SetPrice.vue ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SetPrice_vue_vue_type_template_id_5c223457___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SetPrice.vue?vue&type=template&id=5c223457& */ "./node_modules/Ceres/resources/js/src/app/components/item/SetPrice.vue?vue&type=template&id=5c223457&");
/* harmony import */ var _SetPrice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SetPrice.vue?vue&type=script&lang=js& */ "./node_modules/Ceres/resources/js/src/app/components/item/SetPrice.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SetPrice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SetPrice_vue_vue_type_template_id_5c223457___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SetPrice_vue_vue_type_template_id_5c223457___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "node_modules/Ceres/resources/js/src/app/components/item/SetPrice.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./node_modules/Ceres/resources/js/src/app/components/item/SetPrice.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/Ceres/resources/js/src/app/components/item/SetPrice.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_loader_lib_index_js_vue_loader_options_SetPrice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../vue-loader/lib??vue-loader-options!./SetPrice.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./node_modules/Ceres/resources/js/src/app/components/item/SetPrice.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_vue_loader_lib_index_js_vue_loader_options_SetPrice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./node_modules/Ceres/resources/js/src/app/components/item/SetPrice.vue?vue&type=template&id=5c223457&":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/Ceres/resources/js/src/app/components/item/SetPrice.vue?vue&type=template&id=5c223457& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_SetPrice_vue_vue_type_template_id_5c223457___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../vue-loader/lib??vue-loader-options!./SetPrice.vue?vue&type=template&id=5c223457& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/Ceres/resources/js/src/app/components/item/SetPrice.vue?vue&type=template&id=5c223457&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_SetPrice_vue_vue_type_template_id_5c223457___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_SetPrice_vue_vue_type_template_id_5c223457___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./node_modules/Ceres/resources/js/src/app/components/item/SetPrice.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./node_modules/Ceres/resources/js/src/app/components/item/SetPrice.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************/
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
//

/* harmony default export */ __webpack_exports__["default"] = ({
    name: "set-price",

    props:
    {
        showCrossPrice: {
            type: Boolean,
            default: true
        }
    },

    inject: {
        itemId: {
            default: null
        }
    },

    computed:
    {
        currentVariation() {
            return this.$store.getters[`${this.itemId}/currentItemVariation`]
        },

        variationTotalPrice() {
            return this.$store.getters[`${this.itemId}/variationTotalPrice`];
        },

        setNoRebatePrice() {
            if(this.isSet)
            {
                if(this.isSetLoading)
                {
                    return (this.variationTotalPrice / (100 - this.currentVariation.item.rebate)) * 100;
                }
                else
                {
                    return this.variationTotalPrice;
                }
            }

            return null;
        },

        variationSetRebatePrice() {
            if(this.isSetLoading)
            {
                return this.variationTotalPrice
            }
            else
            {
                return this.variationTotalPrice * (1 - (this.currentVariation.item.rebate / 100));
            }
        },

        isVariationSelected() {
            if(this.isSet)
            {
                return this.$store.getters["itemSetAllVariationSelected"];
            }
            else
            {
                return this.$store.state.items[this.itemId].variationSelect.isVariationSelected
            }
        },

        isSet() {
            return this.currentVariation.item.itemType === "set" ||
                (App.isShopBuilder && this.currentVariation.item.itemType !== undefined);
        },

        isSetLoading() {
            return this.$store.state.items.isSetLoading;
        },

        dynamicPrice() {
            return this.isSet ? this.variationSetRebatePrice : this.variationTotalPrice;
        },

        dynamicTranslationKey()
        {
            return this.isSet ? "dynamicSetPrice" : "dynamicSetComponentPrice";
        }
    }
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/Ceres/resources/js/src/app/components/item/SetPrice.vue?vue&type=template&id=5c223457&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/Ceres/resources/js/src/app/components/item/SetPrice.vue?vue&type=template&id=5c223457& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "has-crossprice" }, [
    _vm.showCrossPrice && _vm.isSet && this.currentVariation.item.rebate > 0
      ? _c("div", { staticClass: "crossprice" }, [
          _c("del", { staticClass: "text-muted small text-appearance" }, [
            _vm._v(
              "\n            " +
                _vm._s(
                  _vm._f("itemCrossPrice")(
                    _vm._f("currency")(
                      _vm.setNoRebatePrice,
                      _vm.currentVariation.prices.set.currency
                    )
                  )
                ) +
                "\n        "
            )
          ])
        ])
      : _vm._e(),
    _vm._v(" "),
    _c("span", { staticClass: "price h1" }, [
      _c(
        "span",
        [
          !_vm.isVariationSelected || _vm.isSetLoading
            ? [
                _vm._v(
                  "\n                " +
                    _vm._s(
                      _vm.$translate(
                        "Ceres::Template." + _vm.dynamicTranslationKey,
                        {
                          price: _vm.$options.filters.currency(
                            _vm.dynamicPrice,
                            _vm.currentVariation.prices.set.currency
                          )
                        }
                      )
                    ) +
                    "\n            "
                )
              ]
            : [
                _vm._v(
                  "\n                " +
                    _vm._s(
                      _vm._f("currency")(
                        _vm.dynamicPrice,
                        _vm.currentVariation.prices.set.currency
                      )
                    ) +
                    "\n            "
                )
              ]
        ],
        2
      ),
      _vm._v(" "),
      _c("sup", [_vm._v("*")])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
//# sourceMappingURL=ceres-34.js.map