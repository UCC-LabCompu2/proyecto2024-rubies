   /**
   * Validar que no sean valores negativos y calcular aceleracion
   * @method v_des_t
   * @param {number} posicionInicial - se almacena posicion inicial
   * @param {number} posicionFinal - se almacena posicion final
   * @param {number} velocidadInicial - se almacena velocidad inicial
   * @param {number} tiempo - se almacena el tiempo
   * @return Aceleracion
   */

   function v_des_t(){
    var posicionInicial = Number(document.getElementById("posicioni").value);
    var posicionFinal = Number(document.getElementById("posicionf").value);
    var velocidadInicial = Number(document.getElementById("velinicial").value);
    var tiempo = Number(document.getElementById("tiempo").value);

    if( velocidadInicial<0 ||tiempo<0){
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

   function vel_des(){
    var posicionInicial = Number(document.getElementById("posicioni").value);
    var posicionFinal = Number(document.getElementById("posicionf").value);
    var velocidadInicial = Number(document.getElementById("velocidadi").value);
    var velocidadFinal = Number(document.getElementById("velocidadf").value);
    

    if(velocidadInicial<0 || velocidadFinal<0){
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

   function vel_t(){
    var velocidadInicial = Number(document.getElementById("velinicial").value);
    var velocidadFinal = Number(document.getElementById("velfinal").value);
    var tiempoI = Number(document.getElementById("tiempoi").value);
    var tiempof = Number(document.getElementById("tiempof").value);
    

    if(velocidadInicial<0 || velocidadFinal<0){
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

