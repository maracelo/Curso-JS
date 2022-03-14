//aqui é um objeto pois tem {} e não um array que tem []

let amigo={nome:'Brendo',sexo:'m', altura: 1.71,
    aumentar(a=0){
        console.log(`AUMENTOU!!'o'`)
        this.altura += a
    }  
}

amigo.aumentar(0.01)
console.log(`Agora ${amigo.nome} tem ${amigo.altura}cm`)