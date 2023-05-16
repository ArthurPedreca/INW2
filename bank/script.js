
class Conta {
    constructor(numero, cpf, saldo, ativo) {
        this.numero = numero;
        this.cpf = cpf;
        this.saldo = saldo;
        this.ativo = ativo
    }

    ativar() {
        this.ativo = true
    }
    credito(valor) {
        if (this.ativo) {
            if (valor < 0) {
                console.log("Impossivel realizar, valor zerado")
            }
        }
        else {
            this.saldo += valor
            console.log("Conta inativa...")
        }
    }
    debito(valor) {
        if (this.ativo) {
            if (valor < 0) {
                console.log("valor insuficiente...")
            }
            else if (valor == 0) {
                console.log("Valor zerado...")
            }
            else if (valor > this.saldo) {
                console.log("Saldo Insuficiente...")
            }
            else {
                this.saldo -= valor
            }
        }
        else {
            console.log('Conta inativa...')
        }

    }
}

class Poupanca extends Conta {
    constructor(diaAniversarioPoupanca) {
        this.diaAniversarioPoupanca = diaAniversarioPoupanca
    }
}

class Corrente extends Conta {
    constructor(contadorTalao) {
        this.contadorTalao = contadorTalao
    }
}
class Especial extends Conta {
    constructor(limite) {
        this.limite = limite
    }
}
class Empresa extends Conta {
    constructor(emprestimoEmpresa) {
        this.emprestimoEmpresa = emprestimoEmpresa
    }
}
class Estudantil extends Conta {
    constructor(limiteEstudantil) {
        this.limiteEstudantil = limiteEstudantil
    }
}


//Programa Principal 
const leia = require("prompt-sync")();
let numero = parseInt(leia("Digite o numero da conta: "))
let cpf = leia("Digite o cpf da conta :")
let c1 = new Conta(numero, cpf, 0, false)
let op = ""
let valor = 0
c1.ativar()
for (let i = 0; i < 10; i++) {
    console.log(`Movimento ${i + 1}`)
    op = leia("Digite D para debito ou C para credito : ")
    if (op == "D") {
        valor = parseInt(leia("Digite o valor para debito : "))
        c1.debito(valor)
    }

    else if (op == "C") {
        valor = parseInt(leia("Digite o valor para credito : "))
        c1.credito(valor)
    }
    console.log("Saldo atual conta : " + c1.saldo)
}

console.log("Saldo Final da conta : " + c1.saldo)
