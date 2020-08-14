(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21],{

/***/ "./node_modules/Ceres/resources/js/src/app/components/common/GoogleMaps.vue":
/*!**********************************************************************************!*\
  !*** ./node_modules/Ceres/resources/js/src/app/components/common/GoogleMaps.vue ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GoogleMaps_vue_vue_type_template_id_9bb5c930___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GoogleMaps.vue?vue&type=template&id=9bb5c930& */ "./node_modules/Ceres/resources/js/src/app/components/common/GoogleMaps.vue?vue&type=template&id=9bb5c930&");
/* harmony import */ var _GoogleMaps_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GoogleMaps.vue?vue&type=script&lang=js& */ "./node_modules/Ceres/resources/js/src/app/components/common/GoogleMaps.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _GoogleMaps_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GoogleMaps_vue_vue_type_template_id_9bb5c930___WEBPACK_IMPORTED_MODULE_0__["render"],
  _GoogleMaps_vue_vue_type_template_id_9bb5c930___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "node_modules/Ceres/resources/js/src/app/components/common/GoogleMaps.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./node_modules/Ceres/resources/js/src/app/components/common/GoogleMaps.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/Ceres/resources/js/src/app/components/common/GoogleMaps.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_loader_lib_index_js_vue_loader_options_GoogleMaps_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../vue-loader/lib??vue-loader-options!./GoogleMaps.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./node_modules/Ceres/resources/js/src/app/components/common/GoogleMaps.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_vue_loader_lib_index_js_vue_loader_options_GoogleMaps_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./node_modules/Ceres/resources/js/src/app/components/common/GoogleMaps.vue?vue&type=template&id=9bb5c930&":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/Ceres/resources/js/src/app/components/common/GoogleMaps.vue?vue&type=template&id=9bb5c930& ***!
  \*****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_GoogleMaps_vue_vue_type_template_id_9bb5c930___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../vue-loader/lib??vue-loader-options!./GoogleMaps.vue?vue&type=template&id=9bb5c930& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/Ceres/resources/js/src/app/components/common/GoogleMaps.vue?vue&type=template&id=9bb5c930&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_GoogleMaps_vue_vue_type_template_id_9bb5c930___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_GoogleMaps_vue_vue_type_template_id_9bb5c930___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./node_modules/Ceres/resources/js/src/app/components/common/GoogleMaps.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./node_modules/Ceres/resources/js/src/app/components/common/GoogleMaps.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helper_whenConsented__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helper/whenConsented */ "./node_modules/Ceres/resources/js/src/app/helper/whenConsented.js");
/* harmony import */ var _helper_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helper/utils */ "./node_modules/Ceres/resources/js/src/app/helper/utils.js");
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        lat:
        {
            type: Number
        },
        lng:
        {
            type: Number
        },
        zoom:
        {
            type: Number,
            default: 16
        },
        maptype:
        {
            type: String,
            default: "roadmap"
        },
        aspectRatio:
        {
            type: String,
            default: "3-1"
        }
    },

    data: function()
    {
        return {
            scriptBlocked: true
        };
    },

    computed:
        {
            coordinates()
            {
                const isLatValid = !isNaN(this.lat) && this.lat > -90 && this.lat < 90;
                const isLngValid = !isNaN(this.lng) && this.lng > -180 && this.lng < 180;

                if (isLatValid && isLngValid)
                {
                    return {
                        lat: this.lat,
                        lng: this.lng
                    };
                }

                return null;
            },

            aspectClass()
            {
                return "prop-" + this.aspectRatio;
            }
        },

    mounted()
    {
        this.$nextTick(() =>
        {
            this.createScript()
                .then(() =>
                {
                    this.initializeMap();
                })
                .catch(() =>
                {
                    // Do nothing
                });
        });
    },

    methods:
    {
        createScript()
        {
            return new Promise((resolve, reject) =>
            {
                const script = document.querySelector("script#google-maps-api");

                if (!Object(_helper_utils__WEBPACK_IMPORTED_MODULE_1__["isNullOrUndefined"])(script))
                {
                    // script already injected...
                    this.scriptBlocked = false;
                    if (Object(_helper_utils__WEBPACK_IMPORTED_MODULE_1__["isNullOrUndefined"])(window.google))
                    {
                        // ...but not loaded yet
                        script.addEventListener("load", () => resolve(script), false);
                    }
                    else
                    {
                        // ..and fully loaded
                        resolve(script);
                    }
                }
                else
                {
                    // script not loaded
                    Object(_helper_whenConsented__WEBPACK_IMPORTED_MODULE_0__["whenConsented"])(
                        "media.googleMaps",
                        () =>
                        {
                            this.scriptBlocked = false;
                            const script = document.createElement("script");

                            script.type = "text/javascript";
                            script.id = "google-maps-api";
                            script.src = `https://maps.googleapis.com/maps/api/js?key=${App.config.global.googleMapsApiKey}`;

                            script.addEventListener("load", () => resolve(script), false);
                            script.addEventListener("error", () => reject(script), false);

                            document.body.appendChild(script);
                        },
                        () =>
                        {
                            this.scriptBlocked = true;
                        });
                }
            });
        },

        initializeMap()
        {
            if (this.coordinates)
            {
                const map = new google.maps.Map(this.$refs.googleMapsContainer,
                    {
                        center: this.coordinates,
                        zoom  : this.zoom,
                        mapTypeId: this.maptype
                    });

                new google.maps.Marker(
                    {
                        map: map,
                        position: this.coordinates
                    });
            }
        }
    }
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/Ceres/resources/js/src/app/components/common/GoogleMaps.vue?vue&type=template&id=9bb5c930&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/Ceres/resources/js/src/app/components/common/GoogleMaps.vue?vue&type=template&id=9bb5c930& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
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
    "div",
    {
      ref: "googleMapsContainer",
      staticClass: "maps-component position-relative",
      class: _vm.aspectClass
    },
    [_vm.scriptBlocked ? _c("div", [_vm._t("default")], 2) : _vm._e()]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
//# sourceMappingURL=ceres-21.js.map