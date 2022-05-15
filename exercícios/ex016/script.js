let res = window.document.querySelector('div#res')

function calcular() {
    let anonasc = Number(window.prompt("Em que ano você nasceu?"))
    let ano = new Date
    let anoatual = ano.getFullYear()
    let idade = anoatual - anonasc

    res.innerHTML = `<p>Quem nasceu em ${anonasc} vai completar <strong>${idade}</strong> anos em ${anoatual}.</p>`
}