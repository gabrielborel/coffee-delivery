import styled from 'styled-components';

export const BlurBackground = styled.section`
  height: 34rem;
  width: 100vw;
  background-image: url('/src/assets/background.svg');
  background-repeat: no-repeat;
  background-size: cover;
  position: fixed;
  left: 0;
`;

export const HeroContainer = styled.div`
  max-width: 74rem;
  margin: 0 auto;
  padding: 10rem 2rem;
  display: flex;
  gap: 3.5rem;
  align-items: center;
  justify-content: space-between;

  > div {
    strong {
      font-family: 'Baloo 2', cursive;
      color: ${(props) => props.theme['base-title']};
      font-size: 3rem;
      line-height: 1.3;
      display: block;
      margin-bottom: 1rem;
    }

    p {
      color: ${(props) => props.theme['base-subtitle']};
      font-size: 1.25rem;
      line-height: 1.3;
      font-weight: 400;
    }

    div {
      margin-top: 4rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;

      span {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        margin-bottom: 1rem;

        svg {
          width: 32px;
          height: 32px;
          padding: 8px;
          border-radius: 50%;
          color: ${(props) => props.theme.white};
        }

        &:nth-child(1) {
          svg {
            background: ${(props) => props.theme['yellow-dark']};
          }
        }

        &:nth-child(2) {
          svg {
            background: ${(props) => props.theme['base-text']};
          }
        }

        &:nth-child(3) {
          svg {
            background: ${(props) => props.theme.yellow};
          }
        }

        &:nth-child(4) {
          svg {
            background: ${(props) => props.theme.purple};
          }
        }
      }
    }
  }
`;
