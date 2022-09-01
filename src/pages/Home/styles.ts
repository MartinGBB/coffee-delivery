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
  height: auto;
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

export const TitleBanner = styled.div`
  background-color: red;

  h1 {
    margin-bottom: 1rem;
  }
`

export const DescriptionBanner = styled.div`
  margin-top: 4.25rem;
  display: flex;
  justify-content: space-between;

  div {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }
`
