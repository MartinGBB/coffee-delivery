import { Minus, Plus, Trash } from 'phosphor-react'
import { productsData } from '../../../utils/productsData'
import { ButtonsAddToCart } from '../../Home/components/Products/styles'
import {
  ButtonsContainer,
  Product,
  ProductsContainer,
  SelectedContainer,
} from './styles'

export function CoffeeSelected() {
  return (
    <SelectedContainer>
      {productsData.map((productCart) => {
        return (
          <div key={productCart.id}>
            <ProductsContainer>
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
                  <button>
                    <Trash size={16} />
                    REMOVER
                  </button>
                </ButtonsContainer>
              </Product>

              <span>
                R$ <span>{productCart.price}</span>
              </span>
            </ProductsContainer>
          </div>
        )
      })}
    </SelectedContainer>
  )
}
