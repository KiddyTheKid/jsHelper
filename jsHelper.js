let jsFiles = [
    'ciValidator-EC.js', 
    'jsCheckers.js', 
    'jsMessages.js', 
    'jsTableHelper.js', 
    'jsTranslatorAPI.js'
];

let imported = document.createElement('script');
jsFiles.map((file, i) => {
    imported.src = file;
    document.head.appendChild(imported);
});