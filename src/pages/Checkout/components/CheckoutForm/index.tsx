import { CurrencyDollar, MapPinLine, CreditCard, Money, Bank } from 'phosphor-react';
import { AddressContainer, CheckoutFormContainer, Input, PaymentContainer } from './styles';

export const CheckoutForm = () => {
  return (
    <CheckoutFormContainer>
      <strong>Complete seu pedido</strong>

      <form>
        <AddressContainer>
          <header>
            <MapPinLine size={22} />
            <div>
              <span>Endereço de Entrega</span>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </header>

          <main>
            <Input type='number' placeholder='CEP' width='12.5rem' />

            <Input type='text' placeholder='Rua' width='100%' />

            <div>
              <Input type='number' placeholder='Número' width='12.5rem' />
              <Input type='text' placeholder='Complemento' width='100%' optional />
            </div>

            <div>
              <Input type='text' placeholder='Bairro' width='12.5rem' />
              <Input type='text' placeholder='Cidade' width='100%' />
              <Input type='text' placeholder='UF' width='4rem' />
            </div>
          </main>
        </AddressContainer>

        <PaymentContainer>
          <header>
            <CurrencyDollar size={22} />
            <div>
              <span>Pagamento</span>
              <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
            </div>
          </header>

          <main>
            <div>
              <input type='radio' id='credit' name='payment' />
              <label htmlFor='credit'>
                <CreditCard size={16} />
                Cartao de Credito
              </label>
            </div>
            <div>
              <input type='radio' id='debit' name='payment' />
              <label htmlFor='debit'>
                <Bank size={16} />
                Cartao de Debito
              </label>
            </div>
            <div>
              <input type='radio' id='money' name='payment' />
              <label htmlFor='money'>
                <Money size={16} />
                Dinheiro
              </label>
            </div>
          </main>
        </PaymentContainer>
      </form>
    </CheckoutFormContainer>
  );
};
