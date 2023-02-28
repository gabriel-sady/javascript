var nume = window.document.getElementById('num')
var num = [Number(nume.value)]
var resu = window.document.getElementById('resu')
var res = window.document.getElementById('res')


function adicionar(){
    if(num > 0 && num <= 100) {
        let item = document.createElement('option')
        item.text = `O valor ${num} foi adicionado`
        resu.appendChild(item)}
        else{
            window.alert('Valor não aceito. Por favor digite um número entre 1 e 100.')
        }
        function analisar(){
            let itemp = document.createElement('p')
            itemp.innerHTML = `O valor foi ${num} adicionado`
            res.appendChild(itemp)
            
            }
}