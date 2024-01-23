const fs = require('fs');

const lerArquivo = (pathArquivo) => {

    //Lendo o conteudo do arquivo, se nao for informado o encodig(utf8) será informado em formato do buuffer.
     fs.readFile(pathArquivo, 'utf8', (err, data) => {

        if(err) {
            console.log('Erro ao ler o Arquivo');
            return;
        }
        
        console.log('Conteudo: ', data);
    })
}

const escreverArquivo = (pathArquivo, conteudo) =>{

    fs.writeFile(pathArquivo, conteudo, 'utf8', (err) => {

        if(err) {
            console.log('Erro ao Escrever no Arquivo.', err);
        }
    
        console.log('Conteudo Inserido.');
    })
}

module.exports = {lerArquivo, escreverArquivo};