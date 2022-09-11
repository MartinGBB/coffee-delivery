import styled from 'styled-components'

export const SuccessContainer = styled.div`
  margin: 11.375rem 10rem 11.375rem 10rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr 2fr;
  row-gap: 2.25rem;
  column-gap: 2rem;

  @media (max-width: 1024px) {
    margin: 9rem 2rem 0 2rem;
    gap: 0;
  }

  > div {
    grid-column: 1;

    h1 {
      color: ${({ theme }) => theme['yellow-dark']};
      font-weight: 800;
      font-size: 2rem;
    }

    p {
      color: ${({ theme }) => theme['base-subtitle']};
      font-weight: 400;
      font-size: 1.25rem;
    }
  }
`

export const InfoContainer = styled.div`
  grid-column: 1;
  grid-row: 2;

  /* display: grid;
  grid-template-columns: 2rem 1fr;
  grid-template-rows: repeat(2, 1fr); */
`

export const AddressOrder = styled.div`
  display: grid;
  grid-template-columns: 2rem 1fr;
  grid-template-rows: repeat(2, 1fr);
  column-gap: 0.75rem;

  svg {
    grid-row: 1/3;
    grid-column: 1;

    color: ${({ theme }) => theme.white};
    background: ${({ theme }) => theme.purple};
    border-radius: 50%;
    padding: 0.5rem;
  }

  div {
    grid-column: 2;
    grid-row: 1;
    display: flex;

    span::before {
      content: 'Entrega em';
      font-weight: 400;
      margin-right: 0.2rem;
    }

    & span {
      font-weight: 700;
    }
  }
  span {
    grid-row: 2;
    grid-column: 2;
  }
`
