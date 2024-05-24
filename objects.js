const cup = {
    color: 'Red',
    size: 'Small',
    shape: 'Cylindrical',
    functionality: {
        drinkType: 'Tea',
        temperature: 'Hot'
    },
    design: ['Floral', 'Polka', 'Checked'],
    drink: function () {
        console.log('Use me to drink tea');
        console.log(`My main use is to drink ${this.functionality.drinkType}`);
    }
};
console.log('size', cup.size);
console.log({ design: cup.design[0] });
console.log('shape', cup['shape']);
console.log('drinkType', cup.functionality.drinkType);
cup.drink();
console.log(cup.design);

delete cup.color;
console.log({cup});

const values = Object.values(cup);
console.log({values});

const keys = Object.keys(cup);
console.log({keys});

Object.keys(cup).forEach(item =>{
    console.log({key: item, value: cup[item]});
})


/*The array of objects*/
const books = [
    {title:'The Catcher in the Rye', author:'J.D. Salinger', publicationYear:1951, isAvailable:true},
    {title:'Great Expectations', author:'Charles Dickens', publicationYear:1861, isAvailable:false},
    {title:'Crime and Punishment', author:'Fyodor Dostoevsky', publicationYear:1866, isAvailable:true},
    {title:'The Great Gatsby', author:'F. Scott Fitzgerald', publicationYear:1925, isAvailable:false},
    {title:'The odyssey', author:'Homer', publicationYear:-800, isAvailable:true}
];

/* Question 1 */
function getAvailableBooks(){
let availableBooks = books.filter(book => book.isAvailable === true)
    return availableBooks
}
console.log(getAvailableBooks())

/* Question 2 */
function getBookByAuthor(authorsName){
let bookAuthor = [];
for(let i=0; i<books.length; i++){
    if(books[i].author = authorsName){
        bookAuthor.push(books[i])
    }
    return bookAuthor
}
}
console.log(getBookByAuthor('Homer'));

/* Question 3 */
function addNewBook(newbook={}){
    books.push(newbook)
    return books
    
}
console.log(addNewBook({title:'Born A Crime', author:'Trevor Noah', publicationYear:1950, isAvailable:true}))

/* Question 4 */
function checkoutBook(title){
    
}

