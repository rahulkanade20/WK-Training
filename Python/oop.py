# OOPS in Python
# self is similar to this in java

class Person:

    '''
    This class defines the blueprint of a person
    '''

    def __init__(self): # double underscore methods are internal methods provided by python, also called as magical method
        pass

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def greet(self, name): # self has to be the first parameter and it is the reference to the object
        print(f"hello {self.name}")

p1 = Person("abcd", 544)
#p1.greet("abcd") # p1.greet is internally processed as ---> Person.greet(p1, "abc")
p2 = Person("pqrs", 545)

print(p1.name)
print(p1.age)

print(p2.name)
print(p2.age)

print(p1)

# built in class attributes

print(p1.__doc__)
print(p1.__dict__)
print(p1.__class__)
print(p1.__module__)

print(p1.greet)
print(p2.greet)

#del p1.age

print(p1.__dict__)

# deleting instance variables ... cannot be done in java

#del p1.name

# deleting instance itself

# del p1


# built in class methods getattr , setattr , delattr , hasattr - 

print(getattr(p1, "name", "not found"))
print(getattr(p1, "name1", "not found"))

print(setattr(p1, "name", "xyz"))
print(p1.name)

print(hasattr(p1,"name"))
print(hasattr(p1,"name1"))

print(delattr(p1,"age"))
# print(delattr(p1,"age1")) ... error if attribute not found

# p1._name ... _ means variable is protected ... not visible but accessible
# p1.__name ... __ (double underscore) means variable is private ... not visible and not accessible

# with protected attributes all built in methods work
# for private attributes hasattr returns false ... it works fine if we use _Person__name
# i.e. just prefix with _Classname

# python supports both multi level and multiple inheritance(uses MRO(method resolution order))
# MRO - first class which is inherited, it uses that method of the first class if conflict arises


# Inheritance example - 

class Base1:
    def sayhi(self):
        print("hi from base 1")

class Base2:
    def sayhi(self):
        print("hi from base 2")
    
    def sayhi1(self):
        print("hi from base 2")

class Base12(Base1, Base2):
    def sayhello(self):
        print("hello from base 12")
    
    def hifrombase2(self):
        super().sayhi1()

b1 = Base1()
b1.sayhi()

b2 = Base2()
b2.sayhi()

b12 = Base12()
b12.sayhello()

b12.sayhi()
b12.hifrombase2()

print(Base12.mro())

# issubclass() method, isinstance() method
# polymorphism , method overriding , operator overloading

# overloading in python

class Loan:

    def __init__(self, roi):
        self.roi = roi

    def __add__(self, other):
        return self.roi + other.roi
    
    def __sub__(self, other):
        return self.roi - other.roi
    
    def __lt__(self, other):
        return self.roi < other.roi
    
    def display(self):
        print(f"The current rate of interest is {self.roi}")

l1 = Loan(7)
l2 = Loan(8)

l1.display()
l2.display()
print(l1+l2)
print(l1-l2)
print(l1<l2)

# recommended way to work with protected and private members is through getters and setters
# using @property decorator we can make functions behave like normal properties so that we can use it
# like properties instead of calling functions, @maxprice.setter decorator for setter methods, @property
# for getter methods


# abstract classes in python

from abc import ABC, abstractmethod

class Loan(ABC):

    def customerVerification(self):
        pass

class ICICI(Loan):

    def customerVerification(self):
        print("Customer verification process")

    def issue_loan(self, amount):
        print(f"loan issued with amount: {amount}")

l1 = ICICI()

l1.customerVerification()
l1.issue_loan(19201)