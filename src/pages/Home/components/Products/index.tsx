import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'
import uuid from 'react-uuid'
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

let count = 1
export function Products({ products }: ProductsProps) {
  function quantityCoffee(event) {
    if (event.target.parentElement.name) {
      count += 1
    } else if (event.target.parentElement.name) {
      count -= 1
    }
    // console.log(event.target.parentElement.name)
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

              <div>
                <ButtonsAddToCart>
                  <button onClick={quantityCoffee} name="sub">
                    <Minus size={14} weight="bold" />
                  </button>
                  <span>{1}</span>
                  <button onClick={quantityCoffee} name="add">
                    <Plus size={14} weight="bold" />
                  </button>
                </ButtonsAddToCart>
                <CartButton>
                  <ShoppingCartSimple size={22} weight="fill" />
                </CartButton>
              </div>
            </BuyContainer>
          </div>
        )
      })}
    </CardContainer>
  )
}
