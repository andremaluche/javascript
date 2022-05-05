function verificar() {
    let ano = Number(window.prompt('Qual é o ano que você quer verificar?'))

    let res = window.document.querySelector('div#res')

    res.innerHTML = `<h2>Analisando o ano de ${ano}.</h2>`

    if(ano % 4 == 0) {
        res.innerHTML += `<p>O ano de ${ano} <span class="sbi">É BISSEXTO</span> &#x2714</p>`
    } else {
        res.innerHTML += `<p>O ano de ${ano} <span class="nbi">NÃO É BISSEXTO</span> &#x274C</p>`
    }   
    
}
