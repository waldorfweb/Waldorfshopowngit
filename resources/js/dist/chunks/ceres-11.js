(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/Ceres/resources/js/src/app/components/customer/login/GuestLogin.vue":
/*!******************************************************************************************!*\
  !*** ./node_modules/Ceres/resources/js/src/app/components/customer/login/GuestLogin.vue ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GuestLogin_vue_vue_type_template_id_36dc133c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GuestLogin.vue?vue&type=template&id=36dc133c& */ "./node_modules/Ceres/resources/js/src/app/components/customer/login/GuestLogin.vue?vue&type=template&id=36dc133c&");
/* harmony import */ var _GuestLogin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GuestLogin.vue?vue&type=script&lang=js& */ "./node_modules/Ceres/resources/js/src/app/components/customer/login/GuestLogin.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _GuestLogin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GuestLogin_vue_vue_type_template_id_36dc133c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _GuestLogin_vue_vue_type_template_id_36dc133c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "node_modules/Ceres/resources/js/src/app/components/customer/login/GuestLogin.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./node_modules/Ceres/resources/js/src/app/components/customer/login/GuestLogin.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/Ceres/resources/js/src/app/components/customer/login/GuestLogin.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_loader_lib_index_js_vue_loader_options_GuestLogin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../vue-loader/lib??vue-loader-options!./GuestLogin.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./node_modules/Ceres/resources/js/src/app/components/customer/login/GuestLogin.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_vue_loader_lib_index_js_vue_loader_options_GuestLogin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./node_modules/Ceres/resources/js/src/app/components/customer/login/GuestLogin.vue?vue&type=template&id=36dc133c&":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/Ceres/resources/js/src/app/components/customer/login/GuestLogin.vue?vue&type=template&id=36dc133c& ***!
  \*************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_GuestLogin_vue_vue_type_template_id_36dc133c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../vue-loader/lib??vue-loader-options!./GuestLogin.vue?vue&type=template&id=36dc133c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/Ceres/resources/js/src/app/components/customer/login/GuestLogin.vue?vue&type=template&id=36dc133c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_GuestLogin_vue_vue_type_template_id_36dc133c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_GuestLogin_vue_vue_type_template_id_36dc133c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/Ceres/resources/js/src/app/mixins/buttonSizeProperty.mixin.js":
/*!************************************************************************************!*\
  !*** ./node_modules/Ceres/resources/js/src/app/mixins/buttonSizeProperty.mixin.js ***!
  \************************************************************************************/
