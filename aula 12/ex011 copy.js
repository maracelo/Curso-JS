var idades=[10,16,20,69]
var idade=idades[Math.floor(Math.random() * idades.length)]

if(idade<16){
    console.log(`${idade} essa idade não vota`)

}else if(idade<18){
    console.log(`${idade} seu voto é opcional`)

}else if(idade>17){
    if(idade<68){
        console.log(`${idade} seu voto é obrigatório`)

    }else{console.log(`${idade} seu voto é opcional`)}

} 