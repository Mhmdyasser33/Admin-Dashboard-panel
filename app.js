const body = document.querySelector("body") ;
const btn = document.querySelector(".go-and-back") ; 
const navbar = document.querySelector("nav") ;
const bars = document.querySelector(".bar") 
console.log(bars) ;

let getMode = localStorage.getItem("Mode") ;
if(getMode === 'Dark'){
    body.classList.toggle("dark") ;
}
btn.addEventListener('click' , ()=>{
    body.classList.toggle("dark") ;
      (body.classList.contains("dark") ? localStorage.setItem("Mode" , "Dark") : localStorage.setItem("Mode" , "Light"))
})
let getStatus = localStorage.getItem("status");
if(getStatus === 'close'){
    navbar.classList.toggle('close') ;
}
bars.addEventListener('click' , ()=>{
navbar.classList.toggle('close') ;
if(navbar.classList.contains("close")){
localStorage.setItem("status" , "close");
}
else{
    localStorage.setItem("status" , "open");
}   
})