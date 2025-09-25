"use strict";
(self["webpackChunkserver_monitor"] = self["webpackChunkserver_monitor"] || []).push([[958],{

/***/ 8971:
/*!*********************************************!*\
  !*** ./src/app/pocs/pocs-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PocsRoutingModule": () => (/* binding */ PocsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _unsubscribe_rxjs_unsubscribe_poc_unsubscribe_poc_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./unsubscribe-rxjs/unsubscribe-poc/unsubscribe-poc.component */ 33251);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{
  path: "",
  component: _unsubscribe_rxjs_unsubscribe_poc_unsubscribe_poc_component__WEBPACK_IMPORTED_MODULE_0__.UnsubscribePocComponent
}];
let PocsRoutingModule = /*#__PURE__*/(() => {
  class PocsRoutingModule {
    static #_ = this.ɵfac = function PocsRoutingModule_Factory(t) {
      return new (t || PocsRoutingModule)();
    };
    static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: PocsRoutingModule
    });
    static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
  return PocsRoutingModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PocsRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 47958:
/*!*************************************!*\
  !*** ./src/app/pocs/pocs.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PocsModule": () => (/* binding */ PocsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _unsubscribe_rxjs_unsubscribe_base_unsubscribe_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./unsubscribe-rxjs/unsubscribe-base/unsubscribe-base.component */ 53907);
/* harmony import */ var _unsubscribe_rxjs_unsubscribe_poc_unsubscribe_poc_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./unsubscribe-rxjs/unsubscribe-poc/unsubscribe-poc.component */ 33251);
/* harmony import */ var _unsubscribe_rxjs_components_noUnsubscribe_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsubscribe-rxjs/components/noUnsubscribe.component */ 4120);
/* harmony import */ var _unsubscribe_rxjs_services_unsubscribe_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./unsubscribe-rxjs/services/unsubscribe.service */ 49074);
/* harmony import */ var _po_ui_ng_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @po-ui/ng-components */ 22400);
/* harmony import */ var _pocs_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pocs-routing.module */ 8971);
/* harmony import */ var _unsubscribe_rxjs_components_unsubscribe_himself_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./unsubscribe-rxjs/components/unsubscribe-himself.component */ 9911);
/* harmony import */ var _unsubscribe_rxjs_components_unsubscribe_takeuntil_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./unsubscribe-rxjs/components/unsubscribe.takeuntil.component */ 76495);
/* harmony import */ var _unsubscribe_rxjs_components_unsubscribe_take_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./unsubscribe-rxjs/components/unsubscribe.take.component */ 16416);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);











let PocsModule = /*#__PURE__*/(() => {
  class PocsModule {
    static #_ = this.ɵfac = function PocsModule_Factory(t) {
      return new (t || PocsModule)();
    };
    static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
      type: PocsModule
    });
    static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
      providers: [_unsubscribe_rxjs_services_unsubscribe_service__WEBPACK_IMPORTED_MODULE_3__.UnsubscribeService],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _po_ui_ng_components__WEBPACK_IMPORTED_MODULE_10__.PoDynamicModule, _po_ui_ng_components__WEBPACK_IMPORTED_MODULE_10__.PoModule, _pocs_routing_module__WEBPACK_IMPORTED_MODULE_4__.PocsRoutingModule]
    });
  }
  return PocsModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](PocsModule, {
    declarations: [_unsubscribe_rxjs_components_noUnsubscribe_component__WEBPACK_IMPORTED_MODULE_2__.NoUnsubscribeComponent, _unsubscribe_rxjs_components_unsubscribe_himself_component__WEBPACK_IMPORTED_MODULE_5__.UnsubscribeHimselfComponent, _unsubscribe_rxjs_components_unsubscribe_takeuntil_component__WEBPACK_IMPORTED_MODULE_6__.UnsubscribeTakeUntilComponent, _unsubscribe_rxjs_components_unsubscribe_take_component__WEBPACK_IMPORTED_MODULE_7__.UnsubscribeTakeComponent, _unsubscribe_rxjs_unsubscribe_base_unsubscribe_base_component__WEBPACK_IMPORTED_MODULE_0__.UnsubscribeBaseComponent, _unsubscribe_rxjs_unsubscribe_poc_unsubscribe_poc_component__WEBPACK_IMPORTED_MODULE_1__.UnsubscribePocComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _po_ui_ng_components__WEBPACK_IMPORTED_MODULE_10__.PoDynamicModule, _po_ui_ng_components__WEBPACK_IMPORTED_MODULE_10__.PoModule, _pocs_routing_module__WEBPACK_IMPORTED_MODULE_4__.PocsRoutingModule],
    exports: [_unsubscribe_rxjs_unsubscribe_poc_unsubscribe_poc_component__WEBPACK_IMPORTED_MODULE_1__.UnsubscribePocComponent]
  });
})();

