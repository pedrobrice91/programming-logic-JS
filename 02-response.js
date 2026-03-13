function calcularPrecio(numBolas, tipoBase, esfinDeSemana) {
  const bolaHelado = 1.8;
  let subTotalBase = 0;
  let subTotalBolaHelado = 0;
  let totalPagar = 0;

  if (tipoBase === "copa") {
    tipoBase = 0.8;
  } else if (tipoBase === "cono") {
    tipoBase = 0.5;
  }

  if (numBolas >= 4 && esfinDeSemana === false) {
    subTotalBolaHelado = bolaHelado * numBolas;
    let subTotalValorDescuento = subTotalBolaHelado * 0.15;
    let subTotalDescuento15 = subTotalBolaHelado - subTotalValorDescuento;
    totalPagar = subTotalDescuento15 + tipoBase;
    return totalPagar;

   } else if (numBolas >= 3 && esfinDeSemana === true) {
    subTotalBolaHelado = bolaHelado * numBolas;
    
    let subTotalBasedescuento = tipoBase * 0.5;
    subTotalBase = subTotalBasedescuento - tipoBase;
    totalPagar = subTotalBase + subTotalBolaHelado;
    return totalPagar;

  }else {
        subTotalBolaHelado = bolaHelado * numBolas;
        totalPagar = subTotalBolaHelado + tipoBase;
        return totalPagar;
  }
}
console.log(calcularPrecio(5, "copa", true)); // Expected output: 8.5
