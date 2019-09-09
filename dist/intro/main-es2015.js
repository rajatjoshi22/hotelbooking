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

/***/ "./node_modules/raw-loader/index.js!./src/app/addhotel/hotel.component.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/addhotel/hotel.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\"><h1>Add Hotel Form</h1>\n  <div>\n    <label for=\"name\">Name</label>\n    <input class=\"form-control\" [(ngModel)]='name' type=\"text\">\n  </div>\n  <div>\n    <label for=\"acrooms\">Number of AC room</label>\n    <input class=\"form-control\"  [(ngModel)]='acrooms' type=\"number\">\n  </div>\n  <div>\n    <label for=\"nonac\">Non AC room</label>\n    <input class=\"form-control\"   [(ngModel)]='nonacroom' type=\"number\">\n  </div>\n  <div>\n    <label for=\"city\">City</label>\n    <input class=\"form-control\"  [(ngModel)]='city' type=\"text\">\n  </div>\n  <div><label for=\"address\">address</label>\n    <input class=\"form-control\"  [(ngModel)]='address' type=\"text\">\n  \n    <div><label for=\"category\">Category</label>\n      <input class=\"form-control\"  [(ngModel)]='category' type=\"number\">\n  \n      <div><label for=\"review\">Review</label>\n        <input class=\"form-control\"  [(ngModel)]='review' type=\"text\">\n        <div><label for=\"cost\">cost</label>\n          <input class=\"form-control\"  [(ngModel)]='cost' type=\"number\">\n          </div>\n\n          <button (click)=\"submit()\"  class=\"btn btn-primary\">Submit</button>\n          </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/addproduct/addproduct.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/addproduct/addproduct.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\"><h1>Add Product Form</h1>\n<div>\n  <label for=\"seller\">Seller</label>\n  <input class=\"form-control\" [(ngModel)]='seller' type=\"text\">\n</div>\n<div>\n  <label for=\"name\">Name</label>\n  <input class=\"form-control\"  [(ngModel)]='pname' type=\"text\">\n</div>\n<div>\n  <label for=\"Company\">Comapny</label>\n  <input class=\"form-control\"   [(ngModel)]='company' type=\"text\">\n</div>\n<div>\n  <label for=\"category\">Category</label>\n  <input class=\"form-control\"  [(ngModel)]='category' type=\"text\">\n</div>\n<div><label for=\"price\">Price</label>\n  <input class=\"form-control\"  [(ngModel)]='price' type=\"number\">\n\n  <div><label for=\"quantity\">Qunatity</label>\n    <input class=\"form-control\"  [(ngModel)]='quantity' type=\"number\">\n\n    <div><label for=\"rating\">Rating</label>\n      <input class=\"form-control\"  [(ngModel)]='rating' type=\"number\">\n      <div><label for=\"image\">image</label>\n        <input class=\"form-control\"  [(ngModel)]='image' type=\"text\">\n\n</div>\n<button (click)=\"submit()\"  class=\"btn btn-primary\">Submit</button>\n<button (click)=\"show()\"  class=\"btn btn-warning\">Show</button>\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/admin.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/admin.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isorderempty\">No Order Found</div>\n<div *ngIf=\"!isorderempty\">\n  <div class=\"jumbotron\" *ngFor=\"let order of orders\" >\n    <h1 class=\"display-4\">Order id :{{order.oid}}</h1>\n    <div class=\"lead\">\n      <table class=\"table\">\n        <tbody>\n          <tr *ngFor=\"let item of order.items\">\n            <td><img src=\"{{item.image}}\" alt=\"\" style=\"height:50px;width:50px;\"></td>\n            <td>{{item.name}}</td>\n            <td>{{item.price}}</td>\n            <td>{{item.qunatity}}</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n    <hr class=\"my-4\">\n    <p>{{order.totalprice}}</p>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- \n<crausel></crausel>\n<login></login>\n\n<div class=\"row\">\n<product *ngFor=\"let product of products\" [product]='product' class=\"col-md-3\"></product>\n\n</div>\n<signup></signup>\n<addproduct></addproduct>\n\n\n\n<div *ngFor ='let product of products'class = \"alert alert-danger\">\n  <li>{{product.name}}</li>\n  <li>{{product.price}}</li>\n\n</div>\n<div *ngFor ='let user of users'class = \"alert alert-danger\">{{product.name}}</div>\n<addhotel></addhotel>\n\n<div class=\"alert alert-primary\" role=\"alert\">\n    A simple primary alert—check it out!\n  </div>\n  <div class=\"alert alert-secondary\" role=\"alert\">\n    A simple secondary alert—check it out!\n  </div>\n  <div class=\"alert alert-success\" role=\"alert\">\n    A simple success alert—check it out!\n  </div>\n  <div class=\"alert alert-danger\" role=\"alert\">\n    A simple danger alert—check it out!\n  </div>\n  <div class=\"alert alert-warning\" role=\"alert\">\n    A simple warning alert—check it out!\n  </div>\n  <div class=\"alert alert-info\" role=\"alert\">\n    A simple info alert—check it out!\n  </div>\n  <div class=\"alert alert-light\" role=\"alert\">\n    A simple light alert—check it out!\n  </div>\n  <div class=\"alert alert-dark\" role=\"alert\">\n    A simple dark alert—check it out!\n  </div>--> \n\n\n  <navbar></navbar>\n  <router-outlet></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/cart/cart.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/cart/cart.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div  *ngIf=\"iscartempty\" class=\"alert alert-danger\">\n  Your cart is empty\n</div>\n<table class=\"table\"  *ngIf=\"!iscartEmpty\">\n  <thead>\n    <tr>\n      <td></td>\n      <td>Product Name</td>\n      <td>Quantity</td>\n      <td>Product price</td>\n    </tr>\n  </thead>\n<tbody>\n  <tr *ngFor=\"let item of cartitems\">\n    <td><img src=\"{{item .image}}\" alt=\"\" style=\"height:50px; width:50px\"></td>\n    <td>{{item.pname}}</td>\n    <td>{{item.quantity}}</td>\n    <td>{{item.price}}</td>\n    <td><button class=\"btn btn-danger\" (click)=\"remove(item)\">Remove</button></td>\n    \n  </tr>\n</tbody>\n\n</table>\n<p>Your total price is:{{totalprice}}</p>\n<button routerLink=\"/checkout\" *ngIf=\"!iscartempty\" class=\"btn btn-primary\" (click)=\"checkout()\" >Checkout</button>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/checkout/checkout.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/checkout/checkout.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table\">\n  <thead>\n      <tr>\n          <td></td>\n          <td>Product Name</td>\n          <td>Quantity</td>\n          <td>Product price</td>\n        </tr>\n    </thead>\n    <tbody>\n    <tr *ngFor=\"let item of cartitems\">\n      <td><img src=\"{{item .image}}\" alt=\"\" style=\"height:50px; width:50px\"></td>\n      <td>{{item.pname}}</td>\n      <td>{{item.qunatity}}</td>\n      <td>{{item.price}}</td>\n    </tr>\n    </tbody>\n    \n \n</table>\n<div class=\"form-group\">\n    <label for=\"\">Total Price</label>\n    <input type=\"text\" class=\"form-control\" disabled [(ngModel)]=\"totalprice\">\n  </div>\n  <div   class=\"alert alert-warning\">\n      Enter your Details!\n    </div>\n\n\n\n\n\n\n\n\n<div class=\"container\" style=\"margin-top:30px \">\n  <div class=\"form-group\">\n    <input type=\"number\" class=\"form-control\" placeholder=\"Enter Mobile no\" [(ngModel)]=\"phone\">\n  </div>\n  <div class=\"form-group\">\n    <input type=\"text\" class=\"form-control\" placeholder=\"Enter Your name\" [(ngModel)]=\"name\">\n  </div>\n  <div class=\"form-group\">\n      <input type=\"text\" class=\"form-control\" placeholder=\"Enter Area\" [(ngModel)]=\"area\">\n    </div>\n    <div class=\"form-group\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"Enter Street\" [(ngModel)]=\"street\">\n      </div>\n      <div class=\"form-group\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"Enter City\" [(ngModel)]=\"city\">\n        </div>\n    <div class=\"form-group\">\n      <input type=\"number\" class=\"form-control\"  placeholder=\"Pincode\" [(ngModel)]=\"pincode\">\n    </div>\n    <div class=\"form-group\">\n        <input type=\"text\" class=\"form-control\"  placeholder=\"Enter Email\" [(ngModel)]=\"email\">\n      </div>\n    \n    <div class=\"form-group\">\n      <label for=\"\">Mode of Payment</label><br>\n    <input type=\"checkbox\" checked  disabled [(ngModel)]=\"modeofpayment\">\n    Cash on Delivery\n    </div>\n\n\n \n        \n  <button class=\"btn btn-primary\"  (click)=\"placeorder()\">Place Order</button>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/crausel/crausel.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/crausel/crausel.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"carouselExampleControls\" class=\"carousel slide\" data-ride=\"carousel\">\n    <div class=\"carousel-inner\">\n      <div class=\"carousel-item active\">\n        <img   style=\"height: 270px\" src=\"https://rukminim1.flixcart.com/flap/844/140/image/7a32d07b89eebb75.jpg?q=50\" class=\"d-block w-100\" alt=\"...\">\n      </div>\n      <div class=\"carousel-item\">\n        <img  style=\"height:270px\"src=\"https://resize.khabarindiatv.com/resize/newbucket/715_-/2019/05/flipkart-big-shopping-days-sale-2019-top-deals-1280x720-1557816501.jpg\" class=\"d-block w-100\" alt=\"...\">\n      </div>\n      <div class=\"carousel-item\">\n        <img style=\"height: 270px\" src=\"data:image/jpeg;base64,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\" class=\"d-block w-100\" alt=\"...\">\n      </div>\n    </div>\n    <a class=\"carousel-control-prev\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"prev\">\n      <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Previous</span>\n    </a>\n    <a class=\"carousel-control-next\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"next\">\n      <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Next</span>\n    </a>\n  </div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/deleteaccount/deleteaccount.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/deleteaccount/deleteaccount.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container jumbotron\" style=\"text-align: center\" >\n  <p>Are you sure you want to delete account ?<br>\n    Doing this will permanently delete all of your data!\n  </p>\n  <button style=\"margin:10px\"class=\"btn btn-primary\" (click)=\"deleteaccount()\">Yes</button>\n  <button class=\"btn btn-danger\" routerLink=\"/\">No</button>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/forgotpassword/forgotpassword.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/forgotpassword/forgotpassword.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class ='form-group'>\n  <label for=\"email\">Email</label>\n  <input [(ngModel)]='email' class ='form-control' type='text'>\n  <button style=\"margin:10px\" class=\"btn btn-primary\" (click)=\"forgotpassword()\">Send Password</button>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/homecomponent/homecomponent.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/homecomponent/homecomponent.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<crausel>></crausel>\n<div class='row'>\n<product  class= 'col-md-3 ' *ngFor=\"let product of products\" [product]='product'></product>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=container>\n <h1> Login Form!</h1>\n <form action=\"\">\n   <div class=\"form-group\">\n     <label for=\"eid\" >EmailID</label>\n     <br>\n     <input [(ngModel)]=\"email\" class=\"form-control\" type=\"text\" name=\"eid\" placeholder=\"enter emailID\">\n    </div>\n    <div class=\"form-group\"> \n      <label for=\"pwd\">Password</label>\n      <br>\n      <input [(ngModel)]=\"password\" class=\"form-control\" type=\"password\" name=\"pwd\"  placeholder=\"enter password\"> <!--sm is for size -->\n    </div>\n    <button (click)=\"login()\" class=\"btn btn-primary\">Login</button>  \n    <a style=\"margin-left: 20px\" routerLink=\"/forgotpassword\" >ForgotPassword</a>\n </form>\n\n</div>\n\n\n\n<!--(div>label+input)*3 multiple div ke liye\n    div.class class ke liye\n    div input[placeholder] attribute ke liye\n  -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/navbar/navbar.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/navbar/navbar.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n    <a class=\"navbar-brand\" routerLink=\"/\">{{projectname | uppercase }}</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\">\n        </span>\n    </button>\n  \n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" routerLink=\"/\">Home <span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/addproduct\">Add product</a>\n        </li>\n        <li class=\"nav-item dropdown\">\n          <a class=\"nav-link dropdown-toggle\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            Options\n          </a>\n          <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n            <a class=\"dropdown-item\"  *ngIf=\"isuserloggedin\"routerLink=\"/deleteaccount\">Delete Account</a>\n            <a class=\"dropdown-item\" routerLink=\"#\">Another action</a>\n            <div class=\"dropdown-divider\"></div>\n            <a class=\"dropdown-item\" routerLink=\"#\">Something else here</a>\n          </div>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link enabled\" routerLink=\"#\" tabindex=\"-1\" aria-disabled=\"true\">Disabled</a>\n        </li>\n      </ul>\n      <div *ngIf=\"!isuserloggedin\" class=\"form-inline my-2 my-lg-0\">\n        <button  style=\"margin:50\" routerLink=\"/login\" class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Login</button>\n        <button  style=\"margin:50\" routerLink=\"/signup\" class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Signup</button>\n      </div>\n      <!-- <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Login\" aria-label=\"Search\"> -->\n      <div *ngIf=\"isuserloggedin\" class=\"form-inline my-2 my-lg-0\">\n      <button  routerLink=\"/login\" class=\"btn btn-outline-success my-2 my-sm-0\"(click)=\"logout()\"   style =\"margin:20px\" type=\"logout\">Logout</button>\n      <button class=\"btn btn-outline-success my-2 my-sm-0\"  style =\"margin:20px\" routerLink=\"/orders\">My orders</button>\n      <button class=\"btn btn-outline-success my-2 my-sm-0\" style =\"margin:20px\" routerLink=\"/allorders\" >Admin</button>\n      <button  routerLink=\"/cart\" class=\"btn btn-outline-success my-2 my-sm-0\"    style =\"margin:20px\" type=\"cart\">Cart</button>\n     \n\n    </div>\n    </div>\n  </nav>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/orders/orders.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/orders/orders.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\" *ngFor=\"let order of orders\">\n    <h1 class=\"display-4\">Order id :{{order.oid}}</h1>\n    <div class=\"lead\">\n      <table class=\"table\">\n        <tbody>\n          <tr *ngFor=\"let item of order.items\">\n            <td><img src=\"{{item.image}}\" alt=\"\" style=\"height:50px;width:50px;\"></td>\n            <td>{{item.pname}}</td>\n            <td>{{item.price}}</td>\n            <td>{{item.qunatity}}</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n    <hr class=\"my-4\">\n    <p>{{order.totalprice}}</p>\n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/ordersucess/ordersucess.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/ordersucess/ordersucess.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"order\">\n    Thank you {{order.name}}<br>\n    Your Order has been successfully placed<br>\n    your OrderId is {{order.oid}}<br>\n    you order will be delivered in 5-10 days<br>\n    </div>\n    <button class=\"btn btn-primary\" routerLink=\"/\">Continue Shopping</button>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/product/product.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/product/product.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div (click)=\"showproduct()\" *ngIf='product' class=\"card\" style=\"width: 18rem;\">\n    <img  style =\"height:270px\" src={{product.image}} class=\"card-img-top\" alt=\"...\">\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">{{product.pname}}</h5>\n     \n     <!--- <p class=\"card-textC\">{{product.details}}</p>-->\n      <a  class=\"btn btn-primary\">{{product.price}}</a>\n    </div>\n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/productdetails/productdetails.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/productdetails/productdetails.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\" padding:20px \">\n  \n  <div class=\"row\">\n      <div class=\"col-md-6\">\n          \n<img src=\"{{product.image}}\" alt=\"image not avilable\" style= \"width: 416px; height: 416px\" ><br>\n          <button  class=\"btn btn-outline-info col-md-5\" style=\"padding: 10px\"  [disabled]='productalreadyincart' (click)=\"addtocart()\"  >Add to Cart</button>\n          <button (click)=\"buynow()\"class=\"btn btn-outline-success col-md-5\" style=\"padding: 10px\" >Buy now</button>\n      </div>\n      <div class=\"col-md-6\">\n\n          <table>\n              <tr>\n                  <td><h3>{{product.pname}}</h3></td>\n              </tr>\n              <tr>\n                  <td><h3>{{product.price}}</h3></td>\n              </tr>\n              <tr>\n\n                  <td><span><img src=\"https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/49f16fff-0a9d-48bf-a6e6-5980c9852f11.png?q=90\" width=\"18\" height=\"18\" class=\"_3Amlen\" ></span>No cost EMI ₹8,000/month. Standard EMI also availableView Plans</td></tr>\n\n              <tr>\n                  <td><span><img src=\"https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90\" width=\"18\" height=\"18\" class=\"_3Amlen\" ></span> Bank Offer10% Instant Discount* with Axis Bank Credit and Debit CardsT&C</td></tr>\n              <tr>\n                  <td><span><img src=\"https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90\" width=\"18\" height=\"18\" class=\"_3Amlen\" ></span>Bank Offer10% off* with Axis Bank Buzz Credit CardT&C</td></tr>\n              <tr>\n                  <td><span><img src=\"https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90\" width=\"18\" height=\"18\" class=\"_3Amlen\" ></span>Free 16GB SD Card & Camera Bag with this DSLR</td></tr>\n              <tr><td class=\"row\"><span class=\"col-md-4\">Seller</span>\n                  <span class=\"col-md-4\"> RetailNet</span>\n              </td></tr>\n              <tr>\n                  <td class=\"row\">\n                      <span class=\"col-md-4\">Highlights</span>\n\n                      <td><span class=\"col-md-4\"></span><ul><li>Effective Pixels: 24.2 MP</li>\n                          <li><span class=\"col-md-4\">Sensor Type: CMOS</span></li>\n                          <li><span class=\"col-md-4\"></span>WiFi Available</li>\n                          <li><span class=\"col-md-4\"></span>1080p at 60p + Time-Lapse</li></ul>\n\n                  </td></tr>\n          </table>\n      </div>\n  </div>\n\n</div >"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/signup/signup.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/signup/signup.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>SignUp Form!</h1>\n<div>\n\n  <div class=\"form-group\">\n    <label for=\"name\">Name</label>\n    <input  [(ngModel)]='name' class=\"form-control\" type=\"text\"></div>\n<div class=\"conatiner\"><label for=\"email\">Email</label><input   [(ngModel)]='email' class=\"form-control\" type=\"text\"></div>\n<div><label for=\"phn\">Phone No.</label><input [(ngModel)]='phone' class=\"form-control\" type=\"number\"></div>   <!--two binding  ng model-->\n<div><label for=\"pwd\">Password</label><input  [(ngModel)]='password' class=\"form-control\" type=\"password\"></div>\n<div><label for=\"age\">D.O.B</label><input  [(ngModel)]='dob' class=\"form-control\" type=\"date\"></div>\n<br>\n<button (click)=\"signup() \" class=\"btn btn-primary\">Signup</button>\n</div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/users/users.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/users/users.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class='table table-dark'>\n<tr>\n  <th>Name</th>\n  <th>Email</th>\n  <th>phone</th>\n</tr>\n\n<tr *ngFor='let user of users'>\n  <td>{{user.name}}</td>\n  <td>{{user.email}}</td>\n  <td>{{user.phone}}</td>\n</tr>\n\n</table>"

