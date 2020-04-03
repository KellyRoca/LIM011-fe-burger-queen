(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/index.esm.js");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_product_catalog_product_catalog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/product-catalog/product-catalog.component */ "./src/app/components/product-catalog/product-catalog.component.ts");
/* harmony import */ var _components_order_order_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/order/order.component */ "./src/app/components/order/order.component.ts");
/* harmony import */ var _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/modal/modal.component */ "./src/app/components/modal/modal.component.ts");







class AppComponent {
    constructor() {
        this.title = 'burgerQueen';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 0, consts: [[1, "row"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-product-catalog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-order");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-modal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _components_product_catalog_product_catalog_component__WEBPACK_IMPORTED_MODULE_3__["ProductCatalogComponent"], _components_order_order_component__WEBPACK_IMPORTED_MODULE_4__["OrderComponent"], _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_5__["ModalComponent"]], styles: ["app-header[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nmain[_ngcontent-%COMP%] {\n  width: 100%;\n  box-sizing: border-box;\n  margin-left: 0px !important;\n  margin-right: 0px !important;\n  display: -webkit-box;\n  display: flex;\n}\n\napp-product-catalog[_ngcontent-%COMP%] {\n  width: 60%;\n}\n\napp-order[_ngcontent-%COMP%] {\n  width: 40%;\n}\n\n@media (max-width: 576px) {\n  main[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  app-product-catalog[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  app-order[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2tlbGx5L0Rlc2t0b3AvTElNMDExLWZlLWJ1cmdlci1xdWVlbi9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtBQ0NGOztBREVBO0VBQ0UsVUFBQTtBQ0NGOztBREVBO0VBQ0UsVUFBQTtBQ0NGOztBREVBO0VBQ0U7SUFDRSxjQUFBO0VDQ0Y7O0VERUE7SUFDRSxXQUFBO0VDQ0Y7O0VERUE7SUFDRSxXQUFBO0VDQ0Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFwcC1oZWFkZXJ7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5tYWlue1xuICB3aWR0aDogMTAwJTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWFyZ2luLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG5hcHAtcHJvZHVjdC1jYXRhbG9ne1xuICB3aWR0aDogNjAlO1xufVxuXG5hcHAtb3JkZXJ7XG4gIHdpZHRoOiA0MCU7XG59XG5cbkBtZWRpYShtYXgtd2lkdGg6IDU3NnB4KXtcbiAgbWFpbntcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIGFwcC1wcm9kdWN0LWNhdGFsb2d7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgXG4gIGFwcC1vcmRlcntcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuXG5cblxuIiwiYXBwLWhlYWRlciB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5tYWluIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1hcmdpbi1sZWZ0OiAwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuYXBwLXByb2R1Y3QtY2F0YWxvZyB7XG4gIHdpZHRoOiA2MCU7XG59XG5cbmFwcC1vcmRlciB7XG4gIHdpZHRoOiA0MCU7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICBtYWluIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIGFwcC1wcm9kdWN0LWNhdGFsb2cge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgYXBwLW9yZGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_product_product_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/product/product.component */ "./src/app/components/product/product.component.ts");
/* harmony import */ var _components_order_order_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/order/order.component */ "./src/app/components/order/order.component.ts");
/* harmony import */ var _components_product_catalog_product_catalog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/product-catalog/product-catalog.component */ "./src/app/components/product-catalog/product-catalog.component.ts");
/* harmony import */ var _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/modal/modal.component */ "./src/app/components/modal/modal.component.ts");














class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_5__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].firebase),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
        _components_product_product_component__WEBPACK_IMPORTED_MODULE_8__["ProductComponent"],
        _components_order_order_component__WEBPACK_IMPORTED_MODULE_9__["OrderComponent"],
        _components_product_catalog_product_catalog_component__WEBPACK_IMPORTED_MODULE_10__["ProductCatalogComponent"],
        _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_11__["ModalComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_5__["AngularFireModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                    _components_product_product_component__WEBPACK_IMPORTED_MODULE_8__["ProductComponent"],
                    _components_order_order_component__WEBPACK_IMPORTED_MODULE_9__["OrderComponent"],
                    _components_product_catalog_product_catalog_component__WEBPACK_IMPORTED_MODULE_10__["ProductCatalogComponent"],
                    _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_11__["ModalComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_fire__WEBPACK_IMPORTED_MODULE_5__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].firebase),
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class HeaderComponent {
    constructor() {
        this.title = 'Burger Queen';
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 11, vars: 1, consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "bg-yellow"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarToggler", "aria-controls", "navbarToggler", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], [1, "col-9", "col-sm-10", "col-md-10", "justify-content-center", "content-brand"], ["href", "#", 1, "navbar-brand"], ["id", "navbarToggler", 1, "collapse", "navbar-collapse", "col-2"], [1, "navbar-nav", "col-12", "col-md-12"], [1, "nav-item", "active", "btn-sm", "bg-red", "col-12"], ["href", "#", 1, "nav-link", "text-white"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Pedidos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.title, " ");
    } }, styles: [".bg-yellow[_ngcontent-%COMP%] {\n  background-color: #ffef08;\n}\n\n.bg-red[_ngcontent-%COMP%] {\n  background-color: #ff5608;\n}\n\n.bg-red-border[_ngcontent-%COMP%] {\n  border-color: #ff5608;\n}\n\n.navbar-brand[_ngcontent-%COMP%] {\n  font-family: \"Cormorant Garamond\", serif;\n  font-size: 28px;\n}\n\nli[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n\n.btn-outline-danger[_ngcontent-%COMP%] {\n  border-color: #ff5608;\n}\n\nnav[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n\n.content-brand[_ngcontent-%COMP%] {\n  text-align: left !important;\n}\n\n.nav-item[_ngcontent-%COMP%] {\n  text-align: center !important;\n}\n\n@media (max-width: 990px) {\n  .content-brand[_ngcontent-%COMP%] {\n    text-align: center !important;\n  }\n\n  .bg-yellow[_ngcontent-%COMP%] {\n    background-color: #ffef08;\n  }\n\n  .bg-red[_ngcontent-%COMP%] {\n    background-color: transparent;\n  }\n\n  .bg-red-border[_ngcontent-%COMP%] {\n    border-color: transparent;\n  }\n\n  li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: #333 !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2tlbGx5L0Rlc2t0b3AvTElNMDExLWZlLWJ1cmdlci1xdWVlbi9zcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQkFBQTtBQ0NGOztBREVBO0VBQ0Usd0NBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UscUJBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSwyQkFBQTtBQ0NGOztBREVBO0VBQ0UsNkJBQUE7QUNDRjs7QURFQTtFQUNFO0lBQ0UsNkJBQUE7RUNDRjs7RURFQTtJQUNFLHlCQUFBO0VDQ0Y7O0VERUE7SUFDRSw2QkFBQTtFQ0NGOztFREVBO0lBQ0UseUJBQUE7RUNDRjs7RURFQTtJQUNFLHNCQUFBO0VDQ0Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZy15ZWxsb3d7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDIzOSwgOCk7XG59XG5cbi5iZy1yZWR7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDg2LCA4KTtcbn1cblxuLmJnLXJlZC1ib3JkZXJ7XG4gIGJvcmRlci1jb2xvcjogcmdiKDI1NSwgODYsIDgpO1xufVxuXG4ubmF2YmFyLWJyYW5ke1xuICBmb250LWZhbWlseTogJ0Nvcm1vcmFudCBHYXJhbW9uZCcsIHNlcmlmO1xuICBmb250LXNpemU6IDI4cHg7XG59XG5cbmxpe1xuICBtYXJnaW4tbGVmdDogOHB4O1xufVxuXG4uYnRuLW91dGxpbmUtZGFuZ2Vye1xuICBib3JkZXItY29sb3I6IHJnYigyNTUsIDg2LCA4KTtcbn1cblxubmF2e1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbi5jb250ZW50LWJyYW5ke1xuICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG59XG5cbi5uYXYtaXRlbXtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTBweCl7XG4gIC5jb250ZW50LWJyYW5ke1xuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmJnLXllbGxvd3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgcmdiKDI1NSwgMjM5LCA4KTtcbiAgfVxuICBcbiAgLmJnLXJlZHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgfVxuICBcbiAgLmJnLXJlZC1ib3JkZXJ7XG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgfVxuXG4gIGxpIGF7XG4gICAgY29sb3I6ICMzMzMgIWltcG9ydGFudDtcbiAgfVxuXG59IiwiLmJnLXllbGxvdyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmVmMDg7XG59XG5cbi5iZy1yZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY1NjA4O1xufVxuXG4uYmctcmVkLWJvcmRlciB7XG4gIGJvcmRlci1jb2xvcjogI2ZmNTYwODtcbn1cblxuLm5hdmJhci1icmFuZCB7XG4gIGZvbnQtZmFtaWx5OiBcIkNvcm1vcmFudCBHYXJhbW9uZFwiLCBzZXJpZjtcbiAgZm9udC1zaXplOiAyOHB4O1xufVxuXG5saSB7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG59XG5cbi5idG4tb3V0bGluZS1kYW5nZXIge1xuICBib3JkZXItY29sb3I6ICNmZjU2MDg7XG59XG5cbm5hdiB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuLmNvbnRlbnQtYnJhbmQge1xuICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG59XG5cbi5uYXYtaXRlbSB7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTkwcHgpIHtcbiAgLmNvbnRlbnQtYnJhbmQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmJnLXllbGxvdyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZWYwODtcbiAgfVxuXG4gIC5iZy1yZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG5cbiAgLmJnLXJlZC1ib3JkZXIge1xuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIH1cblxuICBsaSBhIHtcbiAgICBjb2xvcjogIzMzMyAhaW1wb3J0YW50O1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/modal/modal.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/modal/modal.component.ts ***!
  \*****************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function ModalComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_div_8_Template_div_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const productExtra_r15 = ctx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.getExtraSelected(productExtra_r15); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const productExtra_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", productExtra_r15.data.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](productExtra_r15.data.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 3, productExtra_r15.data.price));
} }
const _c0 = function (a0) { return { display: a0 }; };
class ModalComponent {
    constructor() {
        this.extrasSelected = [];
        this.customClass = '';
        this.sendArrayOfExtras = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.closeModal = () => {
            return false;
        };
    }
    ngOnInit() { }
    getExtraSelected(productExtraSelected) {
        const position = this.extrasSelected.findIndex((product) => product.id === productExtraSelected.id);
        if (position !== -1) {
            this.extrasSelected.splice(position, 1);
        }
        else {
            this.extrasSelected.push(productExtraSelected);
        }
    }
    addExtras() {
        this.sendArrayOfExtras.emit(this.extrasSelected);
        this.closeModal();
        this.extrasSelected = [];
    }
}
ModalComponent.ɵfac = function ModalComponent_Factory(t) { return new (t || ModalComponent)(); };
ModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModalComponent, selectors: [["app-modal"]], inputs: { productsExtras: "productsExtras", show: "show", customClass: "customClass", closeModal: "closeModal" }, outputs: { sendArrayOfExtras: "sendArrayOfExtras" }, decls: 11, vars: 5, consts: [[1, "modal", 3, "ngClass", "ngStyle"], [1, "overlay"], [1, "modal_content"], ["title", "Close", 1, "close_modal", 3, "click"], [1, "container"], [4, "ngFor", "ngForOf"], [1, "btn", "btn-primary", 3, "click"], [1, "selected", 3, "click"], ["alt", "image of product", 1, "img-medium", 3, "src"]], template: function ModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_Template_button_click_3_listener($event) { return ctx.closeModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "X");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Extras");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ModalComponent_div_8_Template, 8, 5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_Template_button_click_9_listener($event) { return ctx.addExtras(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Aceptar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.customClass || "")("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx.show ? "block" : "none"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.productsExtras);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CurrencyPipe"]], styles: [".selected[_ngcontent-%COMP%] {\n  border: solid 1px #c9c9c9;\n  background-color: #eeeeee;\n  padding: 8px 24px;\n  border-radius: 4px;\n}\n\n.selected[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.selected[_ngcontent-%COMP%]:active {\n  background-color: yellow;\n}\n\n.btn-primary[_ngcontent-%COMP%] {\n  background-color: #ff5608;\n  color: white;\n  border: 1px solid #ff5608;\n}\n\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background-color: #e24801;\n  color: white;\n  border: 1px solid #e24801;\n}\n\n@media (max-width: 319px) {\n  .modal[_ngcontent-%COMP%] {\n    position: fixed;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    z-index: 990;\n  }\n\n  .modal[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] {\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    z-index: 995;\n    background: rgba(0, 0, 0, 0.4);\n  }\n\n  .modal[_ngcontent-%COMP%]   .modal_content[_ngcontent-%COMP%] {\n    z-index: 999;\n    position: absolute;\n    top: 60%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    max-height: 90%;\n    overflow: auto;\n    background: #fff;\n    padding: 20px;\n    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);\n    text-align: center;\n    border-radius: 4px;\n    width: 265px;\n  }\n\n  .modal[_ngcontent-%COMP%]   .modal_content[_ngcontent-%COMP%]    > h3[_ngcontent-%COMP%] {\n    font-size: 28px;\n    font-weight: 200;\n    margin: 20px 0 40px;\n    text-align: center;\n  }\n\n  .modal[_ngcontent-%COMP%]   .close_modal[_ngcontent-%COMP%] {\n    position: absolute;\n    right: 10px;\n    top: 10px;\n    cursor: pointer;\n    font-size: 18px;\n    opacity: 0.5;\n    background: none;\n    border: none;\n    -webkit-transition: opacity 0.2s ease;\n    transition: opacity 0.2s ease;\n  }\n\n  .modal[_ngcontent-%COMP%]   .close_modal[_ngcontent-%COMP%]:hover {\n    opacity: 0.9;\n  }\n\n  img[_ngcontent-%COMP%] {\n    height: 80px;\n    width: 80px;\n    border-radius: 25%;\n    padding: 8px;\n    margin-top: 16px;\n  }\n\n  p[_ngcontent-%COMP%] {\n    font-size: 18px;\n    margin: 0px;\n  }\n}\n\n@media (min-width: 320px) {\n  .modal[_ngcontent-%COMP%] {\n    position: fixed;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    z-index: 990;\n  }\n\n  .modal[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] {\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    z-index: 995;\n    background: rgba(0, 0, 0, 0.4);\n  }\n\n  .modal[_ngcontent-%COMP%]   .modal_content[_ngcontent-%COMP%] {\n    z-index: 999;\n    position: absolute;\n    top: 60%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    max-height: 90%;\n    overflow: auto;\n    background: #fff;\n    padding: 20px;\n    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);\n    text-align: center;\n    border-radius: 4px;\n    width: 265px;\n  }\n  .modal[_ngcontent-%COMP%]   .modal_content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    color: #0074C5;\n  }\n  .modal[_ngcontent-%COMP%]   .modal_content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: space-evenly;\n            justify-content: space-evenly;\n  }\n\n  .modal[_ngcontent-%COMP%]   .modal_content[_ngcontent-%COMP%]    > h3[_ngcontent-%COMP%] {\n    font-size: 28px;\n    font-weight: 200;\n    margin: 20px 0 40px;\n    text-align: center;\n  }\n\n  .modal[_ngcontent-%COMP%]   .modal_content[_ngcontent-%COMP%]   .buttons_wrapper[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n\n  .modal[_ngcontent-%COMP%]   .close_modal[_ngcontent-%COMP%] {\n    position: absolute;\n    right: 10px;\n    top: 10px;\n    cursor: pointer;\n    font-size: 18px;\n    opacity: 0.5;\n    background: none;\n    border: none;\n    -webkit-transition: opacity 0.2s ease;\n    transition: opacity 0.2s ease;\n  }\n\n  .modal[_ngcontent-%COMP%]   .close_modal[_ngcontent-%COMP%]:hover {\n    opacity: 0.9;\n  }\n\n  img[_ngcontent-%COMP%] {\n    height: 80px;\n    width: 80px;\n    border-radius: 25%;\n    padding: 8px;\n    margin-top: 16px;\n  }\n\n  p[_ngcontent-%COMP%] {\n    font-size: 18px;\n    margin: 0px;\n  }\n}\n\n@media (min-width: 768px) {\n  .modal[_ngcontent-%COMP%]   .modal_content[_ngcontent-%COMP%] {\n    width: 450px;\n  }\n}\n\n@media (min-width: 1200px) {\n  .modal[_ngcontent-%COMP%]   .modal_content[_ngcontent-%COMP%] {\n    width: 650px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2tlbGx5L0Rlc2t0b3AvTElNMDExLWZlLWJ1cmdlci1xdWVlbi9zcmMvYXBwL2NvbXBvbmVudHMvbW9kYWwvbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbW9kYWwvbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtBQ0NGOztBREVBO0VBQ0Usd0JBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQ0NGOztBREdBO0VBQ0U7SUFDRSxlQUFBO0lBQ0EsT0FBQTtJQUNBLE1BQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtJQUNBLFlBQUE7RUNBRjs7RURHQTtJQUNFLGtCQUFBO0lBQ0EsT0FBQTtJQUNBLE1BQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtJQUNBLFlBQUE7SUFDQSw4QkFBQTtFQ0FGOztFREdBO0lBQ0UsWUFBQTtJQUNBLGtCQUFBO0lBQ0EsUUFBQTtJQUNBLFNBQUE7SUFDQSx3Q0FBQTtZQUFBLGdDQUFBO0lBQ0EsZUFBQTtJQUNBLGNBQUE7SUFDQSxnQkFBQTtJQUNBLGFBQUE7SUFDQSx3Q0FBQTtJQUNBLGtCQUFBO0lBQ0Esa0JBQUE7SUFDQSxZQUFBO0VDQUY7O0VER0E7SUFDRSxlQUFBO0lBQ0EsZ0JBQUE7SUFDQSxtQkFBQTtJQUNBLGtCQUFBO0VDQUY7O0VER0E7SUFDRSxrQkFBQTtJQUNBLFdBQUE7SUFDQSxTQUFBO0lBQ0EsZUFBQTtJQUNBLGVBQUE7SUFDQSxZQUFBO0lBQ0EsZ0JBQUE7SUFDQSxZQUFBO0lBQ0EscUNBQUE7SUFBQSw2QkFBQTtFQ0FGOztFREdBO0lBQ0UsWUFBQTtFQ0FGOztFREdBO0lBQ0UsWUFBQTtJQUNBLFdBQUE7SUFDQSxrQkFBQTtJQUNBLFlBQUE7SUFDQSxnQkFBQTtFQ0FGOztFREdBO0lBQ0UsZUFBQTtJQUNBLFdBQUE7RUNBRjtBQUNGOztBRElBO0VBQ0U7SUFDRSxlQUFBO0lBQ0EsT0FBQTtJQUNBLE1BQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtJQUNBLFlBQUE7RUNGRjs7RURLQTtJQUNFLGtCQUFBO0lBQ0EsT0FBQTtJQUNBLE1BQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtJQUNBLFlBQUE7SUFDQSw4QkFBQTtFQ0ZGOztFREtBO0lBQ0UsWUFBQTtJQUNBLGtCQUFBO0lBQ0EsUUFBQTtJQUNBLFNBQUE7SUFDQSx3Q0FBQTtZQUFBLGdDQUFBO0lBQ0EsZUFBQTtJQUNBLGNBQUE7SUFDQSxnQkFBQTtJQUNBLGFBQUE7SUFDQSx3Q0FBQTtJQUNBLGtCQUFBO0lBQ0Esa0JBQUE7SUFDQSxZQUFBO0VDRkY7RURHRTtJQUNFLGNBQUE7RUNESjtFREdFO0lBQ0Esb0JBQUE7SUFBQSxhQUFBO0lBQ0EsOEJBQUE7WUFBQSw2QkFBQTtFQ0RGOztFREtBO0lBQ0UsZUFBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7SUFDQSxrQkFBQTtFQ0ZGOztFREtBO0lBQ0UsYUFBQTtFQ0ZGOztFREtBO0lBQ0Usa0JBQUE7SUFDQSxXQUFBO0lBQ0EsU0FBQTtJQUNBLGVBQUE7SUFDQSxlQUFBO0lBQ0EsWUFBQTtJQUNBLGdCQUFBO0lBQ0EsWUFBQTtJQUNBLHFDQUFBO0lBQUEsNkJBQUE7RUNGRjs7RURLQTtJQUNFLFlBQUE7RUNGRjs7RURLQTtJQUNFLFlBQUE7SUFDQSxXQUFBO0lBQ0Esa0JBQUE7SUFDQSxZQUFBO0lBQ0EsZ0JBQUE7RUNGRjs7RURLQTtJQUNFLGVBQUE7SUFDQSxXQUFBO0VDRkY7QUFDRjs7QURTQTtFQUNFO0lBQ0UsWUFBQTtFQ1BGO0FBQ0Y7O0FEV0E7RUFDRTtJQUNFLFlBQUE7RUNURjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tb2RhbC9tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWxlY3RlZHtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2M5YzljOTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZTtcbiAgcGFkZGluZzogOHB4IDI0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLnNlbGVjdGVkOmhvdmVye1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zZWxlY3RlZDphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7ICBcbn1cblxuLmJ0bi1wcmltYXJ5e1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY1NjA4O1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZjU2MDg7O1xufVxuXG4uYnRuLXByaW1hcnk6aG92ZXJ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMjQ4MDE7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2UyNDgwMTs7XG59XG5cblxuQG1lZGlhIChtYXgtd2lkdGg6IDMxOXB4KSB7XG4gIC5tb2RhbCB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB6LWluZGV4OiA5OTA7XG4gIH1cbiAgXG4gIC5tb2RhbCAub3ZlcmxheSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB6LWluZGV4OiA5OTU7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjQpO1xuICB9XG4gIFxuICAubW9kYWwgLm1vZGFsX2NvbnRlbnQge1xuICAgIHotaW5kZXg6IDk5OTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA2MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIG1heC1oZWlnaHQ6IDkwJTtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYm94LXNoYWRvdzogMCAxcHggNXB4IHJnYmEoMCwwLDAsMC4xKTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIHdpZHRoOiAyNjVweDtcbiAgfVxuICBcbiAgLm1vZGFsIC5tb2RhbF9jb250ZW50ID4gaDMge1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICBmb250LXdlaWdodDogMjAwO1xuICAgIG1hcmdpbjogMjBweCAwIDQwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIFxuICAubW9kYWwgLmNsb3NlX21vZGFsIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDEwcHg7XG4gICAgdG9wOiAxMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgb3BhY2l0eTogMC41O1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyBlYXNlO1xuICB9XG4gIFxuICAubW9kYWwgLmNsb3NlX21vZGFsOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAwLjk7XG4gIH1cbiAgXG4gIGltZ3tcbiAgICBoZWlnaHQ6IDgwcHg7XG4gICAgd2lkdGg6IDgwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjUlO1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICB9XG4gIFxuICBwe1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBtYXJnaW46IDBweDtcbiAgfVxuICBcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSB7XG4gIC5tb2RhbCB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB6LWluZGV4OiA5OTA7XG4gIH1cbiAgXG4gIC5tb2RhbCAub3ZlcmxheSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB6LWluZGV4OiA5OTU7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjQpO1xuICB9XG4gIFxuICAubW9kYWwgLm1vZGFsX2NvbnRlbnQge1xuICAgIHotaW5kZXg6IDk5OTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA2MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIG1heC1oZWlnaHQ6IDkwJTtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYm94LXNoYWRvdzogMCAxcHggNXB4IHJnYmEoMCwwLDAsMC4xKTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIHdpZHRoOiAyNjVweDtcbiAgICBoM3tcbiAgICAgIGNvbG9yOiAjMDA3NEM1O1xuICAgIH1cbiAgICAuY29udGFpbmVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgfVxuICB9XG4gIFxuICAubW9kYWwgLm1vZGFsX2NvbnRlbnQgPiBoMyB7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gICAgbWFyZ2luOiAyMHB4IDAgNDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgXG4gIC5tb2RhbCAubW9kYWxfY29udGVudCAuYnV0dG9uc193cmFwcGVyIHtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICB9XG4gIFxuICAubW9kYWwgLmNsb3NlX21vZGFsIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDEwcHg7XG4gICAgdG9wOiAxMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgb3BhY2l0eTogMC41O1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyBlYXNlO1xuICB9XG4gIFxuICAubW9kYWwgLmNsb3NlX21vZGFsOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAwLjk7XG4gIH1cblxuICBpbWd7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDI1JTtcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgbWFyZ2luLXRvcDogMTZweDtcbiAgfVxuICBcbiAgcHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbWFyZ2luOiAwcHg7XG4gIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDQ4MHB4KSB7fVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNTYwcHgpIHt9XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAubW9kYWwgLm1vZGFsX2NvbnRlbnQge1xuICAgIHdpZHRoOiA0NTBweDtcbiAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogOTgwcHgpIHt9XG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gIC5tb2RhbCAubW9kYWxfY29udGVudCB7XG4gICAgd2lkdGg6IDY1MHB4O1xuICB9XG59XG4iLCIuc2VsZWN0ZWQge1xuICBib3JkZXI6IHNvbGlkIDFweCAjYzljOWM5O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlO1xuICBwYWRkaW5nOiA4cHggMjRweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4uc2VsZWN0ZWQ6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zZWxlY3RlZDphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XG59XG5cbi5idG4tcHJpbWFyeSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjU2MDg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmNTYwODtcbn1cblxuLmJ0bi1wcmltYXJ5OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UyNDgwMTtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTI0ODAxO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMzE5cHgpIHtcbiAgLm1vZGFsIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHotaW5kZXg6IDk5MDtcbiAgfVxuXG4gIC5tb2RhbCAub3ZlcmxheSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB6LWluZGV4OiA5OTU7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjQpO1xuICB9XG5cbiAgLm1vZGFsIC5tb2RhbF9jb250ZW50IHtcbiAgICB6LWluZGV4OiA5OTk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNjAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICBtYXgtaGVpZ2h0OiA5MCU7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICB3aWR0aDogMjY1cHg7XG4gIH1cblxuICAubW9kYWwgLm1vZGFsX2NvbnRlbnQgPiBoMyB7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gICAgbWFyZ2luOiAyMHB4IDAgNDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAubW9kYWwgLmNsb3NlX21vZGFsIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDEwcHg7XG4gICAgdG9wOiAxMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgb3BhY2l0eTogMC41O1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyBlYXNlO1xuICB9XG5cbiAgLm1vZGFsIC5jbG9zZV9tb2RhbDpob3ZlciB7XG4gICAgb3BhY2l0eTogMC45O1xuICB9XG5cbiAgaW1nIHtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gICAgd2lkdGg6IDgwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjUlO1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICB9XG5cbiAgcCB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIG1hcmdpbjogMHB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIHtcbiAgLm1vZGFsIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHotaW5kZXg6IDk5MDtcbiAgfVxuXG4gIC5tb2RhbCAub3ZlcmxheSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB6LWluZGV4OiA5OTU7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjQpO1xuICB9XG5cbiAgLm1vZGFsIC5tb2RhbF9jb250ZW50IHtcbiAgICB6LWluZGV4OiA5OTk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNjAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICBtYXgtaGVpZ2h0OiA5MCU7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICB3aWR0aDogMjY1cHg7XG4gIH1cbiAgLm1vZGFsIC5tb2RhbF9jb250ZW50IGgzIHtcbiAgICBjb2xvcjogIzAwNzRDNTtcbiAgfVxuICAubW9kYWwgLm1vZGFsX2NvbnRlbnQgLmNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgfVxuXG4gIC5tb2RhbCAubW9kYWxfY29udGVudCA+IGgzIHtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgICBtYXJnaW46IDIwcHggMCA0MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC5tb2RhbCAubW9kYWxfY29udGVudCAuYnV0dG9uc193cmFwcGVyIHtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICB9XG5cbiAgLm1vZGFsIC5jbG9zZV9tb2RhbCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAxMHB4O1xuICAgIHRvcDogMTBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIG9wYWNpdHk6IDAuNTtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgZWFzZTtcbiAgfVxuXG4gIC5tb2RhbCAuY2xvc2VfbW9kYWw6aG92ZXIge1xuICAgIG9wYWNpdHk6IDAuOTtcbiAgfVxuXG4gIGltZyB7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDI1JTtcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgbWFyZ2luLXRvcDogMTZweDtcbiAgfVxuXG4gIHAge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBtYXJnaW46IDBweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5tb2RhbCAubW9kYWxfY29udGVudCB7XG4gICAgd2lkdGg6IDQ1MHB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gIC5tb2RhbCAubW9kYWxfY29udGVudCB7XG4gICAgd2lkdGg6IDY1MHB4O1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-modal',
                templateUrl: './modal.component.html',
                styleUrls: ['./modal.component.scss']
            }]
    }], function () { return []; }, { productsExtras: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], show: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], customClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], sendArrayOfExtras: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], closeModal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/order/order.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/order/order.component.ts ***!
  \*****************************************************/
