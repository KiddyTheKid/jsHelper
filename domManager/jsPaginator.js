console.log('- Paginator Added');

/**
 * @function goToPage
 * Add pagination using a get var 
 * Required attributes:
 *  pg-action: +/- to go back of forward
 *  pg-var: Name of the variable
 * @param {DOM} c DOM elemento that performs the action
 */
const jsPaginator = {
    goToPage: function(c){
        let getVars = window.location.search.slice(1).split('&');
        let accion = c.getAttribute('pg-action');
        let getVarName = c.getAttribute('pg-var');
        let pagina = 1;
        let hrefString = '?';
        getVars.forEach(function(valor){
            var nData = valor.split('=');
            if (nData[0] === getVarName) {
                pagina = parseInt(nData[1]);
            } else {
                hrefString +=`${valor}&`;
            }
        });
        if (accion == "+") {
            pagina++;
        }
        if (accion == "-") {
            pagina = pagina > 1 ? pagina -1 : 1;
        }
        hrefString += `${getVarName}=${pagina}`;
        window.location.href = hrefString;
    }
}