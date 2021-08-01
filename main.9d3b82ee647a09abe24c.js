(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/WaZ":
/*!********************************************!*\
  !*** ./src/app/auth/store/auth.actions.ts ***!
  \********************************************/
/*! exports provided: LOGIN_START, AUTHENTICATE_SUCCESS, AUTHENTICATE_FAIL, LOGOUT, SIGNUP_START, SIGNUP_SUCCESS, CLEAR_MESSAGES, AUTO_LOGIN, Authenticate_Success, Authenticate_Fail, Logout, Login_Start, Signup_Start, Signup_Success, Clear_Messages, Auto_Login */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_START", function() { return LOGIN_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTHENTICATE_SUCCESS", function() { return AUTHENTICATE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTHENTICATE_FAIL", function() { return AUTHENTICATE_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGOUT", function() { return LOGOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNUP_START", function() { return SIGNUP_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNUP_SUCCESS", function() { return SIGNUP_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAR_MESSAGES", function() { return CLEAR_MESSAGES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTO_LOGIN", function() { return AUTO_LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Authenticate_Success", function() { return Authenticate_Success; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Authenticate_Fail", function() { return Authenticate_Fail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logout", function() { return Logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Login_Start", function() { return Login_Start; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Signup_Start", function() { return Signup_Start; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Signup_Success", function() { return Signup_Success; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Clear_Messages", function() { return Clear_Messages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Auto_Login", function() { return Auto_Login; });
const LOGIN_START = `[Authentication] Login Start`;
const AUTHENTICATE_SUCCESS = '[Authentication] Login'; //best naming convention
const AUTHENTICATE_FAIL = `[Authentication] Login Fail`;
const LOGOUT = '[Authentication] Logout';
const SIGNUP_START = `[Authentication] Signup Start`;
const SIGNUP_SUCCESS = `[Authentication] Signup`;
const CLEAR_MESSAGES = `[Authentication] Clear Messages`;
const AUTO_LOGIN = `[Authentication] Auto Login`;
class Authenticate_Success {
    constructor(payload) {
        this.payload = payload;
        this.type = AUTHENTICATE_SUCCESS;
    }
}
class Authenticate_Fail {
    constructor(payload) {
        this.payload = payload;
        this.type = AUTHENTICATE_FAIL;
    }
}
class Logout {
    constructor() {
        this.type = LOGOUT;
    }
}
class Login_Start {
    constructor(payload) {
        this.payload = payload;
        this.type = LOGIN_START;
    }
}
class Signup_Start {
    constructor(payload) {
        this.payload = payload;
        this.type = SIGNUP_START;
    }
}
class Signup_Success {
    constructor() {
        this.type = SIGNUP_SUCCESS;
    }
}
class Clear_Messages {
    constructor() {
        this.type = CLEAR_MESSAGES;
    }
}
class Auto_Login {
    constructor() {
        this.type = AUTO_LOGIN;
    }
}


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Web Dev Bullshit\New folder\Angular\course-project\src\main.ts */"zUnb");


/***/ }),

/***/ "3V6w":
/*!**********************************************!*\
  !*** ./src/app/shared/dropdown.directive.ts ***!
  \**********************************************/
/*! exports provided: DropdownDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownDirective", function() { return DropdownDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class DropdownDirective {
    constructor(elRef) {
        this.elRef = elRef;
        this.opened = false;
    }
    toggleOpen(event) {
        this.opened = this.elRef.nativeElement.contains(event.target) ? !this.opened : false;
    }
}
DropdownDirective.ɵfac = function DropdownDirective_Factory(t) { return new (t || DropdownDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
DropdownDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: DropdownDirective, selectors: [["", "appDropdown", ""]], hostVars: 2, hostBindings: function DropdownDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DropdownDirective_click_HostBindingHandler($event) { return ctx.toggleOpen($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("open", ctx.opened);
    } } });


/***/ }),

/***/ "5AZO":
/*!*****************************************************!*\
  !*** ./src/app/recipe-book/store/recipe.actions.ts ***!
  \*****************************************************/
/*! exports provided: SET_RECIPES, SET_GLOBAL_RECIPES, FETCH_RECIPES, FETCH_GLOBAL_RECIPES, ADD_RECIPE, ADD_GLOBAL_RECIPE, UPDATE_RECIPE, UPDATE_GLOBAL_RECIPE, DELETE_RECIPE, DELETE_GLOBAL_RECIPE, STORE_RECIPES, EXPORT_RECIPES, RESET_RECIPES, SetRecipes, FetchRecipes, AddRecipe, UpdateRecipe, UpdateGlobalRecipe, DeleteRecipe, DeleteGlobalRecipe, StoreRecipes, SetGlobalRecipes, FetchGlobalRecipes, AddGlobalRecipe, ResetRecipes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_RECIPES", function() { return SET_RECIPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_GLOBAL_RECIPES", function() { return SET_GLOBAL_RECIPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_RECIPES", function() { return FETCH_RECIPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_GLOBAL_RECIPES", function() { return FETCH_GLOBAL_RECIPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_RECIPE", function() { return ADD_RECIPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_GLOBAL_RECIPE", function() { return ADD_GLOBAL_RECIPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_RECIPE", function() { return UPDATE_RECIPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_GLOBAL_RECIPE", function() { return UPDATE_GLOBAL_RECIPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_RECIPE", function() { return DELETE_RECIPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_GLOBAL_RECIPE", function() { return DELETE_GLOBAL_RECIPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STORE_RECIPES", function() { return STORE_RECIPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXPORT_RECIPES", function() { return EXPORT_RECIPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESET_RECIPES", function() { return RESET_RECIPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetRecipes", function() { return SetRecipes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchRecipes", function() { return FetchRecipes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddRecipe", function() { return AddRecipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateRecipe", function() { return UpdateRecipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateGlobalRecipe", function() { return UpdateGlobalRecipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteRecipe", function() { return DeleteRecipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteGlobalRecipe", function() { return DeleteGlobalRecipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreRecipes", function() { return StoreRecipes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetGlobalRecipes", function() { return SetGlobalRecipes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchGlobalRecipes", function() { return FetchGlobalRecipes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddGlobalRecipe", function() { return AddGlobalRecipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetRecipes", function() { return ResetRecipes; });
const SET_RECIPES = '[Recipes] Set Recipes';
const SET_GLOBAL_RECIPES = `[Recipe] Set Global Recipes`;
const FETCH_RECIPES = '[Recipes] Fetch Recipes';
const FETCH_GLOBAL_RECIPES = `[Recipe] Fetch Global Recipes`;
const ADD_RECIPE = '[Recipe] Add Recipe';
const ADD_GLOBAL_RECIPE = `[Recipe] Add Global Recipe`;
const UPDATE_RECIPE = '[Recipe] Update Recipe';
const UPDATE_GLOBAL_RECIPE = '[Recipe] Update Global Recipe';
const DELETE_RECIPE = '[Recipe] Delete Recipe';
const DELETE_GLOBAL_RECIPE = '[Recipe] Delete Global Recipe';
const STORE_RECIPES = '[Recipe] Store Recipes';
const EXPORT_RECIPES = `[Recipe] Export Recipes`;
const RESET_RECIPES = `[Recipe] Reset Recipes`;
class SetRecipes {
    constructor(payload) {
        this.payload = payload;
        this.type = SET_RECIPES;
    }
}
class FetchRecipes {
    constructor() {
        this.type = FETCH_RECIPES;
    }
}
class AddRecipe {
    constructor(payload) {
        this.payload = payload;
        this.type = ADD_RECIPE;
    }
}
class UpdateRecipe {
    constructor(payload) {
        this.payload = payload;
        this.type = UPDATE_RECIPE;
    }
}
class UpdateGlobalRecipe {
    constructor(payload) {
        this.payload = payload;
        this.type = UPDATE_GLOBAL_RECIPE;
    }
}
class DeleteRecipe {
    constructor(payload) {
        this.payload = payload;
        this.type = DELETE_RECIPE;
    }
}
class DeleteGlobalRecipe {
    constructor(payload) {
        this.payload = payload;
        this.type = DELETE_GLOBAL_RECIPE;
    }
}
class StoreRecipes {
    constructor() {
        this.type = STORE_RECIPES;
    }
}
class SetGlobalRecipes {
    constructor(payload) {
        this.payload = payload;
        this.type = SET_GLOBAL_RECIPES;
    }
}
class FetchGlobalRecipes {
    constructor() {
        this.type = FETCH_GLOBAL_RECIPES;
    }
}
class AddGlobalRecipe {
    constructor(payload) {
        this.payload = payload;
        this.type = ADD_GLOBAL_RECIPE;
    }
}
class ResetRecipes {
    constructor() {
        this.type = RESET_RECIPES;
    }
}


/***/ }),