/***/ }),

/***/ "./src/app/addhotel/hotel.component.css":
/*!**********************************************!*\
  !*** ./src/app/addhotel/hotel.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZGhvdGVsL2hvdGVsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/addhotel/hotel.component.ts":
/*!*********************************************!*\
  !*** ./src/app/addhotel/hotel.component.ts ***!
  \*********************************************/
/*! exports provided: HotelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotelComponent", function() { return HotelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");




var apiurl = '/api/addhotel';
//var apiurl= 'http://localhost:7000/api/addhotel'
let HotelComponent = class HotelComponent {
    constructor(http, toastr) {
        this.http = http;
        this.toastr = toastr;
        this.name = '';
        this.city = '';
        this.address = '';
        this.category = '';
        this.acrooms = '';
        this.nonacroom = '';
        this.review = '';
        this.cost = "";
    }
    ngOnInit() {
    }
    submit() {
        var requestob = {
            name: this.name,
            city: this.city,
            category: this.category,
            acrooms: this.acrooms,
            nonacroom: this.nonacroom,
            cost: this.cost,
            address: this.address,
            review: this.review
        };
        console.log("done", requestob);
        this.http.post(apiurl, requestob).subscribe((response) => {
            console.log("response from hotel api", response);
            if (response['erro'])
                this.toastr.error(response['error']);
            else {
                this.toastr.success(response['msg']);
            }
        }, (error) => {
            console.log("error from product api", error);
        });
    }
};
HotelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'addhotel',
        template: __webpack_require__(/*! raw-loader!./hotel.component.html */ "./node_modules/raw-loader/index.js!./src/app/addhotel/hotel.component.html"),
        styles: [__webpack_require__(/*! ./hotel.component.css */ "./src/app/addhotel/hotel.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
], HotelComponent);



