var send = document.querySelector(".btn , .btn-outline-primary");
var cont = document.querySelector(".number");
var num = document.querySelector(".number"); 
send.addEventListener("click",function(){
    if(num.value.length  < 10){
        alert("Number is invalid");
    }else{
        alert("message sent to "+cont.value);
    }
});