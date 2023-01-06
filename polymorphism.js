/*
Polymorphism is the principle of allowing a subclass to override or extend the behavior of a method inherited from the superclass.
*/

// Declare a superclass
class Vehicle {
    // Declare a method to describe the vehicle
    describe() {
      console.log(`This is a vehicle`);
    }
  }
  
  // Extend the Vehicle class to create a subclass for cars
  class Car extends Vehicle {
    // Override the describe method to provide a more specific description
    describe() {
      console.log(`This is a car`);
    }
  }
  
  // Create a new Vehicle object
  const vehicle = new Vehicle();
  
  // Call the describe method on the Vehicle object
  vehicle.describe(); // Output: 'This is a vehicle'
  
  // Create a new Car object
  const car = new Car();
  
  // Call the describe method on the Car object
  car.describe(); // Output: 'This is a car'
  

  /*
  In this example, the Vehicle class has a describe() method that provides a general description of a vehicle.
  The Car class is a subclass of Vehicle that overrides the describe() method to provide a more specific description of a car.
  This is an example of polymorphism, because the behavior of the describe() method 
  is different depending on the type of object it is called on.
  Polymorphism is a useful technique for modifying the behavior of a method in a subclass to suit the specific needs of that subclass. 
  By overriding methods in a subclass, you can create a flexible and modular inheritance hierarchy.
  sss
  */