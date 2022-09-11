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
  div {
    display: flex;
    gap: 0.2rem;

    & span:nth-child(2) {
      font-weight: 700;
    }
  }
`