/*! exports provided: OrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderComponent", function() { return OrderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_services_order_order_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/order/order.service */ "./src/app/services/order/order.service.ts");
/* harmony import */ var src_app_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/firestore/firestore.service */ "./src/app/services/firestore/firestore.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function OrderComponent_tr_18_tr_11_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const extra_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", extra_r8.data.name, " ");
} }
function OrderComponent_tr_18_tr_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, OrderComponent_tr_18_tr_11_span_1_Template, 2, 1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r5["extra"]);
} }
function OrderComponent_tr_18_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderComponent_tr_18_Template_button_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const item_r5 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.subtractItem(item_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderComponent_tr_18_Template_button_click_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const item_r5 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.addItem(item_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, OrderComponent_tr_18_tr_11_Template, 2, 1, "tr", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderComponent_tr_18_Template_i_click_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const item_r5 = ctx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.deleteItem(item_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r5.quantity, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r5.product, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r5.extra.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 4, item_r5.amount), " ");
} }
class OrderComponent {
    constructor(orderService, firestoreService) {
        this.orderService = orderService;
        this.firestoreService = firestoreService;
        this.quantity = 1;
        this.position = 0;
        this.arrOrder = [];
        this.amount = 0;
        this.orderForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            nameCustomer: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
        });
    }
    ngOnInit() {
        this.getOrder();
    }
    getOrder() {
        this.orderService.currentOrder.subscribe(array => {
            this.arrOrder = array;
            console.log(this.arrOrder);
            this.amount = 0;
            this.arrOrder.forEach(product => {
                this.amount = product.amount + this.amount;
            });
        });
    }
    addItem(objectItem) {
        this.orderService.addQuantity(objectItem);
    }
    subtractItem(objectItem) {
        this.orderService.subtractQuantity(objectItem);
    }
    deleteItem(objectItem) {
        this.orderService.deleteItem(objectItem);
    }
    sendOrder() {
        this.amount = 0;
        this.arrOrder.forEach(product => {
            this.amount = product.amount + this.amount;
        });
        this.orderForm.value.items = this.arrOrder;
        this.orderForm.value.date = new Date();
        this.orderForm.value.amount = this.amount;
        if (this.arrOrder.length > 0 && this.orderForm.value.nameCustomer !== '') {
            // enviar al firestore solo si hay items en la orden.
            this.firestoreService.setOrder(this.orderForm.value);
            // Limpiar contenido del input y tabla.
            this.orderForm.patchValue({
                nameCustomer: ''
            });
            this.orderService.resetOrder();
        }
    }
}
OrderComponent.ɵfac = function OrderComponent_Factory(t) { return new (t || OrderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_order_order_service__WEBPACK_IMPORTED_MODULE_2__["OrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_3__["FirestoreService"])); };
OrderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OrderComponent, selectors: [["app-order"]], decls: 27, vars: 5, consts: [[1, "col-12", 3, "formGroup", "submit"], [1, "row"], [1, "contain-customer", "col-12"], ["for", "customer"], ["type", "text", "id", "customer", "formControlName", "nameCustomer", "required", "", 1, "customer", "form-control"], [1, "contain-table"], [1, "table", "table-light", "table-hover"], [1, "thead-light"], ["scope", "col"], [4, "ngFor", "ngForOf"], [1, "amount"], ["colspan", "2"], ["type", "submit", 1, "btn", "btn-send", "col-sm-12", "offset-lg-0"], [1, "quantity"], ["type", "button", 1, "form-control", "btn-subtract", 3, "click"], ["type", "button", 1, "form-control", "btn-add", 3, "click"], [4, "ngIf"], ["aria-hidden", "true", 1, "fa", "fa-trash-o", "form-control", 3, "click"]], template: function OrderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function OrderComponent_Template_form_submit_0_listener($event) { return ctx.sendOrder(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Cliente");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "thead", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Cant.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Descripci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Precio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, OrderComponent_tr_18_Template, 17, 6, "tr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Enviar a cocina");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.orderForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.arrOrder);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](24, 3, ctx.amount));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CurrencyPipe"]], styles: [".quantity[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: space-evenly;\n          justify-content: space-evenly;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.quantity[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin: 0px 4px;\n}\n\n.contain-table[_ngcontent-%COMP%] {\n  margin: 8px 0px;\n  border: 2px solid #c2ccd6;\n  max-height: 400px !important;\n  overflow-y: scroll !important;\n}\n\ntable[_ngcontent-%COMP%] {\n  margin: 0px;\n}\n\n.amount[_ngcontent-%COMP%] {\n  background-color: #E9ECEF;\n  font-weight: 600;\n  color: #525252;\n}\n\n.btn-send[_ngcontent-%COMP%] {\n  background-color: #ff5608;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2tlbGx5L0Rlc2t0b3AvTElNMDExLWZlLWJ1cmdlci1xdWVlbi9zcmMvYXBwL2NvbXBvbmVudHMvb3JkZXIvb3JkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvb3JkZXIvb3JkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUM7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtVQUFBLDZCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0NIOztBREVDO0VBQ0UsZUFBQTtBQ0NIOztBREVDO0VBQ0UsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtBQ0NIOztBREVDO0VBQ0UsV0FBQTtBQ0NIOztBREVDO0VBQ0MseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNDRjs7QURFQztFQUNFLHlCQUFBO0VBQ0EsWUFBQTtBQ0NIIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9vcmRlci9vcmRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiAucXVhbnRpdHl7XG4gICBkaXNwbGF5OiBmbGV4O1xuICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICBhbGlnbi1pdGVtczogY2VudGVyO1xuIH1cblxuIC5xdWFudGl0eSBzcGFue1xuICAgbWFyZ2luOiAwcHggNHB4O1xuIH1cblxuIC5jb250YWluLXRhYmxle1xuICAgbWFyZ2luOiA4cHggMHB4O1xuICAgYm9yZGVyOiAycHggc29saWQgI2MyY2NkNjtcbiAgIG1heC1oZWlnaHQ6IDQwMHB4ICFpbXBvcnRhbnQ7XG4gICBvdmVyZmxvdy15OiBzY3JvbGwgIWltcG9ydGFudDtcbiB9XG5cbiB0YWJsZXtcbiAgIG1hcmdpbjogMHB4O1xuIH1cblxuIC5hbW91bnR7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFOUVDRUY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjNTI1MjUyO1xuIH1cblxuIC5idG4tc2VuZHtcbiAgIGJhY2tncm91bmQtY29sb3I6ICNmZjU2MDg7XG4gICBjb2xvcjogd2hpdGU7XG4gfSIsIi5xdWFudGl0eSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ucXVhbnRpdHkgc3BhbiB7XG4gIG1hcmdpbjogMHB4IDRweDtcbn1cblxuLmNvbnRhaW4tdGFibGUge1xuICBtYXJnaW46IDhweCAwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNjMmNjZDY7XG4gIG1heC1oZWlnaHQ6IDQwMHB4ICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93LXk6IHNjcm9sbCAhaW1wb3J0YW50O1xufVxuXG50YWJsZSB7XG4gIG1hcmdpbjogMHB4O1xufVxuXG4uYW1vdW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U5RUNFRjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICM1MjUyNTI7XG59XG5cbi5idG4tc2VuZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjU2MDg7XG4gIGNvbG9yOiB3aGl0ZTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-order',
                templateUrl: './order.component.html',
                styleUrls: ['./order.component.scss']
            }]
    }], function () { return [{ type: src_app_services_order_order_service__WEBPACK_IMPORTED_MODULE_2__["OrderService"] }, { type: src_app_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_3__["FirestoreService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/product-catalog/product-catalog.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/product-catalog/product-catalog.component.ts ***!
  \*************************************************************************/
/*! exports provided: ProductCatalogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCatalogComponent", function() { return ProductCatalogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/firestore/firestore.service */ "./src/app/services/firestore/firestore.service.ts");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../product/product.component */ "./src/app/components/product/product.component.ts");




class ProductCatalogComponent {
    constructor(firestoreService) {
        this.firestoreService = firestoreService;
    }
    ngOnInit() {
        this.firestoreService.getProducts().subscribe((productsSnapshot) => {
            this.products = productsSnapshot;
            this.productsFilter = this.products.filter((product) => product.data.category === 'classic');
            this.productsExtras = this.products.filter((product) => product.data.category === 'extras');
        });
    }
    getByCategory(nameCategory) {
        this.productsFilter = this.products.filter((product) => product.data.category === nameCategory);
        this.productsExtras = [];
        if (nameCategory === 'classic') {
            this.productsExtras = this.products.filter((product) => product.data.category === 'extras');
        }
        return this.productsFilter;
    }
}
ProductCatalogComponent.ɵfac = function ProductCatalogComponent_Factory(t) { return new (t || ProductCatalogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_1__["FirestoreService"])); };
ProductCatalogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductCatalogComponent, selectors: [["app-product-catalog"]], decls: 10, vars: 2, consts: [[1, "row"], [1, "contain-buttons"], [1, "btn", "col-3", "btn-lg", 3, "click"], ["id", "btn-drink", 1, "btn", "col-3", "btn-lg", 3, "click"], [1, "contain-products", "row"], [1, "", 3, "products", "productsExtras"]], template: function ProductCatalogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductCatalogComponent_Template_button_click_2_listener($event) { return ctx.getByCategory("classic"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "CL\u00C1SICOS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductCatalogComponent_Template_button_click_4_listener($event) { return ctx.getByCategory("drinks"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "BEBIDAS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductCatalogComponent_Template_button_click_6_listener($event) { return ctx.getByCategory("piqueos"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "PIQUEOS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-product", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("products", ctx.productsFilter)("productsExtras", ctx.productsExtras);
    } }, directives: [_product_product_component__WEBPACK_IMPORTED_MODULE_2__["ProductComponent"]], styles: [".row[_ngcontent-%COMP%] {\n  margin-left: 0px !important;\n  margin-right: 0px !important;\n}\n\n.contain-buttons[_ngcontent-%COMP%] {\n  width: 100%;\n  display: -webkit-box !important;\n  display: flex !important;\n  justify-content: space-around !important;\n}\n\nbutton[_ngcontent-%COMP%] {\n  border-color: none;\n  background-color: #000094;\n  color: white;\n  font-size: 13px;\n}\n\nbutton[_ngcontent-%COMP%]:hover {\n  color: white;\n  border-color: none;\n  background-color: #006;\n}\n\napp-product[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n  justify-content: space-around;\n  box-sizing: border-box;\n  -webkit-box-align: center;\n          align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2tlbGx5L0Rlc2t0b3AvTElNMDExLWZlLWJ1cmdlci1xdWVlbi9zcmMvYXBwL2NvbXBvbmVudHMvcHJvZHVjdC1jYXRhbG9nL3Byb2R1Y3QtY2F0YWxvZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0LWNhdGFsb2cvcHJvZHVjdC1jYXRhbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFDO0VBQ0MsMkJBQUE7RUFDQSw0QkFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLCtCQUFBO0VBQUEsd0JBQUE7RUFDQSx3Q0FBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQ0NGOztBREVBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0LWNhdGFsb2cvcHJvZHVjdC1jYXRhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiIC5yb3d7XG4gIG1hcmdpbi1sZWZ0OiAwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcbn1cblxuLmNvbnRhaW4tYnV0dG9uc3tcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQgIWltcG9ydGFudDtcbn1cblxuYnV0dG9uIHtcbiAgYm9yZGVyLWNvbG9yOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDk0O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuYnV0dG9uOmhvdmVye1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1jb2xvcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNjtcbn1cblxuYXBwLXByb2R1Y3QgeyBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICB3aWR0aDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbiIsIi5yb3cge1xuICBtYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5jb250YWluLWJ1dHRvbnMge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZCAhaW1wb3J0YW50O1xufVxuXG5idXR0b24ge1xuICBib3JkZXItY29sb3I6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwOTQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG5idXR0b246aG92ZXIge1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1jb2xvcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNjtcbn1cblxuYXBwLXByb2R1Y3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIHdpZHRoOiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductCatalogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-product-catalog',
                templateUrl: './product-catalog.component.html',
                styleUrls: ['./product-catalog.component.scss']
            }]
    }], function () { return [{ type: src_app_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_1__["FirestoreService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/product/product.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/product/product.component.ts ***!
  \*********************************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_order_order_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/order/order.service */ "./src/app/services/order/order.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modal/modal.component */ "./src/app/components/modal/modal.component.ts");





const _c0 = function (a0, a1) { return { "col-sm-12 col-md-6 col-lg-4": a0, "col-sm-12 col-md-4": a1, "container-card": true }; };
function ProductComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductComponent_div_0_Template_div_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const product_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.getItem(product_r1.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](5, _c0, product_r1.data.category === "classic", product_r1.data.category === "drinks" || product_r1.data.category === "piqueos"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", product_r1.data.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", "$ ", "", product_r1.data.price, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r1.data.name);
} }
class ProductComponent {
    constructor(orderService) {
        this.orderService = orderService;
        this.showModal = false;
        this.newProductSelected = {};
        this.productSelected = {};
        this.arrExtras = [];
        this.priceExtras = 0;
        this.changeModalValue = 0;
        this.getItem = (id) => {
            if (id != null) {
                this.productSelected = this.products.find((product) => product.id === id);
            }
            // Agregar identificador al ID del item, con nombres de los extras.
            const letra = [];
            this.arrExtras.forEach((product) => {
                if (product.data.name !== '') {
                    letra.push(product.data.name.slice(0, 1));
                    letra.sort();
                }
            });
            if (this.productSelected.data.popup === false) {
                this.newProductSelected = this.productSelected;
            }
            else {
                this.showModal = !this.showModal;
                this.changeModalValue = this.changeModalValue + 1;
                if (this.changeModalValue === 2) {
                    this.newProductSelected = this.productSelected;
                }
            }
            // Creación del item
            if (this.changeModalValue !== 1) {
                this.item = {
                    id: this.newProductSelected.id + letra,
                    quantity: 1,
                    product: this.newProductSelected.data.name,
                    extra: this.arrExtras,
                    amount: this.newProductSelected.data.price + this.priceExtras,
                    priceUnit: this.newProductSelected.data.price + this.priceExtras,
                };
                this.orderService.insertProductToOrder(this.item);
                this.arrExtras = [];
                this.productSelected = {};
                this.newProductSelected = {};
                this.changeModalValue = 0;
                this.priceExtras = 0;
            }
        };
    }
    ngOnInit() { }
    getArrayOfExtras(extrasSelected) {
        this.arrExtras = extrasSelected;
        this.arrExtras.forEach(product => {
            this.priceExtras += product.data.price;
        });
    }
}
ProductComponent.ɵfac = function ProductComponent_Factory(t) { return new (t || ProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_order_order_service__WEBPACK_IMPORTED_MODULE_1__["OrderService"])); };
ProductComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductComponent, selectors: [["app-product"]], inputs: { products: "products", productsExtras: "productsExtras" }, decls: 2, vars: 5, consts: [[3, "ngClass", "click", 4, "ngFor", "ngForOf"], [3, "productsExtras", "show", "customClass", "closeModal", "sendArrayOfExtras"], [3, "ngClass", "click"], [1, "card"], [1, "row", "no-gutters"], [1, "col-md-4", "img-amount"], ["alt", "image of product", 1, "img-fluid", 3, "src"], [1, "card-text", "font-weight-bold"], [1, "col-md-8"], [1, "card-body", "col-12"], [1, "card-text"]], template: function ProductComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProductComponent_div_0_Template, 11, 8, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-modal", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sendArrayOfExtras", function ProductComponent_Template_app_modal_sendArrayOfExtras_1_listener($event) { return ctx.getArrayOfExtras($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.products);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("productsExtras", ctx.productsExtras)("show", ctx.showModal)("customClass", "custom_modal_class")("closeModal", ctx.getItem);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _modal_modal_component__WEBPACK_IMPORTED_MODULE_3__["ModalComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], styles: [".container-card[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  box-sizing: border-box;\n}\n\n.card[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  height: 130px;\n  text-align: center;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 8px 4px;\n}\n\n.img-amount[_ngcontent-%COMP%] {\n  height: 130px;\n}\n\n.container-detail[_ngcontent-%COMP%] {\n  padding: 0px;\n}\n\n.name-product[_ngcontent-%COMP%] {\n  height: 60px;\n  background-color: #fff;\n  color: #333;\n}\n\np[_ngcontent-%COMP%] {\n  margin-bottom: 4px;\n}\n\n.img-fluid[_ngcontent-%COMP%] {\n  height: 100px;\n}\n\n@media (max-width: 768px) {\n  .row[_ngcontent-%COMP%] {\n    flex-wrap: nowrap;\n    height: 130px;\n  }\n  .row[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2tlbGx5L0Rlc2t0b3AvTElNMDExLWZlLWJ1cmdlci1xdWVlbi9zcmMvYXBwL2NvbXBvbmVudHMvcHJvZHVjdC9wcm9kdWN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3Byb2R1Y3QvcHJvZHVjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxzQkFBQTtBQ0NGOztBREVBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7QUNDRjs7QURFQTtFQUNFO0lBQ0UsaUJBQUE7SUFDQSxhQUFBO0VDQ0Y7RURBRTtJQUNFLG9CQUFBO0lBQUEsYUFBQTtJQUNBLHlCQUFBO1lBQUEsbUJBQUE7RUNFSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0L3Byb2R1Y3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWNhcmR7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLmNhcmR7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDEzMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDhweCA0cHg7XG59XG5cbi5pbWctYW1vdW50e1xuICBoZWlnaHQ6IDEzMHB4O1xufVxuXG4uY29udGFpbmVyLWRldGFpbHtcbiAgcGFkZGluZzogMHB4O1xufVxuXG4ubmFtZS1wcm9kdWN0e1xuICBoZWlnaHQ6IDYwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGNvbG9yOiAjMzMzO1xufVxuXG5we1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG59XG5cbi5pbWctZmx1aWR7XG4gIGhlaWdodDogMTAwcHg7XG59XG5cbkBtZWRpYShtYXgtd2lkdGg6IDc2OHB4KXtcbiAgLnJvd3tcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICBoZWlnaHQ6IDEzMHB4O1xuICAgIC5jYXJkLWJvZHl7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG4gIH1cbn0iLCIuY29udGFpbmVyLWNhcmQge1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5jYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogMTMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogOHB4IDRweDtcbn1cblxuLmltZy1hbW91bnQge1xuICBoZWlnaHQ6IDEzMHB4O1xufVxuXG4uY29udGFpbmVyLWRldGFpbCB7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuLm5hbWUtcHJvZHVjdCB7XG4gIGhlaWdodDogNjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgY29sb3I6ICMzMzM7XG59XG5cbnAge1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG59XG5cbi5pbWctZmx1aWQge1xuICBoZWlnaHQ6IDEwMHB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnJvdyB7XG4gICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgaGVpZ2h0OiAxMzBweDtcbiAgfVxuICAucm93IC5jYXJkLWJvZHkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-product',
                templateUrl: './product.component.html',
                styleUrls: ['./product.component.scss']
            }]
    }], function () { return [{ type: src_app_services_order_order_service__WEBPACK_IMPORTED_MODULE_1__["OrderService"] }]; }, { products: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], productsExtras: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/services/firestore/firestore.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/firestore/firestore.service.ts ***!
  \*********************************************************/
