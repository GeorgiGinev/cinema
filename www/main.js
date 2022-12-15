(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _shared_guards_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/guards/auth/auth.guard */ 4369);
/* harmony import */ var _shared_guards_guest_guest_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/guards/guest/guest.guard */ 8020);
/* harmony import */ var _shared_resolvers_session_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/resolvers/session.resolver */ 6886);






const routes = [
    {
        path: '',
        resolve: [_shared_resolvers_session_resolver__WEBPACK_IMPORTED_MODULE_2__.SessionResolver],
        children: [
            {
                path: '',
                pathMatch: 'full',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./modules/home/home.module */ 4882)).then((m) => m.HomePageModule),
            },
            {
                path: 'home',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./modules/home/home.module */ 4882)).then((m) => m.HomePageModule),
            },
            {
                path: 'auth',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_auth_auth_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./modules/auth/auth.module */ 3970)).then((m) => m.AuthPageModule),
                canActivate: [_shared_guards_guest_guest_guard__WEBPACK_IMPORTED_MODULE_1__.GuestGuard],
            },
            // {
            //   path: 'intro',
            //   loadChildren: () =>
            //     import('./modules/intro/intro.module').then((m) => m.IntroPageModule),
            //     canActivate: [AuthGuard],
            // },
            {
                path: 'panel',
                canActivate: [_shared_guards_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_panel_panel_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./modules/panel/panel.module */ 5515)).then(m => m.PanelPageModule)
            },
        ]
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_5__.PreloadAllModules,
            }),
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    })
], AppRoutingModule);



/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 3383);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 9259);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_services_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/services/navigation/navigation.service */ 6353);
/* harmony import */ var _shared_services_session_session_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/services/session/session.service */ 4517);
/* harmony import */ var _shared_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/services/storage/storage.service */ 3328);







let AppComponent = class AppComponent {
    constructor(navigationService, storageService, sessionService) {
        this.navigationService = navigationService;
        this.storageService = storageService;
        this.sessionService = sessionService;
    }
    get navigationContentId() {
        return this.navigationService.contentId;
    }
    ngOnInit() {
        console.log('sessionService : ', this.sessionService.token);
    }
};
AppComponent.ctorParameters = () => [
    { type: _shared_services_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_2__.NavigationService },
    { type: _shared_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_4__.StorageService },
    { type: _shared_services_session_session_service__WEBPACK_IMPORTED_MODULE_3__.SessionService }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-root',
        template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ 2340);
/* harmony import */ var _angular_fire_compat_analytics__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire/compat/analytics */ 9963);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 2393);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/fire/compat/auth */ 5873);
/* harmony import */ var _angular_fire_compat_functions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/fire/compat/functions */ 3145);
/* harmony import */ var _angular_fire_compat_messaging__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/fire/compat/messaging */ 6637);
/* harmony import */ var _angular_fire_compat__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/compat */ 1879);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/shared.module */ 4466);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic/storage-angular */ 7566);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _shared_services_http_interceptor_http_interceptor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/services/http-interceptor/http-interceptor.service */ 3688);
/* harmony import */ var ngx_logger__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-logger */ 7275);
/* harmony import */ var _shared_services_session_session_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/services/session/session.service */ 4517);




















let AppModule = class AppModule {
    constructor() {
    }
};
AppModule.ctorParameters = () => [];
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule.forRoot({
                mode: 'md'
            }),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
            _angular_fire_compat__WEBPACK_IMPORTED_MODULE_10__.AngularFireModule.initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.firebase),
            _angular_fire_compat_analytics__WEBPACK_IMPORTED_MODULE_11__.AngularFireAnalyticsModule,
            _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_12__.AngularFirestoreModule,
            _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_13__.AngularFireAuthModule,
            _angular_fire_compat_functions__WEBPACK_IMPORTED_MODULE_14__.AngularFireFunctionsModule,
            _angular_fire_compat_messaging__WEBPACK_IMPORTED_MODULE_15__.AngularFireMessagingModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule,
            _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_16__.IonicStorageModule.forRoot(),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpClientModule,
            ngx_logger__WEBPACK_IMPORTED_MODULE_18__.LoggerModule.forRoot({
                serverLoggingUrl: '/api/logs',
                level: ngx_logger__WEBPACK_IMPORTED_MODULE_18__.NgxLoggerLevel.DEBUG,
                serverLogLevel: ngx_logger__WEBPACK_IMPORTED_MODULE_18__.NgxLoggerLevel.ERROR
            }),
        ],
        providers: [
            {
                provide: _angular_router__WEBPACK_IMPORTED_MODULE_19__.RouteReuseStrategy,
                useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicRouteStrategy
            },
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HTTP_INTERCEPTORS,
                useClass: _shared_services_http_interceptor_http_interceptor_service__WEBPACK_IMPORTED_MODULE_4__.HttpInterceptorService,
                multi: true
            },
            _shared_services_session_session_service__WEBPACK_IMPORTED_MODULE_5__.SessionService
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 975:
/*!********************************************************************!*\
  !*** ./src/app/shared/components/boxes/avatar/avatar.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AvatarComponent": () => (/* binding */ AvatarComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _avatar_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./avatar.component.html?ngResource */ 4806);
/* harmony import */ var _avatar_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./avatar.component.scss?ngResource */ 4102);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);




let AvatarComponent = class AvatarComponent {
    constructor() { }
};
AvatarComponent.ctorParameters = () => [];
AvatarComponent.propDecorators = {
    img: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    clickable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
AvatarComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'ci-avatar',
        template: _avatar_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectionStrategy.OnPush,
        styles: [_avatar_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AvatarComponent);



/***/ }),

/***/ 9485:
/*!********************************************************************!*\
  !*** ./src/app/shared/components/boxes/button/button.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ButtonComponent": () => (/* binding */ ButtonComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _button_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button.component.html?ngResource */ 900);
/* harmony import */ var _button_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button.component.scss?ngResource */ 161);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);




let ButtonComponent = class ButtonComponent {
    constructor(changeDetector) {
        this.changeDetector = changeDetector;
        this.showLoadingEffect = false;
    }
    get promiseWrapper() {
        return this.showLoadingEffect;
    }
    ngOnChanges() {
        /**
         * Check if promise is given and show loading effect
         */
        if (this.promise) {
            console.log('promise change');
            this.showLoadingEffect = true;
            this.promise.then(() => {
                this.showLoadingEffect = false;
                this.changeDetector.markForCheck();
            }, () => { });
        }
    }
};
ButtonComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef }
];
ButtonComponent.propDecorators = {
    color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    size: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    promise: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    shape: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    promiseWrapper: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.HostBinding, args: ['class.has-promise',] }]
};
ButtonComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'ci-button',
        template: _button_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectionStrategy.OnPush,
        styles: [_button_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ButtonComponent);



/***/ }),

/***/ 4116:
/*!************************************************************************!*\
  !*** ./src/app/shared/components/boxes/dropdown/dropdown.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DropdownComponent": () => (/* binding */ DropdownComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _dropdown_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dropdown.component.html?ngResource */ 1140);
/* harmony import */ var _dropdown_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dropdown.component.scss?ngResource */ 5020);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);




let DropdownComponent = class DropdownComponent {
    constructor() { }
    /**
     * Open selector when button is clicked
     * @param event mouse event
     */
    openOptions(event) {
        this.selectOption.interface = 'popover';
        this.selectOption.open(event);
    }
    /**
     * Trigger event when option is selected and clear its value
     */
    handleSelectChange(event) {
        let selectedItem = this.navItems.find((item) => item.value === event.detail.value);
        this.selectOption.selectedText = null;
        selectedItem.action();
    }
};
DropdownComponent.ctorParameters = () => [];
DropdownComponent.propDecorators = {
    navItems: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    selectOption: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChild, args: ['selectOption', { static: false },] }]
};
DropdownComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'ci-dropdown',
        template: _dropdown_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectionStrategy.OnPush,
        styles: [_dropdown_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DropdownComponent);



