(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./node_modules/Ceres/resources/js/src/app/components/customer/login/Login.vue":
/*!*************************************************************************************!*\
  !*** ./node_modules/Ceres/resources/js/src/app/components/customer/login/Login.vue ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Login_vue_vue_type_template_id_240398ee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Login.vue?vue&type=template&id=240398ee& */ "./node_modules/Ceres/resources/js/src/app/components/customer/login/Login.vue?vue&type=template&id=240398ee&");
/* harmony import */ var _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login.vue?vue&type=script&lang=js& */ "./node_modules/Ceres/resources/js/src/app/components/customer/login/Login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Login_vue_vue_type_template_id_240398ee___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Login_vue_vue_type_template_id_240398ee___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "node_modules/Ceres/resources/js/src/app/components/customer/login/Login.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./node_modules/Ceres/resources/js/src/app/components/customer/login/Login.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/Ceres/resources/js/src/app/components/customer/login/Login.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../vue-loader/lib??vue-loader-options!./Login.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./node_modules/Ceres/resources/js/src/app/components/customer/login/Login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./node_modules/Ceres/resources/js/src/app/components/customer/login/Login.vue?vue&type=template&id=240398ee&":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/Ceres/resources/js/src/app/components/customer/login/Login.vue?vue&type=template&id=240398ee& ***!
  \********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_240398ee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../vue-loader/lib??vue-loader-options!./Login.vue?vue&type=template&id=240398ee& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/Ceres/resources/js/src/app/components/customer/login/Login.vue?vue&type=template&id=240398ee&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_240398ee___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_240398ee___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ "./node_modules/vue-loader/lib/index.js?!./node_modules/Ceres/resources/js/src/app/components/customer/login/Login.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./node_modules/Ceres/resources/js/src/app/components/customer/login/Login.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins_buttonSizeProperty_mixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../mixins/buttonSizeProperty.mixin */ "./node_modules/Ceres/resources/js/src/app/mixins/buttonSizeProperty.mixin.js");
