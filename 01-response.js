function calculator(peso, altura){
  let Imc = Math.floor(peso / (altura * altura ))

  if(Imc < 18.5){
    console.log(`Tu IMC ES: ${Imc}. Tienes bajo peso`)
  }else if ( Imc < 25){
    console.log(`Tu IMC ES: ${Imc}. Tienes Peso normal`)
  }else if (Imc < 30){
    console.log(`Tu IMC ES: ${Imc}. Tienes Sobrepeso`)
  }else if (Imc > 30){
    console.log(`Tu IMC ES: ${Imc}. Tienes Obesidad`)
  }else{
    console.log('No es un numero')
  }
}

calculator(75, 1.65)
calculator(95, 1.75)
calculator('GOLA', '43')
