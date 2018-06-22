const box2 = document.querySelector(".header__box--2");
const box1 = document.querySelector(".header__box--1");
const btn = document.querySelector("#btn__game");

box1.style.display = "none";
box2.style.display = "block";

box1.style.animation = "appear 1s ease-in .1s both";

btn.addEventListener("click", (e)=>{
  box1.style.display = "block";
  box2.style.display = "none";


})
console.log(btn)