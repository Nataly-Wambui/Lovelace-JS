let a='Hello';
let b="world";
let c=`Hello world`;
//template literals

console.log('length', a.length);
console.log('index', a[3]);
console.log('position', a.indexOf('o'));
a[2]='f';
console.log({a});

// Concatention
let d=a+ ` `+b;
console.log({d});
let e=`${a} ${b}. I like coding!`;
console.log({e});

// Assignment
let word= "extravaganza";
console.log('length', word.substring(8));
console.log(word.slice(8));
console.log(word.substr(2,3));
let n="Hello";
console.log(n.substr(2,3));

let origString= "The quick fox jumped over the lazy dog";
let stringToAdd= "eat";
let newString= `The ${stringToAdd}quick fox jumped over the lazy dog`;
console.log({newString});
console.log(origString[4]);

const story= "The quick brown fox brown jumps brown over the lazy dog";
console.log((story.match(/the/g)).length);
console.log((story.match(/brown/)).length);
let l="brown";
let z=story.split(l).length-1;
console.log(z);

let nameOne= "wonderful";
let nameTwo= "amaizing";
let nameThree= "UndERneath";
let nameFour= "A wonderful world";
console.log(nameOne.toUpperCase());
console.log(nameTwo.toLowerCase());
console.log(nameThree.toLowerCase());


const string1= "The pupils are reading in the library";
console.log(string1.search("are"));
const string2= "The child was sitting on the table before it fell";
console.log(string2.search("sitting"));
let w = "nat";
let r = "akirachix";
let y = `My name is ${w} and i am in ${r}`;
let x = "My name is"+" "+w+" "+"and I am in"+" "+r;
console.log(y);
console.log(x);


