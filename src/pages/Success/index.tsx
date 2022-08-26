import { Location, Payment, SuccessContainer, Time } from './styles';
import motobikeMan from '../../assets/illustration.svg';
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react';
import { useCart } from '../../contexts/CartContext';

export const Success = () => {
  const { checkoutData } = useCart();

  return (
    <SuccessContainer>
      <strong>Uhu! Pedido confirmado</strong>
      <p>Agora é só aguardar que logo o café chegará até você</p>

      <div>
        <div>
          <Location>
            <MapPin weight='fill' size={16} />
            <div>
              <p>
                Entrega em{' '}
                <span>
                  {checkoutData.street}, {checkoutData.number}
                </span>
              </p>
              <p>
                {checkoutData.neighborhood} - {checkoutData.city},{' '}
                {checkoutData.state}
              </p>
            </div>
          </Location>

          <Time>
            <Timer weight='fill' size={16} />
            <div>
              <p>Previsão de entrega</p>
              <span>20 min - 30 min</span>
            </div>
          </Time>

          <Payment>
            <CurrencyDollar weight='fill' size={16} />
            <div>
              <p>Pagamento na entrega</p>
              <span>{checkoutData.paymentOption}</span>
            </div>
          </Payment>
        </div>

        <img src={motobikeMan} alt='' />
      </div>
    </SuccessContainer>
  );
};
