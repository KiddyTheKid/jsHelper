/**
 * @function arrayToJson convierte un javascriptArray a JSON object
 * @param {Array} arreglo recibe el arreglo Javascript obtenido 
 * de un Formulario por medio de serializeArray
 * 
 * @function arrayToJson convierte un javascriptArray a JSON String
 * util para realizar post
 * @param {Array} arreglo recibe el arreglo javascript obtenido de
 * un formulario por medio de serializeArray
 */

console.log('- Translator Added');

const arrayToJson = (arreglo) => {
    let fin = arreglo.length - 1;
    let jsonString = '{';
    arreglo.map((val, i) => {
        jsonString += '"' + val.name + '":"' + val.value + '"';
        if (i != fin){ jsonString += ', '; }
    });
    jsonString += '}';
    return JSON.parse(jsonString);
};

const arrayToJsonString = (arreglo) => {
    let jsonObject = arrayToJson(arreglo);
    return JSON.stringify(jsonObject);
};