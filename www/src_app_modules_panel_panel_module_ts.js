"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modules_panel_panel_module_ts"],{

/***/ 9402:
/*!*******************************************************!*\
  !*** ./src/app/modules/panel/panel-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PanelPageRoutingModule": () => (/* binding */ PanelPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _panel_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./panel.page */ 2540);




const routes = [
    {
        path: '',
        component: _panel_page__WEBPACK_IMPORTED_MODULE_0__.PanelPage,
        children: [
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            },
            {
                path: 'dashboard',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_panel_dashboard_dashboard_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./dashboard/dashboard.module */ 5187)).then(m => m.DashboardPageModule)
            },
        ]
    },
];
let PanelPageRoutingModule = class PanelPageRoutingModule {
};
PanelPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PanelPageRoutingModule);



/***/ }),

/***/ 5515:
/*!***********************************************!*\
  !*** ./src/app/modules/panel/panel.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PanelPageModule": () => (/* binding */ PanelPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _panel_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./panel-routing.module */ 9402);
/* harmony import */ var _panel_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./panel.page */ 2540);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 4466);





let PanelPageModule = class PanelPageModule {
};
PanelPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
            _panel_routing_module__WEBPACK_IMPORTED_MODULE_0__.PanelPageRoutingModule
        ],
        declarations: [_panel_page__WEBPACK_IMPORTED_MODULE_1__.PanelPage]
    })
], PanelPageModule);



/***/ }),

/***/ 2540:
/*!*********************************************!*\
  !*** ./src/app/modules/panel/panel.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PanelPage": () => (/* binding */ PanelPage)
/* harmony export */ });
/* harmony import */ var C_Users_g_ginev_source_xampp_htdocs_cinema_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _panel_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./panel.page.html?ngResource */ 373);
/* harmony import */ var _panel_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./panel.page.scss?ngResource */ 3740);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_shared_enums_ion_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enums/ion-icons */ 3546);
/* harmony import */ var src_app_shared_resources_user_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/resources/user/user.service */ 8635);
/* harmony import */ var src_app_shared_services_session_session_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/session/session.service */ 4517);
/* harmony import */ var src_app_shared_types_shapes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/types/shapes */ 8061);
/* harmony import */ var src_app_shared_types_sizes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/types/sizes */ 9920);
/* harmony import */ var _shared_services_panel_page_panel_page_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/services/panel-page/panel-page.service */ 2826);












let PanelPage = class PanelPage {
  constructor(panelPageService, userService, router, sessionService) {
    var _this = this;

    this.panelPageService = panelPageService;
    this.userService = userService;
    this.router = router;
    this.sessionService = sessionService;
    this.iconsEnum = src_app_shared_enums_ion_icons__WEBPACK_IMPORTED_MODULE_3__.IonIcons;
    this.sizesEnum = src_app_shared_types_sizes__WEBPACK_IMPORTED_MODULE_7__.Sizes;
    this.shapeEnum = src_app_shared_types_shapes__WEBPACK_IMPORTED_MODULE_6__.Shapes;
    this.navigationItems = [{
      label: 'Pages',
      children: [{
        label: 'Dashboard',
        icon: this.iconsEnum.dashboard,
        routerLink: '/panel/dashboard'
      }, {
        label: 'Cinemas',
        icon: this.iconsEnum.dashboard,
        routerLink: '/panel/cinemas'
      }, {
        label: 'Movies',
        icon: this.iconsEnum.dashboard,
        routerLink: '/panel/movies'
      }]
    }, {
      label: 'Support',
      children: [{
        label: 'Logout',
        icon: this.iconsEnum.logout,
        action: () => {}
      }]
    }];
    this.navItems = [{
      label: 'Profile',
      disabled: true,
      action: () => {},
      value: 'profile'
    }, {
      label: 'To website',
      disabled: false,
      action: () => {
        this.router.navigate(['/home']);
      },
      value: 'website'
    }, {
      label: 'Logout',
      disabled: false,
      class: 'panel-logout-select-option',
      action: function () {
        var _ref = (0,C_Users_g_ginev_source_xampp_htdocs_cinema_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (event) {
          yield _this.userService.logout();
          return Promise.resolve();
        });

        return function action(_x) {
          return _ref.apply(this, arguments);
        };
      }(),
      value: 'logout'
    }];
  }

  get pageName() {
    return this.panelPageService.headerName;
  }

  get pageNameIcon() {
    return this.panelPageService.headerNameIcon;
  }

  ngOnInit() {
    this.user = this.sessionService.user;
  }

};

PanelPage.ctorParameters = () => [{
  type: _shared_services_panel_page_panel_page_service__WEBPACK_IMPORTED_MODULE_8__.PanelPageService
}, {
  type: src_app_shared_resources_user_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
}, {
  type: src_app_shared_services_session_session_service__WEBPACK_IMPORTED_MODULE_5__.SessionService
}];

PanelPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
  selector: 'app-panel',
  template: _panel_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_panel_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], PanelPage);


/***/ }),

