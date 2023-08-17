const calculateBMI = (alturaCm: number, pesoKg: number): string => {
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

const alturaCm = Number(process.argv[2]);
const pesoKg = Number(process.argv[3]);

console.log(calculateBMI(alturaCm, pesoKg));
