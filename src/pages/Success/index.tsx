import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { DetailsOrder, InfoContainer, SuccessContainer } from './styles'
import successImg from '../../assets/successImg.svg'
import { useContext, useEffect } from 'react'
import { CoffeeContext } from '../../components/context/coffeeContext'

export function Success() {
  const { orderDelivery } = useContext(CoffeeContext)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const { cidade, numero, bairro, payment, rua, uf } = orderDelivery[0]
  return (
    <SuccessContainer>
      <div>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </div>
      <InfoContainer>
        <DetailsOrder iconsColors="purple">
          <MapPin size={16} weight="fill" />
          <span>{`${rua}, ${numero}`}</span>
          <span>{`${bairro} - ${cidade}, ${uf}`}</span>
        </DetailsOrder>

        <DetailsOrder iconsColors="yellowLight">
          <Timer size={16} weight="fill" />
          <span>Previsão de entrega</span>
          <span>20 min - 30 min</span>
        </DetailsOrder>

        <DetailsOrder iconsColors="yellowDark">
          <CurrencyDollar size={16} weight="regular" />
          <span>Pagamento na entrega</span>
          <span>{`${payment}`}</span>
        </DetailsOrder>
      </InfoContainer>
      <img src={successImg} alt="" />
    </SuccessContainer>
  )
}
