function carregar() {
    var msg = document.getElementById("msg")
    var img = document.getElementById("img")
    var data = new Date()
    var hora = data.getHours()
    // var hora = 10
    msg.innerHTML = `Agora são ${hora} horas. `  
    if (hora >= 4 && hora < 12) {
        img.src = 'imagens/manha.png'
        document.body.style.background = "#ffcc8c"
    } else if (hora >= 12 && hora < 18) {
        img.src = 'imagens/tarde.png'
        document.body.style.background = "#e5c10c"
    } else {
        img.src = 'imagens/noite.png'
        document.body.style.background = "#06298b"
    }
}