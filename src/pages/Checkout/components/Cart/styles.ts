import styled from 'styled-components';

export const CartContainer = styled.div`
  width: 28rem;

  strong {
    font-family: 'Baloo 2', cursive;
    font-size: 1.2rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

  > div {
    margin-top: 1rem;
    background: ${(props) => props.theme['base-card']};
    padding: 2.5rem 2.5rem 2rem;
    border-radius: 6px 36px;
  }
`;

export const CartItems = styled.div`
  > div {
    display: flex;
    gap: 1.5rem;
    padding-bottom: 2rem;
    margin-bottom: 1.5rem;
    border-bottom: 1px solid ${(props) => props.theme['base-button']};

    img {
      width: 4rem;
      height: 4rem;
    }

    > div {
      p {
        color: ${(props) => props.theme['base-subtitle']};
      }

      > div {
        margin-top: 0.5rem;
        display: flex;
        gap: 0.5rem;

        > div {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          border-radius: 6px;
          padding: 0.25rem 0.35rem;
          width: 4rem;
          background: ${(props) => props.theme['base-button']};

          svg {
            color: ${(props) => props.theme.purple};
            cursor: pointer;
            transition: color 0.1s;

            &:hover {
              color: ${(props) => props.theme['purple-dark']};
            }
          }

          input {
            width: 1.25rem;
            background: transparent;
            border: 0;
            text-align: center;
            -webkit-appearance: textfield;
            -moz-appearance: textfield;
            appearance: textfield;

            &::-webkit-inner-spin-button,
            &::-webkit-outer-spin-button {
              -webkit-appearance: none;
            }
          }
        }

        button {
          border: 0;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.75rem;
          color: ${(props) => props.theme['base-text']};
          text-transform: uppercase;
          padding: 0.5rem;
          background: ${(props) => props.theme['base-button']};
          border-radius: 6px;
          transition: background-color 0.1s;

          &:hover {
            background: ${(props) => props.theme['base-hover']};
          }

          svg {
            color: ${(props) => props.theme.purple};
          }
        }
      }
    }

    strong {
      font-family: 'Roboto', sans-serif;
      margin-left: auto;
      color: ${(props) => props.theme['base-text']};
      font-size: 1rem;
    }
  }
`;

export const CartPrices = styled.div`
  margin-bottom: 1rem;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;

    p {
      font-size: 0.875rem;
      color: ${(props) => props.theme['base-text']};
    }

    strong {
      font-family: 'Roboto', sans-serif;
    }
  }
`;

export const SubmitCartButton = styled.button`
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  opacity: ${(props) => (props.disabled ? 0.7 : 1)};
  border: 0;
  width: 100%;
  padding: 0.8rem;
  color: ${(props) => props.theme.white};
  text-transform: uppercase;
  font-size: 0.875rem;
  font-weight: bold;
  border-radius: 6px;
  background-color: ${(props) => props.theme.yellow};
  transition: background-color 0.1s;

  &:hover:not(:disabled) {
    background-color: ${(props) => props.theme['yellow-dark']};
  }
`;
