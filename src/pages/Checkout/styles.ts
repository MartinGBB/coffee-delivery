import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  form {
    margin: 11.375rem 10rem 11.375rem 10rem;
    display: grid;
    grid-template-columns: 2fr auto;
    grid-template-rows: auto auto;
    row-gap: 0.75rem;
    column-gap: 2rem;

    @media (max-width: 1024px) {
      margin: 9rem 2rem 0 2rem;
      gap: 0;
      row-gap: 0.75rem;
    }
  }
`
export const ConfirmOrden = styled.div`
  grid-column: 2;
  grid-row: 1/3;

  @media (max-width: 1024px) {
    grid-column: 1;
    grid-row: 3;
  }

  > h1,
  h2 {
    font-weight: 700;
    font-size: 1.125rem;
    margin-bottom: 0.9375rem;
    color: ${({ theme }) => theme['base-subtitle']};
  }

  h2 {
    margin: 0 1rem 2.25rem 1rem;
  }
`

export const SelectedContainer = styled.div`
  background: ${({ theme }) => theme['base-card']};
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  border-radius: 6px 44px;
  margin-bottom: 11.375rem;

  > div:not(:nth-last-child(2)) {
    margin-bottom: 1.5rem;
    border-bottom: 1px solid ${({ theme }) => theme['base-button']};
  }

  > button {
    padding: 0.75rem 0.5rem;
    background: ${({ theme }) => theme.yellow};
    border: none;
    color: ${({ theme }) => theme.white};
    line-height: 1.4rem;
    border-radius: 6px;
    cursor: pointer;
  }
`

export const TotalContainer = styled.div`
  display: grid;
  justify-content: space-between;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 0.75rem;
  margin-bottom: 1.5rem;

  span:nth-child(2n),
  h1:nth-child(2n) {
    display: flex;
    justify-content: end;
    flex-direction: row;
    gap: 0.1rem;
  }

  h1 {
    color: ${({ theme }) => theme['base-subtitle']};
    font-size: 1.25rem;
  }
`
