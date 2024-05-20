import { create } from 'zustand';

export type LoginStore = {
    email: string;
    password: string;
    accessToken: string;
    setValue: (email: string, password: string, accessToken: string) => void;
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
        setValue: (email, password, accessToken) => {
            const newState = { email, password, accessToken };
            set(newState);
            localStorage.setItem('loginStore', JSON.stringify(newState));
        },
    };
});

export { useLoginStore };
