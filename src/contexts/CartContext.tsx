import { createContext, ReactNode, useState } from 'react';
import { ICoffee } from '../pages/Home/components/CoffeeList/data';

interface CartContextData {
  cart: ICoffee[];
}

const CartContext = createContext({} as CartContextData);

interface CartContextProviderProps {
  children: ReactNode;
}

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [cart, setCart] = useState<ICoffee[]>([]);

  return <CartContext.Provider value={{ cart }}>{children}</CartContext.Provider>;
};
