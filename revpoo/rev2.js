const leia = require("prompt-sync")()

let num = 0
let i = 0
let total = 0
let maior = 0
do {
    total += num
    num = parseInt(leia("Digite um número: "))

    if(num > maior){
        maior = num
    }

    i++
} while (num > 0)
console.log(total)
console.log(maior)
console.log(i)


