const fs = require('fs');
const { buffer } = require('stream/consumers');
const moduloArquivo = require('./exercicio01');

moduloArquivo.lerArquivo('texto.txt')

moduloArquivo.escreverArquivo('texto.txt', 'Ó Segundo Conteudo: ' )