/***/ }),

/***/ 2741:
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/boxes/dropdown/dropdown.service.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DropdownService": () => (/* binding */ DropdownService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


let DropdownService = class DropdownService {
    constructor() { }
};
DropdownService.ctorParameters = () => [];
DropdownService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], DropdownService);



/***/ }),

/***/ 5219:
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/boxes/icon-button/icon-button.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IconButtonComponent": () => (/* binding */ IconButtonComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _icon_button_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icon-button.component.html?ngResource */ 367);
/* harmony import */ var _icon_button_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icon-button.component.scss?ngResource */ 9216);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);




let IconButtonComponent = class IconButtonComponent {
    constructor() { }
    ngOnInit() { }
};
IconButtonComponent.ctorParameters = () => [];
IconButtonComponent.propDecorators = {
    color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    shape: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    size: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
IconButtonComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'ci-icon-button',
        template: _icon_button_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectionStrategy.OnPush,
        styles: [_icon_button_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], IconButtonComponent);



/***/ }),

/***/ 2450:
/*!****************************************************************!*\
  !*** ./src/app/shared/components/boxes/icon/icon.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IconComponent": () => (/* binding */ IconComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _icon_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icon.component.html?ngResource */ 3723);
/* harmony import */ var _icon_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icon.component.scss?ngResource */ 3189);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);




let IconComponent = class IconComponent {
    constructor() { }
    ngOnInit() { }
};
IconComponent.ctorParameters = () => [];
IconComponent.propDecorators = {
    name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    size: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
IconComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'ci-icon',
        template: _icon_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectionStrategy.OnPush,
        styles: [_icon_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], IconComponent);



/***/ }),

/***/ 3938:
/*!*********************************************************************!*\
  !*** ./src/app/shared/components/navigation/menu/menu.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuComponent": () => (/* binding */ MenuComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _menu_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.component.html?ngResource */ 8901);
/* harmony import */ var _menu_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.component.scss?ngResource */ 1702);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_shared_services_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/navigation/navigation.service */ 6353);





let MenuComponent = class MenuComponent {
    constructor(navigationService) {
        this.navigationService = navigationService;
    }
    get navigationId() {
        return this.navigationService.id;
    }
    get navigationContentId() {
        return this.navigationService.contentId;
    }
    get navigationTitle() {
        return this.navigationService.title;
    }
    get items() {
        return this.navigationService.items;
    }
};
MenuComponent.ctorParameters = () => [
    { type: src_app_shared_services_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_2__.NavigationService }
];
MenuComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'ci-menu',
        template: _menu_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_menu_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MenuComponent);



/***/ }),

/***/ 9009:
/*!*********************************************************************!*\
  !*** ./src/app/shared/components/navigation/tabs/tabs.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsComponent": () => (/* binding */ TabsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _tabs_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.component.html?ngResource */ 2551);
/* harmony import */ var _tabs_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.component.scss?ngResource */ 3671);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_shared_services_tabs_tabs_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/tabs/tabs.service */ 2300);





let TabsComponent = class TabsComponent {
    constructor(tabsService) {
        this.tabsService = tabsService;
    }
    get tabs() {
        return this.tabsService.tabItems;
    }
};
TabsComponent.ctorParameters = () => [
    { type: src_app_shared_services_tabs_tabs_service__WEBPACK_IMPORTED_MODULE_2__.TabsService }
];
TabsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'ci-tabs',
        template: _tabs_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tabs_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TabsComponent);



/***/ }),

/***/ 8488:
/*!*******************************************************************************!*\
  !*** ./src/app/shared/components/page-container/content/content.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContentComponent": () => (/* binding */ ContentComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _content_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content.component.html?ngResource */ 6760);
/* harmony import */ var _content_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./content.component.scss?ngResource */ 8888);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let ContentComponent = class ContentComponent {
    constructor() { }
    ngOnInit() { }
};
ContentComponent.ctorParameters = () => [];
ContentComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'ci-content',
        template: _content_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectionStrategy.OnPush,
        styles: [_content_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ContentComponent);



/***/ }),

/***/ 6694:
/*!*****************************************************************************!*\
  !*** ./src/app/shared/components/page-container/header/header.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _header_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.component.html?ngResource */ 4900);
/* harmony import */ var _header_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.component.scss?ngResource */ 1679);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_shared_enums_ion_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/enums/ion-icons */ 3546);
/* harmony import */ var src_app_shared_resources_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/resources/user/user.service */ 8635);
/* harmony import */ var src_app_shared_services_session_session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/session/session.service */ 4517);
/* harmony import */ var src_app_shared_types_shapes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/types/shapes */ 8061);
/* harmony import */ var src_app_shared_types_sizes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/types/sizes */ 9920);









let HeaderComponent = class HeaderComponent {
    constructor(userService, changeDetector, sessionService) {
        this.userService = userService;
        this.changeDetector = changeDetector;
        this.sessionService = sessionService;
        this.icons = src_app_shared_enums_ion_icons__WEBPACK_IMPORTED_MODULE_2__.IonIcons;
        this.sizes = src_app_shared_types_sizes__WEBPACK_IMPORTED_MODULE_6__.Sizes;
        this.shapes = src_app_shared_types_shapes__WEBPACK_IMPORTED_MODULE_5__.Shapes;
    }
    get isLoggedIn() {
        return Boolean(this.sessionService.token);
    }
    /**
     * Trigger logout method from userService
     */
    logout() {
        this.logoutPromise = this.userService.logout().then(() => {
            this.changeDetector.markForCheck();
        }, () => { });
    }
};
HeaderComponent.ctorParameters = () => [
    { type: src_app_shared_resources_user_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectorRef },
    { type: src_app_shared_services_session_session_service__WEBPACK_IMPORTED_MODULE_4__.SessionService }
];
HeaderComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'ci-header',
        template: _header_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_header_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HeaderComponent);



/***/ }),

/***/ 9102:
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/page-container/page-container.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageContainerComponent": () => (/* binding */ PageContainerComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _page_container_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-container.component.html?ngResource */ 6816);
/* harmony import */ var _page_container_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-container.component.scss?ngResource */ 3057);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_page_container_page_container_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/page-container/page-container.service */ 7427);





let PageContainerComponent = class PageContainerComponent {
    constructor(pageContainerService) {
        this.pageContainerService = pageContainerService;
    }
    ngOnInit() {
        this.headerTitle = this.pageContainerService.headerTitle;
    }
};
PageContainerComponent.ctorParameters = () => [
    { type: _services_page_container_page_container_service__WEBPACK_IMPORTED_MODULE_2__.PageContainerService }
];
PageContainerComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'ci-page',
        template: _page_container_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectionStrategy.OnPush,
        styles: [_page_container_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PageContainerComponent);



/***/ }),

/***/ 7372:
/*!*********************************************************************************!*\
  !*** ./src/app/shared/components/typography/page-title/page-title.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageTitleComponent": () => (/* binding */ PageTitleComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _page_title_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-title.component.html?ngResource */ 2810);
/* harmony import */ var _page_title_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-title.component.scss?ngResource */ 365);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let PageTitleComponent = class PageTitleComponent {
    constructor() { }
    ngOnInit() { }
};
PageTitleComponent.ctorParameters = () => [];
PageTitleComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'ci-page-title',
        template: _page_title_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectionStrategy.OnPush,
        styles: [_page_title_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PageTitleComponent);



