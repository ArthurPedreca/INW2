const produtos = ['camisa', 'calça ', 'saia   ', 'short ']
const codigo = ['P01', 'P02', 'P03', 'P04']
const preco = [0,0,0,0]

console.log(`CODIGO\t PRODUTO\t PREÇO`)
for (let i = 0; i < produtos.length; i++) {
    console.log(`${codigo[i]}\t ${produtos[i]} \t ${preco[i]} `)
}

console.log("Digitição dos valores")
for (let i = 0; i < codigo.length; i++) {
    console.log(`${codigo[1]} \t ${produtos[i]}`)
}