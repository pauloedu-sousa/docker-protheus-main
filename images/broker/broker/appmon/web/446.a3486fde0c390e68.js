"use strict";
(self["webpackChunkserver_monitor"] = self["webpackChunkserver_monitor"] || []).push([[446],{

/***/ 51078:
/*!*********************************************************************!*\
  !*** ./src/app/monitor/components/appserver/appserver.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppserverComponent": () => (/* binding */ AppserverComponent)
/* harmony export */ });
/* harmony import */ var _po_ui_ng_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @po-ui/ng-components */ 22400);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _service_appserver_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../service/appserver.service */ 19679);
/* harmony import */ var src_app_shared_components_header_services_header_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/components/header/services/header.service */ 99035);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);







const _c0 = ["modalServer"];
const _c1 = ["modalDbAccess"];
function AppserverComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function AppserverComponent_div_57_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function AppserverComponent_span_76_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppserverComponent_span_76_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r26);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r25.actionsMachineMemory("Hide"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("p-tooltip", ctx_r2.literals.tooltipMachineMemoryCollapseThis);
  }
}
function AppserverComponent_span_77_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppserverComponent_span_77_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r28);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r27.actionsMachineMemory("Show"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("p-tooltip", ctx_r3.literals.tooltipMachineMemoryExpandThis);
  }
}
function AppserverComponent_div_82_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "div", 1)(2, "po-widget", 11)(3, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "po-chart", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("p-titleChange", function AppserverComponent_div_82_Template_po_chart_p_titleChange_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r30);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r29.sTitleMachineMem = $event);
    })("p-series-click", function AppserverComponent_div_82_Template_po_chart_p_series_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r30);
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r31.machineMemoryModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", ctx_r4.sTotalRAM, " ", ctx_r4.sTotalRAMUnit, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r4.literals.widgetMachineMemoryText, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("p-title", ctx_r4.sTitleMachineMem)("p-series", ctx_r4.memoryRAM);
  }
}
function AppserverComponent_span_94_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppserverComponent_span_94_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r33);
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r32.actionsApplicationServerMemory("Hide"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("p-tooltip", ctx_r5.literals.tooltipAppserverMemoryCollapseThis);
  }
}
function AppserverComponent_span_95_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppserverComponent_span_95_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r35);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r34.actionsApplicationServerMemory("Show"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("p-tooltip", ctx_r6.literals.tooltipAppserverMemoryExpandThis);
  }
}
function AppserverComponent_div_100_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "po-chart", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("p-titleChange", function AppserverComponent_div_100_Template_po_chart_p_titleChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r37);
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r36.sTitleAppMem = $event);
    })("p-series-click", function AppserverComponent_div_100_Template_po_chart_p_series_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r37);
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r38.appMemoryModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("p-title", ctx_r7.sTitleAppMem)("p-options", ctx_r7.optionsColumnAppServerMemory)("p-categories", ctx_r7.categoriesColumnResidentVirtual)("p-series", ctx_r7.memoryResidentVirtual);
  }
}
function AppserverComponent_span_112_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppserverComponent_span_112_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r40);
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r39.actionsPagingMemory("Hide"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("p-tooltip", ctx_r8.literals.tooltipPagingMemoryCollapseThis);
  }
}
function AppserverComponent_span_113_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppserverComponent_span_113_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r42);
      const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r41.actionsPagingMemory("Show"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("p-tooltip", ctx_r9.literals.tooltipPagingMemoryExpandThis);
  }
}
function AppserverComponent_div_118_Template(rf, ctx) {
  if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "po-chart", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("p-titleChange", function AppserverComponent_div_118_Template_po_chart_p_titleChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r44);
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r43.sTitlePM = $event);
    })("p-series-click", function AppserverComponent_div_118_Template_po_chart_p_series_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r44);
      const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r45.pagingMemoryModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("p-title", ctx_r10.sTitlePM)("p-series", ctx_r10.PagingMemoryData)("p-type", ctx_r10.PagingMemoryChartType);
  }
}
function AppserverComponent_span_131_Template(rf, ctx) {
  if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppserverComponent_span_131_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r47);
      const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r46.actionsThreadMemory("Hide"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("p-tooltip", ctx_r11.literals.tooltipThreadMemoryCollapseThis);
  }
}
function AppserverComponent_span_132_Template(rf, ctx) {
  if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppserverComponent_span_132_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r49);
      const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r48.actionsThreadMemory("Show"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("p-tooltip", ctx_r12.literals.tooltipThreadMemoryExpandThis);
  }
}
function AppserverComponent_div_139_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "po-table", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("p-columns", ctx_r13.threadsColumns)("p-items", ctx_r13.threadsList);
  }
}
function AppserverComponent_span_151_Template(rf, ctx) {
  if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppserverComponent_span_151_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r51);
      const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r50.actionsFilesStartPath("Hide"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("p-tooltip", ctx_r14.literals.tooltipNumberFilesStartPathCollapseThis);
  }
}
function AppserverComponent_span_152_Template(rf, ctx) {
  if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppserverComponent_span_152_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r53);
      const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r52.actionsFilesStartPath("Show"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("p-tooltip", ctx_r15.literals.tooltipNumberFilesStartPathExpandThis);
  }
}
function AppserverComponent_div_159_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "po-chart", 57)(2, "po-table", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("p-series", ctx_r16.filesStartPathGrafh);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("p-columns", ctx_r16.filesStartPathColumns)("p-items", ctx_r16.filesStartPath);
  }
}
function AppserverComponent_span_172_Template(rf, ctx) {
  if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppserverComponent_span_172_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r55);
      const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r54.actionsUsers("Hide"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("p-tooltip", ctx_r17.literals.tooltipUsersConnectedCollapseThis);
  }
}
function AppserverComponent_span_173_Template(rf, ctx) {
  if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppserverComponent_span_173_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r57);
      const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r56.actionsUsers("Show"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("p-tooltip", ctx_r18.literals.tooltipUsersConnectedExpandThis);
  }
}
function AppserverComponent_div_177_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "div", 1)(2, "po-widget", 59)(3, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "po-widget", 59)(9, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "po-table", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r19.sTotalUsers, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r19.literals.textUsersConnectedTotalConnectionsUsers, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r19.sUniqueUsers, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r19.literals.textUsersConnectedUniqueUsersLogged, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("p-items", ctx_r19.users);
  }
}
function AppserverComponent_ng_template_186_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 40)(1, "po-container", 62)(2, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r22.disconnectedIcon, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r22.literals.messageMonitorIsNotAvailable, " ");
  }
}
function AppserverComponent_ng_template_188_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 40);
  }
}
let AppserverComponent = /*#__PURE__*/(() => {
  class AppserverComponent {
    constructor(rest, i18nService, headerService) {
      this.rest = rest;
      this.i18nService = i18nService;
      this.headerService = headerService;
      /*------ header ---------------------------------------*/
      this.headerData = {
        title: "Appserver Monitor",
        icon: "po-icon po-icon-device-desktop",
        routeUrl: "/appserver"
      };
      this.totvstecLogo = "assets/totvstec-icon.png";
      this.disconnectedIcon = "assets/disconnect-icon.jpg";
      this.sValueEmpty = "--";
      this.regex = /(\d)(?=(\d{3})+(?!\d))/g; // Para aplicar máscara de milhar em números
      this.status = 0;
      /* Unsubscriptions */
      this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
      // Modal
      // -----
      this.sTitleModal = "";
      this.sCollectedModal = this.sValueEmpty;
      this.modalItems = [];
      // Environment
      this.stateEnvironment = "";
      this.oAppserverSubscribe = [];
      this.oTlppSubscribe = [];
      this.sStartAppserver = this.sValueEmpty;
      // appserver
      this.sVersionAppserver = this.sValueEmpty;
      this.sNameAppserver = this.sValueEmpty;
      this.sRevisionAppserver = this.sValueEmpty;
      this.sDtBuildAppserver = this.sValueEmpty;
      this.sHrBuildAppserver = this.sValueEmpty;
      this.sVdrAppserver = this.sValueEmpty;
      // tlppCore
      this.sVersionTlppCore = this.sValueEmpty;
      this.sNameTlppCore = this.sValueEmpty;
      this.sRevisionTlppCore = this.sValueEmpty;
      this.sDtBuildTlppCore = this.sValueEmpty;
      this.sHrBuildTlppCore = this.sValueEmpty;
      // Machine Memory
      // --------------
      this.viewMachineMemory = true;
      this.iconMachineMemory = "on";
      this.stateMachineMemory = "";
      this.sCollectedMachine = this.sValueEmpty;
      this.sTotalRAM = this.sValueEmpty;
      this.sTotalRAMUnit = this.sValueEmpty;
      this.nUsedRam = 0;
      this.sUsedRamUnit = this.sValueEmpty;
      this.nFreeRam = 0;
      this.sFreeRamUnit = this.sValueEmpty;
      this.memoryRAM = [];
      // Application Server Memory
      // -------------------------
      this.viewApplicationServerMemory = true;
      this.iconApplicationServerMemory = "on";
      this.stateAppMem = "";
      this.sCollectedAppServer = this.sValueEmpty;
      this.nMemoryVirtual = 0;
      this.sMemoryVirtualUnit = this.sValueEmpty;
      this.nMemoryResident = 0;
      this.sMemoryResidentUnit = this.sValueEmpty;
      this.optionsColumnAppServerMemory = {
        axis: {
          minRange: 0,
          maxRange: 0,
          gridLines: 2
        }
      };
      this.memoryResidentVirtual = [];
      this.categoriesColumnResidentVirtual = ["app"];
      // Paging Memory
      // -------------
      this.viewPagingMemory = true;
      this.iconPagingMemory = "on";
      this.statePM = "";
      this.sCollectedPaging = this.sValueEmpty;
      this.nPagingMemoryConfigured = 0;
      this.sPagingMemoryConfiguredUnit = this.sValueEmpty;
      this.nPagingMemoryAvailable = 0;
      this.sPagingMemoryAvailableUnit = this.sValueEmpty;
      this.nPagingMemoryUsed = 0;
      this.sPagingMemoryUsedUnit = this.sValueEmpty;
      this.PagingMemoryChartType = _po_ui_ng_components__WEBPACK_IMPORTED_MODULE_4__.PoChartType.Donut;
      this.PagingMemoryData = [];
      // Thread Memory
      // -------------
      this.viewThreadMemory = true;
      this.iconThreadMemory = "on";
      this.stateThreadMemory = "";
      this.sAverageMemory = this.sValueEmpty;
      this.sThreads = this.sValueEmpty;
      this.sCollectedThreads = this.sValueEmpty;
      this.threadsList = [];
      this.threadsColumns = [{
        property: "item",
        label: "Item"
      }, {
        property: "id",
        label: "Thread ID"
      }, {
        property: "memory",
        label: "Memory"
      }, {
        property: "unit",
        label: "Unit"
      }, {
        property: "status",
        label: "Status",
        type: "label",
        width: "80px",
        labels: [{
          value: 0,
          color: "color-11",
          label: "ok"
        }, {
          value: 1,
          color: "color-08",
          label: "warning"
        }]
      }];
      // Number of files in startPath
      // ----------------------------
      this.viewFilesStartPath = true;
      this.iconFilesStartPath = "on";
      this.stateStartPath = "";
      this.sAvgSystemFiles = this.sValueEmpty;
      this.sMaxSystemFiles = this.sValueEmpty;
      this.sCollectedFiles = this.sValueEmpty;
      this.filesStartPathGrafh = [];
      this.filesStartPath = [];
      this.filesStartPathColumns = [{
        property: "id",
        label: "ID",
        width: "20px"
      }, {
        property: "environment",
        label: "Environment",
        width: "190px"
      }, {
        property: "files",
        label: "Files"
      }, {
        property: "status",
        label: "Status",
        type: "label",
        width: "80px",
        labels: [{
          value: 0,
          color: "color-11",
          label: "ok"
        }, {
          value: 1,
          color: "color-08",
          label: "warning"
        }, {
          value: 2,
          color: "color-07",
          label: "critical"
        }]
      }];
      // Users Connected
      // ----------------
      this.viewUsers = true;
      this.iconUsers = "on";
      this.stateUsers = "";
      this.sCollectedUsers = this.sValueEmpty;
      this.sTotalUsers = this.sValueEmpty;
      this.sUniqueUsers = this.sValueEmpty;
      this.users = [];
      this.titleOfGraphic = "A";
      this.rangeOfGraphic = [];
      this.graphicConsumingChartType = _po_ui_ng_components__WEBPACK_IMPORTED_MODULE_4__.PoChartType.Donut;
      this.i18nService.getLiterals({
        context: "appserver",
        language: this.i18nService.getLanguage()
      }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroy$)).subscribe(literals => this.literals = literals);
      this.headerService.setheaderData(this.headerData);
    }
    ngOnInit() {
      this.sTitleMachineMem = this.literals.chartTitleMachineMemory;
      this.sTitleAppMem = this.literals.chartTitleAppServerMemory;
      this.sTitlePM = this.literals.chartTitlePagingMemory;
      this.sHighPerformance = this.literals.sHighPerformanceUnknow;
      this.sHighPerformanceType = this.literals.sHighPerformanceTypeInfo;
      this.sDescriptionPMconfig = this.literals.sDescriptionPMconfig;
      this.sDescriptionPMuse = this.literals.sDescriptionPMuse;
      this.sDescriptionPMavailable = this.literals.sDescriptionPMavailable;
      // ---------------------------------------------------------------------------------------
      // NOTA: foi separado em funções distintas para executar a atualização de dados de cada
      // grafico de forma independente atraves de botao de funcao refresh
      // ---------------------------------------------------------------------------------------
      // ABA Env
      this.getEnvironment();
      this.getStartDate();
      this.getHighPerformance();
      // ABA Server
      this.getMemoryRAM();
      this.getMemoryApp();
      this.getPagingMemory();
      this.getThreadMemory();
      this.getStartPath();
      this.getUsers();
    }
    // -------------------------------------------------
    getAbaEnvironment() {
      this.getEnvironment();
      this.getStartDate();
      this.getHighPerformance();
    }
    // -------------------------------------------------
    getAbaServer() {
      this.getMemoryRAM();
      this.getMemoryApp();
      this.getPagingMemory();
      this.getThreadMemory();
      this.getStartPath();
      this.getUsers();
    }
    healthCheck() {
      this.rest.healthCheck().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroy$)).subscribe(resp => {
        this.status = resp.status;
      });
    }
    // -------------------------------------------------
    getEnvironment() {
      this.rest.getEnvironment().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroy$)).subscribe(data => {
        this.stateEnvironment = "on";
        this.contentSubscribeEnv = data;
        this.fparseGetEnv(this.contentSubscribeEnv);
      });
    }
    fparseGetEnv(obj) {
      Object.keys(obj).forEach(key => {
        if (key == "tlpp") {
          this.oTlppSubscribe = obj[key];
        }
        if (key == "appserver") {
          this.oAppserverSubscribe = obj[key];
        }
      });
      Object.keys(this.oTlppSubscribe).forEach(key => {
        if (this.oTlppSubscribe[key].hasOwnProperty("version")) {
          this.sVersionTlppCore = this.oTlppSubscribe[key]["version"];
        }
        if (this.oTlppSubscribe[key].hasOwnProperty("versionName")) {
          this.sNameTlppCore = this.oTlppSubscribe[key]["versionName"];
        }
        if (this.oTlppSubscribe[key].hasOwnProperty("sourceRevision")) {
          this.sRevisionTlppCore = this.oTlppSubscribe[key]["sourceRevision"];
        }
        if (this.oTlppSubscribe[key].hasOwnProperty("sourceRevisionDate")) {
          var tlppBuildDate = this.oTlppSubscribe[key]["sourceRevisionDate"].split(" ");
          if (tlppBuildDate.length > 0) {
            this.sDtBuildTlppCore = tlppBuildDate[0];
            this.sHrBuildTlppCore = tlppBuildDate[1];
          }
        }
      });
      Object.keys(this.oAppserverSubscribe).forEach(key => {
        if (this.oAppserverSubscribe[key].hasOwnProperty("version")) {
          this.sVersionAppserver = this.oAppserverSubscribe[key]["version"];
        }
        if (this.oAppserverSubscribe[key].hasOwnProperty("versionName")) {
          this.sNameAppserver = this.oAppserverSubscribe[key]["versionName"];
        }
        if (this.oAppserverSubscribe[key].hasOwnProperty("revision")) {
          this.sRevisionAppserver = this.oAppserverSubscribe[key]["revision"];
        }
        if (this.oAppserverSubscribe[key].hasOwnProperty("vdrRevision")) {
          this.sVdrAppserver = this.oAppserverSubscribe[key]["vdrRevision"];
        }
        if (this.oAppserverSubscribe[key].hasOwnProperty("buildDate")) {
          this.sDtBuildAppserver = this.oAppserverSubscribe[key]["buildDate"];
        }
        if (this.oAppserverSubscribe[key].hasOwnProperty("buildTime")) {
          this.sHrBuildAppserver = this.oAppserverSubscribe[key]["buildTime"];
        }
      });
    }
    // -------------------------------------------------
    getStartDate() {
      this.rest.getStartdate().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroy$)).subscribe(data => {
        this.stateEnvironment = "on";
        this.contentSubscribeStartDate = data;
        this.fparseStartDate(this.contentSubscribeStartDate);
      });
    }
    fparseStartDate(obj) {
      Object.keys(obj).forEach(key => {
        if (obj[key]["metrics"][0]["name"] == "startdate") {
          this.sStartAppserver = obj[key]["metrics"][0]["value"] ? obj[key]["metrics"][0]["value"] : this.sValueEmpty;
        }
      });
    }
    // -------------------------------------------------
    getMemoryRAM() {
      this.rest.getMemoryRAM().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroy$)).subscribe(data => {
        this.stateMachineMemory = "on";
        this.contentSubscribeMemoryRAM = data;
        this.fparseMemoryRAM(this.contentSubscribeMemoryRAM);
      });
    }
    fparseMemoryRAM(obj) {
      Object.keys(obj).forEach(key => {
        if (obj[key]["metrics"]) {
          Object.keys(obj[key]["metrics"]).forEach(key_metrics => {
            if (obj[key]["metrics"][key_metrics]["name"] == "memory_ram_total") {
              this.sCollectedMachine = obj[key]["metrics"][key_metrics]["collected_in"];
              this.sTotalRAM = obj[key]["metrics"][key_metrics]["value"].toString().replace(this.regex, "$1.");
              this.sTotalRAMUnit = obj[key]["metrics"][key_metrics]["unit"];
            }
            if (obj[key]["metrics"][key_metrics]["name"] == "memory_ram_used") {
              this.nUsedRam = parseInt(obj[key]["metrics"][key_metrics]["value"]);
              this.sUsedRamUnit = obj[key]["metrics"][key_metrics]["unit"];
            }
            if (obj[key]["metrics"][key_metrics]["name"] == "memory_ram_free") {
              this.nFreeRam = parseInt(obj[key]["metrics"][key_metrics]["value"]);
              this.sFreeRamUnit = obj[key]["metrics"][key_metrics]["unit"];
            }
          });
        }
      });
      this.memoryRAM = [{
        label: this.literals.memoryRAMLabelUsed,
        data: this.nUsedRam,
        type: _po_ui_ng_components__WEBPACK_IMPORTED_MODULE_4__.PoChartType.Pie,
        tooltip: this.literals.memoryRAMToolMemoryUsed + this.nUsedRam.toString().replace(this.regex, "$1.") + " " + this.sUsedRamUnit
      }, {
        label: this.literals.memoryRAMLabelFree,
        data: this.nFreeRam,
        type: _po_ui_ng_components__WEBPACK_IMPORTED_MODULE_4__.PoChartType.Pie,
        tooltip: this.literals.memoryRAMToolMemoryFree + this.nFreeRam.toString().replace(this.regex, "$1.") + " " + this.sFreeRamUnit
      }];
    }
    // -------------------------------------------------
    getMemoryApp() {
      this.rest.getMemoryApp().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroy$)).subscribe(data => {
        this.stateAppMem = "on";
        this.contentSubscribeMemoryApp = data;
        this.fparseMemoryApp(this.contentSubscribeMemoryApp);
      });
    }
    fparseMemoryApp(obj) {
      Object.keys(obj).forEach(key => {
        if (obj[key]["metrics"]) {
          Object.keys(obj[key]["metrics"]).forEach(key_metrics => {
            if (obj[key]["metrics"][key_metrics]["name"] == "memory_virtual") {
              this.sCollectedAppServer = obj[key]["metrics"][key_metrics]["collected_in"];
              this.nMemoryVirtual = parseInt(obj[key]["metrics"][key_metrics]["value"]);
              this.sMemoryVirtualUnit = obj[key]["metrics"][key_metrics]["unit"];
            }
            if (obj[key]["metrics"][key_metrics]["name"] == "memory_resident") {
              this.sCollectedAppServer = obj[key]["metrics"][key_metrics]["collected_in"];
              this.nMemoryResident = parseInt(obj[key]["metrics"][key_metrics]["value"]);
              this.sMemoryResidentUnit = obj[key]["metrics"][key_metrics]["unit"];
            }
          });
        }
      });
      this.memoryResidentVirtual = [{
        label: this.literals.appserverMemoryModalDescriptionResident,
        data: [this.nMemoryResident],
        type: _po_ui_ng_components__WEBPACK_IMPORTED_MODULE_4__.PoChartType.Column,
        tooltip: this.literals.memoryResidentVirtualTooltipResident + this.nMemoryResident.toString().replace(this.regex, "$1.") + " " + this.sMemoryResidentUnit
      }, {
        label: this.literals.appserverMemoryModalDescriptionVirtual,
        data: [this.nMemoryVirtual],
        type: _po_ui_ng_components__WEBPACK_IMPORTED_MODULE_4__.PoChartType.Column,
        tooltip: this.literals.memoryResidentVirtualTooltipVirtual + this.nMemoryVirtual.toString().replace(this.regex, "$1.") + " " + this.sMemoryVirtualUnit
      }];
      this.optionsColumnAppServerMemory["axis"]["maxRange"] = Math.max(this.nMemoryResident, this.nMemoryVirtual);
    }
    // -------------------------------------------------
    getPagingMemory() {
      this.rest.getPagingMemory().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroy$)).subscribe(data => {
        this.statePM = "on";
        this.contentSubscribePagingMemory = data;
        this.fparsePagingMemory(this.contentSubscribePagingMemory);
      });
    }
    fparsePagingMemory(obj) {
      Object.keys(obj).forEach(key => {
        if (obj[key]["metrics"]) {
          Object.keys(obj[key]["metrics"]).forEach(key_metrics => {
            if (obj[key]["metrics"][key_metrics]["name"] == "memory_swap_total") {
              this.sCollectedPaging = obj[key]["metrics"][key_metrics]["collected_in"];
              this.nPagingMemoryConfigured = parseInt(obj[key]["metrics"][key_metrics]["value"]);
              this.sPagingMemoryConfiguredUnit = obj[key]["metrics"][key_metrics]["unit"];
            }
            if (obj[key]["metrics"][key_metrics]["name"] == "memory_swap_used") {
              this.sCollectedPaging = obj[key]["metrics"][key_metrics]["collected_in"];
              this.nPagingMemoryUsed = parseInt(obj[key]["metrics"][key_metrics]["value"]);
              this.sPagingMemoryUsedUnit = obj[key]["metrics"][key_metrics]["unit"];
            }
            if (obj[key]["metrics"][key_metrics]["name"] == "memory_swap_free") {
              this.sCollectedPaging = obj[key]["metrics"][key_metrics]["collected_in"];
              this.nPagingMemoryAvailable = parseInt(obj[key]["metrics"][key_metrics]["value"]);
              this.sPagingMemoryAvailableUnit = obj[key]["metrics"][key_metrics]["unit"];
            }
          });
        }
      });
      this.PagingMemoryData = [{
        label: this.literals.pagingMemoryDataLabelConfigured,
        data: this.nPagingMemoryConfigured,
        type: _po_ui_ng_components__WEBPACK_IMPORTED_MODULE_4__.PoChartType.Donut,
        tooltip: this.sDescriptionPMconfig + ": " + this.nPagingMemoryConfigured.toString().replace(this.regex, "$1.") + " " + this.sPagingMemoryConfiguredUnit
      }, {
        label: this.literals.pagingMemoryDataLabelUsed,
        data: this.nPagingMemoryUsed,
        type: _po_ui_ng_components__WEBPACK_IMPORTED_MODULE_4__.PoChartType.Donut,
        tooltip: this.sDescriptionPMuse + ": " + this.nPagingMemoryUsed.toString().replace(this.regex, "$1.") + " " + this.sPagingMemoryUsedUnit
      }, {
        label: this.literals.pagingMemoryDataLabelAvailable,
        data: this.nPagingMemoryAvailable,
        type: _po_ui_ng_components__WEBPACK_IMPORTED_MODULE_4__.PoChartType.Donut,
        tooltip: this.sDescriptionPMavailable + ": " + this.nPagingMemoryAvailable.toString().replace(this.regex, "$1.") + " " + this.sPagingMemoryAvailableUnit
      }];
    }
    // -------------------------------------------------
    getThreadMemory() {
      this.rest.getThreadMemory().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroy$)).subscribe(data => {
        this.stateThreadMemory = "on";
        this.contentSubscribeThreadMemory = data;
        this.fparseThreadMemory(this.contentSubscribeThreadMemory);
      });
    }
    fparseThreadMemory(obj) {
      let nThreads = 0;
      let status = 0;
      if (obj["metrics"]) {
        Object.keys(obj["metrics"]).forEach(key_metrics => {
          if (obj["metrics"][key_metrics]["name"] == "memory_threads_used") {
            this.sCollectedThreads = obj["metrics"][key_metrics]["collected_in"];
            this.sAverageMemory = (parseInt(obj["metrics"][key_metrics]["avg_mem_thread"]) * 1024).toString().replace(this.regex, "$1.") + " kb";
            this.threadsList = [];
            Object.keys(obj["metrics"][key_metrics]["threads"]).forEach(key_threads => {
              nThreads += 1;
              if (parseInt(obj["metrics"][key_metrics]["threads"][key_threads]["value"]) <= parseInt(obj["metrics"][key_metrics]["avg_mem_thread"]) * 1024) {
                status = 0;
              } else {
                status = 1;
              }
              this.threadsList.push({
                item: parseInt(key_threads) + 1,
                id: obj["metrics"][key_metrics]["threads"][key_threads]["id"],
                memory: obj["metrics"][key_metrics]["threads"][key_threads]["value"].toString().replace(this.regex, "$1."),
                unit: obj["metrics"][key_metrics]["threads"][key_threads]["unit"],
                status: status
              });
            });
          }
        });
      }
      this.sThreads = nThreads.toString();
    }
    // -------------------------------------------------
    getStartPath() {
      this.rest.getStartPath().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroy$)).subscribe(data => {
        this.stateStartPath = "on";
        this.contentSubscribeStartPath = data;
        this.fparseStartPath(this.contentSubscribeStartPath);
      });
    }
    fparseStartPath(obj) {
      let filesAux = [];
      let status = -1;
      Object.keys(obj).forEach(key => {
        Object.keys(obj[key]).forEach(key_metrics => {
          if (obj[key][key_metrics]["name"] == "files_startpath") {
            this.sCollectedFiles = obj[key][key_metrics]["collected_in"];
            this.sAvgSystemFiles = obj[key][key_metrics]["avg_system_files"].toString().replace(this.regex, "$1.");
            this.sMaxSystemFiles = obj[key][key_metrics]["max_system_files"].toString().replace(this.regex, "$1.");
            this.filesStartPath = [];
          }
          Object.keys(obj[key][key_metrics]["environment"]).forEach(key_env => {
            status = -1;
            if (parseInt(obj[key][key_metrics]["environment"][key_env]["value"]) <= parseInt(obj[key][key_metrics]["avg_system_files"])) {
              status = 0;
            }
            if (parseInt(obj[key][key_metrics]["environment"][key_env]["value"]) > parseInt(obj[key][key_metrics]["avg_system_files"]) && parseInt(obj[key][key_metrics]["environment"][key_env]["value"]) <= parseInt(obj[key][key_metrics]["max_system_files"])) {
              status = 1;
            }
            if (parseInt(obj[key][key_metrics]["environment"][key_env]["value"]) > parseInt(obj[key][key_metrics]["max_system_files"])) {
              status = 2;
            }
            this.filesStartPath.push({
              id: "#" + (parseInt(key_env) + 1).toString(),
              environment: obj[key][key_metrics]["environment"][key_env]["environment"],
              files: obj[key][key_metrics]["environment"][key_env]["value"],
              status: status
            });
            filesAux.push({
              label: "#" + (parseInt(key_env) + 1).toString(),
              data: parseInt(obj[key][key_metrics]["environment"][key_env]["value"].toString()),
              type: _po_ui_ng_components__WEBPACK_IMPORTED_MODULE_4__.PoChartType.Pie,
              tooltip: "#" + (parseInt(key_env) + 1).toString() + " Env: " + obj[key][key_metrics]["environment"][key_env]["environment"].toString() + " | Files: " + obj[key][key_metrics]["environment"][key_env]["value"].toString()
            });
          });
        });
      });
      this.filesStartPathGrafh = filesAux;
    }
    // -------------------------------------------------
    getUsers() {
      this.rest.getUsers().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroy$)).subscribe(data => {
        this.stateUsers = "on";
        this.contentSubscribeUsers = data;
        this.fparseUsers(this.contentSubscribeUsers);
      });
    }
    fparseUsers(obj) {
      Object.keys(obj).forEach(key => {
        Object.keys(obj[key]).forEach(key_metrics => {
          if (obj[key][key_metrics]["name"] == "users_connected") {
            this.sCollectedUsers = obj[key][key_metrics]["collected_in"];
            this.sTotalUsers = obj[key][key_metrics]["users_connected_all"];
            this.sUniqueUsers = obj[key][key_metrics]["users_connected_unique"];
            this.users = [];
          }
          Object.keys(obj[key][key_metrics]["users"]).forEach(key_user => {
            this.users.push({
              item: parseInt(key_user) + 1,
              thread_ID: obj[key][key_metrics]["users"][key_user]["id"],
              user: obj[key][key_metrics]["users"][key_user]["user"],
              connected_in: obj[key][key_metrics]["users"][key_user]["connected_in"],
              type: obj[key][key_metrics]["users"][key_user]["type"],
              note: obj[key][key_metrics]["users"][key_user]["note"]
            });
          });
        });
      });
    }
    // -------------------------------------------------
    getHighPerformance() {
      this.rest.getPower().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroy$)).subscribe(data => {
        this.stateEnvironment = "on";
        this.contentSubscribeHighPerformance = data;
        this.fparseHighPerformance(this.contentSubscribeHighPerformance);
      });
    }
    fparseHighPerformance(obj) {
      Object.keys(obj).forEach(key => {
        Object.keys(obj[key]).forEach(key_metrics => {
          if (obj[key][key_metrics]["name"] == "power_performance") {
            Object.keys(obj[key][key_metrics]["plans"]).forEach(key_user => {
              if (obj[key][key_metrics]["plans"][key_user]["id"] == 3 || obj[key][key_metrics]["plans"][key_user]["id"] == 5) {
                this.sHighPerformanceType = this.literals.sHighPerformanceTypeSuccess;
              } else {
                this.sHighPerformanceType = this.literals.sHighPerformanceTypeWarning;
              }
              this.sHighPerformance = obj[key][key_metrics]["plans"][key_user]["name"];
            });
          }
        });
      });
    }
    closeModal() {
      this.sTitleModal = "";
      this.modalItems = [];
      this.poModalServer.close();
    }
    machineMemoryModal() {
      this.sTitleModal = this.sTitleMachineMem;
      this.modalItems = [];
      this.sCollectedModal = this.sCollectedMachine;
      this.modalItems.push({
        description: "total",
        memory: this.sTotalRAM,
        unit: this.sTotalRAMUnit
      });
      this.modalItems.push({
        description: this.literals.machineMemoryModalDescriptionUsed,
        memory: this.nUsedRam.toString().replace(this.regex, "$1."),
        unit: this.sUsedRamUnit
      });
      this.modalItems.push({
        description: this.literals.machineMemoryModalDescriptionFree,
        memory: this.nFreeRam.toString().replace(this.regex, "$1."),
        unit: this.sFreeRamUnit
      });
      this.poModalServer.open();
    }
    appMemoryModal() {
      this.sTitleModal = this.sTitleAppMem;
      this.modalItems = [];
      this.sCollectedModal = this.sCollectedAppServer;
      this.modalItems.push({
        description: this.literals.appserverMemoryModalDescriptionVirtual,
        memory: this.nMemoryVirtual.toString().replace(this.regex, "$1."),
        unit: this.sMemoryVirtualUnit
      });
      this.modalItems.push({
        description: this.literals.appserverMemoryModalDescriptionResident,
        memory: this.nMemoryResident.toString().replace(this.regex, "$1."),
        unit: this.sMemoryResidentUnit
      });
      this.poModalServer.open();
    }
    pagingMemoryModal() {
      this.sTitleModal = this.sTitlePM;
      this.modalItems = [];
      this.sCollectedModal = this.sCollectedPaging;
      this.modalItems.push({
        description: this.sDescriptionPMconfig,
        memory: this.nPagingMemoryConfigured.toString().replace(this.regex, "$1."),
        unit: this.sPagingMemoryConfiguredUnit
      });
      this.modalItems.push({
        description: this.sDescriptionPMuse,
        memory: this.nPagingMemoryUsed.toString().replace(this.regex, "$1."),
        unit: this.sPagingMemoryUsedUnit
      });
      this.modalItems.push({
        description: this.sDescriptionPMavailable,
        memory: this.nPagingMemoryAvailable.toString().replace(this.regex, "$1."),
        unit: this.sPagingMemoryAvailableUnit
      });
      this.poModalServer.open();
    }
    actionsMachineMemory(item) {
      let bShow = false;
      if (item == "Refresh") {
        this.getMemoryRAM();
        bShow = true;
      }
      if (item == "Hide") {
        this.viewMachineMemory = false;
        this.iconMachineMemory = "off";
      } else if (item == "Show" || bShow) {
        this.viewMachineMemory = true;
        this.iconMachineMemory = "on";
      }
    }
    actionsApplicationServerMemory(item) {
      let bShow = false;
      if (item == "Refresh") {
        this.getMemoryApp();
        bShow = true;
      }
      if (item == "Hide") {
        this.iconApplicationServerMemory = "off";
        this.viewApplicationServerMemory = false;
      } else if (item == "Show" || bShow) {
        this.iconApplicationServerMemory = "on";
        this.viewApplicationServerMemory = true;
      }
    }
    actionsPagingMemory(item) {
      let bShow = false;
      if (item == "Refresh") {
        this.getPagingMemory();
        bShow = true;
      }
      if (item == "Hide") {
        this.iconPagingMemory = "off";
        this.viewPagingMemory = false;
      } else if (item == "Show" || bShow) {
        this.iconPagingMemory = "on";
        this.viewPagingMemory = true;
      }
    }
    actionsThreadMemory(item) {
      let bShow = false;
      if (item == "Refresh") {
        this.getThreadMemory();
        bShow = true;
      }
      if (item == "Hide") {
        this.iconThreadMemory = "off";
        this.viewThreadMemory = false;
      } else if (item == "Show" || bShow) {
        this.iconThreadMemory = "on";
        this.viewThreadMemory = true;
      }
    }
    actionsFilesStartPath(item) {
      let bShow = false;
      if (item == "Refresh") {
        this.getStartPath();
        bShow = true;
      }
      if (item == "Hide") {
        this.iconFilesStartPath = "off";
        this.viewFilesStartPath = false;
      } else if (item == "Show" || bShow) {
        this.iconFilesStartPath = "on";
        this.viewFilesStartPath = true;
      }
    }
    actionsUsers(item) {
      let bShow = false;
      if (item == "Refresh") {
        this.getUsers();
        bShow = true;
      }
      if (item == "Hide") {
        this.iconUsers = "off";
        this.viewUsers = false;
      } else if (item == "Show" || bShow) {
        this.iconUsers = "on";
        this.viewUsers = true;
      }
    }
    actionsServerAll(item) {
      let bShow = false;
      if (item == "Refresh") {
        this.getMemoryRAM();
        this.getMemoryApp();
        this.getPagingMemory();
        this.getThreadMemory();
        this.getStartPath();
        this.getUsers();
        bShow = true;
      }
      if (bShow) {
        item = "Show";
      }
      if (item == "Show" || item == "Hide") {
        this.actionsMachineMemory(item);
        this.actionsApplicationServerMemory(item);
        this.actionsPagingMemory(item);
        this.actionsThreadMemory(item);
        this.actionsFilesStartPath(item);
        this.actionsUsers(item);
      }
    }
    ngOnDestroy() {
      this.destroy$.next(false);
      this.destroy$.unsubscribe();
    }
    static #_ = this.ɵfac = function AppserverComponent_Factory(t) {
      return new (t || AppserverComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_appserver_service__WEBPACK_IMPORTED_MODULE_0__.AppserverService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_po_ui_ng_components__WEBPACK_IMPORTED_MODULE_4__.PoI18nService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_components_header_services_header_service__WEBPACK_IMPORTED_MODULE_1__.HeaderService));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: AppserverComponent,
      selectors: [["app-appserver"]],
      viewQuery: function AppserverComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, 7);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.poModalServer = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.poModalDbAccess = _t.first);
        }
      },
      decls: 190,
      vars: 110,
      consts: [["p-no-border", "true", "p-no-padding", "false", "p-no-shadow", "false", 1, "po-md-12"], [1, "po-row"], ["p-active", "true", 3, "p-label"], ["p-no-padding", "yes", "p-no-border", "true", "p-height", "65", "p-no-shadow", "true", 1, "po-md-12"], [1, "po-row", "navBarCustom", "po-font-subtitle"], [1, "tittle_nav", "po-md-3", "po-sm-3"], [1, "po-icon", "po-icon-settings"], [1, "po-md-6", "po-sm-6"], [4, "ngIf", "ngIfElse"], [1, "icons_nav", "po-md-3", "po-sm-3"], [1, "po-icon", "po-icon-refresh", "icon_nav", 3, "p-tooltip", "click"], [1, "po-md-12"], ["p-no-padding", "yes", "p-no-border", "false", "p-no-shadow", "false", 1, "po-md-2"], [3, "p-label", "p-value", "p-valueChange"], [3, "p-label", "p-value", "p-type", "p-valueChange", "p-typeChange"], [1, "po-md-1"], ["p-no-padding", "yes", "p-no-border", "false", "p-no-shadow", "false", 1, "po-md-5"], [1, "po-font-subtitle"], [1, "po-icon", "po-icon-server"], [1, "po-md-4", 3, "p-label", "p-value", "p-valueChange"], [1, "po-md-8", 3, "p-label", "p-value", "p-valueChange"], [1, "po-icon", "po-icon-folder"], [1, "po-md-12", 3, "p-label", "p-value", "p-valueChange"], ["p-active", "false", 3, "p-label"], [1, "po-icon", "po-icon-eye-off", "icon_nav", 3, "p-tooltip", "click"], [1, "po-icon", "po-icon-eye", "icon_nav", 3, "p-tooltip", "click"], ["p-no-padding", "yes", "p-no-border", "false", "p-no-shadow", "false", 1, "po-md-4"], [1, "po-row", "navBarCustom", "po-font-text-large-bold"], [1, "tittle_nav", "po-md-9", "po-sm-9"], [1, "po-icon", "po-icon-grid"], [3, "ngSwitch"], ["class", "po-icon po-icon-eye-off icon_nav", 3, "p-tooltip", "click", 4, "ngSwitchCase"], ["class", "po-icon po-icon-eye icon_nav", 3, "p-tooltip", "click", 4, "ngSwitchCase"], [3, "hidden"], [1, "po-md-3", 3, "p-label", "p-value", "p-valueChange"], [1, "po-md-2", 3, "p-label", "p-value", "p-valueChange"], [1, "po-md-6", 3, "p-label", "p-value", "p-valueChange"], ["class", "po-md-12", 4, "ngIf", "ngIfElse"], ["p-no-padding", "yes", "p-no-border", "false", "p-no-shadow", "false", 1, "po-md-7"], [1, "po-icon", "po-icon-document-double"], [1, "po-row", "po-md-12"], ["p-no-padding", "yes", "p-no-border", "false", "p-no-shadow", "false", 1, "po-md-12"], [1, "po-icon", "po-icon-users"], [3, "p-title", "p-titleChange"], ["modalServer", ""], ["p-label", "Collected in: ", 1, "po-md-12", 3, "p-value", "p-valueChange"], ["p-container", "border", "p-striped", "true", "p-hide-columns-manager", "true", 1, "po-md-12", 3, "p-items"], ["p-disabled-align", "true"], ["p-label", "close", "p-kind", "primary", 3, "p-click"], ["notAvailable", ""], ["blank", ""], [1, "po-font-title", "po-text-center"], [1, "po-text-center"], [1, "po-md-12", 3, "p-title", "p-series", "p-titleChange", "p-series-click"], [1, "po-md-12", 3, "p-title", "p-options", "p-categories", "p-series", "p-titleChange", "p-series-click"], [1, "po-md-12", 3, "p-title", "p-series", "p-type", "p-titleChange", "p-series-click"], ["p-container", "shadow", "p-hide-columns-manager", "true", 1, "po-md-12", 3, "p-columns", "p-items"], [1, "po-md-5", 3, "p-series"], ["p-container", "shadow", "p-hide-columns-manager", "true", 1, "po-md-7", 3, "p-columns", "p-items"], [1, "po-md-6"], [1, "po-icon", "po-icon-user"], ["p-container", "shadow", "p-hide-columns-manager", "true", 1, "po-md-12", 3, "p-items"], ["p-height", "30", "p-no-border", "true", 1, "po-md-12"], [1, "po-text-center", "po-font-text-large-bold"], ["alt", "monitor api is not available", "height", "20px", 3, "src"]],
      template: function AppserverComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "po-container", 0)(1, "div", 1)(2, "po-tabs")(3, "po-tab", 2)(4, "po-container", 3)(5, "div", 4)(6, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "span", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, AppserverComponent_div_9_Template, 3, 0, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "span", 9)(11, "span")(12, "i", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppserverComponent_Template_i_click_12_listener() {
            return ctx.getAbaEnvironment();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 11)(14, "po-container", 12)(15, "div", 1)(16, "po-info", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("p-valueChange", function AppserverComponent_Template_po_info_p_valueChange_16_listener($event) {
            return ctx.sStartAppserver = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 1)(18, "po-tag", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("p-valueChange", function AppserverComponent_Template_po_tag_p_valueChange_18_listener($event) {
            return ctx.sHighPerformance = $event;
          })("p-typeChange", function AppserverComponent_Template_po_tag_p_typeChange_18_listener($event) {
            return ctx.sHighPerformanceType = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "po-container", 16)(21, "div", 1)(22, "div", 1)(23, "font", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "span", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "hr");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 1)(28, "po-info", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("p-valueChange", function AppserverComponent_Template_po_info_p_valueChange_28_listener($event) {
            return ctx.sVersionAppserver = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "po-info", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("p-valueChange", function AppserverComponent_Template_po_info_p_valueChange_29_listener($event) {
            return ctx.sNameAppserver = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 1)(31, "po-info", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("p-valueChange", function AppserverComponent_Template_po_info_p_valueChange_31_listener($event) {
            return ctx.sRevisionAppserver = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "po-info", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("p-valueChange", function AppserverComponent_Template_po_info_p_valueChange_32_listener($event) {
            return ctx.sVdrAppserver = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 1)(34, "po-info", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("p-valueChange", function AppserverComponent_Template_po_info_p_valueChange_34_listener($event) {
            return ctx.sDtBuildAppserver = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "po-info", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("p-valueChange", function AppserverComponent_Template_po_info_p_valueChange_35_listener($event) {
            return ctx.sHrBuildAppserver = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "po-container", 16)(38, "div", 1)(39, "font", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](40, "span", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](42, "hr");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 1)(44, "po-info", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("p-valueChange", function AppserverComponent_Template_po_info_p_valueChange_44_listener($event) {
            return ctx.sVersionTlppCore = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "po-info", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("p-valueChange", function AppserverComponent_Template_po_info_p_valueChange_45_listener($event) {
            return ctx.sNameTlppCore = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div", 1)(47, "po-info", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("p-valueChange", function AppserverComponent_Template_po_info_p_valueChange_47_listener($event) {
            return ctx.sRevisionTlppCore = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "div", 1)(49, "po-info", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("p-valueChange", function AppserverComponent_Template_po_info_p_valueChange_49_listener($event) {
            return ctx.sDtBuildTlppCore = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "po-info", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("p-valueChange", function AppserverComponent_Template_po_info_p_valueChange_50_listener($event) {
            return ctx.sHrBuildTlppCore = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "po-tab", 23)(52, "po-container", 3)(53, "div", 4)(54, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](55, "span", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](57, AppserverComponent_div_57_Template, 3, 0, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "span", 9)(59, "span")(60, "i", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppserverComponent_Template_i_click_60_listener() {
            return ctx.actionsServerAll("Refresh");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, "\u00A0 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "span", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppserverComponent_Template_span_click_62_listener() {
            return ctx.actionsServerAll("Hide");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63, "\u00A0 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "span", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppserverComponent_Template_span_click_64_listener() {
            return ctx.actionsServerAll("Show");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "div", 11)(66, "po-container", 26)(67, "div", 27)(68, "span", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](69, "span", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](70);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "span", 9)(72, "span")(73, "i", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppserverComponent_Template_i_click_73_listener() {
            return ctx.actionsMachineMemory("Refresh");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](74, " \u00A0 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "span", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](76, AppserverComponent_span_76_Template, 1, 1, "span", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](77, AppserverComponent_span_77_Template, 1, 1, "span", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "div", 1)(79, "div", 33)(80, "div", 1)(81, "po-info", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("p-valueChange", function AppserverComponent_Template_po_info_p_valueChange_81_listener($event) {
            return ctx.sCollectedMachine = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](82, AppserverComponent_div_82_Template, 8, 5, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](83, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "po-container", 26)(85, "div", 27)(86, "span", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](87, "span", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](88);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "span", 9)(90, "span")(91, "i", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppserverComponent_Template_i_click_91_listener() {
            return ctx.actionsApplicationServerMemory("Refresh");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](92, " \u00A0 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](93, "span", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](94, AppserverComponent_span_94_Template, 1, 1, "span", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](95, AppserverComponent_span_95_Template, 1, 1, "span", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](96, "div", 1)(97, "div", 33)(98, "div", 1)(99, "po-info", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("p-valueChange", function AppserverComponent_Template_po_info_p_valueChange_99_listener($event) {
            return ctx.sCollectedAppServer = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](100, AppserverComponent_div_100_Template, 2, 4, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](101, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](102, "po-container", 26)(103, "div", 27)(104, "span", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](105, "span", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](106);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](107, "span", 9)(108, "span")(109, "i", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppserverComponent_Template_i_click_109_listener() {
            return ctx.actionsPagingMemory("Refresh");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](110, " \u00A0 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](111, "span", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](112, AppserverComponent_span_112_Template, 1, 1, "span", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](113, AppserverComponent_span_113_Template, 1, 1, "span", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](114, "div", 1)(115, "div", 33)(116, "div", 1)(117, "po-info", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("p-valueChange", function AppserverComponent_Template_po_info_p_valueChange_117_listener($event) {
            return ctx.sCollectedPaging = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](118, AppserverComponent_div_118_Template, 2, 3, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](119, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](120, "\u00A0");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](121, "po-container", 16)(122, "div", 27)(123, "span", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](124, "span", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](125);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](126, "span", 9)(127, "span")(128, "i", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppserverComponent_Template_i_click_128_listener() {
            return ctx.actionsThreadMemory("Refresh");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](129, " \u00A0 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](130, "span", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](131, AppserverComponent_span_131_Template, 1, 1, "span", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](132, AppserverComponent_span_132_Template, 1, 1, "span", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](133, "div", 1)(134, "div", 33)(135, "div", 1)(136, "po-info", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("p-valueChange", function AppserverComponent_Template_po_info_p_valueChange_136_listener($event) {
            return ctx.sAverageMemory = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](137, "po-info", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("p-valueChange", function AppserverComponent_Template_po_info_p_valueChange_137_listener($event) {
            return ctx.sThreads = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](138, "po-info", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("p-valueChange", function AppserverComponent_Template_po_info_p_valueChange_138_listener($event) {
            return ctx.sCollectedThreads = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](139, AppserverComponent_div_139_Template, 2, 2, "div", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](140, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](141, "po-container", 38)(142, "div", 27)(143, "span", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](144, "span", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](145);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](146, "span", 9)(147, "span")(148, "i", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppserverComponent_Template_i_click_148_listener() {
            return ctx.actionsFilesStartPath("Refresh");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](149, " \u00A0 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](150, "span", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](151, AppserverComponent_span_151_Template, 1, 1, "span", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](152, AppserverComponent_span_152_Template, 1, 1, "span", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](153, "div", 40)(154, "div", 33)(155, "div", 40)(156, "po-info", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("p-valueChange", function AppserverComponent_Template_po_info_p_valueChange_156_listener($event) {
            return ctx.sAvgSystemFiles = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](157, "po-info", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("p-valueChange", function AppserverComponent_Template_po_info_p_valueChange_157_listener($event) {
            return ctx.sMaxSystemFiles = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](158, "po-info", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("p-valueChange", function AppserverComponent_Template_po_info_p_valueChange_158_listener($event) {
            return ctx.sCollectedFiles = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](159, AppserverComponent_div_159_Template, 3, 3, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](160, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](161, "\u00A0");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](162, "po-container", 41)(163, "div", 27)(164, "span", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](165, "span", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](166);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](167, "span", 9)(168, "span")(169, "i", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppserverComponent_Template_i_click_169_listener() {
            return ctx.actionsUsers("Refresh");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](170, " \u00A0 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](171, "span", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](172, AppserverComponent_span_172_Template, 1, 1, "span", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](173, AppserverComponent_span_173_Template, 1, 1, "span", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](174, "div", 33)(175, "div", 1)(176, "po-info", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("p-valueChange", function AppserverComponent_Template_po_info_p_valueChange_176_listener($event) {
            return ctx.sCollectedUsers = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](177, AppserverComponent_div_177_Template, 16, 5, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](178, "po-modal", 43, 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("p-titleChange", function AppserverComponent_Template_po_modal_p_titleChange_178_listener($event) {
            return ctx.sTitleModal = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](180, "div", 1)(181, "po-info", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("p-valueChange", function AppserverComponent_Template_po_info_p_valueChange_181_listener($event) {
            return ctx.sCollectedModal = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](182, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](183, "po-table", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](184, "po-modal-footer", 47)(185, "po-button", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("p-click", function AppserverComponent_Template_po_button_p_click_185_listener() {
            return ctx.closeModal();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](186, AppserverComponent_ng_template_186_Template, 5, 2, "ng-template", null, 49, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](188, AppserverComponent_ng_template_188_Template, 1, 0, "ng-template", null, 50, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        }
        if (rf & 2) {
          const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](187);
          const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](189);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("p-label", ctx.literals.tabLabelEnvironmentInfos);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.stateEnvironment === "on" || ctx.stateMachineMemory === "on" || ctx.stateAppMem === "on" || ctx.statePM === "on" || ctx.stateThreadMemory === "on" || ctx.stateStartPath === "on" || ctx.stateUsers === "on")("ngIfElse", _r21);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("p-tooltip", ctx.literals.tooltipRefreshIconEnvironment);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("p-label", ctx.literals.infoLabelServerStarted);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("p-value", ctx.sStartAppserver);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("p-label", ctx.literals.tabLabelHighPerformance);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("p-value", ctx.sHighPerformance)("p-type", ctx.sHighPerformanceType);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.literals.iconServer, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("p-label", ctx.literals.infoLabelServerVersion);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("p-value", ctx.sVersionAppserver);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("p-label", ctx.literals.infoLabelServerName);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("p-value", ctx.sNameAppserver);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("p-label", ctx.literals.infoLabelServerRevision);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("p-value", ctx.sRevisionAppserver);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("p-label", ctx.literals.infoLabelServerRevisionVdr);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("p-value", ctx.sVdrAppserver);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("p-label", ctx.literals.infoLabelServerBuildDate);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("p-value", ctx.sDtBuildAppserver);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("p-label", ctx.literals.infoLabelServerBuildTime);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("p-value", ctx.sHrBuildAppserver);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.literals.iconTlppCore, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("p-label", ctx.literals.infoLabelTlppCoreVersion);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("p-value", ctx.sVersionTlppCore);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("p-label", ctx.literals.infoLabelTlppCoreName);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("p-value", ctx.sNameTlppCore);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("p-label", ctx.literals.infoLabelTlppCoreRevision);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("p-value", ctx.sRevisionTlppCore);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("p-label", ctx.literals.infoLabelTlppCoreBuildDate);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("p-value", ctx.sDtBuildTlppCore);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("p-label", ctx.literals.infoLabelTlppCoreBuildTime);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("p-value", ctx.sHrBuildTlppCore);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("p-label", ctx.literals.tabLabelServer);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.stateEnvironment === "on" || ctx.stateMachineMemory === "on" || ctx.stateAppMem === "on" || ctx.statePM === "on" || ctx.stateThreadMemory === "on" || ctx.stateStartPath === "on" || ctx.stateUsers === "on")("ngIfElse", _r21);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("p-tooltip", ctx.literals.tooltipRefreshIconServerAll);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("p-tooltip", ctx.literals.tooltipCollapseIconServerAll);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("p-tooltip", ctx.literals.tooltipExpandIconServerAll);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.literals.iconMachineMemory, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("p-tooltip", ctx.literals.tooltipMachineMemoryRefreshThis);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitch", ctx.iconMachineMemory);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "on");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "off");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", !ctx.viewMachineMemory);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("p-label", ctx.literals.infoLabelMachineMemoryCollectedIn);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("p-value", ctx.sCollectedMachine);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.stateMachineMemory === "on")("ngIfElse", _r23);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.literals.iconAppserverMemory, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("p-tooltip", ctx.literals.tooltipAppserverMemoryRefreshThis);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitch", ctx.iconApplicationServerMemory);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "on");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "off");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", !ctx.viewApplicationServerMemory);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("p-label", ctx.literals.infoLabelAppserverMemoryCollectedIn);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("p-value", ctx.sCollectedAppServer);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.stateAppMem === "on")("ngIfElse", _r23);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.literals.iconPagingMemory, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("p-tooltip", ctx.literals.tooltipPagingMemoryRefreshThis);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitch", ctx.iconPagingMemory);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "on");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "off");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", !ctx.viewPagingMemory);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("p-label", ctx.literals.infoLabelPagingMemoryCollectedIn);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("p-value", ctx.sCollectedPaging);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.statePM === "on")("ngIfElse", _r23);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.literals.iconThreadMemory, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("p-tooltip", ctx.literals.tooltipThreadMemoryRefreshThis);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitch", ctx.iconThreadMemory);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "on");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "off");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", !ctx.viewThreadMemory);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("p-label", ctx.literals.infoLabelThreadMemoryAvg);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("p-value", ctx.sAverageMemory);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("p-label", ctx.literals.infoLabelThreadMemoryThreads);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("p-value", ctx.sThreads);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("p-label", ctx.literals.infoLabelThreadMemoryCollectedIn);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("p-value", ctx.sCollectedThreads);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.stateThreadMemory === "on")("ngIfElse", _r23);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.literals.iconNumberFilesStartPath, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("p-tooltip", ctx.literals.tooltipNumberFilesStartPathRefreshThis);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitch", ctx.iconFilesStartPath);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "on");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "off");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", !ctx.viewFilesStartPath);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("p-label", ctx.literals.infoLabelNumberFilesStartPathAvg);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("p-value", ctx.sAvgSystemFiles);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("p-label", ctx.literals.infoLabelNumberFilesStartPathMaxSystemFiles);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("p-value", ctx.sMaxSystemFiles);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("p-label", ctx.literals.infoLabelNumberFilesStartPathCollectedIn);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("p-value", ctx.sCollectedFiles);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.stateStartPath === "on")("ngIfElse", _r23);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.literals.iconUsersConnected, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("p-tooltip", ctx.literals.tooltipUsersConnectedRefreshThis);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitch", ctx.iconUsers);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "on");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "off");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", !ctx.viewUsers);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("p-label", ctx.literals.infoLabelUsersConnectedCollectedIn);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("p-value", ctx.sCollectedUsers);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.stateUsers === "on")("ngIfElse", _r23);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("p-title", ctx.sTitleModal);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("p-value", ctx.sCollectedModal);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("p-items", ctx.modalItems);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgSwitchCase, _po_ui_ng_components__WEBPACK_IMPORTED_MODULE_4__.PoButtonComponent, _po_ui_ng_components__WEBPACK_IMPORTED_MODULE_4__.PoChartComponent, _po_ui_ng_components__WEBPACK_IMPORTED_MODULE_4__.PoContainerComponent, _po_ui_ng_components__WEBPACK_IMPORTED_MODULE_4__.PoInfoComponent, _po_ui_ng_components__WEBPACK_IMPORTED_MODULE_4__.PoModalComponent, _po_ui_ng_components__WEBPACK_IMPORTED_MODULE_4__.PoModalFooterComponent, _po_ui_ng_components__WEBPACK_IMPORTED_MODULE_4__.PoTableComponent, _po_ui_ng_components__WEBPACK_IMPORTED_MODULE_4__.PoTabComponent, _po_ui_ng_components__WEBPACK_IMPORTED_MODULE_4__.PoTabsComponent, _po_ui_ng_components__WEBPACK_IMPORTED_MODULE_4__.PoTagComponent, _po_ui_ng_components__WEBPACK_IMPORTED_MODULE_4__.PoWidgetComponent, _po_ui_ng_components__WEBPACK_IMPORTED_MODULE_4__.PoTooltipDirective],
      styles: [".navBarCustom[_ngcontent-%COMP%]{\r\n  height: 30px;\r\n}\r\n.tittle_nav[_ngcontent-%COMP%]{\r\n  padding-top: 3px; \r\n  height: 100%;\r\n}\r\n.icons_nav[_ngcontent-%COMP%]{\r\n  text-align: right;\r\n  padding-top: 3px;\r\n  height: 100%;\r\n}\r\n.icon_nav[_ngcontent-%COMP%]{\r\n  cursor: pointer;\r\n  color: black;\r\n  height: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9uaXRvci9jb21wb25lbnRzL2FwcHNlcnZlci9hcHBzZXJ2ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7QUFDQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osWUFBWTtBQUNkIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdkJhckN1c3RvbXtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbn1cclxuLnRpdHRsZV9uYXZ7XHJcbiAgcGFkZGluZy10b3A6IDNweDsgXHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbi5pY29uc19uYXZ7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgcGFkZGluZy10b3A6IDNweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuLmljb25fbmF2e1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
  return AppserverComponent;
})();

/***/ }),

/***/ 72886:
/*!*******************************************************************!*\
  !*** ./src/app/monitor/components/dbaccess/dbaccess.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DbaccessComponent": () => (/* binding */ DbaccessComponent)
/* harmony export */ });
/* harmony import */ var _po_ui_ng_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @po-ui/ng-components */ 22400);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _service_dbaccess_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../service/dbaccess.service */ 82970);
/* harmony import */ var src_app_core_services_environment_environments_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/environment/environments.service */ 90156);
/* harmony import */ var src_app_shared_components_header_services_header_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/components/header/services/header.service */ 99035);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);









function DbaccessComponent_div_3_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const details_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](details_r10);
  }
}
function DbaccessComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "po-widget", 14)(2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, DbaccessComponent_div_3_div_5_Template, 3, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r0.literals.widgetDetailsTitle, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.aDetails);
  }
}
function DbaccessComponent_ng_template_14_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "po-loading-overlay", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("p-text", ctx_r12.literals.loadinOverlayText);
  }
}
function DbaccessComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, DbaccessComponent_ng_template_14_div_0_Template, 2, 1, "div", 3);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.state === "loading")("ngIfElse", _r3);
  }
}
function DbaccessComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "po-container", 21)(3, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r4.disconnectedIcon, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r4.literals.notConnectedMessage, " ");
  }
}
function DbaccessComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "po-chart", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("p-title", ctx_r6.titleOfGraphic)("p-series", ctx_r6.rangeOfGraphic)("p-type", ctx_r6.graphicConsumingChartType);
  }
}
function DbaccessComponent_div_22_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "po-info", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const row_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("p-value", row_r14[1]);
  }
}
function DbaccessComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, DbaccessComponent_div_22_div_1_Template, 3, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r7.modalRow);
  }
}
function DbaccessComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "po-input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function DbaccessComponent_div_23_Template_po_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r16.paramOfSlot = $event);
    })("p-change", function DbaccessComponent_div_23_Template_po_input_p_change_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r17);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r18.closeModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("p-label", ctx_r8.modalInputLabel)("ngModel", ctx_r8.paramOfSlot);
  }
}
const filterItemsOfConnection = items => items.status === "1" && items.category === "connections";
const filterItemsOfComsuption = items => items.status === "1" && (items.category == "memory" || items.category == "cpu");
const filterItemsOfOthers = items => items.status === "1" && items.category === "latency";
const filterItemsOfGenerics = items => items.status === "0" && items.slot >= 400;
const filterOfStatic = items => items.status === "0" && !(items.slot === 0);
const filterOfCheckup = items => items.status === "0" && items.category === "checkup";
const filterDetailsOfCheckup = items => items.status === "2" && items.category === "checkup" && items.subslot > 0;
const oSlotsWithParams = {
  11: "Connection",
  12: "Seconds",
  14: "Conection Nro",
  24: "Table",
  430: "Pings"
};
let DbaccessComponent = /*#__PURE__*/(() => {
  class DbaccessComponent {
    constructor(dbaccessService, environmentsService, i18nService, headerService) {
      this.dbaccessService = dbaccessService;
      this.environmentsService = environmentsService;
      this.i18nService = i18nService;
      this.headerService = headerService;
      this.headerData = {
        title: "DBAccess Monitor",
        icon: "po-icon po-icon-device-database",
        routeUrl: "/dbaccess"
      };
      this.state = "loading";
      this.dbAccessLogoMarca = "assets/totvstec-icon.png";
      this.disconnectedIcon = "assets/disconnect-icon.jpg";
      this.environmentInUse = "";
      this.paramOfSlot = "";
      this.columnsOfSlots = [];
      this.columnsOfCheckup = [];
      this.aDetails = [];
      this.environments = [];
      this.modalTemplate = "graphic";
      this.modalTitle = "Graphic";
      this.modalInputLabel = "";
      this.rangeOfGraphic = [];
      this.graphicConsumingChartType = _po_ui_ng_components__WEBPACK_IMPORTED_MODULE_4__.PoChartType.Donut;
      /*-- Unsubscribe --*/
      this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
      this.i18nService.getLiterals({
        context: "dbaccess",
        language: this.i18nService.getLanguage()
      }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.destroy$)).subscribe(literals => this.literals = literals);
      this.headerService.setheaderData(this.headerData);
    }
    ngOnInit() {
      this.close = {
        action: () => {
          this.closeModal();
        },
        label: this.literals.poModalActionClose
      };
      this.columnsOfCheckup = [{
        property: "description",
        label: this.literals.columnsOfCheckupLabelDescription,
        type: "string",
        width: "50%"
      }, {
        property: "status",
        label: this.literals.columnsOfCheckupLabelStatus,
        type: "icon",
        width: "10%",
        sortable: false,
        icons: [{
          action: this.getDetailsOfCheckup.bind(this),
          icon: "po-icon-exclamation",
          tooltip: this.literals.columnsOfCheckupTooltipStatus,
          value: "0"
        }]
      }];
      this.columnsOfSlots = [{
        property: "slot",
        label: this.literals.columnsOfSlotsLabelSlot,
        type: "number",
        width: "5%"
      }, {
        property: "description",
        label: this.literals.columnsOfSlotsLabelDescription,
        type: "string",
        width: "45%"
      }, {
        property: "value",
        label: this.literals.columnsOfSlotsLabelValue,
        type: "string",
        width: "40%"
      }, {
        property: "param",
        label: this.literals.columnsOfSlotsLabelParam,
        type: "string",
        width: "10%",
        visible: false
      }, {
        property: "status",
        label: this.literals.columnsOfSlotsLabelRefresh,
        type: "icon",
        width: "10%",
        sortable: false,
        icons: [{
          action: this.getSlotRefresh.bind(this),
          icon: "po-icon-refresh",
          tooltip: this.literals.columnsOfSlotsTooltipRefresh,
          value: "1"
        }]
      }, {
        property: "haveparam",
        label: this.literals.columnsOfSlotsLabelParam,
        type: "icon",
        width: "10%",
        sortable: false,
        icons: [{
          action: this.getSlotParam.bind(this),
          icon: "po-icon-parameters",
          tooltip: this.literals.columnsOfSlotsTooltipParam,
          value: "true"
        }]
      }, {
        property: "haveagraphic",
        label: this.literals.columnsOfSlotsLabelGraphic,
        type: "icon",
        width: "5%",
        sortable: false,
        icons: [{
          action: this.goToGraphic.bind(this),
          icon: "po-icon-chart-area",
          tooltip: this.literals.columnsOfSlotsTooltipGraphic,
          value: "true"
        }]
      }];
      this.getEnvironments();
    }
    getEnvironments() {
      let find = false;
      this.environments = JSON.parse(this.environmentsService.environments);
      this.environmentInUse = this.environmentsService.environmentInUse;
      this.environments.forEach(item => {
        item.value == this.environmentInUse ? find = true : "";
      });
      if (!find && this.environments.length > 0) {
        this.environmentInUse = this.environments[0].value.toString();
      }
      this.getInformations();
    }
    getInformations() {
      this.dbaccessService.getInfosOfApis(this.environmentInUse).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.destroy$)).subscribe({
        next: items => {
          this.state = "on";
          this.itemsOfConnections = items["retSlotsInfos"].filter(filterItemsOfConnection);
          this.itemsOfConsumption = items["retSlotsInfos"].filter(filterItemsOfComsuption);
          this.itemsOfOthers = items["retSlotsInfos"].filter(filterItemsOfOthers);
          this.itemsOfOthers = this.itemsOfOthers.concat(items["retGenericInfos"].filter(filterItemsOfGenerics));
          this.itemsOfOthers = this.itemsOfOthers.concat(items["retTcPingInfos"]);
          this.itemsOfCheckup = items["retCheckupInfos"].filter(filterOfCheckup);
          this.itemsDetailsOfCheckup = items["retCheckupInfos"].filter(filterDetailsOfCheckup);
          items["retSlotsInfos"].filter(filterOfStatic).map(m => this.handlingReturn(m.value, m.slot));
        },
        error: () => {
          this.state = "error";
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)();
        }
      });
    }
    getSlotParam(row) {
      if (row.haveparam === "true") {
        this.modalTemplate = "input";
        this.modalInputLabel = oSlotsWithParams[row.slot];
        this.modalTitle = oSlotsWithParams[row.slot];
        this.slotNumber = row.slot;
        this.poModal.open();
      }
    }
    getSlotRefresh(row) {
      if (row.slot === 430) {
        this.dbaccessService.getTcPingInfos(this.environmentInUse, row.slot, this.paramOfSlot).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.destroy$)).subscribe({
          next: items => {
            this.valueOfRow = items[0].value;
          },
          error: error => {
            console.error(error);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)();
          }
        });
      } else {
        this.dbaccessService.getSlotsInfos(this.environmentInUse, row.slot, this.paramOfSlot).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.destroy$)).subscribe({
          next: items => {
            this.valueOfRow = items[0].value;
          },
          error: error => {
            console.error(error);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)();
          }
        });
      }
      this.paramOfSlot = "";
    }
    handlingReturn(message = "", slot = 99) {
      let aSlot1 = ["", "DBApiBuild: ", "Configuration: ", "Architecture: ", "Api "];
      let aAuxSplit = [];
      let reSeparator = /\s-\s/;
      let reBreakLine = /\r\n|\r|\n|\sBuild\s/g;
      message = message.replace(reBreakLine, " ");
      if (slot === 1) {
        aAuxSplit = message.split(reSeparator);
        for (let i = 0; i < aAuxSplit.length; i++) {
          this.aDetails.push(aSlot1[i] + aAuxSplit[i]);
        }
      }
      if (slot === 21) this.aDetails.push(`DbAuditTrail: ${message === "0" ? "OFF" : "ON"}`);
      if (slot === 22) this.aDetails.push(`MaxStringSize: ${message}bytes`);
      if (slot === 25) this.aDetails.push(`DataReadOnly: ${message ? "ON" : "OFF"}`);
      if (slot === 26) this.aDetails.push(`ReadOnly: ${message ? "ON" : "OFF"}`);
    }
    goToGraphic(row) {
      let valueInNumber = parseInt(row.value);
      this.titleOfGraphic = this.literals.titleOfGraphicCpuInUse;
      this.rangeOfGraphic = [{
        label: this.literals.rangeOfGraphicLabelUsedCpu,
        data: valueInNumber,
        tooltip: this.literals.rangeOfGraphicTooltipUsedCpu
      }, {
        label: this.literals.rangeOfGraphicLabelFreeCpu,
        data: 100 - valueInNumber,
        tooltip: this.literals.rangeOfGraphicTooltipFreeCpu
      }];
      this.poModal.open();
    }
    getDetailsOfCheckup(row) {
      this.modalTemplate = "detail";
      this.modalTitle = row.description;
      this.modalRow = this.itemsDetailsOfCheckup.filter(f => f.slot === row.slot).map(item => [item.description, item.value]);
      this.poModal.open();
    }
    closeModal() {
      this.poModal.close();
    }
    ngOnDestroy() {
      this.destroy$.next(false);
      this.destroy$.unsubscribe();
    }
    static #_ = this.ɵfac = function DbaccessComponent_Factory(t) {
      return new (t || DbaccessComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_service_dbaccess_service__WEBPACK_IMPORTED_MODULE_0__.DbaccessService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_services_environment_environments_service__WEBPACK_IMPORTED_MODULE_1__.EnvironmentsService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_po_ui_ng_components__WEBPACK_IMPORTED_MODULE_4__.PoI18nService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_components_header_services_header_service__WEBPACK_IMPORTED_MODULE_2__.HeaderService));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: DbaccessComponent,
      selectors: [["app-dbaccess"]],
      viewQuery: function DbaccessComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_po_ui_ng_components__WEBPACK_IMPORTED_MODULE_4__.PoModalComponent, 7);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.poModal = _t.first);
        }
      },
      decls: 24,
      vars: 39,
      consts: [[1, "po-row"], [1, "po-xl-4", "po-lg-4", "po-md-4", "po-sm-4"], ["name", "environment", "p-required", "", 3, "ngModel", "p-label", "p-options", "ngModelChange", "p-change"], [4, "ngIf", "ngIfElse"], ["p-active", "", 3, "p-label"], ["p-height", "350", 3, "p-auto-collapse", "p-columns", "p-hide-columns-manager", "p-items", "p-sort", "p-striped"], [3, "p-label"], [3, "p-auto-collapse", "p-columns", "p-hide-columns-manager", "p-items", "p-sort", "p-striped"], ["dbAccessIsOf", ""], ["notConnected", ""], ["p-click-out", "false", "p-size", "auto", "p-click-out", "false", 3, "p-title", "p-secondary-action"], ["modal", ""], [3, "ngSwitch"], [4, "ngSwitchCase"], ["p-height", "290", "p-primary", "true"], [1, "po-text-center", "po-font-subtitle"], [1, "po-icon", "po-icon-info"], [4, "ngFor", "ngForOf"], [1, "po-font-text", "po-text-center"], ["p-screen-lock", "false", 3, "p-text"], [1, "po-xl-2", "po-lg-2", "po-md-2", "po-sm-2"], ["p-height", "300", "p-no-border", "true"], [1, "po-text-center", "po-font-display"], ["alt", "DbAccess is not connected", "height", "100px", 3, "src"], [1, "po-lg-12", 3, "p-title", "p-series", "p-type"], ["p-label", "{{", "row[0]", "", "}}", "", "p-orientation", "horizontal", 1, "po-md-6", 3, "p-value"], ["name", "paramOfSlot", 3, "p-label", "ngModel", "ngModelChange", "p-change"]],
      template: function DbaccessComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "po-select", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function DbaccessComponent_Template_po_select_ngModelChange_2_listener($event) {
            return ctx.environmentInUse = $event;
          })("p-change", function DbaccessComponent_Template_po_select_p_change_2_listener() {
            return ctx.getInformations();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, DbaccessComponent_div_3_Template, 6, 2, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 0)(5, "po-tabs")(6, "po-tab", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "po-table", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "po-tab", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "po-table", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "po-tab", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "po-table", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "po-tab", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "po-table", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, DbaccessComponent_ng_template_14_Template, 1, 2, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, DbaccessComponent_ng_template_16_Template, 7, 2, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "po-modal", 10, 11)(20, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, DbaccessComponent_div_21_Template, 2, 3, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, DbaccessComponent_div_22_Template, 2, 1, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, DbaccessComponent_div_23_Template, 2, 2, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("p-label", ctx.literals.selectLabelEnvironment);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.environmentInUse)("p-options", ctx.environments);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.state === "on")("ngIfElse", _r1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("p-label", ctx.literals.tabLabelConnections);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("p-auto-collapse", true)("p-columns", ctx.columnsOfSlots)("p-hide-columns-manager", true)("p-items", ctx.itemsOfConnections)("p-sort", true)("p-striped", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("p-label", ctx.literals.tabLabelConsuption);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("p-auto-collapse", true)("p-columns", ctx.columnsOfSlots)("p-hide-columns-manager", true)("p-items", ctx.itemsOfConsumption)("p-sort", true)("p-striped", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("p-label", ctx.literals.tabLabelCheckup);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("p-auto-collapse", true)("p-columns", ctx.columnsOfCheckup)("p-hide-columns-manager", true)("p-items", ctx.itemsOfCheckup)("p-sort", true)("p-striped", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("p-label", ctx.literals.tabLabelOthers);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("p-auto-collapse", true)("p-columns", ctx.columnsOfSlots)("p-hide-columns-manager", true)("p-items", ctx.itemsOfOthers)("p-sort", true)("p-striped", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("p-title", ctx.modalTitle)("p-secondary-action", ctx.secondaryActionLabel ? ctx.close : null);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitch", ctx.modalTemplate);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", "graphic");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", "detail");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", "input");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgSwitchCase, _po_ui_ng_components__WEBPACK_IMPORTED_MODULE_4__.PoChartComponent, _po_ui_ng_components__WEBPACK_IMPORTED_MODULE_4__.PoContainerComponent, _po_ui_ng_components__WEBPACK_IMPORTED_MODULE_4__.PoInputComponent, _po_ui_ng_components__WEBPACK_IMPORTED_MODULE_4__.PoSelectComponent, _po_ui_ng_components__WEBPACK_IMPORTED_MODULE_4__.PoInfoComponent, _po_ui_ng_components__WEBPACK_IMPORTED_MODULE_4__.PoLoadingOverlayComponent, _po_ui_ng_components__WEBPACK_IMPORTED_MODULE_4__.PoModalComponent, _po_ui_ng_components__WEBPACK_IMPORTED_MODULE_4__.PoTableComponent, _po_ui_ng_components__WEBPACK_IMPORTED_MODULE_4__.PoTabComponent, _po_ui_ng_components__WEBPACK_IMPORTED_MODULE_4__.PoTabsComponent, _po_ui_ng_components__WEBPACK_IMPORTED_MODULE_4__.PoWidgetComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel],
      styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
  return DbaccessComponent;
})();