/***/ }),

/***/ 6000:
/*!*****************************************************************************!*\
  !*** ./src/app/shared/components/typography/subtitle/subtitle.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubtitleComponent": () => (/* binding */ SubtitleComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _subtitle_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./subtitle.component.html?ngResource */ 8046);
/* harmony import */ var _subtitle_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./subtitle.component.scss?ngResource */ 3463);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let SubtitleComponent = class SubtitleComponent {
    constructor() { }
    ngOnInit() { }
};
SubtitleComponent.ctorParameters = () => [];
SubtitleComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'ci-subtitle',
        template: _subtitle_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectionStrategy.OnPush,
        styles: [_subtitle_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SubtitleComponent);



/***/ }),

/***/ 3546:
/*!*******************************************!*\
  !*** ./src/app/shared/enums/ion-icons.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IonIcons": () => (/* binding */ IonIcons)
/* harmony export */ });
var IonIcons;
(function (IonIcons) {
    IonIcons["home"] = "home";
    IonIcons["login"] = "log-in";
    IonIcons["register"] = "download-outline";
    IonIcons["logout"] = "log-out-outline";
    IonIcons["dashboard"] = "stats-chart";
    IonIcons["more"] = "ellipsis-vertical";
    IonIcons["user"] = "person";
})(IonIcons || (IonIcons = {}));


/***/ }),

/***/ 4369:
/*!**************************************************!*\
  !*** ./src/app/shared/guards/auth/auth.guard.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var C_Users_g_ginev_source_xampp_htdocs_cinema_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_session_session_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/session/session.service */ 4517);





let AuthGuard = class AuthGuard {
  constructor(sessionService, router) {
    this.sessionService = sessionService;
    this.router = router;
    this.disabledRoutesForAuthUsers = ['/auth/login', '/auth/register'];
  }

  canActivate(route, state) {
    var _this = this;

    return (0,C_Users_g_ginev_source_xampp_htdocs_cinema_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (yield _this.sessionService.getToken()) {
        /**
         * If session is not loaded, load it
         */
        if (!_this.sessionService.user) {
          yield _this.sessionService.loadSession();
        }

        return true;
      }

      _this.router.navigate(['/auth/login'], {
        queryParams: {
          returnUrl: state.url
        }
      });

      return false;
    })();
  }

};

AuthGuard.ctorParameters = () => [{
  type: _services_session_session_service__WEBPACK_IMPORTED_MODULE_1__.SessionService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router
}];

AuthGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
  providedIn: 'root'
})], AuthGuard);


/***/ }),

/***/ 8020:
/*!****************************************************!*\
  !*** ./src/app/shared/guards/guest/guest.guard.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GuestGuard": () => (/* binding */ GuestGuard)
/* harmony export */ });
/* harmony import */ var C_Users_g_ginev_source_xampp_htdocs_cinema_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_session_session_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/session/session.service */ 4517);





let GuestGuard = class GuestGuard {
  constructor(sessionService, router) {
    this.sessionService = sessionService;
    this.router = router;
  }

  canActivate(route, state) {
    var _this = this;

    return (0,C_Users_g_ginev_source_xampp_htdocs_cinema_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (yield _this.sessionService.getToken()) {
        /**
         * If session is not loaded, load it
         */
        if (!_this.sessionService.user) {
          yield _this.sessionService.loadSession();
        }

        _this.router.navigate(['/dashboard'], {
          replaceUrl: true
        });

        return false;
      }

      return true;
    })();
  }

};

GuestGuard.ctorParameters = () => [{
  type: _services_session_session_service__WEBPACK_IMPORTED_MODULE_1__.SessionService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router
}];

GuestGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
  providedIn: 'root'
})], GuestGuard);


/***/ }),

/***/ 6886:
/*!******************************************************!*\
  !*** ./src/app/shared/resolvers/session.resolver.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SessionResolver": () => (/* binding */ SessionResolver)
/* harmony export */ });
/* harmony import */ var C_Users_g_ginev_source_xampp_htdocs_cinema_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_session_session_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/session/session.service */ 4517);




let SessionResolver = class SessionResolver {
  constructor(sessionService) {
    this.sessionService = sessionService;
  }

  resolve(route, state) {
    var _this = this;

    return (0,C_Users_g_ginev_source_xampp_htdocs_cinema_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this.sessionService.user) {
        yield _this.sessionService.loadSession().then(() => {}, () => {});
      }

      return Promise.resolve(true);
    })();
  }

};

SessionResolver.ctorParameters = () => [{
  type: _services_session_session_service__WEBPACK_IMPORTED_MODULE_1__.SessionService
}];

SessionResolver = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
  providedIn: 'root'
})], SessionResolver);


/***/ }),

/***/ 6830:
/*!*******************************************************!*\
  !*** ./src/app/shared/resources/resource/resource.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JsonResource": () => (/* binding */ JsonResource)
/* harmony export */ });
class JsonResource {
    constructor() {
        this.data = {};
    }
    /**
     * Fill attributes to data
     *
     * @param passedData object
     */
    fillAttributes(passedData) {
        Object.keys(passedData).forEach((passedKey) => {
            const foundAttribute = Boolean(Object.keys(this.data).find((key) => key === passedKey));
            if (!foundAttribute) {
                return;
            }
            this.data[passedKey] = passedData[passedKey];
        });
    }
}


/***/ }),

/***/ 8635:
/*!*******************************************************!*\
  !*** ./src/app/shared/resources/user/user.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "User": () => (/* binding */ User),
/* harmony export */   "UserService": () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var C_Users_g_ginev_source_xampp_htdocs_cinema_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _resource_resource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../resource/resource */ 6830);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _services_toast_toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/toast/toast.service */ 4023);
/* harmony import */ var _services_session_session_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/session/session.service */ 4517);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);








class User extends _resource_resource__WEBPACK_IMPORTED_MODULE_1__.JsonResource {
  constructor() {
    super(...arguments);
    this.data = {
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
      relationships: {}
    };
  }

}
let UserService = class UserService {
  constructor(httpClient, toastService, sessionService, router) {
    this.httpClient = httpClient;
    this.toastService = toastService;
    this.sessionService = sessionService;
    this.router = router;
  }
  /**
   * Create user
   */


  create(data) {
    const user = new User();
    user.fillAttributes(data);
    return this.httpClient.post('/register', JSON.stringify(user.data)).toPromise().then(response => {
      this.toastService.success({
        message: 'The account was created successfully'
      });
    }, () => {});
  }
  /**
   * Login into the account
   *
   * @param data object
   */


  login(data) {
    const user = new User();
    user.fillAttributes(data);
    return this.httpClient.post('/login', JSON.stringify(user.data)).toPromise().then(data => {
      this.toastService.success({
        message: 'You were logged.'
      });
      this.sessionService.createSession(data, user);
      return data;
    }, () => {});
  }

  logout() {
    var _this = this;

    const user = this.sessionService.user;
    return this.httpClient.post('/logout', JSON.stringify(user)).toPromise().then( /*#__PURE__*/function () {
      var _ref = (0,C_Users_g_ginev_source_xampp_htdocs_cinema_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
        _this.router.navigate(['/home']);

        yield _this.sessionService.clearSession();

        _this.toastService.success({
          message: 'You have successfully logged out.'
        });

        return data;
      });

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }(), () => {});
  }

};

UserService.ctorParameters = () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient
}, {
  type: _services_toast_toast_service__WEBPACK_IMPORTED_MODULE_2__.ToastService
}, {
  type: _services_session_session_service__WEBPACK_IMPORTED_MODULE_3__.SessionService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
}];

UserService = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)()], UserService);


/***/ }),

