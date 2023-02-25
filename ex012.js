var hatual = new Date()
var hr = hatual.getHours()
console.log(`Agora é ${hr} hora.`)
if(hr < 12){console.log('Bom dia!')} else if(hr >= 12 && hr < 19){console.log('Boa tarde!')} else {console.log('Boa noite!')}