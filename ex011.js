var idd = 25
if(idd < 18){
    console.log('Você é Menor de Idade.')
} else{console.log('Você é Maior de Idade.')}
if(idd < 16){
    console.log(`Sua idade é ${idd} anos. Não tem direto ao voto.`)
} else if(idd >= 16 && idd < 18 || idd > 64){
    console.log(`Sua idade é ${idd} anos. O voto é opcional.`) }
    else{console.log(`Sua idade é ${idd} anos. O voto é obrigatório.`)}