/***/ }),

/***/ 4120:
/*!*****************************************************************************!*\
  !*** ./src/app/pocs/unsubscribe-rxjs/components/noUnsubscribe.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoUnsubscribeComponent": () => (/* binding */ NoUnsubscribeComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 78947);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 19337);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_unsubscribe_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/unsubscribe.service */ 49074);
/* harmony import */ var _unsubscribe_base_unsubscribe_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../unsubscribe-base/unsubscribe-base.component */ 53907);




const timeCall = (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.timer)(1000, 2000);
let NoUnsubscribeComponent = /*#__PURE__*/(() => {
  class NoUnsubscribeComponent {
    constructor(service) {
      this.service = service;
      this.nome = "Componente sem Unsubscribe";
      this.callerCounter = 0;
      this.unsubscription = [];
    }
    ngOnInit() {
      //chamadas
      this.unsubscription.push(this.service.currentCalls.subscribe(calls => this.calls = calls), this.service.currentConcurrent.subscribe(concurrent => this.concurrent = concurrent));
      //concurrent
      //calls
      for (let i = 1; i <= this.concurrent; i++) {
        this.callerExecutor = timeCall.subscribe(() => this.service.makeRequest().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.tap)(v => {
          this.callerCounter++;
          console.log(`${this.nome} -> requisitando o backend ${this.callerCounter}`);
          this.valor = this.callerCounter;
          if (this.callerCounter >= 100) this.callerExecutor.unsubscribe();
        })).subscribe());
      }
    }
    ngOnDestroy() {
      console.log(`${this.nome} destruindo apenas o componente html`);
      this.unsubscription.forEach(unsub => {
        unsub.unsubscribe();
      });
      //this.callerExecutor.unsubscribe(); stop the timer
    }
    static #_ = this.ɵfac = function NoUnsubscribeComponent_Factory(t) {
      return new (t || NoUnsubscribeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_unsubscribe_service__WEBPACK_IMPORTED_MODULE_0__.UnsubscribeService));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: NoUnsubscribeComponent,
      selectors: [["app-noUnsubscribe"]],
      decls: 1,
      vars: 2,
      consts: [[3, "nome", "valor"]],
      template: function NoUnsubscribeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-unsubscribe-base", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nome", ctx.nome)("valor", ctx.valor);
        }
      },
      dependencies: [_unsubscribe_base_unsubscribe_base_component__WEBPACK_IMPORTED_MODULE_1__.UnsubscribeBaseComponent],
      encapsulation: 2
    });
  }
  return NoUnsubscribeComponent;
})();

/***/ }),

/***/ 9911:
/*!***********************************************************************************!*\
  !*** ./src/app/pocs/unsubscribe-rxjs/components/unsubscribe-himself.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnsubscribeHimselfComponent": () => (/* binding */ UnsubscribeHimselfComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 78947);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_unsubscribe_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/unsubscribe.service */ 49074);
/* harmony import */ var _unsubscribe_base_unsubscribe_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../unsubscribe-base/unsubscribe-base.component */ 53907);





