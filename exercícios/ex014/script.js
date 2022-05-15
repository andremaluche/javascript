let res = window.document.querySelector('div#res')

function funcao() {
    let sistema = new Date
    res.innerHTML = `<p>O que eu recebi do sistema foi <mark>${sistema}</mark>.</p>`
}