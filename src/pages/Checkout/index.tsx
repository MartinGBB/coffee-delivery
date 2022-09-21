import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CoffeeContext } from '../../components/context/coffeeContext'
// import { productsOrder } from '../../utils/productsData'
import { ConfirmOrder } from './ConfirmOrder'
import { FormPayment } from './FormPayment'
import {
  CheckoutContainer,
  ConfirmOrden,
  SelectedContainer,
  TotalContainer,
} from './styles'

export function Checkout() {
  const { addCoffee } = useContext(CoffeeContext)
  const navigate = useNavigate()

  function confirmOrder() {
    navigate('/success')
  }

  return (
    <CheckoutContainer>
      <FormPayment />

      <ConfirmOrden>
        <h1>Cafés selecionados</h1>
        <SelectedContainer>
          {addCoffee.map((product) => (
            <ConfirmOrder key={product.id} product={product} />
          ))}

          <TotalContainer>
            <span>Total de itens</span>
            <span>
              R$ <span>29,70</span>
            </span>
            <span>Entrega</span>
            <span>
              R$ <span>3,50</span>
            </span>
            <h1>Total</h1>
            <h1>
              R$ <span>33,20</span>
            </h1>
          </TotalContainer>
          <button onClick={confirmOrder}>CONFIRMAR PEDIDO</button>
        </SelectedContainer>
      </ConfirmOrden>
    </CheckoutContainer>
  )
}
