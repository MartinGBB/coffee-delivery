import { Minus, Plus } from 'phosphor-react'
import { ButtonsAddToCart } from './styles'

export function QuantityItensButtons({ quantityCoffee, countCoffee }) {
  return (
    <ButtonsAddToCart>
      <button onClick={() => quantityCoffee('sub')}>
        <Minus size={14} weight="bold" />
      </button>
      <span>{countCoffee}</span>
      <button onClick={() => quantityCoffee('add')}>
        <Plus size={14} weight="bold" />
      </button>
    </ButtonsAddToCart>
  )
}
