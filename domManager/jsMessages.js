/**
 * @function showWarning Muestra advertencias
 * @param {String} texto aqui pasa el texto para la advertencia
 * 
 * @function showSuccess Muestra exito
 * @param {String} texto texto para el aviso
 * 
 * @function showError Muestra Error
 * @param {String} texto texto para el aviso
 *   
 */

console.log('- Messages Added');
const jsMessages = {
    showWarning: function(texto){
        const Message = `<div class="alert alert-warning" role="alert">${texto}</div>`;
        return Message;
    },
    showSuccess: function(texto){
        const Message = `<div class="alert alert-success" role="alert">${texto}</div>`;
        return Message;
    },
    showError: function(texto){
        const Message = `<div class="alert alert-danger" role="alert">${texto}</div>`;
        return Message;
    }
}