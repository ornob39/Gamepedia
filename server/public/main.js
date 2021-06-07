(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Acer\OneDrive\Documents\Selise Intern\gamestore\gamestore\src\main.ts */"zUnb");


/***/ }),

/***/ "1W4x":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "ccyI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "bTqV");












function RegisterComponent_mat_error_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Empty Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_mat_error_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Invalid Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class RegisterComponent {
    constructor(_auth, _router, _snackBar) {
        this._auth = _auth;
        this._router = _router;
        this._snackBar = _snackBar;
        this.registeredUserData = { email: '', password: '' };
    }
    ngOnInit() { }
    registerUser() {
        this._auth.registerUser(this.registeredUserData).subscribe((res) => {
            localStorage.setItem('token', res.token);
            this._snackBar.open('Signup Successful!', 'Clear', { duration: 3000 });
            this._router.navigate(['/home']);
        }, (err) => console.log(err));
    }
    onSubmit(form) { }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"])); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 33, vars: 6, consts: [["fxFlex", "", "fxLayout", "", "fxLayoutAlign", "center center"], ["fxFlex", "", "fxLayout", "row", "fxLayoutAlign", "center  center"], [1, "signup-form"], ["fxFlex", "", "fxLayout", "column", "fxLayoutAlign", "center  center"], ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "container", "signup-card"], ["appearance", "fill", "fxLayout", "column", "fxLayoutAlign", "center center", 1, "card-header"], [1, "col"], ["appearance", "outline", "fxLayout", "column", "fxLayoutAlign", "center center", "fxLayoutGap", "10px", 3, "ngSubmit"], ["f", "ngForm"], ["appearance", "outline"], ["name", "email", "matInput", "", "type", "email", "placeholder", "Your email", "ngModel", "", "email", "", "required", "", 3, "ngModel", "ngModelChange"], ["emailInput", "ngModel"], ["matSuffix", ""], [4, "ngIf"], ["appearance", "outline", "hintLabel", "Should be atleast 6 characters long"], ["name", "password", "matInput", "", "type", "password", "placeholder", "Your password", "ngModel", "", "required", "", "minLength", "6", 3, "ngModel", "ngModelChange"], ["pwInput", "ngModel"], ["align", "end"], ["type", "submit", "id", "submit", "mat-raised-button", "", 1, "submit-btn", 2, "margin-top", "20px", 3, "disabled", "click"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-header", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Please register using valid email and password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10); return ctx.onSubmit(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Enter Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_14_listener($event) { return ctx.registeredUserData.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, RegisterComponent_mat_error_18_Template, 2, 0, "mat-error", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, RegisterComponent_mat_error_19_Template, 2, 0, "mat-error", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-form-field", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Enter Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_23_listener($event) { return ctx.registeredUserData.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-hint", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Small Password!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_31_listener() { return ctx.registerUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Signup ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.registeredUserData.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_r1.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.registeredUserData.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _r4.value == null ? null : _r4.value.length, " / 6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r0.invalid);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutAlignDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutGapDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["EmailValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatSuffix"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatHint"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatError"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"]], styles: ["p[_ngcontent-%COMP%] {\n  text-align: center !important;\n}\n@media only screen and (max-width: 599px) {\n  mat-card[_ngcontent-%COMP%] {\n    background-color: white !important;\n    color: black !important;\n    width: 250px !important;\n    height: 400px;\n  }\n  mat-card[_ngcontent-%COMP%]:hover {\n    font-weight: 500;\n    box-shadow: 4px 3px 11px 6px #8ea8ac;\n    transform: translateY(-3px);\n    -webkit-transform: translateY(-3px);\n    -moz-transform: translateY(-3px);\n    -ms-transform: translateY(-3px);\n    -o-transform: translateY(-3px);\n  }\n\n  mat-form[_ngcontent-%COMP%] {\n    margin-bottom: 2em;\n  }\n\n  .signup-form[_ngcontent-%COMP%] {\n    margin-top: 3%;\n  }\n\n  .submit-btn[_ngcontent-%COMP%] {\n    margin-top: 3%;\n    color: white !important;\n    background-color: #6d4edf !important;\n  }\n  .submit-btn[_ngcontent-%COMP%]:hover {\n    font-weight: 500;\n    box-shadow: 2px 1px 8px 3px #2e46d1;\n    transform: translateY(-3px);\n    -webkit-transform: translateY(-3px);\n    -moz-transform: translateY(-3px);\n    -ms-transform: translateY(-3px);\n    -o-transform: translateY(-3px);\n  }\n\n  .card-header[_ngcontent-%COMP%] {\n    margin-top: 8% !important;\n    margin: auto;\n    border-top-left-radius: 5px;\n    border-bottom-left-radius: 5px;\n    border-top-right-radius: 5px;\n    border-bottom-right-radius: 5px;\n    text-align: center;\n    color: white;\n    font-weight: 400;\n    background-color: #6d4edf;\n  }\n  .card-header[_ngcontent-%COMP%]:hover {\n    font-weight: 500;\n    box-shadow: 2px 1px 8px 3px #3e45a1;\n    transform: translateY(-3px);\n    -webkit-transform: translateY(-3px);\n    -moz-transform: translateY(-3px);\n    -ms-transform: translateY(-3px);\n    -o-transform: translateY(-3px);\n  }\n}\n\n@media only screen and (min-width: 600px) and (max-width: 959px) {\n  mat-card[_ngcontent-%COMP%] {\n    background-color: white !important;\n    color: black !important;\n    width: 400px !important;\n    height: 400px;\n  }\n  mat-card[_ngcontent-%COMP%]:hover {\n    font-weight: 500;\n    box-shadow: 4px 3px 11px 6px #8ea8ac;\n    transform: translateY(-3px);\n    -webkit-transform: translateY(-3px);\n    -moz-transform: translateY(-3px);\n    -ms-transform: translateY(-3px);\n    -o-transform: translateY(-3px);\n  }\n\n  mat-form[_ngcontent-%COMP%] {\n    margin-bottom: 2em;\n  }\n\n  .signup-form[_ngcontent-%COMP%] {\n    margin-top: 3%;\n  }\n\n  .submit-btn[_ngcontent-%COMP%] {\n    margin-top: 3%;\n    color: white !important;\n    background-color: #6d4edf !important;\n  }\n  .submit-btn[_ngcontent-%COMP%]:hover {\n    font-weight: 500;\n    box-shadow: 2px 1px 8px 3px #2e46d1;\n    transform: translateY(-3px);\n    -webkit-transform: translateY(-3px);\n    -moz-transform: translateY(-3px);\n    -ms-transform: translateY(-3px);\n    -o-transform: translateY(-3px);\n  }\n\n  .card-header[_ngcontent-%COMP%] {\n    margin-top: 8% !important;\n    margin: auto;\n    border-top-left-radius: 5px;\n    border-bottom-left-radius: 5px;\n    border-top-right-radius: 5px;\n    border-bottom-right-radius: 5px;\n    text-align: center;\n    color: white;\n    font-weight: 400;\n    background-color: #6d4edf;\n  }\n  .card-header[_ngcontent-%COMP%]:hover {\n    font-weight: 500;\n    box-shadow: 2px 1px 8px 3px #3e45a1;\n    transform: translateY(-3px);\n    -webkit-transform: translateY(-3px);\n    -moz-transform: translateY(-3px);\n    -ms-transform: translateY(-3px);\n    -o-transform: translateY(-3px);\n  }\n}\n\n@media only screen and (min-width: 960px) and (max-width: 1279px) {\n  mat-card[_ngcontent-%COMP%] {\n    background-color: white !important;\n    color: black !important;\n    height: 400px;\n  }\n  mat-card[_ngcontent-%COMP%]:hover {\n    font-weight: 500;\n    box-shadow: 4px 3px 11px 6px #8ea8ac;\n    transform: translateY(-3px);\n    -webkit-transform: translateY(-3px);\n    -moz-transform: translateY(-3px);\n    -ms-transform: translateY(-3px);\n    -o-transform: translateY(-3px);\n  }\n\n  mat-form[_ngcontent-%COMP%] {\n    margin-bottom: 2em;\n  }\n\n  .signup-form[_ngcontent-%COMP%] {\n    margin-top: 3%;\n  }\n\n  .submit-btn[_ngcontent-%COMP%] {\n    margin-top: 3%;\n    color: white !important;\n    background-color: #6d4edf !important;\n  }\n  .submit-btn[_ngcontent-%COMP%]:hover {\n    font-weight: 500;\n    box-shadow: 2px 1px 8px 3px #2e46d1;\n    transform: translateY(-3px);\n    -webkit-transform: translateY(-3px);\n    -moz-transform: translateY(-3px);\n    -ms-transform: translateY(-3px);\n    -o-transform: translateY(-3px);\n  }\n\n  .card-header[_ngcontent-%COMP%] {\n    margin-top: 8% !important;\n    margin: auto;\n    border-top-left-radius: 5px;\n    border-bottom-left-radius: 5px;\n    border-top-right-radius: 5px;\n    border-bottom-right-radius: 5px;\n    text-align: center;\n    color: white;\n    font-weight: 400;\n    background-color: #6d4edf;\n  }\n  .card-header[_ngcontent-%COMP%]:hover {\n    font-weight: 500;\n    box-shadow: 2px 1px 8px 3px #3e45a1;\n    transform: translateY(-3px);\n    -webkit-transform: translateY(-3px);\n    -moz-transform: translateY(-3px);\n    -ms-transform: translateY(-3px);\n    -o-transform: translateY(-3px);\n  }\n}\n\n@media only screen and (min-width: 1280px) and (max-width: 1919px) {\n  mat-card[_ngcontent-%COMP%] {\n    background-color: white !important;\n    color: black !important;\n  }\n  mat-card[_ngcontent-%COMP%]:hover {\n    font-weight: 500;\n    box-shadow: 4px 3px 11px 6px #8ea8ac;\n    transform: translateY(-3px);\n    -webkit-transform: translateY(-3px);\n    -moz-transform: translateY(-3px);\n    -ms-transform: translateY(-3px);\n    -o-transform: translateY(-3px);\n  }\n\n  mat-form[_ngcontent-%COMP%] {\n    margin-bottom: 2em;\n  }\n\n  .signup-form[_ngcontent-%COMP%] {\n    margin-top: 3%;\n  }\n\n  .submit-btn[_ngcontent-%COMP%] {\n    margin-top: 3%;\n    color: white !important;\n    background-color: #6d4edf !important;\n  }\n  .submit-btn[_ngcontent-%COMP%]:hover {\n    font-weight: 500;\n    box-shadow: 2px 1px 8px 3px #2e46d1;\n    transform: translateY(-3px);\n    -webkit-transform: translateY(-3px);\n    -moz-transform: translateY(-3px);\n    -ms-transform: translateY(-3px);\n    -o-transform: translateY(-3px);\n  }\n\n  .card-header[_ngcontent-%COMP%] {\n    margin-top: 8% !important;\n    margin: auto;\n    border-top-left-radius: 5px;\n    border-bottom-left-radius: 5px;\n    border-top-right-radius: 5px;\n    border-bottom-right-radius: 5px;\n    text-align: center;\n    color: white;\n    font-weight: 400;\n    background-color: #6d4edf;\n  }\n  .card-header[_ngcontent-%COMP%]:hover {\n    font-weight: 500;\n    box-shadow: 2px 1px 8px 3px #3e45a1;\n    transform: translateY(-3px);\n    -webkit-transform: translateY(-3px);\n    -moz-transform: translateY(-3px);\n    -ms-transform: translateY(-3px);\n    -o-transform: translateY(-3px);\n  }\n}\n\n@media only screen and (min-width: 1920px) and (max-width: 5000px) {\n  mat-card[_ngcontent-%COMP%] {\n    background-color: white !important;\n    color: black !important;\n    border-top-right-radius: 10px;\n    border-top-left-radius: 10px;\n    border-bottom-right-radius: 10px;\n    border-bottom-left-radius: 10px;\n  }\n  mat-card[_ngcontent-%COMP%]:hover {\n    font-weight: 500;\n    box-shadow: 4px 3px 11px 6px #8ea8ac;\n    transform: translateY(-3px);\n    -webkit-transform: translateY(-3px);\n    -moz-transform: translateY(-3px);\n    -ms-transform: translateY(-3px);\n    -o-transform: translateY(-3px);\n  }\n\n  mat-form[_ngcontent-%COMP%] {\n    margin-bottom: 2em;\n  }\n\n  .signup-form[_ngcontent-%COMP%] {\n    margin-top: 3%;\n  }\n\n  .submit-btn[_ngcontent-%COMP%] {\n    margin-top: 3%;\n    color: white !important;\n    background-color: #6d4edf !important;\n  }\n  .submit-btn[_ngcontent-%COMP%]:hover {\n    font-weight: 500;\n    box-shadow: 2px 1px 8px 3px #2e46d1;\n    transform: translateY(-3px);\n    -webkit-transform: translateY(-3px);\n    -moz-transform: translateY(-3px);\n    -ms-transform: translateY(-3px);\n    -o-transform: translateY(-3px);\n  }\n\n  .card-header[_ngcontent-%COMP%] {\n    margin-top: 8% !important;\n    margin: auto;\n    border-top-left-radius: 5px;\n    border-bottom-left-radius: 5px;\n    border-top-right-radius: 5px;\n    border-bottom-right-radius: 5px;\n    text-align: center;\n    color: white;\n    font-weight: 400;\n    background-color: #6d4edf;\n  }\n  .card-header[_ngcontent-%COMP%]:hover {\n    font-weight: 500;\n    box-shadow: 2px 1px 8px 3px #3e45a1;\n    transform: translateY(-3px);\n    -webkit-transform: translateY(-3px);\n    -moz-transform: translateY(-3px);\n    -ms-transform: translateY(-3px);\n    -o-transform: translateY(-3px);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHJlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHdCQUFBO0FBRUE7RUFDSSw2QkFBQTtBQUFKO0FBR0E7RUFDSTtJQUNJLGtDQUFBO0lBQ0EsdUJBQUE7SUFDQSx1QkFBQTtJQUNBLGFBQUE7RUFBTjtFQUNNO0lBQ0ksZ0JBQUE7SUFDQSxvQ0FBQTtJQUNBLDJCQUFBO0lBQ0EsbUNBQUE7SUFDQSxnQ0FBQTtJQUNBLCtCQUFBO0lBQ0EsOEJBQUE7RUFDVjs7RUFFRTtJQUVJLGtCQUFBO0VBQU47O0VBUUU7SUFDSSxjQUFBO0VBTE47O0VBVUU7SUFDSSxjQUFBO0lBQ0EsdUJBQUE7SUFDQSxvQ0FBQTtFQVBOO0VBUU07SUFDSSxnQkFBQTtJQUNBLG1DQUFBO0lBQ0EsMkJBQUE7SUFDQSxtQ0FBQTtJQUNBLGdDQUFBO0lBQ0EsK0JBQUE7SUFDQSw4QkFBQTtFQU5WOztFQVNFO0lBQ0kseUJBQUE7SUFDQSxZQUFBO0lBQ0EsMkJBQUE7SUFDQSw4QkFBQTtJQUNBLDRCQUFBO0lBQ0EsK0JBQUE7SUFDQSxrQkFBQTtJQUNBLFlBQUE7SUFDQSxnQkFBQTtJQUNBLHlCQUFBO0VBTk47RUFPTTtJQUNJLGdCQUFBO0lBQ0EsbUNBQUE7SUFDQSwyQkFBQTtJQUNBLG1DQUFBO0lBQ0EsZ0NBQUE7SUFDQSwrQkFBQTtJQUNBLDhCQUFBO0VBTFY7QUFDRjtBQVVBLG1CQUFBO0FBRUE7RUFDSTtJQUNJLGtDQUFBO0lBQ0EsdUJBQUE7SUFDQSx1QkFBQTtJQUNBLGFBQUE7RUFUTjtFQVVNO0lBQ0ksZ0JBQUE7SUFDQSxvQ0FBQTtJQUNBLDJCQUFBO0lBQ0EsbUNBQUE7SUFDQSxnQ0FBQTtJQUNBLCtCQUFBO0lBQ0EsOEJBQUE7RUFSVjs7RUFjRTtJQUVJLGtCQUFBO0VBWk47O0VBaUJFO0lBQ0ksY0FBQTtFQWROOztFQW1CRTtJQUNJLGNBQUE7SUFDQSx1QkFBQTtJQUNBLG9DQUFBO0VBaEJOO0VBaUJNO0lBQ0ksZ0JBQUE7SUFDQSxtQ0FBQTtJQUNBLDJCQUFBO0lBQ0EsbUNBQUE7SUFDQSxnQ0FBQTtJQUNBLCtCQUFBO0lBQ0EsOEJBQUE7RUFmVjs7RUFrQkU7SUFDSSx5QkFBQTtJQUNBLFlBQUE7SUFDQSwyQkFBQTtJQUNBLDhCQUFBO0lBQ0EsNEJBQUE7SUFDQSwrQkFBQTtJQUNBLGtCQUFBO0lBQ0EsWUFBQTtJQUNBLGdCQUFBO0lBQ0EseUJBQUE7RUFmTjtFQWdCTTtJQUNJLGdCQUFBO0lBQ0EsbUNBQUE7SUFDQSwyQkFBQTtJQUNBLG1DQUFBO0lBQ0EsZ0NBQUE7SUFDQSwrQkFBQTtJQUNBLDhCQUFBO0VBZFY7QUFDRjtBQW1CQSxvQkFBQTtBQUVBO0VBQ0k7SUFDSSxrQ0FBQTtJQUNBLHVCQUFBO0lBRUEsYUFBQTtFQW5CTjtFQW9CTTtJQUNJLGdCQUFBO0lBQ0Esb0NBQUE7SUFDQSwyQkFBQTtJQUNBLG1DQUFBO0lBQ0EsZ0NBQUE7SUFDQSwrQkFBQTtJQUNBLDhCQUFBO0VBbEJWOztFQXdCRTtJQUVJLGtCQUFBO0VBdEJOOztFQTJCRTtJQUNJLGNBQUE7RUF4Qk47O0VBNkJFO0lBQ0ksY0FBQTtJQUNBLHVCQUFBO0lBQ0Esb0NBQUE7RUExQk47RUEyQk07SUFDSSxnQkFBQTtJQUNBLG1DQUFBO0lBQ0EsMkJBQUE7SUFDQSxtQ0FBQTtJQUNBLGdDQUFBO0lBQ0EsK0JBQUE7SUFDQSw4QkFBQTtFQXpCVjs7RUE0QkU7SUFDSSx5QkFBQTtJQUNBLFlBQUE7SUFDQSwyQkFBQTtJQUNBLDhCQUFBO0lBQ0EsNEJBQUE7SUFDQSwrQkFBQTtJQUNBLGtCQUFBO0lBQ0EsWUFBQTtJQUNBLGdCQUFBO0lBQ0EseUJBQUE7RUF6Qk47RUEwQk07SUFDSSxnQkFBQTtJQUNBLG1DQUFBO0lBQ0EsMkJBQUE7SUFDQSxtQ0FBQTtJQUNBLGdDQUFBO0lBQ0EsK0JBQUE7SUFDQSw4QkFBQTtFQXhCVjtBQUNGO0FBNkJBLG1CQUFBO0FBRUE7RUFDSTtJQUNJLGtDQUFBO0lBQ0EsdUJBQUE7RUE1Qk47RUErQk07SUFDSSxnQkFBQTtJQUNBLG9DQUFBO0lBQ0EsMkJBQUE7SUFDQSxtQ0FBQTtJQUNBLGdDQUFBO0lBQ0EsK0JBQUE7SUFDQSw4QkFBQTtFQTdCVjs7RUFtQ0U7SUFFSSxrQkFBQTtFQWpDTjs7RUFzQ0U7SUFDSSxjQUFBO0VBbkNOOztFQXdDRTtJQUNJLGNBQUE7SUFDQSx1QkFBQTtJQUNBLG9DQUFBO0VBckNOO0VBc0NNO0lBQ0ksZ0JBQUE7SUFDQSxtQ0FBQTtJQUNBLDJCQUFBO0lBQ0EsbUNBQUE7SUFDQSxnQ0FBQTtJQUNBLCtCQUFBO0lBQ0EsOEJBQUE7RUFwQ1Y7O0VBdUNFO0lBQ0kseUJBQUE7SUFDQSxZQUFBO0lBQ0EsMkJBQUE7SUFDQSw4QkFBQTtJQUNBLDRCQUFBO0lBQ0EsK0JBQUE7SUFDQSxrQkFBQTtJQUNBLFlBQUE7SUFDQSxnQkFBQTtJQUNBLHlCQUFBO0VBcENOO0VBcUNNO0lBQ0ksZ0JBQUE7SUFDQSxtQ0FBQTtJQUNBLDJCQUFBO0lBQ0EsbUNBQUE7SUFDQSxnQ0FBQTtJQUNBLCtCQUFBO0lBQ0EsOEJBQUE7RUFuQ1Y7QUFDRjtBQXdDQSx3QkFBQTtBQUVBO0VBQ0k7SUFDSSxrQ0FBQTtJQUNBLHVCQUFBO0lBR0EsNkJBQUE7SUFDQSw0QkFBQTtJQUNBLGdDQUFBO0lBQ0EsK0JBQUE7RUF6Q047RUEwQ007SUFDSSxnQkFBQTtJQUNBLG9DQUFBO0lBQ0EsMkJBQUE7SUFDQSxtQ0FBQTtJQUNBLGdDQUFBO0lBQ0EsK0JBQUE7SUFDQSw4QkFBQTtFQXhDVjs7RUE4Q0U7SUFFSSxrQkFBQTtFQTVDTjs7RUFpREU7SUFDSSxjQUFBO0VBOUNOOztFQW1ERTtJQUNJLGNBQUE7SUFDQSx1QkFBQTtJQUNBLG9DQUFBO0VBaEROO0VBaURNO0lBQ0ksZ0JBQUE7SUFDQSxtQ0FBQTtJQUNBLDJCQUFBO0lBQ0EsbUNBQUE7SUFDQSxnQ0FBQTtJQUNBLCtCQUFBO0lBQ0EsOEJBQUE7RUEvQ1Y7O0VBa0RFO0lBQ0kseUJBQUE7SUFDQSxZQUFBO0lBQ0EsMkJBQUE7SUFDQSw4QkFBQTtJQUNBLDRCQUFBO0lBQ0EsK0JBQUE7SUFDQSxrQkFBQTtJQUNBLFlBQUE7SUFDQSxnQkFBQTtJQUNBLHlCQUFBO0VBL0NOO0VBZ0RNO0lBQ0ksZ0JBQUE7SUFDQSxtQ0FBQTtJQUNBLDJCQUFBO0lBQ0EsbUNBQUE7SUFDQSxnQ0FBQTtJQUNBLCtCQUFBO0lBQ0EsOEJBQUE7RUE5Q1Y7QUFDRiIsImZpbGUiOiJyZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEV4dHJhIHNtYWxsIGRldmljZXMgKi9cclxuXHJcbnAge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTk5cHgpIHtcclxuICAgIG1hdC1jYXJkIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSkgIWltcG9ydGFudDtcclxuICAgICAgICBjb2xvcjogcmdiKDAsIDAsIDApICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgd2lkdGg6IDI1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgaGVpZ2h0OiA0MDBweDtcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogNHB4IDNweCAxMXB4IDZweCByZ2IoMTQyLCAxNjgsIDE3Mik7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcclxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XHJcbiAgICAgICAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xyXG4gICAgICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xyXG4gICAgICAgICAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbWF0LWZvcm0ge1xyXG4gICAgICAgIC8vIHdpZHRoOiA2MDBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyZW07XHJcbiAgICB9XHJcbiAgICBtYXQtZm9ybS1maWVsZCB7XHJcbiAgICAgICAgLy8gd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICBtYXQtY2hlY2tib3gge1xyXG4gICAgICAgIC8vIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLnNpZ251cC1mb3JtIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAzJTtcclxuICAgIH1cclxuICAgIC5zaWdudXAtY2FyZCB7XHJcbiAgICAgICAgLy8gd2lkdGg6IDUwJTtcclxuICAgIH1cclxuICAgIC5zdWJtaXQtYnRuIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAzJTtcclxuICAgICAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwOSwgNzgsIDIyMykgIWltcG9ydGFudDtcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMnB4IDFweCA4cHggM3B4IHJnYig0NiwgNzAsIDIwOSk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcclxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XHJcbiAgICAgICAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xyXG4gICAgICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xyXG4gICAgICAgICAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmNhcmQtaGVhZGVyIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA4JSAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xyXG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDksIDc4LCAyMjMpO1xyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAycHggMXB4IDhweCAzcHggcmdiKDYyLCA2OSwgMTYxKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xyXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcclxuICAgICAgICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XHJcbiAgICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XHJcbiAgICAgICAgICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vKiBTbWFsbCBkZXZpY2VzICAqL1xyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDk1OXB4KSB7XHJcbiAgICBtYXQtY2FyZCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgY29sb3I6IHJnYigwLCAwLCAwKSAhaW1wb3J0YW50O1xyXG4gICAgICAgIHdpZHRoOiA0MDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDRweCAzcHggMTFweCA2cHggcmdiKDE0MiwgMTY4LCAxNzIpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XHJcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xyXG4gICAgICAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcclxuICAgICAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcclxuICAgICAgICAgICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG1hdC1mb3JtLWZpZWxkIHtcclxuICAgICAgICAvLyB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIG1hdC1mb3JtIHtcclxuICAgICAgICAvLyB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyZW07XHJcbiAgICB9XHJcbiAgICAvLyBtYXQtY2hlY2tib3gge1xyXG4gICAgLy8gICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLy8gfVxyXG4gICAgLnNpZ251cC1mb3JtIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAzJTtcclxuICAgIH1cclxuICAgIC5zaWdudXAtY2FyZCB7XHJcbiAgICAgICAgLy8gd2lkdGg6IDUwJTtcclxuICAgIH1cclxuICAgIC5zdWJtaXQtYnRuIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAzJTtcclxuICAgICAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwOSwgNzgsIDIyMykgIWltcG9ydGFudDtcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMnB4IDFweCA4cHggM3B4IHJnYig0NiwgNzAsIDIwOSk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcclxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XHJcbiAgICAgICAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xyXG4gICAgICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xyXG4gICAgICAgICAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmNhcmQtaGVhZGVyIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA4JSAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xyXG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDksIDc4LCAyMjMpO1xyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAycHggMXB4IDhweCAzcHggcmdiKDYyLCA2OSwgMTYxKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xyXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcclxuICAgICAgICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XHJcbiAgICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XHJcbiAgICAgICAgICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vKiBNZWRpdW0gZGV2aWNlcyAgKi9cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTYwcHgpIGFuZCAobWF4LXdpZHRoOiAxMjc5cHgpIHtcclxuICAgIG1hdC1jYXJkIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSkgIWltcG9ydGFudDtcclxuICAgICAgICBjb2xvcjogcmdiKDAsIDAsIDApICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLy8gd2lkdGg6IDYwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgaGVpZ2h0OiA0MDBweDtcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogNHB4IDNweCAxMXB4IDZweCByZ2IoMTQyLCAxNjgsIDE3Mik7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcclxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XHJcbiAgICAgICAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xyXG4gICAgICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xyXG4gICAgICAgICAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gbWF0LWZvcm0tZmllbGQge1xyXG4gICAgLy8gICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLy8gfVxyXG4gICAgbWF0LWZvcm0ge1xyXG4gICAgICAgIC8vIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJlbTtcclxuICAgIH1cclxuICAgIC8vIG1hdC1jaGVja2JveCB7XHJcbiAgICAvLyAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAvLyB9XHJcbiAgICAuc2lnbnVwLWZvcm0ge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDMlO1xyXG4gICAgfVxyXG4gICAgLy8gLnNpZ251cC1jYXJkIHtcclxuICAgIC8vICAgICB3aWR0aDogNTAlO1xyXG4gICAgLy8gfVxyXG4gICAgLnN1Ym1pdC1idG4ge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDMlO1xyXG4gICAgICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSkgIWltcG9ydGFudDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTA5LCA3OCwgMjIzKSAhaW1wb3J0YW50O1xyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAycHggMXB4IDhweCAzcHggcmdiKDQ2LCA3MCwgMjA5KTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xyXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcclxuICAgICAgICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XHJcbiAgICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XHJcbiAgICAgICAgICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuY2FyZC1oZWFkZXIge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDglICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcclxuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcclxuICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwOSwgNzgsIDIyMyk7XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDJweCAxcHggOHB4IDNweCByZ2IoNjIsIDY5LCAxNjEpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XHJcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xyXG4gICAgICAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcclxuICAgICAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcclxuICAgICAgICAgICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcbi8qIExhcmdlIGRldmljZXMgICovXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyODBweCkgYW5kIChtYXgtd2lkdGg6IDE5MTlweCkge1xyXG4gICAgbWF0LWNhcmQge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGNvbG9yOiByZ2IoMCwgMCwgMCkgIWltcG9ydGFudDtcclxuICAgICAgICAvLyB3aWR0aDogODAwcHggIWltcG9ydGFudDtcclxuICAgICAgICAvLyBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiA0cHggM3B4IDExcHggNnB4IHJnYigxNDIsIDE2OCwgMTcyKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xyXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcclxuICAgICAgICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XHJcbiAgICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XHJcbiAgICAgICAgICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBtYXQtZm9ybS1maWVsZCB7XHJcbiAgICAvLyAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAvLyB9XHJcbiAgICBtYXQtZm9ybSB7XHJcbiAgICAgICAgLy8gd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMmVtO1xyXG4gICAgfVxyXG4gICAgLy8gbWF0LWNoZWNrYm94IHtcclxuICAgIC8vICAgICB3aWR0aDogMTAwJTtcclxuICAgIC8vIH1cclxuICAgIC5zaWdudXAtZm9ybSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMyU7XHJcbiAgICB9XHJcbiAgICAvLyAuc2lnbnVwLWNhcmQge1xyXG4gICAgLy8gICAgIHdpZHRoOiA1MCU7XHJcbiAgICAvLyB9XHJcbiAgICAuc3VibWl0LWJ0biB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMyU7XHJcbiAgICAgICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDksIDc4LCAyMjMpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDJweCAxcHggOHB4IDNweCByZ2IoNDYsIDcwLCAyMDkpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XHJcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xyXG4gICAgICAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcclxuICAgICAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcclxuICAgICAgICAgICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5jYXJkLWhlYWRlciB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogOCUgIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcclxuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTA5LCA3OCwgMjIzKTtcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMnB4IDFweCA4cHggM3B4IHJnYig2MiwgNjksIDE2MSk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcclxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XHJcbiAgICAgICAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xyXG4gICAgICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xyXG4gICAgICAgICAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLyogRXh0cmEgbGFyZ2UgZGV2aWNlcyAqL1xyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxOTIwcHgpIGFuZCAobWF4LXdpZHRoOiA1MDAwcHgpIHtcclxuICAgIG1hdC1jYXJkIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSkgIWltcG9ydGFudDtcclxuICAgICAgICBjb2xvcjogcmdiKDAsIDAsIDApICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLy8gd2lkdGg6IDQwJTtcclxuICAgICAgICAvLyBoZWlnaHQ6IDQwdmg7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcclxuICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcclxuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiA0cHggM3B4IDExcHggNnB4IHJnYigxNDIsIDE2OCwgMTcyKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xyXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcclxuICAgICAgICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XHJcbiAgICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XHJcbiAgICAgICAgICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBtYXQtZm9ybS1maWVsZCB7XHJcbiAgICAvLyAgICAgd2lkdGg6IDQwdnc7XHJcbiAgICAvLyB9XHJcbiAgICBtYXQtZm9ybSB7XHJcbiAgICAgICAgLy8gd2lkdGg6IDUwJTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyZW07XHJcbiAgICB9XHJcbiAgICAvLyBtYXQtY2hlY2tib3gge1xyXG4gICAgLy8gICAgIHdpZHRoOiA4MCU7XHJcbiAgICAvLyB9XHJcbiAgICAuc2lnbnVwLWZvcm0ge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDMlO1xyXG4gICAgfVxyXG4gICAgLnNpZ251cC1jYXJkIHtcclxuICAgICAgICAvLyB3aWR0aDogNTAlO1xyXG4gICAgfVxyXG4gICAgLnN1Ym1pdC1idG4ge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDMlO1xyXG4gICAgICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSkgIWltcG9ydGFudDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTA5LCA3OCwgMjIzKSAhaW1wb3J0YW50O1xyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAycHggMXB4IDhweCAzcHggcmdiKDQ2LCA3MCwgMjA5KTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xyXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcclxuICAgICAgICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XHJcbiAgICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XHJcbiAgICAgICAgICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuY2FyZC1oZWFkZXIge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDglICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcclxuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcclxuICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwOSwgNzgsIDIyMyk7XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDJweCAxcHggOHB4IDNweCByZ2IoNjIsIDY5LCAxNjEpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XHJcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xyXG4gICAgICAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcclxuICAgICAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcclxuICAgICAgICAgICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"] });


