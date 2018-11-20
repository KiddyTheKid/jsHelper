/**
 * @function initLoader Inicia el loader * 
 * @function endLoader Detene el loader
 */

console.log('- Loader Added');
const jsLoader = {
    initLoader: function(){
        let divPadre = document.createElement('div');
        divPadre.id = 'divPadre';
        divPadre.className = 'spnrParent';
        let divLoader = document.createElement('div');
        divLoader.className = 'spnrLoader';
        document.getElementsByTagName('body')[0].appendChild(divPadre);
        document.getElementById('divPadre').appendChild(divLoader);
    },
    endLoader: function(){
        let header = document.getElementsByTagName('head')[0];
        let body = document.getElementsByTagName('body')[0];
        header.childNodes.forEach((nodo) => {
            if (nodo.id === 'loaderStyle'){
                header.removeChild(nodo);
            }
        });
        body.childNodes.forEach((nodo) => {
            if (nodo.id === 'divPadre'){
                body.removeChild(nodo);
            }
        });
    }
}