// function greet(name,thank){

//    let msg =  `Happy Birthday ${name} and ${thank}`;
//    return msg;
// }

// let name  = 'skill';
// let name1  = 'Professor';

// let val =greet(name,'Thanks a lot')
// console.log(val)


// const mygreet = function(name1,thank){

//     let msg =  `Happy Birthday ${name1} and ${thank}`;
//     return msg;
//  }

// let val1 =mygreet(name1,'Thanks a lot')
// console.log(val1)



// //Creating function inside object

// const myobj = {
//     name2: "Berlin",
//     game: function(){
//         return "GTA";
//     }
// }
// console.log(myobj.game())

// arr = ['fruit','veg','furniture'];

// arr.forEach(function(element,index,array) {
//     console.log(element,index)
// });

// //Scope
// {
//     var i=2234;
//     console.log(i)
// }

// console.log(i);

// function ui(name){
//    let i=9;
//    console.log(i)
//    return `This is a ${name} ui`
// }

// console.log(ui("AITA"),i)


//Variable scope w.r.t function

let i=10; //let and const have block level scope
var m ="tanmay" // var has function level scope

function func(){
    var m ="sam";
    var n= 89.6;
    console.log(i)
    console.log(m)
    console.log(n)

    {
        let i=20;
        var m="sam"
        console.log("--inside block of function")
        console.log(i)
        console.log(m)
    }

    console.log("--outside block of function")
    console.log(i)
}

console.log("--inside function")
func();

console.log("--outside function")
console.log(i)
console.log(m)

