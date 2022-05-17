let res = window.document.querySelector('div#res')

function contar() {
    let cont = 2
    res.innerHTML += `<h2>Números pares de 1 a 10.</h2>`
    while (cont <= 10) {
        res.innerHTML += ` ${cont} &#x1F449;`
        cont += 2
        }
    res.innerHTML += ` &#x1F3C1;`
}

/*

//Como tinha montado:

function contar() {
    let cont = 1
    res.innerHTML += `<h2>Números pares de 1 a 10.</h2>`
    while (cont <= 10) {
        if (cont % 2 ==0) {
        res.innerHTML += ` ${cont} &#x1F449;`
        }
        cont ++
    }
    res.innerHTML += ` &#x1F3C1;`
}

*/