/***/ "6jSC":
/*!*********************************************************************!*\
  !*** ./src/app/shared/loading-spinner/loading-spinner.conponent.ts ***!
  \*********************************************************************/
/*! exports provided: LoadingSpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingSpinnerComponent", function() { return LoadingSpinnerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class LoadingSpinnerComponent {
}
LoadingSpinnerComponent.ɵfac = function LoadingSpinnerComponent_Factory(t) { return new (t || LoadingSpinnerComponent)(); };
LoadingSpinnerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoadingSpinnerComponent, selectors: [["app-loading-spinner"]], decls: 5, vars: 0, consts: [[1, "lds-ring"]], template: function LoadingSpinnerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".lds-ring[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    position: relative;\r\n    width: 80px;\r\n    height: 80px;\r\n  }\r\n  .lds-ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    box-sizing: border-box;\r\n    display: block;\r\n    position: absolute;\r\n    width: 64px;\r\n    height: 64px;\r\n    margin: 8px;\r\n    border: 8px solid black;\r\n    border-radius: 50%;\r\n    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\r\n    border-color: black transparent transparent transparent;\r\n  }\r\n  .lds-ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1) {\r\n    animation-delay: -0.45s;\r\n  }\r\n  .lds-ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2) {\r\n    animation-delay: -0.3s;\r\n  }\r\n  .lds-ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3) {\r\n    animation-delay: -0.15s;\r\n  }\r\n  @keyframes lds-ring {\r\n    0% {\r\n      transform: rotate(0deg);\r\n    }\r\n    100% {\r\n      transform: rotate(360deg);\r\n    }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYWRpbmctc3Bpbm5lci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtFQUNkO0VBQ0E7SUFDRSxzQkFBc0I7SUFDdEIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLDhEQUE4RDtJQUM5RCx1REFBdUQ7RUFDekQ7RUFDQTtJQUNFLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0Usc0JBQXNCO0VBQ3hCO0VBQ0E7SUFDRSx1QkFBdUI7RUFDekI7RUFDQTtJQUNFO01BQ0UsdUJBQXVCO0lBQ3pCO0lBQ0E7TUFDRSx5QkFBeUI7SUFDM0I7RUFDRiIsImZpbGUiOiJsb2FkaW5nLXNwaW5uZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sZHMtcmluZyB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIGhlaWdodDogODBweDtcclxuICB9XHJcbiAgLmxkcy1yaW5nIGRpdiB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogNjRweDtcclxuICAgIGhlaWdodDogNjRweDtcclxuICAgIG1hcmdpbjogOHB4O1xyXG4gICAgYm9yZGVyOiA4cHggc29saWQgYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBhbmltYXRpb246IGxkcy1yaW5nIDEuMnMgY3ViaWMtYmV6aWVyKDAuNSwgMCwgMC41LCAxKSBpbmZpbml0ZTtcclxuICAgIGJvcmRlci1jb2xvcjogYmxhY2sgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG4gIC5sZHMtcmluZyBkaXY6bnRoLWNoaWxkKDEpIHtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuNDVzO1xyXG4gIH1cclxuICAubGRzLXJpbmcgZGl2Om50aC1jaGlsZCgyKSB7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjNzO1xyXG4gIH1cclxuICAubGRzLXJpbmcgZGl2Om50aC1jaGlsZCgzKSB7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjE1cztcclxuICB9XHJcbiAgQGtleWZyYW1lcyBsZHMtcmluZyB7XHJcbiAgICAwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICB9XHJcbiAgfVxyXG4gICJdfQ== */"] });


/***/ }),

/***/ "9rNa":
/*!********************************************!*\
  !*** ./src/app/shared/ingredient.model.ts ***!
  \********************************************/
/*! exports provided: Ingredient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ingredient", function() { return Ingredient; });
class Ingredient {
    constructor(name, amount) {
        this.name = name;
        this.amount = amount;
    }
}


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
    firebaseAPIKey: 'AIzaSyAUDHRagvUrIod7l-1fsLtnO7vATAP8DbA'
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

/***/ "EJOq":
/*!*********************************************************!*\
  !*** ./src/app/shopping/store/shopping-list.actions.ts ***!
  \*********************************************************/
/*! exports provided: ADD_INGREDIENT, UPDATE_INGREDIENT, ADD_INGREDIENTS, DELETE_INGREDIENT, START_EDIT, STOP_EDIT, AddIngredient, AddIngredients, UpdateIngredient, DeleteIngredient, StartEdit, StopEdit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_INGREDIENT", function() { return ADD_INGREDIENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_INGREDIENT", function() { return UPDATE_INGREDIENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_INGREDIENTS", function() { return ADD_INGREDIENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_INGREDIENT", function() { return DELETE_INGREDIENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "START_EDIT", function() { return START_EDIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STOP_EDIT", function() { return STOP_EDIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddIngredient", function() { return AddIngredient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddIngredients", function() { return AddIngredients; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateIngredient", function() { return UpdateIngredient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteIngredient", function() { return DeleteIngredient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartEdit", function() { return StartEdit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StopEdit", function() { return StopEdit; });
const ADD_INGREDIENT = '[Shopping List] Add Ingredient';
const UPDATE_INGREDIENT = '[Shopping List] Update Ingredients';
const ADD_INGREDIENTS = '[Shopping List] Add Ingredients';
const DELETE_INGREDIENT = '[Shopping List] Delete Ingredient';
const START_EDIT = '[Shopping List] Start Edit';
const STOP_EDIT = '[Shopping List] Stop Edit';
class AddIngredient {
    constructor(payload) {
        this.payload = payload;
        this.type = ADD_INGREDIENT;
    }
}
class AddIngredients {
    constructor(payload) {
        this.payload = payload;
        this.type = ADD_INGREDIENTS;
    }
}
class UpdateIngredient {
    constructor(payload) {
        this.payload = payload;
        this.type = UPDATE_INGREDIENT;
    }
}
class DeleteIngredient {
    constructor() {
        this.type = DELETE_INGREDIENT;
    }
}
class StartEdit {
    constructor(payload) {
        this.payload = payload;
        this.type = START_EDIT;
    }
}
class StopEdit {
    constructor() {
        this.type = STOP_EDIT;
    }
}


/***/ }),

/***/ "EXEt":
/*!*************************************************!*\
  !*** ./src/app/shared/placeholder.directive.ts ***!
  \*************************************************/
/*! exports provided: PlaceholderDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaceholderDirective", function() { return PlaceholderDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class PlaceholderDirective {
    constructor(veiwContainerRef) {
        this.veiwContainerRef = veiwContainerRef;
    }
}
PlaceholderDirective.ɵfac = function PlaceholderDirective_Factory(t) { return new (t || PlaceholderDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"])); };
PlaceholderDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: PlaceholderDirective, selectors: [["", "appPlaceholder", ""]] });


/***/ }),

/***/ "GXvH":
/*!************************************************!*\
  !*** ./src/app/shared/data-storage.service.ts ***!
  \************************************************/
/*! exports provided: DataStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataStorageService", function() { return DataStorageService; });
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jspdf */ "i680");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _recipe_book_recipe_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../recipe-book/recipe.service */ "ioPk");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../auth/auth.service */ "qXBG");






