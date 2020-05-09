(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./node_modules/Ceres/resources/js/src/app/components/newsletter/NewsletterInput.vue":
/*!*******************************************************************************************!*\
  !*** ./node_modules/Ceres/resources/js/src/app/components/newsletter/NewsletterInput.vue ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NewsletterInput_vue_vue_type_template_id_217613d2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NewsletterInput.vue?vue&type=template&id=217613d2& */ "./node_modules/Ceres/resources/js/src/app/components/newsletter/NewsletterInput.vue?vue&type=template&id=217613d2&");
/* harmony import */ var _NewsletterInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NewsletterInput.vue?vue&type=script&lang=js& */ "./node_modules/Ceres/resources/js/src/app/components/newsletter/NewsletterInput.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NewsletterInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NewsletterInput_vue_vue_type_template_id_217613d2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _NewsletterInput_vue_vue_type_template_id_217613d2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "node_modules/Ceres/resources/js/src/app/components/newsletter/NewsletterInput.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./node_modules/Ceres/resources/js/src/app/components/newsletter/NewsletterInput.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/Ceres/resources/js/src/app/components/newsletter/NewsletterInput.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_loader_lib_index_js_vue_loader_options_NewsletterInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../vue-loader/lib??vue-loader-options!./NewsletterInput.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./node_modules/Ceres/resources/js/src/app/components/newsletter/NewsletterInput.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_vue_loader_lib_index_js_vue_loader_options_NewsletterInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./node_modules/Ceres/resources/js/src/app/components/newsletter/NewsletterInput.vue?vue&type=template&id=217613d2&":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/Ceres/resources/js/src/app/components/newsletter/NewsletterInput.vue?vue&type=template&id=217613d2& ***!
  \**************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_NewsletterInput_vue_vue_type_template_id_217613d2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../vue-loader/lib??vue-loader-options!./NewsletterInput.vue?vue&type=template&id=217613d2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/Ceres/resources/js/src/app/components/newsletter/NewsletterInput.vue?vue&type=template&id=217613d2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_NewsletterInput_vue_vue_type_template_id_217613d2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_NewsletterInput_vue_vue_type_template_id_217613d2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ "./node_modules/vue-loader/lib/index.js?!./node_modules/Ceres/resources/js/src/app/components/newsletter/NewsletterInput.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./node_modules/Ceres/resources/js/src/app/components/newsletter/NewsletterInput.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_ApiService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/ApiService */ "./node_modules/Ceres/resources/js/src/app/services/ApiService.js");
