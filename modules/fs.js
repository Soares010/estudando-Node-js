const fs = require("fs");
const path = require("path");

// Criando uma pasta usando o mkdir do módulo fs e usando o path.join para juntar vários caminhos
// fs.mkdir(path.join(__dirname, "/test"), (error) => {
//   if (!error) {
//     return console.log("Ok deu certo!");
//   }
//   return console.log(error);
// });

// Criando um arquivo
fs.writeFile(
  path.join(__dirname, "/test", "teste.txt"),
  "ola node",
  (error) => {
    if (!error) {
      // Adicionando em um arquivo
      fs.appendFile(
        path.join(__dirname, "/test", "test.txt"),
        "ola node eu sou o Mário",
        (error) => {
          if (!error) {
            return console.log("ok deu certo!");
          }
          return console.log(error);
        }
      );
      // Lendo arquivos
      fs.readFile(
        path.join(__dirname, "/test", "test.txt"),
        "utf-8",
        (error, data) =>
          !error ? console.log("ok deu certo! " + data) : console.log(error)
      );
      return console.log("Ok deu certo!");
    }
    return console.log(error);
  }
);
