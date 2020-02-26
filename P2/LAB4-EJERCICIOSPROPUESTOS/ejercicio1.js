console.log("Ejecutando JS...");

const digitos = document.getElementsByClassName("digito")
const operadores = document.getElementsByClassName("operador")
const display = document.getElementById('display')

var operando1;
var operando2;
var operador;
var resultado;

console.log(operando1, operando2);
//-- Función de retrollamada de los botones
//-- botones de la clase dígito
function digito(value)
{
  console.log("Valor: " + value);
  display.innerHTML = value;
  if  (operando1 == null){
    operando1 = value;
  } else if (operando2 == null) {
    operando2 = value;
  } else{
    resultado = operando1 + operando2;
    operando1 = operando1;
    operando2 = null;
  }
  console.log(operando1, operando2, resultado);

}

for (i=0; i<digitos.length; i++) {

  //-- Establecer la funcion de llamada del boton i
  //-- El parámetro ev.target contiene el boton
  //-- que ha recibido el click
  digitos[i].onclick = (ev) => {
    digito(ev.target.value)
  }
}
