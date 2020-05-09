import Vue from "vue";
import Vuex from "vuex";

import ApiService from "ceres/app/services/ApiService";

import address from "ceres/app/store/modules/AddressModule";
import basket from "ceres/app/store/modules/BasketModule";
import checkout from "ceres/app/store/modules/CheckoutModule";
import consents from "ceres/app/store/modules/ConsentModule";
import contactForm from "ceres/app/store/modules/ContactFormModule";
import itemList from "ceres/app/store/modules/ItemListModule";
import itemSearch from "ceres/app/store/modules/ItemSearchModule";
import lastSeen from "ceres/app/store/modules/LastSeenModule";
import lazyComponent from "ceres/app/store/modules/LazyComponentModule";
import liveShopping from "ceres/app/store/modules/LiveShoppingModule";
import localization from "ceres/app/store/modules/LocalizationModule";
import navigation from "ceres/app/store/modules/NavigationModule";
import orderReturn from "ceres/app/store/modules/OrderReturnModule";
import user from "ceres/app/store/modules/UserModule";
import wishList from "ceres/app/store/modules/WishListModule";
import items from "ceres/app/store/modules/singleItem/BaseItemModule";

import eventPropagation from "ceres/app/store/plugins/EventPropagationPlugin";


// =========================
// init vuex store
// =========================

Vue.options.delimiters = ["${", "}"];
Vue.use(Vuex);

// eslint-disable-next-line
const store = new Vuex.Store(
    {
        modules:
            {
                address,
                basket,
                checkout,
                consents,
                contactForm,
                itemList,
                items,
                itemSearch,
                lastSeen,
                lazyComponent,
                liveShopping,
                localization,
                navigation,
                orderReturn,
                user,
                wishList
            },

        plugins: [eventPropagation]
    });

// =========================
// Fill initial vuex data
// =========================

App.initialData.shippingCountries.sort((first, second) =>
{
    if (first.currLangName < second.currLangName)
    {
        return -1;
    }
    if (first.currLangName > second.currLangName)
    {
        return 1;
    }
    return 0;
});

store.commit("setShippingCountries", App.initialData.shippingCountries);
store.commit("setShippingCountryId", App.initialData.shippingCountryId);
store.commit("initConsents");

ApiService.listen("LocalizationChanged",
    data =>
    {
        store.commit("setShippingCountries", data.localization.activeShippingCountries);
        store.commit("setShippingCountryId", data.localization.currentShippingCountryId);
    });


window.ceresStore = store;

ApiService.listen("AfterBasketChanged",
    data =>
    {
        store.commit("setBasket", data.basket);
        store.commit("setShowNetPrices", data.showNetPrices);
        store.commit("setWishListIds", data.basket.itemWishListIds);
    });

store.dispatch("loadBasketData");

export default store;
