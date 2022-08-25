import styled from 'styled-components';

export const SuccessContainer = styled.div`
  margin-top: 7rem;

  strong {
    font-family: 'Baloo 2', cursive;
    font-size: 2rem;
    color: ${(props) => props.theme['yellow-dark']};
  }

  p {
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

  > div {
    margin-top: 2.5rem;
    display: flex;
    gap: 6.375rem;

    > div {
      flex: 1;
      padding: 3rem 2.5rem;
      background: linear-gradient(
            ${(props) => props.theme.background},
            ${(props) => props.theme.background}
          )
          padding-box,
        linear-gradient(
            to right,
            ${(props) => props.theme.yellow},
            ${(props) => props.theme.purple}
          )
          border-box;
      border-radius: 6px 36px;
      border: 1px solid transparent;
    }

    img {
      width: 492px;
      height: 293px;
    }
  }
`;

export const Base = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  svg {
    width: 36px;
    height: 36px;
    padding: 0.5rem;
    color: ${(props) => props.theme.white};
    border-radius: 50%;
  }

  p,
  span {
    color: ${(props) => props.theme['base-text']};
    line-height: 1.3;
  }

  p {
    font-size: 1rem;
  }

  span {
    font-weight: bold;
  }
`;

export const Location = styled(Base)`
  margin-bottom: 2rem;

  svg {
    background-color: ${(props) => props.theme['purple']};
  }
`;

export const Time = styled(Base)`
  margin-bottom: 2rem;

  svg {
    background-color: ${(props) => props.theme.yellow};
  }
`;

export const Payment = styled(Base)`
  svg {
    background-color: ${(props) => props.theme['yellow-dark']};
  }
`;