const timeCall = (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.timer)(1000, 2000);
let UnsubscribeHimselfComponent = /*#__PURE__*/(() => {
  class UnsubscribeHimselfComponent {
    constructor(service) {
      this.service = service;
      this.nome = "Componente Utilizando Unsubscribe";
      this.callerCounter = 0;
      this.unsubscription = [];
    }
    ngOnInit() {
      //calls and concurrent
      this.unsubscription.push(this.service.currentCalls.subscribe(calls => this.calls = calls), this.service.currentConcurrent.subscribe(concurrent => this.concurrent = concurrent));
      //requisitions
      for (let i = 1; i <= this.concurrent; i++) {
        this.callerExecutor = timeCall.subscribe(() => this.unsubscription.push(this.service.makeRequest().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(v => {
          this.callerCounter++;
          console.log(`${this.nome} -> requisitando o backend ${this.callerCounter}`);
          this.valor = this.callerCounter;
          if (this.callerCounter >= 100 || this.callerCounter >= this.calls) this.callerExecutor.unsubscribe();
        })).subscribe()));
      }
    }
    ngOnDestroy() {
      this.callerExecutor.unsubscribe();
      this.unsubscription.forEach(unsub => unsub.unsubscribe());
      console.log(`${this.nome} foi destruido`);
    }
    static #_ = this.ɵfac = function UnsubscribeHimselfComponent_Factory(t) {
      return new (t || UnsubscribeHimselfComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_unsubscribe_service__WEBPACK_IMPORTED_MODULE_0__.UnsubscribeService));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: UnsubscribeHimselfComponent,
      selectors: [["app-unsubscribe-himself"]],
      decls: 1,
      vars: 2,
      consts: [[3, "nome", "valor"]],
      template: function UnsubscribeHimselfComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-unsubscribe-base", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nome", ctx.nome)("valor", ctx.valor);
        }
      },
      dependencies: [_unsubscribe_base_unsubscribe_base_component__WEBPACK_IMPORTED_MODULE_1__.UnsubscribeBaseComponent],
      encapsulation: 2
    });
  }
  return UnsubscribeHimselfComponent;
})();

/***/ }),

/***/ 16416:
/*!********************************************************************************!*\
  !*** ./src/app/pocs/unsubscribe-rxjs/components/unsubscribe.take.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnsubscribeTakeComponent": () => (/* binding */ UnsubscribeTakeComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 78947);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 59295);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_unsubscribe_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/unsubscribe.service */ 49074);
/* harmony import */ var _unsubscribe_base_unsubscribe_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../unsubscribe-base/unsubscribe-base.component */ 53907);





const timeCall = (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.timer)(1000, 2000);
let UnsubscribeTakeComponent = /*#__PURE__*/(() => {
  class UnsubscribeTakeComponent {
    constructor(service) {
      this.service = service;
      this.nome = "Componente Utilizando Take";
      this.callerCounter = 0;
      this.unsubscription = [];
    }
    ngOnInit() {
      //calls & concurrent
      this.unsubscription.push(this.service.currentCalls.subscribe(calls => this.calls = calls), this.service.currentConcurrent.subscribe(concurrent => this.concurrent = concurrent));
      //requisitions
      for (let i = 1; i <= this.concurrent; i++) {
        this.callerExecutor = timeCall.subscribe(() => this.service.makeRequest().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(v => {
          (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.take)(1);
          this.callerCounter++;
          console.log(`${this.nome} -> requisitando o backend ${this.callerCounter}`);
          this.valor = this.callerCounter;
          if (this.callerCounter >= 100 || this.callerCounter >= this.calls) this.callerExecutor.unsubscribe();
        })).subscribe());
      }
    }
    ngOnDestroy() {
      this.callerExecutor.unsubscribe();
      this.unsubscription.forEach(unsub => unsub.unsubscribe());
      console.log(`${this.nome} foi destruido`);
    }
    static #_ = this.ɵfac = function UnsubscribeTakeComponent_Factory(t) {
      return new (t || UnsubscribeTakeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_unsubscribe_service__WEBPACK_IMPORTED_MODULE_0__.UnsubscribeService));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: UnsubscribeTakeComponent,
      selectors: [["app-unsubscribe-take"]],
      decls: 1,
      vars: 2,
      consts: [[3, "nome", "valor"]],
      template: function UnsubscribeTakeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-unsubscribe-base", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nome", ctx.nome)("valor", ctx.valor);
        }
      },
      dependencies: [_unsubscribe_base_unsubscribe_base_component__WEBPACK_IMPORTED_MODULE_1__.UnsubscribeBaseComponent],
      encapsulation: 2
    });
  }
  return UnsubscribeTakeComponent;
})();

/***/ }),

/***/ 76495:
/*!*************************************************************************************!*\
  !*** ./src/app/pocs/unsubscribe-rxjs/components/unsubscribe.takeuntil.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnsubscribeTakeUntilComponent": () => (/* binding */ UnsubscribeTakeUntilComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 78947);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 68951);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_unsubscribe_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/unsubscribe.service */ 49074);
