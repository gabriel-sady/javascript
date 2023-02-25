function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var txt = window.document.getElementById('txt')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.</br>`
    if (hora < 12) {
        img.src = 'imagem/manha.jpg'
        txt.innerHTML = 'Bom dia!'
        document.body.style.background = '#DDD0CC'
    } else if (hora >= 12 && hora < 19) {
        img.src = 'imagem/tarde.jpg'
        txt.innerHTML = 'Boa Tarde!'
        document.body.style.background = '#389CEA'
    } else{
        img.src = 'imagem/noite.jpg'
        txt.innerHTML = 'Boa Noite!'
        document.body.style.background = '#0C464D'

    }
}