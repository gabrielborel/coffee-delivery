import { CoffeeCardContainer } from './styles';

import { ICoffee } from '../data';
import { Minus, Plus, ShoppingCart } from 'phosphor-react';

interface CoffeeCardProps {
  coffee: ICoffee;
}

export const CoffeeCard = ({ coffee }: CoffeeCardProps) => {
  return (
    <CoffeeCardContainer>
      <header>
        <img src={coffee.image} alt='' />

        <div>
          {coffee.labels.map((label) => (
            <span>{label}</span>
          ))}
        </div>
      </header>

      <main>
        <strong>{coffee.name}</strong>
        <p>{coffee.description}</p>
      </main>

      <footer>
        <span>
          R$ <strong>{coffee.price.toFixed(2)}</strong>
        </span>

        <div>
          <div>
            <Minus weight='bold' size={20} />
            <input type='number' defaultValue={1} />
            <Plus weight='bold' size={20} />
          </div>

          <button>
            <ShoppingCart size={20} weight='fill' />
          </button>
        </div>
      </footer>
    </CoffeeCardContainer>
  );
};
