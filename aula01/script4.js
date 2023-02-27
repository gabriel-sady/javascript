function calcular(){
    var nume = window.document.getElementById('num')
    var num = Number(nume.value)
    var tab = document.getElementById('tabu')

    var result = ''
    var c = 1
    for(c; c <= 10; c++){
        let item = document.createElement('option')
        item.text = `${num} x ${c} = ${num*c}`
        tab.appendChild(item)
    }
    
}