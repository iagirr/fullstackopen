import { useState } from 'react';

const Button = ({ etiqueta, clica }) => {
  return <button onClick={clica}>{etiqueta}</button>;
};

const StatisticLine = ({ etiqueta, valor }) => {
  return (
    <tr>
      <td>{etiqueta}</td>
      <td>{valor}</td>
    </tr>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  const total = () => good + neutral + bad;
  const average = () => (good - bad) / total() || 0;
  const positive = () => (good / total()) * 100 || 0;

  if (total() === 0) return <p>No feedback!</p>;

  return (
    <table>
      <tbody>
        <StatisticLine etiqueta="good" valor={good} />
        <StatisticLine etiqueta="neutral" valor={neutral} />
        <StatisticLine etiqueta="bad" valor={bad} />
        <StatisticLine etiqueta="total" valor={total()} />
        <StatisticLine etiqueta="average" valor={average()} />
        <StatisticLine etiqueta="positive" valor={positive() + '%'} />
      </tbody>
    </table>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h2>Give feedback!</h2>
      <Button etiqueta="good" clica={() => setGood(good + 1)} />
      <Button etiqueta="neutral" clica={() => setNeutral(neutral + 1)} />
      <Button etiqueta="bad" clica={() => setBad(bad + 1)} />
      <h2>Statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
