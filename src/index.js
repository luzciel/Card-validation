import validator from './validator.js';

const modal = document.getElementById("miModal");
const spanModal = document.getElementsByClassName("close")[0];

//funcion que establece el mensaje que aparecera en caso de que la tarjeta sea valida o no
const botonPago = () => {
  const creditCardNumber = document.getElementById("numeroTDC").value;
  if (creditCardNumber.length === 16 && validator.isValid(creditCardNumber) === true) {
    document.getElementById("validacion").innerHTML = '<a href="#">Felicidades ya eres parte de la familia Bardi.</a>';
    document.getElementById("ocultarNum").innerHTML = '<a href="#">Su suscripción esta afiliada a la tarjeta ' + validator.maskify(creditCardNumber) + '.</a>';
  } else {
    document.getElementById("validacion").innerHTML = '<a href="#" style="color: red">Error:</a>'
    document.getElementById("ocultarNum").innerHTML = '<a href="#">' + validator.maskify(creditCardNumber) + ' número de tarjeta invalido.</a>';
  }
  modal.style.display = "block";
}

// Cuando se haga click <span> (x), cierra el modal
spanModal.onclick = () => {
  modal.style.display = "none";
}
//click en el boton aceptar del modal aplica la funcion volverPag()
document.getElementById("volver").onclick = () => { volverPag() };

// funcion que designa que hara el boton ACEPTAR. Si la la tarjeta es valida (true) vuelve a la pagina anterior (back)
// y si es false desaparece el modal (style= "none")
const volverPag = () => {
  const creditCardNumber = document.getElementById("numeroTDC").value;
  if (creditCardNumber.length === 16 && validator.isValid(creditCardNumber) === true) {
    window.history.back()
  } else {
    modal.style.display = "none";
  }
}

// Cuando se haga clicks fuera del modal, este desaparece 
window.onclick = (evento) => {
  if (evento.target == modal) {
    modal.style.display = "none";
  }
}

window.botonPago = botonPago;
