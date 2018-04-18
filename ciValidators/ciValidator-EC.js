/**
 * MODO DE USO
 * Se debe insertar en el input con evento ONKEYUP de esta forma
 * se debe ubicar un id al boton que se desea deshabilitar y en el input
 * se ubica la etiqueta "button-target" con el id del boton.
 * checkCI(this);
 * se usa con this
 * @function checkCI
 * @param {DOM} c Input donde se esta escribiendo la cedula
 * 
 */

console.log('- Validator Added');

const checkCI = (c) => {
    if (c.value.length == 10 || c.value.length == 13){
        let cedula, prov, tercer, decimo;
        let coef = [2, 1, 2, 1, 2, 1, 2, 1, 2];
        let sum = 0;
        cedula = c.value;
        prov = cedula.slice(0, 2);
        if (prov > 24 && prov < 0){
            document.getElementById($(c).attr('button-target')).setAttribute('disabled', true);
            document.getElementById($(c).attr('alert-container')).innerHTML = showWarning('Numero de cedula incorrecto');
        }
        tercer = cedula[2];
        if (tercer > 5){
            document.getElementById($(c).attr('button-target')).setAttribute('disabled', true);
            document.getElementById($(c).attr('alert-container')).innerHTML = showWarning('Numero de cedula incorrecto');
        }
        decimo = cedula[9];
        let cArray = [...cedula].slice(0, 9);
        cArray.map((num, indice) => {
            let mult = parseInt(num) * parseInt(coef[indice]);
            if (mult >= 10){ mult -= 9;}
            sum += mult;
        });
        if (sum == 10){
            sum = 0;
        } else {
            let decSup = Math.ceil(sum / 10) * 10;
            sum = decSup - sum;
        }
        if (sum != decimo) {
            document.getElementById($(c).attr('button-target')).setAttribute('disabled', true);
            document.getElementById($(c).attr('alert-container')).innerHTML = showWarning('Numero de cedula incorrecto');
        } else {
            document.getElementById($(c).attr('button-target')).disabled = false;
            document.getElementById($(c).attr('alert-container')).innerHTML = '';
        }
    } else {
        document.getElementById($(c).attr('button-target')).setAttribute('disabled', true);
    }
};
