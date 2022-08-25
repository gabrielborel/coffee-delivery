import { createContext, ReactNode, useContext, useState } from 'react';
import { ICoffee } from '../pages/Home/components/CoffeeList/data';

interface CartContextData {
  cart: ICoffee[];
  cartItemsLength: number;
  addToCart: (coffee: ICoffee) => void;
  removeFromCart: (coffee: ICoffee) => void;
  increaseCartQuantity: (coffee: ICoffee) => void;
  decreaseCartQuantity: (coffee: ICoffee) => void;
  cartValue: string;
}

const CartContext = createContext({} as CartContextData);

interface CartContextProviderProps {
  children: ReactNode;
}

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [cart, setCart] = useState<ICoffee[]>([]);

  const cartItemsLength = cart.length;

  const addToCart = (coffee: ICoffee) => {
    const alreadyExistsInCart = cart.some((cartItem) => cartItem.id === coffee.id);

    if (alreadyExistsInCart) {
      const updatedCart = cart.map((cartItem) =>
        cartItem.id === coffee.id ? { ...cartItem, quantity: coffee.quantity } : { ...cartItem }
      );
      setCart(updatedCart);
      return;
    }

    const updatedCart = [...cart, coffee];
    setCart(updatedCart);
  };

  const removeFromCart = (coffee: ICoffee) => {
    const updatedCart = cart.filter((cartItem) => cartItem.id !== coffee.id);
    setCart(updatedCart);
  };

  const increaseCartQuantity = (coffee: ICoffee) => {
    const updatedCart = cart.map((cartItem) =>
      cartItem.id === coffee.id ? { ...cartItem, quantity: ++cartItem.quantity } : { ...cartItem }
    );

    setCart(updatedCart);
  };

  const decreaseCartQuantity = (coffee: ICoffee) => {
    const updatedCart = cart.map((cartItem) =>
      cartItem.id === coffee.id ? { ...cartItem, quantity: --cartItem.quantity } : { ...cartItem }
    );

    setCart(updatedCart);
  };

  const cartValue = cart
    .reduce((acc, actual) => acc + actual.quantity * actual.price, 0)
    .toFixed(2);

  return (
    <CartContext.Provider
      value={{
        cart,
        cartItemsLength,
        addToCart,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        cartValue,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
