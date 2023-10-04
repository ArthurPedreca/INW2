const http = require('http');
const url = require('url');
const fs = require('fs');
const mongoose = require('mongoose');

// Conectar-se ao banco de dados MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/cadastro', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Erro na conexão com o MongoDB'));

db.once('open', function () {
  console.log('Conectado ao MongoDB');
});

const usuarioSchema = new mongoose.Schema({
  nome: String,
  email: String,
  celular: String,
  endereco: String,
  complemento: String,
  numero: String,
  bairro: String,
  cidade: String,
  estado: String,
});

const Usuario = mongoose.model('Usuario', usuarioSchema);

const server = http.createServer((req, res) => {
  const reqUrl = url.parse(req.url, true);
  const pathname = reqUrl.pathname;

  if (pathname === '/') {
    if (req.method === 'GET') {
      // Rota para a página HTML do formulário
      fs.readFile('index2.html', (err, data) => {
        if (err) {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Erro interno no servidor.');
        } else {
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(data);
        }
      });
    } else if (req.method === 'POST') {
      // Rota para lidar com o envio do formulário
      let formData = '';

      req.on('data', (chunk) => {
        formData += chunk;
      });

      req.on('end', () => {
        const parsedData = new URLSearchParams(formData);

        const novoUsuario = new Usuario({
          nome: parsedData.get('nome'),
          email: parsedData.get('email'),
          celular: parsedData.get('celular'),
          endereco: parsedData.get('endereco'),
          complemento: parsedData.get('complemento'),
          numero: parsedData.get('numero'),
          bairro: parsedData.get('bairro'),
          cidade: parsedData.get('cidade'),
          estado: parsedData.get('estado'),
        });

        novoUsuario
          .save()
          .then(() => {
            console.log('Usuário salvo com sucesso no banco de dados.');
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('Usuário salvo com sucesso.');
          })
          .catch((err) => {
            console.error('Erro ao salvar o usuário:', err);
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Erro ao salvar o usuário.');
          });
      });
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Página não encontrada.');
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Servidor está rodando em http://localhost:${port}/`);
});