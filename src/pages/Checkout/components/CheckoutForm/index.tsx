import {
  CurrencyDollar,
  MapPinLine,
  CreditCard,
  Money,
  Bank,
} from 'phosphor-react';
import {
  AddressContainer,
  CheckoutFormSection,
  Input,
  PaymentContainer,
  PaymentOption,
} from './styles';
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';
import { useForm } from 'react-hook-form';
import { useCart } from '../../../../contexts/CartContext';
import { useNavigate } from 'react-router-dom';

const checkoutValidationSchema = zod.object({
  cep: zod
    .string()
    .min(8, { message: 'No minimo 8 caracteres' })
    .max(8, { message: 'No maximo 8 caracteres' }),
  street: zod.string(),
  number: zod.string(),
  complement: zod.string(),
  neighborhood: zod.string(),
  city: zod.string(),
  state: zod
    .string()
    .min(2, { message: 'No minimo 2 caracteres' })
    .max(2, { message: 'No maximo 2 caraceteres' }),
  paymentOption: zod.string(),
});

export const CheckoutForm = () => {
  const { register, handleSubmit } = useForm({
    resolver: zodResolver(checkoutValidationSchema),
  });
  const navigate = useNavigate();

  const { onChange } = register('paymentOption');

  const { onCheckoutSubmit } = useCart();

  const onSubmit = (data: any) => {
    onCheckoutSubmit(data);
    navigate('/success');
  };

  return (
    <CheckoutFormSection>
      <strong>Complete seu pedido</strong>

      <form id='checkout-form' onSubmit={handleSubmit(onSubmit)}>
        <AddressContainer>
          <header>
            <MapPinLine size={22} />
            <div>
              <span>Endereço de Entrega</span>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </header>

          <main>
            <Input
              type='number'
              placeholder='CEP'
              width='12.5rem'
              {...register('cep')}
            />

            <Input
              type='text'
              placeholder='Rua'
              width='100%'
              {...register('street')}
            />

            <div>
              <Input
                type='number'
                placeholder='Número'
                width='12.5rem'
                {...register('number')}
              />
              <Input
                type='text'
                placeholder='Complemento'
                width='100%'
                optional
                {...register('complement')}
              />
            </div>

            <div>
              <Input
                type='text'
                placeholder='Bairro'
                width='12.5rem'
                {...register('neighborhood')}
              />
              <Input
                type='text'
                placeholder='Cidade'
                width='100%'
                {...register('city')}
              />
              <Input
                type='text'
                placeholder='UF'
                width='4rem'
                {...register('state')}
              />
            </div>
          </main>
        </AddressContainer>

        <PaymentContainer>
          <header>
            <CurrencyDollar size={22} />
            <div>
              <span>Pagamento</span>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </header>

          <main>
            <PaymentOption>
              <input
                type='radio'
                id='Cartao de Credito'
                {...register('paymentOption')}
                onChange={(e) => {
                  e.target.value = e.target.id;
                  onChange(e);
                }}
              />
              <label htmlFor='Cartao de Credito'>
                <CreditCard size={16} />
                Cartao de Credito
              </label>
            </PaymentOption>
            <PaymentOption>
              <input
                type='radio'
                id='Cartao de Debito'
                {...register('paymentOption')}
                onChange={(e) => {
                  e.target.value = e.target.id;
                  onChange(e);
                }}
              />
              <label htmlFor='Cartao de Debito'>
                <Bank size={16} />
                Cartao de Debito
              </label>
            </PaymentOption>
            <PaymentOption>
              <input
                type='radio'
                id='Dinheiro'
                {...register('paymentOption')}
                onChange={(e) => {
                  e.target.value = e.target.id;
                  onChange(e);
                }}
              />
              <label htmlFor='Dinheiro'>
                <Money size={16} />
                Dinheiro
              </label>
            </PaymentOption>
          </main>
        </PaymentContainer>
      </form>
    </CheckoutFormSection>
  );
};
