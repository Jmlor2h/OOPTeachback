// Inheritance: Creating a new class by basing it on an existing one, inheriting its attributes and methods.
// Imagine you have a toy airplane and a toy helicopter. 
// They're both toy vehicles, but they have different shapes and can do different things. 
// The toy airplane can fly and the toy helicopter can hover. But they both have wheels and can roll on the ground.

class Pet {
    protected name: string;
    protected age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    public getName(): string {
        return this.name;
    }

    public getAge(): number {
        return this.age;
    }
}

class Dog extends Pet {
    private breed: string;

    constructor(name: string, age: number, breed: string) {
        super(name, age);
        this.breed = breed;
    }

    public bark(): string {
        return `${this.name} is barking!`
    }

    public getBreed(): string {
        return this.breed;
    }
}

class Cat extends Pet {
    private furColor: string;

    constructor(name: string, age: number, furColor: string) {
        super(name, age);
        this.furColor = furColor;
    }

    public meow(): string {
        return `${this.name} is meowing!`
    }

    public getFurColor(): string {
        return this.furColor;
    }
}

const dog1 = new Dog("Fido", 4, "Golden Retriever");
console.log(`Name: ${dog1.getName()}`);
console.log(`Age: ${dog1.getAge()}`);
console.log(`Breed: ${dog1.getBreed()}`);
console.log(dog1.bark());

const cat1 = new Cat("Whiskers", 2, "white");
console.log(`Name: ${cat1.getName()}`);
console.log(`Age: ${cat1.getAge()}`);
console.log(`Fur Color: ${cat1.getFurColor()}`);
console.log(cat1.meow());

// the Pet class is the base class that defines the basic properties of a pet, 
// a name, and an age and methods to access them. The Dog class and Cat class inherit from Pet class, 
// inheriting all its properties and methods. Both of them also have their own properties and methods, 
// the Dog class has a property 'breed' and a method 'bark' and the Cat class has a property 'furColor' and a method 'meow'. 
// These classes can use the common functionality of the base class and also have their own functionality. 
// It's a way of building the classes by reusing existing class and adding new functionality without modifying the existing one.