const marks = [34,456,23,654];
const fruits  = ['orange','apple','mango'];
const mixed =['str',89,[3,5]];

const arr = new Array(23,43,12,1);
console.log(arr)
console.log(fruits[1])

console.log(arr.length)
console.log(Array.isArray('fadf'))

arr[0] = 'javascript';
console.log(arr)

let value = marks.indexOf(654)

//Mutating or Modifing arrays
marks.push(4798)
marks.unshift(1008) //starting
marks.pop() //removes element from end
marks.shift()  //removes element from start
//marks.splice(1,4)  // starting form index 1 remove 4 elements
marks.reverse()
console.log(marks)
console.log(value)

//since we cannot change const array changing it to let

let m1 = [2,3,4,2];
let m2 = [93,2,3,42,22];
m1 = m1.concat(m2);
console.log(m1)

//Objects
 let myobj = {
    name: 'Tanmay',
   'first name': 'gremlin',
   channel:'coding',
   isActive: true,
   marks: [2,4,3,4]

 }
 console.log(myobj)
 console.log(myobj.isActive)

 //To access keys
 console.log(myobj['first name'])
 console.log(myobj.name)
 



