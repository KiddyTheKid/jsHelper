/**
 * MODO DE USO
 * Se usa como eventListener en algun DOM que acepte insercion de datos.
 * En el INPUT deben estar los siguientes atributos 
 * "table-target" con el nombre de la tabla en la que se realizara la busqueda
 * "table-col" debe tener el numero de la columna en la que se hara la busqueda.
 * 
 * En el DOM que modifica al INPUT deben estar los siguientes atributos
 * "input-target" contiene el id del input que hace la busqueda en la tabla
 * 
 * @function searchInTable
 * @param {DOM} c recibe el DOM HTML que contiene los datos, se lo recibe con this
 * @param {intenger} col recibe del DOM HTML el numero de la columna en la que se busca, 
 * en caso de no tener, se asigna 0 automaticamente.
 *  
 * @function changeTableSearchCol funciona con SELECT de html
 * @param {DOM} c recibe el DOM HTML que contiene los datos con this
 * @param {intenger} col recibe del DOM HTML la eleccion que se haya hecho con el value. 
 * 
 */

console.log('- TableHelper Added');

const searchInTable = (c) => {
    let filtro, tr, td, i, col;
    col = $(c).attr('table-col');
    if (emptyTarget(col)){ console.warn('No se ha declarado table-col: default es 0'); col = 0;}

    filtro = c.value.toUpperCase();

    let tTarget = $(c).attr('table-target');
    if (emptyTarget(tTarget)){ console.error('No hay table-target'); return; }

    tr = document.getElementById(tTarget).getElementsByTagName('tr');
    for (i = 0; i < tr.length; i++){
        td = tr[i].getElementsByTagName('td')[col];
        if (td){
            if (td.innerHTML.toUpperCase().indexOf(filtro)  > -1){
                tr[i].style.display = '';
            } else {
                tr[i].style.display = 'none';
            }
        }
    }
};

const changeTableSearchCol = (c) => {
    let input, col;
    let iTarget = $(c).attr('input-target');
    if (emptyTarget(iTarget)) { console.error('No hay input-target'); return; }

    input = document.getElementById(iTarget);
    col = c.value;
    input.setAttribute('table-col', col);    
};