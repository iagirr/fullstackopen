import express from 'express';
import { calculateBMI } from './exercises/bmiCalculator';
const app = express();

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack!');
});

app.get('/bmi', (req, res) => {
  const alturaCm = parseFloat(req.query.alturaCm as string);
  const pesoKg = parseFloat(req.query.pesoKg as string);

  if (isNaN(alturaCm) || isNaN(pesoKg)) {
    return res.status(400).json({ error: 'Parámetros inválidos' });
  }

  const bmiResult = calculateBMI(alturaCm, pesoKg);

  res.json({
    alturaCm,
    pesoKg,
    bmi: bmiResult,
  });

  return;
});

const port = 3003;

app.listen(port, () => {
  console.log(`Escoitando no porto ${port}`);
});
