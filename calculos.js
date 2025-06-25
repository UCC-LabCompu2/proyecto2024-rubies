document.addEventListener("DOMContentLoaded", () => {
    // --- Funcionalidad: Calcular fuerza ---
    const formFuerza = document.getElementById("form-fuerza");
    const resultadoDiv = document.getElementById("resultado");

    if (formFuerza) {
        formFuerza.addEventListener("submit", (e) => {
            e.preventDefault();

            const masa = parseFloat(document.getElementById("masa").value);
            const aceleracion = parseFloat(document.getElementById("aceleracion").value);

            if (!isNaN(masa) && !isNaN(aceleracion) && masa >= 0 && aceleracion >= 0) {
                const fuerza = masa * aceleracion;
                resultadoDiv.textContent = `La fuerza resultante es: ${fuerza.toFixed(2)} N`;
            } else {
                resultadoDiv.textContent = "Por favor, ingresá valores válidos y positivos.";
            }
        });
    }

    // --- Funcionalidad: Mostrar alerta en contacto ---
    const formContacto = document.getElementById("form-contacto");

    if (formContacto) {
        formContacto.addEventListener("submit", (e) => {
            e.preventDefault();
            console.log("Submit atrapado, formulario no enviado.");

            const nombre = document.getElementById("nombre").value.trim();
            const email = document.getElementById("email").value.trim();
            const mensaje = document.getElementById("mensaje").value.trim();

            if (nombre && email && mensaje) {
                alert("¡Mensaje enviado!");
                formContacto.reset();
            }
        });
    }
});
