"use strict";
(self["webpackChunkserver_monitor"] = self["webpackChunkserver_monitor"] || []).push([[467],{

/***/ 52003:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeRoutingModule": () => (/* binding */ HomeRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component */ 45067);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{
  path: "",
  component: _home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
}];
let HomeRoutingModule = /*#__PURE__*/(() => {
  class HomeRoutingModule {
    static #_ = this.ɵfac = function HomeRoutingModule_Factory(t) {
      return new (t || HomeRoutingModule)();
    };
    static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: HomeRoutingModule
    });
    static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
  return HomeRoutingModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](HomeRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 45067:
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _po_ui_ng_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @po-ui/ng-components */ 22400);


let HomeComponent = /*#__PURE__*/(() => {
  class HomeComponent {
    constructor() {}
    ngOnInit() {
      this.navbarItems = [{
        label: "teste",
        link: "/"
      }, {
        label: "teste2",
        link: "/"
      }];
      this.navbarIcons = [{
        link: "/",
        icon: "po-icon-news",
        label: "IconTest"
      }];
    }
    static #_ = this.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)();
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 3,
      vars: 0,
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "po-page-default")(1, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Home works");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
      },
      dependencies: [_po_ui_ng_components__WEBPACK_IMPORTED_MODULE_1__.PoPageDefaultComponent],
      styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
  return HomeComponent;
})();

/***/ }),

/***/ 3467:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeModule": () => (/* binding */ HomeModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component */ 45067);
/* harmony import */ var _po_ui_ng_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @po-ui/ng-components */ 22400);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ 52003);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);





let HomeModule = /*#__PURE__*/(() => {
  class HomeModule {
    static #_ = this.ɵfac = function HomeModule_Factory(t) {
      return new (t || HomeModule)();
    };
    static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: HomeModule
    });
    static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _po_ui_ng_components__WEBPACK_IMPORTED_MODULE_4__.PoPageModule, _po_ui_ng_components__WEBPACK_IMPORTED_MODULE_4__.PoNavbarModule, _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomeRoutingModule]
    });
  }
  return HomeModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](HomeModule, {
    declarations: [_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _po_ui_ng_components__WEBPACK_IMPORTED_MODULE_4__.PoPageModule, _po_ui_ng_components__WEBPACK_IMPORTED_MODULE_4__.PoNavbarModule, _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomeRoutingModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=467.a5d6425ca5d1efd2.js.map