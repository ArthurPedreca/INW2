const { default: mongoose } = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/agenda", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 10000,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error"));

db.once("open", function () {
  console.log("Estamos logados no mongodb");
});

const AgendaSchema = mongoose.Schema({
    id: Number,
    nome: String, 
    idade: Number, 
    email: String
})

const Agenda = mongoose.model('Agenda', AgendaSchema)

const AgendaBurro = new Agenda({
    id: 1,
    nome: "Epaminondas",
    idade: 17,
    email: 'epa@gmail.com'
})
AgendaBurro.save()

const AgendaBurroMtolouco = new Agenda({
    id: 2,
    nome: "Carla",
    idade: 17,
    email: 'carla@gmail.com'
})
AgendaBurroMtolouco.save()