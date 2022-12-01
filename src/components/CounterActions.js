export default function CounterActions({ decrement, increment }) {
  return (
    <div>
      <button onClick={decrement} data-step={2}>
        -
      </button>
      <button onClick={increment} data-step={3}>
        +
      </button>
    </div>
  );
}
