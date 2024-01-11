import { createContext, useEffect, useState } from 'react';
import { getCookie } from '../utils/functions';

interface ProviderProps {
  children: React.ReactNode;
}

export const Context = createContext({
  isLoggedIn: false,
  setIsLoggedIn: (val: boolean) => {},
  name: '',
  setName: (username: string) => {},
  isModalOpen: false,
  setIsModalOpen: (val: boolean) => {},
});

export function ContextProvider({ children }: ProviderProps) {
  const [name, setName] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (getCookie('token')) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <Context.Provider
      value={{
        name,
        setName,
        isModalOpen,
        setIsModalOpen,
        isLoggedIn,
        setIsLoggedIn,
      }}
    >
      {children}
    </Context.Provider>
  );
}
