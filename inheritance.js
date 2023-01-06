/*
Inheritance is the principle of creating a new class that is a modified version of an existing class.
The new class is called the subclass, and the existing class is the superclass. 
The subclass inherits properties and methods from the superclass, and can also have additional properties and methods of its own.
*/

// Declare a superclass
class Animal {
    // Declare a constructor to initialize the name property
    constructor(name) {
      this.name = name;
    }
  
    // Declare a method to make a sound
    makeSound() {
      console.log('Some animal sound');
    }
  }
  
  // Extend the Animal class to create a subclass
  class Dog extends Animal {
    // Override the makeSound method to make a different sound
    makeSound() {
      console.log('Woof woof!');
    }
  }
  
  // Create a new Animal object
  const animal = new Animal('Animal');
  
  // Call the makeSound method on the Animal object
  animal.makeSound(); // Output: 'Some animal sound'
  
  // Create a new Dog object
  const dog = new Dog('Dog');
  
  // Call the makeSound method on the Dog object
  dog.makeSound(); // Output: 'Woof woof!'

  /* 
  In this example, the Animal class is the superclass and the Dog class is the subclass. 
  The Dog class inherits the name property and the makeSound() method from the Animal class, 
  and also has its own implementation of the makeSound() method, which overrides the implementation in the Animal class.
  sss
  */