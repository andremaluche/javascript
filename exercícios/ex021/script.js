let res = window.document.querySelector('div#res')

function contar() {
    res.innerHTML += `<h2>Contando de 1 até 10</h2>`
    let cont = 1
    while (cont <= 10) {
        res.innerHTML += ` ${cont} &#x1F449;`
        cont ++
    }
    res.innerHTML += ` &#x1F3C1;`
}