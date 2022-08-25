import styled from 'styled-components';

export const CheckoutContainer = styled.main`
  margin-top: 4rem;
  display: flex;
  gap: 2rem;
`;

export const CheckoutForm = styled.form`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Cart = styled.div`
  width: 28rem;
  background: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
  border-radius: 6px;
`;
