const { default: mongoose } = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/ong", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 10000,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error"));

db.once("open", function () {
  console.log("Estamos logados no mongodb");
});

const usersShema = new mongoose.Schema({
    email: String, 
    senha: String
})

const Users = mongoose.model('Alunos', usersShema)

Users.insertMany([
    {email: "senhapaia@gmail.com", senha: "123456",},
    {email: "vsf@gmail.com", senha: "123456",},
    {email: "tuégayman@gmail.com", senha: "123456",}
])

async function findUsers(){
    try{
        const usuarios = await Users.find({})
        console.log(usuarios)
    }
    catch{
        console.error("Usuarios não encontrados : ", error)
    }
}

findUsers();