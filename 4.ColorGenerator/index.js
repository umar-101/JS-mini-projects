//jshint esversion:6

const h1E = document.querySelector('h1');

const btn = document.querySelector('button');



btn.addEventListener("click" , function(){

 
   document.body.style.backgroundColor = colorGenerator();
   h1E.innerHTML = colorGenerator();
});

// window.addEventListener('keyup' ,function(e) {
//     console.log(e.code);
// });

colorGenerator = function(){
    const rColor = Math.floor(Math.random()* 256);
    const gColor = Math.floor(Math.random()* 256);
    const bColor = Math.floor(Math.random()* 256);
   return `rgb(${rColor} , ${gColor} , ${bColor})`; 
}