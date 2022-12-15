"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modules_auth_auth_module_ts"],{

/***/ 9988:
/*!*****************************************************!*\
  !*** ./src/app/modules/auth/auth-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthPageRoutingModule": () => (/* binding */ AuthPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login/login.component */ 2792);
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register/register.component */ 8542);





const routes = [
    {
        path: '',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent,
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent,
    },
    {
        path: 'register',
        component: _register_register_component__WEBPACK_IMPORTED_MODULE_1__.RegisterComponent,
    },
];
let AuthPageRoutingModule = class AuthPageRoutingModule {
};
AuthPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    })
], AuthPageRoutingModule);



/***/ }),

/***/ 3970:
/*!*********************************************!*\
  !*** ./src/app/modules/auth/auth.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthPageModule": () => (/* binding */ AuthPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth-routing.module */ 9988);
/* harmony import */ var _auth_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.page */ 3290);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 4466);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ 2792);
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register/register.component */ 8542);







let AuthPageModule = class AuthPageModule {
};
AuthPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _auth_routing_module__WEBPACK_IMPORTED_MODULE_0__.AuthPageRoutingModule],
        declarations: [_auth_page__WEBPACK_IMPORTED_MODULE_1__.AuthPage, _login_login_component__WEBPACK_IMPORTED_MODULE_3__.LoginComponent, _register_register_component__WEBPACK_IMPORTED_MODULE_4__.RegisterComponent],
    })
], AuthPageModule);



/***/ }),

/***/ 3290:
/*!*******************************************!*\
  !*** ./src/app/modules/auth/auth.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthPage": () => (/* binding */ AuthPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _auth_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.page.html?ngResource */ 5230);
/* harmony import */ var _auth_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.page.scss?ngResource */ 2625);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let AuthPage = class AuthPage {
    constructor() { }
    ngOnInit() {
    }
};
AuthPage.ctorParameters = () => [];
AuthPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-auth',
        template: _auth_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_auth_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AuthPage);



/***/ }),

/***/ 2792:
/*!*******************************************************!*\
  !*** ./src/app/modules/auth/login/login.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _login_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.component.html?ngResource */ 6558);
/* harmony import */ var _login_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.component.scss?ngResource */ 2583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_shared_services_page_container_page_container_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/page-container/page-container.service */ 7427);
/* harmony import */ var _shared_resources_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/resources/user/user.service */ 8635);








let LoginComponent = class LoginComponent {
    constructor(formBuilder, userService, pageContainerService, router) {
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.pageContainerService = pageContainerService;
        this.router = router;
    }
    ngOnInit() {
        this.pageContainerService.headerTitle = 'Sign In';
        this.createForm();
    }
    /**
     * Sign in request
     */
    signIn() {
        if (this.formGroup.valid) {
            this.promise = this.userService.login(this.formGroup.value).then((data) => {
                this.router.navigate(['/panel/dashboard']);
            }, () => { });
        }
    }
    /**
     * Create form
     */
    createForm() {
        this.formGroup = this.formBuilder.group({
            email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: _shared_resources_user_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService },
    { type: src_app_shared_services_page_container_page_container_service__WEBPACK_IMPORTED_MODULE_2__.PageContainerService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router }
];
LoginComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-login',
        template: _login_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_login_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginComponent);



/***/ }),

/***/ 8542:
/*!*************************************************************!*\
  !*** ./src/app/modules/auth/register/register.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterComponent": () => (/* binding */ RegisterComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _register_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.component.html?ngResource */ 7949);
/* harmony import */ var _register_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.component.scss?ngResource */ 2662);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/auth/auth.service */ 6256);
/* harmony import */ var src_app_shared_services_page_container_page_container_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/page-container/page-container.service */ 7427);
/* harmony import */ var _shared_resources_user_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/resources/user/user.service */ 8635);








