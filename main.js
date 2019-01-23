var string = "hola mundo";
var number = 2;
var boolean = true;
var array = new Array("hola", 4, false);
var array2 = ["adios", 0, true];
string = "Hola y adios";

var object = {
    "nombre": "Javier",
    "apellido": "Guijarro",
    "clave": "valor",
    "string": string,
    "array": array2[1]
};
const constante = "Hola";
function name() {
    var a = JSON.stringify(object);
    console.log(a);
}

function suma(a, b) {
    return a + b;
}
function log(value) {
    console.log(value);
}
name();
var resultadoSuma = suma(5, 6);
log(resultadoSuma);
log("El resultado de la suma es: " + resultadoSuma);
log(`El resultado es: ${suma(5, 6)}`);



