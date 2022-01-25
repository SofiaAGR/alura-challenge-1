function desencriptarMensaje (mensajeOriginal){
    var mostrarMensaje = document.querySelector("#msg");
    mostrarMensaje.value="";

    var mensajeDesencriptado = mensajeOriginal.replaceAll('ai', 'a');
    var mensajeDesencriptado2 = mensajeDesencriptado.replaceAll('enter', 'e');
    var mensajeDesencriptado3 = mensajeDesencriptado2.replaceAll('imes', 'i');
    var mensajeDesencriptado4 = mensajeDesencriptado3.replaceAll('ober', 'o');
    var mensajeDesencriptado5 = mensajeDesencriptado4.replaceAll('ufat', 'u');

    mostrarMensaje.value = mensajeDesencriptado5;

    return(mostrarMensaje.value)
}

