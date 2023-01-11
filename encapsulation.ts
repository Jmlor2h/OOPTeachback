/*
Encapsulation: Wrapping an object's properties and methods inside a protective barrier, allowing for controlled access.
Imagine you have a jewelry box and you put all your jewelry inside. 
You can lock the jewelry box and keep your jewelry safe and protected.  

*/


// Encapsulation
class Person {
  private _age: number;
  
  constructor(age: number) {
      this._age = age;
  }
  public getAge(): number {
      return this._age;
  }
  public setAge(age: number) {
      this._age = age;
  }
}

let John = new Person(15);
console.log(John.getAge());

/*
In this example, the _age property is marked as private, which means it can only be accessed from within the Person class.
We have public methods getAge() and setAge() that can be used to access the _age property and change the age. 
This is providing encapsulation of the internal state(age) of the Person object.
*/
  