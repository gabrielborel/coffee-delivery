import { HomeContainer } from './styles';
import { HeroBanner } from './components/HeroBanner';
import { BlurBackground } from './components/HeroBanner/styles';
import { CoffeeList } from './components/CoffeeList';

export const Home = () => {
  return (
    <HomeContainer>
      <BlurBackground />
      <HeroBanner />

      <CoffeeList />
    </HomeContainer>
  );
};
