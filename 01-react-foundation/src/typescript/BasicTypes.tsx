export const BasicTypes = () => {
  const name: string = "Roberto";
  const age: number = 26;
  const isActive: boolean = true;
  const powers: string[] = ["React", "Agular", "Redux"];

  powers.push("React Native");

  return (
    <>
      <h3>Tipos básicos</h3>
      {name} {age} {isActive ? "Active" : "Disabled"}
      <hr />
      {powers.join(", ")}
    </>
  );
};
