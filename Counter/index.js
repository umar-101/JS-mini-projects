//jshint esversion:6
const countDown = document.querySelector('h1');
const IncBtn = document.getElementById("increase");
const resetBtn = document.getElementById("reset");
const DecBtn = document.getElementById("decrease");
var count = 0;
function increment(){
    return count++;
  }
function decrement() {
    return count--;
} 
IncBtn.addEventListener('click' , function(){
    increment();
    countDown.innerHTML = count;
    if(count > 0 ){
        countDown.style.color = 'green';
    }if(count ===0){
        countDown.style.color = 'black';
    }
});
DecBtn.addEventListener('click', function(){
    decrement();
    countDown.innerHTML = count;
    console.log(count);
    if(count < 0 ){
        countDown.style.color = 'red';
    }if(count ===0){
        countDown.style.color = 'black';
    } 
});
resetBtn.addEventListener('click', function(){
    countDown.innerHTML = 0;
    count = 0;
    countDown.style.color = 'black';
});


