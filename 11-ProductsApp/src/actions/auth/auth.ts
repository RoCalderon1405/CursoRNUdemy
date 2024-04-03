import {tesloApi} from '../../config/api/tesloApi';
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

export const authLogin = async (email: string, password: string) => {
  email = email.toLocaleLowerCase();

  try {
    const {data} = await tesloApi.post<AuthLoginResponse>('/auth/login', {
      email,
      password,
    });
    return returnUserToken(data);
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const authCheckStatus = async () => {
  try {
    const {data} = await tesloApi.get<AuthLoginResponse>('/auth/check-status');
    return returnUserToken(data);
  } catch (error) {
    console.log({authError: error});
    return null;
  }
};