/***/ }),

/***/ "./src/app/addproduct/addproduct.component.css":
/*!*****************************************************!*\
  !*** ./src/app/addproduct/addproduct.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZHByb2R1Y3QvYWRkcHJvZHVjdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/addproduct/addproduct.component.ts":
/*!****************************************************!*\
  !*** ./src/app/addproduct/addproduct.component.ts ***!
  \****************************************************/
/*! exports provided: AddproductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddproductComponent", function() { return AddproductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





var apiurl = '/api/addproduct';
//var apiurl =  'http://localhost:7000/api/addproduct'
let AddproductComponent = class AddproductComponent {
    constructor(http, toastr, router) {
        this.http = http;
        this.toastr = toastr;
        this.router = router;
        this.pname = '';
        this.type = '';
        this.company = '';
        this.category = '';
        this.image = '';
        this.price = '';
        this.seller = '';
        this.quantity = "";
        this.rating = "";
        if (!localStorage.email) {
            router.navigate(['/login']);
        }
    }
    ngOnInit() {
    }
    submit() {
        var requestob = {
            price: this.price,
            pname: this.pname,
            category: this.category,
            type: this.type,
            company: this.company,
            seller: this.seller,
            quantity: this.quantity,
            rating: this.rating,
            image: this.image
        };
        console.log("done", requestob);
        this.http.post(apiurl, requestob).subscribe((response) => {
            console.log("response from product api", response);
            if (response['error'])
                this.toastr.error(response['error']);
            else {
                this.toastr.success(response['msg']);
            }
        }, (error) => {
            this.toastr.error(error);
            console.log("error from product api", error);
        });
    }
    show() {
        this.http.get(apiurl).subscribe((response) => {
            console.log(response['products']);
        }, (error) => {
        });
    }
};
AddproductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'addproduct',
        template: __webpack_require__(/*! raw-loader!./addproduct.component.html */ "./node_modules/raw-loader/index.js!./src/app/addproduct/addproduct.component.html"),
        styles: [__webpack_require__(/*! ./addproduct.component.css */ "./src/app/addproduct/addproduct.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], AddproductComponent);



/***/ }),