/* harmony import */ var _unsubscribe_base_unsubscribe_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../unsubscribe-base/unsubscribe-base.component */ 53907);





const timeCall = (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.timer)(1000, 2000);
let UnsubscribeTakeUntilComponent = /*#__PURE__*/(() => {
  class UnsubscribeTakeUntilComponent {
    constructor(service) {
      this.service = service;
      this.nome = "Componente Utilizando TakeUntil";
      this.unsub$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
      this.callerCounter = 0;
      this.unsubscription = [];
    }
    ngOnInit() {
      //calls & concurrent
      this.unsubscription.push(this.service.currentCalls.subscribe(calls => this.calls = calls), this.service.currentConcurrent.subscribe(concurrent => this.concurrent = concurrent));
      //requisitions
      for (let i = 1; i <= this.concurrent; i++) {
        this.callerExecutor = timeCall.subscribe(() => this.service.makeRequest().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(v => {
          (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.unsub$);
          this.callerCounter++;
          console.log(`${this.nome} -> requisisitando o backlog ${this.callerCounter}`);
          this.valor = this.callerCounter;
          if (this.callerCounter >= 100 || this.callerCounter >= this.calls) this.callerExecutor.unsubscribe();
        })).subscribe());
      }
    }
    ngOnDestroy() {
      this.unsub$.next(false);
      this.unsub$.complete();
      this.callerExecutor.unsubscribe();
      this.unsubscription.forEach(unsub => unsub.unsubscribe());
      console.log(`${this.nome} foi destruido`);
    }
    static #_ = this.ɵfac = function UnsubscribeTakeUntilComponent_Factory(t) {
      return new (t || UnsubscribeTakeUntilComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_unsubscribe_service__WEBPACK_IMPORTED_MODULE_0__.UnsubscribeService));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: UnsubscribeTakeUntilComponent,
      selectors: [["app-unsubscribe-takeuntil"]],
      decls: 1,
      vars: 2,
      consts: [[3, "nome", "valor"]],
      template: function UnsubscribeTakeUntilComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-unsubscribe-base", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nome", ctx.nome)("valor", ctx.valor);
        }
      },
      dependencies: [_unsubscribe_base_unsubscribe_base_component__WEBPACK_IMPORTED_MODULE_1__.UnsubscribeBaseComponent],
      encapsulation: 2
    });
  }
  return UnsubscribeTakeUntilComponent;
})();

/***/ }),

/***/ 49074:
/*!***********************************************************************!*\
  !*** ./src/app/pocs/unsubscribe-rxjs/services/unsubscribe.service.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnsubscribeService": () => (/* binding */ UnsubscribeService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var src_app_shared_components_host_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/components/host.component */ 6351);




let UnsubscribeService = /*#__PURE__*/(() => {
  class UnsubscribeService {
    constructor(http, host) {
      this.http = http;
      this.host = host;
      this.emissor$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
      this._counter = 0;
      this.cUriService = "/tlpp/rest/list/service";
      this._calls$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(99);
      this._concurrent$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(1);
      this.currentCalls = this._calls$.asObservable();
      this.currentConcurrent = this._concurrent$.asObservable();
    }
    changeCalls(calls) {
      this._calls$.next(calls);
    }
    changeConcurrent(concurrents) {
      this._concurrent$.next(concurrents);
    }
    changeValor(valor) {
      this.emissor$.next(valor);
    }
    getValor() {
      return this.emissor$.asObservable();
    }
    makeRequest() {
      this._counter++;
      this.emissor$.next(this._counter);
      return this.http.get(`${this.host.setUrlService(this.cUriService)}`);
      //.pipe(delay(1000));
    }
    static #_ = this.ɵfac = function UnsubscribeService_Factory(t) {
      return new (t || UnsubscribeService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_app_shared_components_host_component__WEBPACK_IMPORTED_MODULE_0__.Host));
    };
    static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
      token: UnsubscribeService,
      factory: UnsubscribeService.ɵfac,
      providedIn: "root"
    });
  }
  return UnsubscribeService;
})();

/***/ }),

/***/ 53907:
/*!**************************************************************************************!*\
  !*** ./src/app/pocs/unsubscribe-rxjs/unsubscribe-base/unsubscribe-base.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnsubscribeBaseComponent": () => (/* binding */ UnsubscribeBaseComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _po_ui_ng_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @po-ui/ng-components */ 22400);


