# TEACHBACK

## OBJECT ORIENTED PROGRAMMING - STATIC - PROTECTED - PRIVATE

In programming, we use special words called "access modifiers" to control who or what is able to use certain parts of our code. There are three main access modifiers: "static," "protected," and "private."

When we build a program, we often want to create certain parts of the program that should only be accessed or used by certain parts of the program.
private and protected allow us to create these restrictions and protect the internal state of our objects.

private properties and methods, for example, are only accessible within the class in which they are defined, making them truly encapsulated. This means that external code will not be able to access or modify them, so we can be sure that the internal state of our object will not be changed in unintended ways.

protected properties and methods, on the other hand, are accessible within the class in which they are defined and also by subclasses that inherit from it. This means that when we define the data that should be shared only by subclasses, we can use protected properties and methods.

static properties and methods, are shared by all instances of a class, rather than belonging to a specific instance. This means that if we have a property that is common among all the objects of our class and that property is not going to change its value then we can define that property as static. This will save memory space by not creating multiple copies of the same property.

By using private, protected and static access modifiers, we can make sure that our program is working correctly and that nothing gets broken.