/***/ }),

/***/ 68036:
/*!**********************************************!*\
  !*** ./src/app/monitor/i18n/appserver-en.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appserverEn": () => (/* binding */ appserverEn)
/* harmony export */ });
const appserverEn = {
  title: "Appserver Monitor",
  messageMonitorIsNotAvailable: "Monitoring Api is not available",
  tabLabelEnvironmentInfos: "Environment Infos",
  tooltipRefreshIconEnvironment: "Refresh",
  infoLabelServerStarted: "Server Started in: ",
  tabLabelHighPerformance: "High Performance",
  sHighPerformanceUnknow: "unknown",
  sHighPerformanceTypeInfo: "info",
  sHighPerformanceTypeSuccess: "success",
  sHighPerformanceTypeWarning: "warning",
  iconServer: "Appserver",
  infoLabelServerVersion: "Version: ",
  infoLabelServerName: "Name: ",
  infoLabelServerRevision: "Revision: ",
  infoLabelServerRevisionVdr: "Revision (vdr)",
  infoLabelServerBuildDate: "Build Date",
  infoLabelServerBuildTime: "Build Time",
  iconTlppCore: "TLPPCore",
  infoLabelTlppCoreVersion: "Version: ",
  infoLabelTlppCoreName: "Name: ",
  infoLabelTlppCoreRevision: "Revision: ",
  infoLabelTlppCoreBuildDate: "Build Date: ",
  infoLabelTlppCoreBuildTime: "Build Time: ",
  tabLabelServer: "Appserver",
  tooltipRefreshIconServerAll: "Refresh All",
  tooltipCollapseIconServerAll: "Collapse All",
  tooltipExpandIconServerAll: "Expand All",
  iconMachineMemory: "Machine Memory",
  tooltipMachineMemoryRefreshThis: "Refresh this",
  tooltipMachineMemoryCollapseThis: "Collapse this",
  tooltipMachineMemoryExpandThis: "Expand this",
  infoLabelMachineMemoryCollectedIn: "Collected in: ",
  widgetMachineMemoryText: "Total amount of RAM memory installed on the machine",
  chartTitleMachineMemory: "Machine RAM memory usage",
  machineMemoryModalDescriptionUsed: "used",
  machineMemoryModalDescriptionFree: "free",
  memoryRAMLabelUsed: "used",
  memoryRAMLabelFree: "free",
  memoryRAMToolMemoryUsed: "Memory used: ",
  memoryRAMToolMemoryFree: "Memory free: ",
  iconAppserverMemory: "Appserver Memory",
  tooltipAppserverMemoryRefreshThis: "Refresh this",
  tooltipAppserverMemoryCollapseThis: "Collapse this",
  tooltipAppserverMemoryExpandThis: "Expand this",
  infoLabelAppserverMemoryCollectedIn: "Collected in: ",
  chartTitleAppServerMemory: "Values of memories used by TOTVS Application Server",
  appserverMemoryModalDescriptionVirtual: "virtual",
  appserverMemoryModalDescriptionResident: "resident",
  memoryResidentVirtualTooltipResident: "Memory resident at appserver: ",
  memoryResidentVirtualTooltipVirtual: "Memory virtual at appserver: ",
  iconPagingMemory: "Paging Memory",
  tooltipPagingMemoryRefreshThis: "Refresh this",
  tooltipPagingMemoryCollapseThis: "Collapse this",
  tooltipPagingMemoryExpandThis: "Expand this",
  infoLabelPagingMemoryCollectedIn: "Collected in: ",
  chartTitlePagingMemory: "Paging Memory Values on the machine in use",
  sDescriptionPMconfig: "Paging memory configured on the machine",
  sDescriptionPMuse: "Paging memory used in the machine",
  sDescriptionPMavailable: "Paging memory available for use",
  pagingMemoryDataLabelConfigured: "configured",
  pagingMemoryDataLabelUsed: "used",
  pagingMemoryDataLabelAvailable: "available",
  iconThreadMemory: "Thread Memory",
  tooltipThreadMemoryRefreshThis: "Refresh this",
  tooltipThreadMemoryCollapseThis: "Collapse this",
  tooltipThreadMemoryExpandThis: "Expand this",
  infoLabelThreadMemoryAvg: "Avg. memory: ",
  infoLabelThreadMemoryThreads: "Threads: ",
  infoLabelThreadMemoryCollectedIn: "Collected in: ",
  iconNumberFilesStartPath: "Number of files in startPath",
  tooltipNumberFilesStartPathRefreshThis: "Refresh this",
  tooltipNumberFilesStartPathCollapseThis: "Collapse this",
  tooltipNumberFilesStartPathExpandThis: "Expand this",
  infoLabelNumberFilesStartPathAvg: "Avg System Files: ",
  infoLabelNumberFilesStartPathMaxSystemFiles: "Max System Files: ",
  infoLabelNumberFilesStartPathCollectedIn: "Collected in: ",
  iconUsersConnected: "Number of users connected",
  tooltipUsersConnectedRefreshThis: "Refresh this",
  tooltipUsersConnectedCollapseThis: "Collapse this",
  tooltipUsersConnectedExpandThis: "Expand this",
  infoLabelUsersConnectedCollectedIn: "Collected in: ",
  textUsersConnectedTotalConnectionsUsers: "Total connections made per user",
  textUsersConnectedUniqueUsersLogged: "Number of unique users logged in"
};

