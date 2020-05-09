// checkout script extends category script
import "~/base";

import "ceres/app/components/checkout/AcceptGtcCheck";
import "ceres/app/components/checkout/Checkout";
import "ceres/app/components/checkout/ContactWishInput";
import "ceres/app/components/checkout/CustomerSignInput";
import "ceres/app/components/checkout/PaymentProviderSelect";
import "ceres/app/components/checkout/PlaceOrder";
import "ceres/app/components/checkout/ShippingPrivacyHintCheck";
import "ceres/app/components/checkout/ShippingProfileSelect";
import "ceres/app/components/checkout/SubscribeNewsletterCheck";

import "ceres/app/components/customer/AddressSelect/AddressHeader";
import "ceres/app/components/customer/AddressSelect/InvoiceAddressSelect";
import "ceres/app/components/customer/AddressSelect/ShippingAddressSelect";

import "ceres/app/components/myAccount/AccountSettings";
import "ceres/app/components/myAccount/BankDataSelect";
import "ceres/app/components/myAccount/ChangePaymentMethod";
import "ceres/app/components/myAccount/MyAccount";
import "ceres/app/components/myAccount/OrderDocuments";

// legacy non-shopbuilder components
import "ceres/app/components/myAccount/History";

// new shopbuilder-only component
Vue.component("edit-coupon-overlay", () => import("ceres/app/components/myAccount/EditCouponOverlay.vue"));
import "ceres/app/components/myAccount/OrderHistoryList";
import "ceres/app/components/myAccount/OrderReturnHistoryList";
