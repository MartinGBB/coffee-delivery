import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'
import { useState } from 'react'
import uuid from 'react-uuid'
import { QuantityItensButtons } from '../../../../components/QuantityItensButtons/index.js'
import {
  ButtonsAddToCart,
  BuyContainer,
  CardContainer,
  CartButton,
  DetailsCoffee,
  PriceContainer,
  TypeCoffee,
} from './styles'

export interface ProductsData {
  id: string | undefined
  type: string[]
  name: string | undefined
  price: string | undefined
  description: string | undefined
  image: string | undefined
}

interface ProductsProps {
  products: ProductsData[]
}

export function Products({ products }: ProductsProps) {
  const [countCoffee, setCountCoffee] = useState(1)
  // const [addCoffee, setAddCoffee] = useState('')

  function quantityCoffee(quantity: string) {
    if (quantity === 'add') {
      setCountCoffee((state) => (state += 1))
    } else if (quantity === 'sub') {
      setCountCoffee((state) => (state === 1 ? 1 : (state -= 1)))
    }
  }

  return (
    <CardContainer>
      {products.map((product: ProductsData) => {
        return (
          <div key={product.id}>
            <img src={product.image} alt={product.name} />
            <TypeCoffee>
              {product.type.map((coffeType) => (
                <span key={uuid()}>{coffeType}</span>
              ))}
            </TypeCoffee>
            <DetailsCoffee>
              <h1>{product.name}</h1>
              <p>{product.description}</p>
            </DetailsCoffee>
            <BuyContainer>
              <PriceContainer>
                <span>R$</span>
                <h1>{product.price}</h1>
              </PriceContainer>

              {/* <ButtonsAddToCart>
                <button
                  onClick={() => quantityCoffee(product.id, 'sub')}
                  name="sub"
                >
                  <Minus size={14} weight="bold" />
                </button>
                <span>{countCoffee}</span>
                <button
                  onClick={() => quantityCoffee(product.id, 'add')}
                  name="add"
                >
                  <Plus size={14} weight="bold" />
                </button>
              </ButtonsAddToCart> */}
              <QuantityItensButtons
                quantityCoffee={quantityCoffee}
                countCoffee={countCoffee}
              />
              <CartButton>
                <ShoppingCartSimple size={22} weight="fill" />
              </CartButton>
            </BuyContainer>
          </div>
        )
      })}
    </CardContainer>
  )
}
