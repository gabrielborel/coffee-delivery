import styled from 'styled-components';

export const CheckoutFormContainer = styled.div`
  width: 40rem;

  strong {
    font-family: 'Baloo 2', cursive;
    font-size: 1.2rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

  form {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

export const AddressContainer = styled.div`
  background: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
  border-radius: 6px;

  svg {
    color: ${(props) => props.theme['yellow-dark']};
  }

  header {
    display: flex;
    gap: 0.5rem;

    div {
      span {
        color: ${(props) => props.theme['base-subtitle']};
        font-size: 1rem;
        line-height: 1.6;
      }

      p {
        font-size: 0.8rem;
        color: ${(props) => props.theme['base-text']};
        line-height: 1.3;
      }
    }
  }

  main {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    div {
      display: flex;
      gap: 0.75rem;
    }
  }

  footer {
    background: ${(props) => props.theme['base-card']};
    padding: 2.5rem;
    border-radius: 6px;
  }
`;

export const PaymentContainer = styled.div`
  background: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
  border-radius: 6px;

  svg {
    color: ${(props) => props.theme.purple};
  }

  header {
    display: flex;
    gap: 0.5rem;

    div {
      span {
        color: ${(props) => props.theme['base-subtitle']};
        font-size: 1rem;
        line-height: 1.6;
      }

      p {
        font-size: 0.8rem;
        color: ${(props) => props.theme['base-text']};
        line-height: 1.3;
      }
    }
  }

  main {
    margin-top: 2rem;
    display: flex;
    gap: 0.75rem;

    div {
      flex: 1;

      input {
        appearance: none;
        display: none;
        width: 0;
        height: 0;

        &:checked + label {
          border-color: ${(props) => props.theme.purple};
          background-color: ${(props) => props.theme['purple-light']};
        }
      }

      label {
        cursor: pointer;
        font-size: 0.75rem;
        display: flex;
        align-items: center;
        gap: 0.75rem;
        padding: 1rem;
        background: ${(props) => props.theme['base-button']};
        text-transform: uppercase;
        border-radius: 6px;
        border: 1px solid transparent;
        transition: background-color 0.1s;

        &:hover {
          background: ${(props) => props.theme['base-hover']};
        }
      }
    }
  }
`;

export const Input = styled.input<{ width: string; optional?: boolean }>`
  border: 0;
  padding: 0.75rem;
  border-radius: 6px;
  line-height: 1.3;
  background-color: ${(props) => props.theme['base-input']};
  border: 1px solid ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['base-text']};
  width: ${(props) => props.width};

  &::placeholder {
    color: ${(props) => props.theme['base-text']};
  }

  &:focus {
    border-color: 1px solid ${(props) => props.theme['yellow-dark']};
  }

  &::after {
    color: red;
    content: 'hehhahe';
  }

  &:after {
    content: 'Opcional';
    color: red;
  }
`;
