
$(document).ready(function(){
    




var action = document.getElementById("ball");
//var top = document.getElementById("left");

    


action.onclick=function(e){
 
    var clicktarget=e.target.attributes[1].value;
    console.log(clicktarget);
    switch(clicktarget){
        case 'A':
            $('#happy').fadeIn(1000).fadeOut(3000);
            break;
        case 'B':
             $('#health').fadeIn(1000).fadeOut(3000);
            break;
        case 'C':
             $('#lucky').fadeIn(1000).fadeOut(3000);
            break;
        case 'D':
             $('#satisfied').fadeIn(1000).fadeOut(3000);
            break;
        default:
            alert("Have better lucky next time");
            
                    }
   
}



//heartarray[0].addEventListener('click',function(e){
// 
//      heartarray[0].style.display="inline-block";
//    
// 
//})


    
})
