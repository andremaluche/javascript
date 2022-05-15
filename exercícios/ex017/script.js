let res = window.document.querySelector('div#res')

function gerar() {
    let min = 1
    let max = 100
    let dif = max - min
    let aleatorio = Math.random()
    let num = min + Math.trunc(dif * aleatorio)

    res.innerHTML += `<p>Acabei de pensar no número <mark>${num}</mark>!</p>`
}

function limpar() {
    res.innerHTML = `<p></p>`
}