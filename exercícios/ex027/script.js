function tabuada() {
    let res = window.document.querySelector('div#res')
    let num = Number(window.document.querySelector('input[type=number]#fnum').value)

    res.innerHTML = `<h2>Tabuada de ${num}</h2>`
    let c = 1
    while (c <= 10) {
        res.innerHTML += `${num} x ${c} = <strong>${num * c}</strong><br>`
        c ++
    }
}