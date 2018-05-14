/**
 * MODO DE USO
 * @function goToPage incrementa o disminuye un valor get de paginas
 * @param {DOM} c DOM que tiene la informacion necesaria
 * @param {String} accion Toma de pg-action la accion que realizara "+" para sumar "-" para restart
 * @param {String} getVarName Es el nombre de la variable get que se creara con el numero de pagina a tomar.
 *  
 */

console.log('- Paginator Added');

const goToPage = (c) => {
    let getVars = window.location.search.slice(1).split('&');
    let accion = $(c).attr('pg-action');
    let getVarName = $(c).attr('pg-var');
    let pagina = 0;
    let hrefString = '?';
    getVars.map((valor, indice) => {
        let nData = valor.split('=');
        if (nData[0] === getVarName){
            pagina = parseInt(nData[1]);
        } else {
            hrefString += valor + '&';
        }
    });
    switch (accion){
        case '+':
            pagina += 1;
            hrefString += getVarName + '=' + pagina;
            break;
        case '-':
            pagina = (pagina > 0) ? pagina - 1 : 0;
            hrefString += getVarName + '=' + pagina;
            break;
    }
    window.location.href = hrefString;
};