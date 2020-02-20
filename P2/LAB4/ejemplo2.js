console.log("ejecutando js...");

const test=document.getElementById('test')

test.onclick = () => {
  console.log("miau!!");

  if (test.style.backgroundColor=="") {
    test.style.backgroundColor = "yellow";
  }
  else{
    test.style.backgroundColor = "";
  }
}
