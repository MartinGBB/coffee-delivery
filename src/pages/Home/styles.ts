import styled from 'styled-components'

export const HomeContainer = styled.div`
  margin-top: 6.5rem;
`

export const ProductContainer = styled.div`
  margin: auto 10rem;

  > div {
    margin-bottom: 9.81rem;

    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(16rem, 16rem));
    column-gap: 2rem;
    justify-content: space-between;
    row-gap: 2.5rem;

    @media (max-width: 532px) {
      justify-content: center;
    }
  }

  > h1 {
    margin-top: 2rem;
    margin-bottom: 3.375rem;
    color: ${({ theme }) => theme['base-subtitle']};
    font-weight: 800;
    font-size: 2rem;
  }

  @media (max-width: 1024px) {
    margin: auto 2rem;
  }
`
