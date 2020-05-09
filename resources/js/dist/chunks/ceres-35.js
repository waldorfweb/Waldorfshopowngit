(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[35],{

/***/ "./node_modules/Ceres/resources/js/src/app/components/item/SetQuantityInput.vue":
/*!**************************************************************************************!*\
  !*** ./node_modules/Ceres/resources/js/src/app/components/item/SetQuantityInput.vue ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SetQuantityInput_vue_vue_type_template_id_0416040d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SetQuantityInput.vue?vue&type=template&id=0416040d& */ "./node_modules/Ceres/resources/js/src/app/components/item/SetQuantityInput.vue?vue&type=template&id=0416040d&");
/* harmony import */ var _SetQuantityInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SetQuantityInput.vue?vue&type=script&lang=js& */ "./node_modules/Ceres/resources/js/src/app/components/item/SetQuantityInput.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SetQuantityInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SetQuantityInput_vue_vue_type_template_id_0416040d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SetQuantityInput_vue_vue_type_template_id_0416040d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "node_modules/Ceres/resources/js/src/app/components/item/SetQuantityInput.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./node_modules/Ceres/resources/js/src/app/components/item/SetQuantityInput.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/Ceres/resources/js/src/app/components/item/SetQuantityInput.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_loader_lib_index_js_vue_loader_options_SetQuantityInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../vue-loader/lib??vue-loader-options!./SetQuantityInput.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./node_modules/Ceres/resources/js/src/app/components/item/SetQuantityInput.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_vue_loader_lib_index_js_vue_loader_options_SetQuantityInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./node_modules/Ceres/resources/js/src/app/components/item/SetQuantityInput.vue?vue&type=template&id=0416040d&":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/Ceres/resources/js/src/app/components/item/SetQuantityInput.vue?vue&type=template&id=0416040d& ***!
  \*********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_SetQuantityInput_vue_vue_type_template_id_0416040d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../vue-loader/lib??vue-loader-options!./SetQuantityInput.vue?vue&type=template&id=0416040d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/Ceres/resources/js/src/app/components/item/SetQuantityInput.vue?vue&type=template&id=0416040d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_SetQuantityInput_vue_vue_type_template_id_0416040d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_SetQuantityInput_vue_vue_type_template_id_0416040d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./node_modules/Ceres/resources/js/src/app/components/item/SetQuantityInput.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./node_modules/Ceres/resources/js/src/app/components/item/SetQuantityInput.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
    name: "set-quantity-input",

    inject: {
        itemId: {
            default: null
        }
    },

    computed:
    {
        setComponentConfig()
        {
            const itemSetId = this.$store.state.items.itemSetId;

            const setComponents = this.$store.getters[`${itemSetId}/currentItemVariation`].setComponents;

            if(App.isShopBuilder)
            {
                return setComponents[0];
            }
            else
            {
                return setComponents.find(setComponent => setComponent.itemId === this.itemId);
            }
        },

        currentVariation()
        {
            return this.$store.getters[`${this.itemId}/currentItemVariation`];
        },

        isLoading()
        {
            return this.$store.state.items.isAddToBasketLoading === this.currentVariation.variation.id || this.$store.state.items.isSetLoading;
        },

        isSalable()
        {
            return !!this.currentVariation.filter && this.currentVariation.filter.isSalable;
        },

        currentQuantity:
        {
            get()
            {
                return this.$store.state.items[this.itemId] && this.$store.state.items[this.itemId].variationOrderQuantity;
            },

            set(quantity)
            {
                this.$store.commit(`${this.itemId}/setVariationOrderQuantity`, quantity);
            }
        }
    }
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/Ceres/resources/js/src/app/components/item/SetQuantityInput.vue?vue&type=template&id=0416040d&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/Ceres/resources/js/src/app/components/item/SetQuantityInput.vue?vue&type=template&id=0416040d& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
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
  return _c("quantity-input", {
    staticClass: "widget-alignment qty-set",
    attrs: {
      value: _vm.currentQuantity,
      min: _vm.setComponentConfig.minimumOrderQuantity,
      max: _vm.setComponentConfig.maximumOrderQuantity,
      "variation-id": _vm.currentVariation.variation.id,
      waiting:
        !_vm.setComponentConfig.orderQuantityPossible ||
        _vm.isLoading ||
        !_vm.isSalable,
      "use-appearance": true
    },
    on: {
      "quantity-change": function($event) {
        _vm.currentQuantity = $event
      }
    }
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
//# sourceMappingURL=ceres-35.js.map