/***/ 6256:
/*!******************************************************!*\
  !*** ./src/app/shared/services/auth/auth.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


let AuthService = class AuthService {
    constructor() { }
};
AuthService.ctorParameters = () => [];
AuthService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root',
    })
], AuthService);



/***/ }),

/***/ 3688:
/*!******************************************************************************!*\
  !*** ./src/app/shared/services/http-interceptor/http-interceptor.service.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpInterceptorService": () => (/* binding */ HttpInterceptorService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var ngx_logger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-logger */ 7275);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ 2340);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 7418);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 6587);
/* harmony import */ var _toast_toast_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toast/toast.service */ 4023);
/* harmony import */ var _session_session_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../session/session.service */ 4517);








let HttpInterceptorService = class HttpInterceptorService {
    constructor(logger, toastService, sessionService) {
        this.logger = logger;
        this.toastService = toastService;
        this.sessionService = sessionService;
    }
    intercept(req, next) {
        let headers;
        if (!this.sessionService.token) {
            headers = req.headers.set('Content-Type', 'application/json')
                .set('Accept', 'application/json');
        }
        else {
            headers = req.headers.set('Content-Type', 'application/json')
                .set('Authorization', this.sessionService.token)
                .set('Accept', 'application/json');
        }
        req = req.clone({
            url: _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api.url + req.url,
            headers: headers
        });
        return next.handle(req).pipe(
        /**
         * Show returned error from server
         */
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((result) => {
            if (result?.body?.error) {
                this.toastService.error({
                    message: result.body.error[Object.keys(result.body.error)[0]]
                }).then(() => { }, () => { });
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(result.body.error[Object.keys(result.body.error)[0]]);
            }
            return result;
        }), 
        /**
         * Request error
         */
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)((error) => {
            if (error.error.errors) {
                this.toastService.error({
                    message: error.error.errors[Object.keys(error.error.errors)[0]]
                }).then(() => { }, () => { });
            }
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(error.error.message);
        }));
    }
};
HttpInterceptorService.ctorParameters = () => [
    { type: ngx_logger__WEBPACK_IMPORTED_MODULE_6__.NGXLogger },
    { type: _toast_toast_service__WEBPACK_IMPORTED_MODULE_1__.ToastService },
    { type: _session_session_service__WEBPACK_IMPORTED_MODULE_2__.SessionService }
];
HttpInterceptorService = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Injectable)()
], HttpInterceptorService);



/***/ }),

/***/ 6353:
/*!******************************************************************!*\
  !*** ./src/app/shared/services/navigation/navigation.service.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavigationService": () => (/* binding */ NavigationService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _enums_ion_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../enums/ion-icons */ 3546);
/* harmony import */ var _resources_user_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../resources/user/user.service */ 8635);
/* harmony import */ var _session_session_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../session/session.service */ 4517);







let NavigationService = class NavigationService {
    constructor(router, sessionService, userService, menuController) {
        this.router = router;
        this.sessionService = sessionService;
        this.userService = userService;
        this.menuController = menuController;
        this._contentId = 'main-navigation';
        this._id = 'main-navigation';
        this._title = 'Navigation';
        this._authNavigationItems = [
            {
                label: 'Dashboard',
                icon: _enums_ion_icons__WEBPACK_IMPORTED_MODULE_0__.IonIcons.dashboard,
                action: () => {
                    this.router.navigate(['/dashboard']);
                },
            },
            {
                label: 'Sign Out',
                icon: _enums_ion_icons__WEBPACK_IMPORTED_MODULE_0__.IonIcons.logout,
                action: () => {
                    this.userService.logout();
                    this.menuController.close();
                },
            },
        ];
        this._navigationItems = [
            {
                label: 'Home',
                icon: _enums_ion_icons__WEBPACK_IMPORTED_MODULE_0__.IonIcons.home,
                action: () => {
                    this.router.navigate(['/home']);
                },
            },
            {
                label: 'Sign In',
                icon: _enums_ion_icons__WEBPACK_IMPORTED_MODULE_0__.IonIcons.login,
                action: () => {
                    this.router.navigate(['/auth/login']);
                },
            },
            {
                label: 'Sign Up',
                icon: _enums_ion_icons__WEBPACK_IMPORTED_MODULE_0__.IonIcons.register,
                action: () => {
                    this.router.navigate(['/auth/register']);
                },
            },
        ];
    }
    get items() {
        if (this.sessionService.token) {
            return this._authNavigationItems;
        }
        return this._navigationItems;
    }
    get id() {
        return this._id;
    }
    get contentId() {
        return this._contentId;
    }
    get title() {
        return this._title;
    }
};
NavigationService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _session_session_service__WEBPACK_IMPORTED_MODULE_2__.SessionService },
    { type: _resources_user_user_service__WEBPACK_IMPORTED_MODULE_1__.UserService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.MenuController }
];
NavigationService = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
        providedIn: 'root',
    })
], NavigationService);



/***/ }),

/***/ 7427:
/*!**************************************************************************!*\
  !*** ./src/app/shared/services/page-container/page-container.service.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageContainerService": () => (/* binding */ PageContainerService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


let PageContainerService = class PageContainerService {
    constructor() { }
    get headerTitle() {
        return this._headerTitle;
    }
    set headerTitle(headerTitle) {
        this._headerTitle = headerTitle;
    }
};
PageContainerService.ctorParameters = () => [];
PageContainerService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], PageContainerService);



/***/ }),

/***/ 2826:
/*!******************************************************************!*\
  !*** ./src/app/shared/services/panel-page/panel-page.service.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PanelPageService": () => (/* binding */ PanelPageService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


let PanelPageService = class PanelPageService {
    constructor() { }
    get headerName() {
        return this._headerName;
    }
    set headerName(headerName) {
        this._headerName = headerName;
    }
    get headerNameIcon() {
        return this._headerNameIcon;
    }
    set headerNameIcon(headerNameIcon) {
        this._headerNameIcon = headerNameIcon;
    }
};
PanelPageService.ctorParameters = () => [];
PanelPageService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)()
], PanelPageService);



/***/ }),

/***/ 4517:
/*!************************************************************!*\
  !*** ./src/app/shared/services/session/session.service.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SessionService": () => (/* binding */ SessionService)
/* harmony export */ });
/* harmony import */ var C_Users_g_ginev_source_xampp_htdocs_cinema_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _capacitor_preferences__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/preferences */ 5191);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);





let SessionService = class SessionService {
  constructor(httpClient) {
    this.httpClient = httpClient;
  }

  get user() {
    return this._user;
  }

  set user(user) {
    this._user = user;
  }

  get token() {
    return this._token;
  }

  set token(token) {
    this._token = token;
  }

  createSession(data, user) {
    var _this = this;

    return (0,C_Users_g_ginev_source_xampp_htdocs_cinema_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.user = user;
      yield _capacitor_preferences__WEBPACK_IMPORTED_MODULE_1__.Preferences.set({
        key: 'credentials',
        value: JSON.stringify(data)
      });
      return true;
    })();
  }

  clearSession() {
    var _this2 = this;

    return (0,C_Users_g_ginev_source_xampp_htdocs_cinema_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _capacitor_preferences__WEBPACK_IMPORTED_MODULE_1__.Preferences.remove({
        key: 'credentials'
      });
      _this2.token = '';
      _this2.user = undefined;
    })();
  }
  /**
   * Load session if a token is in storage if it is not loaded
   * @returns
   */


  loadSession() {
    var _this3 = this;

    return (0,C_Users_g_ginev_source_xampp_htdocs_cinema_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this3.getToken();
      console.log('load session : ', _this3.token);

      if (_this3.token) {
        console.log('token exists');
        yield _this3.loadUser();
        return Promise.resolve(true);
      }

      return Promise.reject(false);
    })();
  }

  loadUser() {
    return this.httpClient.get('/user').toPromise().then(user => {
      this.user = user;
    }, () => {});
  }

  getToken() {
    var _this4 = this;

    return (0,C_Users_g_ginev_source_xampp_htdocs_cinema_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this4.token) {
        return Promise.resolve(_this4.token);
      }

      const loginResponse = yield _capacitor_preferences__WEBPACK_IMPORTED_MODULE_1__.Preferences.get({
        key: 'credentials'
      });
      /**
       * If user is not logged in
       */

      if (!loginResponse.value) {
        return null;
      }

      _this4.token = JSON.parse(loginResponse.value)?.token_type + ' ' + JSON.parse(loginResponse.value)?.access_token;
      return _this4.token;
    })();
  }

};

