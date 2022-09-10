import styled from 'styled-components'

export const SelectedContainer = styled.div`
  background: ${({ theme }) => theme['base-card']};
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  border-radius: 6px 44px;
`

export const ProductsContainer = styled.div`
  display: flex;
  height: 5rem;
  margin-bottom: 1.5rem;
  padding: 0.5px 0.25px;
  justify-content: space-between;
  /* outline: 1px solid black; */
`

export const Product = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: repeat(2, 1fr);

  img {
    grid-column: 1;
    grid-row: 1/3;
    /* width: 4rem; */
    /* object-fit: contain; */
    width: 100%;
    height: 100%;
  }
`
export const ButtonsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  grid-row: 2;

  grid-column: 2;
`
