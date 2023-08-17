const calculaBMI = (alturaCm: number, pesoKg: number): string => {
  const alturaM = alturaCm / 100;
  const bmi = pesoKg / alturaM ** 2;
  const bmiRedondeado = bmi.toFixed(2);

  if (bmi < 18.5) {
    return `Infrapeso: ${bmiRedondeado}`;
  } else if (bmi < 25) {
    return `Peso saudable: ${bmiRedondeado}`;
  } else if (bmi < 30) {
    return `Sobrepeso: ${bmiRedondeado}`;
  } else {
    return `Obesidade: ${bmiRedondeado}`;
  }
};

console.log(calculaBMI(178, 74));
