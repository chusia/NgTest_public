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
/* harmony import */ var _weather_weather_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./weather/weather.component */ "./src/app/weather/weather.component.ts");
/* harmony import */ var _news_news_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./news/news.component */ "./src/app/news/news.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");






var routes = [
    { path: 'weather', component: _weather_weather_component__WEBPACK_IMPORTED_MODULE_3__["WeatherComponent"] },
    { path: 'news', component: _news_news_component__WEBPACK_IMPORTED_MODULE_4__["NewsComponent"] },
    { path: '**', component: _main_main_component__WEBPACK_IMPORTED_MODULE_5__["MainComponent"] },
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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n\tbox-sizing: border-box;\r\n}\r\n.header {\r\n\tz-index: 3;\r\n\tposition: fixed;\r\n\ttop: 0px;\r\n\twidth: 100%;\r\n\theight: 70px;\r\n\tbackground-color: rgb(43, 43, 43);\r\n}\r\n/*手機板header小一點*/\r\n@media only screen and (max-width: 628px) {/*小於*/\r\n\t.header {\r\n\t\theight: 40px;\r\n\t}\r\n}\r\n/*PC版Header內容*/\r\n.PCHeaderDiv div {\r\n\theight: 70px;\r\n\ttext-align: center;\r\n}\r\n.PCHeaderDiv div.button {\r\n\toutline: none\r\n}\r\n.PCHeaderDiv div.button:hover {\r\n\tbackground-color: black;\r\n\tcursor: pointer;\r\n}\r\n.PCHeaderDiv div.button:hover label {\r\n\tcolor: white;\r\n\tcursor: pointer;\r\n}\r\n.PCHeaderDiv div label {\r\n\tcolor: rgb(204, 204, 204);\r\n\tfont-size: 18px;\r\n\tfont-weight: 100;\r\n\tline-height: 65px;\r\n}\r\n@media only screen and (max-width: 628px) {/*小於*/\r\n\t.PCHeaderDiv {\r\n\t\tdisplay: none;\r\n\t}\r\n}\r\n/*手機版Header內的內容*/\r\n.phoneHeaderDiv {\r\n\theight: 40px;\r\n\twidth: 100vw;\r\n}\r\n.phoneHeaderDiv div{\r\n\theight: 40px;\r\n\tpadding: 6px 35px 6px 15px;\r\n}\r\n.phoneHeaderDiv div label {\r\n\toutline: none;\r\n\tfont-size: 18px;\r\n\tcolor: rgb(204, 204, 204);\r\n}\r\n.phoneHeaderDiv div label:hover {\r\n\tcolor: white;\r\n\tcursor: pointer;\r\n}\r\n@media only screen and (min-width: 628px) {/*大於*/\r\n\t.phoneHeaderDiv {\r\n\t\tdisplay: none;\r\n\t}\r\n}\r\n/*手機版Header彈出div的內容*/\r\n.phoneOutHeaderDiv {\r\n\twidth: 100vw;\r\n\tz-index: 3;\r\n\tposition: fixed;\r\n\ttop: 40px;\r\n}\r\n.phoneOutHeaderDiv .row div {\r\n\tbackground-color: rgb(100, 100, 100);\r\n\theight: 40px;\r\n\tpadding: 7px;\r\n\tborder-top: 1px solid gray;\r\n}\r\n.phoneOutHeaderDiv .row div:hover {\r\n\tbackground-color: rgb(53, 53, 53);\r\n\tcursor: pointer;\r\n}\r\n.phoneOutHeaderDiv .row div label{\r\n\tcolor: rgb(204, 204, 204);\r\n\tfont-size: 16px;\r\n}\r\n.phoneOutHeaderDiv .row div:hover label {\r\n\tcolor: white;\r\n}\r\n.content {\r\n\tz-index: 1;\r\n\theight: 100vh;\r\n}\r\n.content > div {\r\n\tfloat: left;\r\n\tposition: relative;\r\n}\r\n.footer {\r\n\tz-index: 3;\r\n\tposition: fixed;\r\n\tbottom: 0px;\r\n\twidth: 100%;\r\n\theight: 50px;\r\n\tbackground: rgb(92, 92, 92);\r\n\ttext-align:center;\r\n}\r\n@media only screen and (max-width: 628px) {/*大於*/\r\n\t.footer {\r\n\t\tpadding: 5px;\r\n\t\tfont-size: 12px;\r\n\t\theight: 40px;\r\n\t\tline-height: 13px;\r\n\t}\r\n}\r\n.footer label {\r\n\tcolor: white;\r\n}\r\n.footer a {\r\n\tcolor: rgb(168, 216, 255);\r\n}\r\n.middle {\r\n\twidth: 100%;\r\n\tbackground-color: rgb(241, 241, 241);\r\n}\r\n.left {\r\n    z-index: 1;\r\n\twidth:100px;\r\n\tmargin-left: -100px;\r\n\tright:100%;\r\n\theight:100%;\r\n}\r\n.right {\r\n    z-index: 1;\r\n\twidth:100px;\r\n\tmargin-right: -100px;\r\n\theight:100%;\r\n}\r\n.leftFloat {\r\n\tz-index: 2;\r\n\tposition: fixed;\r\n\tleft: 0px;\r\n\ttop: 70px;\r\n\twidth:100px;\r\n\theight:100%;\r\n\tbackground-color: yellow;\r\n}\r\n.rightFloat {\r\n\tz-index: 2;\r\n\tposition: fixed;\r\n\twidth:100px;\r\n\tright: 0px;\r\n\ttop: 70px;\r\n\theight:100%;\r\n\tbackground-color: violet;\r\n}\r\n/*\r\n.content {\r\n\toverflow: hidden;\r\n\tpadding-left: 100px;\r\n\tpadding-right: 100px;\r\n}\r\n\r\n.main {\r\n\twidth: 100%;\r\n\theight:100px;\r\n\tborder:1px solid red;\r\n}\r\n.left {\r\n\twidth:100px;\r\n\tmargin-left: -100px;\r\n\tright:100%;\r\n\theight:100px;\r\n\tborder:1px solid #000;\r\n}\r\n.right {\r\n\r\n}\r\n*/\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxzQkFBc0I7QUFDdkI7QUFDQTtDQUNDLFVBQVU7Q0FDVixlQUFlO0NBQ2YsUUFBUTtDQUNSLFdBQVc7Q0FDWCxZQUFZO0NBQ1osaUNBQWlDO0FBQ2xDO0FBRUEsZUFBZTtBQUNmLDJDQUEyQyxLQUFLO0NBQy9DO0VBQ0MsWUFBWTtDQUNiO0FBQ0Q7QUFFQSxjQUFjO0FBQ2Q7Q0FDQyxZQUFZO0NBQ1osa0JBQWtCO0FBQ25CO0FBQ0E7Q0FDQztBQUNEO0FBQ0E7Q0FDQyx1QkFBdUI7Q0FDdkIsZUFBZTtBQUNoQjtBQUNBO0NBQ0MsWUFBWTtDQUNaLGVBQWU7QUFDaEI7QUFFQTtDQUNDLHlCQUF5QjtDQUN6QixlQUFlO0NBQ2YsZ0JBQWdCO0NBQ2hCLGlCQUFpQjtBQUNsQjtBQUVBLDJDQUEyQyxLQUFLO0NBQy9DO0VBQ0MsYUFBYTtDQUNkO0FBQ0Q7QUFFQSxnQkFBZ0I7QUFDaEI7Q0FDQyxZQUFZO0NBQ1osWUFBWTtBQUNiO0FBQ0E7Q0FDQyxZQUFZO0NBQ1osMEJBQTBCO0FBQzNCO0FBQ0E7Q0FDQyxhQUFhO0NBQ2IsZUFBZTtDQUNmLHlCQUF5QjtBQUMxQjtBQUNBO0NBQ0MsWUFBWTtDQUNaLGVBQWU7QUFDaEI7QUFFQSwyQ0FBMkMsS0FBSztDQUMvQztFQUNDLGFBQWE7Q0FDZDtBQUNEO0FBRUEsb0JBQW9CO0FBQ3BCO0NBQ0MsWUFBWTtDQUNaLFVBQVU7Q0FDVixlQUFlO0NBQ2YsU0FBUztBQUNWO0FBRUE7Q0FDQyxvQ0FBb0M7Q0FDcEMsWUFBWTtDQUNaLFlBQVk7Q0FDWiwwQkFBMEI7QUFDM0I7QUFFQTtDQUNDLGlDQUFpQztDQUNqQyxlQUFlO0FBQ2hCO0FBRUE7Q0FDQyx5QkFBeUI7Q0FDekIsZUFBZTtBQUNoQjtBQUVBO0NBQ0MsWUFBWTtBQUNiO0FBSUE7Q0FDQyxVQUFVO0NBQ1YsYUFBYTtBQUNkO0FBRUE7Q0FDQyxXQUFXO0NBQ1gsa0JBQWtCO0FBQ25CO0FBRUE7Q0FDQyxVQUFVO0NBQ1YsZUFBZTtDQUNmLFdBQVc7Q0FDWCxXQUFXO0NBQ1gsWUFBWTtDQUNaLDJCQUEyQjtDQUMzQixpQkFBaUI7QUFDbEI7QUFFQSwyQ0FBMkMsS0FBSztDQUMvQztFQUNDLFlBQVk7RUFDWixlQUFlO0VBQ2YsWUFBWTtFQUNaLGlCQUFpQjtDQUNsQjtBQUNEO0FBRUE7Q0FDQyxZQUFZO0FBQ2I7QUFDQTtDQUNDLHlCQUF5QjtBQUMxQjtBQUVBO0NBQ0MsV0FBVztDQUNYLG9DQUFvQztBQUNyQztBQUVBO0lBQ0ksVUFBVTtDQUNiLFdBQVc7Q0FDWCxtQkFBbUI7Q0FDbkIsVUFBVTtDQUNWLFdBQVc7QUFDWjtBQUVBO0lBQ0ksVUFBVTtDQUNiLFdBQVc7Q0FDWCxvQkFBb0I7Q0FDcEIsV0FBVztBQUNaO0FBQ0E7Q0FDQyxVQUFVO0NBQ1YsZUFBZTtDQUNmLFNBQVM7Q0FDVCxTQUFTO0NBQ1QsV0FBVztDQUNYLFdBQVc7Q0FDWCx3QkFBd0I7QUFDekI7QUFFQTtDQUNDLFVBQVU7Q0FDVixlQUFlO0NBQ2YsV0FBVztDQUNYLFVBQVU7Q0FDVixTQUFTO0NBQ1QsV0FBVztDQUNYLHdCQUF3QjtBQUN6QjtBQUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBc0JDIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbi5oZWFkZXIge1xyXG5cdHotaW5kZXg6IDM7XHJcblx0cG9zaXRpb246IGZpeGVkO1xyXG5cdHRvcDogMHB4O1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDogNzBweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDMsIDQzLCA0Myk7XHJcbn1cclxuXHJcbi8q5omL5qmf5p2/aGVhZGVy5bCP5LiA6bueKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MjhweCkgey8q5bCP5pa8Ki9cclxuXHQuaGVhZGVyIHtcclxuXHRcdGhlaWdodDogNDBweDtcclxuXHR9XHJcbn1cclxuXHJcbi8qUEPniYhIZWFkZXLlhaflrrkqL1xyXG4uUENIZWFkZXJEaXYgZGl2IHtcclxuXHRoZWlnaHQ6IDcwcHg7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5QQ0hlYWRlckRpdiBkaXYuYnV0dG9uIHtcclxuXHRvdXRsaW5lOiBub25lXHJcbn1cclxuLlBDSGVhZGVyRGl2IGRpdi5idXR0b246aG92ZXIge1xyXG5cdGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uUENIZWFkZXJEaXYgZGl2LmJ1dHRvbjpob3ZlciBsYWJlbCB7XHJcblx0Y29sb3I6IHdoaXRlO1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLlBDSGVhZGVyRGl2IGRpdiBsYWJlbCB7XHJcblx0Y29sb3I6IHJnYigyMDQsIDIwNCwgMjA0KTtcclxuXHRmb250LXNpemU6IDE4cHg7XHJcblx0Zm9udC13ZWlnaHQ6IDEwMDtcclxuXHRsaW5lLWhlaWdodDogNjVweDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MjhweCkgey8q5bCP5pa8Ki9cclxuXHQuUENIZWFkZXJEaXYge1xyXG5cdFx0ZGlzcGxheTogbm9uZTtcclxuXHR9XHJcbn1cclxuXHJcbi8q5omL5qmf54mISGVhZGVy5YWn55qE5YWn5a65Ki9cclxuLnBob25lSGVhZGVyRGl2IHtcclxuXHRoZWlnaHQ6IDQwcHg7XHJcblx0d2lkdGg6IDEwMHZ3O1xyXG59XHJcbi5waG9uZUhlYWRlckRpdiBkaXZ7XHJcblx0aGVpZ2h0OiA0MHB4O1xyXG5cdHBhZGRpbmc6IDZweCAzNXB4IDZweCAxNXB4O1xyXG59XHJcbi5waG9uZUhlYWRlckRpdiBkaXYgbGFiZWwge1xyXG5cdG91dGxpbmU6IG5vbmU7XHJcblx0Zm9udC1zaXplOiAxOHB4O1xyXG5cdGNvbG9yOiByZ2IoMjA0LCAyMDQsIDIwNCk7XHJcbn1cclxuLnBob25lSGVhZGVyRGl2IGRpdiBsYWJlbDpob3ZlciB7XHJcblx0Y29sb3I6IHdoaXRlO1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MjhweCkgey8q5aSn5pa8Ki9cclxuXHQucGhvbmVIZWFkZXJEaXYge1xyXG5cdFx0ZGlzcGxheTogbm9uZTtcclxuXHR9XHJcbn1cclxuXHJcbi8q5omL5qmf54mISGVhZGVy5b2I5Ye6ZGl255qE5YWn5a65Ki9cclxuLnBob25lT3V0SGVhZGVyRGl2IHtcclxuXHR3aWR0aDogMTAwdnc7XHJcblx0ei1pbmRleDogMztcclxuXHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0dG9wOiA0MHB4O1xyXG59XHJcblxyXG4ucGhvbmVPdXRIZWFkZXJEaXYgLnJvdyBkaXYge1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHJnYigxMDAsIDEwMCwgMTAwKTtcclxuXHRoZWlnaHQ6IDQwcHg7XHJcblx0cGFkZGluZzogN3B4O1xyXG5cdGJvcmRlci10b3A6IDFweCBzb2xpZCBncmF5O1xyXG59XHJcblxyXG4ucGhvbmVPdXRIZWFkZXJEaXYgLnJvdyBkaXY6aG92ZXIge1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHJnYig1MywgNTMsIDUzKTtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5waG9uZU91dEhlYWRlckRpdiAucm93IGRpdiBsYWJlbHtcclxuXHRjb2xvcjogcmdiKDIwNCwgMjA0LCAyMDQpO1xyXG5cdGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLnBob25lT3V0SGVhZGVyRGl2IC5yb3cgZGl2OmhvdmVyIGxhYmVsIHtcclxuXHRjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcblxyXG5cclxuLmNvbnRlbnQge1xyXG5cdHotaW5kZXg6IDE7XHJcblx0aGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLmNvbnRlbnQgPiBkaXYge1xyXG5cdGZsb2F0OiBsZWZ0O1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmZvb3RlciB7XHJcblx0ei1pbmRleDogMztcclxuXHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0Ym90dG9tOiAwcHg7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiA1MHB4O1xyXG5cdGJhY2tncm91bmQ6IHJnYig5MiwgOTIsIDkyKTtcclxuXHR0ZXh0LWFsaWduOmNlbnRlcjtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MjhweCkgey8q5aSn5pa8Ki9cclxuXHQuZm9vdGVyIHtcclxuXHRcdHBhZGRpbmc6IDVweDtcclxuXHRcdGZvbnQtc2l6ZTogMTJweDtcclxuXHRcdGhlaWdodDogNDBweDtcclxuXHRcdGxpbmUtaGVpZ2h0OiAxM3B4O1xyXG5cdH1cclxufVxyXG5cclxuLmZvb3RlciBsYWJlbCB7XHJcblx0Y29sb3I6IHdoaXRlO1xyXG59XHJcbi5mb290ZXIgYSB7XHJcblx0Y29sb3I6IHJnYigxNjgsIDIxNiwgMjU1KTtcclxufVxyXG5cclxuLm1pZGRsZSB7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MSwgMjQxLCAyNDEpO1xyXG59XHJcblxyXG4ubGVmdCB7XHJcbiAgICB6LWluZGV4OiAxO1xyXG5cdHdpZHRoOjEwMHB4O1xyXG5cdG1hcmdpbi1sZWZ0OiAtMTAwcHg7XHJcblx0cmlnaHQ6MTAwJTtcclxuXHRoZWlnaHQ6MTAwJTtcclxufVxyXG5cclxuLnJpZ2h0IHtcclxuICAgIHotaW5kZXg6IDE7XHJcblx0d2lkdGg6MTAwcHg7XHJcblx0bWFyZ2luLXJpZ2h0OiAtMTAwcHg7XHJcblx0aGVpZ2h0OjEwMCU7XHJcbn1cclxuLmxlZnRGbG9hdCB7XHJcblx0ei1pbmRleDogMjtcclxuXHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0bGVmdDogMHB4O1xyXG5cdHRvcDogNzBweDtcclxuXHR3aWR0aDoxMDBweDtcclxuXHRoZWlnaHQ6MTAwJTtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XHJcbn1cclxuXHJcbi5yaWdodEZsb2F0IHtcclxuXHR6LWluZGV4OiAyO1xyXG5cdHBvc2l0aW9uOiBmaXhlZDtcclxuXHR3aWR0aDoxMDBweDtcclxuXHRyaWdodDogMHB4O1xyXG5cdHRvcDogNzBweDtcclxuXHRoZWlnaHQ6MTAwJTtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB2aW9sZXQ7XHJcbn1cclxuXHJcblxyXG4vKlxyXG4uY29udGVudCB7XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRwYWRkaW5nLWxlZnQ6IDEwMHB4O1xyXG5cdHBhZGRpbmctcmlnaHQ6IDEwMHB4O1xyXG59XHJcblxyXG4ubWFpbiB7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OjEwMHB4O1xyXG5cdGJvcmRlcjoxcHggc29saWQgcmVkO1xyXG59XHJcbi5sZWZ0IHtcclxuXHR3aWR0aDoxMDBweDtcclxuXHRtYXJnaW4tbGVmdDogLTEwMHB4O1xyXG5cdHJpZ2h0OjEwMCU7XHJcblx0aGVpZ2h0OjEwMHB4O1xyXG5cdGJvcmRlcjoxcHggc29saWQgIzAwMDtcclxufVxyXG4ucmlnaHQge1xyXG5cclxufVxyXG4qLyJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <div class=\"container\">\n    <div class=\"row PCHeaderDiv\">\n      <div class=\"col-xs-2 button\" style = \"padding: 0px\" [routerLink]=\"['/']\"> <label>首頁</label></div>\n      <div class=\"col-xs-2 button\" style = \"padding: 0px\" [routerLink]=\"['/news']\"> <label>今日新聞</label></div>\n      <div class=\"col-xs-2 button\" style = \"padding: 0px\" [routerLink]=\"['/weather']\"> <label>一周天氣</label></div>\n      <div class=\"col-xs-6\"></div>\n    </div>\n    <div class=\"row phoneHeaderDiv\">\n      <div class=\"col-xs-6 button\">\n        <label  [routerLink]=\"['/']\">\n          <i class=\"fas fa-home\"></i>\n          <!--home圖示-->\n        </label>\n      </div>\n      <div class=\"col-xs-6 migi\">\n        <label id=\"openBtn\" (click)='phoneOut=!phoneOut' [hidden]=\"phoneOut\">\n          <i class=\"fas fa-align-justify\"></i>\n          <!--視窗彈出用圖示-->\n        </label>\n        <label id=\"closeBtn\" (click)='phoneOut=!phoneOut' [hidden]=\"!phoneOut\">\n          <i class=\"fas fa-times\"></i>\n          <!--視窗消失用圖示-->\n        </label>\n      </div>\n    </div>\n    <div class=\"phoneOutHeaderDiv\" [hidden]=\"!phoneOut\">\n      <div class=\"row\">\n        <div class=\"col-xs-12 button\" [routerLink]=\"['/news']\" (click)='phoneOut=!phoneOut'>\n          <label>今日新聞</label>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-xs-12 button\" [routerLink]=\"['/weather']\" (click)='phoneOut=!phoneOut'>\n          <label>一周天氣</label>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"content\">\n  <div class=\"middle\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n<div class=\"footer\">\n  <label>Image From&nbsp;:&nbsp;\n    <a href=\"https://www.flickr.com/photos/cjfan/\">KENT FAN's flickr</a>\n    、\n    <a href=\"http://alphastockimages.com/\">Alpha Stock Images</a>\n  </label><br />\n  <label>\n    Data From&nbsp;:&nbsp;\n    <a href=\"https://news.google.com/?hl=zh-TW&gl=TW&ceid=TW:zh-Hant\">google新聞</a>\n    、\n    <a href=\"https://opendata.cwb.gov.tw/dist/opendata-swagger.html#/\">中央氣象局天氣資料Open Data API</a>\n  </label>\n\n\n\n</div>\n"

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
        this.title = 'ngApp';
    }
    AppComponent.prototype.openDiv = function () {
        console.log('123');
        $('#openBtn').hide();
        $('#closeBtn').show();
        $('.phoneOutHeaderDiv').show();
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _weather_weather_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./weather/weather.component */ "./src/app/weather/weather.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _news_news_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./news/news.component */ "./src/app/news/news.component.ts");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _weather_weather_component__WEBPACK_IMPORTED_MODULE_7__["WeatherComponent"],
                _main_main_component__WEBPACK_IMPORTED_MODULE_8__["MainComponent"],
                _news_news_component__WEBPACK_IMPORTED_MODULE_9__["NewsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["JsonpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/main/main.component.css":
/*!*****************************************!*\
  !*** ./src/app/main/main.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vbWFpbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/main/main.component.html":
/*!******************************************!*\
  !*** ./src/app/main/main.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid contentArea\">\n  <div class=\"spaceForHeader\"></div>\n  <div class=\"homeImgDiv\">\n    <div></div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-12\"></div>\n  </div>\n  <div class=\"center homeBtnDiv\">\n    <div>\n      <a href=\"weather\" class=\"mouseOverImg\">\n        <img src=\"../assets/weather.jpg\" alt=\"一周天氣\" title=\"一周天氣\" width=\"270\">\n        <span>一周天氣</span>\n      </a>\n    </div>\n    <div>\n      <a href=\"news\" class=\"mouseOverImg\"><img src=\"../assets/news.jpg\" alt=\"今日新聞\" title=\"今日新聞\" width=\"270\">\n        <span>今日新聞</span>\n      </a>\n    </div>\n  </div>\n  <div class=\"row\">\n\n  </div>\n  <div class=\"spaceForFooter\"></div>\n</div>\n"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MainComponent = /** @class */ (function () {
    function MainComponent() {
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/main/main.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/news/news.component.css":
/*!*****************************************!*\
  !*** ./src/app/news/news.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25ld3MvbmV3cy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/news/news.component.html":
/*!******************************************!*\
  !*** ./src/app/news/news.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container contentArea\">\n  <div class=\"spaceForHeader\">不該出現</div>\n  <div class=\"row\">\n    <div class=\"col-sm-12\"></div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-12 title\"><h3>今日新聞</h3></div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-12\"></div>\n  </div>\n  <div class=\"descriptionDiv row\">\n    <div>\n      <h4> * 因後端直接從google新聞網頁取資料，因此會讀取時間會較長</h4>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-12\"></div>\n  </div>\n  <div class=\"tableDiv\">\n    <div class=\"row bor\" *ngFor=\"let product of productsObservable | async\">\n      <div class=\"col-sm-4\">\n        <h4>{{product.title}}</h4>\n      </div>\n      <div class=\"col-sm-8\">\n        <p>{{product.content}}</p>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-12\"></div>\n  </div>\n  <div class=\"spaceForFooter\"></div>\n</div>\n"

/***/ }),

/***/ "./src/app/news/news.component.ts":
/*!****************************************!*\
  !*** ./src/app/news/news.component.ts ***!
  \****************************************/
/*! exports provided: NewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsComponent", function() { return NewsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var NewsComponent = /** @class */ (function () {
    function NewsComponent(httpClient) {
        this.httpClient = httpClient;
    }
    NewsComponent.prototype.get_products = function () {
        this.productsObservable = this.httpClient.get('/api/news');
    };
    NewsComponent.prototype.ngOnInit = function () {
        this.get_products();
    };
    NewsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-news',
            template: __webpack_require__(/*! ./news.component.html */ "./src/app/news/news.component.html"),
            styles: [__webpack_require__(/*! ./news.component.css */ "./src/app/news/news.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], NewsComponent);
    return NewsComponent;
}());



/***/ }),

/***/ "./src/app/weather/weather.component.css":
/*!***********************************************!*\
  !*** ./src/app/weather/weather.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlYXRoZXIvd2VhdGhlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/weather/weather.component.html":
/*!************************************************!*\
  !*** ./src/app/weather/weather.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container contentArea\">\n  <div class=\"spaceForHeader\">不該出現</div>\n  <div class=\"row\">\n    <div class=\"col-sm-12 title\">\n      <h3>一周天氣</h3>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-12\"></div>\n  </div>\n  <div class = \"tableRwdDiv\">\n    <div class=\"tableRwdTitleDiv\">\n      <select id='selectArea' (change)=\"warnUser()\" class=\"select\">\n        <option *ngFor=\"let area of areas\" [value]=\"area.num\">{{ area.area }}</option>\n      </select>\n    </div>\n    <table class=\"rwd-table2\">\n      　<tr>\n        <th></th>　\n        <th></th>\n        <th></th>\n        <th></th>\n        <th></th>\n        <th></th>\n        <th></th>\n      </tr>\n      <tr>\n        <th></th>\n        <th></th>\n        <th></th>\n        <th></th>\n        <th></th>\n        <th></th>\n        <th></th>\n      </tr>\n\n      <tr>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n      </tr>\n      <tr>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n      </tr>\n    </table>\n    <table class=\"rwd-table2Sml\">\n        <tr>\n            <th colspan = '4' class = \"tableTitle\" style = \"text-align: left;padding: 5px;\">\n            <select id='selectArea' (change)=\"warnUser()\" class=\"select\">\n                <option *ngFor=\"let area of areas\" [value]=\"area.num\">{{ area.area }}</option>\n              </select>\n            </th>\n        </tr>\n      <tr>　　\n        <th>星期</th>\n        <th>日期</th>\n        <th>白天天氣</th>\n        <th>夜晚天氣</th>\n      </tr>\n      <tr>　　\n        <th></th>\n        <th></th>\n        <td></td>\n        <td></td>\n      </tr>\n      <tr>　　\n        <th></th>\n        <th></th>\n        <td></td>\n        <td></td>\n      </tr>\n      <tr>　　\n        <th></th>\n        <th></th>\n        <td></td>\n        <td></td>\n      </tr>\n      <tr>　　\n        <th></th>\n        <th></th>\n        <td></td>\n        <td></td>\n      </tr>\n      <tr>　　\n        <th></th>\n        <th></th>\n        <td></td>\n        <td></td>\n      </tr>\n      <tr>　　\n        <th></th>\n        <th></th>\n        <td></td>\n        <td></td>\n      </tr>\n      <tr>　　\n        <th></th>\n        <th></th>\n        <td></td>\n        <td></td>\n      </tr>\n    </table>\n  </div>\n  <div class=\"spaceForFooter\"></div>\n</div>\n"

/***/ }),

/***/ "./src/app/weather/weather.component.ts":
/*!**********************************************!*\
  !*** ./src/app/weather/weather.component.ts ***!
  \**********************************************/
/*! exports provided: WeatherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherComponent", function() { return WeatherComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var WeatherComponent = /** @class */ (function () {
    //
    function WeatherComponent(httpClient) {
        this.httpClient = httpClient;
        this.areas = [
            { num: "100", area: "中正區" },
            { num: "115", area: "南港區" },
            { num: "111", area: "士林區" },
            { num: "112", area: "北投區" },
            { num: "104", area: "中山區" },
            { num: "114", area: "內湖區" },
            { num: "103", area: "大同區" },
            { num: "110", area: "信義區" },
            { num: "105", area: "松山區" },
            { num: "106", area: "大安區" },
            { num: "108", area: "萬華區" },
            { num: "116", area: "文山區" }
        ];
    }
    WeatherComponent.prototype.ngOnInit = function () {
        this.warnUser();
    };
    //private productsObservable : object ; 
    /*
    get_products(event:Event) {
        this.productsObservable = this.httpClient.get('/api/weather/' + (<HTMLSelectElement>event.target).value);
    }
    */
    WeatherComponent.prototype.get_date = function () {
        var todayList = [];
        var dateList = [];
        var todayListSml = [];
        var day_list = ['日', '一', '二', '三', '四', '五', '六'];
        for (var i = 0; i < 7; i++) {
            var getToday = new Date();
            var day = getToday.getDay(); // or "new Date().getDay()";
            todayList.push('星期' + day_list[(day + i) % 7]);
            todayListSml.push(day_list[(day + i) % 7]);
            getToday.setDate(getToday.getDate() + i);
            var mm = (getToday.getMonth() + 1).toString();
            var dd = (getToday.getDate()).toString();
            dateList.push(mm + '/' + dd);
        }
        var tmp = {
            'today': todayList,
            'todaySml': todayListSml,
            'date': dateList
        };
        return tmp;
    };
    /*
    getWeather(): any {
        this.httpClient.get('/api/weather').subscribe((res) => {
            for (let key in res) {
                if (res[key].locationName == '松山區') {
                    return res[key];
                }
            }
        });
    }
    */
    WeatherComponent.prototype.warnUser = function () {
        var date = this.get_date();
        var area = '100';
        if ($('#selectArea').val() != null) {
            area = $('#selectArea').val();
        }
        $.ajax({
            url: '/api/weather/' + area,
            type: 'GET',
            dataType: 'json',
            headers: {
                'Access-Control-Allow-Headers': 'x-requested-with'
            },
            error: function (xhr) {
                alert('Ajax request 發生錯誤');
            },
            success: function (res) {
                console.log(res);
                for (var i = 0; i < 7; i++) {
                    var dayIcon;
                    var weatherDay = res.Wx.data[i * 2];
                    if (weatherDay.indexOf('晴') != -1) {
                        if (weatherDay.indexOf('雨') != -1) {
                            dayIcon = 'simple_weather_icon_11.png';
                        }
                        else if (weatherDay.indexOf('陰') != -1) {
                            dayIcon = 'simple_weather_icon_06.png';
                        }
                        else if (weatherDay.indexOf('雲') != -1) {
                            dayIcon = 'simple_weather_icon_03.png';
                        }
                        else {
                            dayIcon = 'simple_weather_icon_01.png';
                        }
                    }
                    else if (weatherDay.indexOf('陰') != -1) {
                        if (weatherDay.indexOf('雨') != -1) {
                            dayIcon = 'simple_weather_icon_22.png';
                        }
                        else if (weatherDay.indexOf('雲') != -1) {
                            dayIcon = 'simple_weather_icon_06.png';
                        }
                        else {
                            dayIcon = 'simple_weather_icon_05.png';
                        }
                    }
                    else { //雲
                        if (weatherDay.indexOf('雨') != -1) {
                            dayIcon = 'simple_weather_icon_22.png';
                        }
                        else {
                            dayIcon = 'simple_weather_icon_06.png';
                        }
                    }
                    var nightIcon;
                    var weatherNight = res.Wx.data[i * 2 + 1];
                    if (weatherNight.indexOf('晴') != -1) {
                        if (weatherNight.indexOf('雨') != -1) {
                            nightIcon = 'simple_weather_icon_31.png';
                        }
                        else if (weatherNight.indexOf('陰') != -1) {
                            nightIcon = 'simple_weather_icon_06.png';
                        }
                        else if (weatherNight.indexOf('雲') != -1) {
                            nightIcon = 'simple_weather_icon_07.png';
                        }
                        else {
                            nightIcon = 'simple_weather_icon_02.png';
                        }
                    }
                    else if (weatherNight.indexOf('陰') != -1) {
                        if (weatherNight.indexOf('雨') != -1) {
                            nightIcon = 'simple_weather_icon_22.png';
                        }
                        else if (weatherNight.indexOf('雲') != -1) {
                            nightIcon = 'simple_weather_icon_06.png';
                        }
                        else {
                            nightIcon = 'simple_weather_icon_05.png';
                        }
                    }
                    else { //雲
                        if (weatherNight.indexOf('雨') != -1) {
                            nightIcon = 'simple_weather_icon_22.png';
                        }
                        else {
                            nightIcon = 'simple_weather_icon_06.png';
                        }
                    }
                    //電腦版表格
                    $(".rwd-table2 tr:nth-child(1) th:nth-child(" + (i + 1).toString() + ")")
                        .text(date.today[i]);
                    $(".rwd-table2 tr:nth-child(2) th:nth-child(" + (i + 1).toString() + ")")
                        .text(date.date[i]);
                    $(".rwd-table2 tr:nth-child(3) td:nth-child(" + (i + 1).toString() + ")")
                        .html("<label>" + res.MinT.data[i * 2] + "~" + res.MaxT.data[i * 2] +
                        "°C</label><img src='assets/weather/" + dayIcon +
                        "' width = '60' alt='" +
                        res.Wx.data[i * 2] + "' title = '" + res.Wx.data[i * 2] + "'>");
                    $(".rwd-table2 tr:nth-child(4) td:nth-child(" + (i + 1).toString() + ")")
                        .html("<label>" + res.MinT.data[i * 2 + 1] + "~" + res.MaxT.data[i * 2 + 1] +
                        "°C</label><img src='assets/weather/" + nightIcon +
                        "' width = '60' alt='" +
                        res.Wx.data[i * 2 + 1] + "' title = '" + res.Wx.data[i * 2 + 1] + "'>");
                    //手機板
                    $(".rwd-table2Sml tr:nth-child(" + (i + 3).toString() + ") th:nth-child(1)")
                        .text(date.todaySml[i]);
                    $(".rwd-table2Sml tr:nth-child(" + (i + 3).toString() + ") th:nth-child(2)")
                        .text(date.date[i]);
                    $(".rwd-table2Sml tr:nth-child(" + (i + 3).toString() + ") td:nth-child(3)")
                        .html("<label>" + res.MinT.data[i * 2] + "~" + res.MaxT.data[i * 2] +
                        "°C</label><img src='assets/weather/" + dayIcon +
                        "' width = '60' alt='" +
                        res.Wx.data[i * 2] + "' title = '" + res.Wx.data[i * 2] + "'>");
                    $(".rwd-table2Sml tr:nth-child(" + (i + 3).toString() + ") td:nth-child(4)")
                        .html("<label>" + res.MinT.data[i * 2 + 1] + "~" + res.MaxT.data[i * 2 + 1] +
                        "°C</label><img src='assets/weather/" + nightIcon +
                        "' width = '60' alt='" +
                        res.Wx.data[i * 2 + 1] + "' title = '" + res.Wx.data[i * 2 + 1] + "'>");
                }
            }
        });
    };
    WeatherComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-weather',
            template: __webpack_require__(/*! ./weather.component.html */ "./src/app/weather/weather.component.html"),
            styles: [__webpack_require__(/*! ./weather.component.css */ "./src/app/weather/weather.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], WeatherComponent);
    return WeatherComponent;
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

module.exports = __webpack_require__(/*! C:\Users\Administrator\Desktop\ci_bms\testAngular\ngApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map