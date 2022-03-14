res.style.visibility= 'hidden'
function ver(){
    var data=new Date()
    var ana=data.getFullYear()
    var anobox=document.querySelector('#boxage')
    var res=document.querySelector('#res')
    
    
if(anobox.value==0||anobox.value>ana){res.style.visibility= 'visible'}
else{
    var rsex=document.getElementsByName('sex')
    var idade=ana-anobox.value
    var gen= ''
    if(rsex[0].checked){gen='um Homem'
        if(idade<10){imagem.src="criança m.png"}
        else if(idade<21){imagem.src="adolescente m.png"}
        else if(idade<70){imagem.src="adulto m.png"}
        else{imagem.src="idoso m.png"}
        }
    
        else{gen='uma Mulher'
        if(idade<10){imagem.src="criança f.png"}
        else if(idade<21){imagem.src="adolescente f.png"}
        else if(idade<70){imagem.src="adulto f.png"}
        else{imagem.src="idoso f.png"}
    }
    
    var aqs=' anos'
    if(idade==1){aqs=' ano'}
    res.style.textAlign='center'
    res.innerHTML=`Você é ${gen} com ${idade}`+ aqs
    res.style.color='black'
    res.style.font='bold 16px Arial'
    res.style.visibility= 'visible'

    }
}