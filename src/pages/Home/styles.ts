import styled from 'styled-components'
import banner from '../../assets/bannerBackground.svg'

export const HomeContainer = styled.div`
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
export const BannerContainer = styled.div`
  background: url(${banner}) no-repeat center;
  height: 34rem;
  width: 100%;
  background-size: cover;
`

export const ContentBanner = styled.div`
  padding-top: 5.875rem;
  padding-bottom: 7.75rem;
  margin: auto 10rem;

  @media (max-width: 1024px) {
    margin: auto 2rem;
  }
`