let UnsubscribeBaseComponent = /*#__PURE__*/(() => {
  class UnsubscribeBaseComponent {
    static #_ = this.ɵfac = function UnsubscribeBaseComponent_Factory(t) {
      return new (t || UnsubscribeBaseComponent)();
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UnsubscribeBaseComponent,
      selectors: [["app-unsubscribe-base"]],
      inputs: {
        nome: "nome",
        valor: "valor"
      },
      decls: 4,
      vars: 2,
      consts: [[1, "widgets"], ["p-height", "150", 1, "po-lg-4", "po-mt-2", 3, "p-title"], [1, "po-font-subtitle", "po-text-center"]],
      template: function UnsubscribeBaseComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "po-widget", 1)(2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("p-title", ctx.nome);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.valor);
        }
      },
      dependencies: [_po_ui_ng_components__WEBPACK_IMPORTED_MODULE_1__.PoWidgetComponent],
      styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
  return UnsubscribeBaseComponent;
})();

/***/ }),

/***/ 33251:
/*!************************************************************************************!*\
  !*** ./src/app/pocs/unsubscribe-rxjs/unsubscribe-poc/unsubscribe-poc.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnsubscribePocComponent": () => (/* binding */ UnsubscribePocComponent)
/* harmony export */ });
/* harmony import */ var _po_ui_ng_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @po-ui/ng-components */ 22400);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_unsubscribe_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/unsubscribe.service */ 49074);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _components_noUnsubscribe_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/noUnsubscribe.component */ 4120);
/* harmony import */ var _components_unsubscribe_himself_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/unsubscribe-himself.component */ 9911);
/* harmony import */ var _components_unsubscribe_takeuntil_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/unsubscribe.takeuntil.component */ 76495);
/* harmony import */ var _components_unsubscribe_take_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/unsubscribe.take.component */ 16416);









