function mostrarMensajesError (errores){
    var ul = document.querySelector("#mensajes-error");
    ul.innerHTML = ""; //Esto me resetea cada mensaje de error nuevo pero no me los borra cuando hago un ingreso valido
    errores.forEach(function(error){
        var li = document.createElement("li");
        li.textContent = error;
        ul.appendChild(li);
    });
}