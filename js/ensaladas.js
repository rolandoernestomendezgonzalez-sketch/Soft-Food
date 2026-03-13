function toggleInfo(element){

const card = element.closest(".ensalada-card");
const info = card.querySelector(".info-ensalada");
const overlay = document.getElementById("overlay");

/* cerrar otras */
document.querySelectorAll(".ensalada-card").forEach(c=>{
if(c !== card){
c.classList.remove("active");
c.querySelector(".info-ensalada").style.maxHeight=null;
}
});

/* abrir o cerrar */
if(card.classList.contains("active")){

card.classList.remove("active");
info.style.maxHeight=null;
overlay.classList.remove("active");

}else{

card.classList.add("active");
info.style.maxHeight=info.scrollHeight+"px";
overlay.classList.add("active");

}

}