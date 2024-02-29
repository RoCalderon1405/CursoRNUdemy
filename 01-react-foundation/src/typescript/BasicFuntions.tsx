export const BasicFuntions = () => {
  const addTwoNumbers = (a: number, b: number) => {
    return a + b;
  };

  return (
    <>
      <h3>Functions</h3>
      <span>El resultado de sumar: {addTwoNumbers(5, 5)}</span>
    </>
  );
};
