import { create } from 'zustand';

export type LoginStore = {
    name: string;
    lastName: string;
    accessToken: string;
    setValue: (name: string, lastName: string, accessToken: string) => void;
};

const useLoginStore = create<LoginStore>((set) => {
    const storedData = localStorage.getItem('loginStore');
    const initialState = storedData
        ? JSON.parse(storedData)
        : {
              email: '',
              password: '',
              accessToken: '',
          };
    return {
        ...initialState,
        setValue: (name, lastName, accessToken) => {
            const newState = { name, lastName, accessToken };
            set(newState);
            localStorage.setItem('loginStore', JSON.stringify(newState));
        },
    };
});

export { useLoginStore };
