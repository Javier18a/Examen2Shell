
document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.getElementById("form-reporte");
    const botonesConsulta = document.querySelectorAll("[data-reporte]");

    formulario.addEventListener("submit", (evento) => {
        evento.preventDefault();
    });

    botonesConsulta.forEach((boton) => {
        boton.addEventListener("click", () => {
            document.getElementById("tipo-reporte").value = boton.dataset.reporte;
            document.getElementById("form-reporte").scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        });
    });
});
