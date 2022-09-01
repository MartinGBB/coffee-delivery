import { ShoppingCart } from 'phosphor-react'
import { Products } from './components/Products'
import {
  BannerContainer,
  TitleBanner,
  ContentBanner,
  HomeContainer,
  DescriptionBanner,
} from './styles'

export function Home() {
  return (
    <div>
      <BannerContainer>
        <ContentBanner>
          <TitleBanner>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </TitleBanner>
          <DescriptionBanner>
            <p>
              <span>
                <ShoppingCart size={22} weight="fill" />
              </span>
              Compra simples e segura
            </p>

            <p>
              <span></span>
              Entrega rápida e rastreada
            </p>

            <p>
              <span></span>
              Embalagem mantém o café intacto
            </p>
            <p>
              <span></span>O café chega fresquinho até você
            </p>
          </DescriptionBanner>
        </ContentBanner>
      </BannerContainer>
      <HomeContainer>
        <h1>Nossos cafés</h1>
        <Products />
      </HomeContainer>
    </div>
  )
}
