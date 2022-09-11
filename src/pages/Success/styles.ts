import styled from 'styled-components'

export const SuccessContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr 3fr;
  row-gap: 2.25rem;
  column-gap: 2rem;

  margin: 11.375rem 10rem 11.375rem 10rem;

  @media (max-width: 1024px) {
    margin: 9rem 2rem 0 2rem;
  }

  @media (max-width: 730px) {
    grid-template-columns: 1fr;
  }

  img {
    grid-row: 2;
    max-width: 100%;

    @media (max-width: 730px) {
      grid-column: 1;
      grid-row: 3;
      margin-bottom: 11.375rem;
    }
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
  padding: 40px;
  border: 1px solid transparent;
  border-image: linear-gradient(to left, #8047f8, #dbac2c);
  border-image-slice: 1;
  border-radius: 6px 36px;

  > div:nth-child(1) {
    & span:nth-child(2)::before {
      content: 'Entrega em';
      font-weight: 400;
      margin-right: 0.2rem;
    }

    > span {
      font-weight: 400;
    }

    > span:nth-child(2) {
      font-weight: 700;
    }
  }

  & div {
    margin-bottom: 2rem;
  }

  & div:last-child {
    margin-bottom: 0;
  }
`

export const DetailsOrder = styled.div`
  display: grid;
  grid-template-columns: 2rem 1fr;
  grid-template-rows: repeat(2, 1fr);
  column-gap: 0.75rem;
  align-items: center;
  line-height: 1;

  svg {
    grid-row: 1/3;
    grid-column: 1;

    color: ${({ theme }) => theme.white};
    background: ${({ theme }) => theme.purple};
    border-radius: 50%;
    padding: 0.5rem;
  }

  span:nth-child(3) {
    font-weight: 700;
  }
`
