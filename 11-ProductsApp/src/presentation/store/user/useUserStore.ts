import {create} from 'zustand';
import {userCreate} from '../../../actions/users/User';
import type {User} from '../../../domain/entities/user';

export interface CreateUserState {
  email?: string;
  password?: string;
  fullName?: string;
  user?: User;

  create: (
    email: string,
    password: string,
    fullName: string,
  ) => Promise<boolean>;
}

export const useUserStore = create<CreateUserState>()(set => ({
  email: undefined,
  password: undefined,
  fullName: undefined,
  user: undefined,
  
  create: async (email: string, password: string, fullName: string) => {
    const resp = await userCreate(email, password, fullName);
    if (resp === null) return false;
    console.log(resp);
    set({user: resp.user});
    return true;
  },
}));
