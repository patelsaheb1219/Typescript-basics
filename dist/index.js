"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Basic Types
var id = 5;
var company = 'Patel Saheb';
var isPublished = true;
var x = "Hello";
var ids = [1, 2, 3, 5];
var arr = ['Kishan', 1, 3];
// Tuple
var person = [1, 'Kishan', true];
// Tuple array
var employee;
employee = [
    [1, 'Kishan'],
    [2, 'Rahul']
];
// Union
var p_id;
p_id = '22';
// Enum
var Direction1;
(function (Direction1) {
    Direction1["Up"] = "Up";
    Direction1["Down"] = "Down";
    Direction1["Left"] = "Left";
    Direction1["Right"] = "Right";
})(Direction1 || (Direction1 = {}));
;
var user = {
    id: 1,
    name: 'John',
    age: 23
};
// Type Assertion
var cid = 1;
var customerId = cid;
// Funstions
function addNum(x, y) {
    return x + y;
}
function log(message) {
    console.log(message);
}
log(addNum(1, 2));
log(2);
var user1 = {
    id: 1,
    name: 'John'
};
var add = function (x, y) { return x + y; };
var subtract = function (x, y) { return x - y; };
var Person = /** @class */ (function () {
    function Person(id, name) {
        this.id = id;
        this.name = name;
    }
    Person.prototype.register = function () {
        return this.name + " is registered";
    };
    return Person;
}());
var person1 = new Person(1, 'Kishan');
var person2 = new Person(2, 'Mike');
person2.id = 5;
console.log(person1);
console.log(person1.register());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(id, name, position) {
        var _this = _super.call(this, id, name) || this;
        _this.position = position;
        return _this;
    }
    return Employee;
}(Person));
var employee1 = new Employee(1, 'Kishan', 'Software Developer');
console.log(employee1.register());
// Generic
function getArray(items) {
    return new Array().concat(items);
}
;
var numArray = getArray([1, 2, 3, 4]);
var strArray = getArray(['kishan', 'rahul', 'ravi']);
