interface Person {
  firstName: string;
  lastName: string;
  age: number;
  address: Address;
  isAlive?: boolean;
}

interface Address {
  country: string;
  houseNo: number;
}

export const ObjectLiterals = () => {
  const person: Person = {
    firstName: "Roberto",
    age: 37,
    lastName: "Calderón",
    address: {
      country: "México",
      houseNo: 0,
    },
    isAlive: false,
  };
  const { address } = person;

  return (
    <>
      <div>ObjectLiterals</div>
      <pre>{JSON.stringify(person, null, 2)}</pre>
      {address.country}
    </>
  );
};
