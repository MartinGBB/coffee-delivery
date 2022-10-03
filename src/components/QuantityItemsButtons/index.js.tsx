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
  const isDisabled = quantity <= 1

  return (
    <ButtonsAddToCart>
      <button
        type="button"
        disabled={isDisabled}
        onClick={() => handleQuantity('sub')}
      >
        <Minus size={14} weight="bold" />
      </button>
      <span>{quantity}</span>
      <button type="button" onClick={() => handleQuantity('add')}>
        <Plus size={14} weight="bold" />
      </button>
    </ButtonsAddToCart>
  )
}