/***/ }),

/***/ "8Qyz":
/*!**********************************************************!*\
  !*** ./src/app/interceptors/http-headers.interceptor.ts ***!
  \**********************************************************/
/*! exports provided: HttpHeadersInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpHeadersInterceptor", function() { return HttpHeadersInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class HttpHeadersInterceptor {
    constructor() { }
    intercept(req, next) {
        req = req.clone({
            setHeaders: {
                'x-rapidapi-key': 'e44f5d0df9msh4ef76cb13184d25p1c82d4jsn372f021cfb11',
                'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
            },
            setParams: {
                key: 'abe42c87cd464991914fa12b2482a324',
            },
        });
        return next.handle(req);
    }
}
HttpHeadersInterceptor.ɵfac = function HttpHeadersInterceptor_Factory(t) { return new (t || HttpHeadersInterceptor)(); };
HttpHeadersInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HttpHeadersInterceptor, factory: HttpHeadersInterceptor.ɵfac });


/***/ }),

/***/ "9vt0":
/*!**********************************************!*\
  !*** ./src/app/token-interceptor.service.ts ***!
  \**********************************************/
/*! exports provided: TokenInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptorService", function() { return TokenInterceptorService; });
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ "ccyI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class TokenInterceptorService {
    constructor(injector) {
        this.injector = injector;
    }
    intercept(req, next) {
        let authService = this.injector.get(_auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"]);
        let tokenizedReq = req.clone({
            setHeaders: {
                Authorization: `Bearer ${authService.getToken()}`,
            },
        });
        return next.handle(tokenizedReq);
    }
}
TokenInterceptorService.ɵfac = function TokenInterceptorService_Factory(t) { return new (t || TokenInterceptorService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"])); };
TokenInterceptorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: TokenInterceptorService, factory: TokenInterceptorService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "AytR":
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
    production: false,
    BASE_URL: 'https://rawg-video-games-database.p.rapidapi.com',
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

/***/ "BuFo":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/http.service */ "N+K7");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");