function UnsubscribePocComponent_div_8_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-noUnsubscribe");
  }
}
function UnsubscribePocComponent_div_8_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-unsubscribe-himself");
  }
}
function UnsubscribePocComponent_div_8_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-unsubscribe-take");
  }
}
function UnsubscribePocComponent_div_8_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-unsubscribe-takeuntil");
  }
}
function UnsubscribePocComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, UnsubscribePocComponent_div_8_ng_template_2_Template, 1, 0, "ng-template", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, UnsubscribePocComponent_div_8_ng_template_3_Template, 1, 0, "ng-template", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, UnsubscribePocComponent_div_8_ng_template_4_Template, 1, 0, "ng-template", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, UnsubscribePocComponent_div_8_ng_template_5_Template, 1, 0, "ng-template", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.destroyNoUnsubscribe);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.destroyUnsubscribe);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.destroyTake);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.destroyTakeUntil);
  }
}
let UnsubscribePocComponent = /*#__PURE__*/(() => {
  class UnsubscribePocComponent {
    getForm(form) {
      this.form = form;
    }
    constructor(service, poNotification) {
      this.service = service;
      this.poNotification = poNotification;
      this.unsubscribeOptions = [{
        property: "Without",
        value: false
      }, {
        property: "Take",
        value: false
      }, {
        property: "TakeUntil",
        value: false
      }, {
        property: "Unsubscribe",
        value: false
      }];
      this.fields = [{
        clean: true,
        errorMessage: "O valor minimo é 1",
        gridColumns: 6,
        help: "Qtd. de requisições que serão feitas ao backend.",
        minValue: 1,
        order: 1,
        property: "chamadas",
        placeholder: "Qtd. requisições ao Back-End",
        required: false,
        type: "number",
        validate: this.workWithInputs.bind(this)
      }, {
        clean: true,
        errorMessage: "O valor minimo é 1",
        gridColumns: 6,
        help: "Qtd. de conexões simultâneas executadas a cada requisição.",
        minValue: 1,
        label: "Simultaneidade",
        order: 2,
        property: "concurrent",
        placeholder: "Qtd. conexões simultâneas",
        required: false,
        type: "number",
        validate: this.workWithInputs.bind(this)
      }, {
        gridColumns: 6,
        help: "Selecione os modelos que desinscrição que são simulados.",
        hideSearch: true,
        label: "Desinscrever com",
        property: "unsubscribeOptions",
        options: ["Without", "Take", "TakeUntil", "Unsubscribe"],
        optionsMulti: true,
        order: 2,
        required: true,
        validate: this.workWithOptions.bind(this)
      }];
    }
    ngOnInit() {}
    workWithInputs() {
      this.service.changeConcurrent(this.form.form.value.concurrent);
      this.service.changeCalls(this.form.form.value.chamadas);
    }
    workWithOptions() {
      if (Object.keys(this.form.form.value.unsubscribeOptions).length === 0 || !this.form.form.valid) {
        this.initializeProperties();
      } else {
        if (this.form.form.value.concurrent > 1) {
          this.poNotification.warning(`Estão sendo executadas ${this.form.form.value.concurrent} conexões simultâneas para cada componente selecionado!`);
        }
        this.destroy = false;
        this.unsubscribeOptions.map(m => {
          if (this.form.form.value.unsubscribeOptions.find(f => f === m.property)) m.value = true;
        });
      }
      this.buildTemplate();
    }
    buildTemplate() {
      this.unsubscribeOptions.map(element => {
        switch (element.property) {
          case "Without":
            this.destroyNoUnsubscribe = element.value;
            break;
          case "Take":
            this.destroyTake = element.value;
            break;
          case "TakeUntil":
            this.destroyTakeUntil = element.value;
            break;
          case "Unsubscribe":
            this.destroyUnsubscribe = element.value;
            break;
        }
      });
    }
    initializeProperties() {
      this.service.changeValor(0);
      this.chamadas = 0;
      this.destroy = true;
      this.destroyAsync = false;
      this.destroyNoUnsubscribe = false;
      this.destroyUnsubscribe = false;
      this.destroyTake = false;
      this.destroyTakeUntil = false;
      this.unsubscribeOptions.map(m => m.value = false);
    }
    static #_ = this.ɵfac = function UnsubscribePocComponent_Factory(t) {
      return new (t || UnsubscribePocComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_unsubscribe_service__WEBPACK_IMPORTED_MODULE_0__.UnsubscribeService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_po_ui_ng_components__WEBPACK_IMPORTED_MODULE_6__.PoNotificationService));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: UnsubscribePocComponent,
      selectors: [["app-unsubscribe-poc"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵProvidersFeature"]([_po_ui_ng_components__WEBPACK_IMPORTED_MODULE_6__.PoNotificationService])],
      decls: 9,
      vars: 3,
      consts: [[1, "form"], [3, "p-fields", "p-form"], ["p-label", "Destruir Componentes", 1, "po-md-3", 3, "p-disabled", "p-click"], ["class", "components", 4, "ngIf"], [1, "components"], [3, "ngIf"]],
      template: function UnsubscribePocComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "POC - Unsubscribe Observables");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 0)(4, "po-dynamic-form", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("p-form", function UnsubscribePocComponent_Template_po_dynamic_form_p_form_4_listener($event) {
            return ctx.getForm($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "po-button", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("p-click", function UnsubscribePocComponent_Template_po_button_p_click_5_listener() {
            ctx.initializeProperties();
            return ctx.form.form.reset();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "br")(7, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, UnsubscribePocComponent_div_8_Template, 6, 4, "div", 3);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("p-fields", ctx.fields);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("p-disabled", ctx.form == null ? null : ctx.form.invalid);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.destroy);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _po_ui_ng_components__WEBPACK_IMPORTED_MODULE_6__.PoDynamicFormComponent, _po_ui_ng_components__WEBPACK_IMPORTED_MODULE_6__.PoButtonComponent, _components_noUnsubscribe_component__WEBPACK_IMPORTED_MODULE_1__.NoUnsubscribeComponent, _components_unsubscribe_himself_component__WEBPACK_IMPORTED_MODULE_2__.UnsubscribeHimselfComponent, _components_unsubscribe_takeuntil_component__WEBPACK_IMPORTED_MODULE_3__.UnsubscribeTakeUntilComponent, _components_unsubscribe_take_component__WEBPACK_IMPORTED_MODULE_4__.UnsubscribeTakeComponent],
      styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
  return UnsubscribePocComponent;
})();

/***/ })

}]);
//# sourceMappingURL=958.d759272540d6f7ce.js.map