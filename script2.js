var send = document.querySelector(".btn,.btn-outline-primary");
var cont = document.querySelector(".number1");
var num = document.querySelector(".number1"); 
var time = document.getElementsByClassName("time");
send.addEventListener("click",function(){
        alert("File sent at time "+time.value);
});