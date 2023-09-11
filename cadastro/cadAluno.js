const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/escola', 
    {
        useNewUrlParser : true, 
        useUnifiedTopology : true,
        serverSelectionTimeoutMS: 20000
    }

);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error : '))
db.once('open', function(){
    console.log("Estamos conectados!")
})
// 1 - Criando um Schema
const alunoSchema = new mongoose.Schema({
    matricula :  String, 
    nome :  String, 
    idade : Number, 
    turma : String 
})

//2 - criando a model 
const Alunos = mongoose.model("Alunos", alunoSchema)


//colocar dados dentro desta collection - C do CRUD 

const carlos = new Alunos({
    matricula : 'rem510',
    nome :  'Carlos Silva', 
    idade : 18,
    turma : '2MIB'
});
carlos.save();

const maria = new Alunos({
    matricula : 'rm409',
    nome :  'Maria José', 
    idade : 17,
    turma : '2MIB'
});
maria.save();
