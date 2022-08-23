import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 84px;
    height: 40px;
  }

  div {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
`;

export const Location = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  background: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme['purple-dark']};
  border-radius: 6px;
  font-size: 0.875rem;

  svg {
    color: ${(props) => props.theme.purple};
  }
`;

export const ShoppingCartButton = styled.button`
  border: 0;
  border-radius: 6px;
  line-height: 0;
  padding: 0.5rem;
  background: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
  cursor: pointer;
`;
