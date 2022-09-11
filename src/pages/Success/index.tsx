import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import {
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
        <DeliberyForecast>
          <MapPin size={16} weight="fill" />
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
          <span>Pagamento na entrega</span>
          <span>Cartão de Crédito</span>
        </DeliberyForecast>
      </InfoContainer>
    </SuccessContainer>
  )
}