/* harmony import */ var _services_ApiService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/ApiService */ "./node_modules/Ceres/resources/js/src/app/services/ApiService.js");
/* harmony import */ var _services_NotificationService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/NotificationService */ "./node_modules/Ceres/resources/js/src/app/services/NotificationService.js");
/* harmony import */ var _services_ModalService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/ModalService */ "./node_modules/Ceres/resources/js/src/app/services/ModalService.js");
/* harmony import */ var _services_AutoFocusService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/AutoFocusService */ "./node_modules/Ceres/resources/js/src/app/services/AutoFocusService.js");
/* harmony import */ var _services_ValidationService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/ValidationService */ "./node_modules/Ceres/resources/js/src/app/services/ValidationService.js");
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
    mixins: [_mixins_buttonSizeProperty_mixin__WEBPACK_IMPORTED_MODULE_0__["ButtonSizePropertyMixin"]],

    props: {
        backlink: {
            type: String
        },
        modalElement: {
            type: String
        },
        hasToForward:
        {
            type: Boolean,
            default: false
        }
    },

    data()
    {
        return {
            password: "",
            username: "",
            loginFields: [],
            isDisabled: false
        };
    },

    mounted()
    {
        this.$nextTick(() =>
        {
            this.loginFields = document.querySelector("#login-form-" + this._uid).querySelectorAll(".input-unit");

            _services_AutoFocusService__WEBPACK_IMPORTED_MODULE_4__["default"].triggerAutoFocus();
        });
    },

    watch:
    {
        password(val, oldVal)
        {
            this.resetError();
        },

        username(val, oldVal)
        {
            this.resetError();
        }
    },

    methods:
    {
        /**
         * Open the login modal
         */
        showLogin()
        {
            _services_ModalService__WEBPACK_IMPORTED_MODULE_3__["default"].findModal(document.getElementById(this.modalElement)).show();
        },

        validateLogin()
        {
            _services_ValidationService__WEBPACK_IMPORTED_MODULE_5__["default"].validate($("#login-form-" + this._uid))
                .done(() =>
                {
                    this.sendLogin();
                })
                .fail(invalidFields =>
                {
                    _services_ValidationService__WEBPACK_IMPORTED_MODULE_5__["default"].markInvalidFields(invalidFields, "error");
                });
        },

        /**
         * Send the login data
         */
        sendLogin()
        {
            this.isDisabled = true;

            _services_ApiService__WEBPACK_IMPORTED_MODULE_1__["default"].post("/rest/io/customer/login", { email: this.username, password: this.password }, { supressNotifications: true })
                .done(response =>
                {
                    _services_ApiService__WEBPACK_IMPORTED_MODULE_1__["default"].setToken(response);

                    _services_NotificationService__WEBPACK_IMPORTED_MODULE_2__["default"].success(
                        this.$translate("Ceres::Template.loginSuccessful")
                    ).closeAfter(10000);

                    if (this.backlink !== null && this.backlink)
                    {
                        location.assign(decodeURIComponent(this.backlink));
                    }
                    else if (this.hasToForward)
                    {
                        location.assign(location.origin);
                    }
                    else
                    {
                        location.reload();
                    }
                })
                .fail(response =>
                {
                    this.isDisabled = false;

                    switch (response.error.code)
                    {
                        case 401:
                            this.loginFields.forEach(element => element.classList.add("has-login-error"));

                            let translationKey = "Ceres::Template.loginFailed";

                            if (response.error.message.length > 0 && response.error.message === "user is blocked")
                            {
                                translationKey = "Ceres::Template.loginBlocked";
                            }
                            _services_NotificationService__WEBPACK_IMPORTED_MODULE_2__["default"].error(
                                this.$translate(translationKey)
                            ).closeAfter(10000);
                            break;
                        default:
                            return;
                    }
                });
        },

        showResetPwdView()
        {
            this.resetError();

            this.$store.dispatch("loadComponent", "forgot-password-modal");

            if (this.modalElement)
            {
                _services_ModalService__WEBPACK_IMPORTED_MODULE_3__["default"]
                    .findModal(document.getElementById(this.modalElement))
                    .hide()
                    .then(() =>
                    {
                        _services_ModalService__WEBPACK_IMPORTED_MODULE_3__["default"].findModal(document.getElementById("resetPwd")).show();
                    });
            }
            else
            {
                _services_ModalService__WEBPACK_IMPORTED_MODULE_3__["default"].findModal(document.getElementById("resetPwd")).show();
            }

        },

        resetError()
        {
            this.loginFields.forEach( element => element.classList.remove("has-login-error"));
            _services_ValidationService__WEBPACK_IMPORTED_MODULE_5__["default"].unmarkAllFields("#login-form-" + this._uid);
        }
    }
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/Ceres/resources/js/src/app/components/customer/login/Login.vue?vue&type=template&id=240398ee&":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/Ceres/resources/js/src/app/components/customer/login/Login.vue?vue&type=template&id=240398ee& ***!
  \**************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "login-pwd-reset" }, [
    _c("form", { attrs: { id: "login-form-" + _vm._uid, method: "post" } }, [
      _c("div", { class: { "modal-body": _vm.modalElement } }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-12" }, [
            _c(
              "div",
              { staticClass: "input-unit", attrs: { "data-validate": "mail" } },
              [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.username,
                      expression: "username"
                    }
                  ],
                  attrs: {
                    type: "email",
                    name: "email",
                    autocomplete: "email",
                    id: "email" + _vm._uid,
                    "data-autofocus": ""
                  },
                  domProps: { value: _vm.username },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.username = $event.target.value
                    }
                  }
                }),
                _vm._v(" "),
                _c("label", { attrs: { for: "email" + _vm._uid } }, [
                  _vm._v(
                    _vm._s(_vm.$translate("Ceres::Template.loginEmail")) + "*"
                  )
                ])
              ]
            ),
            _vm._v(" "),
            _c("span", { staticClass: "error-msg" }, [
              _vm._v(
                _vm._s(_vm.$translate("Ceres::Template.loginEnterConfirmEmail"))
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-12" }, [
            _c(
              "div",
              {
                staticClass: "input-unit",
                class: { "no-bottom": _vm.modalElement },
                attrs: { "data-validate": "text" }
              },
              [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.password,
                      expression: "password"
                    }
                  ],
                  attrs: {
                    type: "password",
                    name: "password",
                    autocomplete: "current-password",
                    id: "password" + _vm._uid
                  },
                  domProps: { value: _vm.password },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.password = $event.target.value
                    }
                  }
                }),
                _vm._v(" "),
                _c("label", { attrs: { for: "password" + _vm._uid } }, [
                  _vm._v(
                    _vm._s(_vm.$translate("Ceres::Template.loginPassword")) +
                      "*"
                  )
                ])
              ]
            ),
            _vm._v(" "),
            _c("span", { staticClass: "error-msg" }, [
              _vm._v(
                _vm._s(_vm.$translate("Ceres::Template.loginEmptyPassword"))
              )
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          class: {
            "modal-footer justify-content-between": _vm.modalElement,
            row: !_vm.modalElement
          }
        },
        [
          _c("div", { class: { "col-7 col-sm-4": !_vm.modalElement } }, [
            _c(
              "a",
              {
                staticClass: "small text-appearance",
                attrs: { href: "javascript:void(0)" },
                on: { click: _vm.showResetPwdView }
              },
              [
                _vm._v(
                  _vm._s(
                    _vm.$translate("Ceres::Template.loginForgotPassword")
                  ) + "?"
                )
              ]
            )
          ]),
          _vm._v(" "),
          _c(
            "div",
            { class: { "col-5 col-sm-8 text-sm-right": !_vm.modalElement } },
            [
              _vm._t("extend-overlay-buttons"),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-primary btn-appearance btn-medium",
                  class: [
                    { "float-right": !_vm.modalElement },
                    _vm.buttonSizeClass
                  ],
                  attrs: { disabled: _vm.isDisabled },
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      return _vm.validateLogin($event)
                    }
                  }
                },
                [
                  _vm._v(
                    "\n                    " +
                      _vm._s(_vm.$translate("Ceres::Template.login")) +
                      "\n                    "
                  ),
                  _c("icon", {
                    attrs: { icon: "user", loading: _vm.isDisabled }
                  })
                ],
                1
              )
            ],
            2
          )
        ]
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
//# sourceMappingURL=ceres-12.js.map