class DataStorageService {
    constructor(http, recipeService, authService) {
        this.http = http;
        this.recipeService = recipeService;
        this.authService = authService;
        this.pdf = new jspdf__WEBPACK_IMPORTED_MODULE_0__["default"]();
    }
    storeRecipes() {
        const recipes = this.recipeService.getRecipes();
        console.log(recipes);
        this.http.put("https://recipe-book-ddfc0-default-rtdb.firebaseio.com/recipes.json", recipes)
            .subscribe(responseData => { console.log(responseData); });
    }
    fetchRecipes() {
        return this.http.get("https://recipe-book-ddfc0-default-rtdb.firebaseio.com/recipes.json")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(response => {
            return response.map(recipe => {
                return Object.assign(Object.assign({}, recipe), { ingredients: recipe.ingredients ? recipe.ingredients : [] });
            });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(recipes => {
            this.recipeService.setFetchedRecipes(recipes);
        }));
    }
}
DataStorageService.ɵfac = function DataStorageService_Factory(t) { return new (t || DataStorageService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_recipe_book_recipe_service__WEBPACK_IMPORTED_MODULE_4__["RecipeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"])); };
DataStorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: DataStorageService, factory: DataStorageService.ɵfac, providedIn: "root" });


/***/ }),

/***/ "OW08":
/*!********************************************!*\
  !*** ./src/app/auth/store/auth.effects.ts ***!
  \********************************************/
/*! exports provided: AuthEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthEffects", function() { return AuthEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _auth_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.actions */ "/WaZ");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _user_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../user.model */ "ckZ1");
/* harmony import */ var _recipe_book_store_recipe_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../recipe-book/store/recipe.actions */ "5AZO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../auth.service */ "qXBG");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngrx/store */ "l7P3");














const handleAuthentication = ({ expiresIn, email, localId, idToken }) => {
    const expirationDate = new Date(new Date().getTime() + (+expiresIn * 1000));
    const user = new _user_model__WEBPACK_IMPORTED_MODULE_6__["User"](email, localId, idToken, expirationDate);
    localStorage.setItem('userData', JSON.stringify(user));
    return new _auth_actions__WEBPACK_IMPORTED_MODULE_3__["Authenticate_Success"]({ email: email, id: localId, _token: idToken, _tokenExpirationDate: expirationDate, redirect: true });
};
const handleError = (errorRes) => {
    var _a, _b;
    let errorMsg = "An unknown error occurred";
    if (!errorRes.error || !errorRes.error.error)
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _auth_actions__WEBPACK_IMPORTED_MODULE_3__["Authenticate_Fail"](errorMsg));
    switch ((_b = (_a = errorRes.error) === null || _a === void 0 ? void 0 : _a.error) === null || _b === void 0 ? void 0 : _b.message) {
        case 'EMAIL_EXISTS':
            errorMsg = "Email address is already in use";
            break;
        case 'OPERATION_NOT_ALLOWED':
            errorMsg = "Password sign-in is disabled for this project";
            break;
        case 'TOO_MANY_ATTEMPTS_TRY_LATER':
            errorMsg = 'Unusual activity detected. Please try again later';
            break;
        case 'EMAIL_NOT_FOUND':
            errorMsg = "Invalid email";
            break;
        case 'INVALID_PASSWORD':
            errorMsg = "Incorrect password";
            break;
        case 'USER_DISABLED': errorMsg = "This user has been disabled";
    }
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _auth_actions__WEBPACK_IMPORTED_MODULE_3__["Authenticate_Fail"](errorMsg));
};
class AuthEffects {
    constructor(actions$, http, router, authService, store) {
        this.actions$ = actions$;
        this.http = http;
        this.router = router;
        this.authService = authService;
        this.store = store;
        this.authSignup = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_auth_actions__WEBPACK_IMPORTED_MODULE_3__["SIGNUP_START"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((signupAction) => {
            return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].firebaseAPIKey}`, { email: signupAction.payload.email, password: signupAction.payload.password, returnSecureToken: true })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(() => new _auth_actions__WEBPACK_IMPORTED_MODULE_3__["Signup_Success"]()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(errorRes => handleError(errorRes)));
        }));
        this.authLogin = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_auth_actions__WEBPACK_IMPORTED_MODULE_3__["LOGIN_START"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((authData) => {
            return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].firebaseAPIKey}`, { email: authData.payload.email, password: authData.payload.password, returnSecureToken: true })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((resData) => {
                this.authService.setLogoutTimer(+resData.expiresIn * 1000);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((resData) => {
                this.store.dispatch(new _recipe_book_store_recipe_actions__WEBPACK_IMPORTED_MODULE_7__["ResetRecipes"]());
                return handleAuthentication(resData);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(errorRes => handleError(errorRes)));
        }));
        this.authRedirect = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_auth_actions__WEBPACK_IMPORTED_MODULE_3__["AUTHENTICATE_SUCCESS"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((authSuccessAction) => {
            if (authSuccessAction.payload.redirect)
                this.router.navigate(['/']);
        }));
        this.authLogout = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_auth_actions__WEBPACK_IMPORTED_MODULE_3__["LOGOUT"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(() => {
            this.authService.clearLogoutTimer();
            localStorage.removeItem("userData");
            this.router.navigate(['/auth']);
        }));
        this.autoLogin = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_auth_actions__WEBPACK_IMPORTED_MODULE_3__["AUTO_LOGIN"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(() => {
            const userData = JSON.parse(localStorage.getItem('userData'));
            if (userData) {
                const expirationDate = new Date(userData._tokenExpirationDate);
                const loadedUser = new _user_model__WEBPACK_IMPORTED_MODULE_6__["User"](userData.email, userData.id, userData._token, expirationDate);
                if (loadedUser.token) {
                    //this.user.next(loadedUser);
                    this.store.dispatch(new _recipe_book_store_recipe_actions__WEBPACK_IMPORTED_MODULE_7__["ResetRecipes"]());
                    const timeLeft = new Date(userData._tokenExpirationDate).getTime() - new Date().getTime();
                    this.authService.setLogoutTimer(timeLeft);
                    return new _auth_actions__WEBPACK_IMPORTED_MODULE_3__["Authenticate_Success"]({ email: loadedUser.email, id: loadedUser.id, _token: loadedUser.token, _tokenExpirationDate: expirationDate, redirect: false });
                    // this.autologout(timeLeft);
                }
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(Boolean));
    }
}
AuthEffects.ɵfac = function AuthEffects_Factory(t) { return new (t || AuthEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_12__["Store"])); };
AuthEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({ token: AuthEffects, factory: AuthEffects.ɵfac });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])()
], AuthEffects.prototype, "authSignup", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])()
], AuthEffects.prototype, "authLogin", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])({ dispatch: false })
], AuthEffects.prototype, "authRedirect", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])({ dispatch: false })
], AuthEffects.prototype, "authLogout", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])()
], AuthEffects.prototype, "autoLogin", void 0);


/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _alert_alert_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alert/alert.component */ "VYMa");
/* harmony import */ var _dropdown_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dropdown.directive */ "3V6w");
/* harmony import */ var _loading_spinner_loading_spinner_conponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loading-spinner/loading-spinner.conponent */ "6jSC");
/* harmony import */ var _placeholder_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./placeholder.directive */ "EXEt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]
        ], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_alert_alert_component__WEBPACK_IMPORTED_MODULE_1__["AlertComponent"],
        _loading_spinner_loading_spinner_conponent__WEBPACK_IMPORTED_MODULE_3__["LoadingSpinnerComponent"],
        _dropdown_directive__WEBPACK_IMPORTED_MODULE_2__["DropdownDirective"],
        _placeholder_directive__WEBPACK_IMPORTED_MODULE_4__["PlaceholderDirective"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]], exports: [_alert_alert_component__WEBPACK_IMPORTED_MODULE_1__["AlertComponent"],
        _loading_spinner_loading_spinner_conponent__WEBPACK_IMPORTED_MODULE_3__["LoadingSpinnerComponent"],
        _dropdown_directive__WEBPACK_IMPORTED_MODULE_2__["DropdownDirective"],
        _placeholder_directive__WEBPACK_IMPORTED_MODULE_4__["PlaceholderDirective"],
        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]] }); })();


