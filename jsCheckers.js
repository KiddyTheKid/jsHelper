/**
 * @function emptyTarget Devuelve verdadero si el target no ha sido definido
 * @param {Attr} tar recibe un atributo del input usado  
 * 
 * @function inputIsEmpty Devuelve verdadero si el input no contiene texto onkeyup.
 * @param {DOM} c recibe el DOM para poder recabar los datos
 *  
 */

console.log('- Checkers Added');

const emptyTarget = (tar) => {
    return typeof tar == typeof undefined || tar === false; 
};