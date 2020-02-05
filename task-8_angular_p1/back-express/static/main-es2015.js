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
/*! exports provided: AppRoutingModule, ɵ0, ɵ1, ɵ2, ɵ3, ɵ4, ɵ5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ0", function() { return ɵ0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ1", function() { return ɵ1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ2", function() { return ɵ2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ3", function() { return ɵ3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ4", function() { return ɵ4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ5", function() { return ɵ5; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared */ "./src/app/shared/index.ts");


const ɵ0 = () => __webpack_require__.e(/*! import() | layout-layout-module-ngfactory */ "layout-layout-module-ngfactory").then(__webpack_require__.bind(null, /*! ./layout/layout.module.ngfactory */ "./src/app/layout/layout.module.ngfactory.js")).then(m => m.LayoutModuleNgFactory), ɵ1 = () => __webpack_require__.e(/*! import() | login-login-module-ngfactory */ "login-login-module-ngfactory").then(__webpack_require__.bind(null, /*! ./login/login.module.ngfactory */ "./src/app/login/login.module.ngfactory.js")).then(m => m.LoginModuleNgFactory), ɵ2 = () => Promise.all(/*! import() | signup-signup-module-ngfactory */[__webpack_require__.e("default~blank-page-blank-page-module-ngfactory~signup-signup-module-ngfactory"), __webpack_require__.e("signup-signup-module-ngfactory")]).then(__webpack_require__.bind(null, /*! ./signup/signup.module.ngfactory */ "./src/app/signup/signup.module.ngfactory.js")).then(m => m.SignupModuleNgFactory), ɵ3 = () => __webpack_require__.e(/*! import() | server-error-server-error-module-ngfactory */ "server-error-server-error-module-ngfactory").then(__webpack_require__.bind(null, /*! ./server-error/server-error.module.ngfactory */ "./src/app/server-error/server-error.module.ngfactory.js")).then(m => m.ServerErrorModuleNgFactory), ɵ4 = () => __webpack_require__.e(/*! import() | access-denied-access-denied-module-ngfactory */ "access-denied-access-denied-module-ngfactory").then(__webpack_require__.bind(null, /*! ./access-denied/access-denied.module.ngfactory */ "./src/app/access-denied/access-denied.module.ngfactory.js")).then(m => m.AccessDeniedModuleNgFactory), ɵ5 = () => __webpack_require__.e(/*! import() | not-found-not-found-module-ngfactory */ "not-found-not-found-module-ngfactory").then(__webpack_require__.bind(null, /*! ./not-found/not-found.module.ngfactory */ "./src/app/not-found/not-found.module.ngfactory.js")).then(m => m.NotFoundModuleNgFactory);
const routes = [
    { path: '', loadChildren: ɵ0, canActivate: [_shared__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]] },
    { path: 'login', loadChildren: ɵ1 },
    { path: 'signup', loadChildren: ɵ2 },
    { path: 'error', loadChildren: ɵ3 },
    { path: 'access-denied', loadChildren: ɵ4 },
    { path: 'not-found', loadChildren: ɵ5 },
    { path: '**', redirectTo: 'not-found' }
];
class AppRoutingModule {
}



/***/ }),

/***/ "./src/app/app.component.ngfactory.js":
/*!********************************************!*\
  !*** ./src/app/app.component.ngfactory.js ***!
  \********************************************/
/*! exports provided: RenderType_AppComponent, View_AppComponent_0, View_AppComponent_Host_0, AppComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_AppComponent", function() { return RenderType_AppComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AppComponent_0", function() { return View_AppComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AppComponent_Host_0", function() { return View_AppComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponentNgFactory", function() { return AppComponentNgFactory; });
/* harmony import */ var _app_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.scss.shim.ngstyle */ "./src/app/app.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




var styles_AppComponent = [_app_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_AppComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_AppComponent, data: {} });

function View_AppComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 212992, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
function View_AppComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-root", [], null, null, null, View_AppComponent_0, RenderType_AppComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], [], null, null)], null, null); }
var AppComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-root", _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], View_AppComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/app.component.scss.shim.ngstyle.js":
/*!****************************************************!*\
  !*** ./src/app/app.component.scss.shim.ngstyle.js ***!
  \****************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"];



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
class AppComponent {
    constructor() {
        this.title = 'fcp-angular-app';
    }
}


/***/ }),

/***/ "./src/app/app.module.ngfactory.js":
/*!*****************************************!*\
  !*** ./src/app/app.module.ngfactory.js ***!
  \*****************************************/
/*! exports provided: AppModuleNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModuleNgFactory", function() { return AppModuleNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.module */ "./src/app/app.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/@angular/router/router.ngfactory */ "./node_modules/@angular/router/router.ngfactory.js");
/* harmony import */ var _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../node_modules/@ng-bootstrap/ng-bootstrap/ng-bootstrap.ngfactory */ "./node_modules/@ng-bootstrap/ng-bootstrap/ng-bootstrap.ngfactory.js");
/* harmony import */ var _components_modal_window_modal_window_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/modal-window/modal-window.component.ngfactory */ "./src/app/components/modal-window/modal-window.component.ngfactory.js");
/* harmony import */ var _components_angular_element_component_popup_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/angular-element-component/popup.component.ngfactory */ "./src/app/components/angular-element-component/popup.component.ngfactory.js");
/* harmony import */ var _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component.ngfactory */ "./src/app/app.component.ngfactory.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_animations_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/animations/browser */ "./node_modules/@angular/animations/fesm2015/browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shared/guard/auth.guard */ "./src/app/shared/guard/auth.guard.ts");
/* harmony import */ var _global_service_user_data_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./global-service/user-data.service */ "./src/app/global-service/user-data.service.ts");
/* harmony import */ var _layout_services_article_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./layout/services/article.service */ "./src/app/layout/services/article.service.ts");
/* harmony import */ var _layout_services_news_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./layout/services/news.service */ "./src/app/layout/services/news.service.ts");
/* harmony import */ var _components_angular_element_component_popup_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/angular-element-component/popup.service */ "./src/app/components/angular-element-component/popup.service.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _components_modal_window_modal_window_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/modal-window/modal-window.module */ "./src/app/components/modal-window/modal-window.module.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
























var AppModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_router_router_lNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__["NgbAlertNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__["NgbDatepickerNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__["ɵvNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__["ɵwNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__["ɵmNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__["ɵrNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__["ɵsNgFactory"], _components_modal_window_modal_window_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["ModalWindowComponentNgFactory"], _components_angular_element_component_popup_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["PopupComponentNgFactory"], _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["AppComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_p"], [[3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_ba"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_r"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_f"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_o"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["ɵDomSanitizerImpl"], [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Sanitizer"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["HAMMER_GESTURE_CONFIG"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["HammerGestureConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["EVENT_MANAGER_PLUGINS"], function (p0_0, p0_1, p0_2, p1_0, p2_0, p2_1, p2_2, p2_3) { return [new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["ɵDomEventsPlugin"](p0_0, p0_1, p0_2), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["ɵKeyEventsPlugin"](p1_0), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["ɵHammerGesturesPlugin"](p2_0, p2_1, p2_2, p2_3)]; }, [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["HAMMER_GESTURE_CONFIG"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], [2, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["HAMMER_LOADER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["EventManager"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["EVENT_MANAGER_PLUGINS"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["ɵDomSharedStylesHost"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["ɵDomSharedStylesHost"], [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["ɵDomRendererFactory2"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["ɵDomRendererFactory2"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["ɵDomSharedStylesHost"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_10__["AnimationDriver"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_platform_browser_animations_animations_a"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_10__["ɵAnimationStyleNormalizer"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_platform_browser_animations_animations_b"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_10__["ɵAnimationEngine"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["ɵInjectableAnimationEngine"], [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_10__["AnimationDriver"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_10__["ɵAnimationStyleNormalizer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_platform_browser_animations_animations_c"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["ɵDomRendererFactory2"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_10__["ɵAnimationEngine"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["ɵSharedStylesHost"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["ɵDomSharedStylesHost"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_12__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_router_router_g"], [_angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_router__WEBPACK_IMPORTED_MODULE_12__["NoPreloading"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["NoPreloading"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_router__WEBPACK_IMPORTED_MODULE_12__["PreloadingStrategy"], null, [_angular_router__WEBPACK_IMPORTED_MODULE_12__["NoPreloading"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterPreloader"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterPreloader"], [_angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["PreloadingStrategy"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_router__WEBPACK_IMPORTED_MODULE_12__["PreloadAllModules"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["PreloadAllModules"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_router_router_o"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_router_router_c"], [_angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["ViewportScroller"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["ROUTER_CONFIGURATION"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_12__["ROUTER_INITIALIZER"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_router_router_j"], [_angular_router__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_router_router_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_BOOTSTRAP_LISTENER"], function (p0_0) { return [p0_0]; }, [_angular_router__WEBPACK_IMPORTED_MODULE_12__["ROUTER_INITIALIZER"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_animations__WEBPACK_IMPORTED_MODULE_13__["AnimationBuilder"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["ɵBrowserAnimationBuilder"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_common_http_http_g"], [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_common_http_http_e"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_common_http_http_h"], _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_common_http_http_h"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_common_http_http_f"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HTTP_INTERCEPTORS"], function (p0_0) { return [p0_0]; }, [_angular_common_http__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_common_http_http_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_common_http_http_d"], _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_common_http_http_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["XhrFactory"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_common_http_http_d"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpXhrBackend"], _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpXhrBackend"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_14__["XhrFactory"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpBackend"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpXhrBackend"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpHandler"], _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["ɵHttpInterceptingHandler"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpBackend"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClient"], _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClient"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpHandler"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_forms_forms_o"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_forms_forms_o"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbModal"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbModal"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["ɵx"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbModalConfig"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_17__["AuthGuard"], _shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_17__["AuthGuard"], [_angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _global_service_user_data_service__WEBPACK_IMPORTED_MODULE_18__["UserDataService"], _global_service_user_data_service__WEBPACK_IMPORTED_MODULE_18__["UserDataService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClient"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _layout_services_article_service__WEBPACK_IMPORTED_MODULE_19__["ArticleService"], _layout_services_article_service__WEBPACK_IMPORTED_MODULE_19__["ArticleService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _layout_services_news_service__WEBPACK_IMPORTED_MODULE_20__["NewsService"], _layout_services_news_service__WEBPACK_IMPORTED_MODULE_20__["NewsService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClient"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _components_angular_element_component_popup_service__WEBPACK_IMPORTED_MODULE_21__["PopupService"], _components_angular_element_component_popup_service__WEBPACK_IMPORTED_MODULE_21__["PopupService"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_platform_browser_platform_browser_a"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"], function () { return [_angular_router__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_router_router_b"]()]; }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_router_router_h"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_router_router_h"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"], function (p0_0, p1_0) { return [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_platform_browser_platform_browser_j"](p0_0), _angular_router__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_router_router_i"](p1_0)]; }, [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"]], _angular_router__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_router_router_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](131584, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["BrowserModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["BrowserModule"], [[3, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["BrowserModule"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_router_router_a"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_router_router_e"], [[3, _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_12__["UrlSerializer"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["DefaultUrlSerializer"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_12__["ChildrenOutletContexts"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["ChildrenOutletContexts"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_router__WEBPACK_IMPORTED_MODULE_12__["ROUTER_CONFIGURATION"], {}, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_common__WEBPACK_IMPORTED_MODULE_8__["LocationStrategy"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_router_router_d"], [_angular_common__WEBPACK_IMPORTED_MODULE_8__["PlatformLocation"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_8__["APP_BASE_HREF"]], _angular_router__WEBPACK_IMPORTED_MODULE_12__["ROUTER_CONFIGURATION"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"], [_angular_common__WEBPACK_IMPORTED_MODULE_8__["LocationStrategy"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["PlatformLocation"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["SystemJsNgModuleLoader"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], [2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["SystemJsNgModuleLoaderConfig"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_12__["ROUTES"], function () { return [[{ path: "", loadChildren: _app_routing_module__WEBPACK_IMPORTED_MODULE_22__["ɵ0"], canActivate: [_shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_17__["AuthGuard"]] }, { path: "login", loadChildren: _app_routing_module__WEBPACK_IMPORTED_MODULE_22__["ɵ1"] }, { path: "signup", loadChildren: _app_routing_module__WEBPACK_IMPORTED_MODULE_22__["ɵ2"] }, { path: "error", loadChildren: _app_routing_module__WEBPACK_IMPORTED_MODULE_22__["ɵ3"] }, { path: "access-denied", loadChildren: _app_routing_module__WEBPACK_IMPORTED_MODULE_22__["ɵ4"] }, { path: "not-found", loadChildren: _app_routing_module__WEBPACK_IMPORTED_MODULE_22__["ɵ5"] }, { path: "**", redirectTo: "not-found" }]]; }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_router_router_f"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["UrlSerializer"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["ChildrenOutletContexts"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["ROUTES"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["ROUTER_CONFIGURATION"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_12__["UrlHandlingStrategy"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouteReuseStrategy"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_routing_module__WEBPACK_IMPORTED_MODULE_22__["AppRoutingModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_22__["AppRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientXsrfModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientXsrfModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbAccordionModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbAccordionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbAlertModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbAlertModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbButtonsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbButtonsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbCarouselModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbCarouselModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbCollapseModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbCollapseModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbDatepickerModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbDatepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbDropdownModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbDropdownModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbModalModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbModalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbPaginationModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbPaginationModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbPopoverModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbPopoverModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbProgressbarModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbProgressbarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbRatingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbRatingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbTabsetModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbTabsetModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbTimepickerModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbTimepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbToastModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbToastModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbTooltipModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbTooltipModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbTypeaheadModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbTypeaheadModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _components_modal_window_modal_window_module__WEBPACK_IMPORTED_MODULE_23__["ModalWindowModule"], _components_modal_window_modal_window_module__WEBPACK_IMPORTED_MODULE_23__["ModalWindowModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵAPP_ROOT"], true, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["ANIMATION_MODULE_TYPE"], "BrowserAnimations", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_common_http_http_e"], "XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_common_http_http_f"], "X-XSRF-TOKEN", [])]); });



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
class AppModule {
}


/***/ }),

/***/ "./src/app/components/angular-element-component/popup.component.ngfactory.js":
/*!***********************************************************************************!*\
  !*** ./src/app/components/angular-element-component/popup.component.ngfactory.js ***!
  \***********************************************************************************/
/*! exports provided: RenderType_PopupComponent, View_PopupComponent_0, View_PopupComponent_Host_0, PopupComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_PopupComponent", function() { return RenderType_PopupComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_PopupComponent_0", function() { return View_PopupComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_PopupComponent_Host_0", function() { return View_PopupComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupComponentNgFactory", function() { return PopupComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _popup_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popup.component */ "./src/app/components/angular-element-component/popup.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 


var styles_PopupComponent = ["[_nghost-%COMP%] {\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      right: 0;\n      background: #009cff;\n      height: 48px;\n      padding: 16px;\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      border-top: 1px solid black;\n      font-size: 24px;\n    }\n\n    button[_ngcontent-%COMP%] {\n      border-radius: 50%;\n    }"];
var RenderType_PopupComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 0, styles: styles_PopupComponent, data: { "animation": [{ type: 7, name: "state", definitions: [{ type: 0, name: "opened", styles: { type: 6, styles: { transform: "translateY(0%)" }, offset: null }, options: undefined }, { type: 0, name: "void, closed", styles: { type: 6, styles: { transform: "translateY(100%)", opacity: 0 }, offset: null }, options: undefined }, { type: 1, expr: "* => *", animation: { type: 4, styles: null, timings: "100ms ease-in" }, options: null }], options: {} }] } });

function View_PopupComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, ["Popup: ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 1, "button", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.closed.next() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\u2716"]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.message; _ck(_v, 1, 0, currVal_0); }); }
function View_PopupComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "my-popup", [], [[40, "@state", 0]], null, null, View_PopupComponent_0, RenderType_PopupComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _popup_component__WEBPACK_IMPORTED_MODULE_1__["PopupComponent"], [], null, null)], null, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).state; _ck(_v, 0, 0, currVal_0); }); }
var PopupComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("my-popup", _popup_component__WEBPACK_IMPORTED_MODULE_1__["PopupComponent"], View_PopupComponent_Host_0, { message: "message" }, { closed: "closed" }, []);



/***/ }),

/***/ "./src/app/components/angular-element-component/popup.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/angular-element-component/popup.component.ts ***!
  \*************************************************************************/
/*! exports provided: PopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupComponent", function() { return PopupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");

class PopupComponent {
    constructor() {
        this.state = 'closed';
        this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    set message(message) {
        this._message = message;
        this.state = 'opened';
    }
    get message() { return this._message; }
}


/***/ }),

/***/ "./src/app/components/angular-element-component/popup.service.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/angular-element-component/popup.service.ts ***!
  \***********************************************************************/
/*! exports provided: PopupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupService", function() { return PopupService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _popup_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popup.component */ "./src/app/components/angular-element-component/popup.component.ts");


class PopupService {
    constructor(injector, applicationRef, componentFactoryResolver) {
        this.injector = injector;
        this.applicationRef = applicationRef;
        this.componentFactoryResolver = componentFactoryResolver;
    }
    showAsComponent(message) {
        // Create element
        const popup = document.createElement('popup-component');
        // Create the component and wire it up with the element
        const factory = this.componentFactoryResolver.resolveComponentFactory(_popup_component__WEBPACK_IMPORTED_MODULE_1__["PopupComponent"]);
        const popupComponentRef = factory.create(this.injector, [], popup);
        // Attach to the view so that the change detector knows to run
        this.applicationRef.attachView(popupComponentRef.hostView);
        // Listen to the close event
        popupComponentRef.instance.closed.subscribe(() => {
            document.body.removeChild(popup);
            this.applicationRef.detachView(popupComponentRef.hostView);
        });
        // Set the message
        popupComponentRef.instance.message = message;
        // Add to the DOM
        document.body.appendChild(popup);
    }
    // This uses the new custom-element method to add the popup to the DOM.
    showAsElement(message) {
        // Create element
        const popupEl = document.createElement('popup-element');
        // Listen to the close event
        popupEl.addEventListener('closed', () => document.body.removeChild(popupEl));
        // Set the message
        popupEl.message = message;
        // Add to the DOM
        document.body.appendChild(popupEl);
    }
}


/***/ }),

/***/ "./src/app/components/modal-window/modal-window.component.ngfactory.js":
/*!*****************************************************************************!*\
  !*** ./src/app/components/modal-window/modal-window.component.ngfactory.js ***!
  \*****************************************************************************/
/*! exports provided: RenderType_ModalWindowComponent, View_ModalWindowComponent_0, View_ModalWindowComponent_Host_0, ModalWindowComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ModalWindowComponent", function() { return RenderType_ModalWindowComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ModalWindowComponent_0", function() { return View_ModalWindowComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ModalWindowComponent_Host_0", function() { return View_ModalWindowComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalWindowComponentNgFactory", function() { return ModalWindowComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _modal_window_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal-window.component */ "./src/app/components/modal-window/modal-window.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 





var styles_ModalWindowComponent = [];
var RenderType_ModalWindowComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_ModalWindowComponent, data: {} });

