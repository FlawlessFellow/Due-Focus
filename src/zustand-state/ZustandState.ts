import { create } from 'zustand';

type SignupStore = {
    email: string;
    password: string;
    setValue: (email: string, password: string) => void;
};

export const useSignupStore = create<SignupStore>((set) => ({
    email: '',
    password: '',
    setValue: (email, password) => set({ email, password }),
}));
