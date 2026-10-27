
document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.getElementById("form-historial");
    const botonNuevo = document.getElementById("mostrar-formulario");
    const seccionFormulario = document.getElementById("formulario-historial");

    formulario.addEventListener("submit", (evento) => {
        evento.preventDefault();
    });

    botonNuevo.addEventListener("click", () => {
        seccionFormulario.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});
