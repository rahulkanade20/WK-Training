# OOPS in Python
# self is similar to this in java

class Person:

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