import { Trash } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { CoffeeAdd } from '../../../components/context/coffeeContext.js'
import { QuantityItemsButtons } from '../../../components/QuantityItemsButtons/index.js.js'
import { ButtonsContainer, Product, ProductContainer } from './styles'

export interface ProductsProps {
  product: CoffeeAdd
  moreCoffee: (quantity: number, name: string | undefined) => void
  minusCoffee: (quantity: number, name: string | undefined) => void
}

export function ConfirmOrder({
  product,
  moreCoffee,
  minusCoffee,
}: ProductsProps) {
  const [countCoffee, setCountCoffee] = useState(1)

  function handleQuantity(quantity: string) {
    if (quantity === 'add') {
      setCountCoffee((state) => (state += 1))
      moreCoffee(countCoffee, product.name)
    } else if (quantity === 'sub') {
      setCountCoffee((state) => (state === 1 ? 1 : (state -= 1)))
      minusCoffee(countCoffee, product.name)
    }
  }

  useEffect(() => {
    setCountCoffee(1)
  }, [countCoffee])

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
                quantity={product.productQuantity}
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
