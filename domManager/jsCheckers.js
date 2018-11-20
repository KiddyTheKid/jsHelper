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
const jsCheckers = {
    emptyTarget: function(tar){
        return typeof tar == typeof undefined || tar === false || tar == null;
    },
    listItemSelected: function(c) {
        let inputVal = c.value;
        let listData = document.getElementById(c.getAttribute('list')).childNodes;
        Array.from(listData).forEach(function(list){
            if (list.value === inputVal) {
                return true;
            }
        });
    }
}