/***/ }),

/***/ 64780:
/*!**********************************************!*\
  !*** ./src/app/monitor/i18n/appserver-pt.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appserverPt": () => (/* binding */ appserverPt)
/* harmony export */ });
const appserverPt = {
  title: "Appserver Monitor",
  messageMonitorIsNotAvailable: "API de monitoramento não está disponível",
  tabLabelEnvironmentInfos: "Informações do Ambiente",
  tooltipRefreshIconEnvironment: "Atualizar",
  infoLabelServerStarted: "Servidor iniciado em: ",
  tabLabelHighPerformance: "Performance",
  sHighPerformanceUnknow: "Desconhecido",
  sHighPerformanceTypeInfo: "info",
  sHighPerformanceTypeSuccess: "success",
  sHighPerformanceTypeWarning: "warning",
  iconServer: "Appserver",
  infoLabelServerVersion: "Versão: ",
  infoLabelServerName: "Nome: ",
  infoLabelServerRevision: "Revisão: ",
  infoLabelServerRevisionVdr: "Revisão (vdr)",
  infoLabelServerBuildDate: "Build Data",
  infoLabelServerBuildTime: "Build Hora",
  iconTlppCore: "TLPPCore",
  infoLabelTlppCoreVersion: "Versão: ",
  infoLabelTlppCoreName: "Nome: ",
  infoLabelTlppCoreRevision: "Revisão: ",
  infoLabelTlppCoreBuildDate: "Build Data: ",
  infoLabelTlppCoreBuildTime: "Build Hora: ",
  tabLabelServer: "Appserver",
  tooltipRefreshIconServerAll: "Atualizar Tudo",
  tooltipCollapseIconServerAll: "Esconder Tudo",
  tooltipExpandIconServerAll: "Expandir Tudo",
  iconMachineMemory: "Memória da Maquina",
  tooltipMachineMemoryRefreshThis: "Atualizar",
  tooltipMachineMemoryCollapseThis: "Esconder",
  tooltipMachineMemoryExpandThis: "Expandir",
  infoLabelMachineMemoryCollectedIn: "Coletado em: ",
  widgetMachineMemoryText: "Total de memória RAM instalado na maquina",
  chartTitleMachineMemory: "Memória RAM utilizada",
  machineMemoryModalDescriptionUsed: "usado",
  machineMemoryModalDescriptionFree: "livre",
  memoryRAMLabelUsed: "usado",
  memoryRAMLabelFree: "livre",
  memoryRAMToolMemoryUsed: "Memória usada: ",
  memoryRAMToolMemoryFree: "Memória livre: ",
  iconAppserverMemory: "Memória do Appserver",
  tooltipAppserverMemoryRefreshThis: "Atualizar",
  tooltipAppserverMemoryCollapseThis: "Esconder",
  tooltipAppserverMemoryExpandThis: "Expandir",
  infoLabelAppserverMemoryCollectedIn: "Coletado em: ",
  chartTitleAppServerMemory: "Valores de utilização de memória do TOTVS Application Server",
  appserverMemoryModalDescriptionVirtual: "virtual",
  appserverMemoryModalDescriptionResident: "residente",
  memoryResidentVirtualTooltipResident: "Memoria residente do appserver: ",
  memoryResidentVirtualTooltipVirtual: "Memoria virtual do appserver: ",
  iconPagingMemory: "Memória de Paginação",
  tooltipPagingMemoryRefreshThis: "Atualizar",
  tooltipPagingMemoryCollapseThis: "Esconder",
  tooltipPagingMemoryExpandThis: "Expandir",
  infoLabelPagingMemoryCollectedIn: "Coletado em: ",
  chartTitlePagingMemory: "Memória de paginação da maquina em uso",
  sDescriptionPMconfig: "Memória de paginação configurada na máquina",
  sDescriptionPMuse: "Memória de paginação usada na maquina",
  sDescriptionPMavailable: "Memória de paginação disponível para uso",
  pagingMemoryDataLabelConfigured: "configurada",
  pagingMemoryDataLabelUsed: "utilizada",
  pagingMemoryDataLabelAvailable: "disponível",
  iconThreadMemory: "Memória das Threads",
  tooltipThreadMemoryRefreshThis: "Atualizar",
  tooltipThreadMemoryCollapseThis: "Esconder",
  tooltipThreadMemoryExpandThis: "Expandir",
  infoLabelThreadMemoryAvg: "Media de mémoria: ",
  infoLabelThreadMemoryThreads: "Threads: ",
  infoLabelThreadMemoryCollectedIn: "Coletado em: ",
  iconNumberFilesStartPath: "Número de arquivos no startPath",
  tooltipNumberFilesStartPathRefreshThis: "Atualizar",
  tooltipNumberFilesStartPathCollapseThis: "Esconder",
  tooltipNumberFilesStartPathExpandThis: "Expandir",
  infoLabelNumberFilesStartPathAvg: "Media Arq.Sistema: ",
  infoLabelNumberFilesStartPathMaxSystemFiles: "Máximo Arq.Sistema: ",
  infoLabelNumberFilesStartPathCollectedIn: "Coletado em: ",
  iconUsersConnected: "Número de usuários conectados",
  tooltipUsersConnectedRefreshThis: "Atualizar",
  tooltipUsersConnectedCollapseThis: "Esconder",
  tooltipUsersConnectedExpandThis: "Expandir",
  infoLabelUsersConnectedCollectedIn: "Coletado em",
  textUsersConnectedTotalConnectionsUsers: "Total de conexões feitas por usuário",
  textUsersConnectedUniqueUsersLogged: "Número de usuários únicos logados"
};