let RegisterComponent = class RegisterComponent {
    constructor(formBuilder, authService, userService, pageContainerService) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.userService = userService;
        this.pageContainerService = pageContainerService;
    }
    ngOnInit() {
        this.pageContainerService.headerTitle = 'Sign Up';
        this.createForm();
    }
    /**
     * Sign in request
     */
    signUp() {
        if (this.formGroup.valid) {
            this.signUpButton = this.userService.create(this.formGroup.value)
                .then(() => { }, () => { });
        }
    }
    /**
     * Create form
     */
    createForm() {
        this.formGroup = this.formBuilder.group({
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.email]],
            name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(2)]],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(8)]],
            password_confirmation: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(8)]]
        });
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _shared_resources_user_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService },
    { type: src_app_shared_services_page_container_page_container_service__WEBPACK_IMPORTED_MODULE_3__.PageContainerService }
];
RegisterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-register',
        template: _register_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_register_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RegisterComponent);



/***/ }),

/***/ 2625:
/*!********************************************************!*\
  !*** ./src/app/modules/auth/auth.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdXRoLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 2583:
/*!********************************************************************!*\
  !*** ./src/app/modules/auth/login/login.component.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 2662:
/*!**************************************************************************!*\
  !*** ./src/app/modules/auth/register/register.component.scss?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3Rlci5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 5230:
/*!********************************************************!*\
  !*** ./src/app/modules/auth/auth.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ci-header>\r\n  <ion-toolbar>\r\n    <ion-title>Auth</ion-title>\r\n  </ion-toolbar>\r\n</ci-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n";

/***/ }),

/***/ 6558:
/*!********************************************************************!*\
  !*** ./src/app/modules/auth/login/login.component.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "<ci-page>\r\n    <ion-grid>\r\n        <ion-row>\r\n            <ion-col size=\"12\" size-md=\"4\" offset-md=\"4\">\r\n                <form [formGroup]=\"formGroup\">\r\n                    <ion-list>\r\n                        <ion-item>\r\n                            <ion-label position=\"stacked\">Enter email</ion-label>\r\n                            <ion-input placeholder=\"Enter email\" type=\"email\" formControlName=\"email\"></ion-input>\r\n                        </ion-item>\r\n                        <ion-item>\r\n                            <ion-label position=\"stacked\">Enter password</ion-label>\r\n                            <ion-input placeholder=\"Enter password\" type=\"password\" formControlName=\"password\"></ion-input>\r\n                        </ion-item>\r\n                    </ion-list>\r\n\r\n                    <div class=\"ion-text-center ion-margin-top\">\r\n                        <ci-button color=\"primary\" (click)=\"signIn()\" [promise]=\"promise\">\r\n                            Login\r\n                        </ci-button>\r\n                    </div>\r\n                </form>\r\n            </ion-col>\r\n        </ion-row>\r\n    </ion-grid>\r\n</ci-page>";

/***/ }),

/***/ 7949:
/*!**************************************************************************!*\
  !*** ./src/app/modules/auth/register/register.component.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "<ci-page>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size=\"12\" size-md=\"4\" offset-md=\"4\">\r\n        <form [formGroup]=\"formGroup\">\r\n          <ion-list>\r\n            <ion-item>\r\n              <ion-label position=\"stacked\">Enter email</ion-label>\r\n              <ion-input placeholder=\"Enter email\" type=\"email\" formControlName=\"email\"></ion-input>\r\n            </ion-item>\r\n  \r\n            <ion-item>\r\n              <ion-label position=\"stacked\">Name</ion-label>\r\n              <ion-input placeholder=\"Enter name\" type=\"test\" formControlName=\"name\"></ion-input>\r\n            </ion-item>\r\n  \r\n            <ion-item>\r\n              <ion-label position=\"stacked\">Password</ion-label>\r\n              <ion-input placeholder=\"Enter password\" type=\"password\" formControlName=\"password\"></ion-input>\r\n            </ion-item>\r\n  \r\n            <ion-item>\r\n              <ion-label position=\"stacked\">Confirm password</ion-label>\r\n              <ion-input placeholder=\"Confirm password\" type=\"password\" formControlName=\"password_confirmation\"></ion-input>\r\n            </ion-item>\r\n          </ion-list>\r\n\r\n          <div class=\"ion-text-center ion-margin-top\">\r\n            <ci-button color=\"primary\" (click)=\"signUp()\" [promise]=\"signUpButton\">\r\n              Sign Up\r\n            </ci-button>\r\n          </div>\r\n        </form>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ci-page>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_modules_auth_auth_module_ts.js.map