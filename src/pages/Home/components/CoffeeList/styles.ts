import styled from 'styled-components';

export const CoffeesContainer = styled.section`
  strong {
    color: ${(props) => props.theme['base-title']};
    font-family: 'Baloo 2', cursive;
    font-size: 2rem;
  }
`;

export const CoffeeListContainer = styled.div`
  margin-top: 3rem;
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(4, 1fr);
`;
