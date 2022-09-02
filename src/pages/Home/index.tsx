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
  IconContainer,
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
                <IconContainer iconsColors="yellowDark">
                  <ShoppingCart size={22} weight="fill" />
                </IconContainer>
                Compra simples e segura
              </p>
              <p>
                <IconContainer iconsColors="black">
                  <Package size={22} weight="fill" />
                </IconContainer>
                Embalagem mantém o café intacto
              </p>
              <p>
                <IconContainer iconsColors="yellowLight">
                  <Timer size={22} weight="fill" />
                </IconContainer>
                Entrega rápida e rastreada
              </p>
              <p>
                <IconContainer iconsColors="purple">
                  <Coffee size={22} weight="fill" />
                </IconContainer>
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
