(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _artist_create_artist_create_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./artist-create/artist-create.component */ "./src/app/artist-create/artist-create.component.ts");
/* harmony import */ var _artist_detail_artist_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./artist-detail/artist-detail.component */ "./src/app/artist-detail/artist-detail.component.ts");
/* harmony import */ var _artist_edit_artist_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./artist-edit/artist-edit.component */ "./src/app/artist-edit/artist-edit.component.ts");
/* harmony import */ var _artist_search_artist_search_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./artist-search/artist-search.component */ "./src/app/artist-search/artist-search.component.ts");
/* harmony import */ var _artists_artists_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./artists/artists.component */ "./src/app/artists/artists.component.ts");








var routes = [
    { path: '', pathMatch: 'full', redirectTo: 'artists' },
    { path: 'albums', component: _artists_artists_component__WEBPACK_IMPORTED_MODULE_7__["ArtistsComponent"] },
    { path: 'create', component: _artist_create_artist_create_component__WEBPACK_IMPORTED_MODULE_3__["ArtistCreateComponent"] },
    { path: 'edit', component: _artist_edit_artist_edit_component__WEBPACK_IMPORTED_MODULE_5__["ArtistEditComponent"] },
    { path: 'albums/:id', component: _artist_detail_artist_detail_component__WEBPACK_IMPORTED_MODULE_4__["ArtistDetailComponent"] },
    { path: 'album/:name', component: _artist_search_artist_search_component__WEBPACK_IMPORTED_MODULE_6__["ArtistSearchComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n<app-nav></app-nav>\n  <div class=\"container mt-5\">\n    <router-outlet>\n      <app-artists></app-artists>\n    </router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'musicdb-app';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _services_artist_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/artist.service */ "./src/app/services/artist.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _artist_create_artist_create_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./artist-create/artist-create.component */ "./src/app/artist-create/artist-create.component.ts");
/* harmony import */ var _artist_edit_artist_edit_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./artist-edit/artist-edit.component */ "./src/app/artist-edit/artist-edit.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _artist_detail_artist_detail_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./artist-detail/artist-detail.component */ "./src/app/artist-detail/artist-detail.component.ts");
/* harmony import */ var _artist_search_artist_search_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./artist-search/artist-search.component */ "./src/app/artist-search/artist-search.component.ts");
/* harmony import */ var _artists_artists_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./artists/artists.component */ "./src/app/artists/artists.component.ts");



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_12__["NavComponent"],
                _artist_create_artist_create_component__WEBPACK_IMPORTED_MODULE_13__["ArtistCreateComponent"],
                _artist_edit_artist_edit_component__WEBPACK_IMPORTED_MODULE_14__["ArtistEditComponent"],
                _artist_detail_artist_detail_component__WEBPACK_IMPORTED_MODULE_16__["ArtistDetailComponent"],
                _artist_search_artist_search_component__WEBPACK_IMPORTED_MODULE_17__["ArtistSearchComponent"],
                _artists_artists_component__WEBPACK_IMPORTED_MODULE_18__["ArtistsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridListModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
            ],
            providers: [_services_artist_service__WEBPACK_IMPORTED_MODULE_10__["ArtistService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/artist-create/artist-create.component.html":
/*!************************************************************!*\
  !*** ./src/app/artist-create/artist-create.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  artist-create works!\n</p>\n"

/***/ }),

/***/ "./src/app/artist-create/artist-create.component.scss":
/*!************************************************************!*\
  !*** ./src/app/artist-create/artist-create.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FydGlzdC1jcmVhdGUvYXJ0aXN0LWNyZWF0ZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/artist-create/artist-create.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/artist-create/artist-create.component.ts ***!
  \**********************************************************/
/*! exports provided: ArtistCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtistCreateComponent", function() { return ArtistCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ArtistCreateComponent = /** @class */ (function () {
    function ArtistCreateComponent() {
    }
    ArtistCreateComponent.prototype.ngOnInit = function () {
    };
    ArtistCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-artist-create',
            template: __webpack_require__(/*! ./artist-create.component.html */ "./src/app/artist-create/artist-create.component.html"),
            styles: [__webpack_require__(/*! ./artist-create.component.scss */ "./src/app/artist-create/artist-create.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ArtistCreateComponent);
    return ArtistCreateComponent;
}());



/***/ }),

