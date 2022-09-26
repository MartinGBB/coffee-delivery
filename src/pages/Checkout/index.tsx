import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CoffeeContext } from '../../components/context/coffeeContext'
import {
  getLocalStorageCoffee,
  getLocalStorageQuantityCoffee,
  setLocalStorageCoffee,
  setLocalStorageQuantityCoffee,
} from '../../utils/localStorageConfig'
import { ConfirmOrder } from './ConfirmOrder'
import { FormPayment } from './FormPayment'
import {
  CheckoutContainer,
  ConfirmOrden,
  SelectedContainer,
  TotalContainer,
} from './styles'

export function Checkout() {
  // const [newQuantity, setNewQuantity] = useState(1)
  const { addCoffee, totalQuantityCoffee, setTotalQuantityCoffee } =
    useContext(CoffeeContext)
  const navigate = useNavigate()

  function confirmOrder() {
    navigate('/success')
  }

  function moreCoffee(newQuantity: number, productName: string | undefined) {
    const productExist = addCoffee.findIndex(
      (cartItem: any) => cartItem.name === productName,
    )
    const newState = Object.assign([{}], getLocalStorageCoffee())
    newState[productExist].productQuantity += newQuantity

    setLocalStorageCoffee(newState)

    setLocalStorageQuantityCoffee(totalQuantityCoffee + newQuantity)
    const getTotalQuantity = getLocalStorageQuantityCoffee()
    setTotalQuantityCoffee(getTotalQuantity)
  }

  function minusCoffee(newQuantity: number, productName: string | undefined) {
    const productExist = addCoffee.findIndex(
      (cartItem: any) => cartItem.name === productName,
    )
    const newState = Object.assign([{}], getLocalStorageCoffee())
    newState[productExist].productQuantity -= newQuantity

    setLocalStorageCoffee(newState)

    setLocalStorageQuantityCoffee(totalQuantityCoffee - newQuantity)
    const getTotalQuantity = getLocalStorageQuantityCoffee()
    setTotalQuantityCoffee(getTotalQuantity)
  }

  // useEffect(() => {

  // }, [addCoffee])

  return (
    <CheckoutContainer>
      <FormPayment />

      <ConfirmOrden>
        <h1>Cafés selecionados</h1>
        <SelectedContainer>
          {addCoffee.map((product) => (
            <ConfirmOrder
              key={product.id}
              product={product}
              moreCoffee={moreCoffee}
              minusCoffee={minusCoffee}
            />
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
