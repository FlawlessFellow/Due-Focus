import { create } from 'zustand';

export type LoginStore = {
    name: string;
    lastName: string;
    accessToken: string;
    isUserLogin: boolean;
    setValue: (name: string, lastName: string, accessToken: string, isUserLogin: boolean) => void;
};

const useLoginStore = create<LoginStore>((set) => {
    const storedData = localStorage.getItem('loginStore');
    const initialState = storedData
        ? JSON.parse(storedData)
        : {
              name: '',
              lastName: '',
              accessToken: '',
              isUserLogin: false,
          };

    return {
        ...initialState,
        setValue: (name, lastName, accessToken, isUserLogin) => {
            const newState = { name, lastName, accessToken, isUserLogin };
            set(newState);
            localStorage.setItem('loginStore', JSON.stringify(newState));
        },
    };
});

export { useLoginStore };
