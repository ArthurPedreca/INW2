const prompt = require("prompt-sync")();

let id = [
  "COD1",
  "COD2",
  "COD3",
  "COD4",
  "COD5",
  "COD6",
  "COD7",
  "COD8",
  "COD9",
  "COD10",
];
let servico = [
  "AULAS DE PREVENÇÃO AO BULLYING                 ",
  "APOIO PSICOLÓGICO PARA CRIANÇAS                ",
  "PROGRAMA DE PREVENÇÃO AO ABUSO INFANTIL        ",
  "ACOMPANHAMENTO EDUCACIONAL                     ",
  "CURSOS DE SEGURANÇA ONLINE PARA PAIS           ",
  "ATIVIDADES CULTURAIS PARA CRIANÇAS             ",
  "PROGRAMA DE ALIMENTAÇÃO SAUDÁVEL INFANTIL      ",
  "APOIO A FAMÍLIAS EM SITUAÇÃO DE VULNERABILIDADE",
  "ENCONTROS DE CONSCIENTIZAÇÃO INFANTIL          ",
  "ATIVIDADES ESPORTIVAS E RECREATIVAS            ",
];

let valorDoacao = [10.0, 20.0, 25.5, 50.0, 30.0, 40.0, 15.0, 35.0, 45.0, 5.0];
let mov = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

let opcaoMenuPrincipal = ""
let opcaoSubMenu = ""
let auxCod = ""
let posicao = -1


while (opcaoMenuPrincipal != "2") {
  console.log("LOJA XXX\n\n")
  console.log("MENU PRINCIPAL")
  console.log("1 - Opções")
  console.log("2 - Sair")
  opcaoMenuPrincipal = prompt("Digite o numero da sua opção : ")
  if (opcaoMenuPrincipal == "1") {
    opcaoSubMenu = ""
    //SUB-MENU REFERENTE AS OPÇÕES
    while (opcaoSubMenu != "6") {
      console.log("SUB-MENU")
      console.log("1 - MOSTRAR OS REGISTROS")
      console.log("2 - ALTERAR OS REGISTROS")
      console.log("3 - CADASTRAR OS REGISTROS")
      console.log("4 - EXCLUIR UM REGISTRO")
      console.log("5 - CARRINHO DE COMPRAS")
      console.log("6 - SAIR")
      opcaoSubMenu = prompt("Digite o numero da sua opção : ")


      if (opcaoSubMenu == "1") {
        console.log("CÓDIGOS\t DESCRICAO\t                                         VALOR")
        for (let x = 0; x < id.length; x++) {
          console.log(`${id[x]} \t ${servico[x]} \t R$${valorDoacao[x]}`)
        }
      } 
      
      
      else if (opcaoSubMenu == "2") {
        auxCod = prompt("Digite o codigo do produto que deseja alterar : ").toUpperCase()
        for (let x = 0; x < id.length; x++) {
          if (auxCod == id[x]) {''
            posicao = x
          }
        }
        if (posicao == -1) {
          console.log("Produto não encontrado...")
        } else {
          id[posicao] = prompt("Digite o novo codigo : ")
          servico[posicao] = prompt("Digite a nova descrição: ");
          valorDoacao[posicao] = parseFloat(prompt("Digite o novo preço: "));

        }
      }

      else if(opcaoSubMenu == "3"){
        id.push(prompt("digite o código do novo serviço"))
        servico.push(prompt("digite o nome do novo serviço"))
        valorDoacao.push(prompt("digite o valor do novo serviço"))
      }

      else if(opcaoSubMenu == "4"){
        let produtoRemovido = prompt("Digite o código do produto que quer remover")
        removerItem(produtoRemovido)
      }

      else if(opcaoSubMenu == "5"){
        mostrarCarrinho()
      }


    }


  }
}

1

const carrinho = [];

function mostrarServicos() {
  console.log("Serviços disponíveis:");
  for (let i = 0; i < id.length; i++) {
    console.log(`${id[i]} \t ${servico[i]} \t R$${valorDoacao[i]}`);
  }
}

function removerItem(item) {
  const i = id.indexOf(item);
  
  if (i !== -1) {
    id.splice(i, 1);
    servico.splice(i, 1);
    valorDoacao.splice(i, 1);
    mov.splice(i, 1);
    console.log(`Item com ID ${item} foi removido.`);
  } else {
    console.log(`Item com ID ${item} não encontrado.`);
  }
}

function mostrarCarrinho() {
  console.log("Carrinho de compras:");
  let totalDoacao = 0;
  for (let i = 0; i < carrinho.length; i++) {
    const item = carrinho[i];
    const codigo = item.codigo;
    const quantidade = item.quantidade;
    const indice = id.indexOf(codigo);
    const valorUnitario = valorDoacao[indice];
    const valorTotalItem = valorUnitario * quantidade;
    console.log(
      `${codigo} \t${servico[indice]} \nQuantidade: ${quantidade} \nValor total: R$${valorTotalItem}`);
    totalDoacao += valorTotalItem;
  }

  console.log(`Valor total de doação: R$${totalDoacao}`);
}

function continuar() {
  do {
    const continuarPergunta = prompt("Você deseja fazer mais doações? (S/N) ");
    if (continuarPergunta.toUpperCase() === "S") {
      mostrarServicos();
      solicitarServico();
    } else {
      break;
    }
  } while (true);
}


function solicitarServico() {
  const codigo = prompt("Informe o código do serviço desejado: ");
  const indice = id.indexOf(codigo);
  if (indice !== -1) {
    if (carrinho.length >= 10) {
      console.log("Carrinho de compras cheio. Finalize a doação.");
    } else {
      carrinho.push({
        codigo,
        quantidade: 1
      });
      mov[indice]++;
      console.log("Serviço adicionado ao carrinho.");
    }
  } else {
    console.log("Código de serviço inválido.");
  }
  mostrarCarrinho();
}

mostrarServicos();
solicitarServico();
continuar();