// Script para desplazamiento suave al hacer clic en enlaces de navegación
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Evita el comportamiento predeterminado del enlace

        const headerHeight = document.querySelector('header').offsetHeight; // Obtener la altura del header
        const targetId = this.getAttribute('href').substring(1); // Obtener el ID del elemento de destino sin el #

        const targetElement = document.getElementById(targetId); // Obtener el elemento de destino
        if (targetElement) {
            const targetPosition = targetElement.offsetTop - headerHeight; // Calcular la posición de desplazamiento ajustada

            // Desplazamiento suave a la posición calculada
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});
