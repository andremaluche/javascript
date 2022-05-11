let res = window.document.querySelector('div#res')

function parimpar() {
    let num = Number(window.prompt('Digite um número:'))
    
    if (num % 2 == 0) {
        res.innerHTML = `<p>O número ${num} que foi digitado é <strong>PAR!</strong></p>`
    } else {
        res.innerHTML = `<p>O número ${num} que foi digitado é <strong>IMPAR!</strong></p>`
    }
}