for(let i=0;i<100;i++){

    console.log(i)
}

let j=0;
while(j<10){
    console.log(j+1)
    j++
}

let k=0;
do{
    console.log(k+1)
    if(k===5){
        break;
    }
    k+=1;
}while(k<10)

console.log('done')

let arr = [2,3,5,674,9];

for(let i=0;i<arr.length;i++){
   const element = arr[i]
   console.log(element)

}
//or
arr.forEach(function(element){
  console.log(element)

})


let obj = {
    name:"Rohan Das",
    age:74,
    type:"Test Architect",
    os:"Windows"
}
for(let key in obj){
    console.log(`The ${key} of object is ${obj[key]}`)
}