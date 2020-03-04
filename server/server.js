const express = require('express');
const socketIO = require('socket.io');
const http = require('http');
const path = require('path');

const app = express();
let server = http.createServer(app);

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

// IO = exta es la comunicación del backend
let io = socketIO(server);

io.on('connection', (client) => {

    console.log('Usuario conectado');

    //
    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicación'
    });

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    // Escuchar el cliente
    client.on('enviarMensaje', (mensaje, callback) => {
        console.log(mensaje);

        if ( mensaje.usuario ) {
            callback({
                resp: 'TODO SALIO BIEN!'
            });
        } else {
            callback({
                resp: 'TODO SALIO MAL!!!!'
            });
        }


    });

});

server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});
