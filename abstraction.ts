/* Abstraction: Defining an object's characteristics and behavior in a general and simplified way, hiding irrelevant details.
Imagine you want to listen to music. You just need to know how to use your phone or music player,
you don't need to know how the speakers work internally, 
you just know that if you play a song, you will hear music. */

abstract class Vehicle {
    protected wheels: number;
    protected color: string;

    constructor(wheels: number, color: string) {
        this.wheels = wheels;
        this.color = color;
    }

    abstract drive(): void; // abstraction
    abstract stop(): void; // abstraction
}

class Car extends Vehicle {
    constructor(color: string) {
        super(4, color);
    }
    drive(): void {
        console.log(`The ${this.color} car is driving on ${this.wheels} wheels`);
    }
    stop(): void {
        console.log(`The ${this.color} car has stopped`);
    }
}

let honda = new Car("Red");
honda.drive();
honda.stop();

class Bike extends Vehicle {
    constructor(color:string) {
        super(2, color);
    }
    drive(): void {
        console.log(`The ${this.color} bike is driving on ${this.wheels} wheels`);
    }
    stop(): void {
        console.log(`The ${this.color} bike has stopped`);
    }
}

let bicycle = new Bike("Blue");
bicycle.drive();
bicycle.stop();

/*
these classes inherit the common features from the parent class and also implement the abstract methods in their own way. 
This abstraction allows for the separation of implementation and interface, 
the user of the class can work with the base class and its subclasses without needing to know the specific implementation details, 
and this is the main advantage of abstraction, the user only need to know the relevant details and the interface of the class, 
and not the implementation details.
*/