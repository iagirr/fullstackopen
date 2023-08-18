interface Result {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

export const calculateExercise = (
  exerciseHours: number[],
  target: number
): Result => {
  const periodLength = exerciseHours.length;
  const trainingDays = exerciseHours.filter((h) => h > 0).length;
  const totalHours = exerciseHours.reduce((h, history) => h + history, 0);
  const average = totalHours / periodLength;

  const success = average >= target;
  let rating = 0;
  let ratingDescription = '';

  if (success) {
    rating = 3;
    ratingDescription = 'Xenial, gran semana!';
  } else if (average >= target * 0.7) {
    rating = 2;
    ratingDescription = 'ben, pero podería mellorar';
  } else {
    rating = 1;
    ratingDescription = 'Non foi a mellor semana, pero a seguinte será mellor';
  }

  return {
    periodLength,
    trainingDays,
    success,
    rating,
    ratingDescription,
    target,
    average,
  };
};

//ACTIVAR LIÑA DE COMANDOS

/* const exerciseHours = process.argv
  .slice(2, process.argv.length - 1)
  .map(Number);
const target = Number(process.argv[process.argv.length - 1]);

console.log(calculateExercise(exerciseHours, target)); */
