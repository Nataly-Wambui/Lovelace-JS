let fruits = ['Mango', 'Apple', 'Banana', 'Orange'];

let array = new Array(20, 30, 6, 7);

console.log({ fruits });
console.log({ array });
fruits[1] = 3;
console.log({ fruits });
console.log('length', fruits.length);
let lastItem = fruits[-1]
console.log({ lastItem });
console.log(fruits.length - 1);

//Array Methods
let addLast = fruits.push('Kiwi');
console.log({ fruits });
let addFirst = fruits.unshift('Pawpaw');
console.log({ fruits });
let removeLast = fruits.pop();
console.log({ fruits });
let removeFirst = fruits.shift();
console.log({ fruits });

let items = [20, 30, 40, 50, 60];
let add = items.reduce((acc, curr) => acc + curr);
console.log(add/items.length);

let multiply = items.map(item => item * 2);
console.log({ multiply });


let addEach = []
let total = 0;
items.forEach(item => {
    const add = item + 2;
    console.log({ add });
    addEach.push(add);
    total += item
});
console.log({ addEach });
console.log({ total });


let multiplyAll = 1;
items.map(item => {
    multiplyAll *= item;
    return item;
})
console.log({ multiplyAll })

//Array Destructuring
let [num1, num2, num3, ...rest] = items;
console.log({ num1 });
console.log({ num2 });
console.log({ num3 });
console.log({ rest });


let nums = [42, 51, 24, 98, 65, 12];
nums.forEach(n => {
    if (n%2 !== 0) {
        console.log(n)
    }
    else {
        console.log("least number")
    }
});

const numbers = [1,2,3,4,5];
const evenNumbers = numbers.map(number => number*2);
console.log(evenNumbers);

const arrayNum = [2,4,6,8,10];
const sum = arrayNum.reduce((accumulator, currentValue) => {
    return accumulator+currentValue;
})



