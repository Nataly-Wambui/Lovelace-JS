function personAge(age){
    if(age>18){
        return "You are an adult"
    }else if(age >=12 && age <=16){
        return "You are a teenager"
    }else{
        return "You are underage"
    }
}
console.log((personAge(13)));

const multiplyByTwo = (num) => {
    let newArray = [];

    for (let i = 0; i<num.length; i++) {
    const result = num[i]*2;
    newArray.push(result);
}
return newArray;
};

console.log(multiplyByTwo([2,3,4,5,6,7]));

const totalSum = (num) => {
    let sum = 0;
    for(let element of num){
        sum+=element;
    }
    return sum;
}
console.log(totalSum([1,2,3,4,5,6,7,8]));

const teachStudents = (students)=> {
    while(students.length >=2){
        console.log("Teach students");
        students.pop();
        if(students.includes("Monica")){
            break
        }
    }
}
teachStudents(["Max", "Anita", "John", "Evans", "Monica"])


const childrenNames = (children) => {
    do{
        console.log( "There are many children")
    }
    while(children.length >5)

}
childrenNames(["Max", "Anita", "John", "Evans", "Monica"]);

const checkDayOfTheWeek = (day) => {
    switch (day){
        case "Monday":
        console.log("Today is Monday");
        break;
        case "Tuesday":
            console.log ("Today is Tuesday");
            break;
            default:
                console.log("The day is not listed");
    }
}
checkDayOfTheWeek("Wednesday")
