import { CoffeeCard, CoffeeListContainer, CoffeesContainer } from './styles';
import { CoffeesList } from './data';
import { ShoppingCart, Plus, Minus } from 'phosphor-react';

export const CoffeeList = () => {
  return (
    <CoffeesContainer>
      <strong>Nossos cafés</strong>

      <CoffeeListContainer>
        {CoffeesList.map((coffee) => (
          <CoffeeCard key={coffee.id}>
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
          </CoffeeCard>
        ))}
      </CoffeeListContainer>
    </CoffeesContainer>
  );
};