function HomeComponent_ng_container_20_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 21);
} if (rf & 2) {
    const game_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", game_r1.background_image, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function HomeComponent_ng_container_20_p_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "No image");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function HomeComponent_ng_container_20_img_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 22);
} if (rf & 2) {
    const gamePlatform_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("src", "assets/images/platforms/", gamePlatform_r6.platform.slug, ".svg", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("alt", gamePlatform_r6.platform.slug);
} }
function HomeComponent_ng_container_20_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomeComponent_ng_container_20_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const game_r1 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r7.openGameDetails(game_r1.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, HomeComponent_ng_container_20_img_3_Template, 1, 1, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, HomeComponent_ng_container_20_p_4_Template, 2, 0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, HomeComponent_ng_container_20_img_9_Template, 1, 2, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const game_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", game_r1.background_image);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !game_r1.background_image);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](game_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", game_r1.parent_platforms);
} }
class HomeComponent {
    constructor(httpService, router, activatedRoute) {
        this.httpService = httpService;
        this.router = router;
        this.activatedRoute = activatedRoute;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.routeSub = this.activatedRoute.params.subscribe((params) => {
                if (params['game-search']) {
                    this.searchGames('metacrit', params['game-search']);
                }
                else {
                    this.searchGames('metacrit');
                }
            });
        });
    }
    searchGames(sort, search) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.gameSub = (yield this.httpService.getGameList(sort, search)).subscribe((gameList) => {
                this.games = gameList.results;
            }, (err) => {
                if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"]) {
                    if (err.status === 401) {
                        this.router.navigate(['/login']);
                    }
                }
            });
        });
    }
    openGameDetails(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.router.navigate(['details', id]);
        });
    }
    ngOnDestroy() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.gameSub) {
                this.gameSub.unsubscribe();
            }
            if (this.routeSub) {
                this.routeSub.unsubscribe();
            }
        });
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 21, vars: 2, consts: [[1, "selector-form", 2, "height", "50px"], [1, "selector-label"], ["panelClass", "sort-select", 1, "select-panel", 3, "ngModel", "ngModelChange", "selectionChange"], ["value", "name", 1, "matoption"], ["value", "-released", 1, "matoption"], ["value", "-added", 1, "matoption"], ["value", "-created", 1, "matoption"], ["value", "-updated", 1, "matoption"], ["value", "-rating", 1, "matoption"], ["value", "metacritic", 1, "matoption"], [1, "container-fluid"], [1, "games"], [4, "ngFor", "ngForOf"], [1, "game", 3, "click"], [1, "game-thumb-container"], ["alt", "thumbnail", "class", "game-thumbnail", 3, "src", 4, "ngIf"], [4, "ngIf"], [1, "game-description"], [1, "game-name"], [1, "game-platforms"], ["class", "game-platform", 3, "src", "alt", 4, "ngFor", "ngForOf"], ["alt", "thumbnail", 1, "game-thumbnail", 3, "src"], [1, "game-platform", 3, "src", "alt"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-form-field", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Sort Games by");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function HomeComponent_Template_mat_select_ngModelChange_3_listener($event) { return ctx.sort = $event; })("selectionChange", function HomeComponent_Template_mat_select_selectionChange_3_listener() { return ctx.searchGames(ctx.sort); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Released");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Added");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Created");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Updated");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "mat-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Rating");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Metacritic");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, HomeComponent_ng_container_20_Template, 10, 4, "ng-container", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.sort);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.games);
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"]], styles: [".filters[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 20px;\n  padding-top: 50px;\n  padding-left: 200px;\n  width: 20px;\n  height: 30px;\n  padding-bottom: 40px;\n  background-color: white;\n}\n\n.selector-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  background-color: #151515;\n  color: white;\n  border-top-right-radius: 5px;\n  border-top-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n  border-bottom-left-radius: 5px;\n  width: 10% !important;\n  margin-top: 50px !important;\n  margin-bottom: 30px !important;\n  padding: auto;\n  margin-left: 50% !important;\n  margin-right: 50% !important;\n  transition-duration: 0.3s;\n  cursor: pointer;\n}\n\n.selector-form[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n}\n\n.selector-label[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  font-weight: 500;\n  color: white;\n  opacity: 1;\n  margin: auto !important;\n}\n\n.selector-label[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n}\n\n.select-panel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  font-weight: 500;\n  color: #1a1313;\n  opacity: 1;\n  margin: auto !important;\n  width: 100%;\n  border-radius: 5px;\n  box-shadow: 4px 3px 8px 0px black;\n  transition-duration: 0.3s;\n  cursor: pointer;\n  -webkit-border-radius: 5px;\n  -moz-border-radius: 5px;\n  -ms-border-radius: 5px;\n  -o-border-radius: 5px;\n}\n\n.select-panel[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n}\n\n.matoption[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  font-weight: 500;\n  color: #252020;\n  opacity: 1;\n  margin: auto !important;\n  width: 100%;\n  border-radius: 5px;\n  box-shadow: 4px 3px 8px 0px black;\n  transition-duration: 0.3s;\n  cursor: pointer;\n  -webkit-border-radius: 5px;\n  -moz-border-radius: 5px;\n  -ms-border-radius: 5px;\n  -o-border-radius: 5px;\n}\n\n.matoption[_ngcontent-%COMP%]:hover {\n  font-weight: 550;\n  transform: translateY(-3px);\n  background-color: #4d74df;\n  color: white;\n}\n\n.games[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  max-width: 90vw;\n  margin: 20px auto;\n}\n\n.game[_ngcontent-%COMP%] {\n  width: 280px;\n  margin: 10px;\n  height: 330px;\n  overflow: hidden;\n  border-radius: 5px;\n  background-color: #202020;\n  box-shadow: 4px 3px 8px 0px rgba(200, 152, 44, 0.22);\n  transition-duration: 0.3s;\n  cursor: pointer;\n}\n\n.game[_ngcontent-%COMP%]:hover {\n  box-shadow: 4px 3px 11px 6px rgba(200, 152, 44, 0.46);\n  transform: translateY(-3px);\n}\n\n.game-thumb-container[_ngcontent-%COMP%] {\n  background-color: #000;\n  position: relative;\n  height: 172px;\n  color: #fff;\n  text-align: center;\n}\n\n.game-thumbnail[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  height: 172px;\n}\n\n.game-description[_ngcontent-%COMP%] {\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  height: 157px;\n}\n\n.game-name[_ngcontent-%COMP%] {\n  color: #fff;\n  font-weight: 700;\n  font-size: 22px;\n  margin-bottom: 20px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n\n.game-platforms[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.game-platform[_ngcontent-%COMP%] {\n  width: 20px;\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSwrQkFBQTtFQUNBLDhCQUFBO0VBQ0EscUJBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFFQSx5QkFBQTtFQUNBLGVBQUE7QUFBSjs7QUFDSTtFQUNJLDJCQUFBO0FBQ1I7O0FBR0E7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0FBQUo7O0FBQ0k7RUFDSSwyQkFBQTtBQUNSOztBQUdBO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGlDQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7QUFBSjs7QUFDSTtFQUNJLDJCQUFBO0FBQ1I7O0FBR0E7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUNBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtBQUFKOztBQUNJO0VBQ0ksZ0JBQUE7RUFDQSwyQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQUNSOztBQUdBO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUFKOztBQUdBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0RBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QUFBSjs7QUFDSTtFQUNJLHFEQUFBO0VBQ0EsMkJBQUE7QUFDUjs7QUFDSTtFQUNJLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBQ1I7O0FBQ0k7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FBQ1I7O0FBQ0k7RUFDSSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0FBQ1I7O0FBQ0k7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUFDUjs7QUFDSTtFQUNJLGFBQUE7QUFDUjs7QUFDSTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtBQUNSIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmlsdGVycyB7XHJcbiAgICBtYXgtd2lkdGg6IDEyMDBweDtcclxuICAgIG1hcmdpbjogMjBweDtcclxuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMDBweDtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDQwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnNlbGVjdG9yLWZvcm0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE1MTUxNTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xyXG4gICAgd2lkdGg6IDEwJSAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXRvcDogNTBweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogYXV0bztcclxuICAgIG1hcmdpbi1sZWZ0OiA1MCUgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1yaWdodDogNTAlICFpbXBvcnRhbnQ7XHJcbiAgICAvLyBib3gtc2hhZG93OiA0cHggM3B4IDhweCAwcHggcmdiKDIwMCAxNTIgNDQgLyAyMiUpO1xyXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcclxuICAgIH1cclxufVxyXG5cclxuLnNlbGVjdG9yLWxhYmVsIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIG1hcmdpbjogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xyXG4gICAgfVxyXG59XHJcblxyXG4uc2VsZWN0LXBhbmVsIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogcmdiKDI2LCAxOSwgMTkpO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIG1hcmdpbjogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBib3gtc2hhZG93OiA0cHggM3B4IDhweCAwcHggYmxhY2s7XHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIC1tcy1ib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAtby1ib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5tYXRvcHRpb24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiByZ2IoMzcsIDMyLCAzMik7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgbWFyZ2luOiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJveC1zaGFkb3c6IDRweCAzcHggOHB4IDBweCBibGFjaztcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgLW1zLWJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIC1vLWJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1NTA7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig3NywgMTE2LCAyMjMpO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxufVxyXG5cclxuLmdhbWVzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1heC13aWR0aDogOTB2dztcclxuICAgIG1hcmdpbjogMjBweCBhdXRvO1xyXG59XHJcblxyXG4uZ2FtZSB7XHJcbiAgICB3aWR0aDogMjgwcHg7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDMzMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMDIwMjA7XHJcbiAgICBib3gtc2hhZG93OiA0cHggM3B4IDhweCAwcHggcmdiKDIwMCAxNTIgNDQgLyAyMiUpO1xyXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDRweCAzcHggMTFweCA2cHggcmdiKDIwMCAxNTIgNDQgLyA0NiUpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcclxuICAgIH1cclxuICAgICYtdGh1bWItY29udGFpbmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBoZWlnaHQ6IDE3MnB4O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgICYtdGh1bWJuYWlsIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgaGVpZ2h0OiAxNzJweDtcclxuICAgIH1cclxuICAgICYtZGVzY3JpcHRpb24ge1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgaGVpZ2h0OiAxNTdweDtcclxuICAgIH1cclxuICAgICYtbmFtZSB7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB9XHJcbiAgICAmLXBsYXRmb3JtcyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgIH1cclxuICAgICYtcGxhdGZvcm0ge1xyXG4gICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "N+K7":
/*!******************************************!*\
  !*** ./src/app/services/http.service.ts ***!
  \******************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






class HttpService {
    constructor(http) {
        this.http = http;
    }
    getGameList(ordering, search) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().set('ordering', ordering);
        if (search) {
            params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().set('ordering', ordering).set('search', search);
        }
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].BASE_URL}/games`, {
            params: params,
        });
    }
    getGameDetails(id) {
        const gameInfoRequest = this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].BASE_URL}/games/${id}`);
        console.log('gameInfo --- ' + gameInfoRequest);
        const gameTrailersRequest = this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].BASE_URL}/games/${id}/movies`);
        console.log('gameTrailers --- ' + gameTrailersRequest);
        const gameScreenshotsRequest = this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].BASE_URL}/games/${id}/screenshots`);
        console.log('gameScreenShots --- ' + gameScreenshotsRequest);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["forkJoin"])({
            gameInfoRequest,
            gameScreenshotsRequest,
            gameTrailersRequest,
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((resp) => {
            var _a, _b;
            return Object.assign(Object.assign({}, resp['gameInfoRequest']), { screenshots: (_a = resp['gameScreenshotsRequest']) === null || _a === void 0 ? void 0 : _a.results, trailers: (_b = resp['gameTrailersRequest']) === null || _b === void 0 ? void 0 : _b.results });
        }));
    }
}
HttpService.ɵfac = function HttpService_Factory(t) { return new (t || HttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
HttpService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: HttpService, factory: HttpService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Oh3b":
/*!************************************************!*\
  !*** ./src/app/homepage/homepage.component.ts ***!
  \************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "ccyI");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _ngbmodule_material_carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngbmodule/material-carousel */ "fIx/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");