SessionService.ctorParameters = () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient
}];

SessionService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)()], SessionService);


/***/ }),

/***/ 3328:
/*!************************************************************!*\
  !*** ./src/app/shared/services/storage/storage.service.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StorageService": () => (/* binding */ StorageService)
/* harmony export */ });
/* harmony import */ var C_Users_g_ginev_source_xampp_htdocs_cinema_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/storage-angular */ 190);




let StorageService = class StorageService {
  constructor(storage) {
    this.storage = storage;
    this.init();
  }
  /**
   * Get value from storage
   * @param key identificator
   * @returns
   */


  get(key) {
    if (this._storage) {
      return this._storage.get(key);
    }

    return Promise.reject();
  }
  /**
   * Set storage key
   */


  set(key, value) {
    var _this = this;

    return (0,C_Users_g_ginev_source_xampp_htdocs_cinema_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this._storage) {
        return _this._storage.set(key, value);
      }

      return Promise.reject();
    })();
  }
  /**
   * Init storage
   */


  init() {
    var _this2 = this;

    return (0,C_Users_g_ginev_source_xampp_htdocs_cinema_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const storage = yield _this2.storage.create();
      _this2._storage = storage;
    })();
  }

};

StorageService.ctorParameters = () => [{
  type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_1__.Storage
}];

StorageService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
  providedIn: 'root'
})], StorageService);


/***/ }),

/***/ 2300:
/*!******************************************************!*\
  !*** ./src/app/shared/services/tabs/tabs.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsService": () => (/* binding */ TabsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _navigation_navigation_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../navigation/navigation.service */ 6353);
/* harmony import */ var _session_session_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../session/session.service */ 4517);






let TabsService = class TabsService {
    constructor(sessionService, menu, navigationService, router) {
        this.sessionService = sessionService;
        this.menu = menu;
        this.navigationService = navigationService;
        this.router = router;
        this._authTabs = [
            {
                label: 'Home',
                icon: 'home-outline',
                action: () => {
                    this.router.navigate(['/home']);
                },
            },
            {
                label: 'Menu',
                icon: 'menu',
                action: () => {
                    this.menu.open(this.navigationService.contentId);
                },
            },
        ];
        this._unAuthTabs = [
            {
                label: 'Sign In',
                icon: 'log-in-outline',
                action: () => {
                    this.router.navigate(['/auth/login']);
                },
            },
            {
                label: 'Sign Up',
                icon: 'download-outline',
                action: () => {
                    this.router.navigate(['/auth/register']);
                },
            },
            {
                label: 'Menu',
                icon: 'menu',
                action: () => {
                    this.menu.open(this.navigationService.contentId);
                },
            },
        ];
    }
    get tabItems() {
        if (this.sessionService.token) {
            return this._authTabs;
        }
        return this._unAuthTabs;
    }
};
TabsService.ctorParameters = () => [
    { type: _session_session_service__WEBPACK_IMPORTED_MODULE_1__.SessionService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.MenuController },
    { type: _navigation_navigation_service__WEBPACK_IMPORTED_MODULE_0__.NavigationService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
TabsService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)()
], TabsService);



/***/ }),

/***/ 4023:
/*!********************************************************!*\
  !*** ./src/app/shared/services/toast/toast.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToastService": () => (/* binding */ ToastService)
/* harmony export */ });
/* harmony import */ var C_Users_g_ginev_source_xampp_htdocs_cinema_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 3819);




let ToastService = class ToastService {
  constructor(toastController) {
    this.toastController = toastController;
    this.toastDuration = 2000;
  }

  error(options) {
    return this.initToast({ ...options,
      duration: this.toastDuration,
      color: 'danger'
    });
  }

  success(options) {
    return this.initToast({ ...options,
      duration: this.toastDuration,
      color: 'success'
    });
  }

  initToast(options) {
    var _this = this;

    return (0,C_Users_g_ginev_source_xampp_htdocs_cinema_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this.toastController.create(options);
      yield toast.present();
      return toast.onDidDismiss();
    })();
  }

};

ToastService.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.ToastController
}];

ToastService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
  providedIn: 'root'
})], ToastService);


/***/ }),

/***/ 4466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _components_boxes_button_button_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/boxes/button/button.component */ 9485);
/* harmony import */ var _components_page_container_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/page-container/header/header.component */ 6694);
/* harmony import */ var _components_navigation_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/navigation/tabs/tabs.component */ 9009);
/* harmony import */ var _components_navigation_menu_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/navigation/menu/menu.component */ 3938);
/* harmony import */ var _services_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/navigation/navigation.service */ 6353);
/* harmony import */ var _services_tabs_tabs_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/tabs/tabs.service */ 2300);
/* harmony import */ var _services_storage_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/storage/storage.service */ 3328);
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/auth/auth.service */ 6256);
/* harmony import */ var _services_toast_toast_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/toast/toast.service */ 4023);
/* harmony import */ var _resources_user_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./resources/user/user.service */ 8635);
/* harmony import */ var _components_typography_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/typography/page-title/page-title.component */ 7372);
/* harmony import */ var _components_page_container_content_content_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/page-container/content/content.component */ 8488);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components_page_container_page_container_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/page-container/page-container.component */ 9102);
/* harmony import */ var _services_page_container_page_container_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/page-container/page-container.service */ 7427);
/* harmony import */ var _components_boxes_icon_icon_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/boxes/icon/icon.component */ 2450);
/* harmony import */ var _components_boxes_icon_button_icon_button_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/boxes/icon-button/icon-button.component */ 5219);
/* harmony import */ var _components_boxes_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/boxes/dropdown/dropdown.component */ 4116);
/* harmony import */ var _components_boxes_dropdown_dropdown_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/boxes/dropdown/dropdown.service */ 2741);
/* harmony import */ var _components_typography_subtitle_subtitle_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/typography/subtitle/subtitle.component */ 6000);
/* harmony import */ var _components_boxes_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/boxes/avatar/avatar.component */ 975);
/* harmony import */ var _services_panel_page_panel_page_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/panel-page/panel-page.service */ 2826);



























