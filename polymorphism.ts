// Polymorphism: Allowing objects of different types to respond to the same method or function call, in their own specific ways.
// Imagine you have a magic wand that can change the shape of objects, but you just have one wand,
//  it can change a toy car into a boat, a boat into a plane and a plane into a car.


class Animal {
    public name: string;
    constructor(name:string) {
        this.name = name;
    }
    makeSound(): string {
        return "Some Generic Sound";
    }
}

class petDog extends Animal {
    makeSound(): string {
        return "Woof";
    }
}

class petCat extends Animal {
    makeSound(): string {
        return "Meow";
    }
}

let Doggy = new petDog("Doggy");
console.log(Doggy.makeSound()); // "Woof"

let Kitty = new petCat("Kitty");
console.log(Kitty.makeSound()); // "Meow"