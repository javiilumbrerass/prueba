function validar(){
    // Almacenamos valores de las cajas en los que vamos a introducir datos //
    var mail, password, expresion;
    mail = documento.getElementById("mail").value;
    password = documento.getElementById("password").value;
    // Estructura que tiene que tener un correo electrónico javierlumbrerascorbacho@gmail.com//
    expresion = /\w+@\w+\.+[a-z]/;
    // ********************************************************************** //
    if(mail=== "" || password=== ""){
        alert("Error! No ha introducido los datos. Introduzca un correo y contraseña para continuar");
        return false;
    } else if (mail.length > 25) {
        alert("Error! El número de caracteres supera el máximo. Introduzca otro correo más corto");
        return false;
    } else if (!expresion.test(mail)){
        alert("Error! Correo no válido. Introduzca otro correo para seguir");
        return false;
    } else if (password.lenght <4 || password.lenght >8)
        alert("Error! Contraseña no válida. Introduzca una nueva entre 4 y 8 carácteres");
        return false;
}