let SharedModule = class SharedModule {
};
SharedModule = (0,tslib__WEBPACK_IMPORTED_MODULE_21__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_22__.NgModule)({
        declarations: [
            _components_boxes_button_button_component__WEBPACK_IMPORTED_MODULE_0__.ButtonComponent,
            _components_page_container_header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent,
            _components_navigation_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_2__.TabsComponent,
            _components_navigation_menu_menu_component__WEBPACK_IMPORTED_MODULE_3__.MenuComponent,
            _components_typography_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_10__.PageTitleComponent,
            _components_page_container_content_content_component__WEBPACK_IMPORTED_MODULE_11__.ContentComponent,
            _components_page_container_page_container_component__WEBPACK_IMPORTED_MODULE_12__.PageContainerComponent,
            _components_boxes_icon_icon_component__WEBPACK_IMPORTED_MODULE_14__.IconComponent,
            _components_boxes_icon_button_icon_button_component__WEBPACK_IMPORTED_MODULE_15__.IconButtonComponent,
            _components_boxes_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_16__.DropdownComponent,
            _components_typography_subtitle_subtitle_component__WEBPACK_IMPORTED_MODULE_18__.SubtitleComponent,
            _components_boxes_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_19__.AvatarComponent
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_23__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_24__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_25__.IonicModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_26__.RouterModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_24__.ReactiveFormsModule
        ],
        providers: [
            _services_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_4__.NavigationService,
            _services_tabs_tabs_service__WEBPACK_IMPORTED_MODULE_5__.TabsService,
            _services_storage_storage_service__WEBPACK_IMPORTED_MODULE_6__.StorageService,
            _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__.AuthService,
            _services_toast_toast_service__WEBPACK_IMPORTED_MODULE_8__.ToastService,
            _resources_user_user_service__WEBPACK_IMPORTED_MODULE_9__.UserService,
            _services_page_container_page_container_service__WEBPACK_IMPORTED_MODULE_13__.PageContainerService,
            _components_boxes_dropdown_dropdown_service__WEBPACK_IMPORTED_MODULE_17__.DropdownService,
            _services_panel_page_panel_page_service__WEBPACK_IMPORTED_MODULE_20__.PanelPageService
        ],
        exports: [
            //Modules
            _angular_router__WEBPACK_IMPORTED_MODULE_26__.RouterModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_23__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_24__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_25__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_24__.ReactiveFormsModule,
            //Components
            _components_boxes_button_button_component__WEBPACK_IMPORTED_MODULE_0__.ButtonComponent,
            _components_page_container_header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent,
            _components_navigation_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_2__.TabsComponent,
            _components_navigation_menu_menu_component__WEBPACK_IMPORTED_MODULE_3__.MenuComponent,
            _components_typography_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_10__.PageTitleComponent,
            _components_page_container_content_content_component__WEBPACK_IMPORTED_MODULE_11__.ContentComponent,
            _components_page_container_page_container_component__WEBPACK_IMPORTED_MODULE_12__.PageContainerComponent,
            _components_boxes_icon_icon_component__WEBPACK_IMPORTED_MODULE_14__.IconComponent,
            _components_boxes_icon_button_icon_button_component__WEBPACK_IMPORTED_MODULE_15__.IconButtonComponent,
            _components_boxes_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_16__.DropdownComponent,
            _components_typography_subtitle_subtitle_component__WEBPACK_IMPORTED_MODULE_18__.SubtitleComponent,
            _components_boxes_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_19__.AvatarComponent
        ],
    })
], SharedModule);



/***/ }),

/***/ 8061:
/*!****************************************!*\
  !*** ./src/app/shared/types/shapes.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Shapes": () => (/* binding */ Shapes)
/* harmony export */ });
var Shapes;
(function (Shapes) {
    Shapes["round"] = "round";
    Shapes["circle"] = "circle";
    Shapes["default"] = "default";
})(Shapes || (Shapes = {}));


/***/ }),

/***/ 9920:
/*!***************************************!*\
  !*** ./src/app/shared/types/sizes.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Sizes": () => (/* binding */ Sizes)
/* harmony export */ });
var Sizes;
(function (Sizes) {
    Sizes["small"] = "small";
    Sizes["default"] = "default";
    Sizes["medium"] = "medium";
    Sizes["large"] = "large";
})(Sizes || (Sizes = {}));


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyCgtrp-EGSjzDEXizGoWUNtMtbG_d9ljgw',
        authDomain: 'cinema-480cf.firebaseapp.com',
        projectId: 'cinema-480cf',
        storageBucket: 'cinema-480cf.appspot.com',
        messagingSenderId: '338570792714',
        appId: '1:338570792714:web:1efee5b9efbae0fa5f34f3',
        measurementId: 'G-LC7LRHJHSF',
    },
    api: {
        url: 'http://localhost:8000/api'
    }
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

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 6057);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		79,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		5593,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		3225,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		4812,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		6655,
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		4856,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		3059,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		8648,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		8308,
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		4690,
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		4090,
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		6214,
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		9447,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime-button.entry.js": [
		7950,
		"default-node_modules_ionic_core_dist_esm_data-cb72448c_js-node_modules_ionic_core_dist_esm_th-29e28e",
		"node_modules_ionic_core_dist_esm_ion-datetime-button_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		9689,
		"default-node_modules_ionic_core_dist_esm_data-cb72448c_js-node_modules_ionic_core_dist_esm_th-29e28e",
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		8840,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		749,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		9667,
		"common",
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		3288,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		5473,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		3634,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		2855,
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		495,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		8737,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		9632,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		4446,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		2275,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		8050,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		8994,
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		3592,
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		5454,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		290,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		2666,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		4816,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		5534,
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		4902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		1938,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		8179,
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		668,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		1624,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		9989,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		8902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		199,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		8395,
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		6357,
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		8268,
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		5269,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		2875,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 9259:
/*!***********************************************!*\
  !*** ./src/app/app.component.scss?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 4102:
/*!*********************************************************************************!*\
  !*** ./src/app/shared/components/boxes/avatar/avatar.component.scss?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ":host .avatar-container {\n  position: relative;\n  border-radius: 50%;\n  overflow: hidden;\n}\n:host .avatar-container.ion-activatable {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF2YXRhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUFSO0FBRVE7RUFDSSxlQUFBO0FBQVoiLCJmaWxlIjoiYXZhdGFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgLmF2YXRhci1jb250YWluZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBcclxuICAgICAgICAmLmlvbi1hY3RpdmF0YWJsZSB7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */";

/***/ }),

/***/ 161:
/*!*********************************************************************************!*\
  !*** ./src/app/shared/components/boxes/button/button.component.scss?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ":host {\n  position: relative;\n  display: inline-block;\n  margin: 4px 2px;\n  border-radius: 4px;\n  overflow: hidden;\n}\n:host ion-button {\n  --box-shadow: none;\n  margin: 0;\n}\n:host.has-promise {\n  pointer-events: none;\n}\n:host.has-promise .promise-wrapper {\n  width: 100%;\n  height: 100%;\n  background-color: rgba(255, 255, 255, 0.8);\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1dHRvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUNKO0FBQ0k7RUFDSSxrQkFBQTtFQUNBLFNBQUE7QUFDUjtBQUVJO0VBQ0ksb0JBQUE7QUFBUjtBQUVRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSwwQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUFaIiwiZmlsZSI6ImJ1dHRvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbjogNHB4IDJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgICAgLS1ib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgIH1cclxuXHJcbiAgICAmLmhhcy1wcm9taXNlIHtcclxuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgICAgICBcclxuICAgICAgICAucHJvbWlzZS13cmFwcGVyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */";

/***/ }),

/***/ 5020:
/*!*************************************************************************************!*\
  !*** ./src/app/shared/components/boxes/dropdown/dropdown.component.scss?ngResource ***!
  \*************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ":host .options-container {\n  display: none;\n}\n\n::ng-deep .panel-logout-select-option {\n  --color: var(--ion-color-danger);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRyb3Bkb3duLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksYUFBQTtBQUFSOztBQUlBO0VBQ0ksZ0NBQUE7QUFESiIsImZpbGUiOiJkcm9wZG93bi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIC5vcHRpb25zLWNvbnRhaW5lciB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxufVxyXG5cclxuOjpuZy1kZWVwIC5wYW5lbC1sb2dvdXQtc2VsZWN0LW9wdGlvbiB7XHJcbiAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcclxufSJdfQ== */";

/***/ }),

