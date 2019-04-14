from random import randint

class Die :
    def __init__ (self, amt_sides):
        self.amt_sides = amt_sides
    
    def roll_die (self):
        roll = randint(1, self.amt_sides)
        return roll

class Six_sided_die (Die):
    def __init__(self):
        self.amt_sides = 6

die1 = Die(10)
print('die1', die1.roll_die())
die2 = Six_sided_die()
print('die2', die2.roll_die())
