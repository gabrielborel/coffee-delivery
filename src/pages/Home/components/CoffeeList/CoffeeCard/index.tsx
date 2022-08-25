import { CoffeeCardContainer } from './styles';

import { ICoffee } from '../data';
import { Minus, Plus, ShoppingCart } from 'phosphor-react';
import { useState } from 'react';
import { useCart } from '../../../../../contexts/CartContext';

interface CoffeeCardProps {
  coffee: ICoffee;
}

export const CoffeeCard = ({ coffee }: CoffeeCardProps) => {
  const [coffeeQuantity, setCoffeQuantity] = useState(1);
  const { addToCart } = useCart();

  const increaseCoffeeQuantity = () => setCoffeQuantity((state) => state + 1);
  const decreaseCoffeeQuantity = () => setCoffeQuantity((state) => state - 1);

  const handleAddToCart = () => {
    coffee.quantity = coffeeQuantity;
    addToCart(coffee);
  };

  return (
    <CoffeeCardContainer>
      <header>
        <img src={coffee.image} alt='' />

        <div>
          {coffee.labels.map((label, id) => (
            <span key={id}>{label}</span>
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
            <Minus weight='bold' size={20} onClick={decreaseCoffeeQuantity} />
            <input
              type='number'
              value={coffeeQuantity}
              onChange={(e) => setCoffeQuantity(Number(e.target.value))}
            />
            <Plus weight='bold' size={20} onClick={increaseCoffeeQuantity} />
          </div>

          <button onClick={handleAddToCart}>
            <ShoppingCart size={20} weight='fill' />
          </button>
        </div>
      </footer>
    </CoffeeCardContainer>
  );
};
