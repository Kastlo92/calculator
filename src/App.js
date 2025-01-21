import { useState } from "react";

export default function App() {
  let result;
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const [screen, setScreen] = useState(0);
  const [firstOperator, setFirstOperator] = useState(0);
  const [secondOperator, setSecondOperator] = useState(0);

  return (
    <div>
      <Display />
      {numbers.map((number) => (
        <Button num={number} key={number} />
      ))}
    </div>
  );

  function Button(props) {
    return (
      <>
        <button onClick={() => bPress}>{props.num}</button>
      </>
    );
  }

  function Display() {
    return <h1>{screen}</h1>;
  }

  function bPress(props) {
    setScreen(1);
  }
}
