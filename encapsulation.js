/*
Encapsulation: Wrapping an object's properties and methods inside a protective barrier, allowing for controlled access.
Imagine you have a jewelry box and you put all your jewelry inside.
You can lock the jewelry box and keep your jewelry safe and protected.
*/
// Encapsulation
var Person = /** @class */ (function () {
    function Person(age) {
        this._age = age;
    }
    Person.prototype.getAge = function () {
        return this._age;
    };
    Person.prototype.setAge = function (age) {
        this._age = age;
    };
    return Person;
}());
var John = new Person(15);
console.log(John.getAge());
/*
In this example, the _age property is marked as private, which means it can only be accessed from within the Person class.
We have public methods getAge() and setAge() that can be used to access the _age property and change the age.
This is providing encapsulation of the internal state(age) of the Person object.
*/
