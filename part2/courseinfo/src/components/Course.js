const Header =({text}) => <h1>{text}</h1>

const Total = ({sum}) => <b>Número de exercicios: {sum}</b>

const Part = ({ part }) => (
    <p>
      {part.name} {part.exercises}
    </p>
  );

const Content = ({ parts }) =>
  parts.map((part) => <Part key={part.id} part={part} />);

const Course = ({ course }) => {
  const total = course.parts.map((part) => part.exercises).reduce((total, current) => total + current);

  return (
    <>
      <Header text={course.name} />
      <Content parts={course.parts} />
      <Total sum={total} />
    </>
  );
};

export default Course