function HomepageComponent_mat_carousel_slide_11_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-carousel-slide", 10, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-card-footer", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h2", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-card-footer", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomepageComponent_mat_carousel_slide_11_Template_mat_card_footer_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const i_r4 = ctx.index; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.openGameDetails(ctx_r6.new_titles[i_r4]); })("click", function HomepageComponent_mat_carousel_slide_11_Template_mat_card_footer_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8._authService.notLogged(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomepageComponent_mat_carousel_slide_11_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const i_r4 = ctx.index; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.openGameDetails(ctx_r9.new_titles[i_r4]); })("click", function HomepageComponent_mat_carousel_slide_11_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r10._authService.notLogged(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h2", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Show Details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const slide_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("image", slide_r3.image)("hideOverlay", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.new_titles[i_r4], " ");
} }
function HomepageComponent_mat_carousel_slide_19_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-carousel-slide", 10, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card-footer", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomepageComponent_mat_carousel_slide_19_Template_mat_card_footer_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const i_r12 = ctx.index; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r14.openGameDetails(ctx_r14.best_titles[i_r12]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomepageComponent_mat_carousel_slide_19_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const i_r12 = ctx.index; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r16.openGameDetails(ctx_r16.best_titles[i_r12]); })("click", function HomepageComponent_mat_carousel_slide_19_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r17._authService.notLogged(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h2", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-card-footer", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomepageComponent_mat_carousel_slide_19_Template_mat_card_footer_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const i_r12 = ctx.index; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r18.openGameDetails(ctx_r18.best_titles[i_r12]); })("click", function HomepageComponent_mat_carousel_slide_19_Template_mat_card_footer_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r19._authService.notLogged(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomepageComponent_mat_carousel_slide_19_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const i_r12 = ctx.index; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r20.openGameDetails(ctx_r20.best_titles[i_r12]); })("click", function HomepageComponent_mat_carousel_slide_19_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r21._authService.notLogged(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h2", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Show Details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const slide_r11 = ctx.$implicit;
    const i_r12 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("image", slide_r11.image)("hideOverlay", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.best_titles[i_r12], " ");
} }
function HomepageComponent_mat_carousel_slide_27_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-carousel-slide", 10, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card-footer", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomepageComponent_mat_carousel_slide_27_Template_mat_card_footer_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26); const i_r23 = ctx.index; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r25.openGameDetails(ctx_r25.top10_titles[i_r23]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomepageComponent_mat_carousel_slide_27_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26); const i_r23 = ctx.index; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r27.openGameDetails(ctx_r27.top10_titles[i_r23]); })("click", function HomepageComponent_mat_carousel_slide_27_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r28._authService.notLogged(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h2", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-card-footer", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomepageComponent_mat_carousel_slide_27_Template_mat_card_footer_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26); const i_r23 = ctx.index; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r29.openGameDetails(ctx_r29.top10_titles[i_r23]); })("click", function HomepageComponent_mat_carousel_slide_27_Template_mat_card_footer_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r30._authService.notLogged(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomepageComponent_mat_carousel_slide_27_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26); const i_r23 = ctx.index; const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r31.openGameDetails(ctx_r31.top10_titles[i_r23]); })("click", function HomepageComponent_mat_carousel_slide_27_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r32._authService.notLogged(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h2", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Show Details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const slide_r22 = ctx.$implicit;
    const i_r23 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("image", slide_r22.image)("hideOverlay", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r2.top10_titles[i_r23], " ");
} }
class HomepageComponent {
    constructor(router, _authService) {
        this.router = router;
        this._authService = _authService;
        //New Released
        this.slides = [
            { image: '../../assets/Homepage/Slides/new/new1.jpg' },
            { image: '../../assets/Homepage/Slides/new/new2.jpg' },
            { image: '../../assets/Homepage/Slides/new/new3.jpg' },
            { image: '../../assets/Homepage/Slides/new/new4jpg.jpg' },
            { image: '../../assets/Homepage/Slides/new/new5.jpg' },
        ];
        this.new_titles = [
            'vampire-the-masquerade-bloodlines-2',
            'outriders',
            'halo-infinite',
            'resident-evil-village',
            'stalker-2',
        ];
        //Best of the year
        this.slides_best = [
            { image: '../../assets/Homepage/Slides/best/1.png' },
            { image: '../../assets/Homepage/Slides/best/2.jpg' },
            { image: '../../assets/Homepage/Slides/best/3.jpg' },
            { image: '../../assets/Homepage/Slides/best/4.jpg' },
            { image: '../../assets/Homepage/Slides/best/5.png' },
        ];
        this.best_titles = [
            'cyberpunk-2077',
            'biomutant',
            'hitman-3',
            'far-cry-6',
            'ghostwire-tokio',
        ];
        this.slides_10 = [
            { image: '../../assets/Homepage/Slides/top10/1.jpg' },
            { image: '../../assets/Homepage/Slides/top10/2.jpg' },
            { image: '../../assets/Homepage/Slides/top10/3.jpg' },
            { image: '../../assets/Homepage/Slides/top10/4.jpg' },
            { image: '../../assets/Homepage/Slides/top10/5.jpg' },
            { image: '../../assets/Homepage/Slides/top10/6.jpg' },
            { image: '../../assets/Homepage/Slides/top10/7.jpg' },
            { image: '../../assets/Homepage/Slides/top10/8.jpg' },
            { image: '../../assets/Homepage/Slides/top10/9.jpg' },
            { image: '../../assets/Homepage/Slides/top10/10.jpg' },
        ];
        this.top10_titles = [
            'the-witcher-3-wild-hunt',
            'the-last-of-us',
            'the-legend-of-zelda-breath-of-the-wild',
            'red-dead-redemption-2',
            'god-of-war-2',
            'uncharted-4-a-thiefs-end',
            'half-life-2',
            'grand-theft-auto-v',
            'mafia-the-city-of-lost-heaven',
            'dark-souls-iii',
        ];
    }
    ngOnInit() { }
    //Navigate to details
    openGameDetails(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.router.navigate(['details', id]);
            console.log('clicked');
        });
    }
}
HomepageComponent.ɵfac = function HomepageComponent_Factory(t) { return new (t || HomepageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"])); };
HomepageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomepageComponent, selectors: [["app-homepage"]], decls: 28, vars: 21, consts: [[1, "container-fluid"], [1, "container"], [1, "col"], [1, "card"], ["fxLayout", "row", "fxLayoutAlign", "center center", 1, "card-header"], [1, "header-content"], [1, "slide-image"], ["maintainAspectRatio", "true", "timings", "500ms ease-in", "interval", "5000", "color", "primary", "maxWidth", "auto", "proportion", "40", "slides", "5", "orientation", "ltr", 3, "autoplay", "loop", "hideArrows", "hideIndicators", "useKeyboard", "useMouseWheel"], ["overlayColor", "#00000040", 3, "image", "hideOverlay", 4, "ngFor", "ngForOf"], ["maintainAspectRatio", "true", "timings", "500ms ease-in", "interval", "5000", "color", "primary", "maxWidth", "auto", "proportion", "40", "slides", "10", "orientation", "ltr", 3, "autoplay", "loop", "hideArrows", "hideIndicators", "useKeyboard", "useMouseWheel"], ["overlayColor", "#00000040", 3, "image", "hideOverlay"], ["matCarouselSlide", ""], ["fxLayout", "row", "fxLayoutAlign", "center center", 1, "card-footer"], ["fxLayout", "row", "fxLayoutAlign", "center center", "mat-raised-button", "", 1, "footer-btn", 2, "background-color", "#ffffff00"], [2, "text-transform", "uppercase", "margin", "auto"], ["fxLayout", "col", "fxLayoutAlign", "end end", 1, "card-footer", 3, "click"], ["fxLayout", "row", "fxLayoutAlign", "center center", "mat-raised-button", "", 1, "footer-btn", 2, "background-color", "#ffffff00", 3, "click"], ["fxLayout", "row", "fxLayoutAlign", "center center", 1, "card-footer", 3, "click"]], template: function HomepageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-card-header", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "New and trending");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-card-content", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-carousel", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, HomepageComponent_mat_carousel_slide_11_Template, 11, 3, "mat-carousel-slide", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-card-header", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Popular in 2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-card-content", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "mat-carousel", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, HomepageComponent_mat_carousel_slide_19_Template, 10, 3, "mat-carousel-slide", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "mat-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "mat-card-header", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "All Time top 10");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "mat-card-content", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "mat-carousel", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, HomepageComponent_mat_carousel_slide_27_Template, 10, 3, "mat-carousel-slide", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("autoplay", true)("loop", true)("hideArrows", true)("hideIndicators", true)("useKeyboard", true)("useMouseWheel", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.slides);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("autoplay", true)("loop", true)("hideArrows", true)("hideIndicators", true)("useKeyboard", true)("useMouseWheel", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.slides_best);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("autoplay", true)("loop", true)("hideArrows", true)("hideIndicators", true)("useKeyboard", true)("useMouseWheel", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.slides_10);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardHeader"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutAlignDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"], _ngbmodule_material_carousel__WEBPACK_IMPORTED_MODULE_6__["MatCarouselComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _ngbmodule_material_carousel__WEBPACK_IMPORTED_MODULE_6__["MatCarouselSlideComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardFooter"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"]], styles: [".card[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 50%;\n  border-radius: 5px;\n  background-color: #14141400;\n}\n.card[_ngcontent-%COMP%]:hover {\n  font-weight: 500;\n}\n.card-header[_ngcontent-%COMP%] {\n  color: white;\n}\n.card-footer[_ngcontent-%COMP%] {\n  color: white;\n  border-radius: 5px;\n}\n.footer-btn[_ngcontent-%COMP%] {\n  color: white;\n  font-weight: 900;\n  box-shadow: 4px 3px 11px 6px rgba(155, 5, 255, 0.555);\n  transform: translateY(-3px) !important;\n  -webkit-transform: translateY(-3px) !important;\n  -moz-transform: translateY(-3px) !important;\n  -ms-transform: translateY(-3px) !important;\n  -o-transform: translateY(-3px) !important;\n}\n.header-content[_ngcontent-%COMP%] {\n  background-color: #141414;\n  color: white;\n}\n.slide-image[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  box-shadow: 4px 3px 11px 6px #8ea8ac;\n}\n.slide-image[_ngcontent-%COMP%]:hover {\n  border-radius: 10px;\n  box-shadow: 4px 3px 11px 6px #54cadf;\n  transform: translateY(-3px) !important;\n  -webkit-transform: translateY(-3px) !important;\n  -moz-transform: translateY(-3px) !important;\n  -ms-transform: translateY(-3px) !important;\n  -o-transform: translateY(-3px) !important;\n  -webkit-border-radius: 10px;\n  -moz-border-radius: 10px;\n  -ms-border-radius: 10px;\n  -o-border-radius: 10px;\n}\n.slide-title[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: end;\n  justify-content: end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGhvbWVwYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFJO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0FBQ1I7QUFBUTtFQUNJLGdCQUFBO0FBRVo7QUFFSTtFQUNJLFlBQUE7QUFDUjtBQUVJO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0FBQ1I7QUFFSTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHFEQUFBO0VBQ0Esc0NBQUE7RUFDQSw4Q0FBQTtFQUNBLDJDQUFBO0VBQ0EsMENBQUE7RUFDQSx5Q0FBQTtBQUNSO0FBRUk7RUFDSSx5QkFBQTtFQUNBLFlBQUE7QUFDUjtBQUVJO0VBQ0ksa0JBQUE7RUFDQSxvQ0FBQTtBQUNSO0FBQVE7RUFDSSxtQkFBQTtFQUNBLG9DQUFBO0VBQ0Esc0NBQUE7RUFDQSw4Q0FBQTtFQUNBLDJDQUFBO0VBQ0EsMENBQUE7RUFDQSx5Q0FBQTtFQUNBLDJCQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0FBRVo7QUFFSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBQUNSIiwiZmlsZSI6ImhvbWVwYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICAgIC5jYXJkIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDUwJTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE0MTQxNDAwO1xyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLmNhcmQtaGVhZGVyIHtcclxuICAgICAgICBjb2xvcjogd2hpdGVcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmNhcmQtZm9vdGVyIHtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuZm9vdGVyLWJ0biB7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICAgICAgYm94LXNoYWRvdzogNHB4IDNweCAxMXB4IDZweCByZ2JhKDE1NSwgNSwgMjU1LCAwLjU1NSk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCkgIWltcG9ydGFudDtcclxuICAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KSAhaW1wb3J0YW50O1xyXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCkgIWltcG9ydGFudDtcclxuICAgICAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCkgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmhlYWRlci1jb250ZW50IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTQxNDE0O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuc2xpZGUtaW1hZ2Uge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICBib3gtc2hhZG93OiA0cHggM3B4IDExcHggNnB4IHJnYigxNDIsIDE2OCwgMTcyKTtcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogNHB4IDNweCAxMXB4IDZweCByZ2IoODQsIDIwMiwgMjIzKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCkgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgLW1vei1ib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICAtbXMtYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgLW8tYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5zbGlkZS10aXRsZSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogZW5kO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZW5kO1xyXG4gICAgfSJdfQ== */"] });


/***/ }),

/***/ "QVFe":
/*!*********************************************************!*\
  !*** ./src/app/components/details/details.component.ts ***!
  \*********************************************************/
/*! exports provided: DetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComponent", function() { return DetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/http.service */ "N+K7");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var angular_gauge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-gauge */ "cOd4");
/* harmony import */ var _game_tabs_game_tabs_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../game-tabs/game-tabs.component */ "Rwl7");







function DetailsComponent_span_12_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, ", ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DetailsComponent_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DetailsComponent_span_12_span_2_Template, 2, 0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const genre_r1 = ctx.$implicit;
    const last_r2 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](genre_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !last_r2);
} }
class DetailsComponent {
    constructor(ActivatedRoute, httpService) {
        this.ActivatedRoute = ActivatedRoute;
        this.httpService = httpService;
        this.gameRating = 0;
    }
    ngOnInit() {
        this.routeSub = this.ActivatedRoute.params.subscribe((params) => {
            this.gameId = params['id'];
            this.getGameDetails(this.gameId);
        });
    }
    getGameDetails(id) {
        this.gameSub = this.httpService
            .getGameDetails(id)
            .subscribe((gameResp) => {
            this.game = gameResp;
            setTimeout(() => {
                this.gameRating = this.game.metacritic;
            }, 1000);
        });
    }
    getColor(value) {
        if (value > 75) {
            return '#5ee432';
        }
        else if (value > 50) {
            return '#fffa50';
        }
        else if (value > 30) {
            return '#f7aa38';
        }
        else {
            return '#ef4655';
        }
    }
    ngOnDestroy() {
        if (this.gameSub) {
            this.gameSub.unsubscribe;
        }
        if (this.routeSub) {
            this.routeSub.unsubscribe;
        }
    }
}
DetailsComponent.ɵfac = function DetailsComponent_Factory(t) { return new (t || DetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"])); };
DetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DetailsComponent, selectors: [["app-details"]], decls: 18, vars: 15, consts: [[1, "details"], [1, "game-banner"], ["alt", "background image", 1, "game-banner-img", 3, "src"], [1, "game-content"], [1, "details-wrapper"], [1, "game-header"], [1, "game-header-title"], [1, "game-header-release-date"], [1, "game-header-genres"], [4, "ngFor", "ngForOf"], ["fxHide", "", "fxShow.gt-sm", "", 1, "game-gauge"], [1, "two", 3, "max", "dialStartAngle", "dialEndAngle", "value", "animated", "color", "animationDuration"], ["target", "_blank", 1, "game-gauge-label", 3, "href"], [3, "game"], [4, "ngIf"]], template: function DetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, DetailsComponent_span_12_Template, 3, 2, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "mwl-gauge", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Metacritic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "app-game-tabs", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.game.background_image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.game.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Release: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 13, ctx.game.released), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.game.genres);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("max", 100)("dialStartAngle", 170)("dialEndAngle", 10)("value", ctx.gameRating)("animated", true)("color", ctx.getColor)("animationDuration", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "", ctx.game.metacritic_url, "\n          ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("game", ctx.game);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_4__["DefaultShowHideDirective"], angular_gauge__WEBPACK_IMPORTED_MODULE_5__["ɵa"], _game_tabs_game_tabs_component__WEBPACK_IMPORTED_MODULE_6__["GameTabsComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]], styles: [".details-wrapper[_ngcontent-%COMP%] {\n  max-width: 900px;\n  margin: 20px auto;\n  position: relative;\n}\n\n.details[_ngcontent-%COMP%]     mwl-gauge {\n  width: 150px;\n  height: 150px;\n  display: block;\n  padding: 10px;\n}\n\n.details[_ngcontent-%COMP%]     mwl-gauge .dial {\n  stroke-width: 10;\n}\n\n.details[_ngcontent-%COMP%]     mwl-gauge .value {\n  stroke-dasharray: none;\n  stroke-width: 13;\n}\n\n.details[_ngcontent-%COMP%]     mwl-gauge .value-text {\n  fill: #fff;\n  font-weight: 700;\n  font-size: 24px;\n}\n\n.details[_ngcontent-%COMP%]   .game-gauge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50px;\n  right: 0;\n}\n\n.details[_ngcontent-%COMP%]   .game-gauge-label[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #fff;\n  position: relative;\n  bottom: 60px;\n}\n\n.game-banner[_ngcontent-%COMP%] {\n  height: 442px;\n  overflow: hidden;\n  transition-duration: 0.3s;\n}\n\n.game-banner-img[_ngcontent-%COMP%] {\n  width: 100%;\n  filter: blur(3px);\n  -webkit-filter: blur(1px);\n}\n\n.game-banner-img[_ngcontent-%COMP%]:hover {\n  filter: blur(0px);\n  -webkit-filter: blur(0px);\n}\n\n.game-content[_ngcontent-%COMP%] {\n  text-align: center;\n  position: relative;\n  top: -200px;\n}\n\n.game-content[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n}\n\n.game-header-title[_ngcontent-%COMP%] {\n  -webkit-text-stroke: 1px black;\n  font-size: 70px;\n  color: #fff;\n  font-weight: 700;\n  line-height: 70px;\n  white-space: nowrap;\n  transition-duration: 0.3s;\n}\n\n.game-header-title[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n}\n\n.game-header-release-date[_ngcontent-%COMP%] {\n  -webkit-text-stroke: 0.7px black;\n  color: #fff;\n  font-weight: 500;\n}\n\n.game-header-release-date[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n}\n\n.game-header-genres[_ngcontent-%COMP%] {\n  -webkit-text-stroke: 0.1px black;\n  color: #fff;\n  font-weight: 500;\n}\n\n.game-header-genres[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxkZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBR0s7RUFDRyxZQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FBQVI7O0FBQ1E7RUFDSSxnQkFBQTtBQUNaOztBQUNRO0VBQ0ksc0JBQUE7RUFDQSxnQkFBQTtBQUNaOztBQUNRO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUNaOztBQUVJO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtBQUFSOztBQUNRO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFDWjs7QUFLSTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FBRlI7O0FBR1E7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtBQURaOztBQUVZO0VBQ0ksaUJBQUE7RUFDQSx5QkFBQTtBQUFoQjs7QUFJSTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBRlI7O0FBR1E7RUFDSSwyQkFBQTtBQURaOztBQUtRO0VBQ0ksOEJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBSFo7O0FBSVk7RUFDSSwyQkFBQTtBQUZoQjs7QUFLUTtFQUNJLGdDQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBSFo7O0FBSVk7RUFDSSwyQkFBQTtBQUZoQjs7QUFLUTtFQUNJLGdDQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBSFo7O0FBSVk7RUFDSSwyQkFBQTtBQUZoQiIsImZpbGUiOiJkZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRldGFpbHMtd3JhcHBlciB7XHJcbiAgICBtYXgtd2lkdGg6IDkwMHB4O1xyXG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5kZXRhaWxzIHtcclxuICAgICA6Om5nLWRlZXAgbXdsLWdhdWdlIHtcclxuICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIC5kaWFsIHtcclxuICAgICAgICAgICAgc3Ryb2tlLXdpZHRoOiAxMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnZhbHVlIHtcclxuICAgICAgICAgICAgc3Ryb2tlLWRhc2hhcnJheTogbm9uZTtcclxuICAgICAgICAgICAgc3Ryb2tlLXdpZHRoOiAxMztcclxuICAgICAgICB9XHJcbiAgICAgICAgLnZhbHVlLXRleHQge1xyXG4gICAgICAgICAgICBmaWxsOiAjZmZmO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmdhbWUtZ2F1Z2Uge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDUwcHg7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgJi1sYWJlbCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgYm90dG9tOiA2MHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmdhbWUge1xyXG4gICAgJi1iYW5uZXIge1xyXG4gICAgICAgIGhlaWdodDogNDQycHg7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xyXG4gICAgICAgICYtaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGZpbHRlcjogYmx1cigzcHgpO1xyXG4gICAgICAgICAgICAtd2Via2l0LWZpbHRlcjogYmx1cigxcHgpO1xyXG4gICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIGZpbHRlcjogYmx1cigwcHgpO1xyXG4gICAgICAgICAgICAgICAgLXdlYmtpdC1maWx0ZXI6IGJsdXIoMHB4KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICYtY29udGVudCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB0b3A6IC0yMDBweDtcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICYtaGVhZGVyIHtcclxuICAgICAgICAmLXRpdGxlIHtcclxuICAgICAgICAgICAgLXdlYmtpdC10ZXh0LXN0cm9rZTogMXB4IGJsYWNrO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDcwcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNzBweDtcclxuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJi1yZWxlYXNlLWRhdGUge1xyXG4gICAgICAgICAgICAtd2Via2l0LXRleHQtc3Ryb2tlOiAwLjdweCBibGFjaztcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYtZ2VucmVzIHtcclxuICAgICAgICAgICAgLXdlYmtpdC10ZXh0LXN0cm9rZTogMC4xcHggcmdiKDAsIDAsIDApO1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"] });


