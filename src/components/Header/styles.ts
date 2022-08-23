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
  position: relative;
  border: 0;
  border-radius: 6px;
  line-height: 0;
  padding: 0.5rem;
  background: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
  cursor: pointer;
`;

export const CartItemsCounter = styled.span`
  display: block;
  position: absolute;
  right: -10px;
  top: -10px;
  width: 20px;
  height: 20px;
  background: ${(props) => props.theme['yellow-dark']};
  color: ${(props) => props.theme.white};
  border-radius: 100%;
  font-size: 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 0;
  font-weight: bold;
`;
