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

    abstract drive(): void;
    abstract stop(): void;
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
the Vehicle class is like a blueprint that defines what all vehicles have in common, 
such as having wheels and a color, but it doesn't define how many wheels or what color they are. 
The Car and Bike classes use this blueprint and fill in the specific details, like number of wheels, and their own unique characteristics.
And also both classes implements their own methods drive() and stop() but both of them perform the same behavior. 
This makes it easy to understand and work with the code because it separates what all 
vehicles have in common from how specific types of vehicles are different from each other.
*/