/***/ "./src/app/admin/admin.component.css":
/*!*******************************************!*\
  !*** ./src/app/admin/admin.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





const allordersapiurl = '/api/allorders';
//const allordersapiurl='http://localhost:7000/api/allorders'
let AdminComponent = class AdminComponent {
    constructor(http, toastr, router) {
        this.http = http;
        this.toastr = toastr;
        this.router = router;
        this.orders = [];
        this.isorderempty = true;
        if (localStorage.email) {
            http.get(allordersapiurl).subscribe((response) => {
                if (response['code'] == 200) {
                    this.orders = response['orders'];
                    console.log(response['orders']);
                    this.isorderempty = false;
                }
                else if (response['code'] = 404) {
                    this.isorderempty = true;
                }
                else {
                    toastr.error(response['error']);
                }
            }, (error) => {
                console.log(error);
            });
        }
        else {
            router.navigate(['/login']);
            toastr.warning('you are not logged in');
        }
    }
    ngOnInit() {
    }
};
AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin',
        template: __webpack_require__(/*! raw-loader!./admin.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/admin.component.html"),
        styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/admin/admin.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], AdminComponent);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common.service */ "./src/app/common.service.ts");





//var apiurl="http://localhost:7000/api/cartitems"
var apiurl = "/api/cartitems";
let AppComponent = class AppComponent {
    constructor(http, toastr, commonservice) {
        this.http = http;
        this.toastr = toastr;
        this.commonservice = commonservice;
        this.title = 'intro';
        if (localStorage.email) {
            http.post(apiurl, { email: localStorage.email }).subscribe((response) => {
                if (response["code"] == 200) {
                    commonservice.cartitems = response["cartitems"];
                }
            }, (error) => {
                toastr.error("error in cart");
            });
        }
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"], _common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _homecomponent_homecomponent_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./homecomponent/homecomponent.component */ "./src/app/homecomponent/homecomponent.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _crausel_crausel_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./crausel/crausel.component */ "./src/app/crausel/crausel.component.ts");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./product/product.component */ "./src/app/product/product.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _addproduct_addproduct_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./addproduct/addproduct.component */ "./src/app/addproduct/addproduct.component.ts");
/* harmony import */ var _addhotel_hotel_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./addhotel/hotel.component */ "./src/app/addhotel/hotel.component.ts");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./users/users.component */ "./src/app/users/users.component.ts");
/* harmony import */ var _forgotpassword_forgotpassword_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./forgotpassword/forgotpassword.component */ "./src/app/forgotpassword/forgotpassword.component.ts");
/* harmony import */ var _deleteaccount_deleteaccount_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./deleteaccount/deleteaccount.component */ "./src/app/deleteaccount/deleteaccount.component.ts");
/* harmony import */ var _productdetails_productdetails_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./productdetails/productdetails.component */ "./src/app/productdetails/productdetails.component.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/cart/cart.component.ts");
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./checkout/checkout.component */ "./src/app/checkout/checkout.component.ts");
/* harmony import */ var _discount_pipe__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./discount.pipe */ "./src/app/discount.pipe.ts");
/* harmony import */ var _ordersucess_ordersucess_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./ordersucess/ordersucess.component */ "./src/app/ordersucess/ordersucess.component.ts");
/* harmony import */ var _orders_orders_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./orders/orders.component */ "./src/app/orders/orders.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");









 //http client ke liye


















