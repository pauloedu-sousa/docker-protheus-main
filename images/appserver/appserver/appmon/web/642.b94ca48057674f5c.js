"use strict";
(self["webpackChunkserver_monitor"] = self["webpackChunkserver_monitor"] || []).push([[642],{

/***/ 88989:
/*!**********************************************************************************!*\
  !*** ./src/app/documentation/documentation-base/documentation-base.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DocumentationBaseComponent": () => (/* binding */ DocumentationBaseComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_shared_components_header_services_header_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/components/header/services/header.service */ 99035);



let DocumentationBaseComponent = /*#__PURE__*/(() => {
  class DocumentationBaseComponent {
    constructor(route, router, headerService) {
      this.route = route;
      this.router = router;
      this.headerService = headerService;
      this.headerData = {
        title: "Documentações Disponíveis",
        icon: "po-icon po-icon-map",
        routeUrl: "native"
      };
      this.headerService.setheaderData(this.headerData);
    }
    ngOnInit() {
      this.route.navigate(["native"], {
        relativeTo: this.router
      });
    }
    teste(link) {
      this.route.navigate([link], {
        relativeTo: this.router
      });
    }
    static #_ = this.ɵfac = function DocumentationBaseComponent_Factory(t) {
      return new (t || DocumentationBaseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_components_header_services_header_service__WEBPACK_IMPORTED_MODULE_0__.HeaderService));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: DocumentationBaseComponent,
      selectors: [["app-documentation"]],
      decls: 1,
      vars: 0,
      template: function DocumentationBaseComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "router-outlet");
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet],
      styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
  return DocumentationBaseComponent;
})();

/***/ }),

/***/ 58584:
/*!***************************************************************!*\
  !*** ./src/app/documentation/documentation-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DocumentationRoutingModule": () => (/* binding */ DocumentationRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _documentation_base_documentation_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./documentation-base/documentation-base.component */ 88989);
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../guards/auth.guard */ 95107);
/* harmony import */ var _documentation_tlpp_documentation_tlpp_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./documentation-tlpp/documentation-tlpp.component */ 11670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);






const routes = [{
  path: "",
  component: _documentation_base_documentation_base_component__WEBPACK_IMPORTED_MODULE_0__.DocumentationBaseComponent,
  children: [{
    path: "native",
    component: _documentation_tlpp_documentation_tlpp_component__WEBPACK_IMPORTED_MODULE_2__.DocumentationTlppComponent,
    canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard]
  }]
}];
let DocumentationRoutingModule = /*#__PURE__*/(() => {
  class DocumentationRoutingModule {
    static #_ = this.ɵfac = function DocumentationRoutingModule_Factory(t) {
      return new (t || DocumentationRoutingModule)();
    };
    static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: DocumentationRoutingModule
    });
    static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
    });
  }
  return DocumentationRoutingModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](DocumentationRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();

/***/ }),

/***/ 11670:
/*!**********************************************************************************!*\
  !*** ./src/app/documentation/documentation-tlpp/documentation-tlpp.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DocumentationTlppComponent": () => (/* binding */ DocumentationTlppComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_documentation_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/documentation.service */ 53791);
/* harmony import */ var _po_ui_ng_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @po-ui/ng-components */ 22400);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);





function DocumentationTlppComponent_table_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table")(1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "po-dropdown", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "th", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const category_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("p-label", category_r1)("p-actions", ctx_r0.getLinks(category_r1));
  }
}
let DocumentationTlppComponent = /*#__PURE__*/(() => {
  class DocumentationTlppComponent {
    constructor(service, i18nService) {
      this.service = service;
      this.i18nService = i18nService;
      this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
      this.i18nService.getLiterals({
        context: "documentation",
        language: this.i18nService.getLanguage()
      }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.destroy$)).subscribe(literals => {
        this.literals = literals;
      });
    }
    ngOnInit() {
      this.service.getDocumentation().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.destroy$)).subscribe(data => {
        this.links = data;
        this.categories = this.parseCategories(data);
      });
    }
    parseCategories(obj) {
      var retorno = [];
      Object.keys(obj).forEach(key => {
        retorno.push(key);
      });
      return retorno;
    }
    getLinks(category) {
      let oLinks = this.links[category];
      if (Object.keys(oLinks).length > 0) {
        let teste = [];
        for (let i = 0; i < Object.keys(oLinks).length; i++) {
          let tst = {};
          Object.keys(oLinks[i]).forEach(key => {
            if (key === "url") {
              tst["action"] = this.redirectDocumentation.bind(this, oLinks[i][key]);
            } else {
              tst[key] = oLinks[i][key];
            }
          });
          teste.push(tst);
        }
        return teste;
      }
    }
    redirectDocumentation(content) {
      window.open(content, "_blank");
    }
    ngOnDestroy() {
      this.destroy$.next(true);
      this.destroy$.unsubscribe();
    }
    static #_ = this.ɵfac = function DocumentationTlppComponent_Factory(t) {
      return new (t || DocumentationTlppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_documentation_service__WEBPACK_IMPORTED_MODULE_0__.DocumentationService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_po_ui_ng_components__WEBPACK_IMPORTED_MODULE_4__.PoI18nService));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: DocumentationTlppComponent,
      selectors: [["app-documentation-tlpp"]],
      decls: 2,
      vars: 1,
      consts: [[1, "po-row"], [4, "ngFor", "ngForOf"], [3, "p-label", "p-actions"], [2, "height", "50%"]],
      template: function DocumentationTlppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DocumentationTlppComponent_table_1_Template, 5, 2, "table", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.categories);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _po_ui_ng_components__WEBPACK_IMPORTED_MODULE_4__.PoDropdownComponent],
      styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
  return DocumentationTlppComponent;
})();

