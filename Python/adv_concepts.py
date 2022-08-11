# iterators , decorators , generators

list1 = [1, 2, 3, 4, 5]

itr = iter(list1)

# print(next(itr))

# print(next(itr))

# print(next(itr))

while True:

    try:

        print(next(itr))

    except StopIteration:

        print("all records printed")
        break

# generator -  is a function (any normal function can be converted into a generator)


def generator():

    mylist = [1, 2, 3, 4, 5]

    print("above for loop")

    for i in mylist:
        print("inside for loop")
        yield i

    print("below for loop")


# advantage of lazy loading
for k in generator():
    print(k)

gen_obj = generator()
print(next(gen_obj))
print(next(gen_obj))
print(next(gen_obj))
print(next(gen_obj))
print(next(gen_obj))

# Decorators - like annotations in java e.g. @Override ...
# ... java example of how annotations help in testing @Test @BeforeClass @AfterClass
# calculator example testing add function
# assertEquals() in java

# in python also we have built in annotations and custom annotations
# in python annotatinos are called as decorators


# decorators in python example -

def greetingsDecorator(func):

    print("Good Morning")
    func("ABC")
    print("how are you?")


@greetingsDecorator
def greetings(name):

    print(f"Hello {name}")

# greetingsDecorator(greetings) ... instead of calling like this, use the @function_name
#                                  which acts as the decorator


# pymysql and mysqlclient library for working with mysql in java

# Closure functions -

def outer_fn():

    local_var = 10
    print("outside")

    def inner_fn():
        print("inside")

        local_var += 10

        return local_var

    return inner_fn


#func = outer_fn()

#print(func())

# Python program to illustrate
# closures


def outerFunction(text):
    text1 = text
    a = 10

    def innerFunction():
        print(text1)
        print(a)

        return 10
    # Note we are returning function
    # WITHOUT parenthesis
    return innerFunction


myFunction = outerFunction('Hellloooooooo')
print(f"Value is {myFunction()}")


# lambda expressions in python

foo = lambda x,y : x+y
print(foo(10,20))

# uses of lambda, returning a function

def fun(n):
    return lambda a : a * n

fiveTimes = fun(5)

print(fiveTimes(15))