/***/ }),

/***/ "Rwl7":
/*!*************************************************************!*\
  !*** ./src/app/components/game-tabs/game-tabs.component.ts ***!
  \*************************************************************/
/*! exports provided: GameTabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameTabsComponent", function() { return GameTabsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");




function GameTabsComponent_p_3_span_2_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, ", ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GameTabsComponent_p_3_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GameTabsComponent_p_3_span_2_span_2_Template, 2, 0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const game_r8 = ctx.$implicit;
    const last_r9 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](game_r8.platform.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !last_r9);
} }
function GameTabsComponent_p_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Platfoms: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GameTabsComponent_p_3_span_2_Template, 3, 2, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.game.parent_platforms);
} }
function GameTabsComponent_p_4_span_2_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, ", ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GameTabsComponent_p_4_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GameTabsComponent_p_4_span_2_span_2_Template, 2, 0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const publisher_r12 = ctx.$implicit;
    const last_r13 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](publisher_r12.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !last_r13);
} }
function GameTabsComponent_p_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Publishers: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GameTabsComponent_p_4_span_2_Template, 3, 2, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.game.publishers);
} }
function GameTabsComponent_p_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Website: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r2.game.website, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.game.website);
} }
function GameTabsComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 12);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r3.game.description, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function GameTabsComponent_ng_container_9_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "thumb_up");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const votes_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](votes_r15.count || 0);
} }
function GameTabsComponent_ng_container_9_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "thumb_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const votes_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](votes_r15.count || 0);
} }
function GameTabsComponent_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GameTabsComponent_ng_container_9_span_1_Template, 5, 1, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GameTabsComponent_ng_container_9_span_2_Template, 5, 1, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const votes_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", votes_r15.title === "exceptional");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", votes_r15.title === "skip");
} }
function GameTabsComponent_mat_tab_10_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 18);
} if (rf & 2) {
    const screenshot_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", screenshot_r21.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function GameTabsComponent_mat_tab_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tab", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GameTabsComponent_mat_tab_10_img_1_Template, 1, 1, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.game.screenshots);
} }
function GameTabsComponent_mat_tab_11_video_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "video", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "source", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " your browser doesn't support video tag ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const trailer_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", trailer_r23.data == null ? null : trailer_r23.data.max, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function GameTabsComponent_mat_tab_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tab", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GameTabsComponent_mat_tab_11_video_1_Template, 3, 1, "video", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.game.trailers);
} }
class GameTabsComponent {
    constructor() { }
    ngOnInit() { }
}
GameTabsComponent.ɵfac = function GameTabsComponent_Factory(t) { return new (t || GameTabsComponent)(); };
GameTabsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GameTabsComponent, selectors: [["app-game-tabs"]], inputs: { game: "game" }, decls: 13, vars: 7, consts: [[1, "game-tabs"], ["mat-align-tabs", "start", "backgroundColor", "primary"], ["label", "About"], ["class", "game-tabs-par", 4, "ngIf"], ["class", "game-description", 3, "innerHTML", 4, "ngIf"], [1, "game-tabs-votes"], [4, "ngFor", "ngForOf"], ["label", "Screenshots", 4, "ngIf"], ["label", "Trailers", 4, "ngIf"], [1, "game-tabs-par"], [4, "ngIf"], ["target", "_blank", 1, "game-tabs-link", 3, "href"], [1, "game-description", 3, "innerHTML"], [1, "game-tabs-votes-up"], [1, "game-tabs-votes-count"], [1, "game-tabs-votes-down"], ["label", "Screenshots"], ["class", "game-screenshot", "alt", "screenshot", 3, "src", 4, "ngFor", "ngForOf"], ["alt", "screenshot", 1, "game-screenshot", 3, "src"], ["label", "Trailers"], ["class", "game-trailer", "controls", "", 4, "ngFor", "ngForOf"], ["controls", "", 1, "game-trailer"], ["type", "video/mp4", 3, "src"]], template: function GameTabsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-tab-group", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-tab", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GameTabsComponent_p_3_Template, 3, 1, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, GameTabsComponent_p_4_Template, 3, 1, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, GameTabsComponent_p_5_Template, 4, 2, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, GameTabsComponent_div_7_Template, 1, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, GameTabsComponent_ng_container_9_Template, 3, 2, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, GameTabsComponent_mat_tab_10_Template, 2, 1, "mat-tab", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, GameTabsComponent_mat_tab_11_Template, 2, 1, "mat-tab", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.game.parent_platforms == null ? null : ctx.game.parent_platforms.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.game.publishers == null ? null : ctx.game.publishers.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.game.website);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.game.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.game.ratings);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.game.screenshots == null ? null : ctx.game.screenshots.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.game.trailers == null ? null : ctx.game.trailers.length);
    } }, directives: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__["MatTab"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"]], styles: [".game-tabs[_ngcontent-%COMP%] {\n  background: rgba(63, 81, 181, 0.6);\n  color: #fff;\n  text-align: left;\n  padding-top: 10px;\n  padding-bottom: 5px;\n}\n.game-tabs-par[_ngcontent-%COMP%] {\n  padding: 10px 10px 0 20px;\n  margin-bottom: 0;\n}\n.game-tabs-par[_ngcontent-%COMP%]:nth-child(3) {\n  margin-bottom: 10px;\n}\n.game-tabs-link[_ngcontent-%COMP%] {\n  color: #fff;\n  text-decoration: none;\n}\n.game-tabs-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.game-tabs-votes[_ngcontent-%COMP%] {\n  margin-left: 20px;\n  display: flex;\n  color: #fff;\n}\n.game-tabs-votes-count[_ngcontent-%COMP%] {\n  margin-left: 5px;\n  margin-right: 5px;\n  vertical-align: super;\n}\n.game-tabs-votes-up[_ngcontent-%COMP%] {\n  color: #5ee432;\n}\n.game-tabs-votes-down[_ngcontent-%COMP%] {\n  color: #ef4655;\n}\n.game-tabs[_ngcontent-%COMP%]     .mat-tab-labels {\n  justify-content: center;\n}\n.game-description[_ngcontent-%COMP%] {\n  padding-top: 10px;\n  padding-left: 20px;\n}\n.game-screenshot[_ngcontent-%COMP%] {\n  margin-left: 7px;\n  width: calc(50% - 10px);\n}\n.game-screenshot[_ngcontent-%COMP%]:nth-child(1) {\n  margin-top: 10px;\n}\n.game-screenshot[_ngcontent-%COMP%]:nth-child(even) {\n  margin-left: 6px;\n}\n.game-trailer[_ngcontent-%COMP%] {\n  margin-left: 5%;\n  margin-top: 10px;\n  width: 90%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxnYW1lLXRhYnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxrQ0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFBUjtBQUNRO0VBQ0kseUJBQUE7RUFDQSxnQkFBQTtBQUNaO0FBQVk7RUFDSSxtQkFBQTtBQUVoQjtBQUNRO0VBQ0ksV0FBQTtFQUNBLHFCQUFBO0FBQ1o7QUFBWTtFQUNJLDBCQUFBO0FBRWhCO0FBQ1E7RUFDSSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FBQ1o7QUFBWTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFFQSxxQkFBQTtBQUNoQjtBQUNZO0VBQ0ksY0FBQTtBQUNoQjtBQUNZO0VBQ0ksY0FBQTtBQUNoQjtBQUVTO0VBQ0csdUJBQUE7QUFBWjtBQUdJO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtBQURSO0FBR0k7RUFDSSxnQkFBQTtFQUNBLHVCQUFBO0FBRFI7QUFFUTtFQUNJLGdCQUFBO0FBQVo7QUFFUTtFQUNJLGdCQUFBO0FBQVo7QUFHSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7QUFEUiIsImZpbGUiOiJnYW1lLXRhYnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ2FtZSB7XHJcbiAgICAmLXRhYnMge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYig2MyA4MSAxODEgLyA2MCUpO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcclxuICAgICAgICAmLXBhciB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMTBweCAwIDIwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgICAgICY6bnRoLWNoaWxkKDMpIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJi1saW5rIHtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmLXZvdGVzIHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAmLWNvdW50IHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgICAgICAgICAgIC8vIHNhIGxlIGFsaW5pZW0gcGUgbWlqbG9jdWwgc2VtbmVsb3JcclxuICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBzdXBlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLXVwIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjNWVlNDMyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYtZG93biB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2VmNDY1NTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAgOjpuZy1kZWVwIC5tYXQtdGFiLWxhYmVscyB7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICYtZGVzY3JpcHRpb24ge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgIH1cclxuICAgICYtc2NyZWVuc2hvdCB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDdweDtcclxuICAgICAgICB3aWR0aDogY2FsYyg1MCUgLSAxMHB4KTtcclxuICAgICAgICAmOm50aC1jaGlsZCgxKSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6bnRoLWNoaWxkKGV2ZW4pIHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDZweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAmLXRyYWlsZXIge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICB9XHJcbn0iXX0= */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "ccyI");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _navigation_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navigation/sidenav/sidenav.component */ "jccf");
/* harmony import */ var _navigation_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navigation/header/header.component */ "umHo");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");






class AppComponent {
    constructor(_authService) {
        this._authService = _authService;
        this.title = 'gamestore';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 8, vars: 0, consts: [["role", "navigation", "mode", "side"], ["sidenav", ""], [3, "closeSidenav"], [3, "sidenavToggle"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-sidenav-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-sidenav", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-sidenav", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("closeSidenav", function AppComponent_Template_app_sidenav_closeSidenav_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return _r0.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-sidenav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "app-header", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sidenavToggle", function AppComponent_Template_app_header_sidenavToggle_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenav"], _navigation_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_3__["SidenavComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenavContent"], _navigation_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"]], styles: ["mat-sidenav-container[_ngcontent-%COMP%], mat-sidenav-content[_ngcontent-%COMP%], mat-sidenav[_ngcontent-%COMP%] {\n  height: 100%;\n  padding: 0 !important;\n  margin: 0 !important;\n  background: #ffffff !important;\n  background-color: #151515 !important;\n  color: white !important;\n}\n\nmat-sidenav[_ngcontent-%COMP%] {\n  width: 250px;\n}\n\nmain[_ngcontent-%COMP%] {\n  background: #151515 !important;\n  background-color: #151515 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7RUFHSSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtFQUNBLDhCQUFBO0VBQ0Esb0NBQUE7RUFDQSx1QkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtBQUNKOztBQUVBO0VBQ0ksOEJBQUE7RUFDQSxvQ0FBQTtBQUNKIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1zaWRlbmF2LWNvbnRhaW5lcixcclxubWF0LXNpZGVuYXYtY29udGVudCxcclxubWF0LXNpZGVuYXYge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTUxNTE1ICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG5cclxubWF0LXNpZGVuYXYge1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG59XHJcblxyXG5tYWluIHtcclxuICAgIGJhY2tncm91bmQ6ICMxNTE1MTUgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNTE1MTUgIWltcG9ydGFudDtcclxufSJdfQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var angular_gauge__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-gauge */ "cOd4");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _components_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/search-bar/search-bar.component */ "lCy9");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _interceptors_http_headers_interceptor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./interceptors/http-headers.interceptor */ "8Qyz");
/* harmony import */ var _interceptors_http_errors_interceptor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./interceptors/http-errors.interceptor */ "gU1t");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _ngbmodule_material_carousel__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ngbmodule/material-carousel */ "fIx/");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./register/register.component */ "1W4x");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _navigation_header_header_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./navigation/header/header.component */ "umHo");
/* harmony import */ var _navigation_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./navigation/sidenav/sidenav.component */ "jccf");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./homepage/homepage.component */ "Oh3b");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./auth.guard */ "tIkO");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./auth.service */ "ccyI");
/* harmony import */ var _token_interceptor_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./token-interceptor.service */ "9vt0");
/* harmony import */ var _components_details_details_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/details/details.component */ "QVFe");
/* harmony import */ var _components_game_tabs_game_tabs_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/game-tabs/game-tabs.component */ "Rwl7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/core */ "fXoL");

//Forms






//Flex Layout//

//MatModules//















//
// Angular Bootstrap

// App Components //





//
// For Authentication //








//
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_34__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_34__["ɵɵdefineInjector"]({ providers: [
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
            useClass: _interceptors_http_headers_interceptor__WEBPACK_IMPORTED_MODULE_14__["HttpHeadersInterceptor"],
            multi: true,
        },
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
            useClass: _interceptors_http_errors_interceptor__WEBPACK_IMPORTED_MODULE_15__["HttpErrorsInterceptor"],
            multi: true,
        },
        _auth_service__WEBPACK_IMPORTED_MODULE_30__["AuthService"],
        _auth_guard__WEBPACK_IMPORTED_MODULE_29__["AuthGuard"],
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
            useClass: _token_interceptor_service__WEBPACK_IMPORTED_MODULE_31__["TokenInterceptorService"],
            multi: true,
        },
    ], imports: [[
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            angular_gauge__WEBPACK_IMPORTED_MODULE_6__["GaugeModule"].forRoot(),
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__["MatToolbarModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_18__["MatButtonModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_19__["MatInputModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__["MatMenuModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__["MatSidenavModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_22__["MatSnackBarModule"],
            _ngbmodule_material_carousel__WEBPACK_IMPORTED_MODULE_23__["MatCarouselModule"].forRoot(),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_34__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_12__["SearchBarComponent"],
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"],
        _register_register_component__WEBPACK_IMPORTED_MODULE_24__["RegisterComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_25__["LoginComponent"],
        _navigation_header_header_component__WEBPACK_IMPORTED_MODULE_26__["HeaderComponent"],
        _navigation_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_27__["SidenavComponent"],
        _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_28__["HomepageComponent"],
        _components_details_details_component__WEBPACK_IMPORTED_MODULE_32__["DetailsComponent"],
        _components_game_tabs_game_tabs_component__WEBPACK_IMPORTED_MODULE_33__["GameTabsComponent"]], imports: [_angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], angular_gauge__WEBPACK_IMPORTED_MODULE_6__["GaugeModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__["MatToolbarModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_18__["MatButtonModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_19__["MatInputModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__["MatMenuModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__["MatSidenavModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_22__["MatSnackBarModule"], _ngbmodule_material_carousel__WEBPACK_IMPORTED_MODULE_23__["MatCarouselModule"]] }); })();


/***/ }),

/***/ "ccyI":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");




class AuthService {
    constructor(http, _router, _snackBar) {
        this.http = http;
        this._router = _router;
        this._snackBar = _snackBar;
        this._registerUrl = 'http://localhost:3000/api/register';
        this._loginUrl = 'http://localhost:3000/api/login';
    }
    // Registration through POST method(email and password)
    registerUser(user) {
        return this.http.post(this._registerUrl, user);
    }
    // Login through POST method(email and password)
    loginUser(user) {
        return this.http.post(this._loginUrl, user);
    }
    loggedIn() {
        return !!localStorage.getItem('token');
    }
    //User Logout//
    logoutUser() {
        localStorage.removeItem('token');
        this._router.navigate(['/default']);
    }
    //
    //Snackbar//
    notLogged() {
        if (!!localStorage.getItem('token') == false) {
            this._router.navigate(['/login']);
            this._snackBar.open('Login to Access Website', 'Clear', {
                duration: 3000,
            });
        }
    }
    notLoggedPromt() {
        if (!!localStorage.getItem('token') == false) {
            this._snackBar.open('Login to View More Contents', 'Clear', {
                duration: 3000,
            });
        }
    }
    wrongPassword() {
        if (!!localStorage.getItem('token') == false) {
            this._snackBar.open('Wrong Credentials', 'Clear', {
                duration: 3000,
            });
        }
    }
    getToken() {
        return localStorage.getItem('token');
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "gU1t":
/*!*********************************************************!*\
  !*** ./src/app/interceptors/http-errors.interceptor.ts ***!
  \*********************************************************/
/*! exports provided: HttpErrorsInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpErrorsInterceptor", function() { return HttpErrorsInterceptor; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



class HttpErrorsInterceptor {
    constructor() { }
    intercept(req, next) {
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
            console.log(err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(err);
        }));
    }
}
HttpErrorsInterceptor.ɵfac = function HttpErrorsInterceptor_Factory(t) { return new (t || HttpErrorsInterceptor)(); };
HttpErrorsInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: HttpErrorsInterceptor, factory: HttpErrorsInterceptor.ɵfac });


/***/ }),

/***/ "jccf":
/*!*********************************************************!*\
  !*** ./src/app/navigation/sidenav/sidenav.component.ts ***!
  \*********************************************************/
/*! exports provided: SidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavComponent", function() { return SidenavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../auth.service */ "ccyI");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");








