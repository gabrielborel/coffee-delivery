import { HeaderContainer, Location, ShoppingCartButton } from './styles';
import logoSVG from '../../assets/logo.svg';
import { MapPin, ShoppingCart } from 'phosphor-react';

export const Header = () => {
  return (
    <HeaderContainer>
      <img src={logoSVG} alt='' />

      <div>
        <Location>
          <MapPin weight='fill' size={20} />
          Volta Redonda, RJ
        </Location>

        <ShoppingCartButton>
          <ShoppingCart weight='fill' size={20} />
        </ShoppingCartButton>
      </div>
    </HeaderContainer>
  );
};
