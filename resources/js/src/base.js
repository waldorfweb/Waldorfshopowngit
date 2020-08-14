import "~/app/publicPath";
// =========================
// Polyfill's
// =========================

import "custom-event-polyfill";

// =========================
// Framework's
// =========================

import Vue from "vue";
import Vuex from "vuex";

const mount = Vue.prototype.$mount;

let componentOverrides = null;

function getComponentOverride(tagName)
{
    if (isNullOrUndefined(componentOverrides))
    {
        componentOverrides = [].slice.call(document.querySelectorAll("script[data-component], template[data-component]"))
            .reduce(
                (obj, el) =>
                {
                    return {
                        ...obj,
                        [el.dataset.component]: el
                    };
                },
                {}
            );
    }

    return (componentOverrides && componentOverrides[tagName]) ? componentOverrides[tagName].innerHTML : null;
}

Vue.prototype.$mount =
    function(el, hydrating)
    {
        let compHtml = null;
        const templateOverride = this.$props.templateOverride;

        if (this.$props.templateOverride)
        {
            compHtml = document.querySelector(templateOverride).innerHTML;
        }
        else
        {
            compHtml = getComponentOverride(this.$options._componentTag);
        }

        if (compHtml)
        {
            const renderFunctions = Vue.compile(compHtml, { delimiters: Vue.options.delimiters });

            Object.assign(this.$options, renderFunctions);
        }

        return mount.call(this, el, hydrating);
    };

window.Vue = Vue;
window.Vuex = Vuex;

import script2 from "ceres/app/plugins/script2";
Vue.use(script2);

import jQuery from "jquery";
window.jQuery = jQuery;
window.$ = jQuery;

import "bootstrap";
import "owl.carousel";

// =========================
// COMPONENTS
// =========================
Vue.component("add-item-to-basket-overlay", () => import("ceres/app/components/basket/AddItemToBasketOverlay.vue"));

Vue.component("add-to-basket", () => import("ceres/app/components/basket/AddToBasket.vue"));
Vue.component("basket-preview", () => import("ceres/app/components/basket/BasketPreview.vue"));
Vue.component("basket-totals", () => import("ceres/app/components/basket/BasketTotals.vue"));
Vue.component("coupon", () => import("ceres/app/components/basket/Coupon.vue"));
Vue.component("basket-list", () => import("ceres/app/components/basket/list/BasketList.vue"));

Vue.component("step-by-step-navigation", () => import("ceres/app/components/category/StepByStepNavigation.vue"));
Vue.component("google-maps-widget", () => import("ceres/app/components/common/GoogleMaps.vue"));
import LazyImg from "ceres/app/components/common/LazyImg.vue";
Vue.component("lazy-img", LazyImg);
import Intersect from "ceres/app/components/common/Intersect.vue";
Vue.component("intersect", Intersect);
import TabList from "ceres/app/components/common/TabList.vue";
Vue.component("tab-list", TabList);
import TabItem from "ceres/app/components/common/TabItem.vue";
Vue.component("tab-item", TabItem);
Vue.component("last-seen-item-list", () => import("ceres/app/components/containers/LastSeenItemList.vue"));

Vue.component("change-email-form", () => import("ceres/app/components/customer/ChangeEmailForm.vue"));
import ReCaptcha from "ceres/app/components/customer/ReCaptcha.vue";
Vue.component("recaptcha", ReCaptcha);
Vue.component("registration", () => import("ceres/app/components/customer/Registration.vue"));
Vue.component("reset-password-form", () => import("ceres/app/components/customer/ResetPasswordForm.vue"));
Vue.component("forgot-password-modal", () => import("ceres/app/components/customer/login/ForgotPassword.vue"));
Vue.component("guest-login", () => import("ceres/app/components/customer/login/GuestLogin.vue"));
Vue.component("login", () => import("ceres/app/components/customer/login/Login.vue"));
// legacy non-shopbuilder component
Vue.component("login-view", () => import("ceres/app/components/customer/login/LoginView.vue"));
import UserLoginHandler from "ceres/app/components/customer/login/UserLoginHandler.vue";
Vue.component("user-login-handler", UserLoginHandler);

Vue.component("item-bundle", () => import("ceres/app/components/item/ItemBundle.vue"));
Vue.component("order-property-value", () => import("ceres/app/components/item/OrderPropertyValue.vue"));
Vue.component("quantity-input", () => import("ceres/app/components/item/QuantityInput.vue"));

Vue.component("tag-list", () => import("ceres/app/components/item/TagList.vue"));

Vue.component("category-item", () => import("~/app/components/itemList/CategoryItem.vue"));
import ItemSearch from "ceres/app/components/itemList/ItemSearch.vue";
Vue.component("item-search", ItemSearch);
Vue.component("search-suggestion-item", () => import("ceres/app/components/itemList/SearchSuggestionItem.vue"));
Vue.component("item-filter-list", () => import("ceres/app/components/itemList/filter/ItemFilterList.vue"));
Vue.component("item-filter-tag-list", () => import("ceres/app/components/itemList/filter/ItemFilterTagList.vue"));

Vue.component("live-shopping-item", () => import("ceres/app/components/liveShopping/LiveShoppingItem.vue"));

Vue.component("newsletter-input", () => import("ceres/app/components/newsletter/NewsletterInput.vue"));
Vue.component("newsletter-unsubscribe-input", () => import("ceres/app/components/newsletter/NewsletterUnsubscribeInput.vue"));

Vue.component("order-return", () => import("ceres/app/components/orderReturn/OrderReturn.vue"));

