const prompt = require("prompt-sync")();

const id = [
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
const servico = [
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

const valorDoacao = [10.0, 20.0, 25.5, 50.0, 30.0, 40.0, 15.0, 35.0, 45.0, 5.0];
const mov = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

const carrinho = [];

function mostrarServicos() {
  console.log("Serviços disponíveis:");
  for (let i = 0; i < id.length; i++) {
    console.log(`${id[i]} \t ${servico[i]} \t R$${valorDoacao[i].toFixed(2)}`);
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
      `${codigo} \t ${
        servico[indice]
      } \nQuantidade: ${quantidade} \nValor total: R$${valorTotalItem.toFixed(
        2
      )}`
    );
    totalDoacao += valorTotalItem;
  }

  console.log(`Valor total de doação: R$${totalDoacao.toFixed(2)}`);
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
      carrinho.push({ codigo, quantidade: 1 });
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
