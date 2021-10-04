const age = 28;
const number = 3

 if(age===19){
     console.log('Age is 19')
 }
 else if (age===65){
     console.log('Age is 65')
 }
 else{
     console.log('Age is not 19')
 }

 /*if(age!=19){
    console.log('Age is not 19')
}
else if (age!==65){
    console.log('Age is not 65')
}
else{
    console.log('Age is not 19')
}*/

if(typeof number !=='undefined'){
    console.log('Number is defined')
}else{
    console.log('Number is not defined')
}

//Ternary Operator
console.log(age==45?'Age is 45':'Age is not 45')


switch (age) {
    case 18:
        console.log("You are 18")
        break;
    case 28:
        console.log("You are 28")
        break;
    case 38:
        console.log("You are 38")
        break;

    default:
        console.log("Age Unknown")
        break;
}
