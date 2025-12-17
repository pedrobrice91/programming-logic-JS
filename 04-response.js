function AdivinaElNumero(num){
    const numeroSecreto = (Math.floor(Math.random()))*1
    if (num <= 17){
        console.log(numeroSecreto)
    }else{
        console.log('No es un numero valido')
    }
}

AdivinaElNumero(10)
AdivinaElNumero(17)