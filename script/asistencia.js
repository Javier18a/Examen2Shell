
document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.querySelector("#formulario-asistencia");
    const botonLimpiar = document.querySelector("#limpiar-formulario");
    const botonNuevo = document.querySelector("#nuevo-registro");

    if (formulario) {
        formulario.addEventListener("submit", (evento) => {
            evento.preventDefault();
        });
    }

    if (botonLimpiar && formulario) {
        botonLimpiar.addEventListener("click", () => {
            formulario.reset();
        });
    }

    if (botonNuevo && formulario) {
        botonNuevo.addEventListener("click", () => {
            formulario.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    }
});
