function calcular() {
    let prod = window.prompt("Qual é o produto que você está comprando?")

    let preco = Number(window.prompt(`Qual é o preço de ${prod}?`))

    let res = window.document.querySelector('div#conteudo')

    let porc = (preco / 100) * 10

    let precof = preco - porc

    res.innerHTML = `<h2>Calculando desconto de 10% para ${prod}.</h2>`

    res.innerHTML += `<p>O preço original era ${preco.toLocaleString('pt-br', {style:'currency', currency:'BRL'})}</p>`

    res.innerHTML += `<p>Você acaba de ganhar ${porc.toLocaleString('pt-br', {style:'currency', currency:'BRL'})} de desconto (-10%).</p>`

    res.innerHTML += `<p>No fim, você vai pagar ${precof.toLocaleString('pt-br', {style:'currency', currency:'BRL'})} no produto ${prod}</p>`
}