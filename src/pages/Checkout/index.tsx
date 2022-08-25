import { CurrencyDollar, MapPinLine, CreditCard, Money, Bank } from 'phosphor-react';
import { CheckoutForm } from './components/CheckoutForm';
import { Cart, CheckoutContainer } from './styles';

export const Checkout = () => {
  return (
    <CheckoutContainer>
      <CheckoutForm />

      <Cart>haehea</Cart>
    </CheckoutContainer>
  );
};
