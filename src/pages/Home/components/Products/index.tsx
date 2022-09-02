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
  id: Date
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
          <div key={product.id.toString()}>
            <img src={product.image} alt={product.name} />
            <TypeCoffee>
              <span>Tradicional</span>
              <span>com leite</span>
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

    // <CardContainer>
    //   <div>
    //     <img src={coffee} alt="" />
    //     <TypeCoffee>
    //       <span>Tradicional</span>
    //       <span>com leite</span>
    //     </TypeCoffee>
    //     <DetailsCoffee>
    //       <h1>Mocaccino</h1>
    //       <p>Café expresso com calda de chocolate, pouco leite e espuma</p>
    //     </DetailsCoffee>
    //     <BuyContainer>
    //       <PriceContainer>
    //         <span>R$</span>
    //         <h1>9,90</h1>
    //       </PriceContainer>
    //       <div>
    //         <ButtonsAddToCart>
    //           <button>
    //             <Minus size={14} weight="bold" />
    //           </button>
    //           <span>1</span>
    //           <button>
    //             <Plus size={14} weight="bold" />
    //           </button>
    //         </ButtonsAddToCart>
    //         <CartButton>
    //           <ShoppingCartSimple size={22} weight="fill" />
    //         </CartButton>
    //       </div>
    //     </BuyContainer>
    //   </div>
    //   <div>
    //     <img src={coffee} alt="" />
    //     <TypeCoffee>
    //       <span>Tradicional</span>
    //       <span>com leite</span>
    //     </TypeCoffee>
    //     <DetailsCoffee>
    //       <h1>Mocaccino</h1>
    //       <p>Café expresso com calda de chocolate, pouco leite e espuma</p>
    //     </DetailsCoffee>
    //     <BuyContainer>
    //       <PriceContainer>
    //         <span>R$</span>
    //         <h1>9,90</h1>
    //       </PriceContainer>
    //       <div>
    //         <ButtonsAddToCart>
    //           <button>
    //             <Minus size={14} weight="bold" />
    //           </button>
    //           <span>1</span>
    //           <button>
    //             <Plus size={14} weight="bold" />
    //           </button>
    //         </ButtonsAddToCart>
    //         <CartButton>
    //           <ShoppingCartSimple size={22} weight="fill" />
    //         </CartButton>
    //       </div>
    //     </BuyContainer>
    //   </div>
    // </CardContainer>
  )
}