/***/ 3740:
/*!**********************************************************!*\
  !*** ./src/app/modules/panel/panel.page.scss?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = ":host {\n  display: block;\n  height: 100%;\n  width: 100%;\n}\n:host .header-end-container {\n  padding-right: 20px;\n}\n:host .panel-nav-container {\n  display: block;\n}\n:host .panel-nav-container .avatar-container {\n  padding-top: 40px;\n  background: linear-gradient(0deg, #fff 18%, var(--ion-color-primary) 18%);\n  height: 110px;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n:host .panel-nav-container .avatar-container ion-avatar {\n  box-shadow: 0px 1px 5px 0px rgba(var(--ion-color-primary-rgb), 0.25);\n}\n:host .panel-nav-container .avatar-container ion-chip {\n  --background: var(--ion-color-medium);\n  height: auto;\n  display: inline-block;\n  box-shadow: 0px 1px 5px 0px rgba(var(--ion-color-primary-rgb), 0.25);\n  pointer-events: none;\n}\n:host .panel-nav-container ion-item.is-active {\n  --ion-item-background: var(--ion-color-medium);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhbmVsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUNKO0FBQ0k7RUFDSSxtQkFBQTtBQUNSO0FBRUk7RUFDSSxjQUFBO0FBQVI7QUFFUTtFQUNJLGlCQUFBO0VBQ0EseUVBQ0k7RUFDSixhQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBRFo7QUFHWTtFQUNJLG9FQUFBO0FBRGhCO0FBSVk7RUFDSSxxQ0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLG9FQUFBO0VBQ0Esb0JBQUE7QUFGaEI7QUFPWTtFQUNJLDhDQUFBO0FBTGhCIiwiZmlsZSI6InBhbmVsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBcclxuICAgIC5oZWFkZXItZW5kLWNvbnRhaW5lciB7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICAucGFuZWwtbmF2LWNvbnRhaW5lciB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcblxyXG4gICAgICAgIC5hdmF0YXItY29udGFpbmVyIHtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDQwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6XHJcbiAgICAgICAgICAgICAgICBsaW5lYXItZ3JhZGllbnQoMGRlZywgI2ZmZiAxOCUsIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSAxOCUpO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDExMHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICBpb24tYXZhdGFyIHtcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAxcHggNXB4IDBweCByZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiksIDAuMjUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpb24tY2hpcCB7XHJcbiAgICAgICAgICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDFweCA1cHggMHB4IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwgMC4yNSk7XHJcbiAgICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW9uLWl0ZW0ge1xyXG4gICAgICAgICAgICAmLmlzLWFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */";

/***/ }),

/***/ 373:
/*!**********************************************************!*\
  !*** ./src/app/modules/panel/panel.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "<ion-split-pane when=\"xs\" contentId=\"main\">\n  <div class=\"panel-nav-container\">\n    <div class=\"avatar-container\">\n      <ci-avatar [clickable]=\"true\"></ci-avatar>\n      <ion-chip>\n        <ion-text color=\"primary\"><i>Hello,</i> {{user?.name}}</ion-text>\n        <br>\n        <ci-subtitle>\n          <ion-text color=\"secondary\">{{user?.email}}</ion-text>\n        </ci-subtitle>\n      </ion-chip>\n    </div>\n    <ion-content>\n      <ion-list>\n        <ng-container *ngFor=\"let navItem of navigationItems\">\n          <ion-item-group>\n            <ng-container *ngIf=\"navItem.children.length > 0\">\n              <ion-item-divider>{{navItem.label}}</ion-item-divider>\n              <ng-container *ngFor=\"let subNavItem of navItem.children\">\n                <ng-container [ngTemplateOutlet]=\"item\" [ngTemplateOutletContext]=\"{navItem:subNavItem}\"></ng-container>\n              </ng-container>\n            </ng-container>\n            <ng-container *ngIf=\"navItem.children.length === 0\">\n              <ng-container [ngTemplateOutlet]=\"item\" [ngTemplateOutletContext]=\"{navItem:navItem}\"></ng-container>\n            </ng-container>\n          </ion-item-group>\n        </ng-container>\n      </ion-list>\n    </ion-content>\n\n    <ng-template #item let-navItem=\"navItem\">\n      <ion-item [routerLink]=\"navItem.routerLink\" [routerLinkActive]=\"['is-active']\" button>\n        <ci-icon *ngIf=\"navItem.icon\" [size]=\"sizesEnum.medium\" [name]=\"navItem.icon\" color=\"secondary\" slot=\"start\">\n        </ci-icon>\n        <ion-label color=\"primary\">{{navItem.label}}</ion-label>\n      </ion-item>\n    </ng-template>\n  </div>\n  <div id=\"main\">\n    <ion-header>\n      <ion-toolbar color=\"primary\">\n        <ion-title>\n          <ng-container *ngIf=\"pageNameIcon\">\n            <ci-icon [name]=\"pageNameIcon\"></ci-icon>\n          </ng-container>\n          {{pageName}}\n        </ion-title>\n        <div slot=\"end\" class=\"header-end-container\">\n          <ci-dropdown [navItems]=\"navItems\">\n            <ci-icon-button [shape]=\"shapeEnum.circle\" [size]=\"sizesEnum.medium\" color=\"secondary\">\n              <ci-icon [name]=\"iconsEnum.more\" [size]=\"sizesEnum.large\" slot=\"icon-only\"></ci-icon>\n            </ci-icon-button>\n          </ci-dropdown>\n        </div>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content class=\"ion-padding\">\n      <router-outlet></router-outlet>\n    </ion-content>\n  </div>\n</ion-split-pane>";

/***/ })

}]);
//# sourceMappingURL=src_app_modules_panel_panel_module_ts.js.map