/***/ 9216:
/*!*******************************************************************************************!*\
  !*** ./src/app/shared/components/boxes/icon-button/icon-button.component.scss?ngResource ***!
  \*******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ":host {\n  display: block;\n}\n:host[ng-reflect-shape=round] {\n  border-radius: 12px;\n  overflow: hidden;\n}\n:host[ng-reflect-shape=circle] {\n  border-radius: 50%;\n  overflow: hidden;\n}\n:host[ng-reflect-shape=default] {\n  border-radius: 0;\n  overflow: hidden;\n}\n:host .ripple-parent {\n  position: relative;\n  overflow: hidden;\n}\n:host ci-button {\n  margin: 0;\n  display: block;\n}\n:host ci-button ::ng-deep ion-button {\n  height: 32px;\n  width: 32px;\n  --padding-start: 0;\n  --padding-end: 0;\n}\n:host[ng-reflect-size=small] ci-button ::ng-deep ion-button {\n  height: 24px;\n  width: 24px;\n}\n:host[ng-reflect-size=default] ci-button ::ng-deep ion-button {\n  height: 32px;\n  width: 32px;\n}\n:host[ng-reflect-size=medium] ci-button ::ng-deep ion-button {\n  height: 36px;\n  width: 36px;\n}\n:host[ng-reflect-size=large] ci-button ::ng-deep ion-button {\n  height: 42px;\n  width: 42px;\n}\n:host ::ng-deep ci-icon {\n  display: inherit;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImljb24tYnV0dG9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0ksY0FBQTtBQUhKO0FBTVE7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0FBSlo7QUFFUTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7QUFBWjtBQUZRO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtBQUlaO0FBQUk7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0FBRVI7QUFDSTtFQUNJLFNBQUE7RUFDQSxjQUFBO0FBQ1I7QUFDUTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUNaO0FBTWdCO0VBQ0ksWUFqQ1o7RUFrQ1ksV0FsQ1o7QUE4QlI7QUFFZ0I7RUFDSSxZQWpDWjtFQWtDWSxXQWxDWjtBQWtDUjtBQUZnQjtFQUNJLFlBakNaO0VBa0NZLFdBbENaO0FBc0NSO0FBTmdCO0VBQ0ksWUFqQ1o7RUFrQ1ksV0FsQ1o7QUEwQ1I7QUFGSTtFQUNJLGdCQUFBO0FBSVIiLCJmaWxlIjoiaWNvbi1idXR0b24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkc2hhcGVzOiAoXCJyb3VuZFwiLCAxMnB4KSwgKFwiY2lyY2xlXCIsIDUwJSksIChcImRlZmF1bHRcIiwgMCk7XHJcblxyXG4kc2l6ZXM6IChcInNtYWxsXCIsIDI0cHgpLCAoXCJkZWZhdWx0XCIsIDMycHgpLCAoXCJtZWRpdW1cIiwgMzZweCksIChcImxhcmdlXCIsIDQycHgpO1xyXG5cclxuOmhvc3Qge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcblxyXG4gICAgQGVhY2ggJHR5cGUsICRzaGFwZSBpbiAkc2hhcGVzIHtcclxuICAgICAgICAmW25nLXJlZmxlY3Qtc2hhcGU9XCIjeyR0eXBlfVwiXSB7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6ICN7JHNoYXBlfTtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICB9ICAgXHJcbiAgICB9XHJcblxyXG4gICAgLnJpcHBsZS1wYXJlbnQge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgfVxyXG5cclxuICAgIGNpLWJ1dHRvbiB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG5cclxuICAgICAgICA6Om5nLWRlZXAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzJweDtcclxuICAgICAgICAgICAgd2lkdGg6IDMycHg7XHJcbiAgICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogMDtcclxuICAgICAgICAgICAgLS1wYWRkaW5nLWVuZDogMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQGVhY2ggJHR5cGUsICRzaXplIGluICRzaXplcyB7XHJcbiAgICAgICAgJltuZy1yZWZsZWN0LXNpemU9XCIjeyR0eXBlfVwiXSB7XHJcbiAgICAgICAgICAgIGNpLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICA6Om5nLWRlZXAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAkc2l6ZTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogJHNpemU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IFxyXG4gICAgfVxyXG5cclxuICAgIDo6bmctZGVlcCBjaS1pY29uIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmhlcml0O1xyXG4gICAgfVxyXG59Il19 */";

/***/ }),

/***/ 3189:
/*!*****************************************************************************!*\
  !*** ./src/app/shared/components/boxes/icon/icon.component.scss?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ":host {\n  display: inline-block;\n  vertical-align: middle;\n}\n:host[ng-reflect-size=small] {\n  font-size: 12px;\n}\n:host[ng-reflect-size=default] {\n  font-size: 14px;\n}\n:host[ng-reflect-size=medium] {\n  font-size: 18px;\n}\n:host[ng-reflect-size=large] {\n  font-size: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImljb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxxQkFBQTtFQUNBLHNCQUFBO0FBREo7QUFJUTtFQUNJLGVBUko7QUFNUjtBQUNRO0VBQ0ksZUFSSjtBQVNSO0FBRlE7RUFDSSxlQVJKO0FBWVI7QUFMUTtFQUNJLGVBUko7QUFlUiIsImZpbGUiOiJpY29uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHNpemVzOiAoXCJzbWFsbFwiLCAxMnB4KSwgKFwiZGVmYXVsdFwiLCAxNHB4KSwgKFwibWVkaXVtXCIsIDE4cHgpLCAoXCJsYXJnZVwiLCAyNHB4KTtcclxuXHJcbjpob3N0IHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBcclxuICAgIEBlYWNoICR0eXBlLCAkc2l6ZSBpbiAkc2l6ZXMge1xyXG4gICAgICAgICZbbmctcmVmbGVjdC1zaXplPVwiI3skdHlwZX1cIl0ge1xyXG4gICAgICAgICAgICBmb250LXNpemU6ICRzaXplO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */";

/***/ }),

/***/ 1702:
/*!**********************************************************************************!*\
  !*** ./src/app/shared/components/navigation/menu/menu.component.scss?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZW51LmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 3671:
/*!**********************************************************************************!*\
  !*** ./src/app/shared/components/navigation/tabs/tabs.component.scss?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJzLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 8888:
/*!********************************************************************************************!*\
  !*** ./src/app/shared/components/page-container/content/content.component.scss?ngResource ***!
  \********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ":host {\n  height: 100%;\n  width: 100%;\n  max-width: var(--content-max-width);\n  margin: auto;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRlbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1DQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFDSiIsImZpbGUiOiJjb250ZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IHZhcigtLWNvbnRlbnQtbWF4LXdpZHRoKTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59Il19 */";

/***/ }),

/***/ 1679:
/*!******************************************************************************************!*\
  !*** ./src/app/shared/components/page-container/header/header.component.scss?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ":host ion-toolbar {\n  max-width: var(--content-max-width);\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLG1DQUFBO0VBQ0EsWUFBQTtBQUFSIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIGlvbi10b29sYmFyIHtcclxuICAgICAgICBtYXgtd2lkdGg6IHZhcigtLWNvbnRlbnQtbWF4LXdpZHRoKTtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICB9XHJcbn0iXX0= */";

/***/ }),

/***/ 3057:
/*!*******************************************************************************************!*\
  !*** ./src/app/shared/components/page-container/page-container.component.scss?ngResource ***!
  \*******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ":host {\n  display: block;\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2UtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBQ0oiLCJmaWxlIjoicGFnZS1jb250YWluZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59Il19 */";

/***/ }),

/***/ 365:
/*!**********************************************************************************************!*\
  !*** ./src/app/shared/components/typography/page-title/page-title.component.scss?ngResource ***!
  \**********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ":host {\n  font-size: 26px;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2UtdGl0bGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUFDSiIsImZpbGUiOiJwYWdlLXRpdGxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgZm9udC1zaXplOiAyNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn0iXX0= */";

