console.log("Ejecutando calculadora en JS...");

display = document.getElementById("display")
igual = document.getElementById("igual")
clear = document.getElementById("clear")
del = document.getElementById("del")
ans = document.getElementById("ans")
coma = document.getElementById("coma")


//-- Crear un array con todos los elementos
//-- de la clase digito
digito = document.getElementsByClassName("digito")
operador = document.getElementsByClassName("operador")

for (i=0; i<digito.length; i++) {
  digito[i].onclick = (ev) => {
    number(ev.target.value)
    console.log('ESTADO:' + estado)
    console.log(estados)

  }
}

  for (i=0; i<operador.length; i++) {
    operador[i].onclick = (ev) => {
        operadores(ev.target.value)
        console.log('ESTADO:' + estado)
        console.log(estados)

    }
  }

//-- Evaluar la expresion
igual.onclick = () => {
  if (estado == ESTADO.OP2 || estado == ESTADO.OP2_INIT ){
    display.innerHTML = eval(display.innerHTML);
    ans.value = display.innerHTML;
    estado = ESTADO.INIT;
    console.log('ESTADO:' + estado)
    console.log(estados)
    estados = new Array();
    estados.push(estado);
  }
}

//-- Última respuesta guardada
coma.onclick = () => {
  if (estado != ESTADO.OPERACIONES){
    display.innerHTML += coma.innerHTML;
    console.log('ESTADO:' + estado)
    console.log(estados)
  }
}

//-- Última respuesta guardada
ans.onclick = () => {
  display.innerHTML += ans.value;
  estado = ESTADO.OP2;
  console.log('ESTADO:' + estado)
  console.log(estados)
}

//-- Poner a cero la expresion
clear.onclick = () => {
  display.innerHTML = "0";
  estado = ESTADO.INIT;
  console.log('ESTADO:' + estado)
  console.log(estados)
}

//-- Borrar el último digito u operando añadido
del.onclick = () => {
  estado = estados[estados.length-2];
  estados.pop();
  display.innerHTML = display.innerHTML.substring(0, display.innerHTML.length - 1);
  console.log(display.innerHTML)
  console.log('ESTADO:' + estado)
  console.log(estados)
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
var estados = new Array();
estados.push(estado);

//-- Ha llegado un dígito
function number(num)
{
  //-- Segun el estado hacemos una cosa u otra
  if (estado == ESTADO.INIT) {
    display.innerHTML = num;
    estado = ESTADO.OP1;
    estados.push(estado);
  } else if (estado == ESTADO.OP1) {
    display.innerHTML += num;
    estados.push(estado);
  } else if (estado == ESTADO.OPERATION) {
    display.innerHTML += num;
    estado = ESTADO.OP2_INIT;
    estados.push(estado);
  } else if (estado == ESTADO.OP2_INIT) {
    display.innerHTML += num;
    estado = ESTADO.OP2;
    estados.push(estado);
  } else if (estado == ESTADO.OP2) {
    display.innerHTML += num;
    estados.push(estado);
  }
}

//-- Ha llegado un operador
function operadores(operador)
{
  //-- Segun el estado hacemos una cosa u otra
  if (estado != ESTADO.OPERATION) {
    display.innerHTML += operador;
    estado = ESTADO.OPERATION;
    estados.push(estado);
  }
}
