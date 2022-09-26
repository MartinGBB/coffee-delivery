import { Trash } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { CoffeeAdd } from '../../../components/context/coffeeContext.js'
import { QuantityItemsButtons } from '../../../components/QuantityItemsButtons/index.js.js'
import { ButtonsContainer, Product, ProductContainer } from './styles'

export interface ProductsProps {
  product: CoffeeAdd
  updateQuantityProduct: (
    quantity: number,
    name: string | undefined,
    operator: string,
  ) => void
}

export function ConfirmOrder({
  product,
  updateQuantityProduct,
}: ProductsProps) {
  const [countCoffee, setCountCoffee] = useState(1)

  function handleQuantity(quantity: string) {
    if (quantity === 'add') {
      setCountCoffee((state) => (state += 1))
      updateQuantityProduct(countCoffee, product.name, quantity)
    } else if (quantity === 'sub') {
      setCountCoffee((state) => (state === 1 ? 1 : (state -= 1)))
      updateQuantityProduct(countCoffee, product.name, quantity)
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
