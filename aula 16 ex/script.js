let num=document.querySelector('#caixa')
let valores=[]

function inlist(n,l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function bot(){
    if(num.value==''||num.value>100||inlist(num.value, valores)){alert('erro')}
    
    
    else{
    valores.push(Number(num.value))
    let tab=document.querySelector('#tab')
    let option=document.createElement('option')
    option.value
    option.text=`valor ${num.value} foi adicionado`
    tab.appendChild(option)
    }
    num.value=''
    num.focus()
    res.innerHTML=''
}

function fin(){
    let num=Number(document.querySelector('#caixa').value)

if(valores.length==''){alert('adicione valores')}
else{
let res=document.querySelector('#res')

let tot=valores.length
let maior=valores[0]
let menor=valores[0]
let soma=0
let média=0
for(let pos in valores){
    soma += valores[pos]
    média
    if(valores[pos]>maior){maior=valores[pos]}
    if(valores[pos]<menor){menor=valores[pos]}
}média=soma/tot
res.innerHTML=`Ao todo temos ${valores.length} números cadastrados<br>O maior valor foi ${maior}<br>O menor valor foi ${menor}<br>A soma de todos so valores é ${soma}<br>A média dos valores é ${média}`
}
}