const routes = [
    { path: '', component: _homecomponent_homecomponent_component__WEBPACK_IMPORTED_MODULE_4__["HomecomponentComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"] },
    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_15__["SignupComponent"] },
    { path: 'addproduct', component: _addproduct_addproduct_component__WEBPACK_IMPORTED_MODULE_16__["AddproductComponent"] },
    { path: 'addhotel', component: _addhotel_hotel_component__WEBPACK_IMPORTED_MODULE_17__["HotelComponent"] },
    { path: 'allusers', component: _users_users_component__WEBPACK_IMPORTED_MODULE_18__["UsersComponent"] },
    { path: 'deleteaccount', component: _deleteaccount_deleteaccount_component__WEBPACK_IMPORTED_MODULE_20__["DeleteAccountComponent"] },
    { path: 'productdetails', component: _productdetails_productdetails_component__WEBPACK_IMPORTED_MODULE_21__["ProductdetailsComponent"] },
    { path: 'forgotpassword', component: _forgotpassword_forgotpassword_component__WEBPACK_IMPORTED_MODULE_19__["ForgotpasswordComponent"] },
    { path: 'product/:id', component: _productdetails_productdetails_component__WEBPACK_IMPORTED_MODULE_21__["ProductdetailsComponent"] },
    { path: "cart", component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_22__["CartComponent"] },
    { path: "checkout", component: _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_23__["CheckoutComponent"] },
    { path: "ordersucess/:oid", component: _ordersucess_ordersucess_component__WEBPACK_IMPORTED_MODULE_25__["OrdersucessComponent"] },
    { path: "orders", component: _orders_orders_component__WEBPACK_IMPORTED_MODULE_26__["OrdersComponent"] },
    { path: "allorders", component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_27__["AdminComponent"] }
];
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
            _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__["NavbarComponent"],
            _crausel_crausel_component__WEBPACK_IMPORTED_MODULE_13__["CrauselComponent"],
            _product_product_component__WEBPACK_IMPORTED_MODULE_14__["ProductComponent"],
            _signup_signup_component__WEBPACK_IMPORTED_MODULE_15__["SignupComponent"],
            _addproduct_addproduct_component__WEBPACK_IMPORTED_MODULE_16__["AddproductComponent"],
            _addhotel_hotel_component__WEBPACK_IMPORTED_MODULE_17__["HotelComponent"],
            _homecomponent_homecomponent_component__WEBPACK_IMPORTED_MODULE_4__["HomecomponentComponent"],
            _users_users_component__WEBPACK_IMPORTED_MODULE_18__["UsersComponent"],
            _forgotpassword_forgotpassword_component__WEBPACK_IMPORTED_MODULE_19__["ForgotpasswordComponent"],
            _deleteaccount_deleteaccount_component__WEBPACK_IMPORTED_MODULE_20__["DeleteAccountComponent"],
            _productdetails_productdetails_component__WEBPACK_IMPORTED_MODULE_21__["ProductdetailsComponent"],
            _cart_cart_component__WEBPACK_IMPORTED_MODULE_22__["CartComponent"],
            _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_23__["CheckoutComponent"],
            _discount_pipe__WEBPACK_IMPORTED_MODULE_24__["DiscountPipe"],
            _ordersucess_ordersucess_component__WEBPACK_IMPORTED_MODULE_25__["OrdersucessComponent"],
            _orders_orders_component__WEBPACK_IMPORTED_MODULE_26__["OrdersComponent"],
            _admin_admin_component__WEBPACK_IMPORTED_MODULE_27__["AdminComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(routes),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrModule"].forRoot(),
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/cart/cart.component.css":
/*!*****************************************!*\
  !*** ./src/app/cart/cart.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhcnQvY2FydC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/cart/cart.component.ts":
/*!****************************************!*\
  !*** ./src/app/cart/cart.component.ts ***!
  \****************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common.service */ "./src/app/common.service.ts");






//const cartproductsapiurl="http://localhost:7000/api/cartitems"
const cartproductsapiurl = "/api/cartitems";
const cartitemmodelapiurl = "/api/deleteitem";
//const cartitemmodelapiurl="http://localhost:7000/api/deleteitem"
let CartComponent = class CartComponent {
    constructor(http, toastr, router, commonservice) {
        this.http = http;
        this.toastr = toastr;
        this.router = router;
        this.commonservice = commonservice;
        this.cartitems = [];
        this.iscartempty = true;
        this.totalprice = 0;
        if (localStorage.email) {
            if (commonservice.cartitems.length > 0) {
                console.log(">>>>>>>>>>> coming from common service", commonservice.cartitems);
                this.cartitems = commonservice.cartitems;
                this.iscartempty = false;
            }
            else {
                console.log("enetered into else");
                http.post(cartproductsapiurl, { email: localStorage.email }).subscribe((response) => {
                    if (response["code"] == 200) {
                        this.cartitems = response["cartitems"];
                        commonservice.cartitems = response['cartitems'];
                        this.iscartempty = false;
                    }
                    else {
                        this.iscartempty = true;
                        toastr.error(response['error']);
                    }
                }, (error) => {
                    toastr.error("error in cart");
                });
            }
        }
        else {
            router.navigate(['/login']);
            toastr.warning("you are not logged in");
        }
    }
    ngDoCheck() {
        this.totalprice = 0;
        this.commonservice.cartitems.forEach((each) => {
            console.log(each, ">>>>>>>");
            this.totalprice = this.totalprice + each.price;
        });
    }
    ngOnInit() {
    }
    remove(item) {
        var requestob = { email: localStorage.email, pid: item.pid };
        console.log("rrequest", requestob);
        this.http.post(cartitemmodelapiurl, requestob).subscribe((response) => {
            console.log(response);
            if (response['code'] == 200) {
                this.toastr.success("Cart Item Deleted");
                var index = this.commonservice.cartitems.indexOf(item);
                this.commonservice.cartitems.splice(index, 1);
                if (this.commonservice.cartitems.length <= 0) {
                    this.iscartempty = true;
                }
                this.totalprice = this.totalprice - item.price;
            }
            else {
                this.toastr.error(response['error']);
            }
        }, (error) => {
            this.toastr.error("Internal server error");
        });
    }
    checkout() {
        localStorage.totalprice = this.totalprice;
        this.router.navigate(['/checkout']);
    }
};
CartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cart',
        template: __webpack_require__(/*! raw-loader!./cart.component.html */ "./node_modules/raw-loader/index.js!./src/app/cart/cart.component.html"),
        styles: [__webpack_require__(/*! ./cart.component.css */ "./src/app/cart/cart.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"]])
], CartComponent);



/***/ }),

/***/ "./src/app/checkout/checkout.component.css":
/*!*************************************************!*\
  !*** ./src/app/checkout/checkout.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoZWNrb3V0L2NoZWNrb3V0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/checkout/checkout.component.ts":
/*!************************************************!*\
  !*** ./src/app/checkout/checkout.component.ts ***!
  \************************************************/
/*! exports provided: CheckoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutComponent", function() { return CheckoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common.service */ "./src/app/common.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");






