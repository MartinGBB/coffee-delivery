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
          <div>
            <span>Entrega em</span>
            <span>Rua João Daniel Martinelli, 102</span>
          </div>
          <span>Farrapos - Porto Alegre, RS</span>
        </AddressOrder>
      </InfoContainer>
    </SuccessContainer>
  )
}
