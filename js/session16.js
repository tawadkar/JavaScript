//Create element

let element =  document.createElement('li')
let text = document.createTextNode('Text Node Created')
element.appendChild(text) //appended to li

//Add classname to the li element
element.className = 'li6 created'
element.id = 'li6'
element.setAttribute('title','mytitle')
//element.innerText = 'This is created by Tanmay'
//element.innerHTML='<b>This is created by Tanmay</b>'


let ul  =  document.querySelector('ul.this');
ul.appendChild(element) //appended to ul
console.log(ul)
console.log(element)    

//Replace element
let elem2 = document.createElement('h3');
elem2.id = 'elem2';
elem2.className = 'clsemel2';

let tnode = document.createTextNode('Text for elem2')
elem2.appendChild(tnode)

element.replaceWith(elem2)

let myul = document.getElementById('myul');
myul.replaceChild(element, document.getElementById('fui'))

myul.removeChild(document.getElementById('lui'))

let pr = elem2.hasAttribute('id') // will return boolean value
console.log(pr)
