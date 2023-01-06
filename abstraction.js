// Abstraction is the principle of exposing only relevant information to the user,
// hiding the implementation details.

// An abstract class is a class that cannot be instantiated and must be extended by a concrete subclass.
// An abstract class can contain abstract methods, which are methods without an implementation,
// and must be implemented by the concrete subclass.


// Declare an abstract class
class Vehicle {
    // Declare an abstract method to start the engine
    startEngine() {
      throw new Error('Method not implemented');
    }
  
    // Declare an abstract method to stop the engine
    stopEngine() {
      throw new Error('Method not implemented');
    }
  }
  
  // Extend the Vehicle class to create a concrete subclass
  class Car extends Vehicle {
    // Provide an implementation for the abstract methods
    startEngine() {
      console.log('Engine starting...');
    }
  
    stopEngine() {
      console.log('Engine stopping...');
    }
  }
  
  // Create a new Car object
  const car = new Car();
  const car2 = new Vehicle();
  // Start the engine
  car.startEngine(); // Output: 'Engine starting...'
//   car2.startEngine();
  
  // Stop the engine
  car.stopEngine(); // Output: 'Engine stopping...'
  
  /*
  In this example, the Vehicle class is an abstract class because it has two abstract methods, 
  startEngine() and stopEngine(), which have no implementation. 
  The Car class is a concrete subclass of Vehicle that provides an implementation for the abstract methods.

 When the startEngine() and stopEngine() methods are called on a Car object,
 the implementation in the Car class is used. 
 The user of the Vehicle class only needs to know that it has startEngine() and stopEngine() methods,
  and does not need to know how they are implemented in each concrete subclass.

 Abstraction is a useful technique for creating a common interface for related classes and hiding implementation details.
 By defining abstract methods in a base class, you can ensure that all concrete subclasses provide a consistent set of behavior.
  */