import styled from 'styled-components'

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(16rem, 16rem));
  column-gap: 2rem;
  justify-content: space-between;
  row-gap: 2.5rem;

  @media (max-width: 532px) {
    justify-content: center;
  }

  div {
    background: ${({ theme }) => theme['base-card']};
    max-width: 16rem;
    height: auto;
    border-radius: 6px 36px;
    text-align: center;

    img {
      position: relative;
      left: calc(50% - 16rem / 2);
      top: -20px;
      bottom: 0;
    }
  }
`
export const TypeCoffee = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: -20px;
  gap: 0.25rem;
  color: ${({ theme }) => theme['yellow-dark']};

  span {
    font-size: 0.625rem;
    font-weight: 700;
    border-radius: 100px;
    padding: 4px 8px;
    background: ${({ theme }) => theme['yellow-light']};
  }
`
export const DetailsCoffee = styled.div`
  margin: 0 1.25rem 2.06rem 1.25rem;

  h1 {
    margin: 1rem 0 0.5rem;
    font-size: 1.25rem;
    font-weight: 700;
    color: ${({ theme }) => theme['base-subtitle']};
  }

  p {
    color: ${({ theme }) => theme['base-label']};
    font-size: 0.875rem;
  }
`

export const BuyContainer = styled.div`
  display: flex;
  max-height: 2.375rem;
  margin: 0 1.25rem 1.25rem 1.25rem;
  justify-content: space-between;

  div {
    display: flex;
    gap: 0.5rem;
    flex-direction: row;
  }
`
export const PriceContainer = styled.div`
  display: flex;
  gap: 0.2rem;

  h1 {
    color: ${({ theme }) => theme['base-text']};
    font-weight: 800;
    margin: 0;
    display: flex;
    align-items: center;
  }

  span {
    display: flex;
    align-items: center;
  }
`
export const ButtonsAddToCart = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem !important;
  background: ${({ theme }) => theme['base-button']};
  padding: 0.5rem;
  justify-content: center;
  border-radius: 6px;

  span {
    width: 1.25rem;
    height: 1.32rem;
    color: ${({ theme }) => theme['base-title']};
  }

  button {
    border: none;
    color: ${({ theme }) => theme.purple};
    background: transparent;
    cursor: pointer;

    :hover {
      color: ${({ theme }) => theme['purple-dark']};
    }
  }
`

export const CartButton = styled.button`
  border: none;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-radius: 6px;
  color: ${({ theme }) => theme.background};
  background: ${({ theme }) => theme['purple-dark']};
  cursor: pointer;

  :hover {
    background: ${({ theme }) => theme.purple};
  }
`
