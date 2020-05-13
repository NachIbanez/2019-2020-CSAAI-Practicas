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
const video3 = document.getElementById("image")

//-- Imagen estática a mostrar cuando el video no
//-- ha arrancado
video1.poster="https://github.com/myTeachingURJC/2019-2020-CSAAI/raw/master/L10/test.png";
video2.poster="https://github.com/myTeachingURJC/2019-2020-CSAAI/raw/master/L10/test.png";
video3.poster="https://github.com/myTeachingURJC/2019-2020-CSAAI/raw/master/L10/test.png";


//-- Obtener los botones
const selector1 = document.getElementById("selector1")
const stop1 = document.getElementById("stop1")
const selector2 = document.getElementById("selector2")
const stop2 = document.getElementById("stop2")
const selector3 = document.getElementById("selector3")
const stop3 = document.getElementById("stop3")

//-- Función de retrollamada del botón de ver
selector1.onclick = () => {
  console.log("Click!");
  video1.src="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente1.mp4"
  video_pgm.src = video1.src
  video1.play();
  video_pgm.play();
};
//-- Función de retrollamada del botón de ver
selector2.onclick = () => {
  console.log("Click!");
  video2.src="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente2.mp4"
  video_pgm.src = video2.src
  video2.play();
  video_pgm.play();
};

//-- Función de retrollamada del botón de ver
selector3.onclick = () => {
  console.log("Click!");
  video3.src="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente3.mp4"
  video_pgm.src = video3.src
  video3.play();
  video_pgm.play();
};


//-- Funcion de retrollamada del boton de parar
stop1.onclick = () => {
  video1.pause();
  //-- Quitar la fuente de video, para que se muestre la
  //-- imagen definida en el atributo poster
  video1.src=null;
}

//-- Funcion de retrollamada del boton de parar
stop2.onclick = () => {
  video2.pause();
  //-- Quitar la fuente de video, para que se muestre la
  //-- imagen definida en el atributo poster
  video1.src=null;
}

//-- Funcion de retrollamada del boton de parar
stop3.onclick = () => {
  video3.pause();
  //-- Quitar la fuente de video, para que se muestre la
  //-- imagen definida en el atributo poster
  video1.src=null;
}