/***/ }),

/***/ 3463:
/*!******************************************************************************************!*\
  !*** ./src/app/shared/components/typography/subtitle/subtitle.component.scss?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ":host {\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1YnRpdGxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtBQUNKIiwiZmlsZSI6InN1YnRpdGxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59Il19 */";

/***/ }),

/***/ 3383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-app>\r\n  <!-- <ci-menu></ci-menu> -->\r\n  <ion-router-outlet [id]=\"navigationContentId\"></ion-router-outlet>\r\n  <!-- <ci-tabs></ci-tabs> -->\r\n</ion-app>";

/***/ }),

/***/ 4806:
/*!*********************************************************************************!*\
  !*** ./src/app/shared/components/boxes/avatar/avatar.component.html?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div [class.avatar-container]=\"clickable\" [class.ion-activatable]=\"clickable\">\n  <ion-avatar>\n    <ng-container *ngIf=\"img\">\n      <img alt=\"Avatar\" [src]=\"img\" />\n    </ng-container>\n    <ng-container *ngIf=\"!img\">\n      <img alt=\"Avatar\" src=\"assets/avatar/no-avatar.png\" />\n    </ng-container>\n  </ion-avatar>\n  <ion-ripple-effect></ion-ripple-effect>\n</div>\n";

/***/ }),

/***/ 900:
/*!*********************************************************************************!*\
  !*** ./src/app/shared/components/boxes/button/button.component.html?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-button [color]=\"color\" [size]=\"size\" [shape]=\"shape\">\r\n  <ng-content></ng-content>\r\n</ion-button>\r\n<ng-container *ngIf=\"showLoadingEffect\"> \r\n  <div class=\"promise-wrapper\">\r\n    <ion-spinner name=\"circular\"></ion-spinner>\r\n  </div>  \r\n</ng-container>\r\n";

/***/ }),

/***/ 1140:
/*!*************************************************************************************!*\
  !*** ./src/app/shared/components/boxes/dropdown/dropdown.component.html?ngResource ***!
  \*************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div (click)=\"openOptions($event)\">\n  <ng-content></ng-content>\n</div>\n<div class=\"options-container\">\n  <ion-select interface=\"popover\" [(ngModel)]=\"selectedOption\" placeholder=\"Select fruit\" (ionChange)=\"handleSelectChange($event)\" #selectOption>\n    <ng-container *ngFor=\"let item of navItems\">\n      <ion-select-option [disabled]=\"item.disabled\" class=\"{{item.class}}\" [value]=\"item.value\">{{item.label}}</ion-select-option>\n    </ng-container>\n  </ion-select>\n</div>\n";

/***/ }),

/***/ 367:
/*!*******************************************************************************************!*\
  !*** ./src/app/shared/components/boxes/icon-button/icon-button.component.html?ngResource ***!
  \*******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"ripple-parent ion-activatable\">\n  <ci-button [color]=\"color\">\n    <ng-content select=\"ci-icon\"></ng-content>\n  </ci-button>\n  <ion-ripple-effect></ion-ripple-effect>\n</div>";

/***/ }),

/***/ 3723:
/*!*****************************************************************************!*\
  !*** ./src/app/shared/components/boxes/icon/icon.component.html?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-icon [name]=\"name\" [color]=\"color\"></ion-icon>\n";

/***/ }),

/***/ 8901:
/*!**********************************************************************************!*\
  !*** ./src/app/shared/components/navigation/menu/menu.component.html?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-menu side=\"end\" [contentId]=\"navigationContentId\" [menuId]=\"navigationId\">\r\n  <ion-header>\r\n    <ion-toolbar color=\"secondary\">\r\n      <ion-title>{{navigationTitle}}</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  <ion-content>\r\n    <ion-list>\r\n      <ion-item *ngFor=\"let item of items\" (click)=\"item.action()\" [button]=\"true\">\r\n        <ion-icon *ngIf=\"item.icon\" [name]=\"item.icon\" slot=\"start\"></ion-icon>\r\n        <ion-label>{{item.label}}</ion-label>\r\n      </ion-item>\r\n    </ion-list>\r\n  </ion-content>\r\n</ion-menu>";

/***/ }),

/***/ 2551:
/*!**********************************************************************************!*\
  !*** ./src/app/shared/components/navigation/tabs/tabs.component.html?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-tabs>\r\n  <ion-tab-bar slot=\"bottom\">\r\n    <ion-tab-button *ngFor=\"let item of tabs\" (click)=\"item.action()\">\r\n      <ion-icon [name]=\"item.icon\"></ion-icon>\r\n      <ion-label>{{item.label}}</ion-label>\r\n    </ion-tab-button>\r\n  </ion-tab-bar>\r\n</ion-tabs>";

/***/ }),

/***/ 6760:
/*!********************************************************************************************!*\
  !*** ./src/app/shared/components/page-container/content/content.component.html?ngResource ***!
  \********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\r\n    <ng-content></ng-content>\r\n</ion-content>";

/***/ }),

/***/ 4900:
/*!******************************************************************************************!*\
  !*** ./src/app/shared/components/page-container/header/header.component.html?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n      <a [routerLink]=\"['/']\" title=\"Logo\">\r\n        <img src=\"assets/logos/logo1.png\" />\r\n      </a>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      <ci-page-title>\r\n        <ng-content></ng-content>\r\n      </ci-page-title>\r\n    </ion-title>\r\n    <!-- <ion-buttons slot=\"end\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons> -->\r\n    <div slot=\"end\">\r\n      <ng-container *ngIf=\"!isLoggedIn\">\r\n        <ci-button [routerLink]=\"['/auth/login']\" [size]=\"sizes.small\" [shape]=\"shapes.round\">\r\n          <ion-icon slot=\"start\" [name]=\"icons.login\"></ion-icon>\r\n          Sign In\r\n        </ci-button>\r\n        <ci-button [routerLink]=\"['/auth/register']\" [size]=\"sizes.small\" color=\"tertiary\" [shape]=\"shapes.round\">\r\n          <ion-icon slot=\"start\" [name]=\"icons.register\"></ion-icon>\r\n          Sign Up\r\n        </ci-button>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"isLoggedIn\">\r\n        <ci-button [routerLink]=\"['/panel/dashboard']\" [size]=\"sizes.small\" color=\"dark\" [shape]=\"shapes.round\">\r\n          <ion-icon slot=\"start\" [name]=\"icons.dashboard\"></ion-icon>\r\n          Dashboard\r\n        </ci-button>\r\n        <ci-button [promise]=\"logoutPromise\" (click)=\"logout()\" [size]=\"sizes.small\" [shape]=\"shapes.round\">\r\n          <ion-icon slot=\"start\" [name]=\"icons.logout\"></ion-icon>\r\n          Sign Out\r\n        </ci-button>\r\n      </ng-container>\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-header>";

/***/ }),

/***/ 6816:
/*!*******************************************************************************************!*\
  !*** ./src/app/shared/components/page-container/page-container.component.html?ngResource ***!
  \*******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ci-header>\n    {{headerTitle}}\n</ci-header>\n<ci-content>\n    <ng-content></ng-content>\n</ci-content>\n";

/***/ }),

/***/ 2810:
/*!**********************************************************************************************!*\
  !*** ./src/app/shared/components/typography/page-title/page-title.component.html?ngResource ***!
  \**********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ng-content></ng-content>";

/***/ }),

/***/ 8046:
/*!******************************************************************************************!*\
  !*** ./src/app/shared/components/typography/subtitle/subtitle.component.html?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ng-content></ng-content>";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map