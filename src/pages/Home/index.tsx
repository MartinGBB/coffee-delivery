import banner from '../../assets/banner.svg'
import { Products } from './components/Products'
import { BannerImg, HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <BannerImg src={banner} alt="" />
      <h1>Nossos cafés</h1>
      <Products />
    </HomeContainer>
  )
}
