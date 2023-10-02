const { default: mongoose } = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/escola", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 10000,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error"));

db.once("open", function () {
  console.log("Estamos logados no mongodb");
});

const alunosSchema = new mongoose.Schema({
    nome: String, 
    idade: Number, 
    turma: String
})

const Alunos = mongoose.model('Alunos', alunosSchema)

Alunos.insertMany([
    {nome: "Paulo", idade: "16", turma: "2MIB"},
    {nome: "Maria", idade: "16", turma: "2MIB"},
    {nome: "Marcos", idade: "17", turma: "2MIA"}
])

async function findAlunos(){
    try{
        const alunos = await Alunos.find({turma: "2MIB"})
        console.log(alunos)
    }
    catch{
        console.error("Alunos não encontrador : ", error)
    }
}

findAlunos();

