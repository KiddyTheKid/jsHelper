/**
 * CONCENTRADOR DE DEPENDENCIAS
 */
console.log('Core Active');
var cScripts, rutaScript;

cScripts = document.getElementsByTagName('script');
Array.from(cScripts).forEach(function(script){
    if (script.src.indexOf('jsHelper') > -1) {
        var fileName = script.src.substr(script.src.lastIndexOf('/') + 1);
        rutaScript = script.src.replace(fileName, '');
    }
});

const jsFiles = [
    'ciValidators/ciValidator.js', 
    'domManager/jsCheckers.js', 
    'domManager/jsMessages.js', 
    'domManager/jsTableHelper.js',
    'domManager/jsPaginator.js',
    'domManager/jsLoader.js',
    'responseManager/jsTranslatorAPI.js'
];

jsFiles.forEach(function(scriptLocation){
    var scriptTag = document.createElement('script');
    scriptTag.src = rutaScript + scriptLocation;
    document.head.appendChild(scriptTag);
});

var jsStyle = document.createElement('link');
jsStyle.ref = "";
jsStyle.href = `${rutaScript}Styles/jshelper-style-file.css`;
document.head.appendChild(jsStyle);