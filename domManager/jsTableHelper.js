console.log('- TableHelper Added');

/**
 * @function jsTableHelper
 * Searchs for specific String inside an HTML table
 * This method could be triggered with onkeyup or onkeydown, your decision. 
 * Required attributes in DOM: 
 *  table-col: Could be setted by @function changeTableSearchCol or manually setted to the column desireds
 *  table-target: Table ID
 * @param {DOM} c DOM with proper settings
 * 
 * @function changeTableSearchCol
 * Defines the columns in which the search will be performed
 * Works along with @function searchInTable
 * Works with Select Input and each option should contain the index of the column desired
 * as an array would be from 0 to N 
 * Required attributes in DOM: 
 *  input-target: Input Text ID
 * @param {DOM} c DOM with proper settings 
 */
const jsTableHelper = {
    searchInTable: function (c){
        var filtro, tableRows, tableData, tableTarget, col;
        col = c.getAttribute('table-col');
        if (emptyTarget(col)){ 
            console.warn('No se ha declarado table-col: default es 0');
            col = 0;
        }
        filtro = c.value.toUpperCase();
        tableTarget = c.getAttribute('table-target');
        if (emptyTarget(tableTarget)){ 
            console.error('No hay table-target'); 
            return; 
        }

        tableRows = document.getElementById(tableTarget).getElementsByTagName('tr');
        Array.from(tableRows).forEach(function(tableRow){
            tableData = tableRow.getElementsByTagName('td')[col];
            if (!tableData) {
                console.error("Error al obtener Table data");
                return;
            }
            tableRow.style = tableData.innerHTML.toUpperCase().indexOf(filtro) > -1 ? '' : 'none';
        });
    },
    changeTableSearchCol: function(c){
        var input, col, iTarget;
        iTarget = c.getAttribute('input-target');
        if (emptyTarget(iTarget)) { 
            console.error('No input-target found'); 
            return; 
        }
        input = document.getElementById(iTarget);
        col = c.value;
        input.setAttribute('table-col', col);
    }
}