/**
 * @function initLoader Inicia el loader
 * @param {String} spinner Contiene las clases css para le comportamiento
 * 
 * @function endLoader Detene el loader
 */

console.log('- Loader Added');

const initLoader = () => {
    const spinner = `
                .spnrLoader {
                    border: 16px solid #f3f3f3; /* Light grey */
                    border-top: 16px solid #3498db; /* Blue */
                    border-radius: 50%;
                    width: 120px;
                    height: 120px;
                    animation: spin 0.36s linear infinite;
                }
                .spnrParent {
                    position: fixed;
                    z-index: 999;
                    height: 2em;
                    width: 2em;
                    overflow: show;
                    margin: auto;
                    top: 0;
                    left: 0;
                    bottom: 0;
                    right: 0;
                }

                .spnrParent:before {
                    content: '';
                    display: block;
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(0,0,0,0.3);
                }

                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
    `;
    let estilos = document.createElement('style');
    estilos.id = 'loaderStyle';
    estilos.textContent = spinner;
    let divPadre = document.createElement('div');
    divPadre.id = 'divPadre';
    divPadre.className = 'spnrParent';
    let divLoader = document.createElement('div');
    divLoader.className = 'spnrLoader';
    document.getElementsByTagName('head')[0].appendChild(estilos);
    document.getElementsByTagName('body')[0].appendChild(divPadre);
    document.getElementById('divPadre').appendChild(divLoader);
};

const endLoader = () => {
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
};