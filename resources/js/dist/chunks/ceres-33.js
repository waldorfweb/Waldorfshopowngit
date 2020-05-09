(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[33],{

/***/ "./node_modules/Ceres/resources/js/src/app/components/item/QuantityInput.vue":
/*!***********************************************************************************!*\
  !*** ./node_modules/Ceres/resources/js/src/app/components/item/QuantityInput.vue ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _QuantityInput_vue_vue_type_template_id_5d08d642___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QuantityInput.vue?vue&type=template&id=5d08d642& */ "./node_modules/Ceres/resources/js/src/app/components/item/QuantityInput.vue?vue&type=template&id=5d08d642&");
/* harmony import */ var _QuantityInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QuantityInput.vue?vue&type=script&lang=js& */ "./node_modules/Ceres/resources/js/src/app/components/item/QuantityInput.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _QuantityInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _QuantityInput_vue_vue_type_template_id_5d08d642___WEBPACK_IMPORTED_MODULE_0__["render"],
  _QuantityInput_vue_vue_type_template_id_5d08d642___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "node_modules/Ceres/resources/js/src/app/components/item/QuantityInput.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./node_modules/Ceres/resources/js/src/app/components/item/QuantityInput.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************!*\
  !*** ./node_modules/Ceres/resources/js/src/app/components/item/QuantityInput.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_loader_lib_index_js_vue_loader_options_QuantityInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../vue-loader/lib??vue-loader-options!./QuantityInput.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./node_modules/Ceres/resources/js/src/app/components/item/QuantityInput.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_vue_loader_lib_index_js_vue_loader_options_QuantityInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./node_modules/Ceres/resources/js/src/app/components/item/QuantityInput.vue?vue&type=template&id=5d08d642&":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/Ceres/resources/js/src/app/components/item/QuantityInput.vue?vue&type=template&id=5d08d642& ***!
  \******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_QuantityInput_vue_vue_type_template_id_5d08d642___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../vue-loader/lib??vue-loader-options!./QuantityInput.vue?vue&type=template&id=5d08d642& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/Ceres/resources/js/src/app/components/item/QuantityInput.vue?vue&type=template&id=5d08d642&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_QuantityInput_vue_vue_type_template_id_5d08d642___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_QuantityInput_vue_vue_type_template_id_5d08d642___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./node_modules/Ceres/resources/js/src/app/components/item/QuantityInput.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./node_modules/Ceres/resources/js/src/app/components/item/QuantityInput.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helper_number__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helper/number */ "./node_modules/Ceres/resources/js/src/app/helper/number.js");
