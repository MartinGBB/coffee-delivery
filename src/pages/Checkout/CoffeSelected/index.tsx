import { Minus, Plus, Trash } from 'phosphor-react'
import { useNavigate } from 'react-router-dom'
import { productsData } from '../../../utils/productsData'
import { ProductsData } from '../../Home/components/Products'
import { ButtonsAddToCart } from '../../Home/components/Products/styles'
import {
  ButtonsContainer,
  CartEmpty,
  Product,
  ProductContainer,
  SelectedContainer,
  TotalContainer,
} from './styles'

export function CoffeeSelected() {
  const navigate = useNavigate()

  function confirmOrder() {
    navigate('/success')
  }

  return (
    <SelectedContainer>
      {!productsData.length ? (
        <CartEmpty>
          <h1>Não tem produtos no carrinho</h1>
        </CartEmpty>
      ) : (
        productsData.map((productCart: ProductsData) => {
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
        })
      )}
      <TotalContainer>
        <span>Total de itens</span>
        <span>
          R$ <span>29,70</span>
        </span>
        <span>Entrega</span>
        <span>
          R$ <span>3,50</span>
        </span>
        <h1>Total</h1>
        <h1>
          R$ <h1>33,20</h1>
        </h1>
      </TotalContainer>
      <button onClick={confirmOrder}>CONFIRMAR PEDIDO</button>
    </SelectedContainer>
  )
}