function View_ModalWindowComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 3, "button", [["class", "btn btn-outline-dark"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).onClick() !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_v.parent.context.$implicit.close("Save click") !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 16384, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpad"](2, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Ok"]))], function (_ck, _v) { var currVal_0 = _ck(_v, 2, 0, "/newslist"); _ck(_v, 1, 0, currVal_0); }, null); }
function View_ModalWindowComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "button", [["class", "btn btn-outline-dark"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_v.parent.context.$implicit.close("Save click") !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Ok"]))], null, null); }
function View_ModalWindowComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 5, "div", [["class", "modal-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 1, "h5", [["class", "modal-title"], ["id", "modal-basic-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["System message"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 2, "button", [["aria-label", "Close"], ["class", "close"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_v.context.$implicit.dismiss("Cross click") !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 1, "span", [["aria-hidden", "true"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\u00D7"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 2, "div", [["class", "modal-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](7, 0, null, null, 1, "h4", [["class", "modal-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Your changes were successful apply"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](9, 0, null, null, 4, "div", [["class", "modal-footer"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ModalWindowComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](11, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ModalWindowComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](13, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.toggleModal; _ck(_v, 11, 0, currVal_0); var currVal_1 = !_co.toggleModal; _ck(_v, 13, 0, currVal_1); }, null); }
function View_ModalWindowComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](671088640, 1, { toggleModal: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, [[1, 2], ["content", 2]], null, 0, null, View_ModalWindowComponent_1)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 1, "div", [["class", "hide"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.open(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1)) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](3, null, ["", ""]))], null, function (_ck, _v) { var currVal_0 = "Delete"; _ck(_v, 3, 0, currVal_0); }); }
function View_ModalWindowComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "app-modal-window", [], null, null, null, View_ModalWindowComponent_0, RenderType_ModalWindowComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 770048, null, 0, _modal_window_component__WEBPACK_IMPORTED_MODULE_3__["ModalWindowComponent"], [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ModalWindowComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("app-modal-window", _modal_window_component__WEBPACK_IMPORTED_MODULE_3__["ModalWindowComponent"], View_ModalWindowComponent_Host_0, { toggleModal: "toggleModal" }, {}, []);



/***/ }),

/***/ "./src/app/components/modal-window/modal-window.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/modal-window/modal-window.component.ts ***!
  \*******************************************************************/
/*! exports provided: ModalWindowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalWindowComponent", function() { return ModalWindowComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");


class ModalWindowComponent {
    constructor(modalService) {
        this.modalService = modalService;
    }
    ngOnInit() {
    }
    ngOnChanges() {
    }
    open(content) {
        this.modalReference = this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
    getDismissReason(reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return `with: ${reason}`;
        }
    }
    openModal() {
        this.modalService.open(this.contentWindow);
    }
    closeModal() {
        this.modalReference.close();
        // this.modalService.dismissAll();
    }
    ngOnDestroy() {
    }
}


/***/ }),

/***/ "./src/app/components/modal-window/modal-window.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/modal-window/modal-window.module.ts ***!
  \****************************************************************/
/*! exports provided: ModalWindowModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalWindowModule", function() { return ModalWindowModule; });
class ModalWindowModule {
}


/***/ }),

/***/ "./src/app/config/initConfig.js":
/*!**************************************!*\
  !*** ./src/app/config/initConfig.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

const initConfig = {
    NEWS_API_PATH: 'https://newsapi.org/v2/',
    NEWS_API_KEY: '58f397df77f34889ab599e2d773f5546',
    NEWS_TOPHEAD: 'top-headlines',
    MDBASE_PATH: 'http://localhost:5000',
    MDBASE_PATH_NEWS: '/api/news/',
    MDBASE_PATH_USERS: '/api/users/',
    MDBASE_PATH_USER_LOGIN: '/api/users/login',
    MDBASE_PATH_SEARCH: '/api/news/search/',

};

module.exports = initConfig;


/***/ }),

