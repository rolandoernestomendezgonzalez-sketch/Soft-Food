document.addEventListener("DOMContentLoaded", function(){

const select = document.querySelector(".custom-select");
const header = document.querySelector(".select-header");
const options = document.querySelectorAll(".select-options li");

// Abrir / cerrar
header.addEventListener("click", function(){
    select.classList.toggle("active");
});

// Seleccionar opción
options.forEach(function(option){
    option.addEventListener("click", function(){
        document.querySelector(".select-text").textContent = option.textContent;
        select.classList.remove("active");
    });
});

// Cerrar si se hace click fuera
document.addEventListener("click", function(e){
    if(!select.contains(e.target)){
        select.classList.remove("active");
    }
});

});