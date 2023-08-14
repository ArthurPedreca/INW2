const prompt = require('prompt-sync')();

const id = ["COD01", "COD02", "COD03", "COD04", "COD05", "COD06", "COD07", "COD08", "COD09", "COD10"];
const servico = [
  "ENTREGA DE CACHORRO DOADO",
  "BUSCA DE GATO PERDIDO",
  "BUSCA DE CACHORRO PERDIDO",
  "TRATAMENTO VETERINÁRIO",
  "ADOÇÃO RESPONSÁVEL",
  "CONSULTA COMPORTAMENTAL",
  "PET SITTER",
  "ADESTRAMENTO",
  "BANHO E TOSA",
  "VOLUNTARIADO"
];
const valorDoacao = [10.00, 20.00, 25.50, 50.00, 30.00, 40.00, 15.00, 35.00, 45.00, 5.00];
const mov = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

const carrinho = [];

function mostrarServicos() {
  console.log("Serviços disponíveis:");
  for (let i = 0; i < id.length; i++) {
    console.log(
      `${id[i]} - ${servico[i]} (Valor: R$${valorDoacao[i].toFixed(2)})`
    );
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
      `${codigo} - ${SERVICO[indice]} (Quantidade: ${quantidade}, Valor total: R$${valorTotalItem.toFixed(2)})`
    );
    totalDoacao += valorTotalItem;
  }
  
  console.log(`Valor total de doação: R$${totalDoacao.toFixed(2)}`);
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