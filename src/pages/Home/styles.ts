import styled from 'styled-components'

export const HomeContainer = styled.div`
  margin-top: 6.5rem;
`

export const ProductContainer = styled.div`
  > div {
    margin-bottom: 9.81rem;
  }

  > h1 {
    margin-top: 2rem;
    margin-bottom: 3.375rem;
    color: ${({ theme }) => theme['base-subtitle']};
    font-weight: 800;
    font-size: 2rem;
  }
  margin: auto 10rem;

  @media (max-width: 1024px) {
    margin: auto 2rem;
  }
`
