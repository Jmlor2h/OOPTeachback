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
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.makeSound = function () {
        return "Some Generic Sound";
    };
    return Animal;
}());
var petDog = /** @class */ (function (_super) {
    __extends(petDog, _super);
    function petDog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    petDog.prototype.makeSound = function () {
        return "Woof";
    };
    return petDog;
}(Animal));
var petCat = /** @class */ (function (_super) {
    __extends(petCat, _super);
    function petCat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    petCat.prototype.makeSound = function () {
        return "Meow";
    };
    return petCat;
}(Animal));
var Doggy = new petDog("Doggy");
console.log(Doggy.makeSound()); // "Woof"
var Kitty = new petCat("Kitty");
console.log(Kitty.makeSound()); // "Meow"
