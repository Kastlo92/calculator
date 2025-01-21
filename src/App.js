export default function App() {
  let result;
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  return (
    <div>
      <Screen result={result} />
      {numbers.map((number) => (
        <Button num={number} key={number} />
      ))}
    </div>
  );
}

function Button(props) {
  return (
    <>
      <button>{props.num}</button>
    </>
  );
}

function Screen(props) {
  return <h1>{props.result}</h1>;
}