var cartapiurl = "/api/cartitems";
var createorderapi = "/api/addorder";
//var cartapiurl = "http://localhost:7000/api/cartitems"
//var createorderapi= "http://localhost:7000/api/addorder"
let CheckoutComponent = class CheckoutComponent {
    constructor(currentroute, commonservice, http, router, toastr) {
        this.currentroute = currentroute;
        this.commonservice = commonservice;
        this.http = http;
        this.router = router;
        this.toastr = toastr;
        this.phone = '';
        this.name = "";
        this.area = "";
        this.city = "";
        this.street = "";
        this.totalprice = "";
        this.pincode = "";
        this.modeofpayment = "";
        if (localStorage.email) {
            if (commonservice.cartitems.length > 0) {
                this.cartitems = commonservice.cartitems;
            }
            else {
                http.post(cartapiurl, { email: localStorage.email }).subscribe((response) => {
                    if (response['code'] = 200) {
                        this.cartitems = response['cartitems'];
                        commonservice.cartitems = response['cartitems'];
                    }
                }, (error) => {
                    console.log('error in getting product');
                });
            }
            if (this.cartitems.length <= 0) {
                router.navigate(['/']);
                toastr.warning("your cart is empty");
            }
            if (localStorage.totalprice) {
                this.totalprice = localStorage.totalprice;
            }
        }
        else {
            router.navigate['/login'];
            toastr.warning("you are not logged in");
        }
    }
    placeorder() {
        var requestob = {
            items: this.cartitems,
            email: localStorage.email,
            name: this.name,
            phone: this.phone,
            area: this.area,
            city: this.city,
            street: this.street,
            pincode: this.pincode,
            totalprice: this.totalprice,
            modeofpayment: this.modeofpayment
        };
        console.log("request objeect for order", requestob);
        this.http.post(createorderapi, requestob)
            .subscribe((response) => {
            console.log("response from create order api", response);
            if (response["code"] == 200) {
                console.log("order placed");
                this.toastr.success(response["msg"]);
                this.commonservice.cartitems = [];
                console.log(response);
                var url = "/ordersucess/" + response["order"]['oid'];
                this.router.navigate([url]);
            }
            else {
                this.toastr.error(response['error']);
            }
        }, (error) => {
            this.toastr.error("Internal Server error");
            console.log("error from create order api", error);
        });
    }
    ngOnInit() {
    }
};
CheckoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-checkout',
        template: __webpack_require__(/*! raw-loader!./checkout.component.html */ "./node_modules/raw-loader/index.js!./src/app/checkout/checkout.component.html"),
        styles: [__webpack_require__(/*! ./checkout.component.css */ "./src/app/checkout/checkout.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
], CheckoutComponent);



/***/ }),

/***/ "./src/app/common.service.ts":
/*!***********************************!*\
  !*** ./src/app/common.service.ts ***!
  \***********************************/
/*! exports provided: CommonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonService", function() { return CommonService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CommonService = class CommonService {
    constructor() {
        this.products = null;
        this.cartitems = [];
        this.totalprice = null;
    }
};
CommonService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CommonService);



/***/ }),

/***/ "./src/app/crausel/crausel.component.css":
/*!***********************************************!*\
  !*** ./src/app/crausel/crausel.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NyYXVzZWwvY3JhdXNlbC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/crausel/crausel.component.ts":
/*!**********************************************!*\
  !*** ./src/app/crausel/crausel.component.ts ***!
  \**********************************************/
/*! exports provided: CrauselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrauselComponent", function() { return CrauselComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CrauselComponent = class CrauselComponent {
    constructor() { }
    ngOnInit() {
    }
};
CrauselComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'crausel',
        template: __webpack_require__(/*! raw-loader!./crausel.component.html */ "./node_modules/raw-loader/index.js!./src/app/crausel/crausel.component.html"),
        styles: [__webpack_require__(/*! ./crausel.component.css */ "./src/app/crausel/crausel.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CrauselComponent);



/***/ }),

/***/ "./src/app/deleteaccount/deleteaccount.component.css":
/*!***********************************************************!*\
  !*** ./src/app/deleteaccount/deleteaccount.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbGV0ZWFjY291bnQvZGVsZXRlYWNjb3VudC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/deleteaccount/deleteaccount.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/deleteaccount/deleteaccount.component.ts ***!
  \**********************************************************/
/*! exports provided: DeleteAccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteAccountComponent", function() { return DeleteAccountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");





//const deleteuserapiurl="http://localhost:7000/api/deleteaccount"
const deleteuserapiurl = "/api/deleteaccount";
let DeleteAccountComponent = class DeleteAccountComponent {
    constructor(http, router, toastr) {
        this.http = http;
        this.router = router;
        this.toastr = toastr;
        if (!localStorage.email) {
            router.navigate(["/"]);
            this.toastr.error("You are not logged in");
        }
    }
    deleteaccount() {
        this.http.post(deleteuserapiurl, { email: localStorage.email }).subscribe((response) => {
            console.log(response);
            if (response["code"] == 200) {
                this.toastr.success(response["msg"]);
                localStorage.clear();
                this.router.navigate(["/"]);
            }
            else {
                this.toastr.error(response["error"]);
            }
        }, (error) => {
            console.log("error", error);
        });
    }
    ngOnInit() {
    }
};
DeleteAccountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-delete-account',
        template: __webpack_require__(/*! raw-loader!./deleteaccount.component.html */ "./node_modules/raw-loader/index.js!./src/app/deleteaccount/deleteaccount.component.html"),
        styles: [__webpack_require__(/*! ./deleteaccount.component.css */ "./src/app/deleteaccount/deleteaccount.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
], DeleteAccountComponent);



/***/ }),

/***/ "./src/app/discount.pipe.ts":
/*!**********************************!*\
  !*** ./src/app/discount.pipe.ts ***!
  \**********************************/
/*! exports provided: DiscountPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscountPipe", function() { return DiscountPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DiscountPipe = class DiscountPipe {
    transform(value, args) {
        console.log("value is");
        return null;
    }
};
DiscountPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'discount'
    })
], DiscountPipe);



/***/ }),

/***/ "./src/app/forgotpassword/forgotpassword.component.css":
/*!*************************************************************!*\
  !*** ./src/app/forgotpassword/forgotpassword.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvcmdvdHBhc3N3b3JkL2ZvcmdvdHBhc3N3b3JkLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/forgotpassword/forgotpassword.component.ts":
/*!************************************************************!*\
  !*** ./src/app/forgotpassword/forgotpassword.component.ts ***!
  \************************************************************/
/*! exports provided: ForgotpasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotpasswordComponent", function() { return ForgotpasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





var apiurl = '/api/forgotpassword';
//var apiurl="http://localhost:7000/api/forgotpassword"
let ForgotpasswordComponent = class ForgotpasswordComponent {
    constructor(http, toastr, route) {
        this.http = http;
        this.toastr = toastr;
        this.route = route;
        this.email = "";
        if (localStorage.email) {
            route.navigate(['/']);
        }
    }
    ngOnInit() {
    }
    forgotpassword() {
        this.http.post(apiurl, { email: this.email }).subscribe((response) => {
            if (response['error'])
                this.toastr.error(response['error']);
            else {
                this.toastr.success(response["msg"]);
            }
        }, (error) => {
            this.toastr.error("error in forgetting password");
        });
    }
};
ForgotpasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forgotpassword',
        template: __webpack_require__(/*! raw-loader!./forgotpassword.component.html */ "./node_modules/raw-loader/index.js!./src/app/forgotpassword/forgotpassword.component.html"),
        styles: [__webpack_require__(/*! ./forgotpassword.component.css */ "./src/app/forgotpassword/forgotpassword.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], ForgotpasswordComponent);



/***/ }),