/***/ }),

/***/ "S3+y":
/*!**************************************!*\
  !*** ./src/app/store/app.reducer.ts ***!
  \**************************************/
/*! exports provided: appReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appReducer", function() { return appReducer; });
/* harmony import */ var _shopping_store_shopping_list_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shopping/store/shopping-list.reducer */ "S8oP");
/* harmony import */ var _auth_store_auth_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth/store/auth.reducer */ "qkvP");
/* harmony import */ var _recipe_book_store_recipe_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../recipe-book/store/recipe.reducer */ "c4Kt");



const appReducer = {
    shoppingList: _shopping_store_shopping_list_reducer__WEBPACK_IMPORTED_MODULE_0__["shoppingListReducer"],
    auth: _auth_store_auth_reducer__WEBPACK_IMPORTED_MODULE_1__["authReducer"],
    recipes: _recipe_book_store_recipe_reducer__WEBPACK_IMPORTED_MODULE_2__["recipeReducer"]
};


/***/ }),

/***/ "S8oP":
/*!*********************************************************!*\
  !*** ./src/app/shopping/store/shopping-list.reducer.ts ***!
  \*********************************************************/
/*! exports provided: shoppingListReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shoppingListReducer", function() { return shoppingListReducer; });
/* harmony import */ var _shared_ingredient_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/ingredient.model */ "9rNa");
/* harmony import */ var _shopping_list_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shopping-list.actions */ "EJOq");


const initialState = {
    ingredients: [
        new _shared_ingredient_model__WEBPACK_IMPORTED_MODULE_0__["Ingredient"]("Apples", 5),
        new _shared_ingredient_model__WEBPACK_IMPORTED_MODULE_0__["Ingredient"]("Vanilla Essence", 1)
    ],
    editedIngredient: null,
    editedIngredientIndex: -1
};
function shoppingListReducer(state = initialState, action) {
    switch (action.type) {
        case _shopping_list_actions__WEBPACK_IMPORTED_MODULE_1__["ADD_INGREDIENT"]:
            let ingredients = checkDuplicateIngredients(Object.assign({}, state), [action.payload]);
            return Object.assign(Object.assign({}, state), { ingredients: ingredients });
        case _shopping_list_actions__WEBPACK_IMPORTED_MODULE_1__["ADD_INGREDIENTS"]:
            let newIngredients;
            newIngredients = checkDuplicateIngredients(Object.assign({}, state), action.payload);
            return Object.assign(Object.assign({}, state), { ingredients: newIngredients });
        case _shopping_list_actions__WEBPACK_IMPORTED_MODULE_1__["UPDATE_INGREDIENT"]:
            const ingredient = Object.assign({}, state.editedIngredient);
            const updatedIngredient = Object.assign(Object.assign({}, ingredient), action.payload);
            const updatedIngredients = [...state.ingredients];
            updatedIngredients[state.editedIngredientIndex] = updatedIngredient;
            return Object.assign(Object.assign({}, state), { ingredients: updatedIngredients, editedIngredient: null, editedIngredientIndex: -1 });
        case _shopping_list_actions__WEBPACK_IMPORTED_MODULE_1__["DELETE_INGREDIENT"]:
            return Object.assign(Object.assign({}, state), { ingredients: state.ingredients.filter((ig, index) => {
                    return index !== state.editedIngredientIndex;
                }), editedIngredient: null, editedIngredientIndex: -1 });
        case _shopping_list_actions__WEBPACK_IMPORTED_MODULE_1__["START_EDIT"]:
            return Object.assign(Object.assign({}, state), { editedIngredientIndex: action.payload, editedIngredient: Object.assign({}, state.ingredients[action.payload]) });
        case _shopping_list_actions__WEBPACK_IMPORTED_MODULE_1__["STOP_EDIT"]:
            return Object.assign(Object.assign({}, state), { editedIngredient: null, editedIngredientIndex: -1 });
        default:
            return state;
    }
}
function checkDuplicateIngredients(stateCopy, ingredients) {
    let updatedIngredients;
    let stateIngredients = [...stateCopy.ingredients];
    ingredients.forEach(ingredient => {
        const index = stateCopy.ingredients.findIndex(ing => ing.name === ingredient.name);
        if (index === -1) {
            updatedIngredients = [...stateIngredients, ingredient];
        }
        else {
            updatedIngredients = [...stateIngredients];
            const updatedIngredient = Object.assign(Object.assign({}, updatedIngredients[index]), { amount: updatedIngredients[index].amount + ingredient.amount });
            updatedIngredients[index] = updatedIngredient;
        }
        stateIngredients = updatedIngredients;
    });
    return updatedIngredients;
}


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
/* harmony import */ var _auth_store_auth_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth/store/auth.actions */ "/WaZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





class AppComponent {
    constructor(store) {
        this.store = store;
    }
    ngOnInit() {
        this.store.dispatch(new _auth_store_auth_actions__WEBPACK_IMPORTED_MODULE_0__["Auto_Login"]());
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 0, consts: [[1, "container"], [1, "row"], [1, "col-md-12"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "VYMa":
/*!*************************************************!*\
  !*** ./src/app/shared/alert/alert.component.ts ***!
  \*************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AlertComponent {
    constructor() {
        this.shouldSave = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    setSave(value) {
        this.shouldSave.emit(value);
    }
}
AlertComponent.ɵfac = function AlertComponent_Factory(t) { return new (t || AlertComponent)(); };
AlertComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AlertComponent, selectors: [["app-alert"]], outputs: { shouldSave: "shouldSave" }, decls: 11, vars: 0, consts: [[1, "backdrop", 3, "click"], [1, "alert-box"], [2, "font-weight", "bold", "margin-bottom", "2px", "font-size", "calc(0.8em + 0.4vw)"], [2, "color", "rgba(128, 128, 128, 0.5)", "font-size", "calc(0.8em + 0.3vw)", "margin-bottom", "1vw"], [1, "alert-box-action"], [1, "btn", "btn-success", 2, "margin-right", "20px", 3, "click"], [1, "btn", "btn-danger", 3, "click"]], template: function AlertComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlertComponent_Template_div_click_0_listener() { return ctx.setSave(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Are you sure you want to save?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "(This cannot be undone)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlertComponent_Template_button_click_7_listener() { return ctx.setSave(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlertComponent_Template_button_click_9_listener() { return ctx.setSave(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["html[_ngcontent-%COMP%]{\r\n    font-size: calc(1em + 1vw);\r\n}\r\n\r\n.backdrop[_ngcontent-%COMP%]{\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100vw;\r\n    height: 100vh;\r\n    background: rgba(0, 0, 0, 0.45);\r\n    z-index: 50;\r\n}\r\n\r\n.alert-box[_ngcontent-%COMP%]{\r\n    position: fixed;\r\n    top: 50%;\r\n    left: 50%;\r\n    width: auto;\r\n    padding: calc(1em + 0.25vw); \r\n    z-index: 100;\r\n    background: white;\r\n    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.26);\r\n    transform: translate(-50%, -150%);\r\n    display: inline-block;\r\n}\r\n\r\n.alert-box-action[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n}\r\n\r\np[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFsZXJ0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsTUFBTTtJQUNOLE9BQU87SUFDUCxZQUFZO0lBQ1osYUFBYTtJQUNiLCtCQUErQjtJQUMvQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsUUFBUTtJQUNSLFNBQVM7SUFDVCxXQUFXO0lBQ1gsMkJBQTJCO0lBQzNCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsMkNBQTJDO0lBQzNDLGlDQUFpQztJQUNqQyxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoiYWxlcnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWx7XHJcbiAgICBmb250LXNpemU6IGNhbGMoMWVtICsgMXZ3KTtcclxufVxyXG5cclxuLmJhY2tkcm9we1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNDUpO1xyXG4gICAgei1pbmRleDogNTA7XHJcbn1cclxuXHJcbi5hbGVydC1ib3h7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgcGFkZGluZzogY2FsYygxZW0gKyAwLjI1dncpOyBcclxuICAgIHotaW5kZXg6IDEwMDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjI2KTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC0xNTAlKTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLmFsZXJ0LWJveC1hY3Rpb257XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbnB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbiJdfQ== */"] });


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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store-devtools */ "agSv");
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/router-store */ "99NH");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _auth_auth_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./auth/auth/auth-interceptor.service */ "kiTw");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/shared.module */ "PCNd");
/* harmony import */ var _store_app_reducer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./store/app.reducer */ "S3+y");
/* harmony import */ var _auth_store_auth_effects__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./auth/store/auth.effects */ "OW08");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _recipe_book_store_recipe_effects__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./recipe-book/store/recipe.effects */ "le00");
/* harmony import */ var _header_pdf_pdf_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./header/pdf/pdf.component */ "fUWK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ "fXoL");






















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineInjector"]({ providers: [{ provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"], useClass: _auth_auth_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_10__["AuthInterceptorService"], multi: true }], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forRoot(_store_app_reducer__WEBPACK_IMPORTED_MODULE_12__["appReducer"]),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["EffectsModule"].forRoot([_auth_store_auth_effects__WEBPACK_IMPORTED_MODULE_13__["AuthEffects"], _recipe_book_store_recipe_effects__WEBPACK_IMPORTED_MODULE_15__["RecipeEffects"]]),
            _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_5__["StoreDevtoolsModule"].instrument({ logOnly: src_environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].production }),
            _ngrx_router_store__WEBPACK_IMPORTED_MODULE_6__["StoreRouterConnectingModule"].forRoot(),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
        _header_pdf_pdf_component__WEBPACK_IMPORTED_MODULE_16__["PdfComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreRootModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["EffectsRootModule"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_5__["StoreDevtoolsModule"], _ngrx_router_store__WEBPACK_IMPORTED_MODULE_6__["StoreRouterConnectingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"]] }); })();


/***/ }),

