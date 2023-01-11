// Inheritance: Creating a new class by basing it on an existing one, inheriting its attributes and methods.
// Imagine you have a toy airplane and a toy helicopter. 
// They're both toy vehicles, but they have different shapes and can do different things. 
// The toy airplane can fly and the toy helicopter can hover. But they both have wheels and can roll on the ground.
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
var Pet = /** @class */ (function () {
    function Pet(name, age) {
        this.name = name;
        this.age = age;
    }
    Pet.prototype.getName = function () {
        return this.name;
    };
    Pet.prototype.getAge = function () {
        return this.age;
    };
    return Pet;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, age, breed) {
        var _this = _super.call(this, name, age) || this;
        _this.breed = breed;
        return _this;
    }
    Dog.prototype.bark = function () {
        return "".concat(this.name, " is barking!");
    };
    Dog.prototype.getBreed = function () {
        return this.breed;
    };
    return Dog;
}(Pet));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name, age, furColor) {
        var _this = _super.call(this, name, age) || this;
        _this.furColor = furColor;
        return _this;
    }
    Cat.prototype.meow = function () {
        return "".concat(this.name, " is meowing!");
    };
    Cat.prototype.getFurColor = function () {
        return this.furColor;
    };
    return Cat;
}(Pet));
var dog1 = new Dog("Fido", 4, "Golden Retriever");
console.log("Name: ".concat(dog1.getName()));
console.log("Age: ".concat(dog1.getAge()));
console.log("Breed: ".concat(dog1.getBreed()));
console.log(dog1.bark());
var cat1 = new Cat("Whiskers", 2, "white");
console.log("Name: ".concat(cat1.getName()));
console.log("Age: ".concat(cat1.getAge()));
console.log("Fur Color: ".concat(cat1.getFurColor()));
console.log(cat1.meow());
