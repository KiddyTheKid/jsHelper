/**
 * CONCENTRADOR DE DEPENDENCIAS
 */
console.log('Core Active');

let cScripts = document.getElementsByTagName('script');
cScripts = [...cScripts];
let ruta;
cScripts.map((script, i) => {
    if(script.src.indexOf('jsHelper') > -1){
        let filename = script.src.substr(script.src.lastIndexOf('/') +1);
        ruta = script.src.replace(filename, '');
    }
});

let jsFiles = [
    'ciValidators/ciValidator-EC.js', 
    'domManager/jsCheckers.js', 
    'domManager/jsMessages.js', 
    'domManager/jsTableHelper.js',
    'domManager/jsPaginator.js',
    'responseManager/jsTranslatorAPI.js'
];
jsFiles.map((file, i) => {
    let imported = document.createElement('script');
    imported.src = ruta + file;
    document.head.appendChild(imported);
});