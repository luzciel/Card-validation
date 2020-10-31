const validator = { isValid, maskify}


function isValid(numeroTarjeta) {
      var sum = 0;
        for (var i = 0; i < numeroTarjeta.length; i++) {
            //console.log(numeroTarjeta[i]);
        // primero convierte el string en un numero y devuelveme los caracteres (iniciando en la posicion que tenga i  y tomando como longitud 1 solo caracter)
            //4137894711755904
            // 5166187454592415
            //6011895316376257
            //3589659809783950
            //4812127914185757
            //4738362374825599
            //3625102593804 ejemplo error
            //4083952015263
            var digito = parseInt(numeroTarjeta.substr(i, 1));  // substr=Localización en la cual se empiezan a extraer caracteres
            if (i % 2 !== 0) {
            //console.log("pos", i);
            //console.log("val", numeroTarjeta[i]);
                digito *= 2;
                //console.log("multiplicar", digito);
                if (digito > 9) {
                    digito = 1 + (digito % 10);
                    //console.log("mayor10", digito);
                }
            }
            sum += digito;
            //console.log("sumaTotal", sum)
        }
        console.log('SUM es:',sum)
        return (sum % 10) == 0;    
    }   


function maskify(numeroTarjeta) {
    //var numeroTarjeta = document.getElementById("numeroTDC").value;
        var imprimir = "";
        if( numeroTarjeta.length <= 4){
          imprimir= numeroTarjeta;
          }
          else {
            //"".padEnd(12, "*") + hello.substring (12, 16)
            imprimir = "".padEnd(numeroTarjeta.length -4, "#") + numeroTarjeta.substring(numeroTarjeta.length -4, numeroTarjeta.length)
            }
        console.log(imprimir);
        return imprimir 
        }

export default validator;