class SidenavComponent {
    constructor(_authService, _snackBar) {
        this._authService = _authService;
        this._snackBar = _snackBar;
        this.closeSidenav = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() { }
    onClose() {
        this.closeSidenav.emit();
    }
    onLogout() {
        this._snackBar.open('Logged Out', 'Clear', { duration: 3000 });
    }
}
SidenavComponent.ɵfac = function SidenavComponent_Factory(t) { return new (t || SidenavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"])); };
SidenavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidenavComponent, selectors: [["app-sidenav"]], outputs: { closeSidenav: "closeSidenav" }, decls: 17, vars: 0, consts: [["fxFlex", "", "fxLayout", "column", "fxLayoutAlign", "start start", "fxLayoutGap", "10px", 1, "site-nav", 2, "margin-top", "20px !important", "margin-left", "20px !important"], ["mat-icon-button", "", "routerLink", "/", 1, "site-nav", 3, "click"], ["color", "primary", 1, "nav-icon"], ["mat-icon-button", "", "routerLink", "/login", 1, "site-nav", 3, "click"], ["mat-icon-button", "", "routerLink", "/register", 1, "site-nav", 3, "click"], ["mat-icon-button", "", 1, "site-nav", 3, "click"]], template: function SidenavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-nav-list", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidenavComponent_Template_button_click_1_listener() { return ctx.onClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidenavComponent_Template_button_click_5_listener() { return ctx.onClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Login ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidenavComponent_Template_button_click_9_listener() { return ctx.onClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "account_box");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Signup ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidenavComponent_Template_button_click_13_listener() { return ctx.onLogout(); })("click", function SidenavComponent_Template_button_click_13_listener() { return ctx.onClose(); })("click", function SidenavComponent_Template_button_click_13_listener() { return ctx._authService.logoutUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Logout ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutGapDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"]], styles: ["mat-sidebar-container[_ngcontent-%COMP%], mat-sidebar-container[_ngcontent-%COMP%], mat-sidenav[_ngcontent-%COMP%] {\n  height: 100;\n  width: 200px;\n  color: white !important;\n  background-color: white !important;\n}\n\nmat-sidenav[_ngcontent-%COMP%] {\n  width: 200px;\n}\n\n.site-nav[_ngcontent-%COMP%] {\n  color: white !important;\n}\n\n.site-nav[_ngcontent-%COMP%]:hover {\n  color: #7ab8ff !important;\n  font-weight: 700 !important;\n  transform: translateY(-3px);\n  -webkit-transform: translateY(-3px);\n  -moz-transform: translateY(-3px);\n  -ms-transform: translateY(-3px);\n  -o-transform: translateY(-3px);\n}\n\n.nav-icon[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n\n.nav-icon[_ngcontent-%COMP%]:hover {\n  color: #ff7a7a !important;\n  font-weight: 700 !important;\n  transform: translateY(-3px);\n  -webkit-transform: translateY(-3px);\n  -moz-transform: translateY(-3px);\n  -ms-transform: translateY(-3px);\n  -o-transform: translateY(-3px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzaWRlbmF2LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7RUFHSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0NBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7QUFDSjs7QUFFQTtFQUNJLHVCQUFBO0FBQ0o7O0FBQUk7RUFDSSx5QkFBQTtFQUNBLDJCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsK0JBQUE7RUFDQSw4QkFBQTtBQUVSOztBQUVBO0VBQ0ksaUJBQUE7QUFDSjs7QUFBSTtFQUNJLHlCQUFBO0VBQ0EsMkJBQUE7RUFDQSwyQkFBQTtFQUNBLG1DQUFBO0VBQ0EsZ0NBQUE7RUFDQSwrQkFBQTtFQUNBLDhCQUFBO0FBRVIiLCJmaWxlIjoic2lkZW5hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1zaWRlYmFyLWNvbnRhaW5lcixcclxubWF0LXNpZGViYXItY29udGFpbmVyLFxyXG5tYXQtc2lkZW5hdiB7XHJcbiAgICBoZWlnaHQ6IDEwMDtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG5cclxubWF0LXNpZGVuYXYge1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG59XHJcblxyXG4uc2l0ZS1uYXYge1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogcmdiKDEyMiwgMTg0LCAyNTUpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcclxuICAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xyXG4gICAgICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcclxuICAgIH1cclxufVxyXG5cclxuLm5hdi1pY29uIHtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6IHJnYigyNTUsIDEyMiwgMTIyKSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XHJcbiAgICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XHJcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcclxuICAgICAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XHJcbiAgICB9XHJcbn0iXX0= */"] });


/***/ }),

/***/ "lCy9":
/*!***************************************************************!*\
  !*** ./src/app/components/search-bar/search-bar.component.ts ***!
  \***************************************************************/
/*! exports provided: SearchBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBarComponent", function() { return SearchBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");








class SearchBarComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() { }
    onSubmit(form) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.router.navigate(['search', form.value.search]);
        });
    }
    onPress() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.router.navigate(['']);
        });
    }
    userLogin() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.router.navigate(['/login']);
        });
    }
    userRegister() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.router.navigate(['/register']);
        });
    }
}
SearchBarComponent.ɵfac = function SearchBarComponent_Factory(t) { return new (t || SearchBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
SearchBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SearchBarComponent, selectors: [["app-search-bar"]], decls: 10, vars: 0, consts: [["fxLayout", "row", "fxLayoutGap", "10px"], ["mat-flat-button", "", 1, "home-button", 3, "click"], [1, "search-form", 3, "ngSubmit"], ["form", "ngForm"], ["matInput", "", "name", "search", "ngModel", "", "placeholder", "Search 500,000+ games", 1, "search-input"], ["mat-raised-button", "", 1, "login-button", 3, "click"], ["mat-raised-button", "", 1, "signup-button", 3, "click"]], template: function SearchBarComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SearchBarComponent_Template_button_click_1_listener() { return ctx.onPress(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Games");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function SearchBarComponent_Template_form_ngSubmit_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4); return ctx.onSubmit(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SearchBarComponent_Template_button_click_6_listener() { return ctx.userLogin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SearchBarComponent_Template_button_click_8_listener() { return ctx.userRegister(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Signup");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbar"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutGapDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"]], styles: [".search[_ngcontent-%COMP%] {\n  display: flex;\n}\n.search-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 60px;\n  background-color: #323a45;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 4;\n}\n.search-form[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.search-input[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  padding: 10px;\n  width: 300px;\n  height: 35px;\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n  outline: none;\n  border: none;\n  background-color: white;\n}\n.search-button[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  background: #000000;\n  padding: 10px;\n  border-left: 1px solid black;\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n  color: #beb8b8;\n  font-weight: 700;\n  transition-duration: 0.3s;\n  cursor: pointer;\n  text-decoration: none;\n}\n.search-button[_ngcontent-%COMP%]:hover {\n  color: white;\n  background-color: black;\n  border: 1px solid #030303;\n  font-weight: bold;\n}\n.logo[_ngcontent-%COMP%] {\n  display: flex;\n  margin-left: 10px;\n  color: white;\n  font-weight: 700;\n  cursor: pointer;\n  text-decoration: none;\n}\n.home-button[_ngcontent-%COMP%] {\n  display: flex;\n  border: none;\n  outline: none;\n  padding: 10px;\n  border-radius: 5px;\n  color: black;\n  font-weight: 700;\n  transition-duration: 0.3s;\n  cursor: pointer;\n  text-decoration: none;\n}\n.home-button[_ngcontent-%COMP%]:hover {\n  color: white;\n  background-color: #143eb1;\n  border: 1px solid #030303;\n  font-weight: bold;\n}\n.signup-button[_ngcontent-%COMP%] {\n  text-align: center;\n  background-color: black;\n  color: white;\n  width: 60px;\n  padding: 5px;\n}\n.signup-button[_ngcontent-%COMP%]:hover {\n  color: white;\n  background-color: #1e2329;\n  border: 1px solid #030303;\n  font-weight: bold;\n  padding: 10px;\n}\n.login-button[_ngcontent-%COMP%] {\n  text-align: center;\n  background-color: black;\n  color: white;\n  width: 60px;\n  padding: 5px;\n}\n.login-button[_ngcontent-%COMP%]:hover {\n  color: white;\n  background-color: #1e2329;\n  border: 1px solid #030303;\n  font-weight: bold;\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzZWFyY2gtYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQUNKO0FBQUk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0FBRVI7QUFBSTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFFUjtBQUFJO0VBQ0ksaUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0VBQ0EsNEJBQUE7RUFDQSwrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7QUFFUjtBQUFJO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0VBQ0EsK0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQUVSO0FBRFE7RUFDSSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0FBR1o7QUFFQTtFQUNJLGFBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQUNKO0FBRUE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQUNKO0FBQUk7RUFDSSxZQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0FBRVI7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFDSjtBQUFJO0VBQ0ksWUFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7QUFFUjtBQUVBO0VBQ0ksa0JBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNKO0FBQUk7RUFDSSxZQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtBQUVSIiwiZmlsZSI6InNlYXJjaC1iYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VhcmNoIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAmLWNvbnRhaW5lciB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMjNhNDU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgei1pbmRleDogNDtcclxuICAgIH1cclxuICAgICYtZm9ybSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMjAwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB9XHJcbiAgICAmLWlucHV0IHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcclxuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbiAgICAmLWJ1dHRvbiB7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzAwMDAwMDtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgYmxhY2s7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcclxuICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xyXG4gICAgICAgIGNvbG9yOiByZ2IoMTkwLCAxODQsIDE4NCk7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDMsIDMsIDMpO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5sb2dvIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5ob21lLWJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBjb2xvcjogcmdiKDAsIDAsIDApO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMCwgNjIsIDE3Nyk7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDMsIDMsIDMpO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG59XHJcblxyXG4uc2lnbnVwLWJ1dHRvbiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB3aWR0aDogNjBweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDMwLCAzNSwgNDEpO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigzLCAzLCAzKTtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4ubG9naW4tYnV0dG9uIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzAsIDM1LCA0MSk7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDMsIDMsIDMpO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB9XHJcbn0iXX0= */"] });


/***/ }),

/***/ "tIkO":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "ccyI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



