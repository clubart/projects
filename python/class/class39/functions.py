import random

def increment(number, by):
    print('In increment function', number, by)
    return number + by


print(increment(5,1))

some_numbers = [1,2,3,4]
print(random.choice(some_numbers))

def choice(seq):
    x= random.randint(0, len(seq)-1)
    return seq[x]
print(choice(some_numbers))