import { CartItemsCounter, HeaderContainer, Location, ShoppingCartButton } from './styles';
import logoSVG from '../../assets/logo.svg';
import { MapPin, ShoppingCart } from 'phosphor-react';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <HeaderContainer>
      <NavLink to='/'>
        <img src={logoSVG} alt='' />
      </NavLink>

      <div>
        <Location>
          <MapPin weight='fill' size={20} />
          Volta Redonda, RJ
        </Location>

        <NavLink to='/checkout'>
          <ShoppingCartButton>
            <ShoppingCart weight='fill' size={20} />

            <CartItemsCounter>3</CartItemsCounter>
          </ShoppingCartButton>
        </NavLink>
      </div>
    </HeaderContainer>
  );
};
