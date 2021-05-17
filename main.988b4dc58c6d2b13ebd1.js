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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"header\">\n        <h3 class=\"text-center text-white\">Quotes App</h3>\n        <p class=\"text-white\">Welcome to Quotes App where you can view and share quotes to bring out the best in people</p>\n    </div>\n<div class=\"row pt-5\">\n    <div class=\"col-md-7\">\n        <div class=\"card pb-3\" *ngFor = 'let quote of quoteEntry; let i = index'>\n            <h6> <span class=\"Name\">Published by {{quote.submittedName}}</span> <span class=\"date\"> {{quote.Date|date}} </span></h6>\n            <app-quote-message *ngIf='quote.showDetails' [message]='quote' (removeQuote)='removeItem($event,i)'></app-quote-message>\n            <button (click)='toggleDetails (i)' class=\"btn btn-dark\">Show Quotes</button>\n        </div>\n    </div>\n    <div class=\"col-md-5\">\n        <app-quote-form (addQuote)='addNewQuote($event)'></app-quote-form>\n    </div>\n</div>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/quote-form/quote-form.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/quote-form/quote-form.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<form (ngSubmit)='submit(quotesEntry);'  #quotesEntry = 'ngForm' >\n    <div class=\"form-group\">\n        <input type=\"text\" class=\"form-control bg-transparent text-white\" rows=\"5\" id=\"author\" placeholder=\"Enter Author\" name=\"author\" [(ngModel)]='newQuote.author'#author= 'ngModel' required>\n        <div [hidden]=\"author.valid || author.pristine\" class=\"alert alert-danger\"> </div>\n        <p>Author is required</p>\n    </div>\n    <div class=\"form-group\">\n        <textarea type=\"text\" class=\"form-control bg-transparent text-white\" rows=\"5\" id=\"entryQuote\" placeholder=\"Enter Quote\" name=\"entryQuote\" [(ngModel)]='newQuote.entryQuote'#entryQuote= 'ngModel' required></textarea>\n        <div [hidden]=\"entryQuote.valid || entryQuote.pristine\" class=\"alsert alert-danger\"> </div>\n        <p>Quote is required</p>\n    </div>\n    <div class=\"form-group\">\n        <input type=\"text\" class=\"form-control bg-transparent text-white\" rows=\"5\" id=\"submittedName\" placeholder=\"Enter Author\" name=\"submittedName\" [(ngModel)]='newQuote.submittedName'#submittedName= 'ngModel' required>\n        <div [hidden]=\"submittedName.valid || submittedName.pristine\" class=\"alert alert-danger\"> </div>\n        <p>Name is required</p>\n    </div>\n    <div class=\"form-group\">\n        <input type=\"text\" class=\"form-control bg-transparent text-white\" id=\"date\" rows=\"5\" placeholder=\"Enter Date\" name=\"date\" [(ngModel)]='newQuote.Date' #date= 'ngModel' required>\n        <div [hidden]=\"date.valid || date.pristine\" class=\"alert alert-danger\"> </div>\n        <p>Date is required</p>\n    </div>\n    <input type=\"submit\" value=\"submit\" class=\"btn btn-dark\">\n \n</form>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/quote-message/quote-message.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/quote-message/quote-message.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<blockquote class=\"blockquote\">\n    <p class=\"mb-0\">{{message.entryQuote}} </p>\n    <footer class=\"blockquote-footer pt-3\"> {{message.author}} </footer>\n    <div>\n        <i class=\"far fa-thumbs-up pl-3 border p-3\"(click)='upVote()'>Up Vote  </i> {{numberOfLikes}}\n        <i class=\"far fa-thumbs-down pl-3 border p-3\" (click)= 'downVote()'>Down Vote</i> {{numberOfDislikes}}\n        <i class=\"far fa-trash-alt pl-3 border p-3\" (click)='quoteDelete(true)'>Delete </i>\n        \n    </div>\n</blockquote>\n");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body{\n    background-image: linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5))url(\"/cristofer-jeschke-NSKP7Gwa_I0-unsplash.jpg\");\n}\nh6{\n    display: flex;\n    justify-content: space-between;\n}\n.header{\n    text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvSEFBb0g7QUFDeEg7QUFDQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keXtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLDAsMCwwLjUpLHJnYmEoMCwwLDAsMC41KSl1cmwoXCIvY3Jpc3RvZmVyLWplc2Noa2UtTlNLUDdHd2FfSTAtdW5zcGxhc2guanBnXCIpO1xufVxuaDZ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uaGVhZGVye1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _quotedetails__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./quotedetails */ "./src/app/quotedetails.ts");



let AppComponent = class AppComponent {
    constructor() {
        this.quoteEntry = [
            new _quotedetails__WEBPACK_IMPORTED_MODULE_2__["Quotedetails"]('Bill Gates', `Success is a lousy teacher. It seduces smart people into thinking they can't lose. `, 'John Othiambo', new Date(2021, 15, 5)),
            new _quotedetails__WEBPACK_IMPORTED_MODULE_2__["Quotedetails"]('Nelson Mandela', 'I never lose I either win or learn.', 'Mabel Karani', new Date(2019, 11, 23)),
            new _quotedetails__WEBPACK_IMPORTED_MODULE_2__["Quotedetails"]('Steve Jobs', 'Have the courage to follow your heart and intution.They somehow know what you truly want to become.', 'Tamminga Budds', new Date(2020, 6, 15)),
            new _quotedetails__WEBPACK_IMPORTED_MODULE_2__["Quotedetails"]('Mother Teresa', 'Not all of us can do  reat things.But we can  small things, with great love.', 'Ian Olindi', new Date(2021, 4, 1)),
            new _quotedetails__WEBPACK_IMPORTED_MODULE_2__["Quotedetails"]('Thomas Edison', "I have not failed. I've just found 10,000 ways that won't work.", 'John Mwangi', new Date(2021, 2, 26)),
            new _quotedetails__WEBPACK_IMPORTED_MODULE_2__["Quotedetails"]('Albert Einstein', 'Anyone who has never made a mistake has never done anything new.', 'James Kimani', new Date(2021, 8, 30)),
            new _quotedetails__WEBPACK_IMPORTED_MODULE_2__["Quotedetails"]('Charles Schulz', 'Just remember once you are over  the hill you begin to pick up speed', 'Amos Arisi', new Date(2021, 4, 3))
        ];
    }
    toggleDetails(index) {
        this.quoteEntry[index].showDetails = !this.quoteEntry[index].showDetails;
    }
    removeItem(removeQuote, index) {
        if (removeQuote) {
            let toDeleteQuote = confirm(`Are you sure you want to delet ${this.quoteEntry[index].author}?`);
            if (toDeleteQuote) {
                this.quoteEntry.splice(index, 1);
            }
        }
    }
    addNewQuote(quote) {
        let quoteObject = new _quotedetails__WEBPACK_IMPORTED_MODULE_2__["Quotedetails"](quote.author, quote.entryQuote, quote.submittedName, quote.date);
        this.quoteEntry.push(quoteObject);
    }
};
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _quote_message_quote_message_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./quote-message/quote-message.component */ "./src/app/quote-message/quote-message.component.ts");
/* harmony import */ var _quote_form_quote_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./quote-form/quote-form.component */ "./src/app/quote-form/quote-form.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _date_count_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./date-count.pipe */ "./src/app/date-count.pipe.ts");









