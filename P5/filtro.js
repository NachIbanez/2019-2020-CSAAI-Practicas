console.log("Ejecutando JS....")

//-- Obtener elementos del DOM
const canvas = document.getElementById('canvas');
const img = document.getElementById('imagesrc');
const ctx = canvas.getContext('2d');

//-- Acceso al deslizador
const deslizador_rojo = document.getElementById('deslizador_rojo');
const deslizador_verde = document.getElementById('deslizador_verde');
const deslizador_azul = document.getElementById('deslizador_azul');

//-- Valor del deslizador
const range_value_rojo = document.getElementById('range_value_rojo');
const range_value_verde = document.getElementById('range_value_verde');
const range_value_azul = document.getElementById('range_value_azul');

//-- Botones para cambiar de filtros
const colores = document.getElementById('colores');
const grises = document.getElementById('grises');
const espejo = document.getElementById('espejo');


//-- Estados del procesador de imagen
const ESTADO = {
  COLORES: 0,
  GRISES: 1,
  ESPEJO: 2,
}

let estado = ESTADO.COLORES;
//-- Función de retrollamada de imagen cargada
//-- La imagen no se carga instantaneamente, sino que
//-- lleva un tiempo. Sólo podemos acceder a ella una vez
//-- que esté totalmente cargada
img.onload = function () {

  //-- Se establece como tamaño del canvas el mismo
  //-- que el de la imagen original
  canvas.width = img.width;
  canvas.height = img.height;

  //-- Situar la imagen original en el canvas
  //-- No se han hecho manipulaciones todavia
  ctx.drawImage(img, 0,0);

  console.log("Imagen lista...");
};


//-- Funcion a la que accederemos cada vez que movamos uno de los tres deslizadores de color.
//-- Así guardamos el último estado de los píxeles y podemos trabajar sobre ese y no la imagen inicial.
function barras_color() {
  if (estado == ESTADO.COLORES){
    //-- Mostrar el nuevo valor del deslizador
    range_value_rojo.innerHTML = deslizador_rojo.value;
    range_value_verde.innerHTML = deslizador_verde.value;
    range_value_azul.innerHTML = deslizador_azul.value;

    //-- Situar la imagen original en el canvas
    //-- No se han hecho manipulaciones todavia
    ctx.drawImage(img, 0,0);

    //-- Obtener la imagen del canvas en pixeles
    let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

    //-- Obtener el array con todos los píxeles
    let data = imgData.data

    //-- Obtener el umbral de rojo del desliador
    umbral_rojo = deslizador_rojo.value
    umbral_verde = deslizador_verde.value
    umbral_azul = deslizador_azul.value

    //-- Filtrar la imagen según el nuevo umbral
    for (let i = 0; i < data.length; i+=4) {
      if (data[i] > umbral_rojo){
          data[i] = umbral_rojo;
        }
        if (data[i+1] > umbral_verde){
          data[i+1] = umbral_verde;
        }
        if (data[i+2] > umbral_azul){
          data[i+2] = umbral_azul;
        }
    }
    //-- Poner la imagen modificada en el canvas
    ctx.putImageData(imgData, 0, 0);
  }
}

//-- Funcion de retrollamada del deslizador rojo
deslizador_rojo.oninput = () => {
  barras_color()
}

//-- Funcion de retrollamada del deslizador verde
deslizador_verde.oninput = () => {
  barras_color()
}

//-- Funcion de retrollamada del deslizador azul
deslizador_azul.oninput = () => {
  barras_color()
}

colores.onclick = () => {
  estado = ESTADO.COLORES;
}


grises.onclick = () => {

  estado = ESTADO.GRISES;
  //-- Situar la imagen original en el canvas
  //-- No se han hecho manipulaciones todavia
  ctx.drawImage(img, 0,0);

  //-- Obtener la imagen del canvas en pixeles
  let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

  //-- Obtener el array con todos los píxeles
  let data = imgData.data
  for(var i = 0; i < data.length; i += 4) {
      var grayscale= 0.33*data[i]+0.5*data[i+1]+0.15*data[i+2];
      data[i]=grayscale;
      data[i+1]=grayscale;
      data[i+2]=grayscale;
    }
    //-- Poner la imagen modificada en el canvas
    ctx.putImageData(imgData, 0, 0);
}

espejo.onclick = () => {

  estado = ESTADO.ESPEJO;
  ctx.drawImage(img, 0,0);
  ctx.translate(2*(img.width)/2,0);
  ctx.scale(-1,1);
  ctx.drawImage(img, 0,0);
}

console.log("Fin...");
