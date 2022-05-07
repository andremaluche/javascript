function inicio() {
    let nome = window.prompt("Qual é o nome do aluno?")

    let nota1 = Number(window.prompt(`Primeira nota de ${nome}:`))

    let nota2 = Number(window.prompt(`Segunda nota de ${nome}:`))

    let res = window.document.querySelector('div#res')

    let media = Number((nota1 + nota2) / 2)

    res.innerHTML = `<h2>Analisando a situação de ${nome}</h2>`

    res.innerHTML += `<p>Com as notas ${nota1.toLocaleString({style:'decimal'})} e ${nota2.toLocaleString({style:'decimal'})} a <strong>média é ${media.toLocaleString({style:'decimal'})}</strong>.</p>`

    if (media < 3) {
        res.innerHTML += `<p>Com média abaixo de 3,0, o aluno está <span class="reprovado">REPROVADO</span>.</p>`
    } else if (media >=3 && media <=6) {
        res.innerHTML += `<p>Com média entre 3,0 e 6,0, o aluno está em <span class="recuperacao">RECUPERAÇÃO</span>.</p>`
    } else {
        res.innerHTML += `<p>Com média acima de 6,0 o aluno está <span class="aprovado">APROVADO</span>.</p>`
    }
}