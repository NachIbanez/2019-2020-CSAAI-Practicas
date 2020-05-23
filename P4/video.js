console.log("Ejecutando JS...");

//----- Obtener elemento de video 1 y configurarlo
const video1 = document.getElementById("video1")
video1.width=200;  //-- Tamaño de la pantalla de video
video1.height=100;

//----- Obtener elemento de video 2 y configurarlo
const video2 = document.getElementById("video2")
video2.width=200;  //-- Tamaño de la pantalla de video
video2.height=100;

//----- Obtener elemento de video 3 y configurarlo
const video3 = document.getElementById("video3")
video3.width=200;  //-- Tamaño de la pantalla de video
video3.height=100;

const video_pgm = document.getElementById("video_pgm")
video_pgm.width=600;  //-- Tamaño de la pantalla de video
video_pgm.height=300;

//----- Obtener elemento de imagen estática
const imagen_estatica = document.getElementById("image")
video3.width=200;  //-- Tamaño de la pantalla de video
video3.height=100;

//-- Imagen estática a mostrar cuando el video no
//-- ha arrancado
video1.poster="https://github.com/myTeachingURJC/2019-2020-CSAAI/raw/master/L10/test.png";
video2.poster="https://github.com/myTeachingURJC/2019-2020-CSAAI/raw/master/L10/test.png";
video3.poster="https://github.com/myTeachingURJC/2019-2020-CSAAI/raw/master/L10/test.png";


//-- Obtener los botones
const selector1 = document.getElementById("selector1")
const selector2 = document.getElementById("selector2")
const selector3 = document.getElementById("selector3")
const selector_imagen = document.getElementById("selector_imagen")
const manual = document.getElementById("manual")
const automatico = document.getElementById("automatico")
const bucle = document.getElementById("bucle")

//-- Estados del realizador de video
const ESTADO = {
  MANUAL: 0,
  AUTOMATICO: 1,
  BUCLE: 2,
}

let estado = ESTADO.MANUAL;
var bucle_2s;
var bucle_infinito;
//-- Función de retrollamada del botón de selector 1
selector1.onclick = () => {
  //-- Añadimos borde rojo a la fuente actual
  video1.className = "selector";
  video2.className = "";
  video3.className = "";
  //-- Muteamos las dos fuentes que no sean la actual
  video2.muted = true;
  video3.muted = true;
  if (estado == ESTADO.MANUAL){
    console.log("Click!");
    video_pgm.poster = null;
    video1.src="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente1.mp4"
    video_pgm.src = video1.src
    video1.play();
    video_pgm.play();
  } else if (estado == ESTADO.BUCLE) {
      clearInterval(bucle_2s)
      bucle_2s = setInterval(function(){
        video1.src="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente1.mp4"
        video_pgm.src = video1.src
        video_pgm.play();
      },2000);
  }
};
//-- Función de retrollamada del botón de selector 2
selector2.onclick = () => {
  //-- Añadimos borde rojo a la fuente actual
  video2.className = "selector";
  video1.className = "";
  video3.className = "";
  //-- Muteamos las dos fuentes que no sean la actual
  video1.muted = true;
  video3.muted = true;
  if (estado == ESTADO.MANUAL){
    console.log("Click!");
    video_pgm.poster = null;
    video2.src="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente2.mp4"
    video_pgm.src = video2.src
    video2.play();
    video_pgm.play();
  } else if (estado == ESTADO.BUCLE) {
      clearInterval(bucle_2s)
      bucle_2s = setInterval(function(){
        video2.src="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente2.mp4"
        video_pgm.src = video2.src
        video_pgm.play();
      },2000);
  }
};

//-- Función de retrollamada del botón de selector 3
selector3.onclick = () => {
  //-- Añadimos borde rojo a la fuente actual
  video3.className = "selector";
  video2.className = "";
  video1.className = "";
  //-- Muteamos las dos fuentes que no sean la actual
  video1.muted = true;
  video2.muted = true;
  if (estado == ESTADO.MANUAL){
    console.log("Click!");
    video_pgm.poster = null;
    video3.src="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente3.mp4"
    video_pgm.src = video3.src
    video3.play();
    video_pgm.play();
  } else if (estado == ESTADO.BUCLE) {
      clearInterval(bucle_2s)
      bucle_2s = setInterval(function(){
        video3.src="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente3.mp4"
        video_pgm.src = video3.src
        video_pgm.play();
      },2000);
  }
};

//-- Función de retrollamada del botón de selector imagen estática
selector_imagen.onclick = () => {
  if (estado == ESTADO.MANUAL){
    //-- Quitamos todos los bordes rojos y muteamos la fuentes de entrada
    video1.className = "";
    video2.className = "";
    video3.className = "";
    video1.muted = true;
    video2.muted = true;
    video3.muted = true;

    console.log("Click!");
    video_pgm.poster=imagen_estatica.src;
    video_pgm.src = null;
  }
};

//-- Funcion para el modo automatico, que cambie de fuente de video continuamente
var n=1
function video_sources_loop(){
  video_pgm.src = "https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente"+ n +".mp4";
  video_pgm.play()
  if (n==3){
    n=1;
  } else{
    n++
  }
}
//-- Funcion de modo AUTOMATICO
automatico.onclick = () =>{
  estado = ESTADO.AUTOMATICO;
  clearInterval(bucle_2s)
  video_pgm.poster = null;
  bucle_infinito = setInterval(video_sources_loop, 3000);
}

//-- Funcion de modo MANUAL
manual.onclick = () =>{
  estado = ESTADO.MANUAL;
  clearInterval(bucle_infinito)
  clearInterval(bucle_2s)
}

//-- Funcion de modo BUCLE
bucle.onclick = () =>{
  estado = ESTADO.BUCLE;
  clearInterval(bucle_infinito)
  clearInterval(bucle_2s)
}
