/*
Encapsulation: Wrapping an object's properties and methods inside a protective barrier, allowing for controlled access.
Imagine you have a jewelry box and you put all your jewelry inside. 
You can lock the jewelry box and keep your jewelry safe and protected.  
*/

/* Abstraction: Defining an object's characteristics and behavior in a general and simplified way, hiding irrelevant details.
Imagine you want to listen to music. You just need to know how to use your phone or music player,
you don't need to know how the speakers work internally, 
you just know that if you play a song, you will hear music. */

// Inheritance: Creating a new class by basing it on an existing one, inheriting its attributes and methods.
// Imagine you have a toy airplane and a toy helicopter. 
// They're both toy vehicles, but they have different shapes and can do different things. 
// The toy airplane can fly and the toy helicopter can hover. But they both have wheels and can roll on the ground.

// Polymorphism: Allowing objects of different types to respond to the same method or function call, in their own specific ways.
// Imagine you have a magic wand that can change the shape of objects, but you just have one wand,
//  it can change a toy car into a boat, a boat into a plane and a plane into a car.

abstract class RemoteControl {
    // Encapsulation: private variable to store the current volume level
    private volumeLevel: number;
  
    //Abstraction: constructor method
    constructor() {
      this.volumeLevel = 0;
    }
  
    // Abstraction: abstract method to be implemented by subclasses
    abstract turnOn(): void;
  
    // Abstraction: abstract method to be implemented by subclasses
    abstract turnOff(): void;
  
    // Encapsulation: setter method to change the volume level
    setVolume(level: number) {
      this.volumeLevel = level;
    }
  
    // Encapsulation: getter method to retrieve the current volume level
    getVolume(): number {
      return this.volumeLevel;
    }
  
  }
  
  class TVRemote extends RemoteControl {
    // Inheritance: inherits properties and methods from RemoteControl
    // Constructor Method
    constructor(public brand:string) {
      super();
    }
  
    turnOn() { // polymorphism
      console.log("TV turned on.");
    }

    turnOff() { // polymorphism
      console.log("TV turned off.");
    }

  }
  
  class DVDPlayerRemote extends RemoteControl {
    // Inheritance: inherits properties and methods from RemoteControl
    // Constructor Method
    constructor(public brand:string) {
      super();
    }
    
    turnOn() { // polymorphism
      console.log("DVD player turned on.");
    }
  
    turnOff() { // polymorphism
      console.log("DVD player turned off.");
    }
  
  }
  
  // Polymorphism: a single reference variable can refer to objects of different types
  let remote: RemoteControl;
  
  remote = new TVRemote("Samsung");
  remote.turnOn();
  remote.setVolume(20);
  console.log(`TV Volume: ${remote.getVolume()}`);

  
  remote = new DVDPlayerRemote("Sony");
  remote.turnOn();
  remote.setVolume(10);
  console.log(`DVD Volume: ${remote.getVolume()}`);

  