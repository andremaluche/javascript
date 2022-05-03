let cota = Number(window.prompt('Antes de mais nada. Quanto está a cotação do dolar agora?'))

function converter() {
    let cart = Number(window.prompt('Quantos R$ você tem na carteira?'))

    let dol = (cart / cota)

    let res = window.document.querySelector('div#moeda')

    res.innerHTML = `<p>Com ${cart.toLocaleString('pt-br', {style:'currency', currency:'BRL'})} conseguirá comprar ${dol.toLocaleString('en',{style:'currency', currency:'USD'}).replace('.',',')}.</p>`
}