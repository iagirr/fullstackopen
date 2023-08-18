import express from 'express';
import { calculateBMI } from './exercises/bmiCalculator';
import { calculator, Operation } from './exercises/calculator';
import { calculateExercise } from './exercises/exerciseCalculator';

const app = express();

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack!');
});

app.post('/calculator', (req, res) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { value1, value2, op } = req.body;

  const result = calculator(Number(value1), Number(value2), op as Operation);
  res.send(result);
});

app.post('/exercises', (req, res) => {
  try {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const { exerciseHours, target } = req.body;

    if (!exerciseHours || !target) {
      return res.status(400).json({ error: 'Faltan parámetros' });
    }
    if (!Array.isArray(exerciseHours)) {
      return res.status(400).json({ error: 'exerciseHours debe ser un array' });
    }
    if (exerciseHours.some((hour) => isNaN(Number(hour)))) {
      return res
        .status(400)
        .json({ error: 'exerciseHours contiene valores no numéricos' });
    }
    if (isNaN(Number(target))) {
      return res.status(400).json({ error: 'target debe ser un número' });
    }

    const result = calculateExercise(exerciseHours as number[], Number(target));
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
  return;
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

const port = 3002;

app.listen(port, () => {
  console.log(`Escoitando no porto ${port}`);
});
