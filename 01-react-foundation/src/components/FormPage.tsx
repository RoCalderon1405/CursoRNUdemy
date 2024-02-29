import { useForm } from "react-hook-form";

type FormInputs = {
  email: string;
  password: string;
};
export const FormPage = () => {
  const {} = useForm<FormInputs>({
    defaultValues: {
      email: "roberto@email.com",
      password: "abc123",
    },
  });

  return (
    <>
      <h3>Formularios</h3>
      <form action="">
        <div style={{ display: "flex", flexDirection: "column" }}>
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Password" />
          <button>Ingresar</button>
        </div>
      </form>
    </>
  );
};
