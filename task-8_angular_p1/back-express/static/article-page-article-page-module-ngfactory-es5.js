function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["article-page-article-page-module-ngfactory"], {
  /***/
  "./src/app/layout/article-page/article-page-routing.module.ts":
  /*!********************************************************************!*\
    !*** ./src/app/layout/article-page/article-page-routing.module.ts ***!
    \********************************************************************/

  /*! exports provided: ArticlePageRoutingModule */

  /***/
  function srcAppLayoutArticlePageArticlePageRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArticlePageRoutingModule", function () {
      return ArticlePageRoutingModule;
    });
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _article_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./article-page.component */
    "./src/app/layout/article-page/article-page.component.ts");

    var routes = [{
      path: '',
      component: _article_page_component__WEBPACK_IMPORTED_MODULE_1__["ArticlePageComponent"]
    }];

    var ArticlePageRoutingModule = function ArticlePageRoutingModule() {
      _classCallCheck(this, ArticlePageRoutingModule);
    };
    /***/

  },

  /***/
  "./src/app/layout/article-page/article-page.component.ngfactory.js":
  /*!*************************************************************************!*\
    !*** ./src/app/layout/article-page/article-page.component.ngfactory.js ***!
    \*************************************************************************/

  /*! exports provided: RenderType_ArticlePageComponent, View_ArticlePageComponent_0, View_ArticlePageComponent_Host_0, ArticlePageComponentNgFactory */

  /***/
  function srcAppLayoutArticlePageArticlePageComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_ArticlePageComponent", function () {
      return RenderType_ArticlePageComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_ArticlePageComponent_0", function () {
      return View_ArticlePageComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_ArticlePageComponent_Host_0", function () {
      return View_ArticlePageComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArticlePageComponentNgFactory", function () {
      return ArticlePageComponentNgFactory;
    });
    /* harmony import */


    var _article_page_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./article-page.component.scss.shim.ngstyle */
    "./src/app/layout/article-page/article-page.component.scss.shim.ngstyle.js");
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
    /*! ../../components/modal-window/modal-window.component.ngfactory */
    "./src/app/components/modal-window/modal-window.component.ngfactory.js");
    /* harmony import */


    var _components_modal_window_modal_window_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../components/modal-window/modal-window.component */
    "./src/app/components/modal-window/modal-window.component.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _shared_modules_page_header_page_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../shared/modules/page-header/page-header.component.ngfactory */
    "./src/app/shared/modules/page-header/page-header.component.ngfactory.js");
    /* harmony import */


    var _shared_modules_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../shared/modules/page-header/page-header.component */
    "./src/app/shared/modules/page-header/page-header.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _article_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./article-page.component */
    "./src/app/layout/article-page/article-page.component.ts");
    /* harmony import */


    var _services_article_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../services/article.service */
    "./src/app/layout/services/article.service.ts");
    /* harmony import */


    var _services_news_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../services/news.service */
    "./src/app/layout/services/news.service.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles_ArticlePageComponent = [_article_page_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_ArticlePageComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_ArticlePageComponent,
      data: {
        "animation": [{
          type: 7,
          name: "routerTransition",
          definitions: [],
          options: {}
        }]
      }
    });

    function View_ArticlePageComponent_2(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "input", [["class", "btn btn-default mb-3 btn-cd"], ["type", "button"], ["value", "Edit"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).onClick() !== false;
          ad = pd_0 && ad;
        }

        if ("click" === en) {
          var pd_1 = _co.passCurrentArticleData(_v.parent.context.ngIf) !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, [[2, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], {
        routerLink: [0, "routerLink"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](2, 1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]]], {
        routerLinkActive: [0, "routerLinkActive"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, {
        links: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 3, {
        linksWithHrefs: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](6, 1)], function (_ck, _v) {
        var currVal_0 = _ck(_v, 2, 0, "/editpage");

        _ck(_v, 1, 0, currVal_0);

        var currVal_1 = _ck(_v, 6, 0, "router-link-active");

        _ck(_v, 3, 0, currVal_1);
      }, null);
    }

    function View_ArticlePageComponent_3(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-modal-window", [["class", "btn btn-danger"], ["value", "Delete"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co.deleteArticle(_v.parent.context.ngIf) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _components_modal_window_modal_window_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_ModalWindowComponent_0"], _components_modal_window_modal_window_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_ModalWindowComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 770048, null, 0, _components_modal_window_modal_window_component__WEBPACK_IMPORTED_MODULE_4__["ModalWindowComponent"], [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]], {
        toggleModal: [0, "toggleModal"]
      }, null)], function (_ck, _v) {
        var currVal_0 = true;

        _ck(_v, 1, 0, currVal_0);
      }, null);
    }

    function View_ArticlePageComponent_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 27, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "app-page-header", [], null, null, null, _shared_modules_page_header_page_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_PageHeaderComponent_0"], _shared_modules_page_header_page_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_PageHeaderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 114688, null, 0, _shared_modules_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_7__["PageHeaderComponent"], [], {
        heading: [0, "heading"],
        icon: [1, "icon"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 24, "div", [["class", "bd-highlight d-flex justify-content-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 23, "div", [["class", "card mb-3 mt-4"], ["style", "max-width: 80%; min-height: 400px"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 22, "div", [["class", "row no-gutters align-items-sm-start justify-content-between"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "div", [["class", "col-md-4 mr-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 0, "img", [["alt", "news-image"], ["class", "card-img img-thumbnail ml-3 mt-5 img-fluid"]], [[8, "src", 4]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 14, "div", [["class", "card-info col-md-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 4, "div", [["class", "card-body "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 1, "h3", [["class", "card-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](11, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 1, "p", [["class", "card-description card-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](13, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 4, "div", [["class", "d-flex bd-highlight"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 3, "p", [["class", "card-text bd-highlight pl-5 pt-1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 2, "small", [["class", "text-muted"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](17, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](18, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 3, "div", [["class", "d-flex bd-highlight"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 2, "p", [["class", "card-text bd-highlight pl-5 pt-1 mb-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 1, "small", [["class", "text-muted"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](22, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 4, "div", [["class", "card-button col-md-1 d-flex flex-column flex-grow-1 align-self-start mt-4 mr-lg-4 mr-sm-0 mr-md-2"], ["style", "min-width: auto"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ArticlePageComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](25, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ArticlePageComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](27, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;

        var currVal_0 = _co.editLink(_v.context.ngIf);

        var currVal_1 = "fa-edit";

        _ck(_v, 2, 0, currVal_0, currVal_1);

        var currVal_7 = _v.context.ngIf.isLocalNews;

        _ck(_v, 25, 0, currVal_7);

        var currVal_8 = _v.context.ngIf.isLocalNews;

        _ck(_v, 27, 0, currVal_8);
      }, function (_ck, _v) {
        var _co = _v.component;

        var currVal_2 = _co.setImage(_v.context.ngIf);

        _ck(_v, 7, 0, currVal_2);

        var currVal_3 = _v.context.ngIf == null ? null : _v.context.ngIf.title;

        _ck(_v, 11, 0, currVal_3);

        var currVal_4 = _v.context.ngIf == null ? null : _v.context.ngIf.content;

        _ck(_v, 13, 0, currVal_4);

        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 17, 0, _ck(_v, 18, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), _v.context.ngIf == null ? null : _v.context.ngIf.publishedAt));

        _ck(_v, 17, 0, currVal_5);

        var currVal_6 = _v.context.ngIf == null ? null : _v.context.ngIf.author;

        _ck(_v, 22, 0, currVal_6);
      });
    }

    function View_ArticlePageComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](671088640, 1, {
        readOnlyTemplate: 0
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 2, "div", [["class", "forms-body"]], [[24, "@routerTransition", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ArticlePageComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_1 = _co.article$;

        _ck(_v, 4, 0, currVal_1);
      }, function (_ck, _v) {
        var currVal_0 = undefined;

        _ck(_v, 2, 0, currVal_0);
      });
    }

    function View_ArticlePageComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-article-page", [], null, null, null, View_ArticlePageComponent_0, RenderType_ArticlePageComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _article_page_component__WEBPACK_IMPORTED_MODULE_9__["ArticlePageComponent"], [_services_article_service__WEBPACK_IMPORTED_MODULE_10__["ArticleService"], _services_news_service__WEBPACK_IMPORTED_MODULE_11__["NewsService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var ArticlePageComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-article-page", _article_page_component__WEBPACK_IMPORTED_MODULE_9__["ArticlePageComponent"], View_ArticlePageComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/layout/article-page/article-page.component.scss.shim.ngstyle.js":
  /*!*********************************************************************************!*\
    !*** ./src/app/layout/article-page/article-page.component.scss.shim.ngstyle.js ***!
    \*********************************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppLayoutArticlePageArticlePageComponentScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
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


    var styles = [".forms-body[_ngcontent-%COMP%] {\n  margin-bottom: 60px;\n}\n\n.card-info[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  margin-bottom: 0.5rem;\n  color: #124e80;\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\", \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n}\n\n.card-info[_ngcontent-%COMP%]   .card-description[_ngcontent-%COMP%] {\n  margin-top: 0.75rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2FydGljbGUtcGFnZS9FOlxcSmF2YVNjcmlwdFxcRnJvbnRDYW1wXFx0YXNrLThfYW5ndWxhcl9wMVxcZmNwLWFuZ3VsYXItYXBwL3NyY1xcYXBwXFxsYXlvdXRcXGFydGljbGUtcGFnZVxcYXJ0aWNsZS1wYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sYXlvdXQvYXJ0aWNsZS1wYWdlL2FydGljbGUtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0FDQ0Y7O0FER0U7RUFDRSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLHNIQUFBO0FDQUo7O0FERUU7RUFDRSxtQkFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2FydGljbGUtcGFnZS9hcnRpY2xlLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybXMtYm9keSB7XG4gIG1hcmdpbi1ib3R0b206IDYwcHg7XG59XG5cbi5jYXJkLWluZm8ge1xuICAuY2FyZC10aXRsZSB7XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gICAgY29sb3I6ICMxMjRlODA7XG4gICAgZm9udC1mYW1pbHk6ICdMdWNpZGEgU2FucycsICdMdWNpZGEgU2FucyBSZWd1bGFyJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgfVxuICAuY2FyZC1kZXNjcmlwdGlvbiB7XG4gICAgbWFyZ2luLXRvcDogMC43NXJlbTtcbiAgfVxufVxuIiwiLmZvcm1zLWJvZHkge1xuICBtYXJnaW4tYm90dG9tOiA2MHB4O1xufVxuXG4uY2FyZC1pbmZvIC5jYXJkLXRpdGxlIHtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICBjb2xvcjogIzEyNGU4MDtcbiAgZm9udC1mYW1pbHk6IFwiTHVjaWRhIFNhbnNcIiwgXCJMdWNpZGEgU2FucyBSZWd1bGFyXCIsIFwiTHVjaWRhIEdyYW5kZVwiLCBcIkx1Y2lkYSBTYW5zIFVuaWNvZGVcIiwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xufVxuLmNhcmQtaW5mbyAuY2FyZC1kZXNjcmlwdGlvbiB7XG4gIG1hcmdpbi10b3A6IDAuNzVyZW07XG59Il19 */"];
    /***/
  },

  /***/
  "./src/app/layout/article-page/article-page.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/layout/article-page/article-page.component.ts ***!
    \***************************************************************/

  /*! exports provided: ArticlePageComponent */

  /***/
  function srcAppLayoutArticlePageArticlePageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArticlePageComponent", function () {
      return ArticlePageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var ArticlePageComponent =
    /*#__PURE__*/
    function () {
      function ArticlePageComponent(articleService, newsService, route) {
        _classCallCheck(this, ArticlePageComponent);

        this.articleService = articleService;
        this.newsService = newsService;
        this.route = route;
        this.isItemDeleted = false;
        this.defaultData = {
          _id: 'no id',
          author: '',
          title: 'default',
          description: 'default',
          url: '',
          urlToImage: '',
          publishedAt: '',
          content: ''
        };
      }

      _createClass(ArticlePageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          var path = window.location.pathname.slice(10);
          this.articleService.getNewsEdit().subscribe(function (data) {
            if (!data) {
              _this.newsService.onGetByUrlArticle(path.split('%2F').join('/')).subscribe(function (data2) {
                if (data2[0]) {
                  _this.article$ = data2[0];
                } else {
                  _this.article$ = _this.defaultData;
                }
              });
            } else {
              _this.article$ = data;
            }
          });
        }
      }, {
        key: "editLink",
        value: function editLink(article) {
          if (article.title) {
            return article.title.split(' ').slice(0, 2).join(' ');
          }

          return 'default';
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
        key: "passCurrentArticleData",
        value: function passCurrentArticleData(article) {
          this.articleService.setNewsEdit(article);
        }
      }, {
        key: "deleteArticle",
        value: function deleteArticle(article) {
          console.log('Create request for deleting item');
          this.newsService.onDeleteArticle(article._id);
          this.isItemDeleted = !this.isItemDeleted;
        }
      }]);

      return ArticlePageComponent;
    }();
    /***/

  },

  /***/
  "./src/app/layout/article-page/article-page.module.ngfactory.js":
  /*!**********************************************************************!*\
    !*** ./src/app/layout/article-page/article-page.module.ngfactory.js ***!
    \**********************************************************************/

  /*! exports provided: ArticlePageModuleNgFactory */

  /***/
  function srcAppLayoutArticlePageArticlePageModuleNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArticlePageModuleNgFactory", function () {
      return ArticlePageModuleNgFactory;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _article_page_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./article-page.module */
    "./src/app/layout/article-page/article-page.module.ts");
    /* harmony import */


    var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../node_modules/@angular/router/router.ngfactory */
    "./node_modules/@angular/router/router.ngfactory.js");
    /* harmony import */


    var _article_page_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./article-page.component.ngfactory */
    "./src/app/layout/article-page/article-page.component.ngfactory.js");
    /* harmony import */


    var _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../node_modules/@ng-bootstrap/ng-bootstrap/ng-bootstrap.ngfactory */
    "./node_modules/@ng-bootstrap/ng-bootstrap/ng-bootstrap.ngfactory.js");
    /* harmony import */


    var _components_modal_window_modal_window_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../components/modal-window/modal-window.component.ngfactory */
    "./src/app/components/modal-window/modal-window.component.ngfactory.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _article_page_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./article-page-routing.module */
    "./src/app/layout/article-page/article-page-routing.module.ts");
    /* harmony import */


    var _shared_modules_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../shared/modules/page-header/page-header.module */
    "./src/app/shared/modules/page-header/page-header.module.ts");
    /* harmony import */


    var _components_modal_window_modal_window_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../components/modal-window/modal-window.module */
    "./src/app/components/modal-window/modal-window.module.ts");
    /* harmony import */


    var _article_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./article-page.component */
    "./src/app/layout/article-page/article-page.component.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var ArticlePageModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_article_page_module__WEBPACK_IMPORTED_MODULE_1__["ArticlePageModule"], [], function (_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_router_router_lNgFactory"], _article_page_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ArticlePageComponentNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__["NgbAlertNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__["NgbDatepickerNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__["ɵvNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__["ɵwNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__["ɵmNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__["ɵrNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__["ɵsNgFactory"], _components_modal_window_modal_window_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["ModalWindowComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_o"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_o"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModal"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModal"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["ɵx"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModalConfig"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _article_page_routing_module__WEBPACK_IMPORTED_MODULE_10__["ArticlePageRoutingModule"], _article_page_routing_module__WEBPACK_IMPORTED_MODULE_10__["ArticlePageRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shared_modules_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_11__["PageHeaderModule"], _shared_modules_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_11__["PageHeaderModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbAccordionModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbAccordionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbAlertModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbAlertModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbButtonsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbButtonsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbCarouselModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbCarouselModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbCollapseModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbCollapseModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbDatepickerModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbDatepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbDropdownModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbDropdownModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModalModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbPaginationModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbPaginationModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbPopoverModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbPopoverModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbProgressbarModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbProgressbarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbRatingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbRatingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbTabsetModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbTabsetModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbTimepickerModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbTimepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbToastModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbToastModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbTooltipModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbTooltipModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbTypeaheadModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbTypeaheadModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _components_modal_window_modal_window_module__WEBPACK_IMPORTED_MODULE_12__["ModalWindowModule"], _components_modal_window_modal_window_module__WEBPACK_IMPORTED_MODULE_12__["ModalWindowModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _article_page_module__WEBPACK_IMPORTED_MODULE_1__["ArticlePageModule"], _article_page_module__WEBPACK_IMPORTED_MODULE_1__["ArticlePageModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_9__["ROUTES"], function () {
        return [[{
          path: "",
          component: _article_page_component__WEBPACK_IMPORTED_MODULE_13__["ArticlePageComponent"]
        }]];
      }, [])]);
    });
    /***/

  },

  /***/
  "./src/app/layout/article-page/article-page.module.ts":
  /*!************************************************************!*\
    !*** ./src/app/layout/article-page/article-page.module.ts ***!
    \************************************************************/

  /*! exports provided: ArticlePageModule */

  /***/
  function srcAppLayoutArticlePageArticlePageModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArticlePageModule", function () {
      return ArticlePageModule;
    });

    var ArticlePageModule = function ArticlePageModule() {
      _classCallCheck(this, ArticlePageModule);
    };
    /***/

  }
}]);
//# sourceMappingURL=article-page-article-page-module-ngfactory-es5.js.map