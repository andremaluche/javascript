function converter() {
    let num = Number(window.prompt('Digite uma temperatura em °C (Celsius).'))

    let res = window.document.querySelector('div#temp')

    res.innerHTML = `<h2>A temperatura de ${num.toFixed(1).replace('.',',')}°C, corresponde a...</h2>`

    res.innerHTML += `<p class="texto">${(num + 273.15).toFixed(2).replace('.',',')}°K (Kelvin).</p>`

    res.innerHTML += `<p class="texto">${(num * 1.8 +32).toFixed(2).replace('.',',')}°F (Fahrenheit)</p>`
}