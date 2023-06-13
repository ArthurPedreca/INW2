const leia = require("prompt-sync")();

let nomeAluno = ['', '', '', '']
let nota = [0, 0, 0, 0]

for(let x = 0; x < nomeAluno.length; x++) {
    console.log(nomeAluno[x])
    nomeAluno[x] = leia("Digite o nome do aluno: ")
    nota[x] = parseInt(leia("Digite quantos pontos o aluno tem: "))
}

console.log("Boletim")
console.log("Aluno\tNotas\tAprovado?")
for(let i = 0; i < nomeAluno.length; i++) {
    if(nota[i] >= 5){
        console.log(nomeAluno[i]+'\t'+nota[i]+'\tS')
    }
    else {
        console.log(nomeAluno[i]+'\t'+nota[i]+'\tN')
    }
}
