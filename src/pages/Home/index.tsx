import { useContext } from 'react'
import { CoffeeContext } from '../../components/context/coffeeContext'
import { Banner } from './components/Banner'
import { Products } from './components/Products'
import { HomeContainer, ProductContainer } from './styles'

export function Home() {
  const { coffeeData } = useContext(CoffeeContext)
  return (
    <HomeContainer>
      <Banner />
      <ProductContainer>
        <h1>Nossos cafés</h1>
        <div>
          {coffeeData.map((product) => (
            <Products key={product.id} product={product} />
          ))}
        </div>
      </ProductContainer>
    </HomeContainer>
  )
}
