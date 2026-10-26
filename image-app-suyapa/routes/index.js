var express = require('express');
var router = express.Router();
var path = require('path');

// Ruta para servir el archivo index.html
router.get('/', function(req, res, next) {
 res.sendFile(path.join(__dirname, '../public', 'index.html'));
 
});

//Ruta para habilitar API

module.exports = router;