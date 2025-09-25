"use strict";
(self["webpackChunkserver_monitor"] = self["webpackChunkserver_monitor"] || []).push([[107],{

/***/ 18547:
/*!****************************************!*\
  !*** ./src/app/login/i18n/login-en.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loginEn": () => (/* binding */ loginEn)
/* harmony export */ });
const loginEn = {
  customLiteralsLoginHint: "If you don't have a user, please contact your system administrator!",
  customLiteralsLoginPlaceHolder: "Insert your user",
  customLiteralsPasswordPlaceHolder: "Insert your password",
  customLiteralsErrorMessage: "Unable to get languages literals",
  customLiteralsSuccessMessage: "Success to get languages literals ",
  customLiteralsLoginErrorMessage: "Unable to login !",
  customLiteralsLoginSuccessMessage: "User logged with success",
  customLiteralsEnvironmentPlaceHolder: "Environment"
};

/***/ }),

/***/ 95721:
/*!****************************************!*\
  !*** ./src/app/login/i18n/login-es.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loginEs": () => (/* binding */ loginEs)
/* harmony export */ });
const loginEs = {
  customLiteralsLoginHint: "Si no dispone de un usuario, póngase en contacto con el administrador del sistema",
  customLiteralsLoginPlaceHolder: "Introduce su usuario",
  customLiteralsPasswordPlaceHolder: "Introduce tu contraseña",
  customLiteralsErrorMessage: "No fue posible obtener los literales lingüísticos",
  customLiteralsSuccessMessage: "Éxito en la obtención de los literales lingüísticos",
  customLiteralsLoginErrorMessage: "No se puede iniciar sesión",
  customLiteralsLoginSuccessMessage: "Usuario registrado con éxito",
  customLiteralsEnvironmentPlaceHolder: "Ambiente"
};

/***/ }),

/***/ 72152:
/*!****************************************!*\
  !*** ./src/app/login/i18n/login-pt.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loginPt": () => (/* binding */ loginPt)
/* harmony export */ });
const loginPt = {
  customLiteralsLoginHint: "Caso não possua usuário entre em contato com o administrador do sistema !",
  customLiteralsLoginPlaceHolder: "Insira seu usuário",
  customLiteralsPasswordPlaceHolder: "Insira sua senha",
  customLiteralsErrorMessage: "Erro na obtenção das literais da linguagem",
  customLiteralsSuccessMessage: "Literais obtidas com sucesso.",
  customLiteralsLoginErrorMessage: "Não foi possivel efetuar o login",
  customLiteralsLoginSuccessMessage: "Usuário logado com sucesso",
  customLiteralsEnvironmentPlaceHolder: "Ambiente"
};

/***/ }),

/***/ 76954:
/*!****************************************!*\
  !*** ./src/app/login/i18n/login-ru.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loginRu": () => (/* binding */ loginRu)
/* harmony export */ });
const loginRu = {
  customLiteralsLoginHint: "Если у вас нет пользователя, обратитесь к системному администратору.",
  customLiteralsLoginPlaceHolder: "Введите пользователя",
  customLiteralsPasswordPlaceHolder: "Введите пароль",
  customLiteralsErrorMessage: "Ошибка при получении языковых литералов",
  customLiteralsSuccessMessage: "Успешно полученные литералы",
  customLiteralsLoginErrorMessage: "Невозможно войти в систему",
  customLiteralsLoginSuccessMessage: "Пользователь успешно вошел в систему",
  customLiteralsEnvironmentPlaceHolder: "Окружение"
};

/***/ }),

/***/ 45393:
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginRoutingModule": () => (/* binding */ LoginRoutingModule)
/* harmony export */ });
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.component */ 98458);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{
  path: "",
  component: _login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent
}];
let LoginRoutingModule = /*#__PURE__*/(() => {
  class LoginRoutingModule {
    static #_ = this.ɵfac = function LoginRoutingModule_Factory(t) {
      return new (t || LoginRoutingModule)();
    };
    static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: LoginRoutingModule
    });
    static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
  return LoginRoutingModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](LoginRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 98458:
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_autenticacao_autenticacao_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/autenticacao/autenticacao.service */ 3986);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _core_services_environment_environments_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/services/environment/environments.service */ 90156);
/* harmony import */ var _po_ui_ng_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @po-ui/ng-components */ 22400);
/* harmony import */ var _po_ui_ng_templates__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @po-ui/ng-templates */ 88741);







