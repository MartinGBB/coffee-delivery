import { MapPin } from 'phosphor-react'
import { AddressOrder, InfoContainer, SuccessContainer } from './styles'

export function Success() {
  return (
    <SuccessContainer>
      <div>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </div>

      <InfoContainer>
        <AddressOrder>
          <MapPin size={16} weight="fill" />
          <div>
            <span>Rua João Daniel Martinelli, 102</span>
          </div>
          <span>Farrapos - Porto Alegre, RS</span>
        </AddressOrder>
      </InfoContainer>
    </SuccessContainer>
  )
}
