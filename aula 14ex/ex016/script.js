function contar(){

    let va1=document.querySelector('#n1')
    let va2=document.querySelector('#n2')
    let va3=document.querySelector('#n3')
    let n1=Number(va1.value)
    let n2=Number(va2.value)
    let n3=Number(va3.value)
    let res=document.querySelector('#res')

    if(n1==''||n2==''||n3==''||n3==0 ){res.innerHTML='Imposível contar',alert('preencha tudo direitinho')}
    else{res.innerHTML='Contando:'
        if (n1<n2){
                for(var ca=n1;ca<=n2;ca+=n3){
                res.innerHTML+=`&#x1F449 ${ca}`}
    }
        else{
                for(var ca=n1;ca>=n2;ca-=n3){
                res.innerHTML+=`&#x1F449 ${ca}`}
            }
            res.innerHTML+='\u{1F3C1}'
        }
        
}