/***/ }),

/***/ 36336:
/*!*********************************************!*\
  !*** ./src/app/monitor/i18n/dbaccess-en.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dbaccessEn": () => (/* binding */ dbaccessEn)
/* harmony export */ });
const dbaccessEn = {
  title: "DBAccess Monitor",
  selectLabelEnvironment: "Environment",
  widgetDetailsTitle: "Details",
  tabLabelConnections: "Connections",
  tabLabelConsuption: "Consuption",
  tabLabelCheckup: "Checkup",
  tabLabelOthers: "Others",
  loadingOverlayText: "Connection verifying",
  notConnectedMessage: "DBAccess is not connected !",
  columnsOfSlotsLabelDescription: "Description",
  columnsOfSlotsLabelParam: "Param",
  columnsOfSlotsLabelSlot: "Slot",
  columnsOfSlotsLabelValue: "Value",
  columnsOfSlotsTootipParam: "Insert parameter",
  columnsOfSlotsTooltipRefresh: "Refresh value",
  columnsOfSlotsLabelGraphic: "Chart",
  columnsOfSlotsTooltipGraphic: "Chart",
  columnsOfCheckupLabelDescription: "Description",
  columnsOfCheckupLabelStatus: "Details",
  columnsOfCheckupTooltipStatus: "Details",
  titleOfGraphicCpuInUse: "Cpu in use",
  rangeOfGraphicLabelUsedCpu: "Used CPU",
  rangeOfGraphicTooltipUsedCpu: "% Used CPU",
  rangeOfGraphicLabelFreeCpu: "Free CPU",
  rangeOfGraphicTooltipFreeCpu: "% Free CPU",
  poModalActionClose: "Close"
};

