import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import coffeBanner from '../../assets/coffeBanner.svg'
import { Products } from './components/Products'
import {
  BannerContainer,
  TitleBanner,
  ContentBanner,
  HomeContainer,
  DescriptionBanner,
  ProductContainer,
} from './styles'

export function Home() {
  return (
    <HomeContainer>
      <BannerContainer>
        <ContentBanner>
          <div>
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
                <span>
                  <Package size={22} weight="fill" />
                </span>
                Embalagem mantém o café intacto
              </p>
              <p>
                <span>
                  <Timer size={22} weight="fill" />
                </span>
                Entrega rápida e rastreada
              </p>
              <p>
                <span>
                  <Coffee size={22} weight="fill" />
                </span>
                O café chega fresquinho até você
              </p>
            </DescriptionBanner>
          </div>
          <img src={coffeBanner} alt="" />
        </ContentBanner>
      </BannerContainer>
      <ProductContainer>
        <h1>Nossos cafés</h1>
        <div>
          <Products />
          <Products />
          <Products />
          <Products />
          <Products />
          <Products />
          <Products />
          <Products />
          <Products />
          <Products />
          <Products />
          <Products />
          <Products />
          <Products />
          <Products />
        </div>
      </ProductContainer>
    </HomeContainer>
  )
}