// import { Observable } from 'rxjs';
//
// implements CanActivate, CanActivateChild, CanDeactivate<unknown>, CanLoad
//
class AuthGuard {
    constructor(_authService, _router) {
        this._authService = _authService;
        this._router = _router;
    }
    canActivate() {
        if (this._authService.loggedIn()) {
            return true;
        }
        else {
            this._router.navigate(['/login']);
            return false;
        }
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "umHo":
/*!*******************************************************!*\
  !*** ./src/app/navigation/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../auth.service */ "ccyI");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");














function HeaderComponent_button_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Login ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HeaderComponent_button_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Signup ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HeaderComponent_button_21_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_button_21_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.onLogout(); })("click", function HeaderComponent_button_21_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6._authService.logoutUser(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Logout ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class HeaderComponent {
    constructor(router, _authService, _snackBar) {
        this.router = router;
        this._authService = _authService;
        this._snackBar = _snackBar;
        this.sidenavToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() { }
    onToggleSidenav() {
        this.sidenavToggle.emit();
    }
    onSubmit(form) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.router.navigate(['search', form.value.search]);
        });
    }
    selected() {
        this.router.navigate(['']);
    }
    onLogout() {
        this._snackBar.open('Logged Out', 'Clear', { duration: 3000 });
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], outputs: { sidenavToggle: "sidenavToggle" }, decls: 22, vars: 3, consts: [["color", "primary"], ["fxShow.xs", "", "fxShow.sm", "", "fxHide.gt-sm", ""], ["mat-icon-button", "", 3, "click"], ["mat-raised-button", "", "color", "primary", "routerLink", ""], ["fxFlex", "", "fxLayout", "", "fxLayoutAlign", "flex-end center", "fxHide.xs", "", "fxHide.sm", ""], ["fxLayout", "", "fxLayoutGap", "20px", 1, "navigation-items"], ["mat-raised-button", "", "color", "primary", "routerLink", "/home", 1, "header-button", 3, "click"], [1, "search-form", 3, "ngSubmit"], ["form", "ngForm"], ["matInput", "", "name", "search", "ngModel", "", "placeholder", "Search 500,000+ games", 1, "search-input"], ["mat-raised-button", "", "color", "primary", 1, "search-button", 3, "click"], ["class", "header-button", "mat-raised-button", "", "color", "primary", "routerLink", "/login", 4, "ngIf"], ["class", "header-button", "mat-raised-button", "", "color", "primary", "routerLink", "/register", 4, "ngIf"], ["class", "header-button", "mat-raised-button", "", "color", "primary", "routerLink", "", 3, "click", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", "routerLink", "/login", 1, "header-button"], ["mat-raised-button", "", "color", "primary", "routerLink", "/register", 1, "header-button"], ["mat-raised-button", "", "color", "primary", "routerLink", "", 1, "header-button", 3, "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_2_listener() { return ctx.onToggleSidenav(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "image_search");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Gamepedia ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_12_listener() { return ctx._authService.notLogged(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "form", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function HeaderComponent_Template_form_ngSubmit_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](15); return ctx.onSubmit(_r0); })("ngSubmit", function HeaderComponent_Template_form_ngSubmit_14_listener() { return ctx._authService.notLogged(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_17_listener() { return ctx._authService.notLogged(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " Search ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, HeaderComponent_button_19_Template, 2, 0, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, HeaderComponent_button_20_Template, 2, 0, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, HeaderComponent_button_21_Template, 2, 0, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx._authService.loggedIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx._authService.loggedIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx._authService.loggedIn());
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbar"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_6__["DefaultShowHideDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutGapDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgForm"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"]], styles: ["mat-sidebar-container[_ngcontent-%COMP%], mat-sidebar-container[_ngcontent-%COMP%], mat-sidenav[_ngcontent-%COMP%] {\n  height: 100;\n  width: 200px;\n}\n\nmat-sidenav[_ngcontent-%COMP%] {\n  width: 200px;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: white;\n}\n\na[_ngcontent-%COMP%]:hover, a[_ngcontent-%COMP%]:active {\n  color: lightblue;\n}\n\n.navigation-items[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\n.nav-icon[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding-left: 6px;\n}\n\n.body[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.search-form[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.search-input[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  padding: 10px;\n  width: 300px;\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n  outline: none;\n  border: none;\n  background-color: white;\n  color: black;\n}\n\n.search-button[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  padding: 10px;\n  border-top-right-radius: 5px;\n  border-top-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n  border-bottom-left-radius: 5px;\n  font-weight: 400;\n  transition-duration: 0.3s;\n  text-decoration: none;\n}\n\n.search-button[_ngcontent-%COMP%]:hover {\n  color: white;\n  background-color: #4d379e;\n  font-weight: 500;\n}\n\n.header-button[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  padding: 10px;\n  border-top-right-radius: 5px;\n  border-top-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n  border-bottom-left-radius: 5px;\n  font-weight: 400;\n  transition-duration: 0.3s;\n  text-decoration: none;\n}\n\n.header-button[_ngcontent-%COMP%]:hover {\n  color: white;\n  font-weight: 500;\n  background-color: #6d4edf;\n  box-shadow: 4px 3px 11px 6px #8ea8ac;\n  transform: translateX(-3px);\n  -webkit-transform: translateX(-3px);\n  -moz-transform: translateX(-3px);\n  -ms-transform: translateX(-3px);\n  -o-transform: translateX(-3px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztFQUdJLFdBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTs7RUFFSSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQUNKOztBQUVBO0VBQ0kscUJBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0EsOEJBQUE7RUFDQSw0QkFBQTtFQUNBLCtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSwrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FBQ0o7O0FBQUk7RUFDSSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQUVSOztBQUVBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLCtCQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7QUFDSjs7QUFBSTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0NBQUE7RUFDQSwyQkFBQTtFQUNBLG1DQUFBO0VBQ0EsZ0NBQUE7RUFDQSwrQkFBQTtFQUNBLDhCQUFBO0FBRVIiLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LXNpZGViYXItY29udGFpbmVyLFxyXG5tYXQtc2lkZWJhci1jb250YWluZXIsXHJcbm1hdC1zaWRlbmF2IHtcclxuICAgIGhlaWdodDogMTAwO1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG59XHJcblxyXG5tYXQtc2lkZW5hdiB7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbn1cclxuXHJcbmEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5hOmhvdmVyLFxyXG5hOmFjdGl2ZSB7XHJcbiAgICBjb2xvcjogbGlnaHRibHVlO1xyXG59XHJcblxyXG4ubmF2aWdhdGlvbi1pdGVtcyB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuLm5hdi1pY29uIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmctbGVmdDogNnB4O1xyXG59XHJcblxyXG4uYm9keSB7XHJcbiAgICBoZWlnaHQ6IDEwMCVcclxufVxyXG5cclxuLnNlYXJjaC1mb3JtIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uc2VhcmNoLWlucHV0IHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIGNvbG9yOiByZ2IoMCwgMCwgMCk7XHJcbn1cclxuXHJcbi5zZWFyY2gtYnV0dG9uIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDc3LCA1NSwgMTU4KTtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgfVxyXG59XHJcblxyXG4uaGVhZGVyLWJ1dHRvbiB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwOSwgNzgsIDIyMyk7XHJcbiAgICAgICAgYm94LXNoYWRvdzogNHB4IDNweCAxMXB4IDZweCByZ2IoMTQyLCAxNjgsIDE3Mik7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0zcHgpO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0zcHgpO1xyXG4gICAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0zcHgpO1xyXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTNweCk7XHJcbiAgICAgICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0zcHgpO1xyXG4gICAgfVxyXG59Il19 */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register/register.component */ "1W4x");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./homepage/homepage.component */ "Oh3b");
/* harmony import */ var _components_details_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/details/details.component */ "QVFe");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth.guard */ "tIkO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");









const routes = [
    { path: 'default', component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_4__["HomepageComponent"] },
    { path: '', component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_4__["HomepageComponent"] },
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
    {
        path: 'search/:game-search',
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]],
    },
    {
        path: 'details/:id',
        component: _components_details_details_component__WEBPACK_IMPORTED_MODULE_5__["DetailsComponent"],
    },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "vtpD":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "ccyI");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "bTqV");












function LoginComponent_mat_error_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Empty Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_mat_error_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Invalid Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class LoginComponent {
    constructor(_auth, _snackBar, _router) {
        this._auth = _auth;
        this._snackBar = _snackBar;
        this._router = _router;
        this.loginUserData = { email: '', password: '' };
    }
    ngOnInit() { }
    loginUser() {
        this._auth.loginUser(this.loginUserData).subscribe((res) => {
            localStorage.setItem('token', res.token);
            this._snackBar.open('Login Successful!', 'Clear', { duration: 3000 });
            this._router.navigate(['/home']);
        }, (err) => console.error(err));
    }
    onSubmit(form) { }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 33, vars: 6, consts: [["fxFlex", "", "fxLayout", "", "fxLayoutAlign", "center center"], ["fxFlex", "", "fxLayout", "row", "fxLayoutAlign", "center  center"], [1, "signup-form"], ["fxFlex", "", "fxLayout", "column", "fxLayoutAlign", "center  center"], ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "container", "signup-card"], ["appearance", "fill", "fxLayout", "column", "fxLayoutAlign", "center center", 1, "card-header"], [1, "row"], ["appearance", "outline", "fxLayout", "column", "fxLayoutAlign", "center center", "fxLayoutGap", "10px", 3, "ngSubmit"], ["f", "ngForm"], ["appearance", "outline"], ["name", "email", "matInput", "", "type", "email", "placeholder", "Your email", "ngModel", "", "email", "", "required", "", 3, "ngModel", "ngModelChange"], ["emailInput", "ngModel"], ["matSuffix", ""], [4, "ngIf"], ["appearance", "outline", "hintLabel", "Should be atleast 6 characters long"], ["name", "password", "matInput", "", "type", "password", "placeholder", "Your password", "ngModel", "", "required", "", "minLength", "6", 3, "ngModel", "ngModelChange"], ["pwInput", "ngModel"], ["align", "end"], ["type", "submit", "id", "submit", "mat-flat-button", "", 1, "submit-btn", 2, "margin-top", "20px", 3, "disabled", "click"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-header", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Login with your credentials ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10); return ctx.onSubmit(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Enter Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_14_listener($event) { return ctx.loginUserData.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, LoginComponent_mat_error_18_Template, 2, 0, "mat-error", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, LoginComponent_mat_error_19_Template, 2, 0, "mat-error", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-form-field", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Enter Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_23_listener($event) { return ctx.loginUserData.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-hint", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Small Password!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_31_listener() { return ctx._auth.wrongPassword(); })("click", function LoginComponent_Template_button_click_31_listener() { return ctx.loginUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Login ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.loginUserData.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_r1.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.loginUserData.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _r4.value == null ? null : _r4.value.length, " / 6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r0.invalid);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutAlignDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutGapDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["EmailValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatSuffix"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatHint"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatError"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"]], styles: ["p[_ngcontent-%COMP%] {\n  text-align: center !important;\n}\n@media only screen and (max-width: 599px) {\n  mat-card[_ngcontent-%COMP%] {\n    background-color: white !important;\n    color: black !important;\n    width: 250px !important;\n    height: 400px;\n  }\n  mat-card[_ngcontent-%COMP%]:hover {\n    font-weight: 500;\n    box-shadow: 4px 3px 11px 6px #8ea8ac;\n    transform: translateY(-3px);\n    -webkit-transform: translateY(-3px);\n    -moz-transform: translateY(-3px);\n    -ms-transform: translateY(-3px);\n    -o-transform: translateY(-3px);\n  }\n\n  mat-form[_ngcontent-%COMP%] {\n    margin-bottom: 2em;\n  }\n\n  .signup-form[_ngcontent-%COMP%] {\n    margin-top: 3%;\n  }\n\n  .submit-btn[_ngcontent-%COMP%] {\n    margin-top: 3%;\n    color: white !important;\n    background-color: #6d4edf !important;\n  }\n  .submit-btn[_ngcontent-%COMP%]:hover {\n    font-weight: 500;\n    box-shadow: 2px 1px 8px 3px #2e46d1;\n    transform: translateY(-3px);\n    -webkit-transform: translateY(-3px);\n    -moz-transform: translateY(-3px);\n    -ms-transform: translateY(-3px);\n    -o-transform: translateY(-3px);\n  }\n\n  .card-header[_ngcontent-%COMP%] {\n    margin-top: 8% !important;\n    margin: auto;\n    border-top-left-radius: 5px;\n    border-bottom-left-radius: 5px;\n    border-top-right-radius: 5px;\n    border-bottom-right-radius: 5px;\n    text-align: center;\n    color: white;\n    font-weight: 400;\n    background-color: #6d4edf;\n  }\n  .card-header[_ngcontent-%COMP%]:hover {\n    font-weight: 500;\n    box-shadow: 2px 1px 8px 3px #3e45a1;\n    transform: translateY(-3px);\n    -webkit-transform: translateY(-3px);\n    -moz-transform: translateY(-3px);\n    -ms-transform: translateY(-3px);\n    -o-transform: translateY(-3px);\n  }\n}\n\n@media only screen and (min-width: 600px) and (max-width: 959px) {\n  mat-card[_ngcontent-%COMP%] {\n    background-color: white !important;\n    color: black !important;\n    width: 400px !important;\n    height: 400px;\n  }\n  mat-card[_ngcontent-%COMP%]:hover {\n    font-weight: 500;\n    box-shadow: 4px 3px 11px 6px #8ea8ac;\n    transform: translateY(-3px);\n    -webkit-transform: translateY(-3px);\n    -moz-transform: translateY(-3px);\n    -ms-transform: translateY(-3px);\n    -o-transform: translateY(-3px);\n  }\n\n  mat-form[_ngcontent-%COMP%] {\n    margin-bottom: 2em;\n  }\n\n  .signup-form[_ngcontent-%COMP%] {\n    margin-top: 3%;\n  }\n\n  .submit-btn[_ngcontent-%COMP%] {\n    margin-top: 3%;\n    color: white !important;\n    background-color: #6d4edf !important;\n  }\n  .submit-btn[_ngcontent-%COMP%]:hover {\n    font-weight: 500;\n    box-shadow: 2px 1px 8px 3px #2e46d1;\n    transform: translateY(-3px);\n    -webkit-transform: translateY(-3px);\n    -moz-transform: translateY(-3px);\n    -ms-transform: translateY(-3px);\n    -o-transform: translateY(-3px);\n  }\n\n  .card-header[_ngcontent-%COMP%] {\n    margin-top: 8% !important;\n    margin: auto;\n    border-top-left-radius: 5px;\n    border-bottom-left-radius: 5px;\n    border-top-right-radius: 5px;\n    border-bottom-right-radius: 5px;\n    text-align: center;\n    color: white;\n    font-weight: 400;\n    background-color: #6d4edf;\n  }\n  .card-header[_ngcontent-%COMP%]:hover {\n    font-weight: 500;\n    box-shadow: 2px 1px 8px 3px #3e45a1;\n    transform: translateY(-3px);\n    -webkit-transform: translateY(-3px);\n    -moz-transform: translateY(-3px);\n    -ms-transform: translateY(-3px);\n    -o-transform: translateY(-3px);\n  }\n}\n\n@media only screen and (min-width: 960px) and (max-width: 1279px) {\n  mat-card[_ngcontent-%COMP%] {\n    background-color: white !important;\n    color: black !important;\n    height: 400px;\n  }\n  mat-card[_ngcontent-%COMP%]:hover {\n    font-weight: 500;\n    box-shadow: 4px 3px 11px 6px #8ea8ac;\n    transform: translateY(-3px);\n    -webkit-transform: translateY(-3px);\n    -moz-transform: translateY(-3px);\n    -ms-transform: translateY(-3px);\n    -o-transform: translateY(-3px);\n  }\n\n  mat-form[_ngcontent-%COMP%] {\n    margin-bottom: 2em;\n  }\n\n  .signup-form[_ngcontent-%COMP%] {\n    margin-top: 3%;\n  }\n\n  .submit-btn[_ngcontent-%COMP%] {\n    margin-top: 3%;\n    color: white !important;\n    background-color: #6d4edf !important;\n  }\n  .submit-btn[_ngcontent-%COMP%]:hover {\n    font-weight: 500;\n    box-shadow: 2px 1px 8px 3px #2e46d1;\n    transform: translateY(-3px);\n    -webkit-transform: translateY(-3px);\n    -moz-transform: translateY(-3px);\n    -ms-transform: translateY(-3px);\n    -o-transform: translateY(-3px);\n  }\n\n  .card-header[_ngcontent-%COMP%] {\n    margin-top: 8% !important;\n    margin: auto;\n    border-top-left-radius: 5px;\n    border-bottom-left-radius: 5px;\n    border-top-right-radius: 5px;\n    border-bottom-right-radius: 5px;\n    text-align: center;\n    color: white;\n    font-weight: 400;\n    background-color: #6d4edf;\n  }\n  .card-header[_ngcontent-%COMP%]:hover {\n    font-weight: 500;\n    box-shadow: 2px 1px 8px 3px #3e45a1;\n    transform: translateY(-3px);\n    -webkit-transform: translateY(-3px);\n    -moz-transform: translateY(-3px);\n    -ms-transform: translateY(-3px);\n    -o-transform: translateY(-3px);\n  }\n}\n\n@media only screen and (min-width: 1280px) and (max-width: 1919px) {\n  mat-card[_ngcontent-%COMP%] {\n    background-color: white !important;\n    color: black !important;\n  }\n  mat-card[_ngcontent-%COMP%]:hover {\n    font-weight: 500;\n    box-shadow: 4px 3px 11px 6px #8ea8ac;\n    transform: translateY(-3px);\n    -webkit-transform: translateY(-3px);\n    -moz-transform: translateY(-3px);\n    -ms-transform: translateY(-3px);\n    -o-transform: translateY(-3px);\n  }\n\n  mat-form[_ngcontent-%COMP%] {\n    margin-bottom: 2em;\n  }\n\n  .signup-form[_ngcontent-%COMP%] {\n    margin-top: 3%;\n  }\n\n  .submit-btn[_ngcontent-%COMP%] {\n    margin-top: 3%;\n    color: white !important;\n    background-color: #6d4edf !important;\n  }\n  .submit-btn[_ngcontent-%COMP%]:hover {\n    font-weight: 500;\n    box-shadow: 2px 1px 8px 3px #2e46d1;\n    transform: translateY(-3px);\n    -webkit-transform: translateY(-3px);\n    -moz-transform: translateY(-3px);\n    -ms-transform: translateY(-3px);\n    -o-transform: translateY(-3px);\n  }\n\n  .card-header[_ngcontent-%COMP%] {\n    margin-top: 8% !important;\n    margin: auto;\n    border-top-left-radius: 5px;\n    border-bottom-left-radius: 5px;\n    border-top-right-radius: 5px;\n    border-bottom-right-radius: 5px;\n    text-align: center;\n    color: white;\n    font-weight: 400;\n    background-color: #6d4edf;\n  }\n  .card-header[_ngcontent-%COMP%]:hover {\n    font-weight: 500;\n    box-shadow: 2px 1px 8px 3px #3e45a1;\n    transform: translateY(-3px);\n    -webkit-transform: translateY(-3px);\n    -moz-transform: translateY(-3px);\n    -ms-transform: translateY(-3px);\n    -o-transform: translateY(-3px);\n  }\n}\n\n@media only screen and (min-width: 1920px) and (max-width: 5000px) {\n  mat-card[_ngcontent-%COMP%] {\n    background-color: white !important;\n    color: black !important;\n    border-top-right-radius: 10px;\n    border-top-left-radius: 10px;\n    border-bottom-right-radius: 10px;\n    border-bottom-left-radius: 10px;\n  }\n  mat-card[_ngcontent-%COMP%]:hover {\n    font-weight: 500;\n    box-shadow: 4px 3px 11px 6px #8ea8ac;\n    transform: translateY(-3px);\n    -webkit-transform: translateY(-3px);\n    -moz-transform: translateY(-3px);\n    -ms-transform: translateY(-3px);\n    -o-transform: translateY(-3px);\n  }\n\n  mat-form[_ngcontent-%COMP%] {\n    margin-bottom: 2em;\n  }\n\n  .signup-form[_ngcontent-%COMP%] {\n    margin-top: 3%;\n  }\n\n  .submit-btn[_ngcontent-%COMP%] {\n    margin-top: 3%;\n    color: white !important;\n    background-color: #6d4edf !important;\n  }\n  .submit-btn[_ngcontent-%COMP%]:hover {\n    font-weight: 500;\n    box-shadow: 2px 1px 8px 3px #2e46d1;\n    transform: translateY(-3px);\n    -webkit-transform: translateY(-3px);\n    -moz-transform: translateY(-3px);\n    -ms-transform: translateY(-3px);\n    -o-transform: translateY(-3px);\n  }\n\n  .card-header[_ngcontent-%COMP%] {\n    margin-top: 8% !important;\n    margin: auto;\n    border-top-left-radius: 5px;\n    border-bottom-left-radius: 5px;\n    border-top-right-radius: 5px;\n    border-bottom-right-radius: 5px;\n    text-align: center;\n    color: white;\n    font-weight: 400;\n    background-color: #6d4edf;\n  }\n  .card-header[_ngcontent-%COMP%]:hover {\n    font-weight: 500;\n    box-shadow: 2px 1px 8px 3px #3e45a1;\n    transform: translateY(-3px);\n    -webkit-transform: translateY(-3px);\n    -moz-transform: translateY(-3px);\n    -ms-transform: translateY(-3px);\n    -o-transform: translateY(-3px);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHdCQUFBO0FBRUE7RUFDSSw2QkFBQTtBQUFKO0FBR0E7RUFDSTtJQUNJLGtDQUFBO0lBQ0EsdUJBQUE7SUFDQSx1QkFBQTtJQUNBLGFBQUE7RUFBTjtFQUNNO0lBQ0ksZ0JBQUE7SUFDQSxvQ0FBQTtJQUNBLDJCQUFBO0lBQ0EsbUNBQUE7SUFDQSxnQ0FBQTtJQUNBLCtCQUFBO0lBQ0EsOEJBQUE7RUFDVjs7RUFFRTtJQUVJLGtCQUFBO0VBQU47O0VBUUU7SUFDSSxjQUFBO0VBTE47O0VBVUU7SUFDSSxjQUFBO0lBQ0EsdUJBQUE7SUFDQSxvQ0FBQTtFQVBOO0VBUU07SUFDSSxnQkFBQTtJQUNBLG1DQUFBO0lBQ0EsMkJBQUE7SUFDQSxtQ0FBQTtJQUNBLGdDQUFBO0lBQ0EsK0JBQUE7SUFDQSw4QkFBQTtFQU5WOztFQVNFO0lBQ0kseUJBQUE7SUFDQSxZQUFBO0lBQ0EsMkJBQUE7SUFDQSw4QkFBQTtJQUNBLDRCQUFBO0lBQ0EsK0JBQUE7SUFDQSxrQkFBQTtJQUNBLFlBQUE7SUFDQSxnQkFBQTtJQUNBLHlCQUFBO0VBTk47RUFPTTtJQUNJLGdCQUFBO0lBQ0EsbUNBQUE7SUFDQSwyQkFBQTtJQUNBLG1DQUFBO0lBQ0EsZ0NBQUE7SUFDQSwrQkFBQTtJQUNBLDhCQUFBO0VBTFY7QUFDRjtBQVVBLG1CQUFBO0FBRUE7RUFDSTtJQUNJLGtDQUFBO0lBQ0EsdUJBQUE7SUFDQSx1QkFBQTtJQUNBLGFBQUE7RUFUTjtFQVVNO0lBQ0ksZ0JBQUE7SUFDQSxvQ0FBQTtJQUNBLDJCQUFBO0lBQ0EsbUNBQUE7SUFDQSxnQ0FBQTtJQUNBLCtCQUFBO0lBQ0EsOEJBQUE7RUFSVjs7RUFjRTtJQUVJLGtCQUFBO0VBWk47O0VBaUJFO0lBQ0ksY0FBQTtFQWROOztFQW1CRTtJQUNJLGNBQUE7SUFDQSx1QkFBQTtJQUNBLG9DQUFBO0VBaEJOO0VBaUJNO0lBQ0ksZ0JBQUE7SUFDQSxtQ0FBQTtJQUNBLDJCQUFBO0lBQ0EsbUNBQUE7SUFDQSxnQ0FBQTtJQUNBLCtCQUFBO0lBQ0EsOEJBQUE7RUFmVjs7RUFrQkU7SUFDSSx5QkFBQTtJQUNBLFlBQUE7SUFDQSwyQkFBQTtJQUNBLDhCQUFBO0lBQ0EsNEJBQUE7SUFDQSwrQkFBQTtJQUNBLGtCQUFBO0lBQ0EsWUFBQTtJQUNBLGdCQUFBO0lBQ0EseUJBQUE7RUFmTjtFQWdCTTtJQUNJLGdCQUFBO0lBQ0EsbUNBQUE7SUFDQSwyQkFBQTtJQUNBLG1DQUFBO0lBQ0EsZ0NBQUE7SUFDQSwrQkFBQTtJQUNBLDhCQUFBO0VBZFY7QUFDRjtBQW1CQSxvQkFBQTtBQUVBO0VBQ0k7SUFDSSxrQ0FBQTtJQUNBLHVCQUFBO0lBRUEsYUFBQTtFQW5CTjtFQW9CTTtJQUNJLGdCQUFBO0lBQ0Esb0NBQUE7SUFDQSwyQkFBQTtJQUNBLG1DQUFBO0lBQ0EsZ0NBQUE7SUFDQSwrQkFBQTtJQUNBLDhCQUFBO0VBbEJWOztFQXdCRTtJQUVJLGtCQUFBO0VBdEJOOztFQTJCRTtJQUNJLGNBQUE7RUF4Qk47O0VBNkJFO0lBQ0ksY0FBQTtJQUNBLHVCQUFBO0lBQ0Esb0NBQUE7RUExQk47RUEyQk07SUFDSSxnQkFBQTtJQUNBLG1DQUFBO0lBQ0EsMkJBQUE7SUFDQSxtQ0FBQTtJQUNBLGdDQUFBO0lBQ0EsK0JBQUE7SUFDQSw4QkFBQTtFQXpCVjs7RUE0QkU7SUFDSSx5QkFBQTtJQUNBLFlBQUE7SUFDQSwyQkFBQTtJQUNBLDhCQUFBO0lBQ0EsNEJBQUE7SUFDQSwrQkFBQTtJQUNBLGtCQUFBO0lBQ0EsWUFBQTtJQUNBLGdCQUFBO0lBQ0EseUJBQUE7RUF6Qk47RUEwQk07SUFDSSxnQkFBQTtJQUNBLG1DQUFBO0lBQ0EsMkJBQUE7SUFDQSxtQ0FBQTtJQUNBLGdDQUFBO0lBQ0EsK0JBQUE7SUFDQSw4QkFBQTtFQXhCVjtBQUNGO0FBNkJBLG1CQUFBO0FBRUE7RUFDSTtJQUNJLGtDQUFBO0lBQ0EsdUJBQUE7RUE1Qk47RUErQk07SUFDSSxnQkFBQTtJQUNBLG9DQUFBO0lBQ0EsMkJBQUE7SUFDQSxtQ0FBQTtJQUNBLGdDQUFBO0lBQ0EsK0JBQUE7SUFDQSw4QkFBQTtFQTdCVjs7RUFtQ0U7SUFFSSxrQkFBQTtFQWpDTjs7RUFzQ0U7SUFDSSxjQUFBO0VBbkNOOztFQXdDRTtJQUNJLGNBQUE7SUFDQSx1QkFBQTtJQUNBLG9DQUFBO0VBckNOO0VBc0NNO0lBQ0ksZ0JBQUE7SUFDQSxtQ0FBQTtJQUNBLDJCQUFBO0lBQ0EsbUNBQUE7SUFDQSxnQ0FBQTtJQUNBLCtCQUFBO0lBQ0EsOEJBQUE7RUFwQ1Y7O0VBdUNFO0lBQ0kseUJBQUE7SUFDQSxZQUFBO0lBQ0EsMkJBQUE7SUFDQSw4QkFBQTtJQUNBLDRCQUFBO0lBQ0EsK0JBQUE7SUFDQSxrQkFBQTtJQUNBLFlBQUE7SUFDQSxnQkFBQTtJQUNBLHlCQUFBO0VBcENOO0VBcUNNO0lBQ0ksZ0JBQUE7SUFDQSxtQ0FBQTtJQUNBLDJCQUFBO0lBQ0EsbUNBQUE7SUFDQSxnQ0FBQTtJQUNBLCtCQUFBO0lBQ0EsOEJBQUE7RUFuQ1Y7QUFDRjtBQXdDQSx3QkFBQTtBQUVBO0VBQ0k7SUFDSSxrQ0FBQTtJQUNBLHVCQUFBO0lBR0EsNkJBQUE7SUFDQSw0QkFBQTtJQUNBLGdDQUFBO0lBQ0EsK0JBQUE7RUF6Q047RUEwQ007SUFDSSxnQkFBQTtJQUNBLG9DQUFBO0lBQ0EsMkJBQUE7SUFDQSxtQ0FBQTtJQUNBLGdDQUFBO0lBQ0EsK0JBQUE7SUFDQSw4QkFBQTtFQXhDVjs7RUE4Q0U7SUFFSSxrQkFBQTtFQTVDTjs7RUFpREU7SUFDSSxjQUFBO0VBOUNOOztFQW1ERTtJQUNJLGNBQUE7SUFDQSx1QkFBQTtJQUNBLG9DQUFBO0VBaEROO0VBaURNO0lBQ0ksZ0JBQUE7SUFDQSxtQ0FBQTtJQUNBLDJCQUFBO0lBQ0EsbUNBQUE7SUFDQSxnQ0FBQTtJQUNBLCtCQUFBO0lBQ0EsOEJBQUE7RUEvQ1Y7O0VBa0RFO0lBQ0kseUJBQUE7SUFDQSxZQUFBO0lBQ0EsMkJBQUE7SUFDQSw4QkFBQTtJQUNBLDRCQUFBO0lBQ0EsK0JBQUE7SUFDQSxrQkFBQTtJQUNBLFlBQUE7SUFDQSxnQkFBQTtJQUNBLHlCQUFBO0VBL0NOO0VBZ0RNO0lBQ0ksZ0JBQUE7SUFDQSxtQ0FBQTtJQUNBLDJCQUFBO0lBQ0EsbUNBQUE7SUFDQSxnQ0FBQTtJQUNBLCtCQUFBO0lBQ0EsOEJBQUE7RUE5Q1Y7QUFDRiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEV4dHJhIHNtYWxsIGRldmljZXMgKi9cclxuXHJcbnAge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTk5cHgpIHtcclxuICAgIG1hdC1jYXJkIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSkgIWltcG9ydGFudDtcclxuICAgICAgICBjb2xvcjogcmdiKDAsIDAsIDApICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgd2lkdGg6IDI1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgaGVpZ2h0OiA0MDBweDtcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogNHB4IDNweCAxMXB4IDZweCByZ2IoMTQyLCAxNjgsIDE3Mik7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcclxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XHJcbiAgICAgICAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xyXG4gICAgICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xyXG4gICAgICAgICAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbWF0LWZvcm0ge1xyXG4gICAgICAgIC8vIHdpZHRoOiA2MDBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyZW07XHJcbiAgICB9XHJcbiAgICBtYXQtZm9ybS1maWVsZCB7XHJcbiAgICAgICAgLy8gd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICBtYXQtY2hlY2tib3gge1xyXG4gICAgICAgIC8vIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLnNpZ251cC1mb3JtIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAzJTtcclxuICAgIH1cclxuICAgIC5zaWdudXAtY2FyZCB7XHJcbiAgICAgICAgLy8gd2lkdGg6IDUwJTtcclxuICAgIH1cclxuICAgIC5zdWJtaXQtYnRuIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAzJTtcclxuICAgICAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwOSwgNzgsIDIyMykgIWltcG9ydGFudDtcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMnB4IDFweCA4cHggM3B4IHJnYig0NiwgNzAsIDIwOSk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcclxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XHJcbiAgICAgICAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xyXG4gICAgICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xyXG4gICAgICAgICAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmNhcmQtaGVhZGVyIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA4JSAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xyXG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDksIDc4LCAyMjMpO1xyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAycHggMXB4IDhweCAzcHggcmdiKDYyLCA2OSwgMTYxKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xyXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcclxuICAgICAgICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XHJcbiAgICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XHJcbiAgICAgICAgICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vKiBTbWFsbCBkZXZpY2VzICAqL1xyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDk1OXB4KSB7XHJcbiAgICBtYXQtY2FyZCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgY29sb3I6IHJnYigwLCAwLCAwKSAhaW1wb3J0YW50O1xyXG4gICAgICAgIHdpZHRoOiA0MDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDRweCAzcHggMTFweCA2cHggcmdiKDE0MiwgMTY4LCAxNzIpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XHJcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xyXG4gICAgICAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcclxuICAgICAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcclxuICAgICAgICAgICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG1hdC1mb3JtLWZpZWxkIHtcclxuICAgICAgICAvLyB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIG1hdC1mb3JtIHtcclxuICAgICAgICAvLyB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyZW07XHJcbiAgICB9XHJcbiAgICAvLyBtYXQtY2hlY2tib3gge1xyXG4gICAgLy8gICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLy8gfVxyXG4gICAgLnNpZ251cC1mb3JtIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAzJTtcclxuICAgIH1cclxuICAgIC5zaWdudXAtY2FyZCB7XHJcbiAgICAgICAgLy8gd2lkdGg6IDUwJTtcclxuICAgIH1cclxuICAgIC5zdWJtaXQtYnRuIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAzJTtcclxuICAgICAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwOSwgNzgsIDIyMykgIWltcG9ydGFudDtcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMnB4IDFweCA4cHggM3B4IHJnYig0NiwgNzAsIDIwOSk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcclxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XHJcbiAgICAgICAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xyXG4gICAgICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xyXG4gICAgICAgICAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmNhcmQtaGVhZGVyIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA4JSAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xyXG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDksIDc4LCAyMjMpO1xyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAycHggMXB4IDhweCAzcHggcmdiKDYyLCA2OSwgMTYxKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xyXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcclxuICAgICAgICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XHJcbiAgICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XHJcbiAgICAgICAgICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vKiBNZWRpdW0gZGV2aWNlcyAgKi9cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTYwcHgpIGFuZCAobWF4LXdpZHRoOiAxMjc5cHgpIHtcclxuICAgIG1hdC1jYXJkIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSkgIWltcG9ydGFudDtcclxuICAgICAgICBjb2xvcjogcmdiKDAsIDAsIDApICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLy8gd2lkdGg6IDYwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgaGVpZ2h0OiA0MDBweDtcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogNHB4IDNweCAxMXB4IDZweCByZ2IoMTQyLCAxNjgsIDE3Mik7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcclxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XHJcbiAgICAgICAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xyXG4gICAgICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xyXG4gICAgICAgICAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gbWF0LWZvcm0tZmllbGQge1xyXG4gICAgLy8gICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLy8gfVxyXG4gICAgbWF0LWZvcm0ge1xyXG4gICAgICAgIC8vIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJlbTtcclxuICAgIH1cclxuICAgIC8vIG1hdC1jaGVja2JveCB7XHJcbiAgICAvLyAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAvLyB9XHJcbiAgICAuc2lnbnVwLWZvcm0ge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDMlO1xyXG4gICAgfVxyXG4gICAgLy8gLnNpZ251cC1jYXJkIHtcclxuICAgIC8vICAgICB3aWR0aDogNTAlO1xyXG4gICAgLy8gfVxyXG4gICAgLnN1Ym1pdC1idG4ge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDMlO1xyXG4gICAgICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSkgIWltcG9ydGFudDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTA5LCA3OCwgMjIzKSAhaW1wb3J0YW50O1xyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAycHggMXB4IDhweCAzcHggcmdiKDQ2LCA3MCwgMjA5KTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xyXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcclxuICAgICAgICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XHJcbiAgICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XHJcbiAgICAgICAgICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuY2FyZC1oZWFkZXIge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDglICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcclxuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcclxuICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwOSwgNzgsIDIyMyk7XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDJweCAxcHggOHB4IDNweCByZ2IoNjIsIDY5LCAxNjEpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XHJcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xyXG4gICAgICAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcclxuICAgICAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcclxuICAgICAgICAgICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcbi8qIExhcmdlIGRldmljZXMgICovXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyODBweCkgYW5kIChtYXgtd2lkdGg6IDE5MTlweCkge1xyXG4gICAgbWF0LWNhcmQge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGNvbG9yOiByZ2IoMCwgMCwgMCkgIWltcG9ydGFudDtcclxuICAgICAgICAvLyB3aWR0aDogODAwcHggIWltcG9ydGFudDtcclxuICAgICAgICAvLyBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiA0cHggM3B4IDExcHggNnB4IHJnYigxNDIsIDE2OCwgMTcyKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xyXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcclxuICAgICAgICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XHJcbiAgICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XHJcbiAgICAgICAgICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBtYXQtZm9ybS1maWVsZCB7XHJcbiAgICAvLyAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAvLyB9XHJcbiAgICBtYXQtZm9ybSB7XHJcbiAgICAgICAgLy8gd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMmVtO1xyXG4gICAgfVxyXG4gICAgLy8gbWF0LWNoZWNrYm94IHtcclxuICAgIC8vICAgICB3aWR0aDogMTAwJTtcclxuICAgIC8vIH1cclxuICAgIC5zaWdudXAtZm9ybSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMyU7XHJcbiAgICB9XHJcbiAgICAvLyAuc2lnbnVwLWNhcmQge1xyXG4gICAgLy8gICAgIHdpZHRoOiA1MCU7XHJcbiAgICAvLyB9XHJcbiAgICAuc3VibWl0LWJ0biB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMyU7XHJcbiAgICAgICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDksIDc4LCAyMjMpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDJweCAxcHggOHB4IDNweCByZ2IoNDYsIDcwLCAyMDkpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XHJcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xyXG4gICAgICAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcclxuICAgICAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcclxuICAgICAgICAgICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5jYXJkLWhlYWRlciB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogOCUgIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcclxuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTA5LCA3OCwgMjIzKTtcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMnB4IDFweCA4cHggM3B4IHJnYig2MiwgNjksIDE2MSk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcclxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XHJcbiAgICAgICAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xyXG4gICAgICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xyXG4gICAgICAgICAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLyogRXh0cmEgbGFyZ2UgZGV2aWNlcyAqL1xyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxOTIwcHgpIGFuZCAobWF4LXdpZHRoOiA1MDAwcHgpIHtcclxuICAgIG1hdC1jYXJkIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSkgIWltcG9ydGFudDtcclxuICAgICAgICBjb2xvcjogcmdiKDAsIDAsIDApICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLy8gd2lkdGg6IDQwJTtcclxuICAgICAgICAvLyBoZWlnaHQ6IDQwdmg7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcclxuICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcclxuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiA0cHggM3B4IDExcHggNnB4IHJnYigxNDIsIDE2OCwgMTcyKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xyXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcclxuICAgICAgICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XHJcbiAgICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XHJcbiAgICAgICAgICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBtYXQtZm9ybS1maWVsZCB7XHJcbiAgICAvLyAgICAgd2lkdGg6IDQwdnc7XHJcbiAgICAvLyB9XHJcbiAgICBtYXQtZm9ybSB7XHJcbiAgICAgICAgLy8gd2lkdGg6IDUwJTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyZW07XHJcbiAgICB9XHJcbiAgICAvLyBtYXQtY2hlY2tib3gge1xyXG4gICAgLy8gICAgIHdpZHRoOiA4MCU7XHJcbiAgICAvLyB9XHJcbiAgICAuc2lnbnVwLWZvcm0ge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDMlO1xyXG4gICAgfVxyXG4gICAgLnNpZ251cC1jYXJkIHtcclxuICAgICAgICAvLyB3aWR0aDogNTAlO1xyXG4gICAgfVxyXG4gICAgLnN1Ym1pdC1idG4ge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDMlO1xyXG4gICAgICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSkgIWltcG9ydGFudDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTA5LCA3OCwgMjIzKSAhaW1wb3J0YW50O1xyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAycHggMXB4IDhweCAzcHggcmdiKDQ2LCA3MCwgMjA5KTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xyXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcclxuICAgICAgICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XHJcbiAgICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XHJcbiAgICAgICAgICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuY2FyZC1oZWFkZXIge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDglICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcclxuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcclxuICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwOSwgNzgsIDIyMyk7XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDJweCAxcHggOHB4IDNweCByZ2IoNjIsIDY5LCAxNjEpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XHJcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xyXG4gICAgICAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcclxuICAgICAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcclxuICAgICAgICAgICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map