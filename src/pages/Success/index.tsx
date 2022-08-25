import { Location, Payment, SuccessContainer, Time } from './styles';
import motobikeMan from '../../assets/illustration.svg';
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react';

export const Success = () => {
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
                Entrega em <span>Rua João Daniel Martinelli, 102</span>
              </p>
              <p>Farrapos - Porto Alegre, RS</p>
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
              <span>Cartão de Crédito</span>
            </div>
          </Payment>
        </div>

        <img src={motobikeMan} alt='' />
      </div>
    </SuccessContainer>
  );
};
