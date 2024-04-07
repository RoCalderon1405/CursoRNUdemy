import { AxiosError } from 'axios';
import {API_URL, tesloApi} from '../../config/api/tesloApi';
import type {User} from '../../domain/entities/user';
import type {AuthLoginResponse} from '../../infraestructure/interfaces/auth.responses';

const returnUserToken = (data: AuthLoginResponse) => {
  const user: User = {
    id: data.id,
    email: data.email,
    fullName: data.fullName,
    isActive: data.isActive,
    roles: data.roles,
  };

  return {
    user: user,
    token: data.token,
  };
};

export const userCreate = async (
  email: string,
  password: string,
  fullName: string,
) => {
  email = email.toLocaleLowerCase();

  try {
    const {data} = await tesloApi.post<AuthLoginResponse>('/auth/register', {
      email,
      password,
      fullName,
    });
    return returnUserToken(data);
  } catch ( error: any) {
    const err = error as AxiosError
    console.log(err.response?.data);
    return null;
  }
};
