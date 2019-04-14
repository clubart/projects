from random import randint

def selection_sort (numbers):
    for i in range(len(numbers)):
        for j in range(i,len(numbers)):
            if numbers[i] > numbers[j]:
                temp = numbers[i]
                numbers[i] = numbers[j]
                numbers[j] = temp

    return numbers

numbers = []
for i in range(10):
    numbers.append(randint(1, 100))

print (numbers)
print(selection_sort(numbers))