/*! exports provided: FirestoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirestoreService", function() { return FirestoreService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");




class FirestoreService {
    constructor(angularFirestore) {
        this.angularFirestore = angularFirestore;
    }
    getProducts() {
        return this.angularFirestore.collection('products').snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(actions => actions.map(action => {
            const id = action.payload.doc.id;
            const data = action.payload.doc.data();
            return { id, data };
        })));
    }
    setOrder(order) {
        return this.angularFirestore.collection('orders').add(order);
    }
}
FirestoreService.ɵfac = function FirestoreService_Factory(t) { return new (t || FirestoreService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"])); };
FirestoreService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FirestoreService, factory: FirestoreService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FirestoreService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/order/order.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/order/order.service.ts ***!
  \*************************************************/
/*! exports provided: OrderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderService", function() { return OrderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



class OrderService {
    constructor() {
        this.newArray = [];
        this.position = 0;
        this.arrayOrder = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.currentOrder = this.arrayOrder.asObservable();
    }
    insertProductToOrder(item) {
        // console.log(item);
        if (this.newArray.length > 0) {
            this.position = this.newArray.findIndex((element) => element.id === item.id);
            if (this.position !== -1) {
                item.quantity += item.quantity;
                this.newArray[this.position].quantity = this.newArray[this.position].quantity + 1;
                this.newArray[this.position].amount = this.newArray[this.position].amount + this.newArray[this.position].priceUnit;
            }
            else {
                this.newArray.push(item);
            }
        }
        else {
            this.newArray.push(item);
        }
        this.arrayOrder.next(this.newArray);
    }
    addQuantity(item) {
        this.indice = this.newArray.indexOf(item).toString();
        this.newArray[this.indice].quantity = this.newArray[this.indice].quantity + 1;
        this.newArray[this.indice].amount = this.newArray[this.indice].priceUnit * this.newArray[this.indice].quantity;
        this.arrayOrder.next(this.newArray);
    }
    subtractQuantity(item) {
        this.indice = this.newArray.indexOf(item).toString();
        if (this.newArray[this.indice].quantity >= 1) {
            this.newArray[this.indice].quantity = this.newArray[this.indice].quantity - 1;
            this.newArray[this.indice].amount = this.newArray[this.indice].priceUnit * this.newArray[this.indice].quantity;
        }
        if (this.newArray[this.indice].quantity === 0) {
            this.deleteItem(item);
        }
        this.arrayOrder.next(this.newArray);
    }
    deleteItem(item) {
        const position = this.newArray.findIndex((product) => product.id === item.id);
        if (position !== -1) {
            this.newArray.splice(position, 1);
        }
        this.arrayOrder.next(this.newArray);
    }
    resetOrder() {
        this.newArray = [];
        this.arrayOrder.next(this.newArray);
    }
}
OrderService.ɵfac = function OrderService_Factory(t) { return new (t || OrderService)(); };
OrderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: OrderService, factory: OrderService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyBC_1AxK8nYPiuG23wHPfk4Z7nATmbx5wY',
        authDomain: 'burgerqueen-ee96d.firebaseapp.com',
        databaseURL: 'https://burgerqueen-ee96d.firebaseio.com/',
        projectId: 'burgerqueen-ee96d',
        storageBucket: 'burgerqueen-ee96d.appspot.com',
        messagingSenderId: '425258891708',
    },
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/kelly/Desktop/LIM011-fe-burger-queen/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map