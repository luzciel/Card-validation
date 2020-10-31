
// function maskify() {
//   var numeroTarjeta = document.getElementById("numeroTDC").value;
//   var imprimir = "";
//   if( numeroTarjeta.length <= 4){
//     imprimir= numeroTarjeta;
//   }
//     else {
//       //"".padEnd(12, "*") + hello.substring (12, 16)
//       imprimir = "".padEnd(numeroTarjeta.length -4, "*") + numeroTarjeta.substring(numeroTarjeta.length -4, numeroTarjeta.length)
//       }
//   console.log(imprimir);
//   return imprimir 
//  }





// let numero = 4137894711755904;

// function ValidarNumero(numero) {
//   var regex = new RegExp("^[0-9]{16}$");
//   if (!regex.test(numero))
//       return false;

//   return luhnCheck(numero);
// }

// // substr=Localización en la cual se empiezan a extraer caracteres

// function luhnCheck(val) {
//   var sum = 0;
//   for (var i = 0; i < val.length; i++) {
//       var intVal = parseInt(val.substr(i, 1));
//       if (i % 2 == 0) {
//           intVal *= 2;
//           if (intVal > 9) {
//               intVal = 1 + (intVal % 10);
//           }
//       }
//       sum += intVal;
//   }
//   return (sum % 10) == 0;

// }


// /* Función que valida el número de tarjeta según Algoritmo de Luhn*/

// const validateNumberCard = (num, input, images) => {
//   if (maximoDeCaracteres(num) && soloNumero(num)) {
//     let sum = 0;
//     let arrayCard = num.split('');
//     let arrayReverse = arrayCard.reverse();

//     arrayReverse.forEach((element, i) => {
//       if (i % 2 !== 0) {
//         let elementSelection = parseInt(arrayReverse[i]) * 2;
//         if (elementSelection >= 10) {
//           let elementFinal = parseInt(elementSelection / 10) + elementSelection % 10;
//           arrayReverse[i] = elementFinal;
//         } else {
//           let otherElement = parseInt(arrayReverse[i]) * 2;
//           arrayReverse[i] = otherElement;
//         }
//       }
//     });

//     arrayReverse.forEach((element, index) => {
//       sum += parseInt(arrayReverse[index]);
//     });

//     if (sum > 0 && sum % 10 === 0) {
//       validateNumCard = true;
//       input.addClass('success');
//       input.removeClass('error');
//       validateTypeCard(num, images);
//     } else {
//       validateNumCard = false;
//       input.addClass('error');
//       input.removeClass('success');
//       images.attr('src', '');
//     }
//   } else {
//     validateNumCard = false;
//     input.addClass('error');
//     input.removeClass('success');
//     images.attr('src', '');
//   }
// };




// if ( numeroTarjeta.length < 16) { 
//   return false
// } else {



// function botonPago() {
//     var numeroTarjeta = document.getElementById("numeroTDC").value;
//     var sum = 0;
//     for (var i = 0; i < numeroTarjeta.length; i++) {
//       //console.log(numeroTarjeta[i]);
//       // primero convierte el string en un numero y devuelveme los caracteres (iniciando en la posicion que tenga i  y tomando como longitud 1 solo caracter)
//       //4137894711755904
//       var digito = parseInt(numeroTarjeta.substr(i, 1));
//       if (i % 2 == 0) {
//         console.log("pos", i);
//         console.log("val", numeroTarjeta[i]);
//           digito *= 2;
//           console.log("multiplicar", digito);
//           if (digito > 9) {
//               digito = 1 + (digito % 10);
//               console.log("mayor10", digito);
//           }
//       }
//       sum += digito;
//   }
//   if ((sum % 10) == 0) {
//     alert("felicitaciones tu tarjeta " + numeroTarjeta + " es valida")
//   } else {
//     alert ("error");
//   }
//   //return (sum % 10) == 0;
//   console.log("sumaTotal", sum)
  
//   }
//   window.botonPago = botonPago;
  
//   // borrador

//   function (numeroTDC) {
//     //var numeroTarjeta = document.getElementById("numeroTDC").value;
//     var sum = 0;
//     for (var i = 0; i < numeroTarjeta.length; i++) {
//       //console.log(numeroTarjeta[i]);
//      // primero convierte el string en un numero y devuelveme los caracteres (iniciando en la posicion que tenga i  y tomando como longitud 1 solo caracter)
//       //4137894711755904
//       var digito = parseInt(numeroTarjeta.substr(i, 1));
//       if (i % 2 == 0) {
//         //console.log("pos", i);
//         //console.log("val", numeroTarjeta[i]);
//           digito *= 2;
//           console.log("multiplicar", digito);
//           if (digito > 9) {
//               digito = 1 + (digito % 10);
//               console.log("mayor10", digito);
//           }
//       }
//       sum += digito;
//       console.log("sumaTotal", sum)
//   }
//   // if ((sum % 10) == 0) {
//   //   alert("felicitaciones tu tarjeta " + numeroTarjeta + " es valida")
//   // } else {
//   //   alert ("error");
//   // }
//   return (sum % 10) == 0;    
//   }


//  let maskify =  function () {
//       //var numeroTarjeta = document.getElementById("numeroTDC").value;
//       var numeroTarjeta = 4137894711755904;
//       var imprimir = "";
//       if( numeroTarjeta.length <= 4){
//         imprimir= numeroTarjeta;
//       }
//         else {
//           //"".padEnd(12, "*") + hello.substring (12, 16)
//           imprimir = "".padEnd(numeroTarjeta.length -4, "*") + numeroTarjeta.substring(numeroTarjeta.length -4, numeroTarjeta.length)
//           }
//       console.log(imprimir);
//       return imprimir 
//      }



// export default validator;










// // Get the button that opens the modal
// //var btn = document.getElementById("myBtn");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks on the button, open the modal
// //btn.onclick = function() {
// //   modal.style.display = "block";
// //}

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }


// window.botonPago = botonPago;












// function maskify() {
//   var numeroTarjeta = document.getElementById("numeroTDC").value;
//   var imprimir = "";
//   if( numeroTarjeta.length <= 4){
//     imprimir= numeroTarjeta;
//   }
//     else {
//       //"".padEnd(12, "*") + hello.substring (12, 16)
//       imprimir = "".padEnd(numeroTarjeta.length -4, "*") + numeroTarjeta.substring(numeroTarjeta.length -4, numeroTarjeta.length)
//       }
//   console.log(imprimir);
//   return imprimir 
//  }