/***/ "./src/app/artist-detail/artist-detail.component.html":
/*!************************************************************!*\
  !*** ./src/app/artist-detail/artist-detail.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" style=\"width: 18rem;\">\n  <!-- <img src=\"...\" class=\"card-img-top\" alt=\"...\"> -->\n  <div class=\"card-body\">\n    <h2 class=\"card-title\">Artist</h2>\n    <p class=\"card-text\">{{ eenArtist.name }}</p>\n    <p class=\"card-text\">{{ eenArtist.picture_small }}</p>\n    <p class=\"card-text\">{{ eenArtist.nb_album }}</p>\n    <p class=\"card-text\">{{ eenArtist.nb_fan }}</p>\n    <a [routerLink]=\"['/posts']\" class=\"btn btn-primary\">Back to list</a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/artist-detail/artist-detail.component.scss":
/*!************************************************************!*\
  !*** ./src/app/artist-detail/artist-detail.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FydGlzdC1kZXRhaWwvYXJ0aXN0LWRldGFpbC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/artist-detail/artist-detail.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/artist-detail/artist-detail.component.ts ***!
  \**********************************************************/
/*! exports provided: ArtistDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtistDetailComponent", function() { return ArtistDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_artist_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/artist.service */ "./src/app/services/artist.service.ts");




var ArtistDetailComponent = /** @class */ (function () {
    function ArtistDetailComponent(artistService, route, router) {
        this.artistService = artistService;
        this.route = route;
        this.router = router;
    }
    ArtistDetailComponent.prototype.ngOnInit = function () {
        this.getArtistDetail(this.route.snapshot.params['id']);
    };
    ArtistDetailComponent.prototype.getArtistDetail = function (eenArtist) {
        var _this = this;
        this.artistService.getArtist(eenArtist).subscribe(function (data) {
            _this.eenArtist = data;
        });
    };
    ArtistDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-artist-detail',
            template: __webpack_require__(/*! ./artist-detail.component.html */ "./src/app/artist-detail/artist-detail.component.html"),
            styles: [__webpack_require__(/*! ./artist-detail.component.scss */ "./src/app/artist-detail/artist-detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_artist_service__WEBPACK_IMPORTED_MODULE_3__["ArtistService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ArtistDetailComponent);
    return ArtistDetailComponent;
}());



/***/ }),

/***/ "./src/app/artist-edit/artist-edit.component.html":
/*!********************************************************!*\
  !*** ./src/app/artist-edit/artist-edit.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  artist-edit works!\n</p>\n"

/***/ }),

/***/ "./src/app/artist-edit/artist-edit.component.scss":
/*!********************************************************!*\
  !*** ./src/app/artist-edit/artist-edit.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FydGlzdC1lZGl0L2FydGlzdC1lZGl0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/artist-edit/artist-edit.component.ts":
/*!******************************************************!*\
  !*** ./src/app/artist-edit/artist-edit.component.ts ***!
  \******************************************************/
/*! exports provided: ArtistEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtistEditComponent", function() { return ArtistEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ArtistEditComponent = /** @class */ (function () {
    function ArtistEditComponent() {
    }
    ArtistEditComponent.prototype.ngOnInit = function () {
    };
    ArtistEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-artist-edit',
            template: __webpack_require__(/*! ./artist-edit.component.html */ "./src/app/artist-edit/artist-edit.component.html"),
            styles: [__webpack_require__(/*! ./artist-edit.component.scss */ "./src/app/artist-edit/artist-edit.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ArtistEditComponent);
    return ArtistEditComponent;
}());



/***/ }),

/***/ "./src/app/artist-search/artist-search.component.html":
/*!************************************************************!*\
  !*** ./src/app/artist-search/artist-search.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n      <input class=\"form-control me-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\" #SearchBox (input)=\"#SearchBox.value\">\n      <button class=\"btn btn-outline-success\" type=\"submit\">Search</button> -->\n"

/***/ }),

/***/ "./src/app/artist-search/artist-search.component.scss":
/*!************************************************************!*\
  !*** ./src/app/artist-search/artist-search.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FydGlzdC1zZWFyY2gvYXJ0aXN0LXNlYXJjaC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/artist-search/artist-search.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/artist-search/artist-search.component.ts ***!
  \**********************************************************/