/***/ "c4Kt":
/*!*****************************************************!*\
  !*** ./src/app/recipe-book/store/recipe.reducer.ts ***!
  \*****************************************************/
/*! exports provided: recipeReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recipeReducer", function() { return recipeReducer; });
/* harmony import */ var _recipe_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recipe.actions */ "5AZO");

const initialState = {
    recipes: [],
    globalRecipes: []
};
function recipeReducer(state = initialState, action) {
    switch (action.type) {
        case _recipe_actions__WEBPACK_IMPORTED_MODULE_0__["SET_RECIPES"]:
            return Object.assign(Object.assign({}, state), { recipes: [...action.payload] });
        case _recipe_actions__WEBPACK_IMPORTED_MODULE_0__["SET_GLOBAL_RECIPES"]:
            return Object.assign(Object.assign({}, state), { globalRecipes: [...action.payload] });
        case _recipe_actions__WEBPACK_IMPORTED_MODULE_0__["ADD_RECIPE"]:
            return Object.assign(Object.assign({}, state), { recipes: [...state.recipes, action.payload] });
        case _recipe_actions__WEBPACK_IMPORTED_MODULE_0__["ADD_GLOBAL_RECIPE"]:
            return Object.assign(Object.assign({}, state), { globalRecipes: [...state.globalRecipes, action.payload] });
        case _recipe_actions__WEBPACK_IMPORTED_MODULE_0__["RESET_RECIPES"]:
            return Object.assign(Object.assign({}, state), { recipes: [], globalRecipes: [] });
        case _recipe_actions__WEBPACK_IMPORTED_MODULE_0__["UPDATE_RECIPE"]:
            const updatedRecipe = Object.assign(Object.assign({}, state.recipes[action.payload.index]), action.payload.newRecipe);
            const updatedRecipes = [...state.recipes];
            updatedRecipes[action.payload.index] = updatedRecipe;
            return Object.assign(Object.assign({}, state), { recipes: updatedRecipes });
        case _recipe_actions__WEBPACK_IMPORTED_MODULE_0__["UPDATE_GLOBAL_RECIPE"]:
            const updatedGlobalRecipe = Object.assign(Object.assign({}, state.globalRecipes[action.payload.index]), action.payload.newRecipe);
            const updatedGlobalRecipes = [...state.globalRecipes];
            updatedGlobalRecipes[action.payload.index] = updatedGlobalRecipe;
            return Object.assign(Object.assign({}, state), { globalRecipes: updatedGlobalRecipes });
        case _recipe_actions__WEBPACK_IMPORTED_MODULE_0__["DELETE_RECIPE"]:
            return Object.assign(Object.assign({}, state), { recipes: state.recipes.filter((recipe, index) => {
                    return index !== action.payload;
                }) });
        case _recipe_actions__WEBPACK_IMPORTED_MODULE_0__["DELETE_GLOBAL_RECIPE"]:
            return Object.assign(Object.assign({}, state), { globalRecipes: state.globalRecipes.filter((globalRecipe, index) => {
                    return index !== action.payload;
                }) });
        default:
            return state;
    }
}


/***/ }),

/***/ "ckZ1":
/*!************************************!*\
  !*** ./src/app/auth/user.model.ts ***!
  \************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
class User {
    constructor(email, id, _token, _tokenExpirationDate) {
        this.email = email;
        this.id = id;
        this._token = _token;
        this._tokenExpirationDate = _tokenExpirationDate;
    }
    get token() {
        if (!this._tokenExpirationDate || new Date() > this._tokenExpirationDate)
            return null;
        return this._token;
    }
}


/***/ }),

/***/ "fECr":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/alert/alert.component */ "VYMa");
/* harmony import */ var _shared_placeholder_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/placeholder.directive */ "EXEt");
/* harmony import */ var _auth_store_auth_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/store/auth.actions */ "/WaZ");
/* harmony import */ var _recipe_book_store_recipe_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../recipe-book/store/recipe.actions */ "5AZO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/data-storage.service */ "GXvH");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../auth/auth.service */ "qXBG");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_dropdown_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/dropdown.directive */ "3V6w");
/* harmony import */ var _pdf_pdf_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pdf/pdf.component */ "fUWK");














