// criar a promise dentro de uma função

function falarDepoisDe(segundos, frase){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(frase);
        }, segundos * 1000);
    });
}

//chamada da função

falarDepoisDe(4, "Teste de promises no 2mib")
.then(frase => frase.concat(' vai tomar no cu bagulho chato do caralho'))
.then(outraFrase => console.log(outraFrase))