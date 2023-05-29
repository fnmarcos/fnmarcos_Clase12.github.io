function saludo(nombre) {
    if (nombre == "" || nombre == null) {
        alert (" No ingresó ningun nombre, por favor intente de nuevo");
        nombre_prompt = prompt("Ingrese su nombre a continuacion:");
        saludo(nombre_prompt);
    } else {
        alert (nombre + ", bienvenido a la pagina");
    }
}

var nombre_prompt = prompt("Ingrese su nombre a continuacion:");
saludo(nombre_prompt);
