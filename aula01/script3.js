function contar(){
    var inici = window.document.getElementById('ini')
    var inicio = Number(inici.value)
    var fi = window.document.getElementById('fim')
    var fim = Number(fi.value)
    var pass = window.document.getElementById('passo')
    var passo = Number(pass.value)
    var res = window.document.getElementById('res')

    var cont = ''
    for(inicio; inicio <= fim; inicio += passo){
        cont += (inicio +',')
    }
    
    res.innerHTML = cont
}