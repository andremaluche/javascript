function verificar() {
    let precov = Number(window.prompt('Qual era o preço anterior do produto?'))

    let precon = Number(window.prompt('Qual é o preço atual do produto?'))

    let res = window.document.querySelector('div#res')

    if (precov < precon) {
        let caro = precon - precov

        let pcaro = (precon * 100) / precov - 100

        res.innerHTML = `<h2>Analisando os valores informados</h2>`

        res.innerHTML += `<p>O produto custava ${precov.toLocaleString('pt-br', {style:'currency', currency:'BRL'})} e agora custa ${precon.toLocaleString('pt-br', {style:'currency', currency:'BRL'})}.</p>`

        res.innerHTML += `<p>Hoje o produto está mais caro.</p>`

        res.innerHTML += `<p>O preço subiu ${caro.toLocaleString('pt-br', {style:'currency', currency:'BRL'})} em relação ao preço anterior.</p>`

        res.innerHTML += `<p>Uma variação de ${pcaro.toFixed(2)}% pra cima.</p>`

    } else {
        let barato = precov - precon
        
        let pbarato = (precov * 100) / precon - 100

        res.innerHTML = `<h2>Analisando os valores informados</h2>`

        res.innerHTML += `<p>O produto custava ${precov.toLocaleString('pt-br', {style:'currency', currency:'BRL'})} e agora custa ${precon.toLocaleString('pt-br', {style:'currency', currency:'BRL'})}.</p>`

        res.innerHTML += `<p>Hoje o produto está mais barato.</p>`

        res.innerHTML += `<p>O preço caiu ${barato.toLocaleString('pt-br', {style: 'currency', currency:'BRL'})} em relação ao preço anterior.</p>`

        res.innerHTML += `<p>Uma variação de ${pbarato.toFixed(2)}% pra baixo.</p>`
    }
}