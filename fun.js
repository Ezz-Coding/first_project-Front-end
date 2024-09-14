let sim = document.getElementById('sim');
let First = document.getElementById('FN');
let Last = document.getElementById('LN');
let pass = document.getElementById('PASS')
let dataE ;
let divson =document.getElementById('son1');
let divjs = document.getElementById('font-js');
let Form2 = document.getElementById('F2');
let btu = document.getElementById('btu1');
let dataP ;




    dataP = [];


if(localStorage.Email != null){
dataE = JSON.parse(localStorage.Email);
}
else{
    dataE =[];
}
sim.onclick=function(){
    if(First.value != '' && Last.value != '' && pass.value != ''){
        
        check();
    
    let newdataE ={
        First:First.value,
        Last:Last.value,
    }
    let newdataP ={
        pass:pass.value,
    
    }
    
dataP.push(newdataP)
dataE.push(newdataE);
sessionStorage.setItem('pass',JSON.stringify(dataP));
localStorage.setItem('Email',JSON.stringify(dataE) );
    }
    else{
        if(First.value == ''){
            First.style.border = '2px solid red ';

        }
        else{
            First.style.border = '0px';
        }
        if(Last.value == ''){
            Last.style.border = '2px solid red ';

        }
        else{
            Last.style.border = '0px';
        } if(pass.value == ''){
            pass.style.border = '2px solid red ';

        } else{
            pass.style.border = '0px';
        }
      
    }  
    function  check() {
        let Emails = JSON.parse(localStorage.getItem('Email'));
        let pass = JSON.parse(sessionStorage.getItem('pass'));
        for (let i = 0; i < dataE.length; i++) {
            if(Emails[i].First == '3zz'  ){
                console.log('hello');
                if(Emails[i].Last == 'aldeen'){
                     console.log(pass[0].pass);
                     
                   
                    
                    
                        if( pass[0].pass === 'ezz123444' ){ 
                            console.log('on');
                            
                            divson.style.display='none';
                            divjs.style.display='block';
                        Form2.style.display = ' block';
                        }
                        else{
                            divson.style.display='none';
        divjs.style.display='block';
     
                        }
                    
     
                }
                else{
                    divson.style.display='none';
                    divjs.style.display='block';
                }
            
        }
        else{
            divson.style.display='none';
            divjs.style.display='block';
        }
        
            
        }
    
    }
   
  
  
}
function settime() {
    location.href = ''
}

