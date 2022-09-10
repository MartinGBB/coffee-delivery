import { productsData } from '../../../utils/productsData'
import { ButtonsAddToCart } from '../../Home/components/Products/styles'
import { Product, ProductsContainer, SelectedContainer } from './styles'

export function CoffeeSelected() {
  return (
    <SelectedContainer>
      {productsData.map((productCart) => {
        return (
          <ProductsContainer key={productCart.id}>
            <Product>
              <img src={productCart.image} alt={productCart.name} />
              <h1>{productCart.name}</h1>
              <ButtonsAddToCart>
                <button>-</button>
                <span>1</span>
                <button>+</button>
              </ButtonsAddToCart>
              <button>REMOVER</button>
            </Product>

            <span>
              R$ <span>{productCart.price}</span>
            </span>
          </ProductsContainer>
        )
      })}
    </SelectedContainer>
  )
}
