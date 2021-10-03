const name ='Javascript';
const greeting = 'Hello';
console.log(greeting +' '+ name);

let html;
html = "<h1> this is heading</h1>"+
        "<p> this is My para</p>";

html = html.concat('this',' str2');
console.log(html);
console.log(html.length);
console.log(html.toLowerCase());
console.log(html.toUpperCase());
console.log(html);

console.log(html[1])
console.log(html.indexOf('<')); //will give first occurance
console.log(html.lastIndexOf('<'))
console.log(html.charAt())
console.log(html.endsWith('str2')) //returns boolean value
console.log(html.includes('adkjf')) //returns boolean
console.log(html.substring(1,7))
console.log(html.slice(-4))
console.log(html.slice(0,4))
console.log(html.split(" "))
console.log(html.replace('this','it')) //replaces first occurance only

//Template literals
let f1 = 'Orange';
let f2 = 'Apple';
let myHtml= `Hello ${name}
             <h1>This is my heading</h1>
             <p>You like ${f1} and ${f2}`;
document.body.innerHTML = myHtml;