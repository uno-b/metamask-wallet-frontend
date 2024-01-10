import { createContext, useEffect, useState } from 'react';

interface ProviderProps {
  children: React.ReactNode;
}

export const Context = createContext({
  name: '',
  setName: (username: string) => {},
  isModalOpen: false,
  setIsModalOpen: (val: boolean) => {},
});

export function ContextProvider({ children }: ProviderProps) {
  const [name, setName] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // TODO: Get name
  }, []);

  return (
    <Context.Provider value={{ name, setName, isModalOpen, setIsModalOpen }}>
      {children}
    </Context.Provider>
  );
}
