import { useEffect, useRef, useState } from "react";
import { User } from "../interfaces";
import { loadUsers } from "./useLoadUsers";

export const useUsers = () => {
  const [dataUsers, setDataUsers] = useState<User[]>([]);
  const currentPageRef = useRef(1);

  useEffect(() => {
    loadUsers(currentPageRef.current).then(setDataUsers);
  }, []);

  const prevPage = async () => {
    if (currentPageRef.current <= 1) return;

    currentPageRef.current--;
    const users = await loadUsers(currentPageRef.current);
    setDataUsers(users);
  };

  const nextPage = async () => {
    currentPageRef.current++;
    const users = await loadUsers(currentPageRef.current);
    if (users.length > 0) {
      setDataUsers(users);
    } else {
      currentPageRef.current--;
    }
  };

  return {
    dataUsers,
    setDataUsers,

    prevPage,
    nextPage,
  };
};