function HeaderComponent_ng_template_7_Template(rf, ctx) { }
function HeaderComponent_li_10_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_li_10_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r7.collapsed = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Recipes");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function HeaderComponent_li_15_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Export ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "ul", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_li_15_Template_a_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); ctx_r9.showPDF(0); return ctx_r9.collapsed = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Export All");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_li_15_Template_a_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); ctx_r11.showPDF(1); return ctx_r11.collapsed = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Export Global");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_li_15_Template_a_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); ctx_r12.showPDF(2); return ctx_r12.collapsed = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Export Private");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function HeaderComponent_li_16_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Manage ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "ul", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_li_16_Template_a_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); ctx_r13.fetchRecipes(); return ctx_r13.collapsed = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Fetch Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_li_16_Template_a_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); ctx_r15.showConfirmation(); return ctx_r15.collapsed = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Save Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function HeaderComponent_li_17_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_li_17_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r16.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function HeaderComponent_li_18_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_li_18_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r18.collapsed = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Authenticate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function HeaderComponent_app_pdf_19_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "app-pdf", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("showPDFPreview", function HeaderComponent_app_pdf_19_Template_app_pdf_showPDFPreview_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r20.showPDFPreview = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("exportChoice", ctx_r6.exportChoice);
} }
class HeaderComponent {
    constructor(dataStorage, authService, componentFactoryResolver, store) {
        this.dataStorage = dataStorage;
        this.authService = authService;
        this.componentFactoryResolver = componentFactoryResolver;
        this.store = store;
        this.collapsed = true;
        this.isAuthenticated = false;
        this.showConfirmBox = false;
        this.showPDFPreview = false;
    }
    ngOnInit() {
        this.userSub = this.store.select('auth')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(authState => authState.user))
            .subscribe(user => {
            this.isAuthenticated = !!user;
        });
    }
    confirm() {
        this.showConfirmBox = true;
    }
    storeRecipes() {
        //this.dataStorage.storeRecipes();
        this.store.dispatch(new _recipe_book_store_recipe_actions__WEBPACK_IMPORTED_MODULE_4__["StoreRecipes"]());
        this.showConfirmBox = false;
    }
    showConfirmation() {
        const confirmationCmpFactory = this.componentFactoryResolver.resolveComponentFactory(_shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_1__["AlertComponent"]);
        const hostViewContainerRef = this.confirmationHost.veiwContainerRef;
        hostViewContainerRef.clear();
        const confirmationComponentRef = hostViewContainerRef.createComponent(confirmationCmpFactory);
        this.saveSub = confirmationComponentRef.instance.shouldSave.subscribe((save) => {
            if (save) {
                this.storeRecipes();
            }
            this.saveSub.unsubscribe();
            hostViewContainerRef.clear();
        });
    }
    fetchRecipes() {
        //this.dataStorage.fetchRecipes().subscribe();
        this.store.dispatch(new _recipe_book_store_recipe_actions__WEBPACK_IMPORTED_MODULE_4__["FetchRecipes"]());
        this.store.dispatch(new _recipe_book_store_recipe_actions__WEBPACK_IMPORTED_MODULE_4__["FetchGlobalRecipes"]());
    }
    logout() {
        //this.authService.logout();
        this.store.dispatch(new _auth_store_auth_actions__WEBPACK_IMPORTED_MODULE_3__["Logout"]());
    }
    ngOnDestroy() {
        this.userSub.unsubscribe();
        if (this.saveSub)
            this.saveSub.unsubscribe();
    }
    showPDF(exportChoice) {
        this.showPDFPreview = true;
        this.exportChoice = exportChoice;
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_data_storage_service__WEBPACK_IMPORTED_MODULE_6__["DataStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_8__["Store"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], viewQuery: function HeaderComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_shared_placeholder_directive__WEBPACK_IMPORTED_MODULE_2__["PlaceholderDirective"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.confirmationHost = _t.first);
    } }, decls: 20, vars: 8, consts: [[1, "navbar", "navbar-default"], [1, "container-fluid"], [1, "navbar-header"], ["type", "button", 1, "navbar-toggle", 3, "click"], [1, "bi", "bi-list"], ["href", "/", 1, "navbar-brand"], ["appPlaceholder", ""], [1, "navbar-collapse", 3, "resize"], [1, "nav", "navbar-nav"], ["routerLinkActive", "active", 4, "ngIf"], ["routerLinkActive", "active", 3, "click"], ["routerLink", "/shopping-list"], [1, "nav", "navbar-nav", "navbar-right"], ["class", "dropdown", "appDropdown", "", 4, "ngIf"], [3, "click", 4, "ngIf"], ["routerLinkActive", "active", 3, "click", 4, "ngIf"], [3, "exportChoice", "showPDFPreview", 4, "ngIf"], ["routerLinkActive", "active"], ["routerLink", "/recipes", 3, "click"], ["appDropdown", "", 1, "dropdown"], ["role", "button", 1, "dropdown-toggle"], [1, "caret"], [1, "dropdown-menu"], [2, "cursor", "pointer", 3, "click"], [3, "click"], [2, "cursor", "pointer"], ["routerLink", "/auth"], [3, "exportChoice", "showPDFPreview"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_3_listener() { return ctx.collapsed = !ctx.collapsed; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Recipe Book");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, HeaderComponent_ng_template_7_Template, 0, 0, "ng-template", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("resize", function HeaderComponent_Template_div_resize_8_listener() { return ctx.collapsed = true; }, false, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresolveWindow"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, HeaderComponent_li_10_Template, 3, 0, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_Template_li_click_11_listener() { return ctx.collapsed = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Shopping List");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "ul", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, HeaderComponent_li_15_Template, 14, 0, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, HeaderComponent_li_16_Template, 11, 0, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, HeaderComponent_li_17_Template, 3, 0, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, HeaderComponent_li_18_Template, 3, 0, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, HeaderComponent_app_pdf_19_Template, 1, 1, "app-pdf", 16);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("collapse", ctx.collapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isAuthenticated);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isAuthenticated);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isAuthenticated);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isAuthenticated);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isAuthenticated);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.showPDFPreview);
    } }, directives: [_shared_placeholder_directive__WEBPACK_IMPORTED_MODULE_2__["PlaceholderDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterLinkWithHref"], _shared_dropdown_directive__WEBPACK_IMPORTED_MODULE_11__["DropdownDirective"], _pdf_pdf_component__WEBPACK_IMPORTED_MODULE_12__["PdfComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "fUWK":
/*!*********************************************!*\
  !*** ./src/app/header/pdf/pdf.component.ts ***!
  \*********************************************/
/*! exports provided: PdfComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PdfComponent", function() { return PdfComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! html2canvas */ "wOnQ");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jspdf */ "i680");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







const _c0 = ["pdfWrapper"];
function PdfComponent_div_11_li_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ingredient_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", ingredient_r5.name, " - ", ingredient_r5.amount, " ");
} }
function PdfComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Description:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Ingredients:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ul", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, PdfComponent_div_11_li_16_Template, 2, 2, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const recipe_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", i_r3 + 1, ".) ", recipe_r2.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", recipe_r2.imgPath, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](recipe_r2.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", recipe_r2.ingredients);
} }
class PdfComponent {
    constructor(store) {
        this.store = store;
        this.testRecipe = null;
        this.showPDFPreview = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        this.storeSub = this.store.select('recipes').subscribe((recipeState) => {
            switch (this.exportChoice) {
                case 0:
                    this.selectedRecipes = [...recipeState.globalRecipes, ...recipeState.recipes];
                    break;
                case 1:
                    this.selectedRecipes = [...recipeState.globalRecipes];
                    break;
                case 2: this.selectedRecipes = [...recipeState.recipes];
            }
            this.testRecipe = this.selectedRecipes[1];
        });
    }
    closePDF() {
        this.showPDFPreview.emit(false);
    }
    htmlToPdf() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            window.scrollTo(0, 0);
            yield html2canvas__WEBPACK_IMPORTED_MODULE_2___default()(this.pdfWrapper.nativeElement, {
                allowTaint: true,
                useCORS: true,
                scale: 1,
                windowWidth: document.documentElement.offsetWidth,
                windowHeight: document.documentElement.offsetHeight
            }).then((canvas) => {
                let pdf = new jspdf__WEBPACK_IMPORTED_MODULE_3__["default"]('p', 'pt', [canvas.width, canvas.height]);
                let imgData = canvas.toDataURL('image/jpeg', 2);
                pdf.addImage(imgData, 100, 0, canvas.width * 0.75, canvas.height * 0.75);
                pdf.save('Recipe');
            });
        });
    }
    ngOnDestroy() {
        this.storeSub.unsubscribe();
    }
}
PdfComponent.ɵfac = function PdfComponent_Factory(t) { return new (t || PdfComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"])); };
PdfComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PdfComponent, selectors: [["app-pdf"]], viewQuery: function PdfComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.pdfWrapper = _t.first);
    } }, inputs: { exportChoice: "exportChoice" }, outputs: { showPDFPreview: "showPDFPreview" }, decls: 12, vars: 1, consts: [["id", "pdf"], [1, "backdrop", 3, "click"], [1, "container"], [1, "row"], ["id", "export", 1, "btn", "btn-success", 3, "click"], [1, "scroller"], ["id", "pdf-wrapper"], ["pdfWrapper", ""], [1, "text-center"], ["class", "col-xs-12 col-md-12 col-lg-12", 4, "ngFor", "ngForOf"], [1, "col-xs-12", "col-md-12", "col-lg-12"], [1, ""], [2, "width", "auto", "max-height", "300px", 3, "src"], [1, "list-group"], ["class", "list-group-item", 4, "ngFor", "ngForOf"], [1, "list-group-item"]], template: function PdfComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PdfComponent_Template_div_click_1_listener() { return ctx.closePDF(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PdfComponent_Template_button_click_4_listener() { ctx.htmlToPdf(); return ctx.closePDF(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Export");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h2", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Recipes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, PdfComponent_div_11_Template, 17, 5, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.selectedRecipes);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: [".backdrop[_ngcontent-%COMP%]{\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  background: rgba(0, 0, 0, 0.45);\r\n  z-index: 50;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  top : 7.5%;\r\n  left: 25%;\r\n  width: 50%;\r\n  margin-bottom: 15%;\r\n  background: white;\r\n  z-index: 100;\r\n  max-height: 85%;\r\n  border-radius: 10px;\r\n  height: 85%;\r\n  box-shadow: 0 0 5px black;\r\n}\r\n\r\n.scroller[_ngcontent-%COMP%] {\r\n  height: 90%;\r\n  overflow-y: auto;\r\n  margin-top: 1%;\r\n}\r\n\r\n#pdf-wrapper[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  padding: 2%;\r\n  overflow-y: auto;\r\n}\r\n\r\n#export[_ngcontent-%COMP%] {\r\n  border: none;\r\n  width: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBkZi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLE1BQU07RUFDTixPQUFPO0VBQ1AsWUFBWTtFQUNaLGFBQWE7RUFDYiwrQkFBK0I7RUFDL0IsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFVBQVU7RUFDVixTQUFTO0VBQ1QsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCOztBQUdBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFDYiIsImZpbGUiOiJwZGYuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrZHJvcHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjQ1KTtcclxuICB6LWluZGV4OiA1MDtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcCA6IDcuNSU7XHJcbiAgbGVmdDogMjUlO1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTUlO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIHotaW5kZXg6IDEwMDtcclxuICBtYXgtaGVpZ2h0OiA4NSU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBoZWlnaHQ6IDg1JTtcclxuICBib3gtc2hhZG93OiAwIDAgNXB4IGJsYWNrO1xyXG59XHJcblxyXG4uc2Nyb2xsZXIge1xyXG4gIGhlaWdodDogOTAlO1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgbWFyZ2luLXRvcDogMSU7XHJcbn1cclxuXHJcbiNwZGYtd3JhcHBlciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMiU7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG5cclxuXHJcbiNleHBvcnQge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuXHJcblxyXG4iXX0= */"] });


/***/ }),