/* harmony import */ var _helper_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helper/utils */ "./node_modules/Ceres/resources/js/src/app/helper/utils.js");
/* harmony import */ var _helper_debounce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helper/debounce */ "./node_modules/Ceres/resources/js/src/app/helper/debounce.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["default"] = ({
    name: "quantity-input",

    props: {
        value: {
            type: Number,
            required: true
        },
        timeout: {
            type: Number,
            required: false,
            default: 500
        },
        min: {
            type: Number,
            required: false,
            default: 0
        },
        max: {
            type: Number,
            required: false
        },
        interval: {
            type: Number,
            required: false,
            default: 1
        },
        waiting: {
            type: Boolean,
            required: false
        },
        variationId: {
            type: Number,
            required: false
        },
        useAppearance: Boolean
    },

    data()
    {
        return {
            compValue:      this.value,
            compMin:        this.min,
            compMax:        this.max,
            compInterval:   this.interval,
            compDecimals:   0,
            onValueChanged: null
        };
    },

    created()
    {
        this.compInterval = Object(_helper_utils__WEBPACK_IMPORTED_MODULE_1__["defaultValue"])(this.compInterval, 1);
        this.compInterval = this.compInterval === 0 ? 1 : this.compInterval;

        this.compDecimals = Object(_helper_number__WEBPACK_IMPORTED_MODULE_0__["floatLength"])(this.compInterval);

        this.onValueChanged = Object(_helper_debounce__WEBPACK_IMPORTED_MODULE_2__["debounce"])(() =>
        {
            this.$emit("quantity-change", this.compValue);
        }, Object(_helper_utils__WEBPACK_IMPORTED_MODULE_1__["defaultValue"])(this.timeout, 500));

        if (!Object(_helper_utils__WEBPACK_IMPORTED_MODULE_1__["isNullOrUndefined"])(this.variationId))
        {
            this.fetchQuantityFromBasket();
        }
    },

    computed:
    {
        variationBasketQuantity()
        {
            if (Object(_helper_utils__WEBPACK_IMPORTED_MODULE_1__["isNullOrUndefined"])(this.variationId))
            {
                return 0;
            }

            if (this.itemSetVariationId > 0 && this.variationId !== this.itemSetVariationId)
            {
                let totalQuantity = 0;

                this.$store.state.basket.items.forEach((basketItem) =>
                {
                    if (basketItem.variationId === this.itemSetVariationId)
                    {
                        basketItem.setComponents.forEach((setComponent) =>
                        {
                            if (setComponent.variationId === this.variationId)
                            {
                                totalQuantity += setComponent.quantity;
                            }
                        });
                    }
                });

                return totalQuantity;
            }
            else
            {
                const basketObject = this.$store.state.basket.items.find(variations => variations.variationId === this.variationId);

                return basketObject ? basketObject.quantity : 0;
            }
        },

        isMinimum()
        {
            return Object(_helper_utils__WEBPACK_IMPORTED_MODULE_1__["isDefined"])(this.compMin) && (this.compValue - this.compInterval) < this.compMin;
        },

        isMaximum()
        {
            return Object(_helper_utils__WEBPACK_IMPORTED_MODULE_1__["isDefined"])(this.compMax) && (this.compValue + this.compInterval) > this.compMax;
        },

        minimumHint()
        {
            return this.$translate(
                "Ceres::Template.singleItemQuantityMin",
                {
                    min: this.min
                }
            );
        },

        maximumHint()
        {
            return this.$translate(
                "Ceres::Template.singleItemQuantityMax",
                {
                    max: this.max
                }
            );
        },

        displayValue()
        {
            return this.$options.filters.numberFormat(this.compValue);
        },

        itemSetVariationId()
        {
            if (this.$store.state.items.itemSetId > 0)
            {
                return this.$store.getters[`${this.$store.state.items.itemSetId}/currentItemVariation`].variation.id;
            }

            return 0;
        },

        ...Object(vuex__WEBPACK_IMPORTED_MODULE_3__["mapState"])({
            basketItems: state => state.basket.items
        })
    },

    watch:
    {
        basketItems:
        {
            handler(newValue, oldValue)
            {
                if (Object(_helper_utils__WEBPACK_IMPORTED_MODULE_1__["isDefined"])(this.variationId))
                {
                    this.fetchQuantityFromBasket();
                }
            },
            deep: true
        },

        min(newValue)
        {
            this.compMin = newValue;
            this.fetchQuantityFromBasket();
        },

        max(newValue)
        {
            this.compMax = newValue;
            this.fetchQuantityFromBasket();
        },

        value(newValue, oldValue)
        {
            if (newValue !== oldValue)
            {
                this.setValue(newValue);
            }
        }
    },

    methods:
    {
        increaseValue()
        {
            const newValue = Object(_helper_number__WEBPACK_IMPORTED_MODULE_0__["formatFloat"])(this.compValue + this.compInterval, this.compDecimals);

            if ((Object(_helper_utils__WEBPACK_IMPORTED_MODULE_1__["isNullOrUndefined"])(this.compMax) || newValue <= this.compMax) && !this.waiting)
            {
                this.setValue(newValue);
            }
        },

        decreaseValue()
        {
            const newValue = Object(_helper_number__WEBPACK_IMPORTED_MODULE_0__["formatFloat"])(this.compValue - this.compInterval, this.compDecimals);

            if ((Object(_helper_utils__WEBPACK_IMPORTED_MODULE_1__["isNullOrUndefined"])(this.compMin) || newValue >= this.compMin) && !this.waiting)
            {
                this.setValue(newValue);
            }
        },

        setValue(value)
        {
            // consider the configured decimal seperator (if the input is typed in the input field)
            if (typeof value === "string")
            {
                value = value.replace(App.decimalSeparator || ",", ".");
            }

            value = parseFloat(value);
            if (isNaN(value))
            {
                value = Object(_helper_utils__WEBPACK_IMPORTED_MODULE_1__["defaultValue"])(this.compMin, 1);
            }

            // limit new value to min/ max value
            value = Object(_helper_number__WEBPACK_IMPORTED_MODULE_0__["limit"])(value, this.compMin, this.compMax);

            // make sure, new value is an even multiple of interval
            const diff = Object(_helper_number__WEBPACK_IMPORTED_MODULE_0__["formatFloat"])(value % this.compInterval, this.compDecimals, true);

            if (diff > 0 && diff !== this.compInterval)
            {
                if (diff < this.compInterval / 2)
                {
                    value -= diff;
                }
                else
                {
                    value += this.compInterval - diff;
                }
                value = Object(_helper_number__WEBPACK_IMPORTED_MODULE_0__["limit"])(value, this.compMin, this.compMax);
            }

            // cut fraction
            value = Object(_helper_number__WEBPACK_IMPORTED_MODULE_0__["formatFloat"])(value, this.compDecimals);

            if (value !== this.compValue)
            {
                this.compValue = value;
                this.onValueChanged();
            }
            else if (!Object(_helper_utils__WEBPACK_IMPORTED_MODULE_1__["isNullOrUndefined"])(this.$refs.quantityInputField))
            {
                this.$refs.quantityInputField.value = value;
            }
        },

        fetchQuantityFromBasket()
        {
            if (!Object(_helper_utils__WEBPACK_IMPORTED_MODULE_1__["isNullOrUndefined"])(this.min) && this.variationBasketQuantity >= this.min)
            {
                // minimum quantity already in basket
                this.compMin = this.compInterval;
            }
            else if (this.variationBasketQuantity === 0)
            {
                this.compMin = this.min;
            }

            if (!Object(_helper_utils__WEBPACK_IMPORTED_MODULE_1__["isNullOrUndefined"])(this.max))
            {
                // decrease maximum quantity by quantity of variations already in basket
                this.compMax = this.max - this.variationBasketQuantity;

                if (this.variationBasketQuantity + this.compInterval > this.max)
                {
                    this.compMin = 0;
                    this.compMax = 0;
                    this.$emit("out-of-stock", true);
                }
                else
                {
                    this.$emit("out-of-stock", false);
                }
            }

            this.setValue(this.compMin);
        }
    }
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/Ceres/resources/js/src/app/components/item/QuantityInput.vue?vue&type=template&id=5d08d642&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/Ceres/resources/js/src/app/components/item/QuantityInput.vue?vue&type=template&id=5d08d642& ***!
  \************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "qty-box d-flex h-100" }, [
    _c("input", {
      ref: "quantityInputField",
      staticClass: "qty-input text-center",
      attrs: { type: "text", disabled: _vm.waiting },
      domProps: { value: _vm.displayValue },
      on: {
        change: function($event) {
          return _vm.setValue($event.target.value)
        }
      }
    }),
    _vm._v(" "),
    _c("div", { staticClass: "qty-btn-container d-flex flex-column" }, [
      _c(
        "button",
        {
          directives: [
            {
              name: "tooltip",
              rawName: "v-tooltip",
              value: _vm.isMaximum && _vm.compMax !== 0,
              expression: "isMaximum && compMax !== 0"
            }
          ],
          staticClass:
            "btn qty-btn flex-fill d-flex justify-content-center p-0",
          class: {
            disabled: _vm.isMaximum || _vm.waiting,
            "btn-appearance": _vm.useAppearance
          },
          attrs: {
            "data-toggle": "tooltip",
            "data-placement": "top",
            title: _vm.maximumHint
          },
          on: {
            click: function($event) {
              return _vm.increaseValue()
            }
          }
        },
        [
          _c("i", {
            staticClass: "fa fa-plus default-float",
            attrs: { "aria-hidden": "true" }
          })
        ]
      ),
      _vm._v(" "),
      _c(
        "button",
        {
          directives: [
            {
              name: "tooltip",
              rawName: "v-tooltip",
              value: _vm.isMinimum && _vm.compMax !== 0,
              expression: "isMinimum && compMax !== 0"
            }
          ],
          staticClass:
            "btn qty-btn flex-fill d-flex justify-content-center p-0",
          class: {
            disabled: _vm.isMinimum || _vm.waiting,
            "btn-appearance": _vm.useAppearance
          },
          attrs: {
            "data-toggle": "tooltip",
            "data-placement": "bottom",
            title: _vm.minimumHint
          },
          on: {
            click: function($event) {
              return _vm.decreaseValue()
            }
          }
        },
        [
          _c("i", {
            staticClass: "fa fa-minus default-float",
            attrs: { "aria-hidden": "true" }
          })
        ]
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
//# sourceMappingURL=ceres-33.js.map