var socket = io();

// escuchar
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

// escuchar
socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');
});

// Enviar información
socket.emit('enviarMensaje', {
    usuario: 'José Carlos',
    mensaje: 'Hola Mundo!'
}, function( resp ) {
    console.log('Respuesta server: ', resp );
});

// Escuchar información
socket.on('enviarMensaje', function(mensaje){
    console.log('Servidor: ', mensaje);
});
