const leia = require("prompt-sync")();
let MAT = ["A01", "A02", "A03", "A04"];
let aluno = ["JOAO", "CAIO", "LEO", "PEDRO"];
let nota = [0, 0, 0, 0];

console.log("MAT\tALUNO\tNOTA");
for (let i = 0; i < MAT.length; i++) {
    console.log(MAT[i] + "\t" + aluno[i] + "\t" + nota[i]);
}

console.log("Digitação de valores");
for (let i = 0; i < MAT.length; i++) {
    console.log(MAT[i] + "\t" + aluno[i]);
    nota[i] = leia("Digite o valor da nota: ");
}

console.log("MAT\tALUNO\tNOTA");
for (let i = 0; i < MAT.length; i++) {
    console.log(MAT[i] + "\t" + aluno[i] + "\t" + nota[i]);
}

console.log("ALTERAÇÃO DE DADOS");
let code = leia("Digite a matrícula do aluno que deseja trocar a nota: ");
for (let i = 0; i < MAT.length; i++) {
    if (code == MAT[i]) {
        console.log("Nome atual do aluno: " + aluno[i]);
        aluno[i] = leia("Digite o novo aluno: ");
    }
}

console.log("COD\tALUNO\tNOTA");
for (let i = 0; i < MAT.length; i++) {
    console.log(MAT[i] + "\t" + aluno[i] + "\t" + nota[i]);
}