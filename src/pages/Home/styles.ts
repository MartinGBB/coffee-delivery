import styled from 'styled-components'

export const BannerImg = styled.img`
  width: 100vw;
  margin: auto -10rem;

  @media (max-width: 1024px) {
    margin: auto -2rem;
  }
`
export const HomeContainer = styled.div`
  h1 {
    margin-top: 2rem;
    margin-bottom: 2.125rem;
    color: ${({ theme }) => theme['base-subtitle']};
    font-weight: 800;
    font-size: 2rem;
  }
`
