document.addEventListener("DOMContentLoaded", () => {
    const formFuerza = document.getElementById("form-fuerza");
    const resultadoDiv = document.getElementById("resultado");
    const canvas = document.getElementById("grafico");

    // Variables necesarias para animación
    let fuerzaActual = 0;
    let posX = 0;
    let ctx, width, height;

    // --- Función para iniciar animación en canvas ---
    const iniciarCanvas = () => {
        if (!canvas) return;
        ctx = canvas.getContext("2d");
        width = canvas.width;
        height = canvas.height;

        const animar = () => {
            ctx.clearRect(0, 0, width, height);

            // Dibujar bloque
            ctx.fillStyle = "#007BFF";
            ctx.fillRect(posX, height / 2 - 15, 50, 30);

            // Dibujar flecha proporcional a la fuerza
            const flechaLargo = Math.min(fuerzaActual * 10, 100); // límite visual
            ctx.beginPath();
            ctx.moveTo(posX, height / 2);
            ctx.lineTo(posX + flechaLargo, height / 2);
            ctx.lineTo(posX + flechaLargo - 10, height / 2 - 5);
            ctx.moveTo(posX + flechaLargo, height / 2);
            ctx.lineTo(posX + flechaLargo - 10, height / 2 + 5);
            ctx.strokeStyle = "#FF0000";
            ctx.lineWidth = 2;
            ctx.stroke();

            // Mover bloque
            posX += Math.min(fuerzaActual * 0.5, 5); // velocidad proporcional, límite máx.

            if (posX > width) posX = 0;

            requestAnimationFrame(animar);
        };

        animar();
    };

    if (formFuerza) {
        formFuerza.addEventListener("submit", (e) => {
            e.preventDefault();

            const masa = parseFloat(document.getElementById("masa").value);
            const aceleracion = parseFloat(document.getElementById("aceleracion").value);

            if (!isNaN(masa) && !isNaN(aceleracion) && masa >= 0 && aceleracion >= 0) {
                const fuerza = masa * aceleracion;
                resultadoDiv.textContent = `La fuerza resultante es: ${fuerza.toFixed(2)} N`;

                fuerzaActual = fuerza;
                posX = 0; // reiniciar animación con nueva fuerza
            } else {
                resultadoDiv.textContent = "Por favor, ingresá valores válidos y positivos.";
            }
        });
    }

    // --- Formulario de contacto ---
    const formContacto = document.getElementById("form-contacto");
    if (formContacto) {
        formContacto.addEventListener("submit", (e) => {
            e.preventDefault();

            const nombre = document.getElementById("nombre").value.trim();
            const email = document.getElementById("email").value.trim();
            const mensaje = document.getElementById("mensaje").value.trim();

            if (nombre && email && mensaje) {
                alert("¡Mensaje enviado!");
                formContacto.reset();
            }
        });
    }

    // Iniciar canvas solo si existe en el HTML
    iniciarCanvas();
});
