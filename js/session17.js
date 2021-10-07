document.getElementById('heading').addEventListener('click',function(e){

    console.log('You have clicked the heading')
   // console.log(e)
    variable  = e.target;
    variable = e.target.className;
    variable = e.target.id;
    variable = Array.from(e.target.classList)
    variable = e.offsetX; //Position w.r.t element
    variable = e.offsetY;
    variable = e.clientX; 
    variable = e.clientY;// Position w.r.t browser
    console.log(variable)
})