import { Minus, Plus, Trash } from 'phosphor-react'
import { productsData } from '../../../utils/productsData'
import { ButtonsAddToCart } from '../../Home/components/Products/styles'
import {
  ButtonsContainer,
  Product,
  ProductContainer,
  SelectedContainer,
} from './styles'

export function CoffeeSelected() {
  return (
    <SelectedContainer>
      {productsData.map((productCart) => {
        return (
          <div key={productCart.id}>
            <ProductContainer>
              <Product>
                <img src={productCart.image} alt={productCart.name} />
                <p>{productCart.name}</p>
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
            </ProductContainer>
          </div>
        )
      })}
    </SelectedContainer>
  )
}
