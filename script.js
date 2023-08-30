const textoDigitado = document.getElementById("texto-digitado")
const cursor = document.getElementById("cursor")
const textos = ["programador", "estudante"]
const digitarDelay = 200
const apagarDelay = 100
const novoTextoDelay = 2000
let textoIndex = 0
let charIndex = 0

function escrever() {
    if(charIndex < textos[textoIndex].length) {
        if(!cursor.classList.contains("escrevendo")) cursor.classList.add("escrevendo")
        textoDigitado.textContent += textos[textoIndex].charAt(charIndex)
        charIndex++
        setTimeout(escrever, digitarDelay)
    } 
    else {
        cursor.classList.remove("escrevendo")
        setTimeout(apagar, novoTextoDelay)
    }
}

function apagar(){
    if(charIndex > 0) {
        if(!cursor.classList.contains("escrevendo")) cursor.classList.add("escrevendo")
        textoDigitado.textContent = textos[textoIndex].substring(0, charIndex - 1)
        charIndex--
        setTimeout(apagar, apagarDelay)
    }
    else {
        cursor.classList.remove("escrevendo")
        textoIndex++
        if(textoIndex >= textos.length) textoIndex = 0;
        setTimeout(escrever, digitarDelay + 1100)
    }
}

document.addEventListener('DOMContentLoaded', function() {
    if(textos.length) setTimeout(escrever, novoTextoDelay)
})