Vue.component("cookie-bar", () => import("ceres/app/components/pageDesign/CookieBar.vue"));
Vue.component("privacy-settings", () => import("ceres/app/components/pageDesign/PrivacySettings.vue"));
Vue.component("carousel", () => import("ceres/app/components/pageDesign/Carousel.vue"));
import Icon from "ceres/app/components/pageDesign/Icon.vue";
Vue.component("icon", Icon);
import MobileNavigation from "ceres/app/components/pageDesign/MobileNavigation.vue";
Vue.component("mobile-navigation", MobileNavigation);
import Notifications from "ceres/app/components/pageDesign/Notifications.vue";
Vue.component("notifications", Notifications);
Vue.component("popper", () => import("ceres/app/components/pageDesign/Popper.vue"));
Vue.component("shipping-country-select", () => import("ceres/app/components/pageDesign/ShippingCountrySelect.vue"));
Vue.component("loading-animation", () => import("ceres/app/components/pageDesign/LoadingAnimation.vue"));

Vue.component("wish-list", () => import("ceres/app/components/wishList/WishList.vue"));
import WishListCount from "ceres/app/components/wishList/WishListCount.vue";
Vue.component("wish-list-count", WishListCount);

import LazyLoad from "ceres/app/components/common/LazyLoad.vue";
Vue.component("lazy-load", LazyLoad);

Vue.component("add-to-wish-list", () => import("ceres/app/components/item/AddToWishList.vue"));
Vue.component("graduated-prices", () => import("ceres/app/components/item/GraduatedPrices.vue"));
Vue.component("item-data-table", () => import("ceres/app/components/item/ItemDataTable.vue"));
Vue.component("item-image-carousel", () => import("ceres/app/components/item/ItemImageCarousel.vue"));
Vue.component("item-price", () => import("ceres/app/components/item/ItemPrice.vue"));
Vue.component("set-price", () => import("ceres/app/components/item/SetPrice.vue"));
Vue.component("order-property-list", () => import("ceres/app/components/item/OrderPropertyList.vue"));
Vue.component("variation-select", () => import("ceres/app/components/item/VariationSelect.vue"));
Vue.component("item-availability", () => import("ceres/app/components/item/ItemAvailability.vue"));
Vue.component("single-item-bundle", () => import("ceres/app/components/item/SingleItemBundle.vue"));
Vue.component("single-add-to-basket", () => import("ceres/app/components/item/SingleAddToBasket.vue"));
Vue.component("set-quantity-input", () => import("ceres/app/components/item/SetQuantityInput.vue"));
import SingleItem from "ceres/app/components/item/SingleItem.vue";
Vue.component("single-item", SingleItem);
import SingleItemSetComponent from "ceres/app/components/item/SingleItemSetComponent.vue";
Vue.component("single-item-set-component", SingleItemSetComponent);


// =========================
// DIRECTIVES
// =========================
import "ceres/app/directives/basket/basketItemQuantity";
import "ceres/app/directives/basket/basketItemSum";
import "ceres/app/directives/basket/toggleBasketPreview";

import "ceres/app/directives/category/openFilterToolbar";

import "ceres/app/directives/common/truncateTooltip";

import "ceres/app/directives/customer/logout";

import "~/app/directives/helper/populateStore";
import "ceres/app/directives/helper/validate";
import "ceres/app/directives/helper/waitingAnimation";
import "ceres/app/directives/helper/waitingAnimationInfinite";

import "ceres/app/directives/navigation/navigationTouchHandler";
import "ceres/app/directives/navigation/openMobileNavigation";

import "ceres/app/directives/pageDesign/scrollToTop";
import "ceres/app/directives/pageDesign/stickInParent";
import "ceres/app/directives/navigation/sidenavigationChildrenLoader";
import "ceres/app/directives/pageDesign/tooltip";


// =========================
// FILTERS
// =========================
import "ceres/app/filters/ageRestriction.filter";
import "ceres/app/filters/arrayFirst.filter";
import "ceres/app/filters/attachText.filter";
import "ceres/app/filters/currency.filter";
import "ceres/app/filters/date.filter";
import "ceres/app/filters/fileName.filter";
import "ceres/app/filters/fileUploadPath.filter";
import "ceres/app/filters/graduatedPrice.filter";
import "ceres/app/filters/hasItemDefaultPrice.filter";
import "ceres/app/filters/inputUnit.filter";
import "ceres/app/filters/itemBundleName.filter";
import "ceres/app/filters/itemCrossPrice.filter";
import "ceres/app/filters/itemImage.filter";
import "ceres/app/filters/itemImageAlternativeText.filter";
import "ceres/app/filters/itemImages.filter";
import "ceres/app/filters/itemName.filter";
import "ceres/app/filters/itemPrice.filter";
import "ceres/app/filters/itemUrl.filter";
import "ceres/app/filters/numberFormat.filter";
import "ceres/app/filters/propertySurcharge.filter";
import "ceres/app/filters/propertyFileUrl.filter";
import "ceres/app/filters/translate.filter";
import "ceres/app/filters/truncate.filter";


// =========================
// MIXINS
// =========================
import "ceres/app/mixins/getJsonData.mixin";
import "ceres/app/mixins/template.mixin";

// =========================
// Bootstrap frameworks
// =========================
import "~/app/main";
import "~/app/wd_custom";

import TranslationService from "ceres/app/services/TranslationService";
import { isNullOrUndefined } from "ceres/app/helper/utils";
window.ceresTranslate = TranslationService.translate;

Vue.prototype.$translate = TranslationService.translate;
Vue.prototype.$ceres = App;
