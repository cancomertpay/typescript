"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleDataSource = void 0;
var Product_1 = require("./Product");
var SimpleDataSource = /** @class */ (function () {
    function SimpleDataSource() {
        this.products = new Array(new Product_1.Product(1, "Samsung S5", "Cell Phone", 1000), new Product_1.Product(2, "Samsung S6", "Cell Phone", 2000), new Product_1.Product(3, "Samsung S7", "Cell Phone", 3000), new Product_1.Product(4, "Samsung S8", "Cell Phone", 4000));
    }
    SimpleDataSource.prototype.getProducts = function () {
        return this.products;
    };
    return SimpleDataSource;
}());
exports.SimpleDataSource = SimpleDataSource;
