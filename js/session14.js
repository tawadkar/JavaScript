//Single element selector
let element = document.getElementById('fc')
//element = element.className
//element = element.childNodes
//element = element.parentNode
element.style.color = 'red';
element.innerText = 'Learn JS'
element.innerHTML = '<b>Learn JS</b>'
console.log(element)

let sel = document.querySelector('#fc')
sel = document.querySelector('.child')
sel = document.querySelector('b')
//sel = document.querySelector('div') // will fetch first div
sel.style.color = 'green'
console.log(sel)

//Multi element selector
let elems = document.getElementsByClassName('child')
//elems = document.getElementsByClassName('container')
elems = document.getElementsByTagName('div')
console.log(elems[0])

Array.from(elems).forEach(element=>{
    console.log(element)
    element.style.color = 'blue';
})