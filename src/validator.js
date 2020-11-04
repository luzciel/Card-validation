const isValid = (numeroTarjeta) => {
    let sum = 0;
    let numeroTarjetaInvertido = numeroTarjeta.split('').reverse().join('')
    for (let i = 0; i < numeroTarjeta.length; i++) {
        // primero convierte el string en un numero y devuelve los caracteres (iniciando en la posicion que tenga i  y tomando como longitud 1 solo caracter)
        let digito = parseInt(numeroTarjetaInvertido.substr(i, 1));  // substr=Localización en la cual se empiezan a extraer caracteres
        if (i % 2 !== 0) {
            digito *= 2;
            if (digito > 9) {
                digito = 1 + (digito % 10);
            }
        }
        sum += digito;
    }
    return (sum % 10) == 0;
}


const maskify = (numeroTarjeta) => {
    let imprimir = "";
    if (numeroTarjeta.length <= 4) {
        imprimir = numeroTarjeta;
    }
    else {
        //padEnd() rellena la cadena actual con una cadena dada + substring() extrae caracteres desde indiceA hasta indiceB sin incluirlo.
        imprimir = "".padEnd(numeroTarjeta.length - 4, "#") + numeroTarjeta.substring(numeroTarjeta.length - 4, numeroTarjeta.length)
    }
    return imprimir
}

const validator = { isValid, maskify }
export default validator;
