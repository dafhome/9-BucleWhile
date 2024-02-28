function loginPrueba() {
    var mailCorrecto = "usuario@gmail.com";
    var passwordCorrecto = "123456";
    let comprobarMail=false;
    let comprobarPassword=false;
    let i=3;
    // (comprobarMail==false&&comprobarPassword==false)
    while ((i>0) && (comprobarMail == false && comprobarPassword == false)){
        alert("Recuerda! Solo te quedan "+i+" intentos.");
        mail = prompt("Introduce tu mail");
        password = prompt("Introduce tu contraseña");

        console.log(mail);
        console.log(password);
        console.log(i);

        if (mail===mailCorrecto && password===passwordCorrecto){
            comprobarMail=true;
            comprobarPassword=true;
            i=3;
            window.open("/1-JSWhile/ok.html");
        }

        i--;
    }

    if (i==0){
        alert("Has agotado el máximo de 3 intentos")
    }


   
    // mail = mail.toLowerCase();
}




