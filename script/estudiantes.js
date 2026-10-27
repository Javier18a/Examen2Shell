
document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("formulario-estudiante");
    const seccionFormulario = document.getElementById("seccion-formulario");
    const botonAbrir = document.getElementById("abrir-formulario");
    const botonCerrar = document.getElementById("cerrar-formulario");
    const botonCancelar = document.getElementById("cancelar-formulario");
    const botonLimpiar = document.getElementById("limpiar-filtros");
    const campoBusqueda = document.getElementById("buscar-estudiante");

    function abrirFormulario() {
        if (!seccionFormulario) return;

        seccionFormulario.hidden = false;
        seccionFormulario.style.display = "block";

        seccionFormulario.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }

    function cerrarFormulario() {
        if (!seccionFormulario) return;

        seccionFormulario.hidden = true;
        seccionFormulario.style.display = "none";

        if (formulario) {
            formulario.reset();
        }
    }

    if (seccionFormulario) {
        seccionFormulario.hidden = true;
        seccionFormulario.style.display = "none";
    }

    if (botonAbrir) {
        botonAbrir.addEventListener("click", abrirFormulario);
    }

    if (botonCerrar) {
        botonCerrar.addEventListener("click", cerrarFormulario);
    }

    if (botonCancelar) {
        botonCancelar.addEventListener("click", cerrarFormulario);
    }

    if (formulario) {
        formulario.addEventListener("submit", function (evento) {
            evento.preventDefault();
        });
    }

    if (botonLimpiar) {
        botonLimpiar.addEventListener("click", function () {
            if (campoBusqueda) {
                campoBusqueda.value = "";
            }
        });
    }
});
