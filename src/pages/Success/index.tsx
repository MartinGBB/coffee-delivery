import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import {
  AddressOrder,
  DeliberyForecast,
  InfoContainer,
  SuccessContainer,
} from './styles'

export function Success() {
  return (
    <SuccessContainer>
      <div>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </div>

      <InfoContainer>
        {/* <AddressOrder>
          <MapPin size={16} weight="fill" />
          <div>
            <span>Rua João Daniel Martinelli, 102</span>
          </div>
          <span>Farrapos - Porto Alegre, RS</span>
        </AddressOrder> */}

        <DeliberyForecast>
          <Timer size={16} weight="fill" />
          <span>Rua João Daniel Martinelli, 102</span>
          <span>Farrapos - Porto Alegre, RS</span>
        </DeliberyForecast>

        <DeliberyForecast>
          <Timer size={16} weight="fill" />
          <span>Previsão de entrega</span>
          <span>20 min - 30 min</span>
        </DeliberyForecast>

        <DeliberyForecast>
          <CurrencyDollar size={16} weight="regular" />
          <span>Previsão de entrega</span>
          <span>20 min - 30 min</span>
        </DeliberyForecast>

      </InfoContainer>
    </SuccessContainer>
  )
}