/***/ "./src/app/global-service/user-data.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/global-service/user-data.service.ts ***!
  \*****************************************************/
/*! exports provided: UserDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDataService", function() { return UserDataService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _config_initConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/initConfig */ "./src/app/config/initConfig.js");
/* harmony import */ var _config_initConfig__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_config_initConfig__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");






class UserDataService {
    constructor(http) {
        this.http = http;
        this.user = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({
            name: "Unknown user"
        });
        this.popup = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    getUser() {
        return this.user.asObservable();
    }
    setUsert(user) {
        this.user.next(user);
    }
    onCreateUser(userData) {
        this.http
            .post(`${_config_initConfig__WEBPACK_IMPORTED_MODULE_2___default.a.MDBASE_PATH}${_config_initConfig__WEBPACK_IMPORTED_MODULE_2___default.a.MDBASE_PATH_USERS}`, userData)
            .subscribe(val => {
            console.log("New user registered successfully", val);
        }, response => {
            console.log("Creating new user Error", response);
        }, () => {
            console.log("User POST observable is now completed.");
        });
    }
    onCheckUser(userData) {
        return this.http.post(`${_config_initConfig__WEBPACK_IMPORTED_MODULE_2___default.a.MDBASE_PATH}${_config_initConfig__WEBPACK_IMPORTED_MODULE_2___default.a.MDBASE_PATH_USER_LOGIN}`, userData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
            if (data.user) {
                console.log("User login is successfully", data.user);
                this.setSession(data);
                return data;
            }
            return null;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(err => {
            console.log("User login is Error", err);
            throw new Error(err);
        }));
    }
    setSession(auth) {
        const { user: { login, token } } = auth;
        localStorage.setItem("token", token);
        localStorage.setItem("isLoggedin", "true");
        localStorage.setItem("userName", login);
    }
    logout() {
        localStorage.removeItem("isLoggedin");
        localStorage.removeItem("token");
        localStorage.removeItem("userName");
    }
}
UserDataService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ factory: function UserDataService_Factory() { return new UserDataService(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); }, token: UserDataService, providedIn: "root" });


/***/ }),

/***/ "./src/app/layout/mock-news.ts":
/*!*************************************!*\
  !*** ./src/app/layout/mock-news.ts ***!
  \*************************************/
