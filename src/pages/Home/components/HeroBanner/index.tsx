import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react';
import { BlurBackground, HeroContainer } from './styles';
import heroCoffeSVG from '../../../../assets/hero.svg';

export const HeroBanner = () => {
  return (
    <HeroContainer>
      <div>
        <strong>Encontre o café perfeito para qualquer hora do dia</strong>
        <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>

        <div>
          <span>
            <ShoppingCart size={16} weight='fill' />
            Compra simples e segura
          </span>
          <span>
            <Package size={16} weight='fill' />
            Embalagem mantém o café intacto
          </span>
          <span>
            <Timer size={16} weight='fill' />
            Entrega rápida e rastreada
          </span>
          <span>
            <Coffee size={16} weight='fill' />O café chega fresquinho até você
          </span>
        </div>
      </div>

      <img src={heroCoffeSVG} alt='' />
    </HeroContainer>
  );
};