/***/ "./src/app/homecomponent/homecomponent.component.css":
/*!***********************************************************!*\
  !*** ./src/app/homecomponent/homecomponent.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWVjb21wb25lbnQvaG9tZWNvbXBvbmVudC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/homecomponent/homecomponent.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/homecomponent/homecomponent.component.ts ***!
  \**********************************************************/
/*! exports provided: HomecomponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomecomponentComponent", function() { return HomecomponentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common.service */ "./src/app/common.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");





var apiurl = '/api/allproducts';
//var apiurl='http://localhost:7000/api/allproducts'
let HomecomponentComponent = class HomecomponentComponent {
    constructor(http, commonservice, toastr) {
        this.http = http;
        this.commonservice = commonservice;
        this.toastr = toastr;
        this.products = [];
        if (commonservice.products) {
            this.products = commonservice.products;
        }
        else {
            http.get(apiurl).subscribe((response) => {
                if (response["error"]) {
                    toastr.error(response["error"]);
                }
                else {
                    this.products = response["products"];
                    commonservice.products = response["products"];
                }
            }, (error) => {
                console.log("error in product finding", error);
            });
        }
    }
    ngOnInit() {
    }
};
HomecomponentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-homecomponent',
        template: __webpack_require__(/*! raw-loader!./homecomponent.component.html */ "./node_modules/raw-loader/index.js!./src/app/homecomponent/homecomponent.component.html"),
        styles: [__webpack_require__(/*! ./homecomponent.component.css */ "./src/app/homecomponent/homecomponent.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
], HomecomponentComponent);



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





var apiurl = "/api/login";
//var apiurl = "http://localhost:7000/api/login"
let LoginComponent = class LoginComponent {
    constructor(http, toastr, router) {
        this.http = http;
        this.toastr = toastr;
        this.router = router;
        this.email = '';
        this.password = '';
        if (localStorage.email) {
            router.navigate(['/']);
        }
    }
    ngOnInit() {
    }
    login() {
        var requestob = {
            email: this.email,
            password: this.password
        };
        console.log('user entered', requestob);
        this.http.post(apiurl, requestob).subscribe((response) => {
            console.log('login ka response', response);
            if (response['code'] == 200) {
                this.toastr.success(response['msg']);
                localStorage.email = response.data.email;
                localStorage.name = response.data.name;
                this.router.navigate(['/']);
            }
            else {
                this.toastr.error(response['error']);
            }
        }, (error) => {
            console.log('error from login api', error);
        });
    }
};
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], LoginComponent);



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NavbarComponent = class NavbarComponent {
    constructor() {
        this.projectname = "Mean Project";
        this.isuserloggedin = false;
        if (localStorage.email) {
            this.isuserloggedin = true;
        }
    }
    ngDoCheck() {
        if (localStorage.email) {
            this.isuserloggedin = true;
        }
        else {
            this.isuserloggedin = false;
        }
    }
    ngOnInit() {
    }
    logout() {
        this.isuserloggedin = false;
        localStorage.clear();
    }
};
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'navbar',
        template: __webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/navbar/navbar.component.html"),
        styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], NavbarComponent);



/***/ }),

/***/ "./src/app/orders/orders.component.css":
/*!*********************************************!*\
  !*** ./src/app/orders/orders.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZGVycy9vcmRlcnMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/orders/orders.component.ts":
/*!********************************************!*\
  !*** ./src/app/orders/orders.component.ts ***!
  \********************************************/
/*! exports provided: OrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersComponent", function() { return OrdersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");





const ordersapiurl = "/api/orders";
//const ordersapiurl="http://localhost:7000/api/orders"
let OrdersComponent = class OrdersComponent {
    constructor(http, router, toastr) {
        this.http = http;
        this.router = router;
        this.toastr = toastr;
        if (!localStorage.email) {
            router.navigate(['/']);
        }
        else {
            http.post(ordersapiurl, { email: localStorage.email }).subscribe((response) => {
                if (response["code"] == 200) {
                    this.orders = response["orders"];
                }
                else {
                    toastr.error(response["error"]);
                }
            }, (error) => {
                console.log(error);
            });
        }
    }
    ngOnInit() {
    }
};
OrdersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-orders',
        template: __webpack_require__(/*! raw-loader!./orders.component.html */ "./node_modules/raw-loader/index.js!./src/app/orders/orders.component.html"),
        styles: [__webpack_require__(/*! ./orders.component.css */ "./src/app/orders/orders.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
], OrdersComponent);



/***/ }),

/***/ "./src/app/ordersucess/ordersucess.component.css":
/*!*******************************************************!*\
  !*** ./src/app/ordersucess/ordersucess.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZGVyc3VjZXNzL29yZGVyc3VjZXNzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/ordersucess/ordersucess.component.ts":
/*!******************************************************!*\
  !*** ./src/app/ordersucess/ordersucess.component.ts ***!
  \******************************************************/
/*! exports provided: OrdersucessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersucessComponent", function() { return OrdersucessComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");





var getorderapiurl = "/api/getorder";
//var getorderapiurl="http://localhost:7000/api/getorder"
let OrdersucessComponent = class OrdersucessComponent {
    constructor(currentroute, http, router, toastr) {
        this.currentroute = currentroute;
        this.http = http;
        this.router = router;
        this.toastr = toastr;
        if (!localStorage.email) {
            router.navigate(['/']);
        }
        var oid = currentroute.snapshot.params.oid;
        if (oid) {
            http.post(getorderapiurl, { oid: oid }).subscribe((response) => {
                if (response["code"] == 200) {
                    console.log(response["order"]);
                    this.order = response["order"];
                }
                else {
                    toastr.error(response["error"]);
                }
            }, (error) => {
                toastr.error("internal server error");
                console.log(error);
            });
        }
        else {
            router.navigate(["/"]);
        }
    }
    ngOnInit() {
    }
};
OrdersucessComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ordersucess',
        template: __webpack_require__(/*! raw-loader!./ordersucess.component.html */ "./node_modules/raw-loader/index.js!./src/app/ordersucess/ordersucess.component.html"),
        styles: [__webpack_require__(/*! ./ordersucess.component.css */ "./src/app/ordersucess/ordersucess.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
], OrdersucessComponent);



/***/ }),