/*! exports provided: ARTICLES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ARTICLES", function() { return ARTICLES; });
const ARTICLES = [
    {
        source: {
            id: "techcrunch",
            name: "TechCrunch"
        },
        isLocalNews: true,
        author: "Jonathan Shieber",
        title: "All tulips must wilt",
        description: "It’s a bad day in the world of cryptocurrency. After recovering some during the summer, the value of bitcoin and other cryptocurrencies are sharply down over the last several weeks. Looking back a month, bitcoin was worth around $8,500 a coin. Today it’s wort…",
        url: "http://techcrunch.com/2019/12/18/all-tulips-must-wilt/",
        urlToImage: "https://techcrunch.com/wp-content/uploads/2019/12/Screen-Shot-2019-12-18-at-9.39.21-AM.png?w=669",
        publishedAt: "2019-12-18T15:17:17Z",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ornare nec odio ac interdum. Mauris bibendum sit amet nunc ut hendrerit. Sed nec tincidunt sapien. In vel sodales nunc. Nunc finibus nisi enim, vitae tempor augue aliquet quis. Nunc dictum tempus risus. Nam efficitur, dui non varius vehicula, nulla velit mattis neque, eget rutrum mauris leo at felis. Proin tortor turpis, rutrum id sodales id, tempor nec urna. Quisque commodo eros vitae lorem cursus, in consequat lectus luctus. Aenean vitae auctor odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer auctor mauris a dolor volutpat, eu auctor dui pharetra. Aenean sodales vitae lacus eget convallis. Pellentesque mattis ligula vitae vestibulum faucibus. Praesent tempor odio eget convallis condimentum. Praesent vehicula nibh ac odio pharetra pretium. Curabitur in elit metus. In venenatis auctor congue. Sed posuere sollicitudin urna, a iaculis orci. Aenean elementum eros et commodo pellentesque. Donec scelerisque faucibus magna ac pretium. Donec quis turpis ut urna vestibulum gravida sit amet vel elit.Nunc pharetra venenatis risus, sit amet venenatis tellus blandit et. Mauris lacus mi, lacinia a venenatis in, elementum sit amet lorem. Pellentesque rutrum magna ut ornare lobortis. Maecenas vitae feugiat elit, quis tempus odio. Nunc dapibus massa nulla, eget ultricies orci malesuada vel. In hac habitasse platea dictumst. Sed id tortor ac erat rhoncus euismod. Proin lobortis gravida ex, sit amet varius odio aliquam ac. Nulla pharetra sem tortor, ut tincidunt mi volutpat nec. Morbi vehicula pellentesque enim, vitae porta ligula convallis at. Sed ornare porta diam sit amet tincidunt. Fusce volutpat rhoncus arcu at fermentum. Vestibulum volutpat, sem nec fermentum blandit, libero leo viverra ex, id venenatis est magna nec leo. Pellentesque eleifend massa massa, eu vulputate lectus tincidunt vulputate. Aenean gravida risus et accumsan iaculis. Aliquam erat purus, malesuada eleifend sollicitudin vel, sodales in lorem. Nunc posuere commodo ante eget tincidunt. Donec id nibh ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Cras ac eleifend ante.Nam elementum magna libero, vitae egestas libero faucibus eu. Curabitur ac purus neque. Suspendisse eget blandit nisi. Pellentesque tempus suscipit mauris, ut consequat urna mollis ut. Ut rhoncus ante viverra purus tempus dignissim. Etiam leo sem, venenatis vitae tortor ac, tincidunt porttitor dui. Curabitur accumsan dictum tristique. Nullam tincidunt auctor ultrices. Duis semper ipsum elementum, consequat ante ac, blandit turpis. Fusce et mattis mauris, a varius magna. Mauris tristique nibh rhoncus quam luctus finibus. Phasellus euismod est id cursus accumsan."
    },
    {
        source: {
            id: "techcrunch",
            name: "TechCrunch"
        },
        author: "Josh Constine",
        title: "Alchemy is secretly fixing blockchain’s node nightmare",
        description: "The top cryptocurrency companies have quietly begun to outsource their infrastructure problems to a tiny stealth startup. It’s called Alchemy. Today it’s making the big public reveal of it’s technology that could help developers finally build the killer use c…",
        url: "http://techcrunch.com/2019/12/17/alchemy-blockchain/",
        urlToImage: "https://techcrunch.com/wp-content/uploads/2019/12/Alchemy-Blockchain.png?w=709",
        publishedAt: "2019-12-17T12:00:08Z",
        content: "The top cryptocurrency companies have quietly begun to outsource their infrastructure problems to a tiny stealth startup. It’s called Alchemy. Today it’s making the big public reveal of it’s technology that could help developers finally build the killer use c… [+3366 chars]"
    },
    {
        source: {
            id: "business-insider",
            name: "Business Insider"
        },
        isLocalNews: true,
        author: "Trista Kelley",
        title: "No, bitcoin is not the new gold",
        description: 'Bitcoin bulls like to claim that bitcoin is a great haven investment, like gold, in times of geopolitical uncertainty. "These people ignore all the times that it moves inversely with sentiment," says Oanda\'s Craig Erlam. "Bitcoin is not gold and certainly not…',
        url: "https://markets.businessinsider.com/currencies/news/bitcoin-not-new-gold-price-doesnt-correlate-safe-haven-asset-2020-1-1028798749",
        urlToImage: "https://images.markets.businessinsider.com/image/5e145a76855cc2346900f816-2400/shutterstock241760587.jpg",
        publishedAt: "2020-01-07T11:19:15Z",
        content: 'Shutterstock\r\n<ul><li>Bitcoin bulls like to claim that bitcoin is a great haven investment, like gold, in times of geopolitical uncertainty. </li><li>"These people ignore all the times that it moves inversely with sentiment," says Oanda\'s Craig Erlam.</li><li… [+2002 chars]'
    },
    {
        source: {
            id: "the-next-web",
            name: "The Next Web"
        },
        author: "Satoshi Nakaboto",
        title: "Satoshi Nakaboto: ‘Cryptocurrency isn’t a sausage-fest? Study suggests 43% of Bitcoin investors are women’",
        description: "Our robot colleague Satoshi Nakaboto writes about Bitcoin every fucking day. Welcome to another edition of Bitcoin Today, where I, Satoshi Nakaboto, tell you what’s been going on with Bitcoin in the past 24 hours. As Hannah Arendt used to say: Time to learn s…",
        url: "https://thenextweb.com/hardfork/2019/12/16/satoshi-nakaboto-cryptocurrency-isnt-a-sausage-fest-study-suggests-43-of-bitcoin-investors-are-women/",
        urlToImage: "https://img-cdn.tnwcdn.com/image/hardfork?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2019%2F08%2Fbitcoin_today-header_bitcoin_today.jpg&signature=30221b6a68049cc6bc3b58f3ddb38864",
        publishedAt: "2019-12-16T10:04:12Z",
        content: "Our robot colleague Satoshi Nakaboto writes about Bitcoin BTC every fucking day.\r\nWelcome to another edition of Bitcoin Today, where I, Satoshi Nakaboto, tell you whats been going on with Bitcoin in the past 24 hours. As Hannah Arendt used to say: Time to lea… [+2783 chars]"
    },
    {
        source: {
            id: "the-next-web",
            name: "The Next Web"
        },
        author: "Satoshi Nakaboto",
        title: "Satoshi Nakaboto: ‘John McAfee refuses to eat his dick’",
        description: "Our robot colleague Satoshi Nakaboto writes about Bitcoin every fucking day. Welcome to another edition of Bitcoin Today, where I, Satoshi Nakaboto, tell you what’s been going on with Bitcoin in the past 24 hours. As Satoshi Nakamoto used to say: We’re on the…",
        url: "https://thenextweb.com/hardfork/2020/01/06/satoshi-nakaboto-john-mcafee-refuses-to-eat-his-dick/",
        urlToImage: "https://img-cdn.tnwcdn.com/image/hardfork?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2019%2F08%2Fbitcoin_today-header_bitcoin_today.jpg&signature=30221b6a68049cc6bc3b58f3ddb38864",
        publishedAt: "2020-01-06T09:41:13Z",
        content: "Our robot colleague Satoshi Nakaboto writes about Bitcoin every fucking day.\r\nWelcome to another edition of Bitcoin Today, where I, Satoshi Nakaboto, tell you whats been going on with Bitcoin in the past 24 hours. As Satoshi Nakamoto used to say: Were on the … [+2502 chars]"
    },
    {
        source: {
            id: null,
            name: "Gizmodo.com"
        },
        author: "Matt Novak",
        title: "YouTube Restores Hundreds of Cryptocurrency Videos After Flagging Them as Harmful",
        description: "YouTube has restored hundreds of videos from dozens of channels that focus on crypotcurrency after they were removed earlier in the week. YouTubers like Chris Dunn report that their videos were flagged by YouTube for “harmful or dangerous content” and “sale o…",
        url: "https://gizmodo.com/youtube-restores-hundreds-of-cryptocurrency-videos-afte-1840677798",
        urlToImage: "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/jrzlic4p0n0uwyzweowt.jpg",
        publishedAt: "2019-12-27T16:38:00Z",
        content: "YouTube has restored hundreds of videos from dozens of channels that focus on crypotcurrency after they were removed earlier in the week. YouTubers like Chris Dunn report that their videos were flagged by YouTube for harmful or dangerous content and sale of r… [+2062 chars]"
    },
    {
        source: {
            id: "the-next-web",
            name: "The Next Web"
        },
        author: "Satoshi Nakaboto",
        title: "Satoshi Nakaboto: ‘Bitcoin price dives below $7,000’",
        description: "Our robot colleague Satoshi Nakaboto writes about Bitcoin every fucking day. Welcome to another edition of Bitcoin Today, where I, Satoshi Nakaboto, tell you what’s been going on with Bitcoin in the past 24 hours. As Jane Didion used to say: Crack open this t…",
        url: "https://thenextweb.com/hardfork/2019/12/17/satoshi-nakaboto-bitcoin-price-dives-below-7000/",
        urlToImage: "https://img-cdn.tnwcdn.com/image/hardfork?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2019%2F08%2Fbitcoin_today-header_bitcoin_today.jpg&signature=30221b6a68049cc6bc3b58f3ddb38864",
        publishedAt: "2019-12-17T10:50:07Z",
        content: "Our robot colleague Satoshi Nakaboto writes about Bitcoin BTC every fucking day.\r\nWelcome to another edition of Bitcoin Today, where I, Satoshi Nakaboto, tell you whats been going on with Bitcoin in the past 24 hours. As Jane Didion used to say: Crack open th… [+2589 chars]"
    },
    {
        source: {
            id: "the-next-web",
            name: "The Next Web"
        },
        author: "Satoshi Nakaboto",
        title: "Satoshi Nakaboto: ‘Company uses excess heat from Bitcoin mining to build office heater’",
        description: "Our robot colleague Satoshi Nakaboto writes about Bitcoin every fucking day. Welcome to another edition of Bitcoin Today, where I, Satoshi Nakaboto, tell you what’s been going on with Bitcoin in the past 24 hours. As Kant used to say: Your heart must go on! B…",
        url: "https://thenextweb.com/hardfork/2019/12/20/satoshi-nakaboto-company-uses-excess-heat-from-bitcoin-mining-to-build-office-heater/",
        urlToImage: "https://img-cdn.tnwcdn.com/image/hardfork?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2019%2F08%2Fbitcoin_today-header_bitcoin_today.jpg&signature=30221b6a68049cc6bc3b58f3ddb38864",
        publishedAt: "2019-12-20T10:58:55Z",
        content: "Our robot colleague Satoshi Nakaboto writes about Bitcoin BTC every fucking day.\r\nWelcome to another edition of Bitcoin Today, where I, Satoshi Nakaboto, tell you whats been going on with Bitcoin in the past 24 hours. As Kant used to say: Your heart must go o… [+2666 chars]"
    },
    {
        source: {
            id: "the-next-web",
            name: "The Next Web"
        },
        author: "Satoshi Nakaboto",
        title: "Satoshi Nakaboto: ‘Bitcoin consolidates just above $8,000’",
        description: "Our robot colleague Satoshi Nakaboto writes about Bitcoin every fucking day. Welcome to another edition of Bitcoin Today, where I, Satoshi Nakaboto, tell you what’s been going on with Bitcoin in the past 24 hours. As Marcus Aurelius used to say: We’re on the …",
        url: "https://thenextweb.com/hardfork/2020/01/13/satoshi-nakaboto-bitcoin-consolidates-just-above-8000/",
        urlToImage: "https://img-cdn.tnwcdn.com/image/hardfork?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2019%2F08%2Fbitcoin_today-header_bitcoin_today.jpg&signature=30221b6a68049cc6bc3b58f3ddb38864",
        publishedAt: "2020-01-13T09:57:34Z",
        content: "Our robot colleague Satoshi Nakaboto writes about Bitcoin BTC every fucking day.\r\nWelcome to another edition of Bitcoin Today, where I, Satoshi Nakaboto, tell you whats been going on with Bitcoin in the past 24 hours. As Marcus Aurelius used to say: Were on t… [+2584 chars]"
    },
    {
        source: {
            id: "the-next-web",
            name: "The Next Web"
        },
        author: "Satoshi Nakaboto",
        title: "Satoshi Nakaboto: ‘Wake up and smell the hopium — Bitcoin is up 9.5%’",
        description: "Our robot colleague Satoshi Nakaboto writes about Bitcoin every fucking day. Welcome to another edition of Bitcoin Today, where I, Satoshi Nakaboto, tell you what’s been going on with Bitcoin in the past 24 hours. As Stephen Hawking used to say: Let’s whip up…",
        url: "https://thenextweb.com/hardfork/2019/12/19/satoshi-nakaboto-wake-up-and-smell-the-hopium-bitcoin-is-up-9-5/",
        urlToImage: "https://img-cdn.tnwcdn.com/image/hardfork?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2019%2F08%2Fbitcoin_today-header_bitcoin_today.jpg&signature=30221b6a68049cc6bc3b58f3ddb38864",
        publishedAt: "2019-12-19T09:57:56Z",
        content: "Our robot colleague Satoshi Nakaboto writes about Bitcoin BTC every fucking day.\r\nWelcome to another edition of Bitcoin Today, where I, Satoshi Nakaboto, tell you whats been going on with Bitcoin in the past 24 hours. As Stephen Hawking used to say: Lets whip… [+2783 chars]"
    },
    {
        source: {
            id: "the-next-web",
            name: "The Next Web"
        },
        author: "Satoshi Nakaboto",
        title: "Satoshi Nakaboto: ‘Bitcoin options start trading on Chicago’s CME exchange’",
        description: "Our robot colleague Satoshi Nakaboto writes about Bitcoin every fucking day. Welcome to another edition of Bitcoin Today, where I, Satoshi Nakaboto, tell you what’s been going on with Bitcoin in the past 24 hours. As Descartes used to say: Let’s get it! Bitco…",
        url: "https://thenextweb.com/hardfork/2020/01/14/satoshi-nakaboto-bitcoin-options-start-trading-on-chicagos-cme-exchange/",
        urlToImage: "https://img-cdn.tnwcdn.com/image/hardfork?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2019%2F08%2Fbitcoin_today-header_bitcoin_today.jpg&signature=30221b6a68049cc6bc3b58f3ddb38864",
        publishedAt: "2020-01-14T09:53:25Z",
        content: "Our robot colleague Satoshi Nakaboto writes about Bitcoin BTC every fucking day.\r\nWelcome to another edition of Bitcoin Today, where I, Satoshi Nakaboto, tell you whats been going on with Bitcoin in the past 24 hours. As Descartes used to say: Lets get it!\r\nB… [+2620 chars]"
    },
    {
        source: {
            id: "the-next-web",
            name: "The Next Web"
        },
        author: "Satoshi Nakaboto",
        title: "Satoshi Nakaboto: ‘UK crypto exchange Coinfloor to delist Ethereum and Bitcoin Cash’",
        description: "Our robot colleague Satoshi Nakaboto writes about Bitcoin every fucking day. Welcome to another edition of Bitcoin Today, where I, Satoshi Nakaboto, tell you what’s been going on with Bitcoin in the past 24 hours. As Nightingale used to say: Fight the power! …",
        url: "https://thenextweb.com/hardfork/2019/12/18/satoshi-nakaboto-uk-crypto-exchange-coinfloor-to-delist-ethereum-and-bitcoin-cash/",
        urlToImage: "https://img-cdn.tnwcdn.com/image/hardfork?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2019%2F08%2Fbitcoin_today-header_bitcoin_today.jpg&signature=30221b6a68049cc6bc3b58f3ddb38864",
        publishedAt: "2019-12-18T09:54:16Z",
        content: "Our robot colleague Satoshi Nakaboto writes about Bitcoin BTC every fucking day.\r\nWelcome to another edition of Bitcoin Today, where I, Satoshi Nakaboto, tell you whats been going on with Bitcoin in the past 24 hours. As Nightingale used to say: Fight the pow… [+2682 chars]"
    },
    {
        source: {
            id: "the-next-web",
            name: "The Next Web"
        },
        author: "Satoshi Nakaboto",
        title: "Satoshi Nakaboto: ‘Bitcoin price surges 5% for second day in a row’",
        description: "Our robot colleague Satoshi Nakaboto writes about Bitcoin every fucking day. Welcome to another edition of Bitcoin Today, where I, Satoshi Nakaboto, tell you what’s been going on with Bitcoin in the past 24 hours. As Nikola Tesla used to say: Intelligence is …",
        url: "https://thenextweb.com/hardfork/2020/01/08/satoshi-nakaboto-bitcoin-price-surges-5-for-second-day-in-a-row/",
        urlToImage: "https://img-cdn.tnwcdn.com/image/hardfork?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2019%2F08%2Fbitcoin_today-header_bitcoin_today.jpg&signature=30221b6a68049cc6bc3b58f3ddb38864",
        publishedAt: "2020-01-08T09:54:03Z",
        content: "Our robot colleague Satoshi Nakaboto writes about Bitcoin BTC every fucking day.\r\nWelcome to another edition of Bitcoin Today, where I, Satoshi Nakaboto, tell you whats been going on with Bitcoin in the past 24 hours. As Nikola Tesla used to say: Intelligence… [+2546 chars]"
    },
    {
        source: {
            id: "the-next-web",
            name: "The Next Web"
        },
        author: "Satoshi Nakaboto",
        title: "Satoshi Nakaboto: ‘Bitcoin price shoots up 5%, nears $8K’",
        description: "Our robot colleague Satoshi Nakaboto writes about Bitcoin every fucking day. Welcome to another edition of Bitcoin Today, where I, Satoshi Nakaboto, tell you what’s been going on with Bitcoin in the past 24 hours. As Satoshi Nakamoto used to say: Intelligence…",
        url: "https://thenextweb.com/hardfork/2020/01/07/satoshi-nakaboto-bitcoin-price-shoots-up-5-nears-8k/",
        urlToImage: "https://img-cdn.tnwcdn.com/image/hardfork?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2019%2F08%2Fbitcoin_today-header_bitcoin_today.jpg&signature=30221b6a68049cc6bc3b58f3ddb38864",
        publishedAt: "2020-01-07T10:06:11Z",
        content: "Our robot colleague Satoshi Nakaboto writes about Bitcoin BTC every fucking day.\r\nWelcome to another edition of Bitcoin Today, where I, Satoshi Nakaboto, tell you whats been going on with Bitcoin in the past 24 hours. As Satoshi Nakamoto used to say: Intellig… [+2846 chars]"
    },
    {
        source: {
            id: "the-next-web",
            name: "The Next Web"
        },
        author: "Satoshi Nakaboto",
        title: "Satoshi Nakaboto: ‘Bitcoin upgrade makes transactions up to 75% cheaper, 2.5 times faster’",
        description: "Our robot colleague Satoshi Nakaboto writes about Bitcoin every fucking day. Welcome to another edition of Bitcoin Today, where I, Satoshi Nakaboto, tell you what’s been going on with Bitcoin in the past 24 hours. As Jane Didion used to say: Whip it, whip it,…",
        url: "https://thenextweb.com/hardfork/2020/01/10/satoshi-nakaboto-bitcoin-upgrade-makes-transactions-up-to-75-cheaper-2-5-times-faster/",
        urlToImage: "https://img-cdn.tnwcdn.com/image/hardfork?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2019%2F08%2Fbitcoin_today-header_bitcoin_today.jpg&signature=30221b6a68049cc6bc3b58f3ddb38864",
        publishedAt: "2020-01-10T10:01:42Z",
        content: "Our robot colleague Satoshi Nakaboto writes about Bitcoin BTC every fucking day.\r\nWelcome to another edition of Bitcoin Today, where I, Satoshi Nakaboto, tell you whats been going on with Bitcoin in the past 24 hours. As Jane Didion used to say: Whip it, whip… [+2708 chars]"
    },
    {
        source: {
            id: null,
            name: "Npr.org"
        },
        author: "Scott Horsley",
        title: "China To Test Digital Currency. Could It End Up Challenging The Dollar Globally?",
        description: "Bitcoin promises users anonymity, but transactions using China's digital currency would be tracked by its central bank. Experts say it could someday rival the dollar in international payments.",
        url: "https://www.npr.org/2020/01/13/795988512/china-to-test-digital-currency-could-it-end-up-challenging-the-dollar-globally",
        urlToImage: "https://media.npr.org/assets/img/2020/01/13/gettyimages-1030170936_wide-abb25b393a864b44aa8aeb736855bd5098f4eb3b.jpg?s=1400",
        publishedAt: "2020-01-13T22:27:35Z",
        content: "Alipay and WeChat QR codes for online payment are displayed at a vegetable stall in Nantong in China's eastern Jiangsu province. Now the country's central bank is preparing to test a digital currency.\r\nSTR/AFP via Getty Images\r\nChina is light years ahead of t… [+4496 chars]"
    },
    {
        source: {
            id: "business-insider",
            name: "Business Insider"
        },
        author: "Weng Cheong",
        title: "Here are all the ways bitcoin could help address income inequality in the 2020s",
        description: "As US income inequality reaches a record high, many wonder how blockchain technology and bitcoin fits in the equation. Digital currencies have the potential to bridge the global wealth gap, hedge-fund chief Mark Yusko told Business Insider. Developing regions…",
        url: "https://www.businessinsider.com/this-is-how-bitcoin-can-end-income-inequality-in-2020",
        urlToImage: "https://image.businessinsider.com/5dfa6d7271a5ca2d3d2f17f4?width=1200&format=jpeg",
        publishedAt: "2019-12-20T20:08:33Z",
        content: "The mysterious nature of bitcoin has led to common misperceptions about its use, with many in the mainstream relegating it to the realm of hackers and gamers.\r\nThe history of cryptocurrency shows quite a different purpose: Bitcoin was actually created with th… [+5097 chars]"
    },
    {
        source: {
            id: "the-next-web",
            name: "The Next Web"
        },
        author: "Yessi Bello Perez",
        title: "13 fun Bitcoin and blockchain tweets that epitomize this wild industry",
        description: "As another year draws to a close in the world of Bitcoin and blockchain, we’ve decided to look back at some of our favorite cryptocurrency tweets of 2019. Some are funny, others are weird, but we’ve loved each and every single one. So, sit back, relax, and en…",
        url: "https://thenextweb.com/hardfork/2019/12/24/fun-bitcoin-blockchain-tweets-2019/",
        urlToImage: "https://img-cdn.tnwcdn.com/image/hardfork?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2019%2F12%2FUntitled-design-60.jpg&signature=2c5f3c6682595c391a64392245f330d0",
        publishedAt: "2019-12-24T10:00:42Z",
        content: "As another year draws to a close in the world of Bitcoin BTC and blockchain, weve decided to look back at some of our favorite cryptocurrency tweets of 2019. \r\nSome are funny, others are weird, but weve loved each and every single one. \r\nSo, sit back, relax, … [+4181 chars]"
    },
    {
        source: {
            id: null,
            name: "Readwrite.com"
        },
        author: "Jessie Connor",
        title: "Blockchain – Impending Revolution in Global Stock Trading?",
        description: "What started out as a ledger for Bitcoin transactions, turned out to have so much more potential. It has become clear that blockchain technology has many promising applications. It’s immutable and decentralized nature makes it appealing to many industries. It…",
        url: "https://readwrite.com/2019/12/13/blockchain-impending-revolution-in-global-stock-trading/",
        urlToImage: "https://images.readwrite.com/wp-content/uploads/2019/12/Blockchain-Impending-Revolution-in-Global-Stock-Trading.jpg",
        publishedAt: "2019-12-13T16:00:25Z",
        content: "What started out as a ledger for Bitcoin transactions, turned out to have so much more potential. It has become clear that blockchain technology has many promising applications.\r\nIt’s immutable and decentralized nature makes it appealing to many industries. I… [+8093 chars]"
    }
];


/***/ }),

