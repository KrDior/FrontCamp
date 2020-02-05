function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tables-tables-module-ngfactory"], {
  /***/
  "./src/app/layout/tables/components/article-item-factory-resolver/article-item-factory-resolver.component.ngfactory.js":
  /*!*****************************************************************************************************************************!*\
    !*** ./src/app/layout/tables/components/article-item-factory-resolver/article-item-factory-resolver.component.ngfactory.js ***!
    \*****************************************************************************************************************************/

  /*! exports provided: RenderType_ArticleItemFactoryResolverComponent, View_ArticleItemFactoryResolverComponent_0, View_ArticleItemFactoryResolverComponent_Host_0, ArticleItemFactoryResolverComponentNgFactory */

  /***/
  function srcAppLayoutTablesComponentsArticleItemFactoryResolverArticleItemFactoryResolverComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_ArticleItemFactoryResolverComponent", function () {
      return RenderType_ArticleItemFactoryResolverComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_ArticleItemFactoryResolverComponent_0", function () {
      return View_ArticleItemFactoryResolverComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_ArticleItemFactoryResolverComponent_Host_0", function () {
      return View_ArticleItemFactoryResolverComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArticleItemFactoryResolverComponentNgFactory", function () {
      return ArticleItemFactoryResolverComponentNgFactory;
    });
    /* harmony import */


    var _article_item_factory_resolver_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./article-item-factory-resolver.component.scss.shim.ngstyle */
    "./src/app/layout/tables/components/article-item-factory-resolver/article-item-factory-resolver.component.scss.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _components_modal_window_modal_window_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../components/modal-window/modal-window.component.ngfactory */
    "./src/app/components/modal-window/modal-window.component.ngfactory.js");
    /* harmony import */


    var _components_modal_window_modal_window_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../components/modal-window/modal-window.component */
    "./src/app/components/modal-window/modal-window.component.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _article_item_factory_resolver_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./article-item-factory-resolver.component */
    "./src/app/layout/tables/components/article-item-factory-resolver/article-item-factory-resolver.component.ts");
    /* harmony import */


    var _services_article_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../services/article.service */
    "./src/app/layout/services/article.service.ts");
    /* harmony import */


    var _services_news_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../services/news.service */
    "./src/app/layout/services/news.service.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles_ArticleItemFactoryResolverComponent = [_article_item_factory_resolver_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_ArticleItemFactoryResolverComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_ArticleItemFactoryResolverComponent,
      data: {}
    });

    function View_ArticleItemFactoryResolverComponent_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], null, null);
    }

    function View_ArticleItemFactoryResolverComponent_3(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "input", [["class", "btn btn-default ml-auto mr-3 bd-highlight card-button"], ["type", "button"], ["value", "Edit"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).onClick() !== false;
          ad = pd_0 && ad;
        }

        if ("click" === en) {
          var pd_1 = _co.passCurrentArticleData(_v.parent.context.$implicit) !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, [[3, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], {
        routerLink: [0, "routerLink"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](2, 1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]]], {
        routerLinkActive: [0, "routerLinkActive"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 3, {
        links: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 4, {
        linksWithHrefs: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](6, 1)], function (_ck, _v) {
        var currVal_0 = _ck(_v, 2, 0, "/editpage");

        _ck(_v, 1, 0, currVal_0);

        var currVal_1 = _ck(_v, 6, 0, "router-link-active");

        _ck(_v, 3, 0, currVal_1);
      }, null);
    }

    function View_ArticleItemFactoryResolverComponent_4(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-modal-window", [["class", "btn btn-danger mr-4 bd-highlight card-button"], ["value", "Delete"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co.deleteArticle(_v.parent.context.$implicit) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _components_modal_window_modal_window_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_ModalWindowComponent_0"], _components_modal_window_modal_window_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_ModalWindowComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 770048, null, 0, _components_modal_window_modal_window_component__WEBPACK_IMPORTED_MODULE_4__["ModalWindowComponent"], [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    function View_ArticleItemFactoryResolverComponent_2(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 26, "div", [["class", "card mb-3 align-middle"], ["style", "max-width: 1000px;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 25, "div", [["class", "row no-gutters align-items-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "div", [["class", "col-md-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 0, "img", [["alt", "news-image"], ["class", "card-img"]], [[8, "src", 4]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 22, "div", [["class", "card-info col-md-8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 12, "div", [["class", "card-body pt-0 pb-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "h5", [["class", "card-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](7, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "p", [["class", "card-description card-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](9, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 7, "a", [["class", "text-decoration-none"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false;
          ad = pd_0 && ad;
        }

        if ("click" === en) {
          var pd_1 = _co.passCurrentArticleData(_v.context.$implicit) !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 671744, [[2, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["LocationStrategy"]], {
        routerLink: [0, "routerLink"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](12, 2), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]]], {
        routerLinkActive: [0, "routerLinkActive"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, {
        links: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, {
        linksWithHrefs: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](16, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](17, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 8, "div", [["class", "d-flex bd-highlight"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 3, "p", [["class", "card-text bd-highlight pl-5 pt-1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 2, "small", [["class", "text-muted"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](21, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](22, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ArticleItemFactoryResolverComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ArticleItemFactoryResolverComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](26, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;

        var currVal_5 = _ck(_v, 12, 0, "/newslist", _co.editUrl(_v.context.$implicit));

        _ck(_v, 11, 0, currVal_5);

        var currVal_6 = _ck(_v, 16, 0, "router-link-active");

        _ck(_v, 13, 0, currVal_6);

        var currVal_9 = _v.context.$implicit.isLocalNews;

        _ck(_v, 24, 0, currVal_9);

        var currVal_10 = _v.context.$implicit.isLocalNews;

        _ck(_v, 26, 0, currVal_10);
      }, function (_ck, _v) {
        var _co = _v.component;

        var currVal_0 = _co.setImage(_v.context.$implicit);

        _ck(_v, 3, 0, currVal_0);

        var currVal_1 = _v.context.$implicit == null ? null : _v.context.$implicit.title;

        _ck(_v, 7, 0, currVal_1);

        var currVal_2 = _v.context.$implicit == null ? null : _v.context.$implicit.description;

        _ck(_v, 9, 0, currVal_2);

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).target;

        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).href;

        _ck(_v, 10, 0, currVal_3, currVal_4);

        var currVal_7 = "Read more...";

        _ck(_v, 17, 0, currVal_7);

        var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 21, 0, _ck(_v, 22, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), _v.context.$implicit == null ? null : _v.context.$implicit.publishedAt));

        _ck(_v, 21, 0, currVal_8);
      });
    }

    function View_ArticleItemFactoryResolverComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 2, null, View_ArticleItemFactoryResolverComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 540672, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgTemplateOutlet"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], {
        ngTemplateOutletContext: [0, "ngTemplateOutletContext"],
        ngTemplateOutlet: [1, "ngTemplateOutlet"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](3, {
        $implicit: 0
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["readOnlyTemplate", 2]], null, 0, null, View_ArticleItemFactoryResolverComponent_2))], function (_ck, _v) {
        var _co = _v.component;

        var currVal_0 = _ck(_v, 3, 0, _co.article);

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4);

        _ck(_v, 2, 0, currVal_0, currVal_1);
      }, null);
    }

    function View_ArticleItemFactoryResolverComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-article-item-factory-resolver", [], null, null, null, View_ArticleItemFactoryResolverComponent_0, RenderType_ArticleItemFactoryResolverComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _article_item_factory_resolver_component__WEBPACK_IMPORTED_MODULE_7__["ArticleItemFactoryResolverComponent"], [_services_article_service__WEBPACK_IMPORTED_MODULE_8__["ArticleService"], _services_news_service__WEBPACK_IMPORTED_MODULE_9__["NewsService"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var ArticleItemFactoryResolverComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-article-item-factory-resolver", _article_item_factory_resolver_component__WEBPACK_IMPORTED_MODULE_7__["ArticleItemFactoryResolverComponent"], View_ArticleItemFactoryResolverComponent_Host_0, {
      article: "article"
    }, {
      deleteEvent: "deleteEvent"
    }, []);
    /***/

  },

  /***/
  "./src/app/layout/tables/components/article-item-factory-resolver/article-item-factory-resolver.component.scss.shim.ngstyle.js":
  /*!*************************************************************************************************************************************!*\
    !*** ./src/app/layout/tables/components/article-item-factory-resolver/article-item-factory-resolver.component.scss.shim.ngstyle.js ***!
    \*************************************************************************************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppLayoutTablesComponentsArticleItemFactoryResolverArticleItemFactoryResolverComponentScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles = [".card-info[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\n.card-info[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  margin-bottom: 0.5rem;\n}\n.card-info[_ngcontent-%COMP%]   .card-description[_ngcontent-%COMP%] {\n  margin-top: 0.75rem;\n}\n.card-info[_ngcontent-%COMP%]   .card-button[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3RhYmxlcy9jb21wb25lbnRzL2FydGljbGUtaXRlbS1mYWN0b3J5LXJlc29sdmVyL0U6XFxKYXZhU2NyaXB0XFxGcm9udENhbXBcXHRhc2stOF9hbmd1bGFyX3AxXFxmY3AtYW5ndWxhci1hcHAvc3JjXFxhcHBcXGxheW91dFxcdGFibGVzXFxjb21wb25lbnRzXFxhcnRpY2xlLWl0ZW0tZmFjdG9yeS1yZXNvbHZlclxcYXJ0aWNsZS1pdGVtLWZhY3RvcnktcmVzb2x2ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xheW91dC90YWJsZXMvY29tcG9uZW50cy9hcnRpY2xlLWl0ZW0tZmFjdG9yeS1yZXNvbHZlci9hcnRpY2xlLWl0ZW0tZmFjdG9yeS1yZXNvbHZlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGlCQUFBO0FDQUo7QURFRTtFQUNFLGdCQUFBO0VBQ0EscUJBQUE7QUNBSjtBREVFO0VBQ0UsbUJBQUE7QUNBSjtBREVFO0VBQ0UscUJBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC90YWJsZXMvY29tcG9uZW50cy9hcnRpY2xlLWl0ZW0tZmFjdG9yeS1yZXNvbHZlci9hcnRpY2xlLWl0ZW0tZmFjdG9yeS1yZXNvbHZlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLWluZm8ge1xuICAuY2FyZC10ZXh0IHtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgfVxuICAuY2FyZC10aXRsZSB7XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gIH1cbiAgLmNhcmQtZGVzY3JpcHRpb24ge1xuICAgIG1hcmdpbi10b3A6IDAuNzVyZW07XG4gIH1cbiAgLmNhcmQtYnV0dG9uIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gIH1cbn1cbiIsIi5jYXJkLWluZm8gLmNhcmQtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuLmNhcmQtaW5mbyAuY2FyZC10aXRsZSB7XG4gIG1hcmdpbi10b3A6IDFyZW07XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbn1cbi5jYXJkLWluZm8gLmNhcmQtZGVzY3JpcHRpb24ge1xuICBtYXJnaW4tdG9wOiAwLjc1cmVtO1xufVxuLmNhcmQtaW5mbyAuY2FyZC1idXR0b24ge1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG59Il19 */"];
    /***/
  },

  /***/
  "./src/app/layout/tables/components/article-item-factory-resolver/article-item-factory-resolver.component.ts":
  /*!*******************************************************************************************************************!*\
    !*** ./src/app/layout/tables/components/article-item-factory-resolver/article-item-factory-resolver.component.ts ***!
    \*******************************************************************************************************************/

  /*! exports provided: ArticleItemFactoryResolverComponent */

  /***/
  function srcAppLayoutTablesComponentsArticleItemFactoryResolverArticleItemFactoryResolverComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArticleItemFactoryResolverComponent", function () {
      return ArticleItemFactoryResolverComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ArticleItemFactoryResolverComponent =
    /*#__PURE__*/
    function () {
      function ArticleItemFactoryResolverComponent(articleService, newsService) {
        _classCallCheck(this, ArticleItemFactoryResolverComponent);

        this.articleService = articleService;
        this.newsService = newsService;
        this.deleteEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(ArticleItemFactoryResolverComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "passCurrentArticleData",
        value: function passCurrentArticleData(article) {
          this.articleService.setNewsEdit(article);
        }
      }, {
        key: "editUrl",
        value: function editUrl(article) {
          if (article.isLocalNews) {
            return article.url ? article.url : article.title.split(' ').join('-&').toLocaleLowerCase();
          } else {
            return article.title.split(' ').join('-&').toLocaleLowerCase();
          }
        }
      }, {
        key: "setImage",
        value: function setImage(article) {
          if (article.pictureFile && article.pictureFile !== 'null') {
            return article.pictureFile;
          } else if (article.urlToImage) {
            return article.urlToImage;
          } else {
            return 'assets/images/album-default.png';
          }
        }
      }, {
        key: "deleteArticle",
        value: function deleteArticle(article) {
          this.newsService.onDeleteArticle(article._id);
          this.deleteEvent.emit(article);
        }
      }]);

      return ArticleItemFactoryResolverComponent;
    }();
    /***/

  },

  /***/
  "./src/app/layout/tables/components/filter-panel/filter-panel.component.ngfactory.js":
  /*!*******************************************************************************************!*\
    !*** ./src/app/layout/tables/components/filter-panel/filter-panel.component.ngfactory.js ***!
    \*******************************************************************************************/

  /*! exports provided: RenderType_FilterPanelComponent, View_FilterPanelComponent_0, View_FilterPanelComponent_Host_0, FilterPanelComponentNgFactory */

  /***/
  function srcAppLayoutTablesComponentsFilterPanelFilterPanelComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_FilterPanelComponent", function () {
      return RenderType_FilterPanelComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_FilterPanelComponent_0", function () {
      return View_FilterPanelComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_FilterPanelComponent_Host_0", function () {
      return View_FilterPanelComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FilterPanelComponentNgFactory", function () {
      return FilterPanelComponentNgFactory;
    });
    /* harmony import */


    var _filter_panel_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./filter-panel.component.scss.shim.ngstyle */
    "./src/app/layout/tables/components/filter-panel/filter-panel.component.scss.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _filter_panel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./filter-panel.component */
    "./src/app/layout/tables/components/filter-panel/filter-panel.component.ts");
    /* harmony import */


    var _services_news_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../services/news.service */
    "./src/app/layout/services/news.service.ts");
    /* harmony import */


    var _services_article_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../services/article.service */
    "./src/app/layout/services/article.service.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles_FilterPanelComponent = [_filter_panel_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_FilterPanelComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_FilterPanelComponent,
      data: {}
    });

    function View_FilterPanelComponent_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "option", [["data-id", "source.id"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [8, null]], {
        value: [0, "value"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [8, null]], {
        value: [0, "value"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, ["", ""]))], function (_ck, _v) {
        var currVal_0 = _v.context.$implicit.name;

        _ck(_v, 1, 0, currVal_0);

        var currVal_1 = _v.context.$implicit.name;

        _ck(_v, 2, 0, currVal_1);
      }, function (_ck, _v) {
        var currVal_2 = _v.context.$implicit.name;

        _ck(_v, 3, 0, currVal_2);
      });
    }

    function View_FilterPanelComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 37, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 6, "div", [["class", "col-3 input-group mb-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 2, "div", [["class", "input-group-prepend"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "label", [["class", "input-group-text"], ["for", "inputGroupSelect01"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Select source"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 2, "select", [["class", "custom-select"], ["id", "inputGroupSelect01"]], [[1, "disabled", 0]], [[null, "change"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("change" === en) {
          var pd_0 = _co.onChangeSource($event.target.value) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_FilterPanelComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 6, "div", [["class", "col-3 pr-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 5, "input", [["class", "form-control"], ["id", "typeahead-basic"], ["type", "text"], ["value", ""]], [[1, "disabled", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("input" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10)._handleInput($event.target.value) !== false;
          ad = pd_0 && ad;
        }

        if ("blur" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).onTouched() !== false;
          ad = pd_1 && ad;
        }

        if ("compositionstart" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10)._compositionStart() !== false;
          ad = pd_2 && ad;
        }

        if ("compositionend" === en) {
          var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10)._compositionEnd($event.target.value) !== false;
          ad = pd_3 && ad;
        }

        if ("ngModelChange" === en) {
          var pd_4 = (_co.news.filterValue = $event) !== false;
          ad = pd_4 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]]], {
        model: [0, "model"]
      }, {
        update: "ngModelChange"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 2, "div", [["class", "col-1 ml-0 pl-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 1, "button", [["class", "btn btn-outline-success"], ["id", "dropdownBasic1"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co.filterSubmit(_co.news.filterValue) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Filter"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 10, "div", [["class", "col-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 9, "label", [["class", "btn"], ["ngbButtonLabel", ""]], [[2, "btn", null], [2, "active", null], [2, "disabled", null], [2, "focus", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 16384, null, 0, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbButtonLabel"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 6, "input", [["ngbButton", ""], ["type", "checkbox"]], [[8, "checked", 0], [8, "disabled", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "change"], [null, "blur"], [null, "focus"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("change" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).onChange($event.target.checked) !== false;
          ad = pd_0 && ad;
        }

        if ("blur" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).onTouched() !== false;
          ad = pd_1 && ad;
        }

        if ("change" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).onInputChange($event) !== false;
          ad = pd_2 && ad;
        }

        if ("focus" === en) {
          var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).focused = true) !== false;
          ad = pd_3 && ad;
        }

        if ("blur" === en) {
          var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).focused = false) !== false;
          ad = pd_4 && ad;
        }

        if ("change" === en) {
          var pd_5 = _co.onFilterChange() !== false;
          ad = pd_5 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["CheckboxControlValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 16384, null, 0, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbCheckBox"], [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbButtonLabel"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0, p1_0) {
        return [p0_0, p1_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["CheckboxControlValueAccessor"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbCheckBox"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](25, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]]], {
        model: [0, "model"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](27, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Only created by me "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 0, null, null, 8, "div", [["class", "col-2 mr-0 pr-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](30, 0, null, null, 7, "button", [["class", "btn btn-outline-primary col-10"], ["id", "dropdownBasic1"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).onClick() !== false;
          ad = pd_0 && ad;
        }

        if ("click" === en) {
          var pd_1 = _co.addNews() !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](31, 16384, [[1, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], {
        routerLink: [0, "routerLink"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](32, 1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](33, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]]], {
        routerLinkActive: [0, "routerLinkActive"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, {
        links: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, {
        linksWithHrefs: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](36, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Add article"]))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_1 = _co.sources$;

        _ck(_v, 7, 0, currVal_1);

        var currVal_10 = _co.news.filterValue;

        _ck(_v, 12, 0, currVal_10);

        var currVal_24 = _co.news.createdByMe;

        _ck(_v, 25, 0, currVal_24);

        var currVal_25 = _ck(_v, 32, 0, "/editpage");

        _ck(_v, 31, 0, currVal_25);

        var currVal_26 = _ck(_v, 36, 0, "router-link-active");

        _ck(_v, 33, 0, currVal_26);
      }, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.news.createdByMe || _co.news.filterValue ? "disabled" : null;

        _ck(_v, 5, 0, currVal_0);

        var currVal_2 = _co.news.createdByMe ? "disabled" : null;

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).ngClassUntouched;

        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).ngClassTouched;

        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).ngClassPristine;

        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).ngClassDirty;

        var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).ngClassValid;

        var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).ngClassInvalid;

        var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).ngClassPending;

        _ck(_v, 9, 0, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9);

        var currVal_11 = true;

        var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).active;

        var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).disabled;

        var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).focused;

        _ck(_v, 19, 0, currVal_11, currVal_12, currVal_13, currVal_14);

        var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).checked;

        var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).disabled;

        var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).ngClassUntouched;

        var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).ngClassTouched;

        var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).ngClassPristine;

        var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).ngClassDirty;

        var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).ngClassValid;

        var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).ngClassInvalid;

        var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).ngClassPending;

        _ck(_v, 21, 0, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23);
      });
    }

    function View_FilterPanelComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-filter-panel", [], null, null, null, View_FilterPanelComponent_0, RenderType_FilterPanelComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _filter_panel_component__WEBPACK_IMPORTED_MODULE_6__["FilterPanelComponent"], [_services_news_service__WEBPACK_IMPORTED_MODULE_7__["NewsService"], _services_article_service__WEBPACK_IMPORTED_MODULE_8__["ArticleService"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var FilterPanelComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-filter-panel", _filter_panel_component__WEBPACK_IMPORTED_MODULE_6__["FilterPanelComponent"], View_FilterPanelComponent_Host_0, {}, {
      newsSourceName: "newsSourceName",
      filterValue: "filterValue",
      toggle: "toggle"
    }, []);
    /***/

  },

  /***/
  "./src/app/layout/tables/components/filter-panel/filter-panel.component.scss.shim.ngstyle.js":
  /*!***************************************************************************************************!*\
    !*** ./src/app/layout/tables/components/filter-panel/filter-panel.component.scss.shim.ngstyle.js ***!
    \***************************************************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppLayoutTablesComponentsFilterPanelFilterPanelComponentScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC90YWJsZXMvY29tcG9uZW50cy9maWx0ZXItcGFuZWwvZmlsdGVyLXBhbmVsLmNvbXBvbmVudC5zY3NzIn0= */"];
    /***/
  },

  /***/
  "./src/app/layout/tables/components/filter-panel/filter-panel.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/layout/tables/components/filter-panel/filter-panel.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: FilterPanelComponent */

  /***/
  function srcAppLayoutTablesComponentsFilterPanelFilterPanelComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FilterPanelComponent", function () {
      return FilterPanelComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FilterPanelComponent =
    /*#__PURE__*/
    function () {
      function FilterPanelComponent(newsService, articleService) {
        _classCallCheck(this, FilterPanelComponent);

        this.newsService = newsService;
        this.articleService = articleService;
        this.newsSourceName = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.filterValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.toggle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.news = {
          createdByMe: false,
          filterValue: '',
          filterByValue: ''
        };
        this.sources$ = [{
          id: 'all-news',
          name: 'All News'
        }, {
          id: 'local-news',
          name: 'Local News'
        }];
      }

      _createClass(FilterPanelComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.newsService.getData('apinews', 'sources').subscribe(function (sources) {
            return _this.sources$ = [].concat(_toConsumableArray(_this.sources$), _toConsumableArray(sources));
          });
        }
      }, {
        key: "onChangeSource",
        value: function onChangeSource(sourceName) {
          var sourceId;
          this.sources$.forEach(function (source) {
            if (source.name === sourceName) {
              sourceId = source.id;
            }
          });
          this.newsSourceName.emit([sourceName, sourceId]);
        }
      }, {
        key: "filterSubmit",
        value: function filterSubmit(value) {
          this.filterValue.emit(value);
          this.news.filterValue = '';
        }
      }, {
        key: "onFilterChange",
        value: function onFilterChange() {
          this.news.createdByMe = !this.news.createdByMe;
          this.toggle.emit(this.news.createdByMe);
        }
      }, {
        key: "addNews",
        value: function addNews() {
          this.articleService.setNewsEdit(null);
        }
      }]);

      return FilterPanelComponent;
    }();
    /***/

  },

  /***/
  "./src/app/layout/tables/pipes/filter.pipe.ts":
  /*!****************************************************!*\
    !*** ./src/app/layout/tables/pipes/filter.pipe.ts ***!
    \****************************************************/

  /*! exports provided: LocalNewsFilterPipe */

  /***/
  function srcAppLayoutTablesPipesFilterPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LocalNewsFilterPipe", function () {
      return LocalNewsFilterPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var LocalNewsFilterPipe =
    /*#__PURE__*/
    function () {
      function LocalNewsFilterPipe() {
        _classCallCheck(this, LocalNewsFilterPipe);
      }

      _createClass(LocalNewsFilterPipe, [{
        key: "transform",
        value: function transform(articles$, term) {
          return term ? articles$.filter(function (article) {
            return article.isLocalNews;
          }) : articles$;
        }
      }]);

      return LocalNewsFilterPipe;
    }();
    /***/

  },

  /***/
  "./src/app/layout/tables/tables-routing.module.ts":
  /*!********************************************************!*\
    !*** ./src/app/layout/tables/tables-routing.module.ts ***!
    \********************************************************/

  /*! exports provided: TablesRoutingModule */

  /***/
  function srcAppLayoutTablesTablesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TablesRoutingModule", function () {
      return TablesRoutingModule;
    });
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _tables_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./tables.component */
    "./src/app/layout/tables/tables.component.ts");

    var routes = [{
      path: '',
      component: _tables_component__WEBPACK_IMPORTED_MODULE_1__["TablesComponent"]
    }];

    var TablesRoutingModule = function TablesRoutingModule() {
      _classCallCheck(this, TablesRoutingModule);
    };
    /***/

  },

  /***/
  "./src/app/layout/tables/tables.component.ngfactory.js":
  /*!*************************************************************!*\
    !*** ./src/app/layout/tables/tables.component.ngfactory.js ***!
    \*************************************************************/

  /*! exports provided: RenderType_TablesComponent, View_TablesComponent_0, View_TablesComponent_Host_0, TablesComponentNgFactory */

  /***/
  function srcAppLayoutTablesTablesComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_TablesComponent", function () {
      return RenderType_TablesComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_TablesComponent_0", function () {
      return View_TablesComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_TablesComponent_Host_0", function () {
      return View_TablesComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TablesComponentNgFactory", function () {
      return TablesComponentNgFactory;
    });
    /* harmony import */


    var _tables_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./tables.component.scss.shim.ngstyle */
    "./src/app/layout/tables/tables.component.scss.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pipes/filter.pipe */
    "./src/app/layout/tables/pipes/filter.pipe.ts");
    /* harmony import */


    var _shared_modules_page_header_page_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../shared/modules/page-header/page-header.component.ngfactory */
    "./src/app/shared/modules/page-header/page-header.component.ngfactory.js");
    /* harmony import */


    var _shared_modules_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../shared/modules/page-header/page-header.component */
    "./src/app/shared/modules/page-header/page-header.component.ts");
    /* harmony import */


    var _components_filter_panel_filter_panel_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/filter-panel/filter-panel.component.ngfactory */
    "./src/app/layout/tables/components/filter-panel/filter-panel.component.ngfactory.js");
    /* harmony import */


    var _components_filter_panel_filter_panel_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/filter-panel/filter-panel.component */
    "./src/app/layout/tables/components/filter-panel/filter-panel.component.ts");
    /* harmony import */


    var _services_news_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../services/news.service */
    "./src/app/layout/services/news.service.ts");
    /* harmony import */


    var _services_article_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../services/article.service */
    "./src/app/layout/services/article.service.ts");
    /* harmony import */


    var _tables_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./tables.component */
    "./src/app/layout/tables/tables.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles_TablesComponent = [_tables_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_TablesComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_TablesComponent,
      data: {
        "animation": [{
          type: 7,
          name: "routerTransition",
          definitions: [],
          options: {}
        }]
      }
    });

    function View_TablesComponent_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["No Local news found ", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](3, 2)], null, function (_ck, _v) {
        var _co = _v.component;

        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 2, 0, _ck(_v, 3, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), _co.articles$, _co.showOnlyLocalNews)).length;

        _ck(_v, 2, 0, currVal_0);
      });
    }

    function View_TablesComponent_3(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "button", [["class", "btn btn-secondary btn-lg btn-block"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co.showMoreNews() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Show more news"]))], null, null);
    }

    function View_TablesComponent_2(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 16777216, [[2, 3], ["container", 1]], null, 0, "div", [["class", "bd-highlight d-flex justify-content-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 2, null, View_TablesComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](4, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) {
        var _co = _v.component;

        var currVal_0 = _co.newsItemShow <= _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 3, 0, _ck(_v, 4, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), _co.articles$, _co.showOnlyLocalNews)).length;

        _ck(_v, 3, 0, currVal_0);
      }, null);
    }

    function View_TablesComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_3__["LocalNewsFilterPipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](671088640, 1, {
        readOnlyTemplate: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](671088640, 2, {
        container: 0
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 12, "div", [["class", "forms-body"]], [[24, "@routerTransition", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "app-page-header", [], null, null, null, _shared_modules_page_header_page_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_PageHeaderComponent_0"], _shared_modules_page_header_page_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_PageHeaderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 114688, null, 0, _shared_modules_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_5__["PageHeaderComponent"], [], {
        heading: [0, "heading"],
        icon: [1, "icon"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "app-filter-panel", [], null, [[null, "newsSourceName"], [null, "filterValue"], [null, "toggle"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("newsSourceName" === en) {
          var pd_0 = _co.onNewsSourceChange($event) !== false;
          ad = pd_0 && ad;
        }

        if ("filterValue" === en) {
          var pd_1 = _co.onFilterValue($event) !== false;
          ad = pd_1 && ad;
        }

        if ("toggle" === en) {
          var pd_2 = (_co.showOnlyLocalNews = $event) !== false;
          ad = pd_2 && ad;
        }

        if ("toggle" === en) {
          var pd_3 = _co.showLocalNews($event) !== false;
          ad = pd_3 && ad;
        }

        return ad;
      }, _components_filter_panel_filter_panel_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_FilterPanelComponent_0"], _components_filter_panel_filter_panel_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_FilterPanelComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 114688, null, 0, _components_filter_panel_filter_panel_component__WEBPACK_IMPORTED_MODULE_7__["FilterPanelComponent"], [_services_news_service__WEBPACK_IMPORTED_MODULE_8__["NewsService"], _services_article_service__WEBPACK_IMPORTED_MODULE_9__["ArticleService"]], null, {
        newsSourceName: "newsSourceName",
        filterValue: "filterValue",
        toggle: "toggle"
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 5, "div", [["class", "news-container d-flex flex-column"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 2, null, View_TablesComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](13, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_TablesComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_1 = _co.newsHeader;
        var currVal_2 = "fa-table";

        _ck(_v, 5, 0, currVal_1, currVal_2);

        _ck(_v, 7, 0);

        var currVal_3 = _co.showOnlyLocalNews && !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 12, 0, _ck(_v, 13, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), _co.articles$, _co.showOnlyLocalNews)).length;

        _ck(_v, 12, 0, currVal_3);

        var currVal_4 = _co.articles$;

        _ck(_v, 15, 0, currVal_4);
      }, function (_ck, _v) {
        var currVal_0 = undefined;

        _ck(_v, 3, 0, currVal_0);
      });
    }

    function View_TablesComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-tables", [], null, null, null, View_TablesComponent_0, RenderType_TablesComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 638976, null, 0, _tables_component__WEBPACK_IMPORTED_MODULE_10__["TablesComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _services_news_service__WEBPACK_IMPORTED_MODULE_8__["NewsService"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var TablesComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-tables", _tables_component__WEBPACK_IMPORTED_MODULE_10__["TablesComponent"], View_TablesComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/layout/tables/tables.component.scss.shim.ngstyle.js":
  /*!*********************************************************************!*\
    !*** ./src/app/layout/tables/tables.component.scss.shim.ngstyle.js ***!
    \*********************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppLayoutTablesTablesComponentScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles = [".forms-body[_ngcontent-%COMP%] {\n  margin-bottom: 60px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3RhYmxlcy9FOlxcSmF2YVNjcmlwdFxcRnJvbnRDYW1wXFx0YXNrLThfYW5ndWxhcl9wMVxcZmNwLWFuZ3VsYXItYXBwL3NyY1xcYXBwXFxsYXlvdXRcXHRhYmxlc1xcdGFibGVzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sYXlvdXQvdGFibGVzL3RhYmxlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvdGFibGVzL3RhYmxlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3Jtcy1ib2R5IHtcbiAgbWFyZ2luLWJvdHRvbTogNjBweDtcbn1cblxuIiwiLmZvcm1zLWJvZHkge1xuICBtYXJnaW4tYm90dG9tOiA2MHB4O1xufSJdfQ== */"];
    /***/
  },

  /***/
  "./src/app/layout/tables/tables.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/layout/tables/tables.component.ts ***!
    \***************************************************/

  /*! exports provided: TablesComponent */

  /***/
  function srcAppLayoutTablesTablesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TablesComponent", function () {
      return TablesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _components_article_item_factory_resolver_article_item_factory_resolver_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./components/article-item-factory-resolver/article-item-factory-resolver.component */
    "./src/app/layout/tables/components/article-item-factory-resolver/article-item-factory-resolver.component.ts"); // tslint:disable: max-line-length


    var TablesComponent =
    /*#__PURE__*/
    function () {
      function TablesComponent(componentFactoryResolver, newsService, route, cdr) {
        _classCallCheck(this, TablesComponent);

        this.componentFactoryResolver = componentFactoryResolver;
        this.newsService = newsService;
        this.route = route;
        this.cdr = cdr;
        this.newsItemShow = 3;
        this.newsHeader = 'Select preferred source of news';
      }

      _createClass(TablesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getAllNews();
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {}
      }, {
        key: "createItems",
        value: function createItems() {
          var _this2 = this;

          var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
          this.container.clear();

          if (event) {
            this.articles$.filter(function (article) {
              return article.isLocalNews;
            }).forEach(function (article, index) {
              if (index < _this2.newsItemShow) {
                var componentFactory = _this2.componentFactoryResolver.resolveComponentFactory(_components_article_item_factory_resolver_article_item_factory_resolver_component__WEBPACK_IMPORTED_MODULE_1__["ArticleItemFactoryResolverComponent"]);

                var componentRef = _this2.container.createComponent(componentFactory);

                componentRef.instance.article = article;
                componentRef.instance.deleteEvent.subscribe(function (val) {
                  return _this2.receiveDeleteAction(val);
                });
              }
            });
          } else {
            this.articles$.forEach(function (article, index) {
              if (index < _this2.newsItemShow) {
                var componentFactory = _this2.componentFactoryResolver.resolveComponentFactory(_components_article_item_factory_resolver_article_item_factory_resolver_component__WEBPACK_IMPORTED_MODULE_1__["ArticleItemFactoryResolverComponent"]);

                var componentRef = _this2.container.createComponent(componentFactory);

                componentRef.instance.article = article;
                componentRef.instance.deleteEvent.subscribe(function (val) {
                  return _this2.receiveDeleteAction(val);
                });
              }
            });
          }
        }
      }, {
        key: "onNewsSourceChange",
        value: function onNewsSourceChange(newsSource) {
          var _this3 = this;

          this.newsHeader = newsSource[0];
          this.newsSourceId = newsSource[1];
          this.newsItemShow = 3;

          if (this.newsSourceId === 'all-news') {
            this.getAllNews();
          } else {
            this.newsService.getData(this.newsSourceId, 'bySource', '').subscribe(function (data) {
              _this3.articles$ = data;

              _this3.createItems();
            });
          }
        }
      }, {
        key: "getAllNews",
        value: function getAllNews() {
          var _this4 = this;

          this.articles$ = [];
          this.newsService.getData('local-news', 'all-news', '').subscribe(function (data) {
            _this4.articles$ = [].concat(_toConsumableArray(data), _toConsumableArray(_this4.articles$));

            _this4.createItems();
          });
          this.newsService.getData('apinews', 'topHeadlines', '').subscribe(function (data) {
            _this4.articles$ = [].concat(_toConsumableArray(data), _toConsumableArray(_this4.articles$));

            _this4.createItems();
          });
        }
      }, {
        key: "onFilterValue",
        value: function onFilterValue(filterValue) {
          var _this5 = this;

          this.newsService.getData(this.newsSourceId, 'byFilterValue', filterValue).subscribe(function (data) {
            _this5.articles$ = data;

            _this5.createItems();
          });
        }
      }, {
        key: "showMoreNews",
        value: function showMoreNews() {
          this.newsItemShow += 3;
          this.createItems();
        }
      }, {
        key: "showLocalNews",
        value: function showLocalNews(event) {
          this.createItems(event);
        }
      }, {
        key: "receiveDeleteAction",
        value: function receiveDeleteAction($event) {
          this.articles$ = this.articles$.filter(function (article) {
            return article._id !== $event._id;
          });
          this.createItems();
        }
      }]);

      return TablesComponent;
    }();
    /***/

  },

  /***/
  "./src/app/layout/tables/tables.module.ngfactory.js":
  /*!**********************************************************!*\
    !*** ./src/app/layout/tables/tables.module.ngfactory.js ***!
    \**********************************************************/

  /*! exports provided: TablesModuleNgFactory */

  /***/
  function srcAppLayoutTablesTablesModuleNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TablesModuleNgFactory", function () {
      return TablesModuleNgFactory;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _tables_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./tables.module */
    "./src/app/layout/tables/tables.module.ts");
    /* harmony import */


    var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../node_modules/@angular/router/router.ngfactory */
    "./node_modules/@angular/router/router.ngfactory.js");
    /* harmony import */


    var _tables_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./tables.component.ngfactory */
    "./src/app/layout/tables/tables.component.ngfactory.js");
    /* harmony import */


    var _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../node_modules/@ng-bootstrap/ng-bootstrap/ng-bootstrap.ngfactory */
    "./node_modules/@ng-bootstrap/ng-bootstrap/ng-bootstrap.ngfactory.js");
    /* harmony import */


    var _components_modal_window_modal_window_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../components/modal-window/modal-window.component.ngfactory */
    "./src/app/components/modal-window/modal-window.component.ngfactory.js");
    /* harmony import */


    var _components_article_item_factory_resolver_article_item_factory_resolver_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/article-item-factory-resolver/article-item-factory-resolver.component.ngfactory */
    "./src/app/layout/tables/components/article-item-factory-resolver/article-item-factory-resolver.component.ngfactory.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _tables_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./tables-routing.module */
    "./src/app/layout/tables/tables-routing.module.ts");
    /* harmony import */


    var _shared_modules_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../shared/modules/page-header/page-header.module */
    "./src/app/shared/modules/page-header/page-header.module.ts");
    /* harmony import */


    var _components_modal_window_modal_window_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../../components/modal-window/modal-window.module */
    "./src/app/components/modal-window/modal-window.module.ts");
    /* harmony import */


    var _tables_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./tables.component */
    "./src/app/layout/tables/tables.component.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var TablesModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_tables_module__WEBPACK_IMPORTED_MODULE_1__["TablesModule"], [], function (_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_router_router_lNgFactory"], _tables_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["TablesComponentNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__["NgbAlertNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__["NgbDatepickerNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__["ɵvNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__["ɵwNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__["ɵmNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__["ɵrNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__["ɵsNgFactory"], _components_modal_window_modal_window_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["ModalWindowComponentNgFactory"], _components_article_item_factory_resolver_article_item_factory_resolver_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["ArticleItemFactoryResolverComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_o"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_o"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModal"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModal"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["ɵx"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModalConfig"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _tables_routing_module__WEBPACK_IMPORTED_MODULE_11__["TablesRoutingModule"], _tables_routing_module__WEBPACK_IMPORTED_MODULE_11__["TablesRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shared_modules_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_12__["PageHeaderModule"], _shared_modules_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_12__["PageHeaderModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbAccordionModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbAccordionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbAlertModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbAlertModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbButtonsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbButtonsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbCarouselModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbCarouselModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbCollapseModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbCollapseModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbDatepickerModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbDatepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbDropdownModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbDropdownModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModalModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbPaginationModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbPaginationModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbPopoverModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbPopoverModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbProgressbarModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbProgressbarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbRatingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbRatingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbTabsetModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbTabsetModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbTimepickerModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbTimepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbToastModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbToastModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbTooltipModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbTooltipModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbTypeaheadModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbTypeaheadModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _components_modal_window_modal_window_module__WEBPACK_IMPORTED_MODULE_13__["ModalWindowModule"], _components_modal_window_modal_window_module__WEBPACK_IMPORTED_MODULE_13__["ModalWindowModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _tables_module__WEBPACK_IMPORTED_MODULE_1__["TablesModule"], _tables_module__WEBPACK_IMPORTED_MODULE_1__["TablesModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_10__["ROUTES"], function () {
        return [[{
          path: "",
          component: _tables_component__WEBPACK_IMPORTED_MODULE_14__["TablesComponent"]
        }]];
      }, [])]);
    });
    /***/

  },

  /***/
  "./src/app/layout/tables/tables.module.ts":
  /*!************************************************!*\
    !*** ./src/app/layout/tables/tables.module.ts ***!
    \************************************************/

  /*! exports provided: TablesModule */

  /***/
  function srcAppLayoutTablesTablesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TablesModule", function () {
      return TablesModule;
    });

    var TablesModule = function TablesModule() {
      _classCallCheck(this, TablesModule);
    };
    /***/

  }
}]);
//# sourceMappingURL=tables-tables-module-ngfactory-es5.js.map