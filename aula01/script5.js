let valores = []
let maior = valores[0]
let menor = valores[0]
let soma = 0
parseInt(valores)

for(pos in valores){
    soma += valores[pos]
    if(valores[pos] > maior){
        maior = valores[pos]
    }
    if(valores[pos] < menor){
        menor = valores[pos]
    }

}

function adicionar(){
    let nume = window.document.querySelector('input#num')
    let num = Number(nume.value)
    let resu = window.document.getElementById('resu')
    let res = window.document.getElementById('res')

    if(num > 0 && num <= 100) {
        let item = document.createElement('option')
        item.text = `O valor ${num} foi adicionado`
        resu.appendChild(item)
        valores.push(num)}
        else{
            window.alert('Valor não aceito. Por favor digite um número entre 1 e 100.')
        }
    }
function analisar(){
    let nume = window.document.querySelector('input#num')
    let num = Number(nume.value)
    let res = window.document.getElementById('res')


    
    let itemp = document.createElement('p')
    itemp.innerHTML = `O total de números adicionados foi ${valores.length}</br>O maior número foi ${valores}. </br>O menor número foi ${valores.sort()}.</br>A soma dos números é ${typeof(valores[0])}`
    res.appendChild(itemp)

}