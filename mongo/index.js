const {
    default: mongoose
} = require("mongoose")

mongoose.connect('mongodb://127.0.0.1:27017/exemplo', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 10000
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'))

db.once('open', function () {
    console.log("Estamos logados no mongodb");
})

const pessoasSchema = new mongoose.Schema({
    nome : String,
    idade: Number,
    profissao : String
})

const Pessoa = mongoose.model('Pessoa', pessoasSchema)

const marcos = new Pessoa({
    nome: 'Marcos',
    idade: 5,
    profissao: 'Programador'
});

const arthur = new Pessoa({
    nome: "Arthur", 
    idade: 16, 
    profissao: "GÁy"
});

const pedro = new Pessoa({
    nome: "Minha putinha",
    profissao: "meu pato ruim feio tomou rolinho lindo kk",
    idade: 69
})

pedro.save()

// arthur.save()
// marcos.save()