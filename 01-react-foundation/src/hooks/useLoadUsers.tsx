import type { ReqResUserListResponse, User } from "../interfaces";
import axios from "axios";

export const loadUsers = async (page: number): Promise<User[]> => {
  try {
    const { data } = await axios.get<ReqResUserListResponse>(
      "https://reqres.in/api/users/",
      {
        params: {
          page: page,
        },
      }
    );
    return data.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
