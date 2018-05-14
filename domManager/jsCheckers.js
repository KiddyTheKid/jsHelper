/**
 * @function emptyTarget Devuelve verdadero si el target no ha sido definido
 * @param {Attr} tar recibe un atributo del input usado  
 * 
 * @function inputIsEmpty Devuelve verdadero si el input no contiene texto onkeyup.
 * @param {DOM} c recibe el DOM para poder recabar los datos
 * 
 * @function listItemSelected Reacciona cuando un elemento de un datalist ha sido seleccionado
 * @param {DOM} c recibe el DOM para poder ubicar la lista especifica 
 * 
 */

console.log('- Checkers Added');

const emptyTarget = (tar) => {
    return typeof tar == typeof undefined || tar === false; 
};

const listItemSelected = (c) => {
    let inputVal = c.value;
    let listData = document.getElementById($(c).attr('list')).childNodes;
    for (var i = 0; i < listData.length; i++){
        if (listData[i].value === val){
            return true;
            break;
        }
    }
};