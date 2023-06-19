const leia = require("prompt-sync")()

const aluno = [];
const nota = [];

for (let i = 1; i < 4; i++) {
    aluno[i] =  leia(`Digite o nome do ${i}° aluno: `)
    nota[i] =  parseInt(leia(`Digite o nota do ${i}° aluno: `))

    if(nota[i] > 5){
        console.log("aprovado")
    } else {
        console.log('reprovado')
    }
}





