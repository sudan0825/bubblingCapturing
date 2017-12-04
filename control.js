
$(document).ready(function(){
    




var action = document.getElementById("ball");
var heartArray= document.getElementsByClassName("heart");
    heartArray = Array.prototype.slice.apply(heartArray);
    console.log(heartArray);
 
    
    
   
    


  for(let elem of document.querySelectorAll('*')){
      
    
    elem.addEventListener("click", e=>{
        
        if(e.target.className=='heart'){
            alert(`Capturing, from outside to inside: ${elem.tagName}`);
           }
             
    },true);
     elem.addEventListener("click", e=>{
        if(e.target.className=='heart'){
            alert(`Bubbling from inside to outside: ${elem.tagName}`);
        }
     
    });
}


action.onclick=function(e){
 
    var clicktarget=e.target.attributes[1].value;
   
    switch(clicktarget){
        case 'A':
            $('#happy').fadeIn(500).fadeOut(3000);
     
            break;
        case 'B':
             $('#health').fadeIn(500).fadeOut(3000);
          
            break;
        case 'C':
             $('#lucky').fadeIn(500).fadeOut(3000);
          
            break;
        case 'D':
             $('#satisfied').fadeIn(500).fadeOut(3000);
        
            break;
     
                    }
   
    
   
}



    
})
