const box_default = document.querySelector(".header__box--2");
const box1 = document.querySelector(".header__box--1");
const btn = document.querySelector("#btn__game");
var click = 1;

box_default.style.display = "block";
box1.style.display = "none";

btn.addEventListener("click", (e)=>{
  if (click == 2) {
    
    
    current = "none"
    setTimeout(() => {
      update();
    }, 200);
    click = 0
  }
 
click++;
  



  box1.style.display = "block";
  box_default.style.display = "none";
  
  btn_response(((base_allocation - allocation) * no_of_senators + ((base_allowance - allowance) + (base_salary - salary))
  * no_of_senators))
  
  
})

var btn_response = (e)=>{
  
   
for (let index = 0; index < banners.length; index++) {
  const element = banners[index];
  if(e < element.value){
    box1.innerHTML = element.banner;
    return;
  }else{
    box1.innerHTML = 'too much savings';
  }
  
}

}