/***/ }),

/***/ 85653:
/*!*********************************************!*\
  !*** ./src/app/monitor/i18n/dbaccess-pt.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dbaccessPt": () => (/* binding */ dbaccessPt)
/* harmony export */ });
const dbaccessPt = {
  title: "DBAccess Monitor",
  selectLabelEnvironment: "Ambiente",
  widgetDetailsTitle: "Detalhes",
  tabLabelConnections: "Conexões",
  tabLabelConsuption: "Consumo",
  tabLabelCheckup: "Checkup",
  tabLabelOthers: "Outros",
  loadingOverlayText: "Verificando Conexão",
  notConnectedMessage: "DBAccess não está conectado !",
  columnsOfSlotsLabelDescription: "Descrição",
  columnsOfSlotsLabelParam: "Param",
  columnsOfSlotsLabelSlot: "Slot",
  columnsOfSlotsLabelValue: "Valor",
  columnsOfSlotsTootipParam: "Insira o Parametro",
  columnsOfSlotsTooltipRefresh: "Atualizar Valor",
  columnsOfSlotsLabelGraphic: "Gráfico",
  columnsOfSlotsTooltipGraphic: "Gráfico",
  columnsOfCheckupLabelDescription: "Descrição",
  columnsOfCheckupLabelStatus: "Detalhes",
  columnsOfCheckupTooltipStatus: "Detalhes",
  titleOfGraphicCpuInUse: "CPU usada",
  rangeOfGraphicLabelUsedCpu: "CPU usada",
  rangeOfGraphicTooltipUsedCpu: "% CPU Usada",
  rangeOfGraphicLabelFreeCpu: "CPU Livre",
  rangeOfGraphicTooltipFreeCpu: "% CPU Livre",
  poModalActionClose: "Fechar"
};