const _c0 = ["pageLogin"];
let LoginComponent = /*#__PURE__*/(() => {
  class LoginComponent {
    constructor(authService, activatedRoute, environmentsService, i18nService, poNotification, router) {
      this.authService = authService;
      this.activatedRoute = activatedRoute;
      this.environmentsService = environmentsService;
      this.i18nService = i18nService;
      this.poNotification = poNotification;
      this.router = router;
      this.environmentList = JSON.parse(this.environmentsService.environments);
      this.environmentInUse = "";
      this.loginProductName = "TLPPCoreMonitor";
      this.loading = false;
      this.literals = {
        customLiteralsErrorMessage: "Erro na obtenção das literais da linguagem"
      };
      this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
      this.customLiterals = {
        loginPlaceholder: this.literals.customLiteralsLoginPlaceHolder
      };
      this.customField = {
        property: "ambiente",
        placeholder: this.literals.customLiteralsEnvironmentPlaceHolder,
        options: this.environmentList
      };
      this.languages = [{
        language: "pt-br",
        description: "Português"
      }, {
        language: "en-us",
        description: "English"
      }, {
        language: "es-es",
        description: "Español"
      }, {
        language: "ru",
        description: "Pусский"
      }];
      let lang = sessionStorage.getItem("tlppcoreGuiLanguage");
      if (!lang) lang = "pt-br";
      this.i18nService.getLiterals({
        context: "login",
        language: lang
      }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.destroy$)).subscribe({
        next: literals => {
          this.changeLiterals(literals);
        },
        error: error => {
          poNotification.error(this.literals.customLiteralsErrorMessage);
        }
      });
      this;
    }
    ngOnInit() {
      this.activatedRoute.data.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.destroy$)).subscribe({
        next: config => {
          if (config.ENABLEAUTHENTICATION !== "1") {
            this.router.navigate(["/monitor/appserver"]);
          }
          var lang = sessionStorage.getItem("tlppcoreGuiLanguage");
          if (this.pageLogin && lang) this.pageLogin.selectedLanguage = lang;
        },
        error: error => {
          this.poNotification.error("Erro ao obter as configurações iniciais!");
          console.error(error);
        }
      });
    }
    login(formData) {
      this.loading = true;
      this.authService.autenticarAPI(formData.login, formData.password, this.customField.value).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.destroy$)).subscribe({
        next: user => {
          console.log(`${this.literals.customLiteralsLoginSuccessMessage}`);
          this.loading = false;
          this.router.navigate(["monitor/appserver"]);
        },
        error: e => {
          this.poNotification.error(this.literals.customLiteralsLoginErrorMessage);
          console.error(e);
          this.loading = false;
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)();
        }
      });
    }
    hideRmbUser() {
      return true;
    }
    changeLanguage(lang) {
      if (lang.language) {
        console.log(lang);
        this.i18nService.setLanguage(lang.language, false);
        console.log(this.i18nService.getLanguage());
        localStorage.setItem("tlppcoreGuiLanguage", lang.language);
        this.i18nService.getLiterals({
          context: "login",
          language: lang.language
        }).subscribe(this.changeLiterals.bind(this));
        localStorage.setItem("PO_DEFAULT_LANGUAGE", lang.language);
        localStorage.setItem("PO_USER_LOCALE", lang.language);
      }
    }
    changeLiterals(literals) {
      this.literals = literals;
      this.customLiterals.loginHint = this.literals.customLiteralsLoginHint;
      this.customLiterals.loginPlaceholder = this.literals.customLiteralsLoginPlaceHolder;
      this.customField.placeholder = this.literals.customLiteralsEnvironmentPlaceHolder;
    }
    ngOnDestroy() {
      this.destroy$.next(false);
      this.destroy$.unsubscribe();
    }
    static #_ = this.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_autenticacao_autenticacao_service__WEBPACK_IMPORTED_MODULE_0__.AutenticacaoService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_services_environment_environments_service__WEBPACK_IMPORTED_MODULE_1__.EnvironmentsService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_po_ui_ng_components__WEBPACK_IMPORTED_MODULE_7__.PoI18nService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_po_ui_ng_components__WEBPACK_IMPORTED_MODULE_7__.PoNotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      viewQuery: function LoginComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 7);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.pageLogin = _t.first);
        }
      },
      decls: 1,
      vars: 5,
      consts: [[3, "p-hide-remember-user", "p-custom-field", "p-loading", "p-product-name", "p-literals", "p-login-submit", "p-language-change"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "po-page-login", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("p-login-submit", function LoginComponent_Template_po_page_login_p_login_submit_0_listener($event) {
            return ctx.login($event);
          })("p-language-change", function LoginComponent_Template_po_page_login_p_language_change_0_listener($event) {
            return ctx.changeLanguage($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("p-hide-remember-user", ctx.hideRmbUser())("p-custom-field", ctx.customField)("p-loading", ctx.loading)("p-product-name", ctx.loginProductName)("p-literals", ctx.customLiterals);
        }
      },
      dependencies: [_po_ui_ng_templates__WEBPACK_IMPORTED_MODULE_8__.PoPageLoginComponent],
      styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
  return LoginComponent;
})();

/***/ }),

/***/ 80107:
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginModule": () => (/* binding */ LoginModule)
/* harmony export */ });
/* harmony import */ var _po_ui_ng_templates__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @po-ui/ng-templates */ 88741);
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.component */ 98458);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _po_ui_ng_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @po-ui/ng-components */ 22400);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-routing.module */ 45393);
/* harmony import */ var _i18n_login_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./i18n/login-es */ 95721);
/* harmony import */ var _i18n_login_en__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./i18n/login-en */ 18547);
/* harmony import */ var _i18n_login_pt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./i18n/login-pt */ 72152);
/* harmony import */ var _i18n_login_ru__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./i18n/login-ru */ 76954);
/* harmony import */ var _shared_i18n_general_pt__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/i18n/general-pt */ 35794);
/* harmony import */ var _shared_i18n_general_en__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/i18n/general-en */ 74041);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);













const i18nConfig = {
  contexts: {
    general: {
      "pt-br": _shared_i18n_general_pt__WEBPACK_IMPORTED_MODULE_6__.generalPt,
      "en-us": _shared_i18n_general_en__WEBPACK_IMPORTED_MODULE_7__.generalEn
    },
    login: {
      "pt-br": _i18n_login_pt__WEBPACK_IMPORTED_MODULE_4__.loginPt,
      "en-us": _i18n_login_en__WEBPACK_IMPORTED_MODULE_3__.loginEn,
      "es-es": _i18n_login_es__WEBPACK_IMPORTED_MODULE_2__.loginEs,
      ru: _i18n_login_ru__WEBPACK_IMPORTED_MODULE_5__.loginRu
    }
  },
  default: {
    language: "pt-BR",
    context: "general",
    cache: true
  }
};
let LoginModule = /*#__PURE__*/(() => {
  class LoginModule {
    static #_ = this.ɵfac = function LoginModule_Factory(t) {
      return new (t || LoginModule)();
    };
    static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
      type: LoginModule
    });
    static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
      providers: [_po_ui_ng_components__WEBPACK_IMPORTED_MODULE_9__.PoNotificationService],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _po_ui_ng_templates__WEBPACK_IMPORTED_MODULE_11__.PoPageLoginModule, _po_ui_ng_components__WEBPACK_IMPORTED_MODULE_9__.PoNotificationModule, _login_routing_module__WEBPACK_IMPORTED_MODULE_1__.LoginRoutingModule, _po_ui_ng_components__WEBPACK_IMPORTED_MODULE_9__.PoI18nModule.config(i18nConfig)]
    });
  }
  return LoginModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](LoginModule, {
    declarations: [_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _po_ui_ng_templates__WEBPACK_IMPORTED_MODULE_11__.PoPageLoginModule, _po_ui_ng_components__WEBPACK_IMPORTED_MODULE_9__.PoNotificationModule, _login_routing_module__WEBPACK_IMPORTED_MODULE_1__.LoginRoutingModule, _po_ui_ng_components__WEBPACK_IMPORTED_MODULE_9__.PoI18nModule],
    exports: [_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent]
  });
})();

/***/ })

}]);
//# sourceMappingURL=107.391af65c75415513.js.map