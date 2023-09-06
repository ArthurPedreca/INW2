const {
    default: mongoose
} = require("mongoose")

mongoose.connect('mongodb://127.0.0.1:27017/livros', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 10000
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'))

db.once('open', function () {
    console.log("Estamos logados no mongodb");
})

const livrosSchema = new mongoose.Schema({
    descricao : String,
    ano: Number,
    valor : Number,
    estoque: Number
})

const Livro = mongoose.model('Livros', livrosSchema)

const biblia = new Livro({
    descricao: "Bíblia pode ser definida como livro sagrado que é a Palavra de Deus escrita por diferentes autores mediante revelação do Espírito Santo",
    ano: 1456,
    valor: 100,
    estoque: 500
})
const homemdeGiz = new Livro({
    descricao: "O Homem de Giz",
    ano: 2018,
    valor: 38.9,
    estoque: 260
})

homemdeGiz.save()
biblia.save()