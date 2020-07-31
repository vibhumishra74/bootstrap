(function(){
let social = document.querySelectorAll(".social div")
social.forEach(function(e, ind){
    e.style.animation = `move 1s ease-in-out forwards ${ind*(1/5)+.2}s`
    
})
}())

let rocketpieces = document.querySelectorAll(".rocket-body span");
let rocket = document.querySelector(".rocket");
let triggerstart = window.innerHeight/5;
let rocketoffsettop = rocket.offsetTop;
let thirdoffset = rocketpieces[2].offsetTop;
document.addEventListener("scroll",function(e){
if(window.scrollY>(rocketoffsettop-triggerstart)){
    rocketpieces[0].classList.add("active");
    rocketpieces[1].classList.add("active");
   
}else{
    rocketpieces[0].classList.remove("active");
    rocketpieces[1].classList.remove("active");
   
}
if(window.scrollY>(thirdoffset-triggerstart)){
    rocketpieces[2].classList.add("active");
   
   
}else{
    rocketpieces[2].classList.remove("active");

   
}
})

let navlinks = document.querySelector(".nav-links");
let iconbar = document.getElementById("iconbar");
let show = document.getElementById("show");



// iconbar.addEventListener("click",function menu(){
//     navlinks.classList.toggle("visibility")

// });

function menu(){
    iconbar.addEventListener("click",function(){
        navlinks.classList.toggle("visibility");
       
    
    });
}

// function menu(){
//     if(show.className === "nav-links"){
//         show.className += " visibility";
//     }else{
//         show.className = "nav-links"
//     }
// }