/***/ }),

/***/ 1642:
/*!*******************************************************!*\
  !*** ./src/app/documentation/documentation.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DocumentationModule": () => (/* binding */ DocumentationModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _po_ui_ng_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @po-ui/ng-components */ 22400);
/* harmony import */ var _documentation_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./documentation-routing.module */ 58584);
/* harmony import */ var _documentation_base_documentation_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./documentation-base/documentation-base.component */ 88989);
/* harmony import */ var _services_documentation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/documentation.service */ 53791);
/* harmony import */ var _documentation_tlpp_documentation_tlpp_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./documentation-tlpp/documentation-tlpp.component */ 11670);
/* harmony import */ var _documentation_i18n_documentation_en__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../documentation/i18n/documentation-en */ 38564);
/* harmony import */ var _documentation_i18n_documentation_pt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../documentation/i18n/documentation-pt */ 57731);
/* harmony import */ var _shared_i18n_general_en__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/i18n/general-en */ 74041);
/* harmony import */ var _shared_i18n_general_pt__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/i18n/general-pt */ 35794);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/shared.module */ 44466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);













const i18nConfig = {
  contexts: {
    general: {
      "pt-BR": _shared_i18n_general_pt__WEBPACK_IMPORTED_MODULE_7__.generalPt,
      "en-US": _shared_i18n_general_en__WEBPACK_IMPORTED_MODULE_6__.generalEn
    },
    documentation: {
      "pt-BR": _documentation_i18n_documentation_pt__WEBPACK_IMPORTED_MODULE_5__.documentationPt,
      "en-US": _documentation_i18n_documentation_en__WEBPACK_IMPORTED_MODULE_4__.documentationEn
    }
  },
  default: {
    language: "pt-BR",
    context: "general",
    cache: true
  }
};
let DocumentationModule = /*#__PURE__*/(() => {
  class DocumentationModule {
    static #_ = this.ɵfac = function DocumentationModule_Factory(t) {
      return new (t || DocumentationModule)();
    };
    static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
      type: DocumentationModule
    });
    static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
      providers: [_services_documentation_service__WEBPACK_IMPORTED_MODULE_2__.DocumentationService],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _documentation_routing_module__WEBPACK_IMPORTED_MODULE_0__.DocumentationRoutingModule, _po_ui_ng_components__WEBPACK_IMPORTED_MODULE_11__.PoModule, _po_ui_ng_components__WEBPACK_IMPORTED_MODULE_11__.PoButtonModule, _po_ui_ng_components__WEBPACK_IMPORTED_MODULE_11__.PoTableModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__.SharedModule, _po_ui_ng_components__WEBPACK_IMPORTED_MODULE_11__.PoI18nModule.config(i18nConfig)]
    });
  }
  return DocumentationModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](DocumentationModule, {
    declarations: [_documentation_base_documentation_base_component__WEBPACK_IMPORTED_MODULE_1__.DocumentationBaseComponent, _documentation_tlpp_documentation_tlpp_component__WEBPACK_IMPORTED_MODULE_3__.DocumentationTlppComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _documentation_routing_module__WEBPACK_IMPORTED_MODULE_0__.DocumentationRoutingModule, _po_ui_ng_components__WEBPACK_IMPORTED_MODULE_11__.PoModule, _po_ui_ng_components__WEBPACK_IMPORTED_MODULE_11__.PoButtonModule, _po_ui_ng_components__WEBPACK_IMPORTED_MODULE_11__.PoTableModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__.SharedModule, _po_ui_ng_components__WEBPACK_IMPORTED_MODULE_11__.PoI18nModule]
  });
})();

/***/ }),

/***/ 38564:
/*!********************************************************!*\
  !*** ./src/app/documentation/i18n/documentation-en.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "documentationEn": () => (/* binding */ documentationEn)
/* harmony export */ });
const documentationEn = {
  title: "Documents available"
};

/***/ }),

/***/ 57731:
/*!********************************************************!*\
  !*** ./src/app/documentation/i18n/documentation-pt.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "documentationPt": () => (/* binding */ documentationPt)
/* harmony export */ });
const documentationPt = {
  title: "Documentações disponíveis"
};

/***/ }),

/***/ 53791:
/*!*****************************************************************!*\
  !*** ./src/app/documentation/services/documentation.service.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DocumentationService": () => (/* binding */ DocumentationService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _shared_components_host_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/host.component */ 6351);



let DocumentationService = /*#__PURE__*/(() => {
  class DocumentationService {
    constructor(http, host) {
      this.http = http;
      this.host = host;
      this.cUriService = "/tlpp/document/grouper";
    }
    getDocumentation() {
      return this.http.get(`${this.host.setUrlService(this.cUriService)}`);
    }
    static #_ = this.ɵfac = function DocumentationService_Factory(t) {
      return new (t || DocumentationService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_shared_components_host_component__WEBPACK_IMPORTED_MODULE_0__.Host));
    };
    static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: DocumentationService,
      factory: DocumentationService.ɵfac,
      providedIn: "root"
    });
  }
  return DocumentationService;
})();

/***/ })

}]);
//# sourceMappingURL=642.b94ca48057674f5c.js.map