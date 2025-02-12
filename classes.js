class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    greet(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old`)
    }
};

const jane = new Person('Jane', 30);
console.log(jane);
jane.greet();

Person.prototype.nationality = 'Kenyan';
console.log(jane.nationality);


class Student extends Person{
    constructor(name, age, school){
        super(name, age);
        this.school = school;
    }
    profession(){
        console.log(`I am a student at ${this.school}`)
    }
};

const amanda = new Student('Amanda', 19, 'AkiraChix');
console.log(amanda);
console.log(amanda.nationality);
amanda.greet();
amanda.profession();