/***/ "./src/app/layout/mock-sources.ts":
/*!****************************************!*\
  !*** ./src/app/layout/mock-sources.ts ***!
  \****************************************/
/*! exports provided: SOURCES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SOURCES", function() { return SOURCES; });
const SOURCES = [
    { id: 'all-news', name: 'All News' },
    { id: 'local-news', name: 'Local News' },
    { id: 'abc-news', name: 'ABC News' },
    { id: 'aftenposten', name: 'Aftenposten' },
    { id: 'bbc-news', name: 'BBC News' },
    { id: 'financial-post', name: 'Financial Post' },
    { id: 'fortune', name: 'Fortune' },
    { id: 'google-news-ru', name: 'Google News (Russia)' },
    { id: 'mtv-news', name: 'MTV News' },
    { id: 'cbs-news', name: 'CBS News' },
];


/***/ }),

/***/ "./src/app/layout/services/article.service.ts":
/*!****************************************************!*\
  !*** ./src/app/layout/services/article.service.ts ***!
  \****************************************************/
/*! exports provided: ArticleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleService", function() { return ArticleService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


class ArticleService {
    constructor() {
        this.articleData = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](null);
        this.changeSuccess = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](false);
    }
    getNewsEdit() {
        return this.articleData.asObservable();
    }
    setNewsEdit(article) {
        this.articleData.next(article);
    }
    getChangeSuccess() {
        return this.changeSuccess.asObservable();
    }
    setChangeSuccess(value) {
        this.changeSuccess.next(value);
    }
    clear() {
        this.articleData.next(null);
    }
}
ArticleService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ factory: function ArticleService_Factory() { return new ArticleService(); }, token: ArticleService, providedIn: "root" });


/***/ }),

