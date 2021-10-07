let btn = document.getElementById('btn');
btn.addEventListener('click',func1)
btn.addEventListener('dblclick',func2)
btn.addEventListener('btndown',func3)

function func1(e){
    console.log('Thanks',e)
    e.preventDefault();  // prevents default behaviour i.e after clicking on submit button it will not throe error page, and will remain on same page
}

function func2(e){
    console.log('Its a double click',e)
    e.preventDefault(); 
} 

function func3(e){
    console.log('Its a btn down click',e)
    e.preventDefault(); 
}

document.querySelector('.class1').addEventListener('mouseenter',function(){

    console.log('You entered class1')
})

document.querySelector('.class1').addEventListener('mouseleave',function(){

    console.log('You exited class1')
})

document.querySelector('.container').addEventListener('mousemove',function(e){
    console.log(e.offsetX,e.offsetY)
    document.body.style.backgroundColor=`rgb(${e.offsetX},${e.offsetX},${e.offsetY})`
    console.log('You triggerde mouse move')
})

