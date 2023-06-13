const leia = require("prompt-sync")()

let num = parseInt(leia("Digite um número entre 5 e 9: "))

console.log(num)
while (num < 100){
    num *= 3
    console.log(num)
}