names = ['Sam', 'Bob', 'Joe']
i = 0
for name in names:
    print(name)

for i, v in enumerate(names):
    print (i, v)

my_tuple = (1,2,3,4)
for x in my_tuple:
    print(x)

potus = {
    'first_name': 'Donald',
    'last_name': 'Trump'
}
print(potus.get('first_name','unknown'))
potus['email'] = 'dtrump@whitehouse.gov'
print(potus)

good_foods = set(['pizza', 'steak', 'hamburger'])
foods = set(['broccoli', 'pizza'])
print ('steak' in good_foods)
print('djk0' in good_foods)
print(foods.intersection(good_foods))
print(foods.union(good_foods))
print(foods.difference(good_foods))
print(good_foods.difference(foods))