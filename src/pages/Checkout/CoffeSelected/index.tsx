import { Trash } from 'phosphor-react'
import { useState } from 'react'
import { QuantityItemsButtons } from '../../../components/QuantityItemsButtons/index.js'
import { ProductsProps } from '../../Home/components/Products'
import { ButtonsContainer, Product, ProductContainer } from './styles'

export function CoffeeSelected({ product }: ProductsProps) {
  const [countCoffee, setCountCoffee] = useState(1)

  function handleQuantity(quantity: string) {
    if (quantity === 'add') {
      setCountCoffee((state) => (state += 1))
    } else if (quantity === 'sub') {
      setCountCoffee((state) => (state === 1 ? 1 : (state -= 1)))
    }
  }

  return (
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
  )
}
