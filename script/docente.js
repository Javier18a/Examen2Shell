document.addEventListener("DOMContentLoaded", () => {
    const notificacion = document.getElementById("notificacion");
    const cerrarNotificacion = document.getElementById("cerrar-notificacion");
    const botones = document.querySelectorAll("[data-mensaje]");

    function mostrarMensaje() {
        notificacion.classList.add("visible");
    }

    function ocultarMensaje() {
        notificacion.classList.remove("visible");
    }

    botones.forEach((boton) => {
        boton.addEventListener("click", mostrarMensaje);
    });

    cerrarNotificacion.addEventListener("click", ocultarMensaje);
});