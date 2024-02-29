import { create } from "zustand";

interface AuthState {
  status: "authenticated" | "unauthenticated" | "checking";
  token?: string;
  user?: {
    name: string;
    email: string;
  };
  login: (email: string, password: string) => void;
  logout: (email: string, password: string) => void;
}

export const useAuthStore = create<AuthState>()((set) => ({
  status: "checking",
  token: undefined,
  user: undefined,

  login: (email: string) => {
    set({
      status: "authenticated",
      token: "ABC123",
      user: {
        name: "Jon Doe",
        email: email,
      },
    });
  },
  logout: () => {
    set({ status: "unauthenticated", token: undefined, user: undefined });
  },
}));
