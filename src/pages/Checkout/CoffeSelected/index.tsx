import { Minus, Plus, Trash } from 'phosphor-react'
import { productsData } from '../../../utils/productsData'
import { ButtonsAddToCart } from '../../Home/components/Products/styles'
import {
  ButtonsContainer,
  Product,
  ProductContainer,
  SelectedContainer,
  TotalContainer,
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
      <TotalContainer>
        <span>Total de itens</span>
        <span>
          R$ <span>29,70</span>
        </span>
        <span>Entrega</span>
        <span>
          R$ <span>3,50</span>
        </span>
        <span>Total</span>
        <span>
          R$ <span>33,20</span>
        </span>
        <button>CONFIRMAR PEDIDO</button>
      </TotalContainer>
    </SelectedContainer>
  )
}
