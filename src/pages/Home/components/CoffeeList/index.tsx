import { CoffeeListContainer, CoffeesContainer } from './styles';
import { CoffeesList } from './data';
import { CoffeeCard } from './CoffeeCard';

export const CoffeeList = () => {
  return (
    <CoffeesContainer>
      <strong>Nossos cafés</strong>

      <CoffeeListContainer>
        {CoffeesList.map((coffee) => (
          <CoffeeCard coffee={coffee} key={coffee.id} />
        ))}
      </CoffeeListContainer>
    </CoffeesContainer>
  );
};
