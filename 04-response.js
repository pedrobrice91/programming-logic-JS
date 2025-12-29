const numeroSecreto = Math.floor(Math.random() * 17) + 1;
let intentos = 0;
let num;

function adivinaElNumero() {
  do {
    num = parseInt(prompt("Adivina el número (del 1 al 17) ❓❓"));
    
    // Validamos que sea un número válido
    if (isNaN(num) || num < 1 || num > 17) {
      alert("❌ Por favor, ingresa un número válido entre 1 y 17.");
      continue; // Salta al siguiente ciclo sin contar el intento
    }

    intentos++; // Sumamos un intento

    if (num < numeroSecreto) {
      alert("🤨 Muy bajo. El número secreto es MAYOR.");
    } else if (num > numeroSecreto) {
      alert("🙃 Muy alto. El número secreto es MENOR.");
    } else {
      alert(`🎉 ¡Felicidades! El número era ${numeroSecreto}. Te tomó ${intentos} intentos.`);
    }

  // El bucle sigue MIENTRAS el número ingresado NO sea el secreto
  } while (num !== numeroSecreto);
}

adivinaElNumero();