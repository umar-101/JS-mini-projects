
 // jshint esversion :6 

 var QuizQuestions = [
    {
        question: "HTML stands for ",
        a:"HyperText Markup Language",
        b:"Cascading Style Sheet",
        c:"Application Programming Interface",
        d:"none of above",
        correct_answer:"a",
    },
    {
        question: "Who is Prime Minister of pakistan",
        a:"Nawaz Sharif",
        b:"Bilawal Bhutto",
        c:"Imran Khan",
        d:"Sheikh Rashid",
        correct_answer:"c",
    },
    {
        question: "Pakistan was created at",
        a:"11 Aug 1947",
        b:"12 Aug 1948",
        c:"14 Aug 1947",
        d:"1 Aug 1947",
        correct_answer:"c",
    },
    {
        question: "CSS Stands for",
        a:"HyperText Markup language",
        b:"Cascading Style Sheet",
        c:"Object Oriented language",
        d:"Application Programming Interface",
        correct_answer:"b",
    },
    {
        question: "Who is president of USA?",
        a:"Joe Biden",
        b:"Barak Obama",
        c:"Donald Trump",
        d:"None of above",
        correct_answer:"a",
    }
];
const questionEl = document.getElementById ("question");
const rbs = document.querySelectorAll('input[name="answer"]');
const aEl = document.getElementById ("a_text");
const bEl = document.getElementById ("b_text");
const cEl = document.getElementById ("c_text");
const dEl = document.getElementById ("d_text");
const submitBtn = document.getElementById("submit");
let currentQuestion = 0;
let score =0;

LoadQuiz();
function  LoadQuiz(){
    deSelectAnswer();
   const QuizData = QuizQuestions[currentQuestion];
   questionEl.innerHTML = QuizData.question;
    aEl.innerHTML = QuizData.a;
    bEl.innerHTML = QuizData.b;
    cEl.innerHTML = QuizData.c;
    dEl.innerHTML = QuizData.d;
    
}

RadioClick = function(){ 
    for (rb of rbs){
        if(rb.checked){
           return rb.id;
        }
    }
    return undefined;
};

function deSelectAnswer(){
    for (rb of rbs){
      rb.checked = false;

    }
}

submitBtn.addEventListener("click" , () =>{
   answer =  RadioClick();
   if(answer){
    if(answer === QuizQuestions[currentQuestion].correct_answer){ 
         score++;
   }
   currentQuestion++;
   if(currentQuestion < QuizQuestions.length ){
       LoadQuiz();
   }else{
       alert("Quiz Finished! Your Score is " + score +" out of " + QuizQuestions.length);
       
   }
}
   
       
    
    
    
});