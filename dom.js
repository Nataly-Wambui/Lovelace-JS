const container = document.getElementById('container');
console.log('parent', container.parentElement);
console.log('Previous sibling...', container.previousElementSibling);
console.log('Next sibling...',container.nextSibling);
console.log('Children', container.children);

const body = document.body;
console.log('LastChild', body.lastElementChild);
console.log('FirstChild', body.firstElementChild);

const containerText = document.getElementById('container-text');
containerText.innerHTML = "Am I really a child?"

// Creating DOM Element
const newHeading = document.createElement('h1');
container.appendChild(newHeading);
newHeading.innerHTML = 'Introduction'
newHeading.style.color = 'red'

const button = document.getElementById('button');
button.style.border = 'none'
button.style.padding = "10px 15px"
button.style.backgroundColor = "#e2e2e2"
button.style.borderRadius = "5px"
button.style.cursor = "pointer"

button.addEventListener('click', function(){
    button.innerHTML = 'clicked!'
    button.style.backgroundColor = "yellow";
    button.style.color = "#fffff";
})
