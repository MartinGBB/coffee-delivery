import { Trash } from 'phosphor-react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { QuantityItemsButtons } from '../../../components/QuantityItemsButtons/index.js'
import { productsOrder } from '../../../utils/productsData'
import { ProductsData } from '../../Home/components/Products'
import {
  ButtonsContainer,
  CartEmpty,
  Product,
  ProductContainer,
  SelectedContainer,
  TotalContainer,
} from './styles'

export function CoffeeSelected() {
  const [countCoffee, setCountCoffee] = useState(1)

  function handleQuantity(quantity: string) {
    if (quantity === 'add') {
      setCountCoffee((state) => (state += 1))
    } else if (quantity === 'sub') {
      setCountCoffee((state) => (state === 1 ? 1 : (state -= 1)))
    }
  }
  const navigate = useNavigate()

  function confirmOrder() {
    navigate('/success')
  }

  return (
    <SelectedContainer>
      {!productsOrder.length ? (
        <CartEmpty>
          <h1>Não tem produtos no carrinho</h1>
        </CartEmpty>
      ) : (
        productsOrder.map((productCart: ProductsData) => {
          return (
            <div key={productCart.id}>
              <ProductContainer>
                <Product>
                  <img src={productCart.image} alt={productCart.name} />
                  <p>{productCart.name}</p>
                  <ButtonsContainer>
                    <QuantityItemsButtons
                      handleQuantity={handleQuantity}
                      quantity={countCoffee}
                    />
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
          R$ <span>33,20</span>
        </h1>
      </TotalContainer>
      <button onClick={confirmOrder}>CONFIRMAR PEDIDO</button>
    </SelectedContainer>
  )
}
