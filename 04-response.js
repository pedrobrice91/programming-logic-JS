const numeroSecreto = Math.floor(Math.random() * 19);

let num = parseInt(prompt("Dame un numero❓❓"));

function AdivinaElNumero(num) {
  let intentos = 0;

  if (num != numeroSecreto) {
    if (num <= 17) {
      if (numeroSecreto >= num) {
        alert(
          "🤨 Mal. El numero secreto es mayor al numero ingresado. La respuesta es " +
            numeroSecreto
        );
        intentos += 1;
        //vuelve a preguntar
      } else {
        alert(
          "🙃 Noo. El numero secreto es menor al numero ingresado. La respuesta es " +
            numeroSecreto
        );
        intentos += 1;
        //vuelve a preguntar
      }
    } else {
      alert("No es un numero valido");
      /// vuelve a preguntar
    }
  } else {
    alert("Adivinaste 🥳🥳 ❤️" + ".Numero de intentos " + intentos);
  }
}

AdivinaElNumero(num);
//AdivinaElNumero(17)
//AdivinaElNumero(18)
