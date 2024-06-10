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
    var posicionInicial = Number(document.getElementById("posicioni").value);
    var posicionFinal = Number(document.getElementById("posicionf").value);
    var velocidadInicial = Number(document.getElementById("velinicial").value);
    var tiempo = Number(document.getElementById("tiempo").value);

    if( velocidadInicial == "" || posicionInicial == "" || posicionFinal == "" || tiempo == "" ){
        alert("Completa todos los campos!");
    } else if( velocidadInicial<0 ||tiempo<0){
        alert("Recuerda no ingresar valores negativos!");
        document.getElementById("velinicial").value = "";
        document.getElementById("posicioni").value = "";
        document.getElementById("posicionf").value= "";
        document.getElementById("tiempo").value= "";
    }else{
        var aceleracion = (2 * (posicionFinal - posicionInicial)) / (tiempo * tiempo) - (2 * velocidadInicial / tiempo);
        document.getElementById("resultado").innerText="La aceleración es: " + aceleracion.toFixed(2) + " m/s^2";
    }

   }
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

    if (posicionInicial == "" || posicionFinal== "" || velocidadInicial == "" || velocidadFinal== "" ){
        alert("Completa todos los campos!");
    } else if(velocidadInicial<0 || velocidadFinal<0){
        alert("Recuerda no ingresar valores negativos!");
        document.getElementById("posicioni").value = "";
        document.getElementById("posicionf").value = "";
        document.getElementById("velocidadi").value= "";
        document.getElementById("velocidadf").value= "";
    }else{
        var aceleracion = 0.5 * ((velocidadFinal ** 2 - velocidadInicial ** 2) / (posicionFinal - posicionInicial));
        document.getElementById("resultado").innerText="La aceleración es: " + aceleracion.toFixed(2) + " m/s^2";
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


    if (velocidadInicial == "" || velocidadFinal == "" || tiempoI == "" ||  tiempof == "" ){
        alert("Completa todos los campos");

    } else if(velocidadInicial<0 || velocidadFinal<0){
        alert("Recuerda no ingresar valores negativos!");
        document.getElementById("velinicial").value = "";
        document.getElementById("velfinal").value = "";
        document.getElementById("tiempoi").value= "";
        document.getElementById("tiempof").value= "";
    }else if(tiempoI>tiempof){
        alert("El tiempo final no puede ser menor que el tiempo inicial!");
        document.getElementById("velinicial").value = "";
        document.getElementById("velfinal").value = "";
        document.getElementById("tiempoi").value= "";
        document.getElementById("tiempof").value= "";
    }else{
        var aceleracion = (velocidadFinal - velocidadInicial) / (tiempof - tiempoI);
        document.getElementById("resultado").innerText="La aceleración es: " + aceleracion.toFixed(2) + " m/s^2";
    }

   }