let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _quote_message_quote_message_component__WEBPACK_IMPORTED_MODULE_5__["QuoteMessageComponent"],
            _quote_form_quote_form_component__WEBPACK_IMPORTED_MODULE_6__["QuoteFormComponent"],
            _date_count_pipe__WEBPACK_IMPORTED_MODULE_8__["DateCountPipe"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/date-count.pipe.ts":
/*!************************************!*\
  !*** ./src/app/date-count.pipe.ts ***!
  \************************************/
/*! exports provided: DateCountPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateCountPipe", function() { return DateCountPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let DateCountPipe = class DateCountPipe {
    transform(value) {
        let today = new Date(); //get current date and time
        let todayWithNoTime = new Date(today.getFullYear(), today.getMonth(), today.getDate());
        var dateDifference = Math.abs(value - todayWithNoTime); //returns value in miliseconds
        const secondsInDay = 86400; //60 seconds * 60 minutes in an hour * 24 hours in a day
        var dateDifferenceSeconds = dateDifference * 0.001; //converts miliseconds to seconds
        var dateCounter = dateDifferenceSeconds / secondsInDay;
        if (dateCounter >= 1 && value > todayWithNoTime) {
            return dateCounter;
        }
        else {
            return 0;
        }
    }
};
DateCountPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'dateCount'
    })
], DateCountPipe);



/***/ }),

