var agora=new Date()
var h=agora.getHours()
console.log(`Agora são ${h.toFixed(2).replace('.',':')}hr.`)

if(h<6){console.log('Boa madrugada, Flor da madrugada')}
else if(h<12){console.log('Bom dia, Flor do dia')} 
    else if(h<18){console.log('Boa tarde, Flor da tarde')} 
        else{console.log('Boa noite, Flor da noite')}