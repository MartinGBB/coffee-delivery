import styled from 'styled-components'

export const SelectedContainer = styled.div`
  background: ${({ theme }) => theme['base-card']};
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  border-radius: 6px 44px;

  > div {
    margin-bottom: 1.5rem;
    border-bottom: 1px solid ${({ theme }) => theme['base-button']};
  }
`

export const ProductsContainer = styled.div`
  display: flex;
  height: 5rem;
  margin-bottom: 1.5rem;
  justify-content: space-between;
  padding: 0.5rem 0.25rem;
  margin-bottom: 1.5rem;
`

export const Product = styled.div`
  display: grid;
  grid-template-columns: 5rem 2fr;
  grid-template-rows: repeat(2, 1fr);
  column-gap: 1.25rem;

  img {
    grid-column: 1;
    grid-row: 1/3;
    /* width: 4rem; */
    /* width: 100%; */
    height: 100%;
  }
`
export const ButtonsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  grid-row: 2;

  grid-column: 2;
`
