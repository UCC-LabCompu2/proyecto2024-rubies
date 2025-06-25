document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.querySelector("form");
    const resultadoDiv = document.getElementById("resultado");

    formulario.addEventListener("submit", (e) => {
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
});
