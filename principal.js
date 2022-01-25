
/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/


// var inicio = document.querySelector("#input-texto");
// inicio.focus();

var botonEncriptar = document.querySelector("#btn-encriptar");
botonEncriptar.addEventListener("click", function(event){ //esto es una funcion anonima
    
    event.preventDefault();
    var form = document.querySelector("#input-texto");
    var mensajeOriginal = capturarDatos(form);
    var errores = validarForm(mensajeOriginal);
    // console.log(errores);

    if(errores.length > 0){ //si hay algun error..
        mostrarMensajesError (errores);
        return; //este return vacio hace referencia a la funcion anonima
        //es como si fuera un break, ya no ejecuta el resto del codigo
    }
    var mensajeEncriptado = encriptarMensaje (mensajeOriginal);
    // console.log(mensajeEncriptado);
    var coDec = document.querySelector("#mensaje-final");
    coDec.textContent = "CODED MESSAGE";
    var mensajesError = document.querySelector("#mensajes-error");
    mensajesError.innerHTML="";
}); 

var botonBorrar = document.querySelector("#btn-borrar");
botonBorrar.addEventListener("click", function(event){ //esto es una funcion anonima
    
    // event.preventDefault();
    var form = document.querySelector("#input-texto");
    var borrarMensaje = document.querySelector("#msg");
    borrarMensaje.value="";
    form.value = "";
    form.focus();
    var coDec = document.querySelector("#mensaje-final");
    coDec.textContent = "CODED MESSAGE";
    var mensajesError = document.querySelector("#mensajes-error");
    mensajesError.innerHTML="";

}); 

var botonDesencriptar = document.querySelector("#btn-desencriptar");
botonDesencriptar.addEventListener("click", function(event){
    event.preventDefault();
    var form = document.querySelector("#input-texto");
    var mensajeOriginal = capturarDatos(form);
    var errores = validarForm(mensajeOriginal);
    // console.log(errores);

    if(errores.length > 0){ //si hay algun error..
        mostrarMensajesError (errores);
        return; //este return vacio hace referencia a la funcion anonima
        //es como si fuera un break, ya no ejecuta el resto del codigo
    }
    var mensajeDesencriptado = desencriptarMensaje (mensajeOriginal);
    var coDec = document.querySelector("#mensaje-final");
    coDec.textContent = "DECODED MESSAGE";
    var mensajesError = document.querySelector("#mensajes-error");
    mensajesError.innerHTML="";
});

var botonCopiar = document.querySelector("#btn-copy");
botonCopiar.addEventListener ("click", function(event){
    var copyText = document.querySelector("#msg");
    copyText.select();
    document.execCommand("copy");

});


function capturarDatos (form){
    //Copiamos en las variables el contenido ingresado por usuario (nombre)
    //Creamos una CLASE que tenga los atributos nombre, peso, altura, gordura
    // para poder retornar todos los datos desde la funcion
    var mensaje = form.value; 
    return mensaje;
}


function mostrarMensajesError (errores){
    var ul = document.querySelector("#mensajes-error");
    ul.innerHTML = ""; //Esto me resetea cada mensaje de error nuevo pero no me los borra cuando hago un ingreso valido
    errores.forEach(function(error){
        var li = document.createElement("li");
        li.textContent = error;
        ul.appendChild(li);
    });
}