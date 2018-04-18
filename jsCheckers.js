/**
 * @function emptyTarget Devuelve verdadero si el target no ha sido definido
 * @param {Attr} tar recibe un atributo del input usado  
 * 
 * @function inputIsEmpty Devuelve verdadero si el input no contiene texto.
 * @param {DOM} c recibe el DOM para poder recabar los datos
 *  
 */

const emptyTarget = (tar) => {
    return typeof tar == typeof undefined || tar === false; 
};

const inputIsEmpty = (c) => {
    let val, button;
    val = c.value;
    button = $(c).attr('button-target');
    if (emptyTarget(button)){ console.error('No hay button-target'); return; } 
};