/***/ }),

/***/ 76254:
/*!***************************************************!*\
  !*** ./src/app/monitor/monitor-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MonitorRoutingModule": () => (/* binding */ MonitorRoutingModule)
/* harmony export */ });
/* harmony import */ var _components_dbaccess_dbaccess_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/dbaccess/dbaccess.component */ 72886);
/* harmony import */ var _components_appserver_appserver_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/appserver/appserver.component */ 51078);
/* harmony import */ var _monitor_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./monitor.component */ 38316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../guards/auth.guard */ 95107);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);







const routes = [{
  path: "",
  component: _monitor_component__WEBPACK_IMPORTED_MODULE_2__.MonitorComponent,
  children: [{
    path: "appserver",
    component: _components_appserver_appserver_component__WEBPACK_IMPORTED_MODULE_1__.AppserverComponent,
    canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__.AuthGuard]
  }, {
    path: "dbaccess",
    component: _components_dbaccess_dbaccess_component__WEBPACK_IMPORTED_MODULE_0__.DbaccessComponent,
    canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__.AuthGuard]
  }]
}];
let MonitorRoutingModule = /*#__PURE__*/(() => {
  class MonitorRoutingModule {
    static #_ = this.ɵfac = function MonitorRoutingModule_Factory(t) {
      return new (t || MonitorRoutingModule)();
    };
    static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
      type: MonitorRoutingModule
    });
    static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
    });
  }
  return MonitorRoutingModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](MonitorRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
})();

