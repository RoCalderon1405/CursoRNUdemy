import { useForm } from "react-hook-form";

type FormInputs = {
  email: string;
  password: string;
};

export const FormPage = () => {
  const { register, handleSubmit } = useForm<FormInputs>({
    defaultValues: {
      email: "roberto@email.com",
      password: "abc123",
    },
  });

  const onSubmit = (myForm: FormInputs) => {
    console.log(myForm);
  };

  return (
    <>
      <h3>Formularios</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <input
            type="text"
            placeholder="Email"
            {...register("email", { required: true })}
          />
          <input type="text" placeholder="Password" {...register("password")} />
          <button type="submit">Ingresar</button>
        </div>
      </form>
    </>
  );
};
