import {create} from 'zustand';

export interface ProfileStore {
  name: string;
  email: string;

  changeProfile: (name: string, email: string) => void;
}

export const useProfileStore = create<ProfileStore>()((set, get) => ({
  name: 'Jon Doe',
  email: 'jondoe@gmail.com',

  changeProfile: (name: string, email: string) => {
    set({name, email});
  },
}));