/***/ }),

/***/ 38316:
/*!**********************************************!*\
  !*** ./src/app/monitor/monitor.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MonitorComponent": () => (/* binding */ MonitorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);


let MonitorComponent = /*#__PURE__*/(() => {
  class MonitorComponent {
    constructor() {}
    ngOnInit() {}
    static #_ = this.ɵfac = function MonitorComponent_Factory(t) {
      return new (t || MonitorComponent)();
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MonitorComponent,
      selectors: [["app-monitor"]],
      decls: 1,
      vars: 0,
      template: function MonitorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
      styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
  return MonitorComponent;
})();

/***/ }),

/***/ 10446:
/*!*******************************************!*\
  !*** ./src/app/monitor/monitor.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MonitorModule": () => (/* binding */ MonitorModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _po_ui_ng_components__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @po-ui/ng-components */ 22400);
/* harmony import */ var _monitor_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./monitor-routing.module */ 76254);
/* harmony import */ var _monitor_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./monitor.component */ 38316);
/* harmony import */ var _components_appserver_appserver_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/appserver/appserver.component */ 51078);
/* harmony import */ var _service_appserver_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service/appserver.service */ 19679);
/* harmony import */ var _service_dbaccess_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./service/dbaccess.service */ 82970);
/* harmony import */ var _components_dbaccess_dbaccess_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/dbaccess/dbaccess.component */ 72886);
/* harmony import */ var _shared_i18n_general_en__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/i18n/general-en */ 74041);
/* harmony import */ var _shared_i18n_general_pt__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/i18n/general-pt */ 35794);
/* harmony import */ var _i18n_appserver_pt__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./i18n/appserver-pt */ 64780);
/* harmony import */ var _i18n_appserver_en__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./i18n/appserver-en */ 68036);
/* harmony import */ var _i18n_dbaccess_pt__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./i18n/dbaccess-pt */ 85653);
/* harmony import */ var _i18n_dbaccess_en__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./i18n/dbaccess-en */ 36336);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/shared.module */ 44466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 22560);


