/***/ "./src/app/layout/services/news.service.ts":
/*!*************************************************!*\
  !*** ./src/app/layout/services/news.service.ts ***!
  \*************************************************/
/*! exports provided: NewsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsService", function() { return NewsService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/app/layout/services/utils.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _config_initConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config/initConfig */ "./src/app/config/initConfig.js");
/* harmony import */ var _config_initConfig__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_config_initConfig__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mock_news__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../mock-news */ "./src/app/layout/mock-news.ts");
/* harmony import */ var _mock_sources__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../mock-sources */ "./src/app/layout/mock-sources.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");









class NewsService {
    constructor(http) {
        this.http = http;
    }
    getMockedArticles() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_mock_news__WEBPACK_IMPORTED_MODULE_5__["ARTICLES"]);
    }
    getMockedSources() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_mock_sources__WEBPACK_IMPORTED_MODULE_6__["SOURCES"]);
    }
    getData(source, type, filter) {
        const url = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["queryMaker"])(source, type, filter);
        this.newsApiDataSources = this.useHttpClient(url);
        return this.newsApiDataSources;
    }
    useHttpClient(url) {
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
            if (data.articles) {
                return data.articles;
            }
            else if (data.sources) {
                return data.sources;
            }
            else {
                data.forEach(item => item.isLocalNews = true);
                return data;
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(err => {
            console.log(err);
            throw new Error(err);
        }));
    }
    onPostArticle(data) {
        const myHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Authorization', `Token ${localStorage.getItem('token')}`);
        this.http.post(`${_config_initConfig__WEBPACK_IMPORTED_MODULE_4___default.a.MDBASE_PATH}${_config_initConfig__WEBPACK_IMPORTED_MODULE_4___default.a.MDBASE_PATH_NEWS}`, data, { headers: myHeaders })
            .subscribe((val) => {
            console.log('POST call successful value returned in body', val);
        }, response => {
            console.log('POST call in error', response);
        }, () => {
            console.log('The POST observable is now completed.');
        });
    }
    onDeleteArticle(id) {
        const myHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Authorization', `Token ${localStorage.getItem('token')}`);
        this.http.delete(`${_config_initConfig__WEBPACK_IMPORTED_MODULE_4___default.a.MDBASE_PATH}${_config_initConfig__WEBPACK_IMPORTED_MODULE_4___default.a.MDBASE_PATH_NEWS}${id}`, { headers: myHeaders })
            .subscribe((val) => {
            console.log('DELETE call successful', val);
        }, response => {
            console.log('DELETE call in error', response);
        }, () => {
            console.log('The DELETE observable is now completed.');
        });
    }
    onGetByUrlArticle(url) {
        return this.http.get(`${_config_initConfig__WEBPACK_IMPORTED_MODULE_4___default.a.MDBASE_PATH}${_config_initConfig__WEBPACK_IMPORTED_MODULE_4___default.a.MDBASE_PATH_NEWS}${url}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
            return data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(err => {
            console.log(err);
            throw new Error(err);
        }));
    }
    onEditArticle(id, data) {
        const myHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Authorization', `Token ${localStorage.getItem('token')}`);
        this.http.put(`${_config_initConfig__WEBPACK_IMPORTED_MODULE_4___default.a.MDBASE_PATH}${_config_initConfig__WEBPACK_IMPORTED_MODULE_4___default.a.MDBASE_PATH_NEWS}${id}`, data, { headers: myHeaders })
            .subscribe((val) => {
            console.log('PUT call successful value returned in body', val);
        }, response => {
            console.log('PUT call in error', response);
        }, () => {
            console.log('The PUT observable is now completed.');
        });
    }
}
NewsService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({ factory: function NewsService_Factory() { return new NewsService(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); }, token: NewsService, providedIn: "root" });


/***/ }),

/***/ "./src/app/layout/services/utils.ts":
/*!******************************************!*\
  !*** ./src/app/layout/services/utils.ts ***!
  \******************************************/
/*! exports provided: queryMaker, ɵ0, ɵ1, ɵ2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryMaker", function() { return queryMaker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ0", function() { return ɵ0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ1", function() { return ɵ1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ2", function() { return ɵ2; });
/* harmony import */ var _config_initConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config/initConfig */ "./src/app/config/initConfig.js");
/* harmony import */ var _config_initConfig__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_config_initConfig__WEBPACK_IMPORTED_MODULE_0__);

const queryMaker = (param, type, filter) => {
    if (param === 'local-news') {
        return urlForLocalDB(param, type, filter);
    }
    else {
        return urlForApiNews(param, type, filter);
    }
};
const ɵ0 = queryMaker;
const urlForLocalDB = (param, type, filter) => {
    let newsUrl = `${_config_initConfig__WEBPACK_IMPORTED_MODULE_0___default.a.MDBASE_PATH}${_config_initConfig__WEBPACK_IMPORTED_MODULE_0___default.a.MDBASE_PATH_NEWS}`;
    switch (type) {
        case 'bySource':
            newsUrl = `${_config_initConfig__WEBPACK_IMPORTED_MODULE_0___default.a.MDBASE_PATH}${_config_initConfig__WEBPACK_IMPORTED_MODULE_0___default.a.MDBASE_PATH_NEWS}`;
            break;
        case 'byFilterValue':
            newsUrl = `${_config_initConfig__WEBPACK_IMPORTED_MODULE_0___default.a.MDBASE_PATH}${_config_initConfig__WEBPACK_IMPORTED_MODULE_0___default.a.MDBASE_PATH_SEARCH}${filter}`;
            break;
        default:
            newsUrl = `${_config_initConfig__WEBPACK_IMPORTED_MODULE_0___default.a.MDBASE_PATH}${_config_initConfig__WEBPACK_IMPORTED_MODULE_0___default.a.MDBASE_PATH_NEWS}`;
            break;
    }
    return newsUrl;
};
const ɵ1 = urlForLocalDB;
const urlForApiNews = (param, type, filter) => {
    let newsUrl = `${_config_initConfig__WEBPACK_IMPORTED_MODULE_0___default.a.NEWS_API_PATH}`;
    switch (type) {
        case 'bySource':
            newsUrl += `${_config_initConfig__WEBPACK_IMPORTED_MODULE_0___default.a.NEWS_TOPHEAD}?sources=${param}&apiKey=${_config_initConfig__WEBPACK_IMPORTED_MODULE_0___default.a.NEWS_API_KEY}`;
            break;
        case 'byFilterValue':
            newsUrl += `everything?q=${param}&apiKey=${_config_initConfig__WEBPACK_IMPORTED_MODULE_0___default.a.NEWS_API_KEY}`;
            break;
        case 'topHeadlines':
            newsUrl += `${_config_initConfig__WEBPACK_IMPORTED_MODULE_0___default.a.NEWS_TOPHEAD}?country=us&apiKey=${_config_initConfig__WEBPACK_IMPORTED_MODULE_0___default.a.NEWS_API_KEY}`;
            break;
        case 'sources':
            newsUrl += `sources?apiKey=${_config_initConfig__WEBPACK_IMPORTED_MODULE_0___default.a.NEWS_API_KEY}`;
            break;
        default:
            newsUrl += `${_config_initConfig__WEBPACK_IMPORTED_MODULE_0___default.a.NEWS_TOPHEAD}?country=us&apiKey=${_config_initConfig__WEBPACK_IMPORTED_MODULE_0___default.a.NEWS_API_KEY}`;
            break;
    }
    return newsUrl;
};
const ɵ2 = urlForApiNews;




/***/ }),

/***/ "./src/app/shared/guard/auth.guard.ts":
/*!********************************************!*\
  !*** ./src/app/shared/guard/auth.guard.ts ***!
  \********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
class AuthGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate() {
        if (localStorage.getItem('isLoggedin')) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    }
}


/***/ }),

/***/ "./src/app/shared/guard/index.ts":
/*!***************************************!*\
  !*** ./src/app/shared/guard/index.ts ***!
  \***************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.guard */ "./src/app/shared/guard/auth.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]; });




/***/ }),

/***/ "./src/app/shared/index.ts":
/*!*********************************!*\
  !*** ./src/app/shared/index.ts ***!
  \*********************************/
/*! exports provided: AuthGuard, PageHeaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules */ "./src/app/shared/modules/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PageHeaderModule", function() { return _modules__WEBPACK_IMPORTED_MODULE_0__["PageHeaderModule"]; });

/* harmony import */ var _guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./guard */ "./src/app/shared/guard/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]; });





/***/ }),

/***/ "./src/app/shared/modules/index.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/modules/index.ts ***!
  \*****************************************/
/*! exports provided: PageHeaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-header/page-header.module */ "./src/app/shared/modules/page-header/page-header.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PageHeaderModule", function() { return _page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__["PageHeaderModule"]; });




/***/ }),

/***/ "./src/app/shared/modules/page-header/page-header.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/modules/page-header/page-header.module.ts ***!
  \******************************************************************/
/*! exports provided: PageHeaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageHeaderModule", function() { return PageHeaderModule; });
class PageHeaderModule {
}


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
    production: false
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module.ngfactory */ "./src/app/app.module.ngfactory.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModuleFactory(_app_app_module_ngfactory__WEBPACK_IMPORTED_MODULE_2__["AppModuleNgFactory"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\JavaScript\FrontCamp\task-8_angular_p1\fcp-angular-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map