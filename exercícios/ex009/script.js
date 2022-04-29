let num = Number(0)
let res = document.querySelector('div#resultado')

function contar() {
    num ++ // ou num = num + 1
    res.innerHTML = `<p>O contador está em <mark>${num}</mark> cliques.</p>`
}

function zerar () {
    num = 0
    res.innerHTML = `<p>O contador está em <mark>${num}</mark> cliques.</p> `
}