/***/ "./src/app/product/product.component.css":
/*!***********************************************!*\
  !*** ./src/app/product/product.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QvcHJvZHVjdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/product/product.component.ts":
/*!**********************************************!*\
  !*** ./src/app/product/product.component.ts ***!
  \**********************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let ProductComponent = class ProductComponent {
    // product= {
    // "name":"Realme 2 pro",\\\\\\\\\\\
    // "price":"Buy now = 159$",
    // "details":"A great device at great price!",
    // "image":"/assets/realme.jpg"
    //     }
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    showproduct() {
        var url = "/product/" + this.product.pid;
        this.router.navigate([url]);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ProductComponent.prototype, "product", void 0);
ProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'product',
        template: __webpack_require__(/*! raw-loader!./product.component.html */ "./node_modules/raw-loader/index.js!./src/app/product/product.component.html"),
        styles: [__webpack_require__(/*! ./product.component.css */ "./src/app/product/product.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], ProductComponent);



/***/ }),

/***/ "./src/app/productdetails/productdetails.component.css":
/*!*************************************************************!*\
  !*** ./src/app/productdetails/productdetails.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RkZXRhaWxzL3Byb2R1Y3RkZXRhaWxzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/productdetails/productdetails.component.ts":
/*!************************************************************!*\
  !*** ./src/app/productdetails/productdetails.component.ts ***!
  \************************************************************/
/*! exports provided: ProductdetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductdetailsComponent", function() { return ProductdetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common.service */ "./src/app/common.service.ts");







//var addtocartapiurl="http://localhost:7000/api/addtocart"
var addtocartapiurl = "/api/addtocart";
//var cartitemsapiurl="http://localhost:7000/api/cartitems"
var cartitemsapiurl = "/api/cartitems";
let ProductdetailsComponent = class ProductdetailsComponent {
    constructor(http, currentroute, toastr, router, commonservice) {
        this.http = http;
        this.currentroute = currentroute;
        this.toastr = toastr;
        this.router = router;
        this.commonservice = commonservice;
        this.product = {};
        this.productalreadyincart = false;
        console.log("current route ki details", this.currentroute.snapshot);
        var productid = this.currentroute.snapshot.params.id;
        //var apiurl = "http://localhost:7000/api/product/"+ productid
        var apiurl = "/api/product/" + productid;
        http.get(apiurl).subscribe((response) => {
            if (response["code"] == 200) {
                console.log(response["data"]);
                this.product = response["data"];
                if (commonservice.cartitems.length > 0) {
                    commonservice.cartitems.forEach((each) => {
                        console.log(each.pid);
                        if (each.pid == this.product["pid"]) {
                            this.productalreadyincart = true;
                        }
                    });
                }
                else {
                    http.post(cartitemsapiurl, { email: localStorage.email }).subscribe((response) => {
                        if (response["code"] == 200) {
                            response["cartitems"].forEach((each) => {
                                if (each.pid == this.product["pid"]) {
                                    this.productalreadyincart = true;
                                }
                            });
                        }
                        else {
                            console.log("error in getting cart items from cart");
                        }
                    }, (error) => {
                        console.log("error", error);
                    });
                }
            }
            else {
                toastr.error(response["error"]);
            }
        }, (error) => {
            console.log("error in showing product", error);
            toastr.error("error in showing product");
        });
    }
    ngOnInit() {
    }
    addtocart(movetocart) {
        this.productalreadyincart = true;
        if (localStorage.email) {
            var cart = {
                email: localStorage.email,
                pname: this.product["pname"],
                image: this.product['image'],
                price: this.product["price"],
                pid: this.product["pid"]
            };
            this.http.post(addtocartapiurl, cart).subscribe((response) => {
                if (response['code'] == 200) {
                    this.toastr.success("Added to cart");
                    this.commonservice.cartitems.push(response["cartitem"]);
                    if (movetocart) {
                        this.router.navigate(['/cart']);
                    }
                }
                else {
                    this.toastr.error("Error in adding", response['error']);
                }
            }, (error) => {
                this.toastr.error("error in adding to add cart");
            });
        }
        else {
            this.router.navigate(["/login"]);
        }
    }
    buynow() {
        if (localStorage.email) {
            if (!this.productalreadyincart) {
                this.addtocart(true);
            }
            else {
                this.router.navigate(['/cart']);
            }
        }
        else {
            this.router.navigate(['/login']);
        }
    }
};
ProductdetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-productdetails',
        template: __webpack_require__(/*! raw-loader!./productdetails.component.html */ "./node_modules/raw-loader/index.js!./src/app/productdetails/productdetails.component.html"),
        styles: [__webpack_require__(/*! ./productdetails.component.css */ "./src/app/productdetails/productdetails.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"]])
], ProductdetailsComponent);



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/*!*********************************************!*\
  !*** ./src/app/signup/signup.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





var apiurl = "/api/signup";
//var apiurl="http://localhost:7000/api/signup"
let SignupComponent = class SignupComponent {
    constructor(http, toastr, router) {
        this.http = http;
        this.toastr = toastr;
        this.router = router;
        this.name = '';
        this.email = '';
        this.phone = '';
        this.password = '';
        this.dob = '';
        if (localStorage.email) {
            router.navigate(['/']);
        }
    }
    ngOnInit() {
    }
    signup() {
        var requestob = {
            name: this.name,
            email: this.email,
            password: this.password,
            phone: this.phone,
            dob: this.dob
        };
        console.log('done', requestob);
        this.http.post(apiurl, requestob).subscribe((response) => {
            console.log("response from signup api", response);
            if (response['error'])
                this.toastr.error(response['error']);
            else if (response['code'] == 11000) {
                this.toastr.warning(response['error']);
            }
            else {
                this.toastr.success(response['msg']);
                this.router.navigate(['./login']);
            }
        }, (error) => {
            console.log("error from signup api", error);
        });
    }
};
SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'signup',
        template: __webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/index.js!./src/app/signup/signup.component.html"),
        styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/signup/signup.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], SignupComponent);



/***/ }),

/***/ "./src/app/users/users.component.css":
/*!*******************************************!*\
  !*** ./src/app/users/users.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL3VzZXJzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/users/users.component.ts":
/*!******************************************!*\
  !*** ./src/app/users/users.component.ts ***!
  \******************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");




var apiurl = "/api/allusers";
//var apiurl="http://localhost:7000/api/allusers"
let UsersComponent = class UsersComponent {
    constructor(http, toastr) {
        this.http = http;
        this.toastr = toastr;
        http.get(apiurl).subscribe((response) => {
            if (response['code'] == 404) {
                toastr.warning("No user found ");
            }
            else if (response['code'] = 200) {
                this.users = response['users'];
            }
            else {
                toastr.error("error in  finding user");
            }
        });
    }
    ngOnInit() {
    }
};
UsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-users',
        template: __webpack_require__(/*! raw-loader!./users.component.html */ "./node_modules/raw-loader/index.js!./src/app/users/users.component.html"),
        styles: [__webpack_require__(/*! ./users.component.css */ "./src/app/users/users.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
], UsersComponent);



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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
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

module.exports = __webpack_require__(/*! D:\MEAN stack\intro\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map