/*! exports provided: ButtonSizePropertyMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonSizePropertyMixin", function() { return ButtonSizePropertyMixin; });
const BUTTON_SIZES = ["btn-sm", "btn-lg"];

const LEGACY_CLASS_MAP = {
    "sm": "btn-sm",
    "md": "",
    "lg": "btn-lg"
};

const ButtonSizePropertyMixin =
{
    props: {
        buttonSize:
        {
            type: [String, null],
            default: null,
            validator: value =>
            {
                return [
                    "",
                    ...BUTTON_SIZES,
                    ...Object.keys(LEGACY_CLASS_MAP)
                ].indexOf(value) !== -1;
            }
        }
    },

    computed: {
        buttonSizeClass()
        {
            if (LEGACY_CLASS_MAP.hasOwnProperty(this.buttonSize))
            {
                return LEGACY_CLASS_MAP[this.buttonSize];
            }

            return this.buttonSize;
        }
    }
};


/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./node_modules/Ceres/resources/js/src/app/components/customer/login/GuestLogin.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./node_modules/Ceres/resources/js/src/app/components/customer/login/GuestLogin.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins_buttonSizeProperty_mixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../mixins/buttonSizeProperty.mixin */ "./node_modules/Ceres/resources/js/src/app/mixins/buttonSizeProperty.mixin.js");
/* harmony import */ var _services_ApiService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/ApiService */ "./node_modules/Ceres/resources/js/src/app/services/ApiService.js");
/* harmony import */ var _services_ValidationService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/ValidationService */ "./node_modules/Ceres/resources/js/src/app/services/ValidationService.js");
/* harmony import */ var _services_UrlService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/UrlService */ "./node_modules/Ceres/resources/js/src/app/services/UrlService.js");
/* harmony import */ var _helper_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../helper/utils */ "./node_modules/Ceres/resources/js/src/app/helper/utils.js");
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
    mixins: [_mixins_buttonSizeProperty_mixin__WEBPACK_IMPORTED_MODULE_0__["ButtonSizePropertyMixin"]],

    props: {
        backlink:
        {
            type: String
        },
        initialEmail:
        {
            type: String,
            default: ""
        }
    },

    data()
    {
        return {
            email: "",
            isDisabled: false
        };
    },

    created()
    {
        if (!Object(_helper_utils__WEBPACK_IMPORTED_MODULE_4__["isNullOrUndefined"])(this.initialEmail) && this.initialEmail.length > 0)
        {
            this.email = this.initialEmail;
        }
    },

    mounted()
    {
        this.$nextTick(() =>
        {
            // for old login view only (input in modal)
            if(!Object(_helper_utils__WEBPACK_IMPORTED_MODULE_4__["isNullOrUndefined"])(this.$parent.$refs.guestModal))
            {
                this.$parent.$refs.guestModal.addEventListener("hidden.bs.modal", () =>
                {
                    this.email = "";
                    _services_ValidationService__WEBPACK_IMPORTED_MODULE_2__["default"].unmarkAllFields(this.$refs.form);
                });
            }
        });
    },

    methods:
    {
        validate()
        {
            _services_ValidationService__WEBPACK_IMPORTED_MODULE_2__["default"].validate(this.$refs.form)
                .done(() =>
                {
                    this.authGuest();
                })
                .fail(invalidFields =>
                {
                    _services_ValidationService__WEBPACK_IMPORTED_MODULE_2__["default"].markInvalidFields(invalidFields, "error");
                });
        },

        authGuest()
        {
            this.isDisabled = true;

            _services_ApiService__WEBPACK_IMPORTED_MODULE_1__["default"].post("/rest/io/guest", { email: this.email })
                .done(() =>
                {
                    Object(_services_UrlService__WEBPACK_IMPORTED_MODULE_3__["navigateTo"])(
                        Object(_helper_utils__WEBPACK_IMPORTED_MODULE_4__["isDefined"])(this.backlink) && this.backlink.length ? decodeURIComponent(this.backlink) : window.location.origin
                    );
                })
                .fail(() =>
                {
                    this.isDisabled = false;
                });
        }
    }
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/Ceres/resources/js/src/app/components/customer/login/GuestLogin.vue?vue&type=template&id=36dc133c&":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/Ceres/resources/js/src/app/components/customer/login/GuestLogin.vue?vue&type=template&id=36dc133c& ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
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
    _c(
      "form",
      {
        ref: "form",
        staticClass: "mb-3 login-pwd-reset",
        attrs: { method: "post" }
      },
      [
        _c(
          "div",
          { staticClass: "input-unit", attrs: { "data-validate": "mail" } },
          [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.email,
                  expression: "email"
                }
              ],
              attrs: {
                type: "email",
                name: "email",
                autocomplete: "email",
                id: _vm._uid,
                "data-autofocus": ""
              },
              domProps: { value: _vm.email },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.email = $event.target.value
                }
              }
            }),
            _vm._v(" "),
            _c("label", { attrs: { for: _vm._uid } }, [
              _vm._v(_vm._s(_vm.$translate("Ceres::Template.loginEmail")) + "*")
            ])
          ]
        ),
        _vm._v(" "),
        _c("span", { staticClass: "error-msg" }, [
          _vm._v(
            _vm._s(_vm.$translate("Ceres::Template.loginEnterConfirmEmail"))
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "text-right" }, [
          _c(
            "button",
            {
              staticClass: "btn btn-primary btn-medium btn-appearance",
              class: _vm.buttonSizeClass,
              attrs: { disabled: _vm.isDisabled },
              on: {
                click: function($event) {
                  $event.preventDefault()
                  return _vm.validate($event)
                }
              }
            },
            [
              _vm._v(
                "\n                " +
                  _vm._s(_vm.$translate("Ceres::Template.loginNext")) +
                  "\n                "
              ),
              _c("icon", {
                attrs: { icon: "arrow-right", loading: _vm.isDisabled }
              })
            ],
            1
          )
        ])
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
//# sourceMappingURL=ceres-11.js.map