/***/ "./src/app/quote-form/quote-form.component.css":
/*!*****************************************************!*\
  !*** ./src/app/quote-form/quote-form.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::-webkit-input-placeholder{\n    color:white;\n}\np {\n    color:white;\n}\n#date{\n    color:white;\n}\ninput[type=text]{\n    color:white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVvdGUtZm9ybS9xdW90ZS1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9xdW90ZS1mb3JtL3F1b3RlLWZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlcntcbiAgICBjb2xvcjp3aGl0ZTtcbn1cbnAge1xuICAgIGNvbG9yOndoaXRlO1xufVxuI2RhdGV7XG4gICAgY29sb3I6d2hpdGU7XG59XG5pbnB1dFt0eXBlPXRleHRde1xuICAgIGNvbG9yOndoaXRlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/quote-form/quote-form.component.ts":
/*!****************************************************!*\
  !*** ./src/app/quote-form/quote-form.component.ts ***!
  \****************************************************/
/*! exports provided: QuoteFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteFormComponent", function() { return QuoteFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _quotedetails__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../quotedetails */ "./src/app/quotedetails.ts");



let QuoteFormComponent = class QuoteFormComponent {
    constructor() {
        this.newQuote = new _quotedetails__WEBPACK_IMPORTED_MODULE_2__["Quotedetails"]("", "", "", new Date);
        this.addQuote = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    submit(form) {
        this.addQuote.emit(this.newQuote);
        form.resetForm();
    }
    ngOnInit() {
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], QuoteFormComponent.prototype, "addQuote", void 0);
QuoteFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-quote-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./quote-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/quote-form/quote-form.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./quote-form.component.css */ "./src/app/quote-form/quote-form.component.css")).default]
    })
], QuoteFormComponent);



/***/ }),

/***/ "./src/app/quote-message/quote-message.component.css":
/*!***********************************************************!*\
  !*** ./src/app/quote-message/quote-message.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("i{cursor:pointer;}\n.far:hover{\n    background-color: blue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVvdGUtbWVzc2FnZS9xdW90ZS1tZXNzYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsRUFBRSxjQUFjLENBQUM7QUFDakI7SUFDSSxzQkFBc0I7QUFDMUIiLCJmaWxlIjoic3JjL2FwcC9xdW90ZS1tZXNzYWdlL3F1b3RlLW1lc3NhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIml7Y3Vyc29yOnBvaW50ZXI7fVxuLmZhcjpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/quote-message/quote-message.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/quote-message/quote-message.component.ts ***!
  \**********************************************************/
/*! exports provided: QuoteMessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteMessageComponent", function() { return QuoteMessageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let QuoteMessageComponent = class QuoteMessageComponent {
    constructor() {
        this.removeQuote = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.numberOfLikes = 0;
        this.numberOfDislikes = 0;
    }
    quoteDelete(deleteItem) {
        this.removeQuote.emit(deleteItem);
    }
    upVote() {
        this.numberOfLikes++;
    }
    downVote() {
        this.numberOfDislikes++;
    }
    ngOnInit() {
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], QuoteMessageComponent.prototype, "message", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], QuoteMessageComponent.prototype, "removeQuote", void 0);
QuoteMessageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-quote-message',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./quote-message.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/quote-message/quote-message.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./quote-message.component.css */ "./src/app/quote-message/quote-message.component.css")).default]
    })
], QuoteMessageComponent);



/***/ }),

/***/ "./src/app/quotedetails.ts":
/*!*********************************!*\
  !*** ./src/app/quotedetails.ts ***!
  \*********************************/
/*! exports provided: Quotedetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Quotedetails", function() { return Quotedetails; });
class Quotedetails {
    constructor(author, entryQuote, submittedName, Date) {
        this.author = author;
        this.entryQuote = entryQuote;
        this.submittedName = submittedName;
        this.Date = Date;
        this.showDetails = false;
    }
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
const environment = {
    production: true
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/moringa/Documents/morings_pre-prep_projects/Ip quote/QuoteApp/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.988b4dc58c6d2b13ebd1.js.map