const url = 'http://localhost:3000/produtos'
fetch(url)
    .then((req) => req.json())
    .then((data) => mostraProdutos(data));

function mostraProdutos(produtos) {
    const htmlProdutos = produtos.map(
        (produto) => `
<div class="d-flex justify-content-between">
 <div class="card" style="width: 18rem;">
    <img src=${produto.imagem} alt="imagem 1">
        <div class="card-body">
            <h5 class="card-title">${produto.descricao}</h5>
            <p class="card-text">Preço: R$${produto.valor}</p>
        </div>
</div>`
    );
    document.getElementById('app').innerHTML = htmlProdutos;
}
