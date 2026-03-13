function buscarPalabra(arra, word){

  for(i = 0; i < arra.length; i++){
    for(j = 0; j < arra[i].length; j++){
        if(arra[i][j] === word){
          return console.log(`[${j} : ${i}]`);
        }
      }
  }
  console.log('[-1 : -1]')
}

let palabra = 'JavaScript';

const matrizNombres = [
  ["Juan", "Pedro", "Ana"],
  ["Luis", "JavaScript", "Sofía"],
  ["Carlos", "Elena", "Diego"]
];

buscarPalabra(matrizNombres, palabra)