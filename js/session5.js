//Type conversion 

let myvar;
myvar = String(34);
console.log(myvar,(typeof myvar));

let booleanvar = String(true);
console.log(booleanvar,(typeof booleanvar));

let date = String(new Date());
console.log(date,(typeof date));

let arr = String([1,2,3,4,6]);
console.log(arr,(typeof date));

let i=75;
let j = i.toString();
console.log(j)
console.log(typeof j);

//String to Number
let str = "2465"; 
str = Number("23d39"); //NaN
str = Number(false); //Number
str = Number([1,2,3,4,5,6,7]); //Number
console.log(str,(typeof str));

let number = parseInt('34.0598');
console.log(number.toFixed(2),(typeof number)) //34.06 number

//Type coercion
let mystr = Number("429");
let mynum =34;
console.log(mystr + mynum);

let mystr1 = String(429);
let mynum1 =34;
console.log(mystr1 + mynum1);


