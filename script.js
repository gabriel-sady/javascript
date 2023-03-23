function insert(num){
    var numero = document.getElementById('res').innerHTML;
    document.getElementById('res').innerHTML = numero + num;
}
function clean(){
    document.getElementById('res').innerHTML = '';
}

function back(){
    var result = document.getElementById('res').innerHTML;
    document.getElementById('res').innerHTML = result.substring(0, result.length -1)
}

function calcular(){
    var result = document.getElementById('res').innerHTML;
    if(result){
        document.getElementById('res').innerHTML = eval(result);
    } else {
        document.getElementById('res').innerHTML = '0'
    }
}