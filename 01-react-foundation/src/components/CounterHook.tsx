import { useCounter } from "../hooks/useCounter";

const CounterHook = () => {
  const { count, increaseBy, decreaseBy } = useCounter({ initialValue: 5 });

  return (
    <>
      <h3>Contador:{count}</h3>
      <div style={{ display: "flex", gap: 5 }}>
        <button onClick={() => decreaseBy(1)}>-1</button>

        <button onClick={() => increaseBy(1)}>+1</button>
      </div>
    </>
  );
};

export default CounterHook;
