function fatorial() {
    let res = window.document.querySelector('div#res')
    let num = Number(window.document.querySelector('input[type=number]#ffat').value)

    res.innerHTML += `<h2>Calculando ${num}!</h2>`
    let fator = 1
    while (num >= 1) {
        res.innerHTML += ` ${num} x`
        fator = fator * num
        num --
    }
    res.innerHTML += ` = <strong>${fator.toLocaleString('pt-BR')}</strong>`
}