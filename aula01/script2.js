function verificar(){
    var data = new Date() 
    var anoat = data.getFullYear()
    var foto = window.document.getElementById('img')
    var res = window.document.getElementById('res')
    var nasc = window.document.getElementById('txtano')
    var anonasc = Number(nasc.value)
    var idd = anoat - anonasc

    var sex = window.document.getElementsByName('radsex')
    var genero = ''

    if (anonasc < 1800 || anonasc > anoat) {
        window.alert(`Campo Ano de Nascimento está inválido. Só é aceito valores entre 1800 e ${anoat}`)
    }

    if(sex[0].checked) {
        genero = 'Homem'
    } else if( sex[1].checked){
        genero = 'Mulher'
    } else {
        window.alert('Selecione um Sexo.')
    }

    if(idd < 2){
        foto.src='imagem1/bebe.jpg'
    } else if(idd < 16 && genero == 'Homem') {
        foto.src='imagem1/menino.jpg'
    } else if(idd < 16 && genero == 'Mulher') {
        foto.src='imagem1/menina.jpg'
    } else if(idd < 20 && genero == 'Homem') {
        foto.src='imagem1/jovemh.jpg'
    } else if(idd < 20 && genero == 'Mulher') {
        foto.src='imagem1/jovemm.jpg'
    } else if(idd < 45 && genero == 'Homem') {
        foto.src='imagem1/homem.jpg'
    } else if(idd < 45 && genero == 'Mulher') {
        foto.src='imagem1/mulher.jpg'
    } else if(idd > 45 && genero == 'Homem') {
        foto.src='imagem1/senhor.jpg'
    } else if(idd > 16 && genero == 'Mulher') {
        foto.src='imagem1/senhora.jpg'
    }



    
}