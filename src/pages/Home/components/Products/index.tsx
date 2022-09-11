import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'
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
  return (
    <CardContainer>
      {products.map((product: ProductsData) => {
        return (
          <div key={product.id}>
            <img src={product.image} alt={product.name} />
            <TypeCoffee>
              {product.type.map((coffeType, i) => {
                return <span key={i}>{coffeType}</span>
              })}
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
                  <button>
                    <Minus size={14} weight="bold" />
                  </button>
                  <span>1</span>
                  <button>
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