/***/ "ioPk":
/*!***********************************************!*\
  !*** ./src/app/recipe-book/recipe.service.ts ***!
  \***********************************************/
/*! exports provided: RecipeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeService", function() { return RecipeService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _shopping_store_shopping_list_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shopping/store/shopping-list.actions */ "EJOq");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jspdf */ "i680");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "l7P3");





//import * as jsPDF from 'jspdf';
class RecipeService {
    constructor(store) {
        this.store = store;
        this.recipeSelectedId = 0;
        this.pdf = new jspdf__WEBPACK_IMPORTED_MODULE_2__["default"]();
        this.recipesChanged = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        // private recipes: Recipe[] = [
        //     new Recipe("Boiled Eggs", "Just boiled eggs", "https://www.onceuponachef.com/images/2017/10/How-To-Make-Hard-Boiled-Eggs-850x577.jpg", [new Ingredient('Eggs', 6)]),
        //     new Recipe("Beef Wellington", "Perfectly cooked beef wrapped in bread pastry", "https://static01.nyt.com/images/2019/12/13/dining/mc-beef-wellington/mc-beef-wellington-articleLarge.jpg", [new Ingredient('Beef', 500), new Ingredient('Pastry', 2)])
        // ];
        this.recipes = [];
    }
    getRecipes() {
        return this.recipes.slice();
    }
    getRecipe(info) {
        if (typeof (info) === 'string')
            return this.recipes.find((recipe) => info === recipe.name);
        else
            return this.recipes[info];
    }
    getIndex(recipe) {
        return this.recipes.indexOf(recipe);
    }
    addRecipe(recipe, id, editMode = false) {
        if (editMode) {
            this.recipes[id] = recipe;
        }
        else {
            this.recipes.push(recipe);
        }
        this.recipesChanged.next(this.recipes.slice());
    }
    deleteRecipe(index) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }
    setFetchedRecipes(fetchedRecipes) {
        var _a;
        this.recipes = fetchedRecipes;
        this.recipesChanged.next((_a = this.recipes) === null || _a === void 0 ? void 0 : _a.slice());
    }
    toShoppingList(ingredients) {
        this.store.dispatch(new _shopping_store_shopping_list_actions__WEBPACK_IMPORTED_MODULE_1__["AddIngredients"](ingredients));
    }
    downloadAsPDF() {
    }
    addToPDF() {
    }
}
RecipeService.ɵfac = function RecipeService_Factory(t) { return new (t || RecipeService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"])); };
RecipeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: RecipeService, factory: RecipeService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "kiTw":
/*!*******************************************************!*\
  !*** ./src/app/auth/auth/auth-interceptor.service.ts ***!
  \*******************************************************/
/*! exports provided: AuthInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptorService", function() { return AuthInterceptorService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "qXBG");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "l7P3");





class AuthInterceptorService {
    constructor(authService, store) {
        this.authService = authService;
        this.store = store;
    }
    intercept(req, next) {
        return this.store.select('auth').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(authState => authState.user), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["exhaustMap"])(user => {
            const modifiedReq = req.clone({ params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().set('auth', user === null || user === void 0 ? void 0 : user.token) });
            return next.handle(modifiedReq);
        }));
    }
}
AuthInterceptorService.ɵfac = function AuthInterceptorService_Factory(t) { return new (t || AuthInterceptorService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"])); };
AuthInterceptorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AuthInterceptorService, factory: AuthInterceptorService.ɵfac });


/***/ }),

/***/ "le00":
/*!*****************************************************!*\
  !*** ./src/app/recipe-book/store/recipe.effects.ts ***!
  \*****************************************************/
/*! exports provided: RecipeEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeEffects", function() { return RecipeEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jspdf */ "i680");
/* harmony import */ var _recipe_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./recipe.actions */ "5AZO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "l7P3");









