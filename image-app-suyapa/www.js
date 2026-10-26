

/**
 * Modulo que se encarga de levantar el servidor
 */
var dotenv = require('dotenv');
dotenv.config();
console.log('SERVER: ' + process.env.PROYECT_NAME);

var app = require('./app');
var debug = require('debug')('stvetelebasica:server');
var http = require('http');

/**
 * Normaliza un puerto en un número, cadena o falso.
 */

function normalizePort(val) {
    var port = parseInt(val, 10);
    if (isNaN(port)) {
        return val;
    }
    if (port >= 0) {
        return port;
    }
    return false;
}

/**
 * Obtiene el puerto del entorno y lo convierte en un número, string o falso.
 */

var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

/**
 * crea un servidor HTTP.
 */

var server = http.createServer(app);

/**
 * Escucha en el puerto proporcionado, en todas las interfaces de red.
 */

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);


/**
 * Evento listener para el evento "error" del servidor HTTP.
 */

function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    var bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;

    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

/**
 * Evento listener para el evento "listening" del servidor HTTP.
 */
const package = require('./package.json');

function onListening() {
    console.info("Version: " + package.version);
    console.info("Server started successfully");
    var addr = server.address();
    var bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    debug('Listening on ' + bind);

}