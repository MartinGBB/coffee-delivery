import styled from 'styled-components'
import banner from '../../../../assets/bannerBackground.svg'

export const BannerContainer = styled.div`
  background: url(${banner}) no-repeat center;
  height: auto;
  width: 100%;
  background-size: cover;
`

export const ContentBanner = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 5.875rem;
  padding-bottom: 7.75rem;
  margin: auto 10rem;

  img {
    max-width: 24rem;

    @media (max-width: 1200px) {
      min-width: calc(24rem - 10%);
    }
    @media (max-width: 800px) {
      display: none;
    }
  }

  svg {
    color: ${({ theme }) => theme.background};
  }

  @media (max-width: 1024px) {
    margin: auto 2rem;
  }
`

export const TitleBanner = styled.div`
  h1 {
    margin-bottom: 1rem;
  }
`
export const DescriptionBanner = styled.div`
  margin-top: 4.25rem;
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: repeat(2, 1fr);
  row-gap: 1.25rem;
  column-gap: 0.3rem;
  justify-content: space-between;

  & p {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
`

export const ICONS_COLORS = {
  yellowDark: 'yellow-dark',
  yellowLight: 'yellow',
  black: 'base-text',
  purple: 'purple',
} as const

interface IconsColors {
  iconsColors: keyof typeof ICONS_COLORS
}

export const IconContainer = styled.span<IconsColors>`
  display: flex;
  padding: 0.5rem;
  color: ${({ theme }) => theme.background};
  background: ${(props) => props.theme[ICONS_COLORS[props.iconsColors]]};
  border-radius: 1000px;
`
