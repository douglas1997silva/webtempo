const key = 'c0a9f39e02e7173a122e01aa36e06f96'

var campo = document.querySelector('#input-pesquisa');
var lupa = document.querySelector('.lupa');

console.log(campo)
lupa.addEventListener('click',function() {
    var cidade = campo.value
    buscarTempo(cidade)
}) 
     
async function buscarTempo(campo) {
    const estado = document.getElementById('sp-estado');
    const grau = document.getElementById('grau');
    const tempo = document.getElementById('estado-do-tempo');
    const umidade = document.getElementById('umidade');
    const icon = document.getElementById('icon')
    try {
        var consultatempo = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${campo}&appid=${key}&lang=pt_br&units=metric`);

        var consultatempoverificada = await consultatempo.json()
        if (consultatempoverificada.erro) {
            throw Error('Cidade nao existe:Tente novamente')
        }
        const estado = document.getElementById('sp-estado').innerHTML = `Tempo em ${consultatempoverificada.name}`
        const grau = document.getElementById('grau').innerHTML = Math.floor(consultatempoverificada.main.temp) + "°C"
        const tempo = document.getElementById('estado-do-tempo').innerHTML = consultatempoverificada.weather[0].description
        const umidade = document.getElementById('umidade').innerHTML = "Umidade:" + consultatempoverificada.main.humidity + "%"
        const icon = document.getElementById('icon').src = `https://openweathermap.org/img/wn/${consultatempoverificada.weather[0].icon}.png`




        return consultatempoverificada
    } catch (erro) {
        estado.innerHTML = " Cidade inexistente"
        grau.innerHTML = "--"
        tempo.innerHTML = "--"
        umidade.innerHTML = "--"
        icon.innerHTML = "--"
    }
}



