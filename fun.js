let sim = document.getElementById('sim');
let First = document.getElementById('FN');
let Last = document.getElementById('LN');
let pass = document.getElementById('PASS')
let dataE ;
let dataP = [];
if(localStorage.Email != null){
dataE = JSON.parse(localStorage.Email);
}
else{
    dataE =[]
}
sim.onclick=function(){
let newdataE ={
    First:First.value,
    Last:Last.value,
}
let newdataP ={
    pass:pass.value,

}
dataP.push(newdataP)
dataE.push(newdataE);
localStorage.setItem('Email',JSON.stringify(dataE) );

}