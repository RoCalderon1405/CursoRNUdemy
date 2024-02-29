import type { User } from "../interfaces";
import { useUsers } from "../hooks/useUsers";


export const UsersPage = () => {
  const { dataUsers, nextPage, prevPage } = useUsers();

  return (
    <>
      <h3>Usuarios:</h3>
      <table>
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {dataUsers.map((user) => (
            <UserRow key={user.id} user={user} />
          ))}
        </tbody>
      </table>

      <div>
        <button onClick={prevPage}>Prev</button>
        <button onClick={nextPage}>Next</button>
      </div>
    </>
  );
};

interface Props {
  user: User;
}

export const UserRow = ({ user }: Props) => {
  const { avatar, first_name, last_name, email } = user;
  return (
    <tr>
      <td>
        <img style={{ width: "40px" }} src={avatar} alt="Avatar" />
      </td>
      <td>
        {first_name}
        {last_name}
      </td>
      <td>{email}</td>
    </tr>
  );
};
