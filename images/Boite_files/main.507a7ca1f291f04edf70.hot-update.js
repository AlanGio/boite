webpackHotUpdate("main",{

/***/ "./src/components/Checkout/index.js":
/*!******************************************!*\
  !*** ./src/components/Checkout/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mercadopago__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mercadopago */ "./node_modules/mercadopago/index.js");
/* harmony import */ var mercadopago__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mercadopago__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _checkout_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkout.scss */ "./src/components/Checkout/checkout.scss");
/* harmony import */ var _checkout_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_checkout_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/alangiojelli/Documents/Repos/MacbookAir/boite/src/components/Checkout/index.js";




const Checkout = () => {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    mercadopago__WEBPACK_IMPORTED_MODULE_1___default.a.configure({
      access_token: 'APP_USR-2694672124520651-091500-1357881161a9d110ef9251da659f183e-45664099'
    }); // Crea un objeto de preferencia

    let preference = {
      items: [{
        title: 'Mi producto',
        unit_price: 100,
        quantity: 1
      }]
    };
    mercadopago__WEBPACK_IMPORTED_MODULE_1___default.a.preferences.create(preference).then(function (response) {
      // Este valor reemplazará el string "$$init_point$$" en tu HTML
      global.init_point = response.body.init_point;
    }).catch(function (error) {
      console.log(error);
    });
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "page checkout",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, "Hello Checkout!", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    action: "/procesar-pago",
    method: "POST",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    src: "https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js",
    "data-preference-id": "$$id$$",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Checkout);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ })

})
//# sourceMappingURL=main.507a7ca1f291f04edf70.hot-update.js.map