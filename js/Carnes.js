function toggleReceta(card) {
    // 1. Buscamos todas las tarjetas
    const todasLasTarjetas = document.querySelectorAll('.carne-card');

    // 2. Si la tarjeta clickeada YA está activa, la cerramos
    if (card.classList.contains('activa')) {
        card.classList.remove('activa');
    } else {
        // 3. Si no, cerramos todas las que estén abiertas primero...
        todasLasTarjetas.forEach(c => c.classList.remove('activa'));
        // 4. ...y abrimos solo la que seleccionamos
        card.classList.add('activa');
    }
}