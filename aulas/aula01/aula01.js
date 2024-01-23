//Importanto o modulo path nativo do node.
// O Require ele vem do commonJs, e como o nodeJs importa e exporta modulos("Arquivos")
var path = require('path');

var fileName = path.basename('/Users/samuelsilva/Documents/Cursos/Digital Colleger/Node/DigitalColleger---BackEnd/aulas/teste.js');

console.log('Nome do Arquivo: ' + fileName);

var folder = path.dirname('/Users/samuelsilva/Documents/Cursos/Digital Colleger/Node/DigitalColleger---BackEnd/aulas/teste.js');

console.log('Nome da pasta: ' + folder);

