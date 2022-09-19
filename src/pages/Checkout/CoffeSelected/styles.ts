import styled from 'styled-components'

export const ProductContainer = styled.div`
  display: flex;
  height: 5rem;
  margin-bottom: 1.5rem;
  justify-content: space-between;
  padding: 0.5rem 0.25rem;

  > span {
    font-weight: 700;
    color: ${({ theme }) => theme['base-text']};
  }
`

export const Product = styled.div`
  display: grid;
  grid-template-columns: 5rem 2fr;
  grid-template-rows: repeat(2, 1fr);
  column-gap: 1.25rem;
  width: 80%;

  > p {
    color: ${({ theme }) => theme['base-title']};
  }

  img {
    grid-column: 1;
    grid-row: 1/3;
    height: 100%;
  }
`
export const ButtonsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  grid-row: 2;
  grid-column: 2;

  > button {
    border: none;
    padding: 0.5rem;
    background: ${({ theme }) => theme['base-button']};
    border-radius: 6px;
    color: ${({ theme }) => theme['base-text']};
    font-size: 0.75rem;
    display: flex;
    align-items: center;
    gap: 0.25rem;

    & svg {
      color: ${({ theme }) => theme.purple};
    }
  }
`
