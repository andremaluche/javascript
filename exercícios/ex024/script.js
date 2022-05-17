let res = window.document.querySelector('div#res')

function contar() {
    res.innerHTML += `<p>Contagem Regressiva de 10 a 1</p>`
    let cont = 10
    
    while (cont >= 1) {
        res.innerHTML += ` ${cont} &#x1F449;`
        cont --
    }
    res.innerHTML += ` &#x1F3C1;`
}