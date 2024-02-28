function realizarSuma(){
    var pregunta = true;
    document.getElementById("boton").style = "display: none";
    document.getElementById("titulosuma").style = "display: block";


    while (pregunta == true){
        
        let numeroUno = parseInt (prompt("Introduce tu primer numero: "));
        let numeroDos = parseInt (prompt("Introduce el segundo numero: "))
        let suma = sumar (numeroUno, numeroDos);

    

        // document.write("<h1>La suma de "+numeroUno+" + "+numeroDos+" es: "+suma);
        añadirElemento(numeroUno,numeroDos,suma);

        let preguntaContinuar = prompt("¿Quieres hacer otra suma?");

        if(preguntaContinuar.toLowerCase() == "no"){
            pregunta = false;
        }

    }

}

function sumar(a,b){
    suma = a+b;
    return suma;
}
function añadirElemento(a,b,sum){

    const node = document.createElement("h4");
    const textnode = document.createTextNode("La suma de "+a+" + "+b+" es: "+sum);
    node.appendChild(textnode);
    document.getElementById("resultadosSuma").appendChild(node);

}