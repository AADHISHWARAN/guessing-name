function check(){
    var C=0;
    var q1=document.quiz.question1.value;
    var q2=document.quiz.question1.value;
    var q3=document.quiz.question1.value;
    var q4=document.quiz.question1.value;
    var q5=document.quiz.question1.value;
    var result=document.getElementById('result');
    var quiz=document.getElementById("quiz");
    if(q1=="Javascript"){ C++ }
    
    if(q2=="Silver and Gilt"){ C++ }

    if(q3=="RUSSIA"){ C++ }
    
    if(q4=="Tokyo"){ C++ }

    if(q5=="INDIA"){ C++ }
  
    quiz.style.display="none";
    if(C==0){
        result.textContent=`Your result is ${C}.Poor,try again.`
    }
    else if(C>=1 && C<4){
        result.textContent=`Your result is ${C}.Almost there?,but try again.`
    }
    else if(C>=4){
        result.textContent=`Your result is ${C}.Awesome.Good job.`
    }
}
    
document.getElementById("myButton").onclick=function(){
    location.href="http://127.0.0.1:5500/q2.html";

}