document.addEventListener("DOMContentLoaded", () => {
    const fechaActual = document.getElementById("fecha-actual");

    if (fechaActual) {
        const fecha = new Date();

        fechaActual.textContent = fecha.toLocaleDateString("es-NI", {
            day: "2-digit",
            month: "long",
            year: "numeric"
        });
    }

    const enlacesNavegacion = document.querySelectorAll("nav ul li a");
    const paginaActual = window.location.pathname.split("/").pop() || "index.html";

    enlacesNavegacion.forEach((enlace) => {
        const destino = enlace.getAttribute("href");

        if (destino === paginaActual) {
            enlacesNavegacion.forEach((elemento) => {
                elemento.classList.remove("activo");
            });

            enlace.classList.add("activo");
        }
    });

    const botonNotificaciones = document.getElementById("boton-notificaciones");

    if (botonNotificaciones) {
        botonNotificaciones.addEventListener("click", () => {
            alert("No tienes notificaciones nuevas.");
        });
    }
});