function contar() {
    let res = window.document.querySelector('div#res')
    let num = Number(window.document.querySelector('input[type=number]#fnum').value)
    //let num = Number(window.document.getElementById('fnum').value)
    res.innerHTML += `<h2>Contando de 0 até ${num}</h2>`
    let cont = 0
    while (cont <= num) {
        res.innerHTML += ` ${cont} &#x1F449;`
        cont ++
    }
    res.innerHTML += ` &#x1F3C1;`
}