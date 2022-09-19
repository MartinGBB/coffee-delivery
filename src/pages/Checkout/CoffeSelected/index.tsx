import { Trash } from 'phosphor-react'
import { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
import { QuantityItemsButtons } from '../../../components/QuantityItemsButtons/index.js'
import { ProductsProps } from '../../Home/components/Products'
import {
  ButtonsContainer,
  Product,
  ProductContainer,
  SelectedContainer,
  // TotalContainer,
} from './styles'

export function CoffeeSelected({ product }: ProductsProps) {
  const [countCoffee, setCountCoffee] = useState(1)

  function handleQuantity(quantity: string) {
    if (quantity === 'add') {
      setCountCoffee((state) => (state += 1))
    } else if (quantity === 'sub') {
      setCountCoffee((state) => (state === 1 ? 1 : (state -= 1)))
    }
  }
  // const navigate = useNavigate()

  // function confirmOrder() {
  //   navigate('/success')
  // }

  return (
    <SelectedContainer>
      {/* {!productsOrder.length ? (
        <CartEmpty>
        <h1>Não tem produtos no carrinho</h1>
        </CartEmpty>
      ) : ( */}

      <div>
        {
          <ProductContainer>
            <Product>
              <img src={product.image} alt={product.name} />
              <p>{product.name}</p>
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
              R$ <span>{product.price}</span>
            </span>
          </ProductContainer>
        }
      </div>
      {/* <TotalContainer>
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
      <button onClick={confirmOrder}>CONFIRMAR PEDIDO</button> */}
    </SelectedContainer>
  )
}
