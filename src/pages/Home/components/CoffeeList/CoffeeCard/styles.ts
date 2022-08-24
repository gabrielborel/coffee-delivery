import styled from 'styled-components';

export const CoffeeCardContainer = styled.div`
  width: 16rem;
  height: 19rem;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 0 1.25rem;

  header,
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  header {
    img {
      margin-top: -1rem;
    }

    div {
      display: flex;
      gap: 0.25rem;

      span {
        background: ${(props) => props.theme['yellow-light']};
        color: ${(props) => props.theme['yellow-dark']};
        padding: 0.25rem 0.5rem;
        border-radius: 100px;
        text-transform: uppercase;
        font-weight: 700;
        font-size: 0.625rem;
        line-height: 1.3;
      }
    }
  }

  main {
    strong {
      font-size: 1.25rem;
      font-weight: 700;
      line-height: 1.6;
      color: ${(props) => props.theme['base-subtitle']};
    }

    p {
      text-align: center;
      font-size: 0.8rem;
      line-height: 1.3;
      color: ${(props) => props.theme['base-label']};
    }
  }

  footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.4375rem;

    span {
      color: ${(props) => props.theme['base-text']};
      font-size: 0.8rem;

      strong {
        color: ${(props) => props.theme['base-text']};
        font-size: 1.75rem;
      }
    }

    div {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      > div {
        display: flex;
        align-items: center;
        gap: 0.25rem;
        border-radius: 6px;
        padding: 0.5rem;
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
        border-radius: 6px;
        line-height: 0;
        padding: 0.5rem;
        background: ${(props) => props.theme['purple-dark']};
        color: ${(props) => props.theme.white};
        cursor: pointer;
        transition: background-color 0.1s;

        &:hover {
          background-color: ${(props) => props.theme.purple};
        }
      }
    }
  }
`;
