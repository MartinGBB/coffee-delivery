import styled from 'styled-components'

export const CardContainer = styled.div`
  background: ${({ theme }) => theme['base-card']};
  width: 16rem;
  height: 19.375rem;
  position: absolute;
  border-radius: 6px 36px;
  text-align: center;

  img {
    position: relative;
    left: calc(50% - 240px / 2);
    top: -20px;
    bottom: 0;
  }
`
export const TypeCoffee = styled.div`
  display: flex;
  justify-content: center;
  margin-top: -20px;
  gap: 4px;
  color: ${({ theme }) => theme['yellow-dark']};

  span {
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
  margin: 0 1.25rem 0 1.25rem;
  justify-content: space-between;
`
export const PriceContainer = styled.div`
  display: flex;
  gap: 0.2rem;
  h1 {
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
  gap: 0.25rem;
  background: ${({ theme }) => theme['base-button']};
  padding: 0.5rem;
  justify-content: center;

  span {
    width: 1.25rem;
    height: 1.32rem;
  }

  button {
    border: none;
    color: ${({ theme }) => theme.purple};
    background: transparent;
  }
`
