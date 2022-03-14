function tabuada(){

    var num=Number(document.querySelector('#num').value)
    /* var num=Number(va.value) */
    var tab=document.querySelector('#tab')
    
    if(num==''){alert('Preencha direito jegue!')
    }else{tab.innerHTML=''
        for(var ca=1;ca<11;ca++){
        var item=document.createElement('option')
        item.text=`${num} x ${ca} = ${num*ca}`
        item.value=`tab${ca}`
        tab.appendChild(item)}
        
    }
}

