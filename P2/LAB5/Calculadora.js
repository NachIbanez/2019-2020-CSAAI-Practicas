console.log("Ejecutando JS...");

display = document.getElementById("display")
igual = document.getElementById("igual")
clear = document.getElementById("clear")

//-- Crear un array con todos los elementos
//-- de la clase digito
digito = document.getElementsByClassName("digito")
operador = document.getElementsByClassName("operador")

for (i=0; i<digito.length; i++) {
  digito[i].onclick = (ev) => {
    number(ev.target.value)
    console.log('ESTADO:' + estado)
  }
}

  for (i=0; i<operador.length; i++) {
    operador[i].onclick = (ev) => {
        operadores(ev.target.value)
        console.log('ESTADO:' + estado)
    }
  }

//-- Evaluar la expresion
igual.onclick = () => {
  if (estado == ESTADO.OP2 || estado == ESTADO.OP2_INIT ){
    display.innerHTML = eval(display.innerHTML);
    estado = ESTADO.INIT;
    console.log('ESTADO:' + estado)

  }
}

//-- Poner a cero la expresion
clear.onclick = () => {
  display.innerHTML = "0";
  estado = ESTADO.INIT;
  console.log('ESTADO:' + estado)

}

//-- Estados de la calculadora
const ESTADO = {
  INIT: 0,
  OP1: 1,
  OPERATION: 2,
  OP2_INIT: 3,
  OP2: 4,
}

estado = ESTADO.INIT

//-- Ha llegado un dígito
function number(num)
{
  //-- Segun el estado hacemos una cosa u otra
  if (estado == ESTADO.INIT) {
    display.innerHTML = num;
    estado = ESTADO.OP1;
  } else if (estado == ESTADO.OP1) {
    display.innerHTML += num;
  } else if (estado == ESTADO.OPERATION) {
    display.innerHTML += num;
    estado = ESTADO.OP2_INIT;
  } else if (estado == ESTADO.OP2_INIT) {
    display.innerHTML += num;
    estado = ESTADO.OP2;
  } else if (estado == ESTADO.OP2) {
    display.innerHTML += num;
  }
}

//-- Ha llegado un operador
function operadores(operador)
{
  //-- Segun el estado hacemos una cosa u otra
  if (estado == ESTADO.OP1) {
    display.innerHTML += operador;
    estado = ESTADO.OPERATION;
  }
}
