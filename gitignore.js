let sim = document.getElementById('sim');
let First = document.getElementById('FN');
let Last = document.getElementById('LN');
let pass = document.getElementById('PASS')
let dataE ;
let divson =document.getElementById('son1');
let divjs = document.getElementById('font-js');
let Form2 = document.getElementById('F2');
let btu = document.getElementById('btu1');




console.log(Form2);

    
let newdataP;


if(localStorage.Email != null){
dataE = JSON.parse(localStorage.Email);
}
else{
    dataE =[];
}
sim.onclick=function(){
    if(First.value != '' && Last.value != '' && pass.value != ''){
        
       
    
    let newdataE ={
        First:First.value,
        Last:Last.value,
    }
     newdataP ={
        pass:pass.value,
    
    }

dataE.push(newdataE);
sessionStorage.setItem('pass',JSON.stringify(newdataP));
localStorage.setItem('Email',JSON.stringify(dataE) );
check();
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
     
        for (let i = 0; i < dataE.length; i++) {
            if(Emails[i].First == '3zz'  ){
                console.log('hello');
                if(Emails[i].Last == 'aldeen'){
              
                    
                     let passs = JSON.parse(sessionStorage.pass); 
                     console.log(passs.pass);
                    
                    
                        if( passs.pass === 'ezz' ){ 
                            console.log('on');
                            
                            divson.style.display='none';
                            divjs.style.display='block';
                        Form2.style.display = 'block';
                         function timeout(){
                        setTimeout(function() {
                            location.href = 'http://127.0.0.1:5500/index2.html';}
                        ,1000);
                       }
                       timeout();
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


