var entering=document.querySelector('#txt2') //Tem que CRIAR duas var para txt2
entering.addEventListener('keyup', soma, false)

var tam=document.querySelector('#somar')
tam.addEventListener('click', somar)

function soma(key){
    
    var n1=Number(document.querySelector('#txt1').value)
    var n2=Number(document.querySelector('#txt2').value)
    var res=document.querySelector('#res')
/*     var n1=Number(txtn1.value)
    var n2=Number(txtn2.value) */


if(key.keyCode=="13"){

    var s=n1+n2
    res.innerHTML=s
    }
}

function somar() {

    var txtn1=document.querySelector('#txt1')
    var txtn2=document.querySelector('#txt2')
    var res=document.querySelector('#res')
    var n1=Number(txtn1.value)
    var n2=Number(txtn2.value)
    var s=n1 + n2
    res.innerHTML = s
}