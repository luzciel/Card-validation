import validator from './validator.js';

const modal = document.getElementById("miModal");

//funcion que establece el mensaje que aparecera en caso de que la tarjeta sea valida o no
function botonPago() {
  var creditCardNumber = document.getElementById("numeroTDC").value;
  if (creditCardNumber.length === 16 && validator.isValid(creditCardNumber) === true) {
    document.getElementById("validacion").innerHTML ='<a href="#">Felicidades ya eres parte de la familia Bardi.</a>';
    document.getElementById("ocultarNum").innerHTML ='<a href="#">Tus suscripción esta afiliada a la tarjeta ' + validator.maskify(creditCardNumber) +'.</a>';
  } else {
    document.getElementById("validacion").innerHTML ='<a href="#">Error: </a>'
    document.getElementById("ocultarNum").innerHTML ='<a href="#">' + validator.maskify(creditCardNumber) + ' numero de tarjeta invalido.</a>';
  }
  modal.style.display = "block";
}


// obtener el elemento <span> el cual cierra el modal
const span = document.getElementsByClassName("close")[0]; 

// Cuando se haga click <span> (x), cierra el modal
span.onclick = function() {
  modal.style.display = "none";
}
//Al hacer click en el boton aceptar del modal aplica la funcion volverPag()
document.getElementById("volver").onclick = function() {volverPag()};

// funcion que designa que hara el boton ACEPTAR. Si la la tarjeta es validad (true) vuelve a la pagina anterior (back)
// y si es false desaparece el modal (style= "none")
function volverPag() {
  let creditCardNumber = document.getElementById("numeroTDC").value;
  if (creditCardNumber.length === 16 && validator.isValid(creditCardNumber) === true) {
    window.history.back()
  } else {
    modal.style.display = "none";
  }  
}

// Cuando se haga clicks fuera del modal, este desaparece 
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

window.botonPago = botonPago;
