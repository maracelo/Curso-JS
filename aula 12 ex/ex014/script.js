function carregar(){
    var msg=document.querySelector('div#hora')
    var data=new Date()
    var hora= data.getHours()
    var minuto=data.getMinutes()
    // var bcg=document.body.style.backgroud='blue' testar depois
    var sdç= 'Bom dia!'
    //   var hora=17
    //  var minuto=12
    if(hora<12){document.body.style.background='#86a9be'}
    
    else if(hora<18){imagem.src="tarde.png"
    sdç='Boa tarde!'
    document.body.style.background='#e6c151'} 
    
    else{imagem.src="noite.png"
    sdç='Boa noite!'
    document.body.style.background='#092a47'}
      
    if(minuto<10){minuto = '0'+minuto}
    msg.innerHTML=`Agora são <strong>${hora}:${minuto}hr</strong> ${sdç}`
}