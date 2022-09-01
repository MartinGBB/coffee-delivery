import { Products } from './components/Products'
import { BannerContainer, ContentBanner, HomeContainer } from './styles'

export function Home() {
  return (
    <div>
      <BannerContainer>
        <ContentBanner>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
          <div>
            <span>Compra simples e segura</span>
            <span>Entrega rápida e rastreada</span>
            <span>Embalagem mantém o café intacto</span>
            <span>O café chega fresquinho até você</span>
          </div>
        </ContentBanner>
      </BannerContainer>
      <HomeContainer>
        <h1>Nossos cafés</h1>
        <Products />
      </HomeContainer>
    </div>
  )
}
