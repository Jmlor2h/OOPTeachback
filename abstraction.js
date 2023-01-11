/* Abstraction: Defining an object's characteristics and behavior in a general and simplified way, hiding irrelevant details.
Imagine you want to listen to music. You just need to know how to use your phone or music player,
you don't need to know how the speakers work internally,
you just know that if you play a song, you will hear music. */
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
var Vehicle = /** @class */ (function () {
    function Vehicle(wheels, color) {
        this.wheels = wheels;
        this.color = color;
    }
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(color) {
        return _super.call(this, 4, color) || this;
    }
    Car.prototype.drive = function () {
        console.log("The ".concat(this.color, " car is driving on ").concat(this.wheels, " wheels"));
    };
    Car.prototype.stop = function () {
        console.log("The ".concat(this.color, " car has stopped"));
    };
    return Car;
}(Vehicle));
var honda = new Car("Red");
honda.drive();
honda.stop();
var Bike = /** @class */ (function (_super) {
    __extends(Bike, _super);
    function Bike(color) {
        return _super.call(this, 2, color) || this;
    }
    Bike.prototype.drive = function () {
        console.log("The ".concat(this.color, " bike is driving on ").concat(this.wheels, " wheels"));
    };
    Bike.prototype.stop = function () {
        console.log("The ".concat(this.color, " bike has stopped"));
    };
    return Bike;
}(Vehicle));
var bicycle = new Bike("Blue");
bicycle.drive();
bicycle.stop();
/*
these classes inherit the common features from the parent class and also implement the abstract methods in their own way.
This abstraction allows for the separation of implementation and interface,
the user of the class can work with the base class and its subclasses without needing to know the specific implementation details,
and this is the main advantage of abstraction, the user only need to know the relevant details and the interface of the class,
and not the implementation details.
*/ 
