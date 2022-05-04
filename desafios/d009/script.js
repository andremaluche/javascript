function calcular() {
    let nome = window.prompt('Qual é o nome do funcionário?')

    let salini = Number(window.prompt(`Qual é o salário de ${nome}?`))

    let porc = Number(window.prompt(`O salário de ${nome} vai ser reajustado em qual porcentagem?`))

    let res = window.document.querySelector('div#res')

    let aumento = (salini / 100) * porc

    let salfin = salini + aumento

    res.innerHTML = `<h2>${nome} recebeu um aumento salarial!</h2>`

    res.innerHTML += `<p class="texto">O salário atual era ${salini.toLocaleString('pt-br', {style:'currency', currency:'BRL'})}.</p>`

    res.innerHTML += `<p class="texto">Com um aumento de ${porc}%, o salário vai aumentar ${aumento.toLocaleString('pt-br', {style:'currency', currency:'BRL'})} no próximo mês.</p>`

    res.innerHTML += `<p class="texto">E a partir daí, ${nome} vai passar a ganhar ${salfin.toLocaleString('pt-br', {style:'currency', currency:'BRL'})}.</p>`
}