/*! exports provided: ArtistSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtistSearchComponent", function() { return ArtistSearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ArtistSearchComponent = /** @class */ (function () {
    function ArtistSearchComponent() {
    }
    ArtistSearchComponent.prototype.ngOnInit = function () {
    };
    ArtistSearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-artist-search',
            template: __webpack_require__(/*! ./artist-search.component.html */ "./src/app/artist-search/artist-search.component.html"),
            styles: [__webpack_require__(/*! ./artist-search.component.scss */ "./src/app/artist-search/artist-search.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ArtistSearchComponent);
    return ArtistSearchComponent;
}());



/***/ }),

/***/ "./src/app/artists/artists.component.html":
/*!************************************************!*\
  !*** ./src/app/artists/artists.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-10 table-responsive\">\n  <table class=\"table table-bordered table-striped table-hover align-middle\">\n    <thead>\n      <tr>\n        <th scope=\"col\">Name</th>\n        <th scope=\"col\">Picture</th>\n        <th scope=\"col\">Album</th>\n        <th scope=\"col\">Number of Followers</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let ze of zeArtists\">\n        <td>{{ze.title}}</td>\n        <td>{{ze.cover}}</td>\n        <td>{{ze.fans}}</td>\n        <td>{{ze.artist}}</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"

/***/ }),

/***/ "./src/app/artists/artists.component.scss":
/*!************************************************!*\
  !*** ./src/app/artists/artists.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FydGlzdHMvYXJ0aXN0cy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/artists/artists.component.ts":
/*!**********************************************!*\
  !*** ./src/app/artists/artists.component.ts ***!
  \**********************************************/
/*! exports provided: ArtistsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtistsComponent", function() { return ArtistsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_artist_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/artist.service */ "./src/app/services/artist.service.ts");




var ArtistsComponent = /** @class */ (function () {
    function ArtistsComponent(artistService, route, router) {
        this.artistService = artistService;
        this.route = route;
        this.router = router;
    }
    ArtistsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.artistService.getArtists().subscribe(function (res) {
            _this.zeArtists = res;
            console.log(_this.zeArtists);
        }, function (err) {
            console.log(err);
        });
    };
    ArtistsComponent.prototype.getAllArtists = function () {
    };
    ArtistsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-artists',
            template: __webpack_require__(/*! ./artists.component.html */ "./src/app/artists/artists.component.html"),
            styles: [__webpack_require__(/*! ./artists.component.scss */ "./src/app/artists/artists.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_artist_service__WEBPACK_IMPORTED_MODULE_3__["ArtistService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ArtistsComponent);
    return ArtistsComponent;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.html":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light bg-light\">\n  <div class=\"container-fluid\">\n    <a class=\"navbar-brand\">Deezer</a>\n    <form class=\"d-flex\">\n      <!-- <app-artist-search></app-artist-search> -->\n      <input class=\"form-control me-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n      <button class=\"btn btn-outline-success\" type=\"submit\">Search</button>\n    </form>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/nav/nav.component.scss":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdi9uYXYuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavComponent = /** @class */ (function () {
    function NavComponent() {
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.scss */ "./src/app/nav/nav.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/services/artist.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/artist.service.ts ***!
  \********************************************/
/*! exports provided: ArtistService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtistService", function() { return ArtistService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var ArtistService = /** @class */ (function () {
    function ArtistService(http) {
        this.http = http;
        this.ARTIST = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this.apiURL = 'https://api.deezer.com/album/302127';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
    }
    Object.defineProperty(ArtistService.prototype, "artists", {
        get: function () {
            return this.ARTIST.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    ArtistService.prototype.getArtists = function () {
        return this.http.get('https://api.deezer.com/album/302127')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (artists) { return console.log('fetched artists'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    ArtistService.prototype.getArtist = function (id) {
        var url = this.apiURL + "/" + id;
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    ArtistService.prototype.artistSearch = function (term) {
        if (!term.trim) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])();
        }
        return this.http.get(this.apiURL + "/?name=" + term)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    ArtistService.prototype.handleError = function (error) {
        var errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        }
        else {
            // Get server-side error
            errorMessage = "Error Code: " + error.status + "\nMessage: " + error.message;
        }
        window.alert(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
    };
    ArtistService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ArtistService);
    return ArtistService;
}());



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
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/kabelomaloa/Documents/Assessment/7bbf8079-2273-4188-9904-1de41329b333/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map