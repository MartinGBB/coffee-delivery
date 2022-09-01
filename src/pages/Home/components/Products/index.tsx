import coffee from '../../../../assets/coffesImages/Coffee-13.svg'
import {
  ButtonsAddToCart,
  BuyContainer,
  CardContainer,
  CartButton,
  DetailsCoffee,
  PriceContainer,
  TypeCoffee,
} from './styles'

export function Products() {
  return (
    <CardContainer>
      <img src={coffee} alt="" />
      <TypeCoffee>
        <span>Tradicional</span>
        <span>com leite</span>
      </TypeCoffee>
      <DetailsCoffee>
        <h1>Mocaccino</h1>
        <p>Café expresso com calda de chocolate, pouco leite e espuma</p>
      </DetailsCoffee>
      <BuyContainer>
        <PriceContainer>
          <span>R$</span>
          <h1>9,90</h1>
        </PriceContainer>
        <div>
          <ButtonsAddToCart>
            <button>-</button>
            <span>1</span>
            <button>+</button>
          </ButtonsAddToCart>
          <CartButton>Cart</CartButton>
        </div>
      </BuyContainer>
    </CardContainer>
  )
}
