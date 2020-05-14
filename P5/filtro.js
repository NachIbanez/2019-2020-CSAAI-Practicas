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


//-- Funcion de retrollamada del deslizador rojo
deslizador_rojo.oninput = () => {
  //-- Mostrar el nuevo valor del deslizador
  range_value_rojo.innerHTML = deslizador_rojo.value;

  //-- Situar la imagen original en el canvas
  //-- No se han hecho manipulaciones todavia
  ctx.drawImage(img, 0,0);

  //-- Obtener la imagen del canvas en pixeles
  let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

  //-- Obtener el array con todos los píxeles
  let data = imgData.data

  //-- Obtener el umbral de rojo del desliador
  umbral = deslizador.value

  //-- Filtrar la imagen según el nuevo umbral
  for (let i = 0; i < data.length; i+=4) {
    if (data[i] > umbral)
      data[i] = umbral;
  }

//-- Funcion de retrollamada del deslizador verde
deslizador_verde.oninput = () => {
  //-- Mostrar el nuevo valor del deslizador
  range_value_verde.innerHTML = deslizador_verde.value;

  //-- Situar la imagen original en el canvas
  //-- No se han hecho manipulaciones todavia
  ctx.drawImage(img, 0,0);

  //-- Obtener la imagen del canvas en pixeles
  let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

  //-- Obtener el array con todos los píxeles
  let data = imgData.data

  //-- Obtener el umbral de rojo del desliador
  umbral = deslizador.value

  //-- Filtrar la imagen según el nuevo umbral
  for (let i = 1; i < data.length; i+=4) {
    if (data[i] > umbral)
      data[i] = umbral;
  }

  //-- Funcion de retrollamada del deslizador rojo
  deslizador_azul.oninput = () => {
    //-- Mostrar el nuevo valor del deslizador
    range_value_azul.innerHTML = deslizador_azul.value;

    //-- Situar la imagen original en el canvas
    //-- No se han hecho manipulaciones todavia
    ctx.drawImage(img, 0,0);

    //-- Obtener la imagen del canvas en pixeles
    let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

    //-- Obtener el array con todos los píxeles
    let data = imgData.data

    //-- Obtener el umbral de rojo del desliador
    umbral = deslizador.value

    //-- Filtrar la imagen según el nuevo umbral
    for (let i = 2; i < data.length; i+=4) {
      if (data[i] > umbral)
        data[i] = umbral;
    }
  //-- Poner la imagen modificada en el canvas
  ctx.putImageData(imgData, 0, 0);
}

console.log("Fin...");