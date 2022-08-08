public class oops {
    // oops and solid principles

    // inheritance , encapsulation, polymorphism, abtraction
    // absteaction - using abstract keyword for classes and methods
    // abstract classes or interfaces for achieving abstraction
    // function overloading and function overwriting
    // inheritance

    // unit testing is responsibility of the developer ... junit5 testing framework for java
    // testing for each function that you write
    // testability , maintainability , extensibility

    // TDD - test driven development

    // XP - extreme programming

    // SOLID PRINCIPLES (testability , maintainability , extensibility, understandable) - 

    // S - single responsibility
    // Every java class must perform a single functionality only eg. bankService , loanService , notificationService etc.

    // O - open-closed principle
    // Based on new requirements the module should be open for extension but closed for modification
    // interface for send notification and then implement this interface for 

    // L - Liskov substitution principle
    // The derived class must be completely substitutable for the base class  ... based on the inheritance concept
    // social media example ... instead of giving one abstract class break into a number of interfaces
    // and then implement only those interfaces which your app wants to/ support
    // always recommended to use interface instead of abstract classes
    
    // LSV rules - (refer ppt)
    // 1. contravariance of arguments - the overridden subtype method argument types can be 
    //                                  identical or wider than the supertype method argument types.
    // 2. covariance of results - The return type of the overridden subtype method can be narrower 
    //                            than the return type of the supertype method.
    // 3. exception rule - The subtype method can throw fewer or narrower (but not any additional or broader) exceptions than the supertype method.
    // 4. pre-conditions rule - A subtype can weaken (but not strengthen) the precondition for a method it overrides. 
    // 5. post-conditions rule - The subtype can strengthen (but not weaken) the postcondition for a method it overrides. 
    
    // Objects of a super class shall be replacable with objects of its subclass without breaking
    // the application 
    
    // I - Interface segregation principle
    // The principle states that larger interfaces should be split into smaller ones because we dont want
    // to force the clients to use the methods that they donot want to use

    // D - Dependency inversion principle
    // the principle states that we must use abstraction(abstract classes and interfaces) intead of concrete
    // implementations
    // creditcard debit card example card interface good example for removing tight coupling and going for
    // loose coupling
    // Top Down Design

    // CUPID Principles

    // GRASP Principles

    // practice inheritance, overriding , overloading , interface implementations , abstract classes

    public static void main(String[] args) {

        System.out.println("Hello");
    }


}
