
document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.getElementById("form-boletin");
    const botonPreparar = document.getElementById("ir-a-formulario");
    const seccionFormulario = document.getElementById("seccion-formulario");

    formulario.addEventListener("submit", (evento) => {
        evento.preventDefault();
    });

    botonPreparar.addEventListener("click", () => {
        seccionFormulario.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});
