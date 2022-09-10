import { Minus, Plus } from 'phosphor-react'
import { productsData } from '../../../utils/productsData'
import { ButtonsAddToCart } from '../../Home/components/Products/styles'
import { ButtonsContainer, Product, ProductsContainer, SelectedContainer } from './styles'

export function CoffeeSelected() {
  return (
    <SelectedContainer>
      {productsData.map((productCart) => {
        return (
          <ProductsContainer key={productCart.id}>
            <Product>
              <img src={productCart.image} alt={productCart.name} />
              <h1>{productCart.name}</h1>
              <ButtonsContainer>
                <ButtonsAddToCart>
                  <button>
                    <Minus size={14} weight="bold" />
                  </button>
                  <span>1</span>
                  <button>
                    <Plus size={14} weight="bold" />
                  </button>
                </ButtonsAddToCart>
              <button>REMOVER</button>
              </ButtonsContainer>
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
