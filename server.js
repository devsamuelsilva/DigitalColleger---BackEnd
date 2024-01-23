const http = require("node:http"); //Importa o modulo HTTP
const hostname = "127.0.0.1"; //Configura o IP
const port = 3000; //Configura a porta

//Utiliza o modulo HTTP e chama a funcao creatServer
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World\n oi eu sou o Goku\n teste\n o Mais Lindo");
});

//Instacia do creatServe e chama o metodo listen () que sobe o servidor em uma ip e porta.
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