const i18nConfig = {
  contexts: {
    general: {
      "pt-BR": _shared_i18n_general_pt__WEBPACK_IMPORTED_MODULE_7__.generalPt,
      "en-US": _shared_i18n_general_en__WEBPACK_IMPORTED_MODULE_6__.generalEn
    },
    appserver: {
      "pt-BR": _i18n_appserver_pt__WEBPACK_IMPORTED_MODULE_8__.appserverPt,
      "en-US": _i18n_appserver_en__WEBPACK_IMPORTED_MODULE_9__.appserverEn
    },
    dbaccess: {
      "pt-BR": _i18n_dbaccess_pt__WEBPACK_IMPORTED_MODULE_10__.dbaccessPt,
      "en-US": _i18n_dbaccess_en__WEBPACK_IMPORTED_MODULE_11__.dbaccessEn
    }
  },
  default: {
    language: "pt-BR",
    context: "general",
    cache: true
  }
};
let MonitorModule = /*#__PURE__*/(() => {
  class MonitorModule {
    static #_ = this.ɵfac = function MonitorModule_Factory(t) {
      return new (t || MonitorModule)();
    };
    static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({
      type: MonitorModule
    });
    static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({
      providers: [_service_appserver_service__WEBPACK_IMPORTED_MODULE_3__.AppserverService, _service_dbaccess_service__WEBPACK_IMPORTED_MODULE_4__.DbaccessService],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule, _monitor_routing_module__WEBPACK_IMPORTED_MODULE_0__.MonitorRoutingModule, _po_ui_ng_components__WEBPACK_IMPORTED_MODULE_15__.PoModule, _po_ui_ng_components__WEBPACK_IMPORTED_MODULE_15__.PoModalModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.ReactiveFormsModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__.SharedModule, _po_ui_ng_components__WEBPACK_IMPORTED_MODULE_15__.PoI18nModule.config(i18nConfig)]
    });
  }
  return MonitorModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](MonitorModule, {
    declarations: [_monitor_component__WEBPACK_IMPORTED_MODULE_1__.MonitorComponent, _components_appserver_appserver_component__WEBPACK_IMPORTED_MODULE_2__.AppserverComponent, _components_dbaccess_dbaccess_component__WEBPACK_IMPORTED_MODULE_5__.DbaccessComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule, _monitor_routing_module__WEBPACK_IMPORTED_MODULE_0__.MonitorRoutingModule, _po_ui_ng_components__WEBPACK_IMPORTED_MODULE_15__.PoModule, _po_ui_ng_components__WEBPACK_IMPORTED_MODULE_15__.PoModalModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.ReactiveFormsModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__.SharedModule, _po_ui_ng_components__WEBPACK_IMPORTED_MODULE_15__.PoI18nModule],
    exports: [_monitor_component__WEBPACK_IMPORTED_MODULE_1__.MonitorComponent]
  });
})();

/***/ }),

/***/ 19679:
/*!******************************************************!*\
  !*** ./src/app/monitor/service/appserver.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppserverService": () => (/* binding */ AppserverService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 53158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 25474);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var src_app_shared_components_host_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/components/host.component */ 6351);




let AppserverService = /*#__PURE__*/(() => {
  class AppserverService {
    constructor(http, host) {
      this.http = http;
      this.host = host;
      this.cUriMetrics = '/appserver/metrics';
      this.cUriService = '/totvs/environment';
      this.cUriCheck = '/tlpp/healthCheck';
      this.cUriStartdate = '/startdate';
      this.cUriMemoryRam = '?memory_ram_total&memory_ram_free&memory_ram_used';
      this.cUriMemoryApp = '?memory_resident&memory_virtual';
      this.cUriPagingMemory = '?memory_swap_total&memory_swap_used&memory_swap_free';
      this.cUriThreadMemory = '?memory_threads_used';
      this.cUriStartPath = '?files_startpath';
      this.cUriUsers = '?users_connected';
      this.cUriPower = '?power_performance';
      this.bApiOK = false;
      this.healthCheck().subscribe(resp => {
        this.bApiOK = resp.status == 200;
      });
    }
    healthCheck() {
      return this.http.get(`${this.host.setUrlService(this.cUriCheck)}`, {
        observe: 'response'
      });
    }
    getEnvironment() {
      return this.http.get(`${this.host.setUrlService(this.cUriService)}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.catchError)(err => {
        console.error(err);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(() => err);
      }));
    }
    getStartdate() {
      let sURL = this.cUriMetrics + this.cUriStartdate;
      return this.http.get(`${this.host.setUrlService(sURL)}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.catchError)(err => {
        console.error(err);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(() => err);
      }));
    }
    getMemoryRAM() {
      let sURL = this.cUriMetrics + this.cUriMemoryRam;
      return this.http.get(`${this.host.setUrlService(sURL)}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.catchError)(err => {
        console.error(err);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(() => err);
      }));
    }
    getMemoryApp() {
      let sURL = this.cUriMetrics + this.cUriMemoryApp;
      return this.http.get(`${this.host.setUrlService(sURL)}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.catchError)(err => {
        console.error(err);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(() => err);
      }));
    }
    getPagingMemory() {
      let sURL = this.cUriMetrics + this.cUriPagingMemory;
      return this.http.get(`${this.host.setUrlService(sURL)}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.catchError)(err => {
        console.error(err);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(() => err);
      }));
    }
    getThreadMemory() {
      let sURL = this.cUriMetrics + this.cUriThreadMemory;
      return this.http.get(`${this.host.setUrlService(sURL)}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.catchError)(err => {
        console.error(err);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(() => err);
      }));
    }
    getStartPath() {
      let sURL = this.cUriMetrics + this.cUriStartPath;
      return this.http.get(`${this.host.setUrlService(sURL)}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.catchError)(err => {
        console.error(err);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(() => err);
      }));
    }
    getUsers() {
      let sURL = this.cUriMetrics + this.cUriUsers;
      return this.http.get(`${this.host.setUrlService(sURL)}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.catchError)(err => {
        console.error(err);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(() => err);
      }));
    }
    getPower() {
      let sURL = this.cUriMetrics + this.cUriPower;
      return this.http.get(`${this.host.setUrlService(sURL)}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.catchError)(err => {
        console.error(err);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(() => err);
      }));
    }
    static #_ = this.ɵfac = function AppserverService_Factory(t) {
      return new (t || AppserverService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_app_shared_components_host_component__WEBPACK_IMPORTED_MODULE_0__.Host));
    };
    static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
      token: AppserverService,
      factory: AppserverService.ɵfac,
      providedIn: "root"
    });
  }
  return AppserverService;
})();

/***/ }),

/***/ 82970:
/*!*****************************************************!*\
  !*** ./src/app/monitor/service/dbaccess.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DbaccessService": () => (/* binding */ DbaccessService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 59295);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 53158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 25474);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 19337);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 91640);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _shared_components_host_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/host.component */ 6351);





const urlBaseManager = "tlpp/managerdbaccess/";
const urlBaseTcGetInfo = "tlpp/dbaccesstcgetinfoapi/";
const urlBaseGetInfos = "tlpp/dbaccessinfosapi/";
const environments = "dbaccessenvs";
const connect = "dbaccessconnect";
const getSlotsReturn = "getslotreturn";
const getCheckupInfos = "gettccheckupinfos";
const getGenericInfos = "getgenericinfos";
const getTcPingInfos = "gettcpinginfos";
let DbaccessService = /*#__PURE__*/(() => {
  class DbaccessService {
    constructor(http, host) {
      this.http = http;
      this.host = host;
      this.cUriBase = "";
      this.cUriBase = this.host.getProtocol() + "//" + this.host.getHost() + ":" + this.host.getPort() + this.host.getPath();
    }
    dbAccessEnvironments() {
      let sURL = urlBaseManager + environments;
      return this.http.get(`${this.host.setUrlService(sURL)}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.take)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.catchError)(err => {
        console.log(err);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => err);
      }));
    }
    dbAccessConnect() {
      let sURL = urlBaseManager + connect;
      return this.http.get(`${this.host.setUrlService(sURL)}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.tap)(console.log), (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.take)(1));
    }
    getInfosOfApis(...parms) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.forkJoin)({
        retSlotsInfos: this.getSlotsInfos(parms),
        retCheckupInfos: this.getCheckupInfos(parms),
        retGenericInfos: this.getGenericInfos(parms),
        retTcPingInfos: this.getTcPingInfos(parms)
      });
    }
    getSlotsInfos(...parms) {
      let params = this.setParamsToRequisition(parms);
      let sURL = urlBaseTcGetInfo + getSlotsReturn;
      return this.http.get(`${this.host.setUrlService(sURL)}`, {
        params: params
      }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.tap)(console.log), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)(s => s.slots), (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.take)(1));
    }
    getCheckupInfos(...parms) {
      let params = this.setParamsToRequisition(parms);
      let sURL = urlBaseGetInfos + getCheckupInfos;
      return this.http.get(`${this.host.setUrlService(sURL)}`, {
        params: params
      }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.tap)(console.log), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)(i => i.slots), (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.take)(1));
    }
    getGenericInfos(...parms) {
      let params = this.setParamsToRequisition(parms);
      let sURL = urlBaseGetInfos + getGenericInfos;
      return this.http.get(`${this.host.setUrlService(sURL)}`, {
        params: params
      }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.tap)(console.log), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)(i => i.slots), (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.take)(1));
    }
    getTcPingInfos(...parms) {
      let params = this.setParamsToRequisition(parms);
      let sURL = urlBaseGetInfos + getTcPingInfos;
      return this.http.get(`${this.host.setUrlService(sURL)}`, {
        params: params
      }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.tap)(console.log), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)(i => i.slots), (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.take)(1));
    }
    setParamsToRequisition(parms) {
      let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpParams();
      parms[0] ? params = params.append("_cenvironment", parms[0]) : undefined;
      parms[1] ? params = params.append("_nslot", parms[1]) : undefined;
      parms[2] ? params = params.append("_xparamofslot", parms[2]) : undefined;
      return params;
    }
    static #_ = this.ɵfac = function DbaccessService_Factory(t) {
      return new (t || DbaccessService)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_shared_components_host_component__WEBPACK_IMPORTED_MODULE_0__.Host));
    };
    static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({
      token: DbaccessService,
      factory: DbaccessService.ɵfac,
      providedIn: "root"
    });
  }
  return DbaccessService;
})();

/***/ })

}]);
//# sourceMappingURL=446.a3486fde0c390e68.js.map