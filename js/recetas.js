const listaRecetas = [
    {
        title: "Sopa de Choclo",
        desc: "Una crema tradicional de maíz tierno, suave y reconfortante.",
        img: "img/Sopa1.jfif",
        cal: "180 kcal", benefits: "Fibra y energía natural.",
        ing: ["4 mazorcas", "1 cebolla", "2 papas", "Caldo vegetal"],
        steps: ["Sofreír la cebolla.", "Agregar el maíz y las papas.", "Cocinar 20 min y licuar."]
    },
    {
        title: "Crema de Espárragos",
        desc: "Elegante y depurativa, perfecta para una cena ligera.",
        img: "img/Sopa2.jfif",
        cal: "120 kcal", benefits: "Rica en ácido fólico.",
        ing: ["500g espárragos", "1 puerro", "Aceite de oliva"],
        steps: ["Saltear el puerro.", "Añadir los espárragos y agua.", "Triturar hasta que esté suave."]
    },
    {
        title: "Shoyu Ramen",
        desc: "Un clásico japonés adaptado para ser más saludable.",
        img: "img/Sopa3.jfif",
        cal: "450 kcal", benefits: "Proteína y saciedad.",
        ing: ["Fideos ramen", "Salsa de soja", "Huevo", "Cebollín"],
        steps: ["Preparar caldo base.", "Cocer fideos.", "Añadir el huevo hervido."]
    },
    {
        title: "Lentejas al Curry",
        desc: "Sabor intenso y especiado con todos los beneficios de las legumbres.",
        img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=500",
        cal: "320 kcal", benefits: "Hierro y proteína vegetal.",
        ing: ["Lentejas", "Curry", "Leche de coco", "Zanahoria"],
        steps: ["Cocer lentejas.", "Añadir el curry y la leche de coco.", "Dejar reducir 10 min."]
    },
    {
        title: "Sopa de Tortilla",
        desc: "El alma de México en un tazón lleno de texturas y sabor.",
        img: "img/Sopa4.jpg",
        cal: "290 kcal", benefits: "Antioxidantes naturales.",
        ing: ["Tortillas", "Tomate", "Aguacate", "Chiles"],
        steps: ["Hacer caldo de tomate.", "Poner las tortillas fritas.", "Servir con aguacate fresco."]
    },
    {
        title: "Crema de Champiñones",
        desc: "Textura aterciopelada con el sabor terroso de hongos frescos.",
        img: "https://images.unsplash.com/photo-1603105037880-880cd4edfb0d?q=80&w=500",
        cal: "150 kcal", benefits: "Baja en calorías.",
        ing: ["Champiñones", "Ajo", "Crema ligera", "Cebolla"],
        steps: ["Saltear hongos con ajo.", "Licuar con crema ligera.", "Calentar y decorar con perejil."]
    }
];

function toggleInfo(imgDiv) {
    const card = imgDiv.closest(".card");
    const info = card.querySelector(".recipe-content");
    const overlay = document.getElementById("overlay");
    const isActive = card.classList.contains("active");

    // ✅ Cerrar TODAS incluyendo la clickeada primero
    document.querySelectorAll(".card").forEach(c => {
        c.classList.remove("active");
        const ci = c.querySelector(".recipe-content");
        ci.style.maxHeight = "0";
        ci.style.paddingBottom = "0";
        ci.style.overflow = "hidden";
    });
    overlay.classList.remove("active");

    // ✅ Si no estaba activa, abrir solo esta
    if (!isActive) {
        card.classList.add("active");
        info.style.overflow = "visible";
        info.style.maxHeight = info.scrollHeight + "px";
        info.style.paddingBottom = "25px";
        overlay.classList.add("active");
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("container-recetas");

    listaRecetas.forEach(receta => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <div class="card-img" onclick="toggleInfo(this)">
                <img src="${receta.img}" alt="${receta.title}">
            </div>
            <h3>${receta.title}</h3>
            <p style="color:#888; padding: 0 20px 10px;">${receta.desc}</p>
            <p style="font-size:12px; color:#2ecc71; font-weight:bold; margin-bottom:15px; cursor:pointer;"
               onclick="toggleInfo(this.closest('.card').querySelector('.card-img'))">
                (Clic para ver detalles)
            </p>
            <div class="recipe-content">
                <h4>Ingredientes:</h4>
                <ul>${receta.ing.map(i => `<li>${i}</li>`).join("")}</ul>
                <h4>Preparación:</h4>
                <ol>${receta.steps.map(s => `<li>${s}</li>`).join("")}</ol>
                <div class="info-grid">
                    <span><strong>🔥 Calorías:</strong><br>${receta.cal}</span>
                    <span><strong>✨ Beneficio:</strong><br>${receta.benefits}</span>
                </div>
            </div>
        `;

        container.appendChild(card);
    });

    // ✅ Clic en overlay cierra todo
    document.getElementById("overlay").addEventListener("click", () => {
        document.querySelectorAll(".card").forEach(c => {
            c.classList.remove("active");
            const ci = c.querySelector(".recipe-content");
            ci.style.maxHeight = "0";
            ci.style.paddingBottom = "0";
            ci.style.overflow = "hidden";
        });
        document.getElementById("overlay").classList.remove("active");
    });
});