const validator = { isValid, maskify}

//for (let i = numeroTarjeta.length -1; i >=0; i--) {
        // primero convierte el string en un numero y devuelveme los caracteres (iniciando en la posicion que tenga i  y tomando como longitud 1 solo caracter)
            //4137894711755904 
            //3625102593804 laboraroria video
            //5558624161667524 mastercar
            //4621877493661245 visa
            //4738362374825599 
            //5357458662503166
            //3625102593804 ejemplo error

    function isValid(numeroTarjeta) {
        let sum = 0;
        let numeroTarjetaInvertido = numeroTarjeta.split('').reverse().join('')
            for (let i = 0; i < numeroTarjeta.length; i++) {
                let digito = parseInt(numeroTarjetaInvertido.substr(i, 1));  // substr=Localización en la cual se empiezan a extraer caracteres
                if (i % 2 !== 0) {
                    digito *= 2;
                    if (digito > 9) {
                        digito = 1 + (digito % 10);
                    }
                }
                sum += digito;
            }
            console.log('SUM es:',sum)
            return (sum % 10) == 0;    
    }   


    function maskify(numeroTarjeta) {
            let imprimir = "";
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