class RecipeEffects {
    constructor(actions$, http, store) {
        this.actions$ = actions$;
        this.http = http;
        this.store = store;
        this.fetchRecipes = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_recipe_actions__WEBPACK_IMPORTED_MODULE_4__["FETCH_RECIPES"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["withLatestFrom"])(this.store.select('auth')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(([actionData, authState]) => {
            const user = authState.user.email.split('.');
            return this.http.get(`https://recipe-book-ddfc0-default-rtdb.firebaseio.com/${user[0]}.json`);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(recipes => {
            if (recipes) {
                return recipes.map(recipe => {
                    return Object.assign(Object.assign({}, recipe), { ingredients: recipe.ingredients ? recipe.ingredients : [] });
                });
            }
            else
                return [];
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(recipes => {
            return new _recipe_actions__WEBPACK_IMPORTED_MODULE_4__["SetRecipes"](recipes);
        }));
        this.fetchGlobalRecipes = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_recipe_actions__WEBPACK_IMPORTED_MODULE_4__["FETCH_GLOBAL_RECIPES"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(() => {
            return this.http.get(`https://recipe-book-ddfc0-default-rtdb.firebaseio.com/recipes.json`);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((globalRecipes) => {
            return globalRecipes.map(globalRecipe => {
                return Object.assign(Object.assign({}, globalRecipe), { ingredients: globalRecipe.ingredients ? globalRecipe.ingredients : [] });
            });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((globalRecipes) => {
            return new _recipe_actions__WEBPACK_IMPORTED_MODULE_4__["SetGlobalRecipes"](globalRecipes);
        }));
        this.storeRecipes = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_recipe_actions__WEBPACK_IMPORTED_MODULE_4__["STORE_RECIPES"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["withLatestFrom"])(this.store.select('recipes'), this.store.select('auth')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(([actionData, recipesState, authState]) => {
            const user = authState.user.email.split('.');
            return this.http.put(`https://recipe-book-ddfc0-default-rtdb.firebaseio.com/${user[0]}.json`, recipesState.recipes);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["withLatestFrom"])(this.store.select('recipes')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(([actionData, recipesState]) => {
            return this.http.put(`https://recipe-book-ddfc0-default-rtdb.firebaseio.com/recipes.json`, recipesState.globalRecipes);
        }));
        this.exportRecipes = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_recipe_actions__WEBPACK_IMPORTED_MODULE_4__["EXPORT_RECIPES"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(() => this.store.select('recipes')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((recipeState) => recipeState.recipes), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((recipes) => recipes[0]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((recipe) => {
            this.arrangePdf(recipe).then((doc) => { doc.save('Recipes.pdf'); });
        }));
    }
    arrangePdf(recipe) {
        return new Promise((resolve, reject) => {
            let doc = new jspdf__WEBPACK_IMPORTED_MODULE_3__["default"]('p', 'pt', 'a4');
            let width = doc.internal.pageSize.width;
            let height = doc.internal.pageSize.height;
            let options = {
                pagesplit: true
            };
            doc.text('Recipes', width / 2, 30, null, 'center');
            doc.text('1.)', 20, 50);
            this.getDataUri(recipe.imgPath).then((imgData) => {
                doc.addImage(imgData, 'PNG', 0.167 * width, 70, (0.66 * width), 200);
                doc.setFont(undefined, 'bold');
                doc.text(recipe.name, width / 2, 295, null, 'center');
                doc.line(0.167 * width, 305, 0.827 * width, 305);
                doc.setFont(undefined, 'normal');
                doc.text(recipe.description, 0.167 * width, 325);
                resolve(doc);
            });
        });
    }
    getDataUri(url) {
        return new Promise((resolve, reject) => {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            const img = new Image();
            img.crossOrigin = "anonymous";
            img.src = url;
            img.onload = () => {
                canvas.width = img.width;
                canvas.height = img.height;
                ctx.drawImage(img, 0, 0);
                resolve(canvas.toDataURL());
            };
        });
    }
}
RecipeEffects.ɵfac = function RecipeEffects_Factory(t) { return new (t || RecipeEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"])); };
RecipeEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: RecipeEffects, factory: RecipeEffects.ɵfac });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])()
], RecipeEffects.prototype, "fetchRecipes", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])()
], RecipeEffects.prototype, "fetchGlobalRecipes", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])({ dispatch: false })
], RecipeEffects.prototype, "storeRecipes", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])({ dispatch: false })
], RecipeEffects.prototype, "exportRecipes", void 0);


/***/ }),

/***/ "qXBG":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _store_auth_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store/auth.actions */ "/WaZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "l7P3");



class AuthService {
    constructor(store) {
        this.store = store;
    }
    // signup(email: string, password: string) {
    //     return this.http.post<AuthResponseData>(
    //         `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.firebaseAPIKey}`,
    //         { email: email, password: password, returnSecureToken: true }
    //     ).pipe(catchError(this.handleError));
    // }
    // login(email: string, password: string) {
    //     return this.http.post<AuthResponseData>(
    //         `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.firebaseAPIKey}`,
    //         { email: email, password: password, returnSecureToken: true }
    //     ).pipe(catchError(this.handleError),
    //         tap(resData => { this.handleAuthentication(resData) }));
    // }
    // logout() {
    //     //this.user.next(null);
    //     //this.router.navigate(['/auth']);
    //     localStorage.removeItem('userData');
    //     if(this.tokenExpirationTimer)
    //         clearTimeout(this.tokenExpirationTimer);
    //     this.tokenExpirationTimer = null;
    // }
    setLogoutTimer(expirationDuration) {
        this.tokenExpirationTimer = setTimeout(() => {
            this.store.dispatch(new _store_auth_actions__WEBPACK_IMPORTED_MODULE_0__["Logout"]());
        }, expirationDuration);
    }
    clearLogoutTimer() {
        if (this.tokenExpirationTimer)
            clearTimeout(this.tokenExpirationTimer);
        this.tokenExpirationTimer = null;
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: "root" });


/***/ }),

/***/ "qkvP":
/*!********************************************!*\
  !*** ./src/app/auth/store/auth.reducer.ts ***!
  \********************************************/
/*! exports provided: authReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authReducer", function() { return authReducer; });
/* harmony import */ var _user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../user.model */ "ckZ1");
/* harmony import */ var _auth_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.actions */ "/WaZ");


const initialState = {
    user: null,
    authError: null,
    loading: false,
    hasSignedUp: false
};
function authReducer(state = initialState, action) {
    switch (action.type) {
        case _auth_actions__WEBPACK_IMPORTED_MODULE_1__["AUTHENTICATE_SUCCESS"]:
            const user = new _user_model__WEBPACK_IMPORTED_MODULE_0__["User"](action.payload.email, action.payload.id, action.payload._token, action.payload._tokenExpirationDate);
            return Object.assign(Object.assign({}, state), { user: user, authError: null, loading: false });
        case _auth_actions__WEBPACK_IMPORTED_MODULE_1__["LOGOUT"]:
            return Object.assign(Object.assign({}, state), { user: null });
        case _auth_actions__WEBPACK_IMPORTED_MODULE_1__["LOGIN_START"]:
            return Object.assign(Object.assign({}, state), { authError: null, loading: true });
        case _auth_actions__WEBPACK_IMPORTED_MODULE_1__["AUTHENTICATE_FAIL"]:
            return Object.assign(Object.assign({}, state), { user: null, authError: action.payload, loading: false, hasSignedUp: false });
        case _auth_actions__WEBPACK_IMPORTED_MODULE_1__["SIGNUP_START"]:
            return Object.assign(Object.assign({}, state), { user: null, loading: true, authError: null });
        case _auth_actions__WEBPACK_IMPORTED_MODULE_1__["SIGNUP_SUCCESS"]:
            return Object.assign(Object.assign({}, state), { loading: false, authError: null, hasSignedUp: true });
        case _auth_actions__WEBPACK_IMPORTED_MODULE_1__["CLEAR_MESSAGES"]:
            return Object.assign(Object.assign({}, state), { hasSignedUp: false, authError: null });
        default:
            return state;
    }
}


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const appRoutes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full' },
    { path: 'recipes', loadChildren: () => Promise.all(/*! import() | recipe-book-recipes-module */[__webpack_require__.e("default~auth-auth-module~recipe-book-recipes-module~shopping-shopping-list-module"), __webpack_require__.e("recipe-book-recipes-module")]).then(__webpack_require__.bind(null, /*! ./recipe-book/recipes.module */ "2iah")).then(module => module.RecipesModule) },
    { path: 'shopping-list', loadChildren: () => Promise.all(/*! import() | shopping-shopping-list-module */[__webpack_require__.e("default~auth-auth-module~recipe-book-recipes-module~shopping-shopping-list-module"), __webpack_require__.e("shopping-shopping-list-module")]).then(__webpack_require__.bind(null, /*! ./shopping/shopping-list.module */ "j2ZG")).then(module => module.ShoppingListModule) },
    { path: 'auth', loadChildren: () => Promise.all(/*! import() | auth-auth-module */[__webpack_require__.e("default~auth-auth-module~recipe-book-recipes-module~shopping-shopping-list-module"), __webpack_require__.e("auth-auth-module")]).then(__webpack_require__.bind(null, /*! ./auth/auth.module */ "Yj9t")).then(module => module.AuthModule) },
    { path: '**', redirectTo: '/recipes' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_0__["PreloadAllModules"] }),
        ], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


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
//# sourceMappingURL=main.9d3b82ee647a09abe24c.js.map