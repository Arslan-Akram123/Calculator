//  function mycalculator(){
    
   let btn1=document.querySelector("#btn1");
   let btn2=document.querySelector("#btn2");
   let btn3=document.querySelector("#btn3");
   let btn4=document.querySelector("#btn4");
btn1.addEventListener("click",function(){
    const n1=parseFloat(document.querySelector(".number1").value);
    const n2=parseFloat(document.querySelector(".number2").value);
    const sum1=n1+n2;
    const result=document.querySelector("#result");
    result.innerHTML="The sum is:"+sum1;
    result.style.color = "White";

})
btn2.addEventListener("click",function(){
    const n1=parseFloat(document.querySelector(".number1").value);
    const n2=parseFloat(document.querySelector(".number2").value);
    const sub1=n1-n2; 
    const result=document.querySelector("#result");
    result.innerHTML="The sub is:"+sub1;
    result.style.color = "red";


})
btn3.addEventListener("click",function(){
    const n1=parseFloat(document.querySelector(".number1").value);
    const n2=parseFloat(document.querySelector(".number2").value);
    const mul1=n1*n2;
    const result=document.querySelector("#result");
    result.innerHTML="The mul is:"+mul1;
    result.style.color = "green";

})
btn4.addEventListener("click",function(){
    const n1=parseFloat(document.querySelector(".number1").value);
    const n2=parseFloat(document.querySelector(".number2").value);
    const div1=n1/n2;
    const result=document.querySelector("#result");
    result.innerHTML="The div is:"+div1;
    result.style.color = "yellow";


})

   
  
  



 