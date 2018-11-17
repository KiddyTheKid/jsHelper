console.log('- Translator Added');
/**
 * @function arrayToJson
 * Convierte un Array a un objeto del tipo JSON
 * @param {Array} arrayData Arreglo Javascript 
 * @returns {JSON} Objeto Json
 * 
 * @function arrayToJsonString
 * Convierte un arreglo en un String Json
 * @param {Array} arrayData Arreglo de Javascript
 * @returns {String} Texto de formato JSONs
 */

const jsTranslator = {
    arrayToJson: function (arrayData){
        var endOfArray = arrayData.length - 1;
        var jsonString = '{';
        arrayData.forEach(function(data, i){
            jsonString += `"${data.name}":"${data.value}"`;
            if (i != endOfArray){
                jsonString += ",";
            }
        });
        jsonString += '}';
        return JSON.parse(jsonString);
    },
    arrayToJsonString: function (arrayData){
        var jsonObject = arrayToJson(arrayData);
        return JSON.stringify(jsonObject);
    }
}