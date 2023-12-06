
const burger = document.getElementById("burger");
const action = document.getElementById("actions");

burger.addEventListener("click", ()=>{
    hundleMenu();
})

function hundleMenu(){
    burger.classList.toggle("is-active");
    action.classList.toggle("is-active");
}