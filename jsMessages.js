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

const showWarning = (texto) => {
    const Message = '<div class="alert alert-warning" role="alert">' + texto + '</div>';
    return Message;
};

const showSuccess = (texto) => {
    const Message = '<div class="alert alert-success" role="alert">' + texto + '</div>';
    return Message;
};

const showError = (texto) => {
    const Message = '<div class="alert alert-danger" role="alert">' + texto + '</div>';
};