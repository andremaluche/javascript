let res = window.document.querySelector('div#res')

function verificar() {
    let mes = window.prompt('Digite o mês em extenso (ex: Setembro)')
    let estacao
    switch (mes.toUpperCase()) {
        case 'JUNHO': case 'JULHO' : case 'AGOSTO':
            estacao = 'INVERNO'            
            break
        case 'SETEMBRO' : case 'OUTUBRO' : case 'NOVEMBRO':
            estacao = 'PRIMAVERA'
            break
        case 'DEZEMBRO' : case 'JANEIRO': case 'FEVEREIRO':
            estacao = 'VERÃO'
            break
        case 'MARÇO': case 'ABRIL': case 'MAIO':
            estacao = 'OUTONO'
            break
        default:
            estacao = 'INDEFINIDA'
            break
    }
    res.innerHTML = `<p>No mês de <mark>${mes}</mark>, estamos na estação <mark><strong>${estacao}<strong></mark>.</p>`
}