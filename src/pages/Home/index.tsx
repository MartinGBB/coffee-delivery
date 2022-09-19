import { productsData } from '../../utils/productsData'
import { Banner } from './components/Banner'
import { Products } from './components/Products'
import { HomeContainer, ProductContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Banner />
      <ProductContainer>
        <h1>Nossos cafés</h1>
        <div>
          {/* <Products products={productsData} /> */}
          {productsData.map((product) => (
            <Products key={product.id} product={product} />
          ))}
        </div>
      </ProductContainer>
    </HomeContainer>
  )
}
