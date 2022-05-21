function contar() {
    let res = window.document.querySelector('div#res')
    let inicial = Number(window.document.getElementById('fini').value)
    let final = Number(window.document.querySelector('input[type=number]#ffin').value)
    let cont

    res.innerHTML += `<h2>Contando de ${inicial} até ${final}</h2>`
    
    if (inicial < final) {
        cont = inicial
        while (cont <= final) {
            res.innerHTML += ` ${cont} &#x1F449;`
            cont ++
        }
    } else if (inicial > final) {
        cont = inicial
        while (cont > final) {
            res.innerHTML += ` ${cont} &#x1F449;`
            cont --
        }
    } else {
        res.innerHTML += `Não é possível contar, pois os números são iguais.`
    }
    res.innerHTML += ` &#x1F3C1;`
}