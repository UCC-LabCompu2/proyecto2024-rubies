/**
* Validar que no sean valores negativos y calcular aceleracion en funcion del desplazamiento, la velocidad inicial y el tiempo
* @method v_des_t
* @param {number} posicionInicial - se almacena posicion inicial
* @param {number} posicionFinal - se almacena posicion final
* @param {number} velocidadInicial - se almacena velocidad inicial
* @param {number} tiempo - se almacena el tiempo
* @return Aceleracion
*/

const v_des_t = () => {
    const posicionInicialInput = document.getElementById("posicioni");
    const posicionFinalInput = document.getElementById("posicionf");
    const velocidadInicialInput = document.getElementById("velinicial");
    const tiempoInput = document.getElementById("tiempo");
    const resultado = document.getElementById("resultado");

    // Limpiar mensajes anteriores
    resultado.innerText = "";
    resultado.style.color = "black";

    // Validar campos vacíos (usar .value.trim())
    if (
        posicionInicialInput.value.trim() === "" ||
        posicionFinalInput.value.trim() === "" ||
        velocidadInicialInput.value.trim() === "" ||
        tiempoInput.value.trim() === ""
    ) {
        resultado.style.color = "red";
        resultado.innerText = "Completa todos los campos.";
        return;
    }

    // Convertir a números
    const posicionInicial = Number(posicionInicialInput.value);
    const posicionFinal = Number(posicionFinalInput.value);
    const velocidadInicial = Number(velocidadInicialInput.value);
    const tiempo = Number(tiempoInput.value);

    // Validar que no haya negativos (solo en variables que aplican)
    if (velocidadInicial < 0 || tiempo < 0) {
        resultado.style.color = "red";
        resultado.innerText = "Recuerda no ingresar valores negativos.";
        // No borro todo, solo los inputs inválidos para que no moleste
        velocidadInicialInput.value = "";
        tiempoInput.value = "";
        return;
    }

    // Calcular aceleración
    const aceleracion =
        (2 * (posicionFinal - posicionInicial)) / (tiempo * tiempo) -
        (2 * velocidadInicial) / tiempo;

    resultado.style.color = "green";
    resultado.innerText = "La aceleración es: " + aceleracion.toFixed(2) + " m/s²";
};

/**
 * Validar que no sean valores negativos y calcular aceleracion en funcion del desplazamiento, la velocidad inicial y velocidad final
 * @method v_des_t
 * @param {number} posicionInicial - se almacena posicion inicial
 * @param {number} posicionFinal - se almacena posicion final
 * @param {number} velocidadInicial - se almacena velocidad inicial
 * @param {number} velocidadFinal - se almacena velocidad final
 * @return Aceleracion
 */

const vel_des = () => {
    var posicionInicial = Number(document.getElementById("posicioni").value);
    var posicionFinal = Number(document.getElementById("posicionf").value);
    var velocidadInicial = Number(document.getElementById("velocidadi").value);
    var velocidadFinal = Number(document.getElementById("velocidadf").value);

    if (posicionInicial == "" || posicionFinal == "" || velocidadInicial == "" || velocidadFinal == "") {
        alert("Completa todos los campos!");
    } else if (velocidadInicial < 0 || velocidadFinal < 0) {
        alert("Recuerda no ingresar valores negativos!");
        document.getElementById("posicioni").value = "";
        document.getElementById("posicionf").value = "";
        document.getElementById("velocidadi").value = "";
        document.getElementById("velocidadf").value = "";
    } else {
        var aceleracion = 0.5 * ((velocidadFinal ** 2 - velocidadInicial ** 2) / (posicionFinal - posicionInicial));
        document.getElementById("resultado").innerText = "La aceleración es: " + aceleracion.toFixed(2) + " m/s^2";
    }

}

/**
* Validar que no sean valores negativos y calcular aceleracion en funcion de la velocidad inicial y el tiempo
* @method v_des_t
* @param {number} posicionInicial - se almacena posicion inicial
* @param {number} posicionFinal - se almacena posicion final
* @param {number} tiempoInicial - se almacena tiempo inicial
* @param {number} tiempoFinal - se almacena tiempo final
* @return Aceleracion
*/

const vel_t = () => {
    var velocidadInicial = Number(document.getElementById("velinicial").value);
    var velocidadFinal = Number(document.getElementById("velfinal").value);
    var tiempoI = Number(document.getElementById("tiempoi").value);
    var tiempof = Number(document.getElementById("tiempof").value);


    if (velocidadInicial == "" || velocidadFinal == "" || tiempoI == "" || tiempof == "") {
        alert("Completa todos los campos");

    } else if (velocidadInicial < 0 || velocidadFinal < 0) {
        alert("Recuerda no ingresar valores negativos!");
        document.getElementById("velinicial").value = "";
        document.getElementById("velfinal").value = "";
        document.getElementById("tiempoi").value = "";
        document.getElementById("tiempof").value = "";
    } else if (tiempoI > tiempof) {
        alert("El tiempo final no puede ser menor que el tiempo inicial!");
        document.getElementById("velinicial").value = "";
        document.getElementById("velfinal").value = "";
        document.getElementById("tiempoi").value = "";
        document.getElementById("tiempof").value = "";
    } else {
        var aceleracion = (velocidadFinal - velocidadInicial) / (tiempof - tiempoI);
        document.getElementById("resultado").innerText = "La aceleración es: " + aceleracion.toFixed(2) + " m/s^2";
    }

}
