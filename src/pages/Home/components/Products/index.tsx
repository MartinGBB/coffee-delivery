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

interface ProductsData {
  id: string
  type: string[]
  name: string
  price: string
  description: string
  image: string
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
              {product.type.map((coffeType) => {
                return <span key={product.id}>{coffeType}</span>
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
