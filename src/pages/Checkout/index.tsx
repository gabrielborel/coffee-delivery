import { CurrencyDollar, MapPinLine, CreditCard, Money, Bank } from 'phosphor-react';
import { Cart } from './components/Cart';
import { CheckoutForm } from './components/CheckoutForm';
import { CheckoutContainer } from './styles';

export const Checkout = () => {
  return (
    <CheckoutContainer>
      <CheckoutForm />

      <Cart />
    </CheckoutContainer>
  );
};