/* harmony import */ var _services_NotificationService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/NotificationService */ "./node_modules/Ceres/resources/js/src/app/services/NotificationService.js");
/* harmony import */ var _services_ValidationService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/ValidationService */ "./node_modules/Ceres/resources/js/src/app/services/ValidationService.js");
/* harmony import */ var _mixins_buttonSizeProperty_mixin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../mixins/buttonSizeProperty.mixin */ "./node_modules/Ceres/resources/js/src/app/mixins/buttonSizeProperty.mixin.js");
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
    mixins: [_mixins_buttonSizeProperty_mixin__WEBPACK_IMPORTED_MODULE_3__["ButtonSizePropertyMixin"]],

    props: {
        showNameInputs:
        {
            type: Boolean,
            default: false
        },
        showPrivacyPolicyCheckbox:
        {
            type: Boolean,
            default: true
        },
        emailFolder:
        {
            type: Number,
            default: 0
        }
    },

    data()
    {
        return {
            firstName: "",
            lastName: "",
            email: "",
            isDisabled: false,
            privacyPolicyValue: false,
            honeypot: ""
        };
    },

    computed:
    {
        privacyPolicyText()
        {
            const link = "<a href=\"" + App.urls.privacyPolicy + "\" target=\"_blank\"><span class=\"text-primary text-appearance\">"
                + this.$translate("Ceres::Template.checkoutPrivacyPolicy", {"hyphen": "&shy;"})
                + "</span></a>";

            return this.$translate("Ceres::Template.newsletterAcceptPrivacyPolicy", {"policy": link});
        }
    },

    methods: {
        validateData()
        {
            this.isDisabled = true;

            _services_ValidationService__WEBPACK_IMPORTED_MODULE_2__["default"].validate($("#newsletter-input-form_" + this._uid))
                .done(() =>
                {
                    this.save();
                })
                .fail(invalidFields =>
                {
                    _services_ValidationService__WEBPACK_IMPORTED_MODULE_2__["default"].markInvalidFields(invalidFields, "error");

                    this.isDisabled = false;
                });
        },

        save()
        {
            _services_ApiService__WEBPACK_IMPORTED_MODULE_0__["default"].post("/rest/io/customer/newsletter", { email: this.email, firstName: this.firstName, lastName: this.lastName, emailFolder: this.emailFolder, honeypot: this.honeypot })
                .done(data =>
                {
                    if (!!data.containsHoneypot)
                    {
                        _services_NotificationService__WEBPACK_IMPORTED_MODULE_1__["default"].warn(
                            this.$translate("Ceres::Template.newsletterHoneypotWarning")
                        );
                    }
                    else
                    {
                        _services_NotificationService__WEBPACK_IMPORTED_MODULE_1__["default"].success(
                            this.$translate("Ceres::Template.newsletterSuccessMessage")
                        ).closeAfter(3000);
                    }
                    this.resetInputs();
                })
                .fail(() =>
                {
                    _services_NotificationService__WEBPACK_IMPORTED_MODULE_1__["default"].error(
                        this.$translate("Ceres::Template.newsletterErrorMessage")
                    ).closeAfter(5000);
                })
                .always(() =>
                {
                    this.isDisabled = false;
                });
        },

        resetInputs()
        {
            this.firstName = "";
            this.lastName = "";
            this.email = "";
            this.privacyPolicyValue = false;
        }
    }
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/Ceres/resources/js/src/app/components/newsletter/NewsletterInput.vue?vue&type=template&id=217613d2&":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/Ceres/resources/js/src/app/components/newsletter/NewsletterInput.vue?vue&type=template&id=217613d2& ***!
  \********************************************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "form",
    {
      attrs: { id: "newsletter-input-form_" + _vm._uid, method: "post" },
      on: {
        submit: function($event) {
          $event.preventDefault()
          return _vm.validateData($event)
        }
      }
    },
    [
      _c("div", { staticClass: "row" }, [
        _vm.showNameInputs
          ? _c("div", { staticClass: "col-6" }, [
              _c("div", { staticClass: "input-unit" }, [
                _c(
                  "label",
                  { attrs: { for: "first-name-input_" + _vm._uid } },
                  [
                    _vm._v(
                      _vm._s(
                        _vm.$translate("Ceres::Template.newsletterFirstName")
                      )
                    )
                  ]
                ),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.firstName,
                      expression: "firstName"
                    }
                  ],
                  attrs: { type: "text", id: "first-name-input_" + _vm._uid },
                  domProps: { value: _vm.firstName },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.firstName = $event.target.value
                    }
                  }
                })
              ])
            ])
          : _vm._e(),
        _vm._v(" "),
        _vm.showNameInputs
          ? _c("div", { staticClass: "col-6 pl-0" }, [
              _c("div", { staticClass: "input-unit" }, [
                _c("label", { attrs: { for: "last-name-input_" + _vm._uid } }, [
                  _vm._v(
                    _vm._s(_vm.$translate("Ceres::Template.newsletterLastName"))
                  )
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.lastName,
                      expression: "lastName"
                    }
                  ],
                  attrs: { type: "text", id: "last-name-input_" + _vm._uid },
                  domProps: { value: _vm.lastName },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.lastName = $event.target.value
                    }
                  }
                })
              ])
            ])
          : _vm._e(),
        _vm._v(" "),
        _c("div", { staticClass: "col-12" }, [
          _c("div", { staticClass: "input-group" }, [
            _c(
              "div",
              { staticClass: "input-unit", attrs: { "data-validate": "mail" } },
              [
                _c("label", { attrs: { for: "email-input-id_" + _vm._uid } }, [
                  _vm._v(
                    _vm._s(_vm.$translate("Ceres::Template.newsletterEmail")) +
                      " *"
                  )
                ]),
                _vm._v(" "),
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
                    autocomplete: "email",
                    id: "email-input-id_" + _vm._uid
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
                })
              ]
            ),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.honeypot,
                  expression: "honeypot"
                }
              ],
              staticClass: "honey",
              attrs: {
                autocomplete: "none",
                type: "text",
                name: "username",
                tabindex: "-1"
              },
              domProps: { value: _vm.honeypot },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.honeypot = $event.target.value
                }
              }
            })
          ])
        ]),
        _vm._v(" "),
        _vm.showPrivacyPolicyCheckbox
          ? _c("div", { staticClass: "col-12" }, [
              _c(
                "div",
                {
                  staticClass: "form-check small",
                  attrs: { "data-validate": "" }
                },
                [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.privacyPolicyValue,
                        expression: "privacyPolicyValue"
                      }
                    ],
                    staticClass: "form-check-input",
                    attrs: {
                      type: "checkbox",
                      id: "privacy-policy-accept-id_" + _vm._uid,
                      name: "privacy-policy-accept"
                    },
                    domProps: {
                      checked: Array.isArray(_vm.privacyPolicyValue)
                        ? _vm._i(_vm.privacyPolicyValue, null) > -1
                        : _vm.privacyPolicyValue
                    },
                    on: {
                      change: function($event) {
                        var $$a = _vm.privacyPolicyValue,
                          $$el = $event.target,
                          $$c = $$el.checked ? true : false
                        if (Array.isArray($$a)) {
                          var $$v = null,
                            $$i = _vm._i($$a, $$v)
                          if ($$el.checked) {
                            $$i < 0 &&
                              (_vm.privacyPolicyValue = $$a.concat([$$v]))
                          } else {
                            $$i > -1 &&
                              (_vm.privacyPolicyValue = $$a
                                .slice(0, $$i)
                                .concat($$a.slice($$i + 1)))
                          }
                        } else {
                          _vm.privacyPolicyValue = $$c
                        }
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("label", {
                    staticClass: "form-check-label",
                    attrs: { for: "privacy-policy-accept-id_" + _vm._uid },
                    domProps: { innerHTML: _vm._s(_vm.privacyPolicyText) }
                  })
                ]
              )
            ])
          : _vm._e(),
        _vm._v(" "),
        _c("div", { staticClass: "col-12 mt-3" }, [
          _c("div", { staticClass: "input-group-btn" }, [
            _c(
              "button",
              {
                staticClass: "btn btn-block btn-primary btn-appearance",
                class: _vm.buttonSizeClass,
                attrs: { type: "button", disabled: _vm.isDisabled },
                on: { click: _vm.validateData }
              },
              [
                _c("icon", {
                  attrs: { icon: "paper-plane-o", loading: _vm.isDisabled }
                }),
                _vm._v(
                  "\n                    " +
                    _vm._s(
                      _vm.$translate(
                        "Ceres::Template.newsletterSubscribeButtonLabel"
                      )
                    ) +
                    "\n                "
                )
              ],
              1
            )
          ])
        ])
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
//# sourceMappingURL=ceres-13.js.map