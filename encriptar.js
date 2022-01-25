function encriptarMensaje (mensajeOriginal){
    var mostrarMensaje = document.querySelector("#msg");
    mostrarMensaje.value="";
    var aux = "";
    for (var i=0; i<mensajeOriginal.length;i++){
        if(mensajeOriginal[i]== "a"){
            aux = "ai";
        }
        if(mensajeOriginal[i]== "e"){
            aux = "enter";
        }
        if(mensajeOriginal[i]== "i"){
            aux = "imes";
        }
        if(mensajeOriginal[i]== "o"){
            aux = "ober";
        }
        if(mensajeOriginal[i]== "u"){
            aux = "ufat";
        }
        if ((mensajeOriginal[i]!= "a")
            && (mensajeOriginal[i]!= "e")
            && (mensajeOriginal[i]!= "i")
            && (mensajeOriginal[i]!= "o")
            && (mensajeOriginal[i]!= "u")){
            aux = mensajeOriginal[i];
        }
        mostrarMensaje.value = mostrarMensaje.value + aux;
        // console.log(mostrarMensaje.value);
        // console.log(aux);
    }

    return(mostrarMensaje.value)
}