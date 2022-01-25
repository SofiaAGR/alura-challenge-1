function validarForm (mensajeOriginal){
    
    var errores = [];
    if(mensajeOriginal.length == 0){
        errores.push ("Text field is empty.");
    }
    else{
    const regexpNum = /\d/g;
    if(regexpNum.test(mensajeOriginal)){
	    //console.log("Hay algun numero en la cadena");
        //console.log(mensajeOriginal.match(regexpNum)); //esto me muestra un array con cada coincidencia
        errores.push ("Numbers are not allowed.");
    }
    const regexpMayus = /[A-Z]/g; 
    if(regexpMayus.test(mensajeOriginal)){
        //console.log("Hay alguna mayuscula en la cadena");
        //console.log(mensajeOriginal.match(regexpMayus)); //esto me muestra un array con cada coincidencia
        errores.push ("Uppercases are not allowed.");
    }
    }
    return errores;
}