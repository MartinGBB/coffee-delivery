import { Minus, Plus } from 'phosphor-react'
import { ButtonsAddToCart } from './styles'

interface quantityItensProps {
  quantity: number
  handleQuantity: (string: 'sub' | 'add') => void
}

export function QuantityItemsButtons({
  handleQuantity,
  quantity,
}: quantityItensProps) {
  return (
    <ButtonsAddToCart>
      <button onClick={() => handleQuantity('sub')}>
        <Minus size={14} weight="bold" />
      </button>
      <span>{quantity}</span>
      <button onClick={() => handleQuantity('add')}>
        <Plus size={14} weight="bold" />
      </button>
    </ButtonsAddToCart>
  )
}
