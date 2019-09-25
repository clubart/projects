(function () {
    'use strict';

    class Student {
        constructor(firstName, LastName, age, grade) {
            this.firstName = firstName;
            this.LastName = LastName;
            this.age = age;
            this.grade = grade;
        }
    }

    const student1 = new Student('John', 'Doe', 7, 1);
    const student2 = new Student('Jack', 'Doe', 8, 2);
    const student3 = new Student('Kevin', 'Smith', 10, 4);
    const students = [student1, student2, student3];

    function printStudents(firstLast, ...arr) {
        arr.forEach(student => {
            if (firstLast) {
                console.log(`${student.firstName} ${student.LastName} age: ${student.age} grade: ${student.grade}`);
            }
            else {
                console.log(`${student.LastName} ${student.firstName} age: ${student.age} grade: ${student.grade}`);
            }
        });
    }
    printStudents(false, ...students);

    function switchFirstLast(student) {
        let { firstName, LastName, ...rest } = student;
        [firstName, LastName] = [LastName, firstName];
        const myCopy = { firstName, LastName, ...rest };
        return myCopy;
    }
    console.log(switchFirstLast(student3));
}());