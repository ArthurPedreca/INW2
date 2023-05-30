class Padaria {
    constructor(id, descricao, ativo, estoque, preco, peso, tipo) {
        this.id = id;
        this.descricao = descricao;
        this.ativo = ativo;
        this.estoque = estoque;
        this.preco = preco;
        this.peso = peso;
        this.tipo = tipo;
    }

    ativar() {
        this.ativo = true
    }

    incluirEstoque(valor) {
        if (this.ativo) {
            if (valor <= 10) {
                if (valor < 0) {
                    console.log("Impossivel realizar, valor negativo")
                }
                else if (valor == 0) {
                    console.log("Impossivel realizar, valor zerado...")
                }
                else {
                    this.estoque += valor
                }
            }
            else {
                console.log("Estoque cheio")
            }
        }
        else{
            console.log("Conta inativa")
        }

    }

    retirarEstoque(valor) {
        if (this.ativo) {
            if (valor < 0) {
                console.log("estoque insuficiente...")
            }
            else if (valor == 0) {
                console.log("estoque zerado...")
            }
            else if (valor > this.estoque) {
                console.log("estoque Insuficiente...")
            }
            else {
                this.estoque -= valor
            }
        }
        else {
            console.log('Conta inativa...')
        }

    }
}


//programa principal 
const leia = require("prompt-sync")();
let id = parseInt(leia("Digite o id do produto: "))
let descricao = (leia("Digite o descricao do produto: "))
let preco = parseInt(leia("Digite o preco do produto: "))
let peso = parseInt(leia("Digite o peso do produto: "))
let tipo = parseInt(leia("Digite o tipo do produto: "))

let pão = new Padaria(id, descricao, false, 10, preco, peso, tipo)
pão.ativar();
for (let i = 0; i < 5; i++) {
    console.log(`Movimento ${i + 1}`)
    valor = parseInt(leia("Digite quantos você quer retirar do estoque : "))
    pão.retirarEstoque(valor)
    console.log("Quantidade no estoque : " + pão.estoque)
}
    valor = parseInt(leia("Digite quantos você quer adicionar no estoque : "))
    pão.incluirEstoque(valor)
    console.log